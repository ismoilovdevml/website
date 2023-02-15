# CPU cache nima va u qanday ishlaydi?

![alt text](https://cdn.arstechnica.net/wp-content/uploads/2022/06/cpu.jpeg)

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

![alt text](https://www.computerhope.com/issues/pictures/cpu-cache-die.png)


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


## CPU cache tarixi

Kesh texnologiyasining dastlabki tarixi virtual xotiraning ixtirosi va ishlatilishi bilan chambarchas bog'liq. Yarim o'tkazgich xotiralarining tanqisligi va narxi tufayli 1960-yillardagi dastlabki asosiy kompyuterlar jismoniy xotiraning murakkab ierarxiyasidan foydalangan, ular dasturlar tomonidan ishlatiladigan tekis virtual xotira maydoniga joylashtirilgan. Xotira texnologiyalari yarim o'tkazgich, magnit yadro, drum va diskni qamrab oladi. Dasturlar tomonidan ko'rilgan va foydalaniladigan virtual xotira tekis bo'ladi va keshlash protsessorga kirishdan oldin ma'lumotlar va ko'rsatmalarni eng tez xotiraga olish uchun ishlatiladi. Kesh hajmini optimallashtirish uchun keng qamrovli tadqiqotlar o'tkazildi.

Dastlabki kesh dizaynlari butunlay kesh va RAMning to'g'ridan-to'g'ri narxiga va o'rtacha bajarish tezligiga qaratilgan. Eng so'nggi kesh dizaynlarida energiya samaradorligi , nosozliklarga chidamlilik va boshqa maqsadlar ham hisobga olinadi.

Kompyuter arxitektorlari uchun kesh aylanishi vaqti, energiya va maydon o'rtasidagi kelishuvlarni o'rganishga yordam beradigan bir nechta vositalar mavjud; CACTI kesh simulyatori va SimpleScalar ko'rsatmalar to'plami simulyatori ikkita ochiq manba variantidir.


CPU cachening  dastlabki namunalari 1960-yillarda Atlas 2 va IBM System/360 Model 85 ni o'z ichiga oladi. Keshni ishlatgan birinchi protsessorlar faqat bitta darajadagi keshga ega edi; keyingi 1-darajali keshdan farqli o'laroq, u L1d (data uchun) va L1i (instructions uchun) ga bo'linmadi.

Split L1 cache  1976 yilda IBM 801 protsessoridan boshlangan, 1980-yillarning oxirida mainstream aylandi va 1997 yilda ARMv5TE bilan o'rnatilgan CPU bozoriga kirdi

2015-yilda hatto sub-dollar SoC ham L1 keshini ajratdi. Ularda L2 keshlari va kattaroq protsessorlar uchun L3 keshlari ham mavjud. L2 keshi odatda bo'linmaydi va allaqachon ajratilgan L1 keshi uchun umumiy ombor vazifasini bajaradi.

Ularda L2 keshlari va kattaroq protsessorlar uchun L3 keshlari ham mavjud. L2 keshi odatda bo'linmaydi va allaqachon ajratilgan L1 keshi uchun common repository vazifasini bajaradi. Ko'p yadroli protsessorning har bir yadrosi maxsus L1 keshiga ega va odatda yadrolar o'rtasida taqsimlanmaydi. L2 keshi va yuqori darajadagi keshlar yadrolar o'rtasida taqsimlanishi mumkin. L4 keshi hozirda kam uchraydi va odatda static random-access memory (SRAM) emas, balki dynamic random-access memory (DRAMning bir ko'rinishida) alohida qolipda yoki chipda (istisno, eDRAM shakli) mavjud. keshning barcha darajalari uchun L1 gacha ishlatiladi).

### Birinchi  TLB implementationlar

TLB dan birinchi hujjatlashtirilgan foydalanish GE 645 va IBM 360/67 da boʻlgan , ularning ikkalasi ham associative xotiradan TLB sifatida foydalangan.

### Birinchi instruction cache

Instruction cachedan birinchi hujjatlashtirilgan foydalanish CDC 6600 da bo'lgan 

### Birinchi data cache

Data cachedan birinchi hujjatlashtirilgan foydalanish IBM System/360 Model 85 da boʻlgan.

### 68k microprocessorlarda

1982-yilda chiqarilgan 68010 "loop mode" ga ega bo'lib, uni faqat ikkita ko'rsatmalardan iborat bo'lgan accelerates loop kichik va maxsus ko'rsatmalar keshi deb hisoblash mumkin. 1984 yilda chiqarilgan 68020 uni 256 baytlik odatiy ko'rsatmalar keshi bilan almashtirdi, bu haqiqiy chipdagi kesh xotirasiga ega bo'lgan birinchi 68k seriyali protsessor bo'ldi.

### X86 mikroprotsessorlarida

386 da x86 mikroprotsessorlari 20 MGts va undan yuqori soat tezligiga erishganligi sababli, unumdorlikni oshirish uchun tizimlarda kichik hajmdagi tez kesh xotirasi qo'llanila boshlandi. Buning sababi, asosiy xotira uchun ishlatiladigan DRAMning sezilarli kechikishi, 120 ns gacha, shuningdek, yangilash davrlari. Kesh qimmatroq, ammo sezilarli darajada tezroq SRAM xotira hujayralaridan qurilgan bo'lib, o'sha paytda ular taxminan 10-25 ns kechikishlarga ega edi. 

X86 mikroprotsessorlarida keshni amalga oshirishning navbatdagi rivojlanishi `Pentium Pro` bilan boshlandi , u ikkilamchi keshni mikroprotsessor bilan bir xil chastotada mikroprotsessor bilan bir xil paketga olib keldi.

Motherboardagi keshlar `AMD K6-2` va `AMD K6-III` protsessorlari tufayli uzoq vaqt mashhur bo'ldi, ular hali ham `Socket 7` dan foydalanadilar, bundan oldin Intel tomonidan motherboard keshlari bilan foydalanilgan. `K6-III` 256 KiB o'lchamdagi `L2` keshini o'z ichiga olgan va `L3` deb nomlangan uchinchi darajali kesh sifatida bortdagi keshdan foydalangan (2 Mb gacha board keshiga ega motherboardlar ishlab chiqarilgan). `Socket 7` eskirganidan so'ng, motherboardagi kesh x86 tizimlaridan yo'qoldi.

### ARM mikroprotsessorlarida 

![alt text](https://images.macrumors.com/t/1ntCzE-GELQyTx3lKWF0S1T7AUo=/400x0/article-new/2013/09/m1-chip-unified-memory-architecture-speed.jpg?lossy)
![alt text](https://i0.wp.com/chipsandcheese.com/wp-content/uploads/2022/05/m1cache.png?resize=533%2C285&ssl=1)


Apple `M1` protsessorida yadro turiga qarab har bir yadro uchun `128` yoki `192` KiB instruction L1 keshi mavjud (latenc/single-thread performance), faqat noutbuk uchun emas, balki har qanday CPU tipidagi L1 keshi uchun juda katta, umumiy kesh esa Xotira hajmi juda katta emas (jami o'tkazish qobiliyati uchun muhimroq), noutbuk uchun va ancha kattaroq umumiy o'lchamlar (masalan, L3 yoki L4) IBMning asosiy kompyuterlarida mavjud.

## Cache structure tuzilishi

Cache row yozuvlari odatda quyidagi tuzilishga ega:

| tag        | data block    | flag bits |
| ---------- |:-------------:| ---------:|


`data block (cache line)` asosiy xotiradan olingan haqiqiy ma'lumotlarni o'z ichiga oladi. `tag` asosiy xotiradan olingan haqiqiy ma'lumotlarning manzilini (qismini) o'z ichiga oladi.

Keshning `"size"` - bu asosiy xotira ma'lumotlarining hajmi. Ushbu o'lchamni har bir ma'lumot blokida saqlangan baytlar soni keshda saqlangan bloklar soniga ko'ra hisoblash mumkin. (tag, flag va error correction code bitlari oʻlchamga kiritilmagan, lekin ular keshning jismoniy maydoniga taʼsir qilsa ham )

cache line (xotira bloki) bilan birga keladigan samarali xotira manzili ( `MSB` dan `LSB` ga) tag, indeks va blok ofsetiga bo'linadi.

| tag        | index         | block offset |
| ---------- |:-------------:| ------------:|

index ma'lumotlarning qaysi keshga kiritilganligini tavsiflaydi. index uzunligi ![alt text](https://wikimedia.org/api/rest_v1/media/math/render/svg/b36533bd5e32a9b0885d6a902752ea25dd1312c3) `s` cache sets uchun bitlar .

block offset cache rowdagi saqlangan ma'lumotlar blokida kerakli ma'lumotlarni belgilaydi. 

Odatda effective address baytlarda bo'ladi, shuning uchun blokning offset uzunligi ![alt text](https://wikimedia.org/api/rest_v1/media/math/render/svg/1b8034533918755b6862f7ec7898c7912b636bbc) bit, bu erda b - ma'lumotlar blokiga to'g'ri keladigan baytlar soni. tag addressning eng muhim bitlarini o'z ichiga oladi, ular joriy to'plamdagi barcha satrlarga nisbatan tekshiriladi (to'plam indeks bo'yicha olingan), ushbu to'plamda so'ralgan address mavjud yoki yo'qligini tekshirish. Agar shunday bo'lsa, keshga kirish sodir bo'ladi. Bitlardagi tag uzunligi quyidagicha:


`tag_length = address_length - index_length - block_offset_length`

Ba'zi mualliflar block offsetni oddiygina `"offset"` yoki `"displacement"` deb atashadi. 

## Misol 

Original Pentium 4 protsessorida 64 baytli cache blocklari bilan 8 KB hajmdagi to'rt tomonlama L1 associative ma'lumotlar keshi mavjud edi. Demak, `8 KiB / 64 = 128` cache blocklari mavjud.

To'plamlar soni kesh bloklari sonining associativity yo'llari soniga bo'linishiga teng bo'lib, bu `128/4 = 32` to'plamga olib keladi va shuning uchun `2**5 = 32` different indekslar. 
`2**6  = 64` mumkin bo'lgan ofset mavjud. CPU address kengligi 32 bit bo'lganligi sababli, bu tag maydoni uchun `32 - 5 - 6 = 21` bitni bildiradi.

Original 4 protsessorida, shuningdek, 128 baytli cache block bilan 256 KiB o'lchamdagi sakkiz tomonlama o'rnatilgan L2 associative keshiga ega edi. Bu teg maydoni uchun `32 - 8 - 7 = 17` bitni bildiradi

## Flag bits

Instruction cache har bir cache rowga kirish uchun faqat flag bitini talab qiladi: joriy bit. Yaroqli bit cache block to'g'ri ma'lumotlar bilan yuklangan yoki yuklanmaganligini ko'rsatadi.

Qurilma yoqilganda, hardware barcha keshlardagi barcha joriy bitlarni "invalid" ga o'rnatadi. Ba'zi tizimlar, shuningdek, boshqa paytlarda yaroqli bitni "invalid" qilib qo'yadi , masalan, bitta protsessor keshidagi multi-master bus snooping tekshirish hardware boshqa protsessordan address broadcastni eshitsa va local cachedagi ma'lum ma'lumotlar bloklari mavjudligini tushunsa. endi stale va invalid deb belgilanishi kerak.

Data cache odatda har bir cache line uchun ikkita flag bitini talab qiladi - valid bit va dirty bit . Dirty bit to'plamiga ega bo'lish, bog'langan cache line asosiy xotiradan o'qilganidan beri o'zgartirilganligini ko'rsatadi ("dirty"), ya'ni protsessor ushbu qatorga ma'lumotlarni yozgan va yangi qiymat asosiy xotiraga to'liq tarqalmagan.

## Cache miss


Cache miss - bu keshdagi ma'lumotlarni o'qish yoki yozish bo'yicha muvaffaqiyatsiz urinish, bu esa asosiy xotiraga uzoqroq kechikish bilan kirishga olib keladi. Cache missning uchta turi mavjud: instruction read miss, data read miss va data write miss.

Instruction cachedagi cache read miss yuborilganligi odatda eng katta kechikishga olib keladi, chunki protsessor yoki hech bo'lmaganda execution ishi instruction asosiy xotiradan olinmaguncha kutishi (to'xtab turishi) kerak. Ma'lumotlar keshidagi cache read miss odatda kichikroq kechikishni keltirib chiqaradi, chunki kesh o'qilishiga bog'liq bo'lmagan ko'rsatmalar berilishi mumkin va ma'lumotlar asosiy xotiradan qaytarilgunga qadar bajarishni davom ettiradi va bog'liq ko'rsatmalar executionni davom ettirishi mumkin. Ma'lumotlarga cache write miss odatda eng qisqa kechikishni keltirib chiqaradi, chunki yozishni navbatga qo'yish mumkin va keyingi ko'rsatmalarni bajarishda bir nechta cheklovlar mavjud; protsessor navbat to'lguncha davom etishi mumkin.

Ixtisoslashuv va ko'p darajali keshlashni tasvirlash uchun bu erda AMD Athlon 64 protsessoridagi K8 yadrosining kesh ierarxiyasi keltirilgan
![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Cache%2Chierarchy-example.svg/500px-Cache%2Chierarchy-example.svg.png)

Xato va kamchiliklar bo'lsa uzur so'rayman )

[Telegram Blog](https://t.me/Otabek_Ismoilov)

Foydanilgan Manbalar

[Makeuseof.com](https://www.makeuseof.com/tag/what-is-cpu-cache/)

[Wikipedia](https://en.wikipedia.org/wiki/CPU_cache)

