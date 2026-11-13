#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p tools/sdk
curl -fL https://dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip -o tools/sdk.zip
unzip -qo tools/sdk.zip -d tools/sdk
tools/sdk/cmdline-tools/bin/sdkmanager --sdk_root="$PWD/tools/android" 'platforms;android-35' 'build-tools;35.0.0' 'platform-tools'
curl -fL https://repo.maven.apache.org/maven2/org/eclipse/jdt/ecj/3.40.0/ecj-3.40.0.jar -o tools/ecj.jar
curl -fL https://repo.maven.apache.org/maven2/org/jsoup/jsoup/1.18.3/jsoup-1.18.3.jar -o tools/jsoup.jar
