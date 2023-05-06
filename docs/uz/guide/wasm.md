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
