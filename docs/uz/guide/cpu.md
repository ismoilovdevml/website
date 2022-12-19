# CPU qanday ishlaydi?

![alt text](https://www.howtogeek.com/wp-content/uploads/2020/10/cpu.jpg?height=200p&trim=2,2,2,2&crop=16:9)

Bu mavzu sal kattaroq shuning uchun mavzuni ikki qismga bo'ldim. Birinchi qismda CPU asoslari va asosiy yuzaki ma'lumotlar bilan tushuntiriladi. Ikkinchi qismda esa mavzu chuqurlashtirilgan holda tushuntiriladi.

:::tip
Bu ma'lumotlardan to'liq foydalanish uchun tavsiyalar!
* Etibor bilan o'qib chiqing jumlalarga e'tibor bering!
* Rasmlarni kuzatib boring!
* Olgan ma'lumotlarimgizni mustahkamlash uchun Animatsion videolarni ko'ring!
* Animatsion videorolikni ko'rish yanada yaxshiroq tushunishingizga yordam beradi!
:::

`Mikroprotsessor sifatida ham tanilgan CPU - bu kompyuterning yuragi va yoki miyasi. Kompyuter dasturlarini samarali yozishga yordam berish uchun kompyuterning yadrosiga chuqur kirib borishga imkon beradi.`

:::tip
Bazi so'zlar ma'nosi:
* Central Processing Unit (CPU) - Markaziy ishlov berish bloki
* input/output - kirish/chiqish
* Control Unit CU - Boshqaruv bloki
* instruction - ko'rsatmalar
* Clock cycle - Soat aylanishi
* Memory, Storage - Xotira
* ALU - Arifmetik va mantiqiy birlik
* GPU Graphics Processing Unit - Grafik ishlov berish bloki
::: 

## 1-qism: CPU asoslari
Central Processing Unit (CPU) , asosiy protsessor yoki oddiy protsessor deb ham ataladigan central processor (CPU) kompyuter dasturini o'z ichiga olgan instructionlarni bajaradigan elektron sxemadir . Protsessor dasturdagi instructionlarda ko'rsatilgan asosiy arifmetik , mantiqiy, nazorat qilish va  input/output (I/O) operatsiyalarini bajaradi. Bu asosiy xotira va  I/O sxemasi kabi tashqi komponentlar va graphics processing units (GPU) kabi maxsus protsessorlardan farq qiladi.


Kompyuter asosan elektr energiyasi bilan ishlaydigan mashinadir , lekin uning moslashuvchanligi va dasturlash qobiliyati toolning soddaligiga erishishga yordam berdi.

CPU - bu kompyuterning yuragi va yoki miyasi. U o'ziga berilgan instructionlarni bajaradi. Uning asosiy vazifasi arifmetik va mantiqiy amallarni bajarish va instructionlarni birgalikda tartibga solishdir. Asosiy qismlarga o'tishdan oldin, CPU ning asosiy komponentlari va rollari nima ekanligini ko'rib chiqaylik:

### Protsessorning ikkita asosiy komponenti

* Control unit (Boshqarish bloki)  - CU
* Arifmetik va  logical unit - ALU

### Control Unit (Boshqaruv bloki) — CU

Control Unit CU - protsessorning instructionlarning bajarilishini tartibga solishga yordam beradigan qismi. Nima qilish kerakligini aytadi. Instructionga ko'ra, u protsessorni kompyuterning boshqa qismlariga, shu jumladan `ALU` ga ulaydigan simlarni faollashtirishga yordam beradi . Boshqarish bloki protsessorning qayta ishlash bo'yicha instructionlarini oladigan birinchi komponentidir.

Control Unitning ikki turi mavjud:

* hardwired control units .
* mikroprogramlanadigan (mikrodasturlashtirilgan) control units.

`Hardwired control unit` hardware bo'lib, u ishlayotganini o'zgartirish uchun hardwareni o'zgartirishni talab qiladi, bu erda mikroprogramlanadigan control unit uning xatti-harakatlarini o'zgartirish uchun dasturlashtirilishi mumkin. Hardwired CU instructionlarni qayta ishlashda tezroq, mikroprogramlansa, moslashuvchanroq.

### Arifmetik va logical unit — ALU
Arifmetik va mantiqiy birlik ALU nomidan ko'rinib turibdiki, barcha arifmetik va mantiqiy hisob-kitoblarni amalga oshiradi. ALU qo'shish, ayirish kabi amallarni bajaradi. ALU bu operatsiyalarni bajaradigan mantiqiy sxema yoki logic gatelardan iborat.

Ko'pgina logic gatelar ikkita kirishni qabul qiladi va bitta chiqishni ishlab chiqaradi

Quyida ikkita kirishni qabul qiladigan va natijani chiqaradigan yarim qo'shimcha sxemasiga misol keltirilgan. Bu erda A va B - kirish, S - chiqish va C - tashish.

![alt text](https://cdn-media-1.freecodecamp.org/images/1*u-VunK6bUafXlhubpGlNkA.png)

### Storage - Registerlar va Memory
CPU ning asosiy vazifasi unga berilgan instructionalarni bajarishdir. Ko'pincha ushbu instructionlarni qayta ishlash uchun unga ma'lumotlar kerak bo'ladi. Ba'zi ma'lumotlar intermediate data, ularning ba'zilari input va boshqalari outpudir. Ushbu ma'lumotlar instructionlar bilan birga quyidagi xotirada saqlanadi:

### Registrlar
Registr - bu ma'lumotlar saqlanishi mumkin bo'lgan kichik joylar to'plami. Registr latchesning birikmasidir . Flip-floplar deb ham ataladigan latchelar 1 bit ma'lumotni saqlaydigan ogic gates birikmasidir .

Latchda ikkita input simi, write va input simi va bitta output simi mavjud. Saqlangan ma'lumotlarga o'zgartirish kiritish uchun write simini yoqishimiz mumkin. Write simi o'chirilgan bo'lsa, output har doim bir xil bo'lib qoladi.

![alt text](https://cdn-media-1.freecodecamp.org/images/1*5WDU45YAH5CnICZOOvn1Yw.gif)

Rasmda bir juft o'zaro bog'langan NOR gatedan qurilgan  SR latch

CPU output ma'lumotlarini saqlash uchun registrlarga ega. Asosiy xotiraga (RAM) yuborish sekin bo'ladi, chunki u  intermediate data. Bu ma'lumotlar BUS orqali ulangan boshqa registrga yuboriladi . Registr instructionlarni, output ma'lumotlarini, storage addressni yoki har qanday ma'lumotlarni saqlashi mumkin.

### Memory(RAM)
`RAM` - bu ko'proq ma'lumotlarni saqlashi uchun optimallashtirilgan tarzda tartibga solingan va ixchamlashtirilgan registrlar to'plami. RAM(Random Access Memory) o'zgaruvchan bo'lib, quvvatni o'chirib qo'yganimizda ma'lumotlar yo'qoladi. RAM ma'lumotlarni o'qish/yozish uchun registrlar to'plami bo'lganligi sababli, RAM 8 bitli addressni, saqlanishi kerak bo'lgan actual data uchun ma'lumotlarni kiritishni va nihoyat  latchlar uchun bo'lgani kabi ishlaydigan o'qish va yozishni faollashtiradi.


### Instructionlar nima
Instruction - bu kompyuter amalga oshirishi mumkin bo'lgan granular darajadagi hisoblash. CPU ishlov berishi mumkin bo'lgan turli xil instructionlar mavjud.

Instructionlarga quyidagilar kiradi:

* Qo'shish va ayirish kabi arifmetik amallar
* and, or, va not kabi mantiqiy instructionlar
* move, input, output, load, va store kabi ma'lumotlar instructionlari
* goto, if … goto, call, va return kabi flowlarni boshqarish instructionlari
* Protsessorga dastur to'xtatilganligi haqida xabar berishi

Instructionlar kompyuterga assembler tilidan foydalangan holda taqdim etiladi yoki kompilyator tomonidan ishlab chiqariladi yoki ba'zi high level dasturlash tillarida talqin qilinadi.

Ushbu instructionlar protsessor ichida hardwired. ALU arifmetik va mantiqiy ma'lumotlarni o'z ichiga oladi, chunki control flow CU tomonidan boshqariladi.

Bir soat siklida kompyuterlar bitta buyruqni bajarishi mumkin, ammo zamonaviy kompyuterlar bir nechta buyruqlarni bajarishi mumkin.

Kompyuter bajarishi mumkin bo'lgan instructionlar guruhiga instruction set deyiladi .

### CPU clock - Clock cycle

Kompyuterning tezligi uning clock cycle(soat aylanishi) bilan belgilanadi. Bu kompyuterning sekundiga ishlayotgan clock period(soat davri) soni . Bitta soat sikllari juda kichik, taxminan 250 * 10 *-12 sec. Clock cycle qanchalik baland bo'lsa, protsessor tezroq bo'ladi.

CPU clock cycle gHz(Gigahertz) da o'lchanadi. 1gHz 10⁹ Hz(gerts) ga teng. Gerts soniyani bildiradi. Shunday qilib, 1 Gigahertz soniyada 10⁹ cycleni bildiradi.

Clock cycle qanchalik tez bo'lsa, protsessor shunchalik ko'p instructionlarni bajarishi mumkin. Clock cycle = 1/soat tezligi CPU Time = clock cycle soni / clock rate

Bu protsessor vaqtini yaxshilash uchun biz protsessorga taqdim etgan instructionni optimallashtirish orqali clock cycleni oshirishimiz yoki clock cycle sonini kamaytirishimiz mumkinligini anglatadi. Ba'zi protsessorlar clock cycleni oshirish qobiliyatini ta'minlaydi, ammo bu jismoniy o'zgarishlar bo'lgani uchun haddan tashqari issiqlik va hatto tutun/yong'in bo'lishi mumkin.

### Instructio qanday bajariladi
instructiolar operativ xotirada ketma-ket tartibda saqlanadi. Gipotetik protsessor uchun ko'rsatma OP kodi (operatsion kod) va memory yoki register addressdan iborat .

Control Unit instructionlari registrida (IR) ikkita registr mavjud bo'lib, ular instructioning OP kodini yuklaydi va joriy bajaruvchi instructionning addresini yuklaydigan instruction address registrlari . Protsessor ichida buyruqning oxirgi 4 biti addresida saqlangan qiymatni saqlaydigan boshqa registrlar mavjud.

Namuna, ikkita raqamni qo'shadigan instruction setiga misol keltiraylik. Quyida tavsif bilan birga instructionlar keltirilgan:

* 1-QADAM — LOAD_A 8:

Instruction dastlab RAMda saqlanadi, deylik <1100 1000>. Birinchi 4 bit op kodidir. Bu instructionni belgilaydi. Ushbu instruction control unitning IR- ga kiritiladi . Instruction load_A bo'lishi uchun dekodlanadi, ya'ni u A ni ro'yxatdan o'tkazish uchun instructionning oxirgi 4 biti bo'lgan 1000 addressiga ma'lumotlarni yuklash kerakligini anglatadi.

* 2-QADAM — LOAD_B 2

Yuqoridagi kabi, bu memory address 2 (0010) ma'lumotlarini CPU registr B ga yuklaydi.

* 3-QADAM  - BA qo'shish

Endi keyingi instruction bu ikki raqamni qo'shishdir. Bu erda CU ALUga qo'shish operatsiyasini bajarishni va natijani A registriga saqlashni buyuradi.

* 4-QADAM — STORE_A 23

Bu ikkita raqamni qo'shishga yordam beradigan juda oddiy instruction set.

[Binary sonlarni Deciminalga convert qilib beradigan sayt](https://www.rapidtables.com/convert/number/binary-to-decimal.html)

Biz ikkita raqamni muvaffaqiyatli qo'shdik!

### BUS

 CPU, register, memory va IO qurilmasi o'rtasidagi barcha ma'lumotlar `bus` orqali uzatiladi. Ma'lumotni o'zi qo'shgan xotiraga yuklash uchun protsessor memory addressni `address bus`ga va yig'indining natijasini `data bus`iga qo'yadi va `control bus`da to'g'ri signalni yoqadi. Shu tarzda ma'lumotlar bus yordamida xotiraga yuklanadi.

 ![alt text](https://cdn-media-1.freecodecamp.org/images/1*N5wkXycN_ceV9HByxQUzCA.png)

### Kesh

CPU shuningdek, instructionlarni keshga oldindan yuklash mexanizmiga ega. Ma'lumki, protsessor bir soniya ichida bajarishi mumkin bo'lgan millionlab ko'rsatmalar mavjud. Bu shuni anglatadiki, instructionlarni RAMdan olish uchun ularni bajarishdan ko'ra ko'proq vaqt sarflanadi. Shunday qilib, protsessor keshi ba'zi instructionlar va ma'lumotlarni oldindan oladi, shunda bajarilishi tezlashadi.

Cache va operatsion xotiradagi ma'lumotlar boshqacha bo'lsa, ma'lumotlar dirty bit sifatida belgilanadi .

### Instruction pipelining

Zamonaviy protsessor instructionni bajarishda parallellashtirish uchun `instruction pipelining`dan foydalanadi. Fetch, Decode, Execute. Agar bitta instruction dekodlash bosqichida bo'lsa, protsessor fetch bosqichi uchun boshqa instructionni qayta ishlashi mumkin.

![alt text](https://cdn-media-1.freecodecamp.org/images/1*FJxls8ZBHc3l3tTKxrO6Sg.png)

Bir instruction boshqasiga bog'liq bo'lsa, bu bitta muammoga ega. Shunday qilib, protsessorlar bog'liq bo'lmagan va har xil tartibda buyruqni bajaradilar.

### Ko'p yadroli kompyuter
Bu asosan boshqa CPU, lekin cache kabi ba'zi umumiy resourcega ega.

### Performance

Protsessor unumdorligi uning ishlash vaqti bilan belgilanadi. Performance = 1/execution time

deylik, dasturni bajarish uchun 20ms vaqt ketadi. CPU unumdorligi 1/20 = 0,05 ms nisbiy ishlash = bajarish vaqti 1/ bajarilish vaqti 2

Protsessor ishlashi uchun ko'rib chiqiladigan omil - bu buyruqni bajarish vaqti va protsessorning soat tezligi. Shunday qilib, dasturning ishlashini oshirish uchun biz clock speedni oshirishimiz yoki dasturdagi instructionlar sonini kamaytirishimiz kerak. Protsessor tezligi cheklangan va multi core zamonaviy kompyuterlar soniyada millionlab instructionlarni qo'llab-quvvatlaydi. Ammo biz yozgan dasturda ko'plab instructionlar mavjud bo'lsa, bu umumiy samaradorlikni pasaytiradi.

Protsessor tezroq ishlashi uchun va imkon qadar ko'proq ishlashi uchun ko'plab optimallashtirishlar amalga oshirildi. Har qanday dasturni yozishda biz protsessorga beradigan instructionlar sonini kamaytirish kompyuter dasturining ishlashini qanday oshirishini hisobga olishimiz kerak.

[CPU qanday ishlashi va qanday tuzulishi haqida ko'proq bilib olish uchun animatsion videorolik](https://www.youtube.com/watch?v=cNN_tTXABUA)

## 2-qism: CPU qanday ishlaydi va qanday tuzilgan (chuqurlashtirilgan)

### Central Processing Unit - CPU

Central Processorr, main protsessor yoki oddiy protsessor deb ham ataladigan central processing unit (CPU) kompyuter dasturini o'z ichiga olgan  instructionlarni bajaradigan elektron sxemadir.

Protsessor dasturdagi instructionlarda ko'rsatilgan asosiy arifmetik, mantiqiy, nazorat qilish va  input/output (I/O) operatsiyalarini bajaradi. Bu asosiy xotira va input/output  I/O sxemasi kabi tashqi komponentlar va graphics processing units (GPU) kabi maxsus protsessorlardan farq qiladi.
Vaqt o'tishi bilan protsessorlarning shakli, dizayni va implementation o'zgargan, ammo ularning asosiy ishlashi deyarli o'zgarmagan.

Protsessorning asosiy komponentlariga arifmetik va mantiqiy amallarni bajaradigan arithmetic–logic unit (ALU), ALU ga operandlarni yetkazib beruvchi va ALU operatsiyalari natijalarini saqlaydigan protsessor registrlari va fetchni (xotiradan) tashkil qiluvchi control unit kiradi. ALU, registrlar va boshqa komponentlarning muvofiqlashtirilgan operatsiyalarini boshqarish orqali dekodlash va  executionni (instruction) tartibga soluvchi control unit.

Ko'pgina zamonaviy protsessorlar bir yoki bir nechta protsessorlar bitta IC chipida o'rnatilgan integral mikrosxema (IC) mikroprotsessorlarida amalga oshiriladi. Multiple CPU mikroprotsessorli chiplar  multi-core protsessorlardir. Alohida fizikal protsessorlar, protsessor yadrolari , shuningdek, qo'shimcha virtual yoki logical CPUlarni yaratish uchun multithreaded bo'lishi mumkin.

Protsessorni o'z ichiga olgan ICda xotira ,  peripheral interfeyslar va kompyuterning boshqa komponentlari ham bo'lishi mumkin; bunday o'rnatilgan qurilmalar turlicha mikrokontrollerlar yoki chipdagi tizimlar (SoC) deb ataladi .

Massiv protsessorlari yoki vektor protsessorlari parallel ravishda ishlaydigan bir nechta protsessorlarga ega bo'lib, central unit hisoblanmaydi. Virtual protsessorlar dinamik jamlangan hisoblash resurslarining abstractligidir.

### CPU Tarixi

`ENIAC` kabi dastlabki kompyuterlar turli vazifalarni bajarish uchun fizikaviy qayta o'rnatilishi kerak edi, bu esa bu mashinalarni `"fixed-program computers"` deb atalishiga olib keldi. `"central processing unit"` atamasi `1955` yildan beri qo'llanila boshlandi. `"CPU"` atamasi odatda  software (computer program) bajarish uchun qurilma sifatida ta'riflanganligi sababli, CPU deb nomlanishi mumkin bo'lgan eng dastlabki qurilmalar `"stored-program computer"` paydo bo'lishi bilan paydo bo'ldi.

stored-program computer g'oyasi `J. Presper Ekkert` va `Jon Uilyam Mauchli`ning `ENIAC` dizaynida allaqachon mavjud bo'lgan, ammo uni tezroq tugatish uchun dastlab yo'q qilingan. 1945 yil 30 iyunda, `ENIAC` yaratilishidan oldin, matematik `Jon fon Neumann` `First Draft of a Report on the EDVAC` deb nomlangan maqolani tarqatdi. Bu 1949-yil avgustida yakunlangan stored-program computer outlini edi.

![alt text](https://en.wikipedia.org/wiki/File:Edvac.jpg)

Rasmda EDVAC birinchi stored-program computeri

Dastlabki protsessorlar kattaroq va ba'zan o'ziga xos kompyuterning bir qismi sifatida ishlatiladigan maxsus dizaynlar edi. Biroq, ma'lum bir dastur uchun maxsus protsessorlarni loyihalashning ushbu usuli asosan katta miqdorda ishlab chiqarilgan ko'p maqsadli protsessorlarning rivojlanishiga yo'l ochdi.

Ushbu standartlashtirish discrete transistorli asosiy kompyuterlar va  minicomputerlar davrida boshlangan va integral mikrosxemaning `(integrated circuit IC)` ommalashishi bilan tez sur'atlarda tezlashdi.

### Transistorli protsessorlar 

1964 yilda IBM o'zining IBM System/360 kompyuter arxitekturasini taqdim etdi, u bir xil dasturlarni turli tezlik va unumdorlik bilan ishga tushirishga qodir bo'lgan bir qator kompyuterlarda ishlatilgan.

Ushbu yaxshilanishni osonlashtirish uchun IBM  microprogram kontseptsiyasidan (ko'pincha "microcode" deb ataladi) foydalangan, bu hali ham zamonaviy protsessorlarda keng qo'llaniladi.

System/360 arxitekturasi shu qadar mashhur ediki, u o'nlab yillar davomida asosiy kompyuterlar bozorida hukmronlik qildi va IBM zSeries kabi zamonaviy kompyuterlar tomonidan davom ettirilayotgan meros qoldirdi.

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/IBM_System_360_model_30_profile.agr.jpg/480px-IBM_System_360_model_30_profile.agr.jpg)

Rasmda IBM System/360 

1965 yilda `Digital Equipment Corporation (DEC)` ilmiy va tadqiqot bozorlariga qaratilgan yana bir nufuzli kompyuter `PDP-8` ni taqdim etdi.

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/PDP-8_%281%29.jpg/359px-PDP-8_%281%29.jpg)

Rasmda PDP-8