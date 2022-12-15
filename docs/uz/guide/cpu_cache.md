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