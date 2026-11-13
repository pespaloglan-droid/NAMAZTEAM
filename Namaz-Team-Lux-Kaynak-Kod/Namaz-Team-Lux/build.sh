#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")"
SDK="${ANDROID_HOME:-$PWD/tools/android}"
BT="$SDK/build-tools/35.0.0"
JAR="$SDK/platforms/android-35/android.jar"
mkdir -p build/classes build/dex dist
"$BT/aapt" package -f -M app/AndroidManifest.xml -S app/res -A app/assets -I "$JAR" -F build/unsigned.apk
java -jar tools/ecj.jar -8 -nowarn -bootclasspath "$JAR:$BT/core-lambda-stubs.jar" -classpath "tools/jsoup.jar:$JAR" -d build/classes $(find app/src -name '*.java') > build/compiler.log 2>&1 || { cat build/compiler.log; exit 1; }
java -cp "$BT/lib/d8.jar" com.android.tools.r8.D8 --min-api 26 --lib "$JAR" --output build/dex $(find build/classes -name '*.class') tools/jsoup.jar > build/dex.log 2>&1 || { cat build/dex.log; exit 1; }
(cd build/dex && zip -q -u ../unsigned.apk classes*.dex)
"$BT/zipalign" -f -p 4 build/unsigned.apk build/aligned.apk
if [ ! -f tools/development.jks ]; then
 keytool -genkeypair -keystore tools/development.jks -storepass android -keypass android -alias namazteam -dname "CN=Namaz Team Lux Development,O=Namaz Team,C=TR" -keyalg RSA -keysize 2048 -validity 3650 >/dev/null 2>&1
fi
"$BT/apksigner" sign --ks tools/development.jks --ks-key-alias namazteam --ks-pass pass:android --key-pass pass:android --out dist/Namaz-Team-Lux-0.1-beta.apk build/aligned.apk
"$BT/apksigner" verify --verbose dist/Namaz-Team-Lux-0.1-beta.apk
"$BT/aapt" dump badging dist/Namaz-Team-Lux-0.1-beta.apk | head -8
sha256sum dist/Namaz-Team-Lux-0.1-beta.apk > dist/SHA256.txt
