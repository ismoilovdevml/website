# WebAssembly WASM

![alt text](https://www.singlestore.com/images/cms/blog-posts/img_blog_post_featured_locally-create-wasm-udfs-rust-singlestoredb.png)


## Kirish

Odatda Wasm nomi bilan tanilgan WebAssembly zamonaviy veb-brauzerlarda xavfsiz, tez va portativ ishlash uchun mo'ljallangan binary instruction (ikkilik ko'rsatmalar) formatidir. U low-leveldagi virtual machine(virtual mashina) bo'lib xizmat qiladi, bu kichik binary footprint saqlab, veb-ilovalarga deyarli local(mahalliy) tezlikda ishlash imkonini beradi. Ushbu inqilobiy texnologiya veb-ishlab chiqishda yangi imkoniyatlarni ochib berdi, bu dasturchilarga C, C++ va Rust kabi dasturlash tillaridan foydalangan holda yuqori samarali veb-ilovalarni yaratish imkonini berdi.

Ushbu maqolada biz WebAssembly-ning texnik jihatlariga chuqur kirib boramiz, uning ichki ishlashi, kelib chiqishi va bugungi veb-ishlab chiqish landshaftidagi zaruriyatini o'rganamiz. Shuningdek, biz C va Rust tillarida Wasm kodini qanday yozish va bajarishni ko'rsatamiz va veb-ishlab chiqishda WebAssembly-ning amaliy qo'llanilishini ko'rsatadigan kichik loyiha bilan yakunlaymiz.

### WebAssembly (Wasm) haqida qisqacha ma'lumot

WebAssembly (Wasm) zamonaviy veb-brauzerlarga kodni near-native tezlikda bajarish imkonini beruvchi ochiq standart binary formatdir. Wasm ixcham binary formatni qo'llab-quvvatlaydigan, tezroq yuklab olish va samarali bajarishni osonlashtiradigan low-leveldagi virtual machine sifatida ishlab chiqilgan. U C, C++, Rust va boshqalar kabi yuqori darajadagi dasturlash tillari uchun kompilyatsiya maqsadi bo'lib xizmat qiladi, bu esa ishlab chiquvchilarga veb-ilovalarida ushbu tillarning kuchidan foydalanish imkonini beradi.

WebAssembly platformadan mustaqil, ya'ni u turli xil operatsion tizimlar va arxitekturalarda o'zgartirishlarsiz ishlashi mumkin. Bundan tashqari, u xavfsizlikka katta e'tibor qaratadi va foydalanuvchi tizimlarini himoya qilish uchun kod xavfsiz sinov muhitida ishlashini ta'minlaydi.

Wasm-ning asosiy afzalliklaridan biri uning JavaScript va boshqa veb-texnologiyalar bilan uzluksiz integratsiyalashuvidir, bu ishlab chiquvchilarga WebAssembly-dan foydalangan holda o'z ilovalarining ishlash uchun muhim bo'lgan qismlarini optimallashtirishga imkon beradi, shu bilan birga JavaScript-ning boshqa komponentlar uchun qulayligi va moslashuvchanligini saqlab qoladi.

2015-yilda e’lon qilingan va birinchi marta 2017-yil mart oyida chiqarilgan WebAssembly 2019-yil 5-dekabrda `World Wide Web Consortium` tavsiyasiga aylandi va 2021-yilda `ACM SIGPLAN` tomonidan Dasturlash tillari uchun dasturiy ta’minot mukofotini oldi. `World Wide Web Consortium (W3C)` standartni Mozilla, Microsoft, Google, Apple, Fastly, Intel va Red Hat hissalari bilan saqlab turadi.

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

MVP chiqarilgandan so'ng, WebAssembly-ni C# (Blazor orqali qo'llab-quvvatlanadi), F# (Blazor yordamida Bolero orqali qo'llab-quvvatlanadi) kabi garbage-collecterli dasturlash tillari uchun kompilyatsiya maqsadiga aylantiradigan multithreading vagarbage-collecterni qo'llab-quvvatlash rejalari mavjud.

Python va hatto JavaScript-da brauzerning just-in-time kompilyatsiya tezligi juda sekin hisoblanadi. Python, Julia, va Ruby kabi bir qator boshqa tillar ham qoʻllab-quvvatlanadi. Bir qator tizimlar Java va boshqa bytecode tillarini JavaScript va WebAssembly-ga kompilyatsiya qilishlari mumkin. Bularga CheerpJ, JWebAssembly va TeaVM kiradi. Bularning barchasi Java byte codi .class fayllarini kirish sifatida qabul qiladi va Groovy, Kotlin va Scala kabi boshqa JVM tillaridan ham foydalanishga imkon beradi.