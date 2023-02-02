# Kernel nima va u qanday ishlaydi?

![alt text](https://pemmzchannel.com/wp-content/uploads/2022/06/kernel-panic-3.10.0-229.4.2.el7_.png)


:::tip
Buguni maqolada biz ko'p sirlarni mavhumliklarni ochamiz. Bu maqolada kernel nima? kernel tarixi, Apple Microsoft kernel ishlab chiqishi, Unix kernel, Linux FreeBSD OpenBSD, Kernel arxitekturasi va kerneldagi muammolar va boshqa ko'p qiziqarli malumotlarni bilib olasiz.

Tayyormisiz qani kettik :)
:::

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

#### I/O device management

Parallel hamkorlik jarayonlari sifatida input/output qurilmalari boshqa jarayonlar bilan bir xilda ishlanadigan kernel g'oyasi birinchi marta `Brinch Hansen` tomonidan taklif qilingan va amalga oshirilgan (garchi shunga o'xshash g'oyalar 1967 yilda taklif qilingan bo'lsa-da). Hansenning bu tavsifida "umumiy" jarayonlar internal processlar, input/output qurilmalari esa external processlar deb ataladi.

### Kernel bo'ylab dizayn yondashuvlari

Tabiiyki, yuqorida sanab o'tilgan vazifalar va xususiyatlar dizayn va implement qilishda bir-biridan farq qiladigan ko'p jihatdan ta'minlanishi mumkin.

Mexanizm va siyosatni ajratish printsipi mikro va monolit kernelar falsafasi o'rtasidagi jiddiy farqdir. Bu yerda mexanizm ko'plab turli siyosatlarni amalga oshirishga imkon beruvchi qo'llab-quvvatlashdir, siyosat esa ma'lum bir "ish rejimi" dir.

Misol:
 * Mexanizm: Foydalanuvchining kirishga urinishlari avtorizatsiya serveriga yo'naltiriladi
 * Siyosat: Avtorizatsiya serveri maʼlumotlar bazasida saqlangan parollar bilan tasdiqlangan parolni talab qiladi

 Mexanizm va siyosat bir-biridan ajratilganligi sababli, siyosat osongina o'zgartirilishi mumkin, masalan. xavfsizlik tokenidan foydalanishni talab qiladi. Monolit kernel ko'plab siyosatlarni o'z ichiga oladi, shuning uchun tizimning qolgan qismini ularga tayanishni cheklaydi.

Per Brinch Hansen mexanizm va siyosatni ajratish foydasiga dalillar keltirdi. Ushbu ajratishning to'g'ri bajarilmasligi mavjud operatsion tizimlarda jiddiy innovatsiyalar yo'qligining asosiy sabablaridan biri bo'lib, kompyuter arxitekturasida keng tarqalgan muammo.

Asosiy muqobil arxitektura yondoshuvi, capability-based addressing ikkalasini aniq ajratib turadi, bu esa tabiiy ravishda mikrokernel dizayniga olib keladi.

### Kernel arxitekturasining turli dizaynlari mavjud.

#### Kernel turlari

:::tip
Kernellarning beshta asosiy turi:

* Monolitik kernel
* Micro Kernel
* Gibrid Kernel
* Exo Kernel
* Nano Kernel
:::

### Monolitik kernellar

Monolitik kernellar kernelning eng oddiy va eng keng tarqalgan turidir. Bu barcha operatsion tizim servicelari kernel spaceda ishlaydigan kernel turlaridan biridir. Tizim komponentlari o'rtasida bog'liqlik mavjud. U juda murakkab kod satrlariga ega.Ular operatsion tizimning asosiy funksiyalarini o'z ichiga oladi va unga ulangan barcha qurilmalarni qo'llab-quvvatlaydi.Bunda foydalanuvchi va kernel xizmatlari bir xil memory spaceda amalga oshiriladi. Shu tufayli kernel hajmi kattalashadi, bu esa o'z navbatida operatsion tizim hajmini oshiradi

Monolit kernelda barcha OS xizmatlari asosiy kernel thread bilan birga ishlaydi, shuning uchun ham bir xil xotira sohasida joylashadi. Ushbu yondashuv boy va kuchli hardware vositalariga kirishni ta'minlaydi. Ba'zi ishlab chiquvchilar, masalan, UNIX dasturchisi Ken Thompson, mikro kernellarga qaraganda "monolitik kernelni implement qilish osonroq" , deb ta'kidlaydilar.

Monolitik kernellarning asosiy kamchiliklari tizim komponentlari o'rtasidagi bog'liqlikdir - qurilma drayveridagi xato butun tizimni ishdan chiqarishi mumkin - va katta kernellarni saqlash juda qiyin bo'lishi mumkin. Unix-ga o'xshash operatsion tizimlar tomonidan an'anaviy ravishda qo'llaniladigan monolit kernellar operatsion tizimning barcha asosiy funksiyalarini va qurilma drayverlarini o'z ichiga oladi. Bu UNIX tizimlarining an'anaviy dizayni. Linux (GNU operatsion tizimining kernellaridan biri) va FreeBSD kernellari kabi zamonaviy monolit kernellar, har ikkalasi ham Unix-ga o'xshash operatsion tizimlar toifasiga kiradi, modullarni ish vaqtida yuklash qobiliyatiga ega va shu bilan oson ishlashga imkon beradi, zarur bo'lganda kernel imkoniyatlarini kengaytirish, shu bilan birga kernel spaceda ishlaydigan kod miqdorini minimallashtirishga yordam beradi.


##### Misollar:

:::tip
Unix, Linux, Open VMS, XTS-400 va boshqalar.
:::

#### Afzalliklari

* Dasturiy ta'minot kamroq bo'lgani uchun u tezroq ishlaydi.
* Bu bitta dasturiy ta'minot bo'lagi bo'lgani uchun u ham manba, ham kompilyatsiya shaklida kichikroq bo'lishi kerak.
* Kamroq kod odatda kamroq xavfsizlik muammolariga aylanishi mumkin bo'lgan kamroq xatolarni anglatadi.

#### Kamchiliklari

* Modullar bir xil address spaceda ishlaganligi sababli, xato butun tizimni buzishi mumkin.
* Monolitik kernellar portativ emas; shuning uchun ular operatsion tizim foydalaniladigan har bir yangi arxitektura uchun qayta yozilishi kerak.
* Kernelning bir qismidagi xatolar kuchli yon ta'sirga ega; kerneldagi har bir funksiya barcha imtiyozlarga ega bo'lganligi sababli, bitta funksiyadagi xato boshqasining ma'lumotlar strukturasini, kernelning mutlaqo aloqador bo'lmagan qismini yoki har qanday ishlaydigan dasturni buzishi mumkin.

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Kernel-simple.svg/170px-Kernel-simple.svg.png)
![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Kernel_Layout.svg/220px-Kernel_Layout.svg.png)

##### Rasmda Monolitik kernellar

### Mikro kernellar 

Mikro kernellar yangi ishlanmadir va shuning uchun monolit kernellar kabi keng tarqalgan emas. Ular faqat tizimning ishlashi uchun zarur bo'lgan asosiy servicelar va qurilmalarni o'z ichiga oladi. Bu tezroq va kamroq xotiradan foydalanadigan kichikroq kernelgaga olib keladi. Bu yerda foydalanuvchi va kernel servicelari ikki xil spaceda amalga oshiriladi. Unda alohida `User Space` va `Kernel Space` mavjud.Bu kernel hajmini kamaytiradi va operatsion tizim hajmini qisqartiradi. 

Mikro kernellar an'anaviy `monolitik` kernel dizayniga reaksiya sifatida ixtiro qilingan, bunda tizimning barcha funksiyalari protsessorning maxsus `system` rejimida ishlaydigan bitta statik dasturga kiritilgan. Faqat privileged rejimda bo'lishni talab qiladigan qismlar kernel spaceda: `IPC (Inter-Process Communication)`(jarayonlararo aloqa), asosiy rejalashtiruvchi yoki rejalashtirish primitivlari, asosiy xotira bilan ishlash, asosiy I/O(input/output) primitivlari.

##### Misollar:

:::tip
Mach, L4, AmigaOS, Minix, K42 va boshqalar.
:::

#### Afzalliklari

* Bu yanada barqaror.
* Patchlar alohida misolda sinovdan o'tkazilishi va keyin ishlab chiqarish namunasini egallash uchun almashtirilishi mumkin.
* Tez ishlab chiqish vaqti va yangi dasturiy ta'minot kernelni qayta ishga tushirmasdan sinovdan o'tkazilishi mumkin.

#### Kamchiliklari

* Kattaroq ishlaydigan memory footprint
* Interfeys uchun ko'proq dasturiy ta'minot talab qilinadi, ishlashni yo'qotish ehtimoli mavjud.
* Umuman olganda, jarayonni boshqarish juda murakkab bo'lishi mumkin.
* Ko'p system calllari va context switchelar mavjud.

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Kernel-microkernel.svg/260px-Kernel-microkernel.svg.png)
![alt text](https://www.researchgate.net/publication/274076584/figure/fig1/AS:294857785528320@1447310982190/Comparison-between-a-monolithic-kernel-design-A-and-a-microkernel-B.png)

##### Rasmda Mikro Kernel tasvirlangan va Monolitik va Mikro kernel kernel dizaynlari tasvirlangan

### Monolitik kernellar va mikrokernellar

1990-yillarning boshlariga kelib, monolit kernellarning mikrokernellarga nisbatan turli kamchiliklari tufayli, deyarli barcha operatsion tizim tadqiqotchilari tomonidan monolit kernellar eskirgan deb hisoblangan. Natijada, Linuxning mikrokernel emas, balki monolit kernel sifatida dizayni Linus Torvalds va Andrew Tanenbaum o'rtasidagi mashhur munozaraning mavzusi edi. Tanenbaum–Torvalds bahsida keltirilgan argumentning har ikki tomonida ham asos bor.

Monolitik kernellar o'zlarining barcha kodlari bir xil address space (kernel space) bo'lishi uchun yaratilgan bo'lib, ba'zi ishlab chiquvchilar buni tizimning ishlashini oshirish uchun zarur deb hisoblaydilar.
Ushbu ma'lumotlarning tushuntirishlari `kernel-mode`dan `user-mode` ga o'tish chastotasining ko'payishi, inter-process communication(jarayonlararo aloqa) chastotasining ko'payishi bilan bog'liq degan taxmin bilan `folklore` ga qoldirildi va context switchelarning ortib borayotgan chastotasiga.


### Gibrid (yoki modulli) kernellar

Gibrid kernellar `Microsoft Windows` NT 3.1, NT 3.5, NT 3.51, NT 4.0, 2000, XP, Vista, 7, 8, 8.1 va 10 kabi ko'pgina tijorat operatsion tizimlarida qo'llaniladi. `Apple Inc` kompaniyasining o'z macOS tizimi OSF/1 Mach kerneli (OSFMK 7.3)va FreeBSD monolit kerneli kodiga asoslangan `XNU` nomli gibrid kerneldan foydalanadi.

Gibrid kernellar monolit va mikro kernellarni birlashtiradi. Ular mikro kernellarga qaraganda ko'proq servicelarni o'z ichiga oladi, lekin monolit kernellardan kamroq. Bu ularga ikkala kernelning ba'zi afzalliklarini taklif qilish imkonini beradi. U monolit kernellardan tezlikni va mikro kernellardan modullikni oladi.

##### Misollar:

:::tip
Windows NT, Netware, BeOS, XNU va boshqalar.
:::

#### Afzalliklari

* U monolit kernel va mikro kernelni birlashtiradi.
* Uchinchi tomon texnologiyasining tezroq integratsiyasi
* Modullar ichidan ishlashi mumkin bo'lgan drayverlar uchun tezroq ishlab chiqish vaqti. Sinov uchun qayta ishga tushirish shart emas.

#### Kamchiliklari

* U hali ham monolit kernelga o'xshaydi.
* Symbollar farqi kabi muammolarni hal qilishda modullarni saqlash ba'zi ma'murlar uchun chalkash bo'lishi mumkin.

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kernel-hybrid.svg/260px-Kernel-hybrid.svg.png)
![alt text](assets/Windows_2000_architecture.png)

##### Rasmda Gibrid kernel va Windows 2000 dizayni

#### Nano Kernel

Nano kernellar kernelning eng kichik turi bo'lib, bir necha ming kod qatoridan iborat. Bu hardware abstractionini taklif qiladigan, lekin system servicelarisiz kernel turi. Micro Kernel ham system servicelariga ega emas, shuning uchun Micro Kernel va Nano Kernel o'xshash bo'ladi. Bu hardwerining privilegeli rejimida bajariladigan kod minimal ekanligini anglatadi. Ular asosan embedded systemlarda yoki cheklangan resurslarga ega qurilmalarda qo'llaniladi.

##### Misollar:

:::tip
EROS va boshqalar.
:::

#### Afzalliklari

* U system servicelarisiz hardware abstractionlarini taklif qiladi.

#### Kamchiliklari

* Bu mikro kernel bilan bir xil, shuning uchun u kamroq qo'llaniladi.

#### Exo Kernel
Bu `end-to-end` tamoyiliga amal qiladigan kernel turi. Unda iloji boricha kamroq hardware abstractionlari mavjud. U jismoniy resurslarni ilovalarga ajratadi. Bu kernel alohida resurs protection va boshqaruviga ega. Ilovaga maxsus moslashtirishni amalga oshirishda foydalanish uchun javob beradi. Exo kernellari mobil qurilmalarda foydalanish uchun mo'ljallangan. Ular power management va bir nechta protsessorlarni qo'llab-quvvatlash kabi mobil qurilmalar uchun maxsus qo'shimcha funksiyalarni o'z ichiga olgan mikrokernellarning o'zgarishi.

Exo kernellar operatsion tizimni loyihalashda hali ham eksperimental yondashuvdir. Ular boshqa turdagi kernellardan o'zlarining funksional imkoniyatlarini raw hardwareni himoya qilish va multiplekslash bilan cheklashlari bilan farq qiladi, buning ustiga ilovalarni ishlab chiqish uchun hech qanday apparat hardware abstractionlarini ta'minlamaydi.

##### Misollar:

:::tip
Nemesis, ExOS va boshqalar.
:::

#### Afzalliklari

* Unda juda kam hardware abstractionlari mavjud.

#### Kamchiliklari

* Ilovalarni ishlab chiquvchilar uchun ko'proq ish bor.

### Multi kernellar

Multikernelli operatsion tizim multi-coreli mashinaga xuddi taqsimlangan tizim kabi mustaqil yadrolar tarmog'i sifatida qaraydi. U umumiy xotirani o'z zimmasiga olmaydi, balki message-passing sifatida inter-process communicationni amalga oshiradi. `Barrelfish` ko'p multikernelli deb ta'riflangan birinchi operatsion tizim edi.

## Unix

Unixni loyihalash bosqichida dasturchilar har bir yuqori darajali qurilmani fayl sifatida modellashtirishga qaror qilishdi, chunki ular hisoblashning maqsadi ma'lumotlarni o'zgartirish deb hisoblashgan. Tizimni fayl darajasida virtualizatsiya qilish foydalanuvchilarga mavjud fayllarni boshqarish yordam dasturlari va kontseptsiyalari yordamida butun tizimni manipulyatsiya qilish imkonini berdi va bu operatsiyani sezilarli darajada soddalashtirdi.

Xuddi shu paradigmaning kengaytmasi sifatida Unix dasturchilarga pipelar kontseptsiyasidan foydalangan holda bir qator kichik dasturlardan foydalanib fayllarni manipulyatsiya qilish imkonini beradi.

Yakuniy natija bir xil bo'lsa-da, shu tarzda kichikroq dasturlardan foydalanish moslashuvchanlikni, shuningdek, ishlab chiqish va foydalanish qulayligini sezilarli darajada oshirdi, bu foydalanuvchiga dasturni zanjirdan qo'shish yoki olib tashlash orqali o'z ish jarayonini o'zgartirish imkonini berdi.

Unix modelida operatsion tizim ikki qismdan iborat: birinchidan, ko'pchilik operatsiyalarni boshqaradigan yordamchi dasturlarning ulkan to'plami; ikkinchidan, dasturlarni boshqaradigan kernel. Yillar davomida hisoblash modeli o'zgardi va Unix-ning hamma narsani fayl yoki bayt oqimi sifatida ko'rib chiqishi avvalgidek universal qo'llanilmaydi.

Kompyuterlarning imkoniyatlari oshgani sayin, Unix kodlar bilan tobora ko'proq chigallashib bordi. 1970 va 1980 - yillarda kernellarda 100 000 qator kod boʻlishi mumkin boʻlsa-da, Linux kabi kernellar, GNU kabi zamonaviy Unix vorislari 13 milliondan ortiq qatorga ega.

2020 yil hisobiga ko'ra Linux kerneli kodi 27.8 million qatorga yetgan.

Zamonaviy Unix hosilalari odatda modul yuklaydigan monolit kernellarga asoslangan. Bunga misol qilib GNU, IBM AIX ning koʻplab distribyutsiyalaridagi Linux yadrosi, shuningdek, FreeBSD, DragonflyBSD, OpenBSD, NetBSD va macOS kabi Berkeley Software Distribution variant kernelllari misol boʻla oladi. Ushbu muqobil variantlardan tashqari, havaskor ishlab chiquvchilar asosan Linux, FreeBSD, DragonflyBSD, OpenBSD yoki NetBSD kernellari bilan ko‘p funksiyalarni baham ko‘radigan va/yoki ular bilan mos keladigan o‘z-o‘zidan yozilgan sevimli mashg‘ulot kernellari bilan to‘ldirilgan faol operatsion tizimni ishlab chiqish hamjamiyatiga ega.

## Classic Mac OS va macOS


Apple birinchi marta 1984 yilda Macintosh shaxsiy kompyuteri bilan birga o'zining classic Mac OS-ni ishga tushirdi. Apple Mac OS 8.6 da nanokernel dizayniga o'tdi. Bunga qarshi zamonaviy macOS (dastlab Mac OS X deb nomlangan) Darvinga asoslangan bo'lib, u 4.3BSD kerneli va Mach kernelnini birlashtirish orqali yaratilgan XNU deb nomlangan gibrid kerneldan foydalanadi.

### XNU

XNU - bu Mac OS X (hozirgi macOS) operatsion tizimida foydalanish uchun 1996 yil dekabr oyidan beri Apple Inc da ishlab chiqilgan va Darvin OSning bir qismi sifatida bepul va open source dasturiy ta'minot sifatida chiqarilgan kompyuter operatsion tizimining (OS) kerneli. macOS uchun ham Apple TV dasturiy ta'minoti, iOS, iPadOS, watchOS va tvOS operatsion tizimlari uchun asosdir.


XNU - X is Not Unix qisqartmasi.

[XNU Open Source Github](https://github.com/apple/darwin-xnu)

## Microsoft Windows

Microsoft Windows birinchi marta 1985 yilda MS-DOS qo'shimchasi sifatida chiqarilgan. Boshqa operatsion tizimga bog'liqligi sababli, Windows 95 dan oldingi Windowsning dastlabki versiyalari operating environment(operatsion muhit) deb hisoblangan (operatsion tizim bilan adashtirmaslik kerak).

Ushbu mahsulot qatori 1980 va 1990 yillar davomida rivojlanishda davom etdi, Windows 9x seriyali 32-bitli adreslash va oldindan ko'p vazifalarni qo'shdi; lekin 2000 yilda `Windows Me`-ning chiqarilishi bilan yakunlandi. Microsoft shuningdek, `Windows NT` operatsion tizimini ishlab chiqdi, bu juda o'xshash interfeysga ega, lekin yuqori darajadagi va biznes foydalanuvchilari uchun mo'ljallangan.

Bu yoʻnalish 1993-yilda Windows NT 3.1-ning chiqarilishi bilan boshlangan va umumiy foydalanuvchilarga 2001-yil oktabr oyida Windows XP-ning chiqarilishi bilan tanishtirilgan - Windows 9x-ni butunlay boshqacha, ancha murakkab operatsion tizim bilan almashtirgan. Bu Windows 11 bilan davom etadigan yo'nalish.

Windows NT kernelining arxitekturasi gibrid kernel hisoblanadi, chunki kernelning o'zi client/server qatlamli subsystem modeliga ega Window Manager va IPC Managers kabi vazifalarni o'z ichiga oladi. U o'zgartirilgan mikrokernel sifatida ishlab chiqilgan, chunki Windows NT kernelii Mach mikrokernelidan ilhomlangan, ammo sof mikrokernelning barcha mezonlariga javob bermaydi.

![alt text](assets/Windows_2000_architecture.png)

##### Rasmda Windows NT operatsion tizimlari oilasining arxitekturasi

### IBM Supervisor

Supervisor dastur yoki supervisor - kompyuter dasturi, odatda operatsion tizimning bir qismi bo'lib, u boshqa tartiblarning bajarilishini nazorat qiladi va ishni rejalashtirish, input/output operatsiyalari, xato harakatlar va shunga o'xshash funksiyalarni tartibga soladi va ma'lumotlarni qayta ishlash tizimidagi ish oqimini tartibga soladi.

Tarixiy jihatdan, bu atama IBM ning OS/360 dan boshlangan asosiy operatsion tizimlari qatori bilan bog'liq edi. Boshqa operatsion tizimlarda supervisor odatda kernel deb ataladi.

1970-yillarda IBM supervisor holatini hardwaredan ajratib oldi, natijada toʻliq virtualizatsiya, yaʼni bir mashinada bir nechta operatsion tizimlarni bir-biridan mutlaqo mustaqil ravishda ishga tushirish imkoniyatini beruvchi hypervisor paydo boʻldi.
Shunday qilib, birinchi bunday tizim `Virtual Machine` yoki `VM`deb nomlangan.


Maqola juda uzun bo'lgani uchun uzur so'rayman )

Endi siz kernel ishlashi kelib chiqishi kernel turlari haqidagi bilimlarni bilib oldingiz )

Xato va kamchiliklar bo'lsa uzur so'rayman )


Foydanilgan Manbalar

[Wikipedia](https://en.wikipedia.org/wiki/Kernel_(operating_system))
va boshqa juda ko'p manbalar
