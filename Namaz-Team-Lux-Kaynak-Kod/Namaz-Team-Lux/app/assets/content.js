const SURA_NAMES='Fâtiha|Bakara|Âl-i İmrân|Nisâ|Mâide|En’âm|A’râf|Enfâl|Tevbe|Yûnus|Hûd|Yûsuf|Ra’d|İbrâhîm|Hicr|Nahl|İsrâ|Kehf|Meryem|Tâhâ|Enbiyâ|Hac|Mü’minûn|Nûr|Furkân|Şuarâ|Neml|Kasas|Ankebût|Rûm|Lokmân|Secde|Ahzâb|Sebe’|Fâtır|Yâsîn|Sâffât|Sâd|Zümer|Mü’min|Fussilet|Şûrâ|Zuhruf|Duhân|Câsiye|Ahkâf|Muhammed|Fetih|Hucurât|Kâf|Zâriyât|Tûr|Necm|Kamer|Rahmân|Vâkıa|Hadîd|Mücâdele|Haşr|Mümtehine|Saf|Cum’a|Münâfikûn|Tegâbün|Talâk|Tahrîm|Mülk|Kalem|Hâkka|Meâric|Nûh|Cin|Müzzemmil|Müddessir|Kıyâme|İnsân|Mürselât|Nebe’|Nâziât|Abese|Tekvîr|İnfitâr|Mutaffifîn|İnşikâk|Bürûc|Târık|A’lâ|Gâşiye|Fecr|Beled|Şems|Leyl|Duhâ|İnşirâh|Tîn|Alak|Kadr|Beyyine|Zilzâl|Âdiyât|Kâria|Tekâsür|Asr|Hümeze|Fîl|Kureyş|Mâûn|Kevser|Kâfirûn|Nasr|Tebbet|İhlâs|Felak|Nâs'.split('|');
const ESMAS=`Allah;الله;Bütün kemal sıfatlarını kendinde toplayan
Er-Rahmân;الرحمن;Bütün varlıklara merhamet eden
Er-Rahîm;الرحيم;Rahmetiyle ihsan eden
El-Melik;الملك;Bütün mülkün sahibi
El-Kuddûs;القدوس;Her türlü eksiklikten uzak
Es-Selâm;السلام;Esenlik veren
El-Mü’min;المؤمن;Güven veren
El-Müheymin;المهيمن;Gözetip koruyan
El-Azîz;العزيز;Mutlak güç sahibi
El-Cebbâr;الجبار;İradesini her durumda yürüten
El-Mütekebbir;المتكبر;Büyüklükte eşsiz
El-Hâlık;الخالق;Yaratan
El-Bâri’;البارئ;Kusursuzca var eden
El-Musavvir;المصور;Varlıklara şekil veren
El-Gaffâr;الغفار;Çok bağışlayan
El-Kahhâr;القهار;Her şeye galip gelen
El-Vehhâb;الوهاب;Karşılıksız ihsan eden
Er-Rezzâk;الرزاق;Rızık veren
El-Fettâh;الفتاح;Hayır kapılarını açan
El-Alîm;العليم;Her şeyi bilen
El-Kâbıd;القابض;Daraltan
El-Bâsıt;الباسط;Genişleten
El-Hâfıd;الخافض;Alçaltan
Er-Râfi’;الرافع;Yücelten
El-Muizz;المعز;İzzet veren
El-Müzill;المذل;Zillete düşüren
Es-Semî’;السميع;Her şeyi işiten
El-Basîr;البصير;Her şeyi gören
El-Hakem;الحكم;Hüküm veren
El-Adl;العدل;Mutlak adalet sahibi
El-Latîf;اللطيف;Lütfu ve bilgisi en inceye ulaşan
El-Habîr;الخبير;Her şeyin iç yüzünü bilen
El-Halîm;الحليم;Cezalandırmada acele etmeyen
El-Azîm;العظيم;Büyüklüğü sınırsız
El-Gafûr;الغفور;Bağışlaması bol
Eş-Şekûr;الشكور;Az amele çok karşılık veren
El-Aliyy;العلي;Çok yüce
El-Kebîr;الكبير;Büyüklükte eşi olmayan
El-Hafîz;الحفيظ;Koruyup gözeten
El-Mukît;المقيت;Besleyip yaşatan
El-Hasîb;الحسيب;Hesaba çeken ve yeten
El-Celîl;الجليل;Ululuk sahibi
El-Kerîm;الكريم;Cömertliği sınırsız
Er-Rakîb;الرقيب;Her şeyi gözeten
El-Mücîb;المجيب;Dualara karşılık veren
El-Vâsi’;الواسع;İlmi ve rahmeti kuşatıcı
El-Hakîm;الحكيم;Hikmet sahibi
El-Vedûd;الودود;Çok seven ve sevilen
El-Mecîd;المجيد;Şanı yüce
El-Bâis;الباعث;Ölüleri dirilten
Eş-Şehîd;الشهيد;Her şeye şahit olan
El-Hakk;الحق;Varlığı ve hükmü gerçek
El-Vekîl;الوكيل;Kendisine güvenilen
El-Kaviyy;القوي;Pek güçlü
El-Metîn;المتين;Kudreti sarsılmaz
El-Veliyy;الولي;Dost ve yardımcı
El-Hamîd;الحميد;Her türlü övgüye layık
El-Muhsî;المحصي;Her şeyi sayıp bilen
El-Mübdi’;المبدئ;İlk defa var eden
El-Muîd;المعيد;Yeniden var eden
El-Muhyî;المحيي;Hayat veren
El-Mümît;المميت;Ölümü yaratan
El-Hayy;الحي;Daima diri
El-Kayyûm;القيوم;Her şeyi ayakta tutan
El-Vâcid;الواجد;Dilediğini bulan, muhtaç olmayan
El-Mâcid;الماجد;Şanı ve cömertliği büyük
El-Vâhid;الواحد;Tek olan
Es-Samed;الصمد;Her şeyin kendisine muhtaç olduğu
El-Kâdir;القادر;Her şeye gücü yeten
El-Muktedir;المقتدر;Kudreti tam olan
El-Mukaddim;المقدم;Öne geçiren
El-Muahhir;المؤخر;Geri bırakan
El-Evvel;الأول;Başlangıcı olmayan
El-Âhir;الآخر;Sonu olmayan
Ez-Zâhir;الظاهر;Varlığı delilleriyle açık
El-Bâtın;الباطن;Mahiyeti idrak edilemeyen
El-Vâlî;الوالي;Kâinatı yöneten
El-Müteâlî;المتعالي;Aşkın ve yüce
El-Berr;البر;İyiliği bol
Et-Tevvâb;التواب;Tövbeleri kabul eden
El-Müntakim;المنتقم;Zulme hak ettiği karşılığı veren
El-Afüvv;العفو;Affı çok olan
Er-Raûf;الرؤوف;Şefkati çok olan
Mâlikü’l-Mülk;مالك الملك;Mülkün gerçek sahibi
Zü’l-Celâli ve’l-İkrâm;ذو الجلال والإكرام;Azamet ve ikram sahibi
El-Muksit;المقسط;Adaletle hükmeden
El-Câmi’;الجامع;Bir araya toplayan
El-Ganiyy;الغني;Hiçbir şeye muhtaç olmayan
El-Muğnî;المغني;Zenginlik veren
El-Mâni’;المانع;Engelleyen ve koruyan
Ed-Dârr;الضار;Hikmetiyle zararı da yaratan
En-Nâfi’;النافع;Fayda veren
En-Nûr;النور;Aydınlatan
El-Hâdî;الهادي;Doğru yolu gösteren
El-Bedî’;البديع;Eşsiz biçimde yaratan
El-Bâkî;الباقي;Varlığı sürekli
El-Vâris;الوارث;Her şeyden sonra baki kalan
Er-Reşîd;الرشيد;Doğruya ulaştıran
Es-Sabûr;الصبور;Cezada acele etmeyen`.split('\n').map((v,i)=>({id:i+1,name:v.split(';')[0],arabic:v.split(';')[1],meaning:v.split(';')[2]}));
const HADITHS=[
['Ameller ancak niyetlere göredir.','Buhârî, Bed’ü’l-vahy, 1; Müslim, İmâre, 155.'],
['Sizin en hayırlınız, Kur’an’ı öğrenen ve öğretendir.','Buhârî, Fezâilü’l-Kur’ân, 21.'],
['Kolaylaştırın, zorlaştırmayın. Müjdeleyin, nefret ettirmeyin.','Buhârî, İlim, 11; Müslim, Cihâd ve siyer, 6.'],
['Sizden biri, kendisi için sevdiğini kardeşi için de sevmedikçe iman etmiş olmaz.','Buhârî, Îmân, 7; Müslim, Îmân, 71.'],
['Güzel söz sadakadır.','Buhârî, Edeb, 34; Müslim, Zekât, 56.'],
['Allah sizin suretlerinize ve mallarınıza bakmaz; kalplerinize ve amellerinize bakar.','Müslim, Birr, 34.'],
['Temizlik imanın yarısıdır.','Müslim, Tahâret, 1.'],
['Merhamet etmeyene merhamet edilmez.','Buhârî, Edeb, 18; Müslim, Fezâil, 65.'],
['Müslüman, elinden ve dilinden Müslümanların güvende olduğu kimsedir.','Buhârî, Îmân, 4; Müslim, Îmân, 64.'],
['Sizin en hayırlınız, ahlâkı en güzel olanınızdır.','Buhârî, Menâkıb, 23; Müslim, Fezâil, 68.']];
const RELIGIOUS_DAYS=[
['2026-01-15','Miraç Kandili'],['2026-02-02','Berat Kandili'],['2026-02-19','Ramazan Başlangıcı'],['2026-03-16','Kadir Gecesi'],['2026-03-19','Ramazan Bayramı Arefesi'],['2026-03-20','Ramazan Bayramı · 1. Gün'],['2026-03-21','Ramazan Bayramı · 2. Gün'],['2026-03-22','Ramazan Bayramı · 3. Gün'],['2026-05-26','Kurban Bayramı Arefesi'],['2026-05-27','Kurban Bayramı · 1. Gün'],['2026-05-28','Kurban Bayramı · 2. Gün'],['2026-05-29','Kurban Bayramı · 3. Gün'],['2026-05-30','Kurban Bayramı · 4. Gün'],['2026-06-16','Hicrî Yılbaşı'],['2026-06-25','Aşure Günü'],['2026-08-24','Mevlid Kandili'],['2026-12-10','Üç Ayların Başlangıcı'],['2026-12-10','Regaib Kandili'],
['2027-01-04','Miraç Kandili'],['2027-01-22','Berat Kandili'],['2027-02-08','Ramazan Başlangıcı'],['2027-03-05','Kadir Gecesi'],['2027-03-08','Ramazan Bayramı Arefesi'],['2027-03-09','Ramazan Bayramı · 1. Gün'],['2027-03-10','Ramazan Bayramı · 2. Gün'],['2027-03-11','Ramazan Bayramı · 3. Gün'],['2027-05-15','Kurban Bayramı Arefesi'],['2027-05-16','Kurban Bayramı · 1. Gün'],['2027-05-17','Kurban Bayramı · 2. Gün'],['2027-05-18','Kurban Bayramı · 3. Gün'],['2027-05-19','Kurban Bayramı · 4. Gün'],['2027-06-06','Hicrî Yılbaşı'],['2027-06-15','Aşure Günü'],['2027-08-13','Mevlid Kandili'],['2027-11-29','Üç Ayların Başlangıcı'],['2027-12-02','Regaib Kandili'],['2027-12-24','Miraç Kandili']];
const GUIDE=[
['Namaza hazırlık','Abdest alın; beden, elbise ve namaz kılınacak yerin temizliğini kontrol edin. Örtünme şartını sağlayın, vakit girdikten sonra kıbleye yönelin. Kalben kılacağınız namaza niyet edin. Bu kısa rehber Hanefî uygulamasını esas alır; ayrıntılarda mezhep farklılıkları bulunur.'],
['Abdest','Niyet ve besmele ile başlayın. Elleri bileklere kadar yıkayın; ağza ve burna su verin. Yüzü, ardından kolları dirseklerle birlikte yıkayın. Başı mesh edin; kulakları mesh edin. Ayakları topuklarla birlikte yıkayın. Yıkama organlarında üçer defa yıkamak sünnettir. Abdestin farzları: yüzü ve kolları yıkamak, başın dörtte birini mesh etmek, ayakları yıkamaktır.'],
['1 · İftitah tekbiri ve kıyam','Niyetin ardından “Allahu ekber” diyerek namaza başlayın ve ayakta ellerinizi bağlayın. İlk rekâtta Sübhâneke, eûzü-besmele, Fâtiha ve ardından bir sûre ya da yeterli miktarda âyet okuyun. Erkek ve kadınların el bağlama gibi ayrıntılarında uygulama farkları vardır.'],
['2 · Rükû','“Allahu ekber” diyerek eğilin. Rükûda en az üç defa “Sübhâne rabbiye’l-azîm” deyin. “Semiallahü limen hamideh” diyerek doğrulun; ayakta “Rabbenâ leke’l-hamd” deyin. Bu tesbihlerin üç defa söylenmesi sünnettir.'],
['3 · Secde','“Allahu ekber” diyerek secdeye varın. Secdede üç defa “Sübhâne rabbiye’l-a‘lâ” deyin. Tekbirle kısa bir oturuş yapın; ardından ikinci secdeyi aynı şekilde yapın. Hareketler arasında acele etmeyin ve sükûneti koruyun.'],
['4 · İkinci rekât','Tekbirle ayağa kalkın. Besmele, Fâtiha ve ardından sûre okuyun. Rükû ve iki secdeyi tekrar edin. İki rekâtlı namazda ikinci secdenin ardından son oturuşa geçilir. Üç ve dört rekâtlı namazların devamı namazın türüne göre değişir.'],
['5 · Son oturuş ve selâm','Ettehiyyâtü, Allahümme salli, Allahümme bârik ve dua okuyun. Sağa, sonra sola “Esselâmü aleyküm ve rahmetullah” diyerek selâm verin. Bu akış iki rekâtlı namazın özetidir; tam ilmihal yerine geçmez.'],
['Günlük rekâtlar · Hanefî','Sabah: 2 sünnet + 2 farz. Öğle: 4 ilk sünnet + 4 farz + 2 son sünnet. İkindi: 4 sünnet + 4 farz. Akşam: 3 farz + 2 sünnet. Yatsı: 4 ilk sünnet + 4 farz + 2 son sünnet; ardından 3 rekât vitir (Hanefî’de vacip).'],
['Namaz sonrası tesbihat','Namazın ardından istiğfar ve dualar okunabilir. Yaygın tesbihat: 33 Sübhânallah, 33 Elhamdülillah, 33 Allahu ekber; ardından tevhid ile yüz tamamlanır (Müslim, Mesâcid, 146). Zikir sayacı kişisel takip aracıdır; dinî zorunluluk veya sevap garantisi oluşturmaz.']];
