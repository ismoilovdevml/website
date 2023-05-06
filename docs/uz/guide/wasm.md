# WebAssembly WASM

![alt text](https://www.singlestore.com/images/cms/blog-posts/img_blog_post_featured_locally-create-wasm-udfs-rust-singlestoredb.png)


## Kirish

Odatda Wasm nomi bilan tanilgan WebAssembly zamonaviy veb-brauzerlarda xavfsiz, tez va portativ ishlash uchun mo'ljallangan binary instruction (ikkilik ko'rsatmalar) formatidir. U low-leveldagi virtual machine(virtual mashina) bo'lib xizmat qiladi, bu kichik binary footprint saqlab, veb-ilovalarga deyarli local(mahalliy) tezlikda ishlash imkonini beradi. Ushbu inqilobiy texnologiya veb-ishlab chiqishda yangi imkoniyatlarni ochib berdi, bu dasturchilarga C, C++ va Rust kabi dasturlash tillaridan foydalangan holda yuqori samarali veb-ilovalarni yaratish imkonini berdi.

Ushbu maqolada biz WebAssembly-ning texnik jihatlariga chuqur kirib boramiz, uning ichki ishlashi, kelib chiqishi va bugungi veb-ishlab chiqish landshaftidagi zaruriyatini o'rganamiz. Shuningdek, biz C va Rust tillarida Wasm kodini qanday yozish va bajarishni ko'rsatamiz va veb-ishlab chiqishda WebAssembly-ning amaliy qo'llanilishini ko'rsatadigan kichik loyiha bilan yakunlaymiz.

### WebAssembly (Wasm) haqida qisqacha ma'lumot

WebAssembly (Wasm) zamonaviy veb-brauzerlarga kodni near-native tezlikda bajarish imkonini beruvchi ochiq standart binary formatdir. Wasm ixcham binary formatni qo'llab-quvvatlaydigan, tezroq yuklab olish va samarali bajarishni osonlashtiradigan low-leveldagi virtual machine sifatida ishlab chiqilgan. U C, C++, Rust va boshqalar kabi yuqori darajadagi dasturlash tillari uchun kompilyatsiya maqsadi bo'lib xizmat qiladi, bu esa ishlab chiquvchilarga veb-ilovalarida ushbu tillarning kuchidan foydalanish imkonini beradi.

WebAssembly platformadan mustaqil, ya'ni u turli xil operatsion tizimlar va arxitekturalarda o'zgartirishlarsiz ishlashi mumkin. Bundan tashqari, u xavfsizlikka katta e'tibor qaratadi va foydalanuvchi tizimlarini himoya qilish uchun kod xavfsiz sinov muhitida ishlashini ta'minlaydi.

Wasm-ning asosiy afzalliklaridan biri uning JavaScript va boshqa veb-texnologiyalar bilan uzluksiz integratsiyalashuvidir, bu ishlab chiquvchilarga WebAssembly-dan foydalangan holda o'z ilovalarining ishlash uchun muhim bo'lgan qismlarini optimallashtirishga imkon beradi, shu bilan birga JavaScript-ning boshqa komponentlar uchun qulayligi va moslashuvchanligini saqlab qoladi.