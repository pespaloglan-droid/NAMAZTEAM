# Namaz Team Lux · 0.1.0 beta

Android 8.0+ için beş ana bölümlü, siyah–altın / beyaz–altın uygulama.
Teknoloji: Java Android kabuğu + paketlenmiş yerel HTML/CSS/JavaScript arayüzü. Bu APK yalnızca bir internet sitesi kısayolu değildir: Android sensörleri, konum, bildirim kanalları, alarm ve yeniden başlatma alıcısı Java ile uygulanmıştır. Arayüz Android System WebView kullanır; güncel bir WebView önerilir.

## Bölümler
1. **Vakitler:** Diyanet resmî sitesinin seçilen il/ilçe tablosunu okur. Cihazda astronomik vakit hesabı veya başka hesaplama sağlayıcısına sessiz geçiş yoktur. İlk kurulumda İstanbul açıkça varsayılandır. İl/ilçe seçimi ve yenileme internet gerektirir. Türkiye 81 il ve Diyanet’in sunduğu ilçeler desteklenir; yurt dışı bu sürümde yoktur. Saat dilimi Europe/Istanbul / UTC+3.
2. **Bildirimler:** Vakit bazında açık/kapalı, tam vakit veya 5/10/15/30 dakika önce; sistem sesiyle bildirim. Android 13+ bildirim izni ve Android 12+ tam zamanlama izni kullanıcıdan istenir. İzin yoksa inexact Android alarmına geçer ve bunun gecikebileceği belirtilir. Telefonun pil yönetimi ve uygulamayı zorla durdurma hatırlatmaları etkileyebilir. Tam ezan kaydı yoktur.
3. **Kıble & Namaz hâli:** Rotation-vector sensörü, GPS/ağ konumu ve manyetik sapma düzeltmesiyle kıble yönü. Kıble açısı geometrik olarak hesaplanır; bu, namaz vakti hesabı değildir. Sensör/konum yoksa sahte canlı yön gösterilmez. Günlük beş namaz için cihazda kalan kişisel takip.
4. **Dinî Günler:** Diyanet’in 2026–2027 resmî listeleri; yıllar arası geçiş, yaklaşan gün. Sonraki yıllar için tarih üretilmez.
5. **Islamic:** Kalıcı dijital tesbih; 114 sûre / 6236 âyet Arapça ve Türkçe meal; sûre arama, yazı boyutu, âyet yer imi; 99 Esmâ ve kısa anlamları; kaynaklarıyla 10 hadis; Hanefî başlangıç namaz rehberi. Tilavet sesi ve kapsamlı ilmihal dahil değildir.

## Verinin güncelliği
- Paket, 4 Kasım 2026’da resmî İstanbul sayfasından alınan tarihli 2026 kayıtlarını içerir. Bunlar örnek/uçurma saatler değildir.
- Android uygulaması açıldığında seçili yer için resmî tabloyu yenilemeyi dener. Başarısız olursa yalnızca önceden alınmış kayıtlar, kendi tarihleri için kullanılır. Bugünün kaydı yoksa vakit ve geri sayım gösterilmez.
- Bildirimler yalnızca indirilen günlerden planlanır (en çok 400 yaklaşan hatırlatma). Yeni kayıtlar için uygulamayı düzenli açın. Arka planda ağ indirmesi yoktur.
- Diyanet HTML yapısını değiştirirse okuyucunun güncellenmesi gerekebilir. Bu resmî / belgelenmiş bir API entegrasyonu iddiası değildir. Açık erişim, açık kaynak lisansı anlamına gelmez. Uygulama Diyanet’ten bağımsızdır.

## Kurulum
1. `Namaz-Team-Lux-0.1-beta.apk` dosyasını Android telefona indirin.
2. Dosyayı açın; Android gerek duyarsa ilgili dosya yöneticisi/tarayıcı için bu kaynaktan yükleme iznini değerlendirin. Sistem güvenlik uyarılarını gözden geçirin.
3. Uygulamada kendi il/ilçenizi seçin. Bildirimler sekmesinden istediğiniz vakitleri etkinleştirin; Android izinlerini verin. Kıble sekmesinde konum izni verin.
4. Bildirim sekmesindeki **Dene** ile test yapın. Gerçek vakitten önce/sonra zamanlamayı telefonunuzda ayrıca kontrol edin.

APK test/geliştirme sertifikasıyla imzalıdır. Google Play yayını, mağaza incelemesi ve üretim imzası yoktur. Başka sertifikayla üretilen sürümü aynı paket üzerine kuramazsınız; kaldırma cihazdaki yerel kayıtları siler.

## Test durumu — 4 Kasım 2026
- APK başarıyla oluşturuldu; Android apksigner ile v2/v3 imza doğrulandı.
- Paket: `com.namazteam.lux`, minimum API 26, hedef API 34, derleme SDK 35.
- Aynı Java/Jsoup ayrıştırıcısı canlı Diyanet İstanbul sayfasına karşı çalıştırıldı: 365 sıralı, tekrarsız 2026 günü; 4 Kasım vakitleri resmî tabloyla eşleşti.
- Arayüzde iki tema × beş bölüm, 390 px ve 320 px yatay taşma; sayaç kaydı, Kur’an arama/âyet yer imi, 99 Esmâ arama, namaz takibi, bildirim tercihleri, takvim yıl seçimi ve eksik veri durumu denetlendi.
- 114 sûre ve toplam 6236 âyet/meal kaydı yapısal olarak doğrulandı.
- **Bu ortamda Android emülatörü veya fiziksel cihaz çalıştırılmadı.** Kurulum/açılış, OEM WebView davranışı, gerçek sensör, GPS izinleri, pil kısıtlamaları, ekran kapalı bildirim ve yeniden başlatma senaryoları cihaz üzerinde henüz doğrulanmadı. Bu yüzden beta olarak teslim edilir; üretim onayı değildir.
- Kur’an metni, meal ve dinî eğitim içerikleri için uzman editör incelemesi yapılmadı. İlmihal/fetva yerine geçmez.

## Kaynak projeyi derleme
### Android Studio
- Bu klasörü proje olarak açın.
- JDK 17, Android SDK 35 / Build Tools 35 ve Gradle 8.9 / Android Gradle Plugin 8.7.3 kullanın.
- Gradle eşitlemesinden sonra `./gradlew :app:assembleDebug` çalıştırın.
- Çıktı: `app/build/outputs/apk/debug/app-debug.apk`.
- Gradle debug anahtarı teslim APK’sının geliştirme anahtarından farklı olabilir.

### Alternatif bağımsız komut satırı derlemesi
- Java, Python/curl, unzip ve zip mevcutken `bash prepare-tools.sh` ile SDK/ECJ/jsoup dosyalarını indirin; Google SDK lisanslarını okuyup kendiniz onaylayın.
- `bash build.sh` komutuyla `dist/` içine APK üretilir. Özel bir üretim anahtarı değil, yerelde oluşan geliştirme anahtarı kullanılır.
- Teslim arşivinde özel imza anahtarı ve Android SDK ikilileri yoktur.

## Lisans, kaynak, gizlilik
- Tam kaynak/atıf bilgisi: `app/assets/THIRD-PARTY-NOTICES.txt`.
- Kur’an verisi: quran-json 3.1.2 / Risan Bagja Pradana. Dağıtılan LICENSE.txt uyarınca CC-BY-SA 4.0. Kaynakları paket README’sinde belirtildiği şekliyle QuranEnc ve Tanzil’dir. Türkçe meal pakette Diyanet’e atfedilir; resmî portalın güncel mealinin birebir güncel kopyası olduğu iddia edilmez. Metinlerde değişiklik yapılmadı; dosya JavaScript sabitine dönüştürüldü.
- jsoup: MIT. Noto Sans Arabic: SIL OFL 1.1. Gradle wrapper: Apache 2.0.
- Diyanet verisinin yeniden dağıtım / ticari kullanım koşulları ayrıca incelenmelidir; bu çalışma açık lisans verildiğini iddia etmez.
- Hesap, reklam, izleyici veya analitik yoktur. Konum cihazda kıble için işlenir. Vakitler için Diyanet’e seçili il/ilçe isteği gider. Kaynak bağlantıları haricî tarayıcıda açılır.
- Logo ve Kâbe arka planı bu proje için yapay zekâ ile oluşturulmuştur; gerçek çekim iddiası yoktur.
