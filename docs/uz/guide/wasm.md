# WebAssembly WASM

![alt text](https://www.singlestore.com/images/cms/blog-posts/img_blog_post_featured_locally-create-wasm-udfs-rust-singlestoredb.png)


## Kirish

Odatda Wasm nomi bilan tanilgan WebAssembly zamonaviy veb-brauzerlarda xavfsiz, tez va portativ ishlash uchun mo'ljallangan binary instruction (ikkilik ko'rsatmalar) formatidir. U low-leveldagi virtual machine(virtual mashina) bo'lib xizmat qiladi, bu kichik binary footprint saqlab, veb-ilovalarga deyarli near-native tezlikda ishlash imkonini beradi. Ushbu inqilobiy texnologiya veb-ishlab chiqishda yangi imkoniyatlarni ochib berdi, bu dasturchilarga C, C++ va Rust kabi dasturlash tillaridan foydalangan holda yuqori samarali veb-ilovalarni yaratish imkonini berdi.

Ushbu maqolada biz WebAssembly-ning texnik jihatlariga  kirib boramiz, uning ichki ishlashi, kelib chiqishi va bugungi veb-ishlab chiqish landshaftidagi zaruriyatini o'rganamiz. Shuningdek, biz C va Rust tillarida Wasm kodini qanday yozish va bajarishni ko'rsatamiz va veb-ishlab chiqishda WebAssembly-ning amaliy qo'llanilishini ko'rsatadigan kichik loyiha bilan yakunlaymiz.

### WebAssembly (Wasm) haqida qisqacha ma'lumot

WebAssembly (Wasm) zamonaviy veb-brauzerlarga kodni near-native tezlikda bajarish imkonini beruvchi ochiq standart binary formatdir. Wasm ixcham binary formatni qo'llab-quvvatlaydigan, tezroq yuklab(load) olish va samarali bajarishni(execute) osonlashtiradigan low-leveldagi virtual machine sifatida ishlab chiqilgan. U C, C++, Rust va boshqalar kabi yuqori darajadagi dasturlash tillari uchun kompilyatsiya maqsadi bo'lib xizmat qiladi, bu esa ishlab chiquvchilarga veb-ilovalarida ushbu tillarning kuchidan foydalanish imkonini beradi.

WebAssembly platformadan mustaqil, ya'ni u turli xil operatsion tizimlar va arxitekturalarda o'zgartirishlarsiz ishlashi mumkin. Bundan tashqari, u xavfsizlikka katta e'tibor qaratadi va foydalanuvchi tizimlarini himoya qilish uchun kod xavfsiz sinov muhitida ishlashini ta'minlaydi.

Wasm-ning asosiy afzalliklaridan biri uning JavaScript va boshqa veb-texnologiyalar bilan uzluksiz integratsiyalashuvidir, bu ishlab chiquvchilarga WebAssembly-dan foydalangan holda o'z ilovalarining ishlash uchun muhim bo'lgan qismlarini optimallashtirishga imkon beradi, shu bilan birga JavaScript-ning boshqa komponentlar uchun qulayligi va moslashuvchanligini saqlab qoladi.

2015-yilda e’lon qilingan va birinchi marta 2017-yil mart oyida chiqarilgan WebAssembly 2019-yil 5-dekabrda `World Wide Web Consortium` tavsiyasiga aylandi va 2021-yilda `ACM SIGPLAN` tomonidan Dasturlash tillari uchun dasturiy ta’minot mukofotini oldi. `World Wide Web Consortium (W3C)` standartni Mozilla, Microsoft, Google, Apple, Fastly, Intel va Red Hat hissalari bilan saqlab turadi.

![alt text](https://storage.googleapis.com/blog-images-backup/1*4ZMcCrF95AUvVzJ4S6Lo-g.png)

### Zamonaviy veb-ishlab chiqishda Wasmning ahamiyati

WebAssembly-ning paydo bo'lishi ishlab chiquvchilar yillar davomida duch kelgan bir qator qiyinchiliklar va cheklovlarni hal qilish orqali zamonaviy veb-ishlab chiqishga sezilarli ta'sir ko'rsatdi. Wasm veb-ilovalarda ishlash, xavfsizlik va portativlikni optimallashtirish uchun muhim vositaga aylandi. WebAssembly nima uchun zamonaviy veb-ishlab chiqishda juda muhim bo'lishining asosiy sabablaridan ba'zilari:

:::tip
* Performance
:::

WebAssemblyning binary formati va uning samarali ishlash modeli ilovalarning near-native tezlikda ishlashiga imkon beradi. Bu, ayniqsa, tasvirni qayta ishlash, videoni tahrirlash va 3D renderlash kabi katta hisoblash quvvatini talab qiladigan vazifalar uchun foydalidir. Yuqori samaradorlik foydalanuvchi tajribasini ta'minlash uchun juda muhimdir. Bundan tashqari, WebAssembly modullarini keshlash mumkin, bu esa ilovani yuklash vaqtini yanada yaxshilaydi.

:::tip
* Tilning moslashuvchanligi
:::

WebAssembly bir nechta dasturlash tillari, jumladan C, C++, Rust va boshqalar uchun kompilyatsiya maqsadi bo'lib xizmat qiladi. Bu ishlab chiquvchilarga yuqori samarali veb-ilovalarni yaratish uchun ushbu tillardagi o'z tajribasidan foydalanish imkonini beradi, bu esa veb-ishlab chiqishni kengroq dasturchilar uchun yanada qulayroq qiladi.

:::tip
* JavaScript bilan oʻzaro ishlash
:::

WebAssembly JavaScript bilan birga ishlash uchun moʻljallangan boʻlib, ishlab chiquvchilarga JavaScript-dan boshqa jihatlar uchun foydalanishda davom etgan holda Wasm-dan foydalangan holda oʻz ilovalarining ishlashi uchun muhim boʻlgan qismlarini optimallashtirish imkonini beruvchi uzluksiz integratsiyani taʼminlaydi. Wasm va JavaScript-ning birgalikda mavjudligi veb-ishlab chiquvchilarning mavjud kod bazasiga jiddiy o'zgarishlar kiritmasdan ikkala texnologiyadan ham foydalanishlarini ta'minlaydi.

:::tip
* Xavfsizlik
:::

WebAssembly kodi xavfsizlikning mumkin bo'lgan zaifliklari xavfini kamaytiradigan xavfsiz sinov muhitida ishlaydi. Bu Wasm yordamida yaratilgan veb-ilovalar an'anaviy JavaScript-ga asoslangan ilovalarga qaraganda xavfsizroq va hujumlarga kamroq moyil bo'lishini ta'minlaydi.

:::tip
* Portativlik:
:::

WebAssembly platforma-agnostikdir, ya'ni u turli xil operatsion tizimlar va hardware arxitekturalarida hech qanday o'zgartirishni talab qilmasdan ishlashi mumkin. Bu ishlab chiquvchilarga doimiy foydalanuvchi tajribasini ta'minlab, keng turdagi qurilmalarda osongina tarqatilishi va bajarilishi mumkin bo'lgan portativ veb-ilovalarni yaratishga imkon beradi.

## WebAssembly kelib chiqish tarixi

WebAssembly 1950-yillarga to'g'ri keladigan assembly tili tushunchasini uyg'otish uchun nomlangan.

WebAssembly birinchi marta 2015-yilda e'lon qilingan va birinchi namoyish Unity Angry Bots-ni Firefox, Google Chrome va Microsoft Edge-da bajarish edi. Precursor texnologiyalar Mozilla va Google Native Client asm.js edi va dastlabki tatbiq asm.js xususiyatlari toʻplamiga asoslangan edi. asm.js texnologiyasi allaqachon near-native kodni bajarish tezligini ta'minlaydi va WebAssembly-ni qo'llab-quvvatlamaydigan yoki xavfsizlik sababli uni o'chirib qo'ygan brauzerlar uchun munosib alternativa sifatida ko'rib chiqilishi mumkin. WebAssembly MVP 2017-yil mart oyida chiqarilgan boʻlib, u oddiy binary format va asosiy brauzerni qoʻllab-quvvatlaydi. Ushbu dastlabki nashr yuqori darajadagi tillar uchun kompilyatsiya maqsadi sifatida WebAssembly hayotiyligini va uning veb-ilova ish faoliyatini yaxshilash potentsialini namoyish etdi. 2017-yil sentabr oyi oxirida Safari 11 qo‘llab-quvvatlangan holda chiqarildi. 2018-yil fevral oyida WebAssembly ishchi guruhi Core spetsifikatsiyasi, JavaScript interfeysi va Web API uchun uchta ommaviy ishchi loyihasini chop etdi. 2019-yil iyun oyida Chrome 75 default holda yoqilgan WebAssembly threadlari bilan chiqarildi. 

WebAssemblyning asosiy motivlari quyidagilar edi

* JavaScript-dan ko'ra samaraliroq bajarilishi mumkin bo'lgan ixcham binary formatni yaratish orqali ishlashni yaxshilash

* JavaScript-dan tashqari veb-ishlab chiqishda kengroq dasturlash tillarini qo'llab-quvvatlash

* Sinov muhitida kodni ishga tushirish orqali xavfsizlikni oshirish

WebAssembly joriy etilganidan buyon quyida keltirilgan bir qancha muhim yutuqlarga erishdi:

Brauzerni qo'llab-quvvatlash va standartlashtirish: MVP versiyasidan so'ng barcha asosiy veb-brauzerlar, jumladan, Chrome, Firefox, Safari va Edge, WebAssembly-ni qo'llab-quvvatlab, uni keng doiradagi foydalanuvchilar uchun taqdim etdi. WebAssembly standarti 2018-yilda World Wide Web Consortium (W3C) orqali ham rasmiylashtirilib, veb-ekotizimdagi o‘rnini yanada mustahkamladi.

Kengaytirilgan tilni qo'llab-quvvatlash: Vaqt o'tishi bilan WebAssembly-ga kompilyatsiya qilinishi mumkin bo'lgan tillar doirasi sezilarli darajada kengaydi. Dastlab C va C++ qo'llab-quvvatlangan bo'lsa-da, Rust, Go va AssemblyScript kabi boshqa tillar ham WebAssemblyni ishlab chiqish uchun yaxshi tanlovga aylandi.

WebAssembly System Interface (WASI): 2019-yilda taqdim etilgan WASI modulli tizim interfeysi boʻlib, WebAssembly modullariga operatsion tizim bilan oʻzaro aloqada boʻlish va tizim resurslariga xavfsiz kirish imkonini beradi. Ushbu ishlanma WebAssembly-ning qo'llanilishini brauzerdan tashqari kengaytirib, uni server tomonida va boshqa brauzer bo'lmagan kontekstlarda ishlatish imkonini berdi.

WebAssembly rivojlanishda davom etmoqda, parallellikni ta'minlovchi threadlar va ma'lum operatsiyalar uchun ishlashni optimallashtiradigan SIMD (Single Instruction Multiple Data) kabi takliflar ustida ish olib borilmoqda. Ushbu va boshqalar kelajakda WebAssembly imkoniyatlarini yanada oshirishi kutilmoqda.

### Implemention
WebAssembly dastlab veb-brauzerda near-native tezligini yoqish uchun ishlab chiqilgan bo'lsa-da, u bundan tashqari, umumiy kontekstlarda qimmatli deb hisoblanadi. WebAssembly runtime environmentlari (RE) low leveldagi virtual stack machinelari (JVM yoki Flash VM ga o'xshash) bo'lib, ular xost ilovalariga kiritilishi mumkin, ularning ba'zilari Wasmtime va Wasmer kabi standalone runtime environmenlariga yo'l topdilar.

### Veb-brauzerlar
2017 yil noyabr oyida Mozilla Edge 16 da default holda WebAssembly yoqilganidan soʻng, Mozilla barcha asosiy brauzerlarda qoʻllab-quvvatlashni eʼlon qildi. Qo'llab-quvvatlash iOS va Android uchun mobil veb-brauzerlarni o'z ichiga oladi. 2023-yil aprel holatiga koʻra, oʻrnatilgan brauzerlarning 96% WebAssembly-ni qoʻllab-quvvatlaydi (1.0-versiya). Ammo eski brauzerlar uchun Wasm asm.js ga JavaScript polyfill orqali kompilyatsiya qilinishi mumkin.


## Kompilyatorlar

WebAssembly ilovalari odatda oldindan (AOT) yoki o'z vaqtida (JIT) kompilyatsiyasidan foydalanadi, lekin interpretatordan ham foydalanishi mumkin. Birinchi ilovalar veb-brauzerlarda paydo bo'lgan bo'lsa-da, umumiy maqsadlarda foydalanish uchun brauzer bo'lmagan ilovalar ham mavjud, jumladan Wasmer, Wasmtime yoki WAMR, wasm3, WAVM va boshqalar. WebAssembly executable(bajariladigan) fayllar oldindan kompilyatsiya qilinganligi sababli ularni yaratish uchun turli dasturlash tillaridan foydalanish mumkin. Bunga Wasm-ga to'g'ridan-to'g'ri kompilyatsiya qilish yoki Wasm-da tegishli virtual mashinalarni amalga oshirish orqali erishiladi. Wasm-ni kompilyatsiya maqsadi sifatida qo'llab-quvvatlaydigan 40 ga yaqin dasturlash tillari haqida xabar berilgan. 

Emscripten, Binaryen va LLVM-dan foydalanib, C va C++ ni Wasmga kompilyatsiya qiladi. Emscripten SDK har qanday LLVM tomonidan qo'llab-quvvatlanadigan tillarni (masalan, C, C++ yoki Rust va boshqalar) manba kodini JavaScript kodi bilan bir xil sandboxda ishlaydigan binary faylga kompilyatsiya qilishi mumkin. Emscripten WebGL kabi bir nechta tez-tez ishlatiladigan muhit interfeyslari uchun ulanishlarni ta'minlaydi.

8-versiyadan boshlab, mustaqil Clang C va C++ ni Wasm-ga kompilyatsiya qilishi mumkin. Uning boshlang'ich maqsadi C va C++ dan kompilyatsiya qilishni qo'llab-quvvatlash edi, lekin Rust, .NET va AssemblyScript (TypeScript-ga o'xshash) kabi boshqa manba tillarini qo'llab-quvvatlash ham paydo bo'lmoqda.

MVP chiqarilgandan so'ng, WebAssembly-ni C# (Blazor orqali qo'llab-quvvatlanadi), F# (Blazor yordamida Bolero orqali qo'llab-quvvatlanadi) kabi garbage-collecterli dasturlash tillari uchun kompilyatsiya maqsadiga aylantiradigan multithreading garbage-collecterni qo'llab-quvvatlash rejalari mavjud.

Python va hatto JavaScript-da brauzerning just-in-time kompilyatsiya tezligi juda sekin hisoblanadi. Python, Julia, va Ruby kabi bir qator boshqa tillar ham qoʻllab-quvvatlanadi. Bir qator tizimlar Java va boshqa bytecode tillarini JavaScript va WebAssembly-ga kompilyatsiya qilishlari mumkin. Bularga CheerpJ, JWebAssembly va TeaVM kiradi. Bularning barchasi Java byte codi .class fayllarini kirish sifatida qabul qiladi va Groovy, Kotlin va Scala kabi boshqa JVM tillaridan ham foydalanishga imkon beradi.

## Cheklovlar

* Umuman olganda, WebAssembly DOM bilan to'g'ridan-to'g'ri ishlashga ruxsat bermaydi. Barcha interactionlar JavaScript interop orqali o'tishi kerak.

* Garbage collectionning yo'qligi (garchi buni hal qilish rejalashtirilgan bo'lsa ham).

* Xavfsizlik masalalari

WebAssembly desktopda va mobil qurilmalarda qo'llab-quvvatlanadi, ammo ikkinchisida amalda (kichik bo'lmagan xotira ajratish uchun, masalan, Unity o'yin mexanizmida) "ko'plab ilovalarni mobil brauzerlarda ishonchli tarzda joylashtirishni imkonsiz qiladigan jiddiy cheklovlar mavjud. Hozirda ~300MB dan ortiq xotira ajratish Chrome-ga xos vaqtinchalik yechimlarga murojaat qilmasdan Android-dagi Chrome-da ham, iOS-dagi Safari-da ham ishonchli emas."

To'g'ridan-to'g'ri Document Object Model (DOM) kirish imkoniyati yo'q; ammo, buning uchun proksi-server funksiyalarini yaratish mumkin, masalan, Rust tilidan foydalanganda `stdweb` yoki `web_sys` orqali. Barcha asosiy veb-brauzerlar, agar  Content-Security-Policy (Kontent-Xavfsizlik-Siyosat) ko'rsatilmagan bo'lsa yoki "unsafe-eval (xavfsiz baholash)" ishlatilsa, WebAssembly-ga ruxsat beradi, lekin aks holda asosiy veb-brauzerlar boshqacha harakat qiladi.

## WASI

WebAssembly System Interface (WASI) Mozilla tomonidan ishlab chiqilgan oddiy interfeys (ABI va API) boʻlib, har qanday platformaga koʻchma boʻlishi uchun moʻljallangan. U POSIX-ga o'xshash xususiyatlarni taqdim etadi, masalan, imkoniyatlarga asoslangan xavfsizlik bilan cheklangan fayl I/O kiritish-chiqarish. Yana bir nechta taklif qilingan ABI/API mavjud.

WASI yoki WebAssembly System Interface - bu WebAssembly (Wasm) ilovalari uchun mo'ljallangan modulli tizim interfeysi. WebAssembly veb-ilovalar uchun low-leveldagi binary format bo'lib, u JavaScript-ga qaraganda tezroq va samaraliroq bo'lishni maqsad qilib qo'yadi, shu bilan birga C, C++ va Rust kabi yuqori darajali tillarni kompilyatsiya qilish uchun portativ maqsaddir.

WASI WebAssembly ilovalari va xost tizimi o'rtasida izchil va xavfsiz interfeysni ta'minlaydi, bu Wasm dasturlariga fayllar, tarmoq ulanishlari va muhit o'zgaruvchilari kabi operatsion tizim resurslariga kirish imkonini beradi. WASI maqsadi WebAssembly uchun turli platformalar va operatsion tizimlarda ishlaydigan standartlashtirilgan tizim interfeysini yaratishdir, bu esa dasturchilarga Wasm ilovalarini yaratish va joylashtirishni osonlashtiradi.

Standart interfeysni taqdim etish orqali WASI WebAssembly ilovalarini yanada ko‘chma, sinov muhitiga ega va xavfsizroq bo‘lishiga yordam beradi, chunki ular kodni o‘zgartirishni talab qilmasdan turli operatsion tizimlar va qurilmalarda ishlashi mumkin. WASI-ning modulli dizayni, shuningdek, ishlab chiquvchilarga o'z ilovalari uchun kerakli interfeys qismlaridan foydalanishga imkon beruvchi maxsus API-larni bosqichma-bosqich qabul qilishga imkon beradi.

Docker asoschilaridan biri Solomon Hykes 2019 yilda shunday deb yozgan edi: “Agar WASM+WASI 2008-yilda mavjud bo‘lganida, biz Docker-ni yaratishimiz shart emas edi. Bu qanchalik muhim. Serverdagi WebAssembly - bu hisoblashning kelajagi." Wasmer, 1.0 versiyasida "dasturiy ta'minotni konteynerlashtirishni ta'minlaydi, biz Linux, macOS, Windows va veb-brauzerlar kabi operatsion tizimlarni o'z ichiga olgan holda istalgan joyda o'zgartirilmagan holda ishlaydigan universal binary(ikkilik) fayllarni yaratamiz. Wasm xavfsiz bajarilishi uchun ilovalarni standart bo'yicha avtomatik ravishda sandboxga o'tkazadi"

## Virtual machine

Wasm kodi (ikkilik kod, ya'ni bayt kod) portativ virtual stek mashinasida (VM) ishga tushirish uchun mo'ljallangan. VM JavaScript-ga qaraganda tezroq tahlil qilish va bajarish va ixcham kod taqdimotiga ega bo'lish uchun mo'ljallangan. Wasm binary kodi tomonidan kutilishi mumkin bo'lgan tashqi funksionallik (masalan, tizimli syscall-lar) standartda ko'zda tutilmagan. Bu, aksincha, VM ilovasi ishlaydigan xost muhiti tomonidan modullar orqali interfeyslarni yetkazib berish usulini taqdim etadi.

WebAssembly virtual mashinasi kompilyatsiya, instantsiya va execution kabi bir necha bosqichda ishlaydi. Bu jarayon qanday ishlashi haqida umumiy ma'lumot:

#### Kompilyatsiya

Dasturchi kodni C, C++ yoki Rust kabi yuqori darajadagi tilda yozadi, keyin esa WebAssembly bayt-kodiga kompilyatsiya qilinadi. Bu brauzerlar tomonidan tez va oson dekodlash uchun maxsus ishlab chiqilgan ikkilik format.
WebAssembly ikkilik kodi (.wasm) veb-sahifaga odatda WebAssembly moduli bilan o'zaro aloqada bo'lgan JavaScript kodi bilan birga yuklanadi.

#### Instantiation

Brauzer WebAssembly modulini yuklaganida, u to‘g‘ri formatlanganligi va bajarilishi xavfsiz ekanligiga ishonch hosil qilish uchun avval modul bayt kodini tekshiradi. Ushbu qadam WebAssembly ilovalarining xavfsizligi ta'minlash uchun zarurdir.
Brauzer keyin WebAssembly bayt-kodini Just-In-Time (JIT) kompilyatsiyasi yoki oldindan (AOT) kompilyatsiyasidan foydalangan holda xost mashinasi uchun optimallashtirilgan mahalliy mashina kodiga kompilyatsiya qiladi.
Kompilyatsiyadan so'ng WebAssembly namunasi yaratiladi, u xotira, table va execution uchun zarur bo'lgan boshqa WebAssembly-ga xos elementlarni o'z ichiga oladi.

#### Execution

JavaScript endi optimallashtirilgan mahalliy mashina kodi tufayli deyarli near-native tezlikda bajariladigan WebAssembly funksiyalarini chaqirishi mumkin. WebAssembly nusxasi va JavaScript WebAssembly xotirasini almashishi va boshqarishi va veb-sahifaning DOM (Document Object Model) bilan o'zaro ta'sir qilishi mumkin.

WebAssembly-ning sandboxda execution environment kodning xavfsiz ishlashini ta'minlaydi, tizim resurslariga ruxsatsiz kirishni oldini oladi va zararli kodlar bajarilishini cheklaydi. WebAssembly virtual mashinasi veb-brauzerlarda yuqori unumli ilovalarni bajarishga imkon beradi va an'anaviy JavaScript-ga nisbatan sezilarli yaxshilanishni ta'minlaydi. Sandboxing va tekshirish orqali xavfsiz va xavfsiz muhitni saqlab qolgan holda, u kodni near-native tezlikda kompilyatsiya qiladi va bajaradi.

## Instruction set

Wasm dasturining binary formati uchun asosiy standart VM tomonidan bajariladigan operatsiyalar turlarining o'ziga xos binary kodlashlaridan tashkil topgan instruction set architecture (ISA) (tarjimasi ko'rsatmalar to'plami arxitekturasi) belgilaydi. instructionlar ro'yxati standart xotira load/store instructionlari, numeric, parametric, control flow instructionlari turlarini boshqarish va Wasm-ga xos o'zgaruvchan instructionlarni o'z ichiga oladi. 

Asl standartda (MVP) foydalanilgan opcodelar soni 256 ta mumkin boʻlgan opcodedan 200 tadan ozroq edi. WebAssembly-ning keyingi versiyalari opcodelar sonini 200 dan biroz oshirdi. WebAssembly SIMD proposal (parallel ishlov berish uchun) 128-bitli SIMD uchun muqobil opcode prefiksini (0xfd) taqdim etadi. SIMD prefiksining birlashuvi, shuningdek, SIMD prefiksidan keyin amal qiladigan opcode SIMD opcodini hosil qiladi. SIMD opcodelari "minimum viable product" (MVP) SIMD uchun qo'shimcha 236 ta instructionlarni (jami 436 ta instructionlar uchun) olib keladi. Ushbu instructionlar, "yakunlangan operatsiya kodlari" Google-ning V8 (Google Chrome-da) va Mozilla Firefox-ning tegishli enginesida (lekin veb-brauzerlarning barqaror versiyalarida yoqilmagan) amalga oshiriladi.

![alt text](https://hacks.mozilla.org/files/2018/10/01-02-heavyweight-04-final-e1540219657102.png)

Ushbu SIMD opkodlari ham portativdir va x64 va ARM kabi native instructionlar to'plamlariga tarjima qilinadi. Bundan farqli o'laroq, Java-ning JVM (yoki CIL) ham SIMD-ni o'zlarining opcode darajasida, ya'ni standartda qo'llab-quvvatlamaydi; Ikkalasida ham SIMD tezligini ta'minlaydigan bir nechta parallel API mavjud. Java uchun x64 SIMD uchun ichki ma'lumotlarni qo'shish uchun kengaytma mavjud, u portativ emas, ya'ni ARM yoki smartfonlarda ishlatib bo'lmaydi. Smartfonlar SIMD bilan assembly kodini chaqirish orqali SIMD-ni qo'llab-quvvatlashi mumkin va C# ham xuddi shunday yordamga ega.

## Kod 

2017-yil mart oyida WebAssembly hamjamiyat guruhi boshlang‘ich (MVP) binary formati, JavaScript API va reference interpretator bo‘yicha konsensusga erishdi. WebAssembly binary format bo'lib, u asosan odamlar tomonidan o'qilmaydigan, kompyuterlar tomonidan bajarilishi uchun mo'ljallangan. Shu bilan birga, WebAssembly uchun WebAssembly Text Format (yoki qisqacha .wat) deb nomlangan matn formati ham mavjud bo'lib, u inson tomonidan o'qilishi uchun mo'ljallangan.

Quyidagi jadvalda C da yozilgan 2ta sonni qo'shish va kompilyatsiyadan so'ng unga mos keladigan WebAssembly kodi misoli ko'rsatilgan WebAssembly-ni qo'llab-quvvatlaydigan veb-brauzer yoki runtime environment tomonidan bajariladigan .wat matn formatida (WebAssemblyning odam o'qiy oladigan matnli ko'rinishi) va .wasm binary formatida ko'rsatilgan.

                         C manba kodi va WebAssembly

`C` kodi
```c
#include <stdio.h>

int main() {
    int a = 5;
    int b = 7;
    int c;
    c = a + b;
    printf("Natija: %d\n", c);

    return 0;
}

```
                       WebAssembly `.wat` matn formati

```wasm
(module
 (type $FUNCSIG$ii (func (param i32) (result i32)))
 (type $FUNCSIG$iii (func (param i32 i32) (result i32)))
 (import "env" "printf" (func $printf (param i32 i32) (result i32)))
 (table 0 anyfunc)
 (memory $0 1)
 (data (i32.const 16) "Natija: %d\n\00")
 (export "memory" (memory $0))
 (export "main" (func $main))
 (func $main (; 1 ;) (result i32)
  (local $0 i32)
  (i32.store offset=4
   (i32.const 0)
   (tee_local $0
    (i32.sub
     (i32.load offset=4
      (i32.const 0)
     )
     (i32.const 16)
    )
   )
  )
  (i32.store
   (get_local $0)
   (i32.const 12)
  )
  (drop
   (call $printf
    (i32.const 16)
    (get_local $0)
   )
  )
  (i32.store offset=4
   (i32.const 0)
   (i32.add
    (get_local $0)
    (i32.const 16)
   )
  )
  (i32.const 0)
 )
)

```
                     WebAssembly `.wasm` binary formati

```wasm
wasm-function[1]:
  sub rsp, 0x28                         ; 0x000000 48 83 ec 28
  cmp qword ptr [r14 + 0x28], rsp       ; 0x000004 49 39 66 28
  jae 0x78                              ; 0x000008 0f 83 6a 00 00 00
 0x00000e:                              
  mov esi, dword ptr [r15 + 4]          ; 0x00000e 41 8b 77 04
  sub esi, 0x10                         ; 0x000012 83 ee 10
  mov dword ptr [rsp + 0x1c], esi       ; 0x000015 89 74 24 1c
  mov dword ptr [r15 + 4], esi          ; 0x000019 41 89 77 04
  mov dword ptr [r15 + rsi], 0xc        ; 0x00001d 41 c7 04 37 0c 00 00 00
  mov edi, 0x10                         ; 0x000025 bf 10 00 00 00
  mov qword ptr [rsp], r14              ; 0x00002a 4c 89 34 24
  mov rax, qword ptr [r14 + 0x30]       ; 0x00002e 49 8b 46 30
  mov r14, qword ptr [r14 + 0x38]       ; 0x000032 4d 8b 76 38
  mov r15, qword ptr [r14 + 0x18]       ; 0x000036 4d 8b 7e 18
  call rax                              ; 0x00003a ff d0
  mov r14, qword ptr [rsp]              ; 0x00003c 4c 8b 34 24
  mov r15, qword ptr [r14 + 0x18]       ; 0x000040 4d 8b 7e 18
  mov eax, dword ptr [rsp + 0x1c]       ; 0x000044 8b 44 24 1c
  add eax, 0x10                         ; 0x000048 83 c0 10
  mov dword ptr [r15 + 4], eax          ; 0x00004b 41 89 47 04
  xor eax, eax                          ; 0x00004f 33 c0
  nop                                   ; 0x000051 66 90
  add rsp, 0x28                         ; 0x000053 48 83 c4 28
  ret                                   ; 0x000057 c3

wasm-function[0]:
  sub rsp, 0x18                         ; 0x000000 48 83 ec 18
  mov qword ptr [rsp], r14              ; 0x000004 4c 89 34 24
  mov rax, qword ptr [r14 + 0x30]       ; 0x000008 49 8b 46 30
  mov r14, qword ptr [r14 + 0x38]       ; 0x00000c 4d 8b 76 38
  mov r15, qword ptr [r14 + 0x18]       ; 0x000010 4d 8b 7e 18
  call rax                              ; 0x000014 ff d0
  mov r14, qword ptr [rsp]              ; 0x000016 4c 8b 34 24
  mov r15, qword ptr [r14 + 0x18]       ; 0x00001a 4d 8b 7e 18
  nop                                   ; 0x00001e 66 90
  add rsp, 0x18                         ; 0x000020 48 83 c4 18
  ret                                   ; 0x000024 c3
```

Barcha butun son konstantalari boʻsh joyni tejaydigan, oʻzgaruvchan uzunlikdagi [`LEB128`](https://en.wikipedia.org/wiki/LEB128) kodlash yordamida kodlangan. WebAssembly matn formati S-expressionlari yordamida folded formatda ko'proq kanonik(canonicall) tarzda yozilgan. Instructionlar va expressionlar uchun bu format sof syntactic sugar bo'lib, chiziqli(linear) format bilan xatti-harakatlarida farq qilmaydi.

<!-- `Wasm2wat` orqali yuqoridagi kod quyidagicha dekompilyatsiya qilinadi:

```wasm
(module
  (type $t0 (func (param i64) (result i64)))
  (func $f0 (type $t0) (param $p0 i64) (result i64)
    (if $I0 (result i64) ;; $I0 - foydalanilmaydigan label name
      (i64.eqz
        (local.get $p0)) ;; $p0 nomi bu yerda 0 bilan bir xil
      (then
        (i64.const 1))
      (else
        (i64.mul
          (local.get $p0)
          (call $f0      ;; $f0 nomi bu erda 0 bilan bir xil
            (i64.sub
              (local.get $p0)
              (i64.const 1))))))))
```

E'tibor bering, modul bilvosita kompilyator tomonidan yaratilgan. Funksiyaga aslida binary tizimdagi turdagi jadvalning yozuvi, demak, tip bo'limi va dekompilyator tomonidan chiqarilgan turga reference qilinadi. Kompilyator va dekompilyatorga onlayn kirish mumkin. -->

![alt text](https://raw.githubusercontent.com/ismoilovdevml//website/master/docs/public/wasm.png
)

[`wasmdec`](https://wwwg.github.io/web-wasmdec/) - wasm modullari uchun onlayn dekompilyator.

[`wasmExplorer`](https://mbebenita.github.io/WasmExplorer/) - wasmExplorer - bu wasm modullarini ishlab chiqish va sinovdan o'tkazish uchun veb-asoslangan IDE-ni taqdim etadigan onlayn dastur.

WebAssembly ish jarayoni to'rtta asosiy bosqichdan iborat.

![alt text](https://tutorialzine.com/media/2017/06/wasm-chain.png)

Kodni yozish: Ushbu bosqichda dasturchilar manba kodini C, C++ yoki Rust kabi yuqori darajadagi tillarda yozadilar. Ushbu tillar ko'pincha JavaScript bilan solishtirganda muayyan vazifalar yoki ishlash uchun muhim ilovalar uchun ko'proq mos keladi.

WASM ga kompilyatsiya qilish: Manba kodi yozilgandan so'ng uni WebAssembly bayt-kodiga kompilyatsiya qilish kerak. Bu LLVM yoki Emscripten kabi kompilyatorlar yordamida amalga oshiriladi, ular yuqori darajadagi til kodini WebAssembly formatiga mos keladigan low-leveldagi taqdimotga aylantiradi.

Loading va Decoding: Veb-sahifa yuklanganda, brauzer kompilyatsiya qilingan WebAssembly bayt kodini oladi va uni bajarish uchun mos bo'lgan ichki ko'rinishga dekodlaydi. WebAssembly-ning binary formati JavaScript-ni tahlil qilishdan ko'ra tezroq dekodlashni ta'minlaydi, bu esa unumdorlikni oshirishga yordam beradi.

Execution: Yakuniy bosqichda brauzerning WebAssembly runtime dekodlangan kodni sinov muhitida bajaradi. Bu muhit boshqa ishlaydigan skriptlardan va asosiy tizimdan ajratilgan bo'lib, xavfsizlik va barqarorlikni ta'minlaydi. WebAssembly runtime WASM instructionlarini native mashina kodiga tarjima qilish uchun Just-In-Time (JIT) kompilyatsiyasidan foydalanadi, bu esa kodning near-native darajada ishlashiga imkon beradi.

![alt text](https://assets.website-files.com/63e3d6905bacd6855fa38c1c/63e3d6905bacd6cef0a38f92_How%20does%20Wasm%20work.jpg)


## WebAssemblyning kelajakdagi istiqbollari

WebAssembly (Wasm) kuchli texnologiya sifatida paydo bo'ldi, u veb-ishlab chiqarishni inqilob qilish va zamonaviy veb-ilovalar chegaralarini kengaytirish imkoniyatiga ega. Kodni near-native tezlikda bajarish va brauzerlar uchun ixcham binary formatni taqdim etish qobiliyati turli sohalarda sezilarli darajada qo'llanilgan. Quyida WebAssemblyning kelajakdagi istiqbollari va potentsial ilovalari keltirilgan:

* Veb-ilovalar uchun yaxshilangan unumdorlik

WebAssembly ishlab chiquvchilarga C, C++ va Rust kabi tillarda yuqori samarali kod yozish imkonini beradi, bu esa low-leveldagi virtual mashina kodiga kompilyatsiya qilinishi mumkin, bu esa tezroq bajarilish vaqtlariga olib keladi. Wasm rivojlangan sari, veb-ilovalar tezroq va samaraliroq bo'lishini kutishimiz mumkin.

* Desktop ilovalarini internetga koʻchirish

WebAssembly ishlab chiquvchilarga mavjud desktop ilovalari va vositalarini unumdorlikni sezilarli darajada yoʻqotmasdan internetga koʻchirish imkonini beradi, foydalanish imkoniyatini oshiradi va dasturiy taʼminotni kengroq auditoriyaga taqdim etadi.

* Oʻyin va interaktiv media

WebAssembly yuqori unumdor grafiklarni qoʻllab-quvvatlaganligi sababli, u internetda oʻyin oʻynash va interaktiv media uchun yangi imkoniyatlarni ochadi. Ishlab chiquvchilarga tanish dasturlash tillari va vositalaridan foydalanishga ruxsat berish orqali Wasm yanada murakkab va jozibali veb-ga asoslangan o'yin tajribalarini taqdim etadi.

* Virtual reality va Augmented reality

WebAssembly virtual va augmented reallik ilovalarini ishlab chiqishda muhim rol oʻynashi mumkin, bu esa deyarli near-native ishlash va veb-texnologiyalar bilan uzluksiz integratsiyani taklif qiladi. Bu veb-brauzerlar orqali kirish mumkin bo'lgan immersive VR va AR tajribalarini yaratishda yordam beradi.

* Internet of Things (IoT)

WebAssembly IoT ilovalarida muhim komponent bo'lishi mumkin, bu yerda uning kichik binary o'lchami, tezkor bajarilishi va tilni qo'llab-quvvatlashi qurilmalarning o'zaro ishlashi, energiya samaradorligi va xavfsiz kod bajarilishi nuqtai nazaridan foyda keltirishi mumkin.

* Blokcheyn va decentralized applicationlar 

WebAssembly xususiyatlari blokcheyn platformalari va  decentralized application ehtiyojlariga mos keladi, bu esa ishlab chiquvchilarga turli tillarda smart contractlar yozish imkonini beradi, ish faoliyatini yaxshilaydi va murakkabroq ilovalarni yaratishni osonlashtiradi.

* Edge computing va serverless functionlar

WebAssembly oxirgi foydalanuvchiga yaqin ishlaydigan yengil, samarali va xavfsiz funksiyalarni joylashtirish, javob vaqtlarini yaxshilash va centralized serverlar yukini kamaytirish orqali chekka hisoblash va serversiz arxitekturalarda asosiy rol oʻynashi mumkin.

* Sun'iy intellekt va machine learning

WebAssembly-ning brauzerda kodni samarali ishga tushirish qobiliyati sun'iy intellekt va machine learning ilovalarini internetga olib kirishi mumkin, bu esa foydalanuvchilarga maxsus dasturlarni o'rnatishni talab qilmasdan kuchli algoritmlarga kirish imkonini beradi.

Til va tollarni takomillashtirish: WebAssembly mashhurlik orttirishda davom etar ekan, uning rivojlanishini qo‘llab-quvvatlash, ishlab chiquvchilar samaradorligini oshirish va tobora murakkablashgan veb-ilovalarni yaratish imkonini beruvchi ko‘proq dasturlash tillari va vositalari paydo bo‘ladi.

* Brauzerdan tashqarida WebAssembly

Wasmer va Wasmtime kabi mustaqil WebAssembly runtimelari paydo bo'lishi bilan WebAssembly brauzerdan tashqarida ham ishlatilishi mumkin, bu uni mobil ilovalarni ishlab chiqish va desktop ilovalari kabi boshqa dasturiy ta'minot domenlarida qabul qilish imkoniyatlarini ochib beradi.

WebAssembly rivojlanishda va yetuklikda davom etar ekan, u sanoatning keng doirasi bo'ylab muhim innovatsiyalarni olib borishi kutilmoqda, bu bizning veb-ilovalarni ishlab chiqish va foydalanish uslubimizni o'zgartiradi.


Ikkinchi qismda WASMda kichik loyiha qilamiz )
