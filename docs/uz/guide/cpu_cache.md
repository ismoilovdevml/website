# CPU cache qanday ishlaydi? L1, L2 va L3 cachelari nima?


So'nggi yillarda kompyuter protsessorlari ancha rivojlangan. Har yili tranzistorlar kichrayadi va o'zgarishlar Moore's qonuni keraksiz bo'ladigan nuqtaga yetadi.

Protsessorlar haqida gap ketganda, faqat tranzistorlar va chastotalar emas, balki cache ham hisobga olinadi.

Markaziy protsessorlar (Central Processing Units) muhokama qilinayotganda cache memory haqida eshitgan bo'lishingiz mumkin. Biroq, biz ushbu CPU cache memory raqamlariga yetarlicha e'tibor bermaymiz.

Xo'sh, CPU cache qanchalik muhim va u qanday ishlaydi?

## CPU Cache Memory nima?

Oddiy qilib aytganda, CPU memory cache shunchaki tezkor xotira turidir. Hisoblashning dastlabki kunlarida protsessor tezligi va xotira tezligi past edi. Biroq, 1980-yillarda protsessor tezligi tez o'sishni boshladi. O'sha paytdagi system memory (RAM) ortib borayotgan protsessor tezligiga bardosh bera olmadi yoki mos kelmadi va shuning uchun yangi turdagi ultra-fast memory paydo bo'ldi: CPU cache memory.

Endi sizning kompyuteringizda bir nechta xotira turlari mavjud.

Ma'lumotlarning asosiy qismini - operatsion tizim va dasturlarni saqlaydigan hard disk yoki SSD kabi asosiy xotira mavjud.

Keyingi navbatda bizda RAM deb nomlanuvchi Random Access Memory mavjud . Bu birlamchi saqlashdan ancha tezroq, lekin faqat qisqa muddatli saqlash vositasidir. Sizning kompyuteringiz va undagi dasturlar tez-tez kiriladigan ma'lumotlarni saqlash uchun operativ xotiradan foydalanadi, bu esa kompyuteringizda harakatlarni yaxshi va tez bajarishga yordam beradi.

Nihoyat, protsessor o'zida CPU memory cache deb nomlanuvchi tezroq xotira birliklariga ega.

Kompyuter xotirasi uning ishlash tezligiga asoslangan ierarxiyaga ega. CPU keshi bu ierarxiyaning eng yuqori qismida joylashgan bo'lib, eng tezkor hisoblanadi. Shuningdek, u markaziy protsessorning bir qismi bo'lib, markaziy ishlov berish sodir bo'ladigan joyga eng yaqin joylashgan.

Kompyuter xotirasi ham har xil turdagi bo'ladi.

Cache memory Static RAM (SRAM), shaklidir, sizning oddiy tizimingizning operativ xotirasi esa Dynamic RAM (DRAM) deb nomlanadi. Static RAM doimiy yangilanishni talab qilmasdan ma'lumotlarni saqlashi mumkin, DRAMdan farqli o'laroq, bu SRAMni cache memory uchun ideal qiladi.

## CPU Cache qanday ishlaydi?

Kompyuteringizdagi dasturlar va ilovalar protsessor talqin qiladigan va ishga tushiradigan instructions to'plami sifatida yaratilgan. Dasturni ishga tushirganingizda, instructions asosiy xotiradan (sizning hard diskingiz) protsessorga o'tadi. Bu yerda xotira ierarxiyasi o'ynaydi.

Ma'lumotlar birinchi navbatda RAMga yuklanadi va keyin protsessorga yuboriladi. Hozirgi vaqtda protsessorlar soniyada juda ko'p ko'rsatmalarni bajarishga qodir. Quvvatdan to'liq foydalanish uchun protsessor o'ta tezkor xotiraga kirishi kerak, ya'ni CPU cachega bu yerda.

Memory controller ma'lumotlarni operativ xotiradan oladi va protsessor keshiga yuboradi. Protsessoringizga qarab, kontroller protsessorda yoki motherboardgizda joylashgan Northbridge chipsetida joylashgan.

Keyin memory cache protsessor ichidagi ma'lumotlarni oldinga va orqaga olib boradi. Xotira ierarxiyasi CPU cacheda ham mavjud.

## CPU Cache Memory darajalari: L1, L2 va L3

CPU Cache memory uchta "level" ga bo'lingan: L1, L2 va L3. Xotira ierarxiyasi yana tezlik va shuning uchun kesh hajmiga bog'liq.

Xo'sh, CPU cache hajmi ishlashga ta'sir qiladimi?

### L1 Cache

L1 (1-darajali) cache - bu kompyuter tizimida mavjud bo'lgan eng tezkor xotira. Kirishning ustuvorligi nuqtai nazaridan, L1 keshi ma'lum bir vazifani bajarishda protsessorga kerak bo'lgan ma'lumotlarga ega.

L1 keshining hajmi protsessorga bog'liq. Ba'zi yuqori darajadagi iste'molchi protsessorlari hozirda Intel i9-9980XE kabi 1MB L1 keshiga ega, ammo ular juda katta mablag'ni talab qiladi. Intelning Xeon diapazoni kabi ba'zi server chiplarida 1-2MB L1 memory cache ham mavjud.

"Standart" L1 kesh hajmi yo'q, shuning uchun sotib olishdan oldin aniq L1 xotira kesh hajmini aniqlash uchun CPU xususiyatlarini tekshirishingiz kerak.

L1 cache odatda ikki qismga bo'linadi: instruction cache va data cache. Instruction cache protsessor bajarishi kerak bo'lgan operatsiya haqidagi ma'lumotlar bilan shug'ullanadi, data cache esa operatsiya bajarilishi kerak bo'lgan ma'lumotlarni saqlaydi.

### L2 Cache

L2 (2-darajali) cache L1 keshiga qaraganda sekinroq, lekin hajmi kattaroq. L1 keshi kilobaytlarda o'lchanadigan bo'lsa, zamonaviy L2 xotira keshlari megabaytlarda o'lchanadi. Masalan, AMD-ning yuqori baholangan Ryzen 5 5600X-da 384KB L1 kesh va 3MB L2 kesh (plus 32MB L3 cache) mavjud.

L2 kesh hajmi protsessorga qarab farq qiladi, lekin uning hajmi odatda 256KB dan 8MB gacha. Aksariyat zamonaviy protsessorlar 256 KB L2 keshdan ko'proq joy oladi va bu o'lcham endi kichik hisoblanadi. Bundan tashqari, eng kuchli zamonaviy protsessorlarning ba'zilari 8 MB dan oshiq kattaroq L2 memory cachega ega.

Tezlik haqida gap ketganda, L2 keshi L1 keshidan orqada qoladi, ammo tizimingizning operativ xotirasidan ancha tezroq. L1 xotira keshi odatda operativ xotiradan 100 baravar tezroq, L2 keshi esa 25 baravar tezroq.

### L3 Cache

L3 (3-darajali) cache. Dastlabki kunlarda L3 memory cache aslida motherboarda topilgan. Bu juda uzoq vaqt oldin, aksariyat protsessorlar faqat bitta yadroli protsessorlar bo'lganida edi. Endi sizning protsessoringizdagi L3 keshi juda katta bo'lishi mumkin, yuqori darajadagi iste'molchi protsessorlari L3 keshlari 32 MB gacha. Ba'zi server protsessorlari L3 keshlari bundan oshib ketishi mumkin, ular 64 MB gacha.

L3 cache eng katta, ammo eng sekin cache memory unit. Zamonaviy protsessorlar protsessorning o'zida L3 keshini o'z ichiga oladi. Ammo L1 va L2 keshlari chipning o'zida har bir yadro uchun mavjud bo'lsa-da, L3 keshi butun chip foydalanishi mumkin bo'lgan general memory poolga ko'proq o'xshaydi.

## Menga qancha CPU Cache Memory kerak

Bu yaxshi savol. Siz kutganingizdek ko'proq yaxshi. Eng so'nggi protsessorlar, tabiiyki, eski avlodlarga qaraganda ko'proq  CPU cache memoryni o'z ichiga oladi, shuningdek, faster cache memoryni ham. Siz qila oladigan narsa, protsessorlarni qanday qilib samarali solishtirishni o'rganishdir.

## Ma'lumotlar CPU Memory Cachelar o'rtasida qanday o'tadi?


Yaxshi savol: CPU cache memory qanday ishlaydi?


Eng asosiy so'zlar bilan aytganda, ma'lumotlar RAMdan L3 keshiga, keyin L2 va nihoyat L1 ga o'tadi. Protsessor operatsiyani bajarish uchun ma'lumotlarni qidirganda, u birinchi navbatda uni L1 keshida topishga harakat qiladi. Agar protsessor uni topsa, bu holat cache hit deb ataladi. Keyin uni L2 va keyin L3 da topishga davom etadi.

Agar protsessor memory cachelarning birortasida ma'lumotlarni topmasa, u system memory (RAM)ga  kirishga harakat qiladi. Bu sodir bo'lganda, u cache miss deb nomlanadi.

Endi, biz bilganimizdek, cache asosiy xotira va protsessor o'rtasidagi ma'lumotni oldinga va orqaga uzatishni tezlashtirish uchun mo'ljallangan. Xotiradan ma'lumotlarga kirish uchun zarur bo'lgan vaqt "latency" deb ataladi.

L1 cache memory eng past kechikishga ega, u eng tez va yadroga eng yaqin, L3 esa eng yuqori. cache miss yuborilganda memory cache kechikishi ortadi, chunki protsessor system memorydan ma'lumotlarni olishi kerak.

Kompyuterlar tezroq va samaraliroq bo'lishi bilan kechikish qisqarishda davom etmoqda. Kam kechikishli DDR4 RAM va super-fast SSD'lar kechikishni kamaytiradi, bu esa butun tizimingizni har qachongidan ham tezroq qiladi. Bunda system memoryning tezligi ham muhim.

[Qo'shimca ma'lumot uchun animatsion videorolik](https://www.youtube.com/watch?v=yi0FhRqDJfo)

Xato va kamchiliklar bo'lsa uzur so'rayman )

Davomi Bor :) 
