# CPU cache qanday ishlaydi? L1, L2 va L3 cachelari nima?


So'nggi yillarda kompyuter protsessorlari ancha rivojlangan. Har yili tranzistorlar kichrayadi va o'zgarishlar Moore's qonuni keraksiz bo'ladigan nuqtaga yetadi.

Protsessorlar haqida gap ketganda, faqat tranzistorlar va chastotalar emas, balki kesh ham hisobga olinadi.

Markaziy protsessorlar (Central Processing Units) muhokama qilinayotganda kesh xotirasi haqida eshitgan bo'lishingiz mumkin. Biroq, biz ushbu CPU kesh xotira raqamlariga yetarlicha e'tibor bermaymiz va ular CPU reklamalarining asosiy diqqatga sazovor joyi emas.

Xo'sh, CPU keshi qanchalik muhim va u qanday ishlaydi?

## CPU Cache Memory nima?

Oddiy qilib aytganda, protsessor xotirasi keshi shunchaki tezkor xotira turidir. Hisoblashning dastlabki kunlarida protsessor tezligi va xotira tezligi past edi. Biroq, 1980-yillarda protsessor tezligi tez o'sishni boshladi. O'sha paytdagi tizim xotirasi (RAM) ortib borayotgan protsessor tezligiga bardosh bera olmadi yoki mos kelmadi va shuning uchun yangi turdagi ultra tez xotira paydo bo'ldi: CPU kesh xotirasi.

Endi sizning kompyuteringizda bir nechta xotira turlari mavjud.

Ma'lumotlarning asosiy qismini - operatsion tizim va dasturlarni saqlaydigan hard disk yoki SSD kabi asosiy xotira mavjud.

Keyingi navbatda bizda RAM deb nomlanuvchi Random Access Memory mavjud . Bu birlamchi saqlashdan ancha tezroq, lekin faqat qisqa muddatli saqlash vositasidir. Sizning kompyuteringiz va undagi dasturlar tez-tez kiriladigan ma'lumotlarni saqlash uchun operativ xotiradan foydalanadi, bu esa kompyuteringizda harakatlarni yaxshi va tez bajarishga yordam beradi.

Nihoyat, protsessor o'zida CPU memory cache deb nomlanuvchi tezroq xotira birliklariga ega.

Kompyuter xotirasi uning ishlash tezligiga asoslangan ierarxiyaga ega. CPU keshi bu ierarxiyaning eng yuqori qismida joylashgan bo'lib, eng tezkor hisoblanadi. Shuningdek, u markaziy protsessorning bir qismi bo'lib, markaziy ishlov berish sodir bo'ladigan joyga eng yaqin joylashgan.

Kompyuter xotirasi ham har xil turdagi bo'ladi.

Cache memory Static RAM (SRAM), shaklidir, sizning oddiy tizimingizning operativ xotirasi esa Dynamic RAM (DRAM) deb nomlanadi. Static RAM doimiy yangilanishni talab qilmasdan ma'lumotlarni saqlashi mumkin, DRAMdan farqli o'laroq, bu SRAMni kesh xotirasi uchun ideal qiladi.

## CPU Cache qanday ishlaydi?

Kompyuteringizdagi dasturlar va ilovalar protsessor talqin qiladigan va ishga tushiradigan instructions to'plami sifatida yaratilgan. Dasturni ishga tushirganingizda, instructions asosiy xotiradan (sizning hard diskingiz) protsessorga o'tadi. Bu yerda xotira ierarxiyasi o'ynaydi.

Ma'lumotlar birinchi navbatda RAMga yuklanadi va keyin protsessorga yuboriladi. Hozirgi vaqtda protsessorlar soniyada juda ko'p ko'rsatmalarni bajarishga qodir. Quvvatdan to'liq foydalanish uchun protsessor o'ta tezkor xotiraga kirishi kerak, ya'ni CPU cachega bu yerda.

Memory controller ma'lumotlarni operativ xotiradan oladi va protsessor keshiga yuboradi. Protsessoringizga qarab, kontroller protsessorda yoki motherboardgizda joylashgan Northbridge chipsetida joylashgan.

Keyin memory cache protsessor ichidagi ma'lumotlarni oldinga va orqaga olib boradi. Xotira ierarxiyasi CPU cacheda ham mavjud.

## CPU Cache Memory darajalari: L1, L2 va L3

CPU kesh xotirasi uchta "level" ga bo'lingan: L1, L2 va L3. Xotira ierarxiyasi yana tezlik va shuning uchun kesh hajmiga bog'liq.

Xo'sh, CPU cache hajmi ishlashga ta'sir qiladimi?

### L1 Cache

L1 (1-darajali) cache - bu kompyuter tizimida mavjud bo'lgan eng tezkor xotira. Kirishning ustuvorligi nuqtai nazaridan, L1 keshi ma'lum bir vazifani bajarishda protsessorga kerak bo'lgan ma'lumotlarga ega.

L1 keshining hajmi protsessorga bog'liq. Ba'zi yuqori darajadagi iste'molchi protsessorlari hozirda Intel i9-9980XE kabi 1MB L1 keshiga ega, ammo ular juda katta mablag'ni talab qiladi va hali ham kam va juda uzoq. Intelning Xeon diapazoni kabi ba'zi server chipsetlarida 1-2MB L1 memory cache ham mavjud.

"Standart" L1 kesh hajmi yo'q, shuning uchun sotib olishdan oldin aniq L1 xotira kesh hajmini aniqlash uchun CPU xususiyatlarini tekshirishingiz kerak.

L1 cache odatda ikki qismga bo'linadi: instruction cache va data cache. Instruction cache protsessor bajarishi kerak bo'lgan operatsiya haqidagi ma'lumotlar bilan shug'ullanadi, data cache esa operatsiya bajarilishi kerak bo'lgan ma'lumotlarni saqlaydi.

### L2 Cache

L2 (2-darajali) cache L1 keshiga qaraganda sekinroq, lekin hajmi kattaroq. L1 keshi kilobaytlarda o'lchanadigan bo'lsa, zamonaviy L2 xotira keshlari megabaytlarda o'lchanadi. Masalan, AMD-ning yuqori baholangan Ryzen 5 5600X-da 384KB L1 kesh va 3MB L2 kesh (plus 32MB L3 cache) mavjud.

L2 kesh hajmi protsessorga qarab farq qiladi, lekin uning hajmi odatda 256KB dan 8MB gacha. Aksariyat zamonaviy protsessorlar 256 KB L2 keshdan ko'proq joy oladi va bu o'lcham endi kichik hisoblanadi. Bundan tashqari, eng kuchli zamonaviy protsessorlarning ba'zilari 8 MB dan oshiq kattaroq L2 memory cachega ega.

Tezlik haqida gap ketganda, L2 keshi L1 keshidan orqada qoladi, ammo tizimingizning operativ xotirasidan ancha tezroq. L1 xotira keshi odatda operativ xotiradan 100 baravar tezroq, L2 keshi esa 25 baravar tezroq.