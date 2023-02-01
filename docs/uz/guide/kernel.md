# Kernel nima va u qanday ishlaydi?

![alt text](https://pemmzchannel.com/wp-content/uploads/2022/06/kernel-panic-3.10.0-229.4.2.el7_.png)

`Kernel` - bu kompyuterning operatsion tizimining yadrosi bo'lgan kompyuter dasturi va odatda tizimdagi hamma narsani to'liq nazorat qiladi. Bu operatsion tizim kodining har doim xotirada joylashgan qismi va hardware va software componentlari o'rtasidagi o'zaro aloqalarni osonlashtiradi.
To'liq kernel qurilma drayverlari orqali barcha hardware resurslarini (masalan, I/O(input/output), memory, kriptografiya) boshqaradi, bunday resurslarga tegishli jarayonlar o'rtasidagi conflictni hal qiladi va umumiy resurslardan foydalanishni optimallashtiradi, masalan. CPU va keshdan foydalanish, fayl tizimlari va network socketlari.
Ko'pgina tizimlarda kernel ishga tushirilganda (bootloderdan keyin) yuklangan birinchi dasturlardan biridir.
U ishga tushirishning qolgan qismini, shuningdek, xotira, tashqi qurilmalar va dasturiy ta'minotdan input/output (I/O) so'rovlarini boshqaradi va ularni markaziy protsessor uchun ma'lumotlarni qayta ishlash instructionlariga aylantiradi. Kernelning critical kodi odatda xotiraning alohida maydoniga yuklanadi, u application software yoki operatsion tizimning boshqa unchalik muhim bo'lmagan qismlari tomonidan kirishdan himoyalangan. Kernel ushbu himoyalangan kernel maydonida running process, hard disk kabi hardware qurilmalarini boshqarish va uzilishlarni boshqarish kabi vazifalarini bajaradi.

Bundan farqli o'laroq, brauzerlar, word processorlari va audio yoki video playerlar kabi amaliy dasturlar xotiraning alohida maydonidan, user space(foydalanuvchi maydoni)dan foydalanadi. Kernel interfeysi low-level abstraction layerdir.


![alt tab](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Kernel_Layout.svg/220px-Kernel_Layout.svg.png)

Rasmda soddalashtirilgan kernel ishlashi




### Random-access memory RAM

Random-access memory (RAM) dastur instructionlarini va ma'lumotlarni saqlash uchun ishlatiladi. Odatda, dastur bajarilishi uchun ikkalasi ham xotirada bo'lishi kerak.Ko'pincha bir nechta dasturlar xotiraga kirishni xohlaydi, ko'pincha kompyuter mavjud bo'lganidan ko'ra ko'proq xotira talab qiladi.Kernel har bir jarayon qaysi xotiradan foydalanishi mumkinligi va xotira yetarli bo'lmaganda nima qilish kerakligini aniqlash uchun javobgardir.

### Input/Output qurilmalari

I/O(Input/Output) qurilmalariga klaviatura, sichqoncha, disk drayvlar, printerlar, USB qurilmalari, tarmoq adapterlari va displey qurilmalari kabi tashqi qurilmalar kiradi.Kernel tegishli qurilmaga I/O ni amalga oshirish uchun ilovalardan so'rovlarni taqsimlaydi va qurilmadan foydalanishning qulay usullarini taqdim etadi (odatda dastur qurilmaning amalga oshirish tafsilotlarini bilishi shart bo'lmagan darajada abstraktlangan).

### Resource Management

Resource managementda zarur bo'lgan asosiy jihatlar execution domenini (space address) va domen ichidagi resurslarga kirishda vositachilik qilish uchun foydalaniladigan himoya mexanizmini aniqlashdir.Kernellar, shuningdek, sinxronizatsiya va jarayonlararo aloqa inter-process communication (IPC) usullarini taqdim etadi.Ushbu ilovalar kernelning o'zida joylashgan bo'lishi mumkin yoki kernel boshqa ishlaydigan jarayonlarga ham tayanishi mumkin. Garchi kernel bir-biri tomonidan taqdim etilgan obyektlarga kirishni ta'minlash uchun IPC ni ta'minlashi kerak bo'lsa-da, kernellar ushbu obyektlarga kirish uchun so'rovlar yuborish usuli bilan ishlaydigan dasturlarni ham ta'minlashi kerak. Kernel jarayonlar yoki threadlar o'rtasida context switching uchun ham javobgardir.

### Memory management

Kernel tizim xotirasiga to'liq kirish huquqiga ega va jarayonlarga ushbu xotiraga o'zlari talab qilganda xavfsiz kirishiga ruxsat berishi kerak.Ko'pincha buni amalga oshirishda birinchi qadam virtual manzillash bo'lib, odatda paging va/yoki segmentation orqali erishiladi.Agar dasturga operativ xotirada bo'lmagan ma'lumotlar kerak bo'lsa, protsessor kernelga bu sodir bo'lganligi haqida signal beradi kernel esa faol bo'lmagan xotira blokining tarkibini diskka yozish (agar kerak bo'lsa) va uni dastur tomonidan so'ralgan ma'lumotlar bilan almashtirish orqali javob beradi. Keyin dastur to'xtatilgan joydan davom ettirilishi mumkin. Ushbu sxema odatda `demand paging` sifatida tanilgan. Virtual manzillash, shuningdek, ikkita ajratilgan sohada xotiraning virtual bo'limlarini yaratishga imkon beradi, ulardan biri kernel (kernel space), ikkinchisi esa ilovalar uchun (user space). Ilovalar kernel xotirasiga murojaat qilish uchun protsessor tomonidan ruxsat etilmaydi, bu esa dastur ishlaydigan kernelga zarar yetkazishining oldini oladi.

### Device management

Foydali funksiyalarni bajarish uchun jarayonlar yadro tomonidan qurilma drayverlari orqali boshqariladigan kompyuterga ulangan tashqi qurilmalarga kirishi kerak. Qurilma drayveri - bu OS nomidan hardware qurilmasini (uning Hardware/Software Interface (HSI) orqali) inkapsulyatsiya qiluvchi, nazorat qiluvchi va boshqaradigan kompyuter dasturi. Qurilma drayverlari, masalan: video kartalar, ovoz kartalari, printerlar, skanerlar, modemlar va tarmoq kartalari uchun ishlatiladi.

##### Hardware levelda qurilma drayverlarining umumiy abstractionlari quyidagilarni o'z ichiga oladi:

* To'g'ridan-to'g'ri interfeys
* Yuqori darajadagi interfeysdan foydalanish (BIOS)
* Quyi darajadagi qurilma drayveridan foydalanish (disk drayverlari yordamida fayl drayverlari)
* Hardware bilan ishlashni simulyatsiya qilish, shu bilan birga butunlay boshqacha narsalarni qilish


##### Software levelda, qurilma drayverlari abstractionlari quyidagilarni o'z ichiga oladi:

* Operatsion tizimning hardware resurslariga bevosita kirishiga ruxsat berish
* Faqat primitivlarni implement qilish
* TWAIN kabi driveri bo'lmagan dasturiy ta'minot uchun interfeysni implement qilish
* Tilni implement qilish (ko'pincha PostScript kabi yuqori darajadagi til)


Misol uchun, foydalanuvchiga ekranda biror narsani ko'rsatish uchun dastur kernelga so'rov yuboradi, bu so'rovni displey drayveriga yo'naltiradi, keyin esa belgi/pikselni chizish uchun javobgardir.


### System call

Hisoblashda system call jarayonning operatsion tizim kernelidan odatda ishga ruxsati bo‘lmagan xizmatni so‘rashidir. System callari jarayon va operatsion tizim o'rtasidagi interfeysni ta'minlaydi. 

System call - bu operatsion tizimdan xizmat so'rash uchun amaliy dastur tomonidan foydalaniladigan mexanizm.
Ular protsessorni rejimni o'zgartirishga olib keladigan machine-code instructiondan foydalanadilar.

Bu yerda operatsion tizim hardware qurilmalari yoki memory management unitga kirish kabi amallarni bajaradi.Odatda operatsion tizim va oddiy foydalanuvchi dasturlari o'rtasida joylashgan kutubxonani ta'minlaydi.Odatda bu `Glibc` yoki `Windows API` kabi `C` kutubxonasi.

 Kutubxona kernelga ma'lumot uzatish va supervisor rejimiga o'tishning low-leveldagi tafsilotlarini boshqaradi. System callarga yopish, ochish, o'qish, kutish va yozish kiradi. Haqiqiy foydali ishni bajarish uchun jarayon kernel tomonidan taqdim etilgan xizmatlarga kirish imkoniyatiga ega bo'lishi kerak. Bu har bir kernel tomonidan turlicha amalga oshiriladi, lekin ko'pchilik C kutubxonasi yoki APIni taqdim etadi, bu esa o'z navbatida tegishli kernel funksiyalarini chaqiradi.

 ### Kernel loyihalash

 ##### Protection - Himoya

Kernelni loyihalashda muhim e'tibor uning nosozliklardan (nosozliklarga chidamlilik) va zararli xatti-harakatlardan (xavfsizlik) himoya qilishni ta'minlaydigan yordamidir.Bu ikki jihat odatda aniq ajratilmaydi va kernel dizaynida bu farqning qabul qilinishi himoya uchun ierarxik tuzilmani rad etishga olib keladi.

Kernel tomonidan taqdim etilgan mexanizmlar yoki siyosatlar bir nechta mezonlarga ko'ra tasniflanishi mumkin, jumladan: statik (kompilyatsiya vaqtida amalga oshiriladi) yoki dinamik (ishlash vaqtida amalga oshiriladi); oldindan yoki keyingi aniqlash; ular qondiradigan himoya tamoyillariga ko'ra ular hardware tomonidan qo'llab-quvvatlanadimi yoki tilga asoslanganmi; ular ko'proq ochiq mexanizmmi yoki majburiy siyosatmi; va boshqalar.


Himoya ierarxik domenlarini qo'llab-quvvatlash odatda CPU rejimlari yordamida amalga oshiriladi.

Imkoniyatlarni hardware ta'minoti bilan ta'minlashning samarali va oddiy usuli bu memory management unit (MMU)ga  har bir xotiraga kirish uchun kirish huquqlarini tekshirish mas'uliyatini topshirishdir, bu mexanizm `called capability-based addressing` deb ataladi.

Muqobil yondashuv keng tarqalgan qo'llab-quvvatlanadigan ierarxik domenlar yordamida capabilitielarni simulyatsiya qilishdir.

##### Hardware yoki tilga asoslangan himoya 

Bugungi kunda odatiy kompyuter tizimlari qaysi dasturlarga qanday ma'lumotlarga kirishga ruxsat berilganligi haqida hardware tomonidan qo'llaniladigan qoidalardan foydalanadi.
Protsessor executionni nazorat qiladi va qoidani buzadigan dasturni to'xtatadi, masalan, kernel xotirasiga yozishga harakat qiladigan foydalanuvchi jarayoni.

Muqobil yondashuv tilga asoslangan himoyadan foydalanishdir.Tilga asoslangan himoya tizimida kernel faqat ishonchli til kompilyatori tomonidan ishlab chiqarilgan kodni bajarishga ruxsat beradi. Keyin til shunday ishlab chiqilgan bo'lishi mumkinki, dasturchi unga xavfsizlik talabini buzadigan biror narsa qilishni buyura olmaydi.