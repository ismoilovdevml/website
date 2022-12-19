# CPU qanday ishlaydi?

![alt text](https://www.howtogeek.com/wp-content/uploads/2020/10/cpu.jpg?height=200p&trim=2,2,2,2&crop=16:9)


`Mikroprotsessor sifatida ham tanilgan CPU - bu kompyuterning yuragi va yoki miyasi. Kompyuter dasturlarini samarali yozishga yordam berish uchun kompyuterning yadrosiga chuqur kirib borishga imkon beradi.`

Central Processing Unit (CPU) , asosiy protsessor yoki oddiy protsessor deb ham ataladigan central processor (CPU) kompyuter dasturini o'z ichiga olgan instructionlarni bajaradigan elektron sxemadir . Protsessor dasturdagi instructionlarda ko'rsatilgan asosiy arifmetik , mantiqiy, nazorat qilish va  input/output (I/O) operatsiyalarini bajaradi. Bu asosiy xotira va  I/O sxemasi kabi tashqi komponentlar va graphics processing units (GPU) kabi maxsus protsessorlardan farq qiladi.


Kompyuter asosan elektr energiyasi bilan ishlaydigan mashinadir , lekin uning moslashuvchanligi va dasturlash qobiliyati toolning soddaligiga erishishga yordam berdi.

CPU - bu kompyuterning yuragi va yoki miyasi. U o'ziga berilgan instructionlarni bajaradi. Uning asosiy vazifasi arifmetik va mantiqiy amallarni bajarish va instructionlarni birgalikda tartibga solishdir. Asosiy qismlarga o'tishdan oldin, CPU ning asosiy komponentlari va rollari nima ekanligini ko'rib chiqaylik:

### Protsessorning ikkita asosiy komponenti

* Control unit (Boshqarish bloki)  - CU
* Arifmetik va mantiqiy birlik - ALU

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