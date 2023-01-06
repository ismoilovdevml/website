## 2-qism: CPU qanday ishlaydi va qanday tuzilgan (chuqurlashtirilgan)

![alt text](https://media.istockphoto.com/id/1204740322/photo/cpu.jpg?s=612x612&w=0&k=20&c=DSjrMlrtuD42yC5XHtpoc2mqGEYEjk-B-JTDK4McTK8=)



### Central Processing Unit - CPU

:::tip
Ko'rib chiqiladigan mavzular
### 1 CPU Tarixi
* 1.1 Transistorli protsessorlar
* 1.2 Kichik o'lchamli integratsiya protsessorlari
* 1.3 Keng miqyosli integratsiya protsessorlari 
* 1.4 Mikroprotsessorlar 
### 2 Operation
* 2.1 Fetch
* 2.2 Decode
* 2.3 Execute
### Structure va implementation
* Control Unit
* Arithmetic logic unit
* Address generation unit
* Memory Management Unit (MMU)
* Cache
* Clock rate
* Clockless CPU
* Voltage regulator module
* Integer range
* Parallellik 
* Data parallelism - Ma'lumotlar parallelligi 
* Hardware performance counter
* Virtual CPU
* Performance

:::

#1 CPU nima va qanday ishlaydi?

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

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Edvac.jpg/330px-Edvac.jpg)

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

### Kichik o'lchamli integratsiya protsessorlari 

Integratsiyalashgan sxema (IC) ko'p sonli tranzistorlarni bitta yarimo'tkazgichga asoslangan matritsa yoki "chip" da ishlab chiqarishga imkon berdi.
Dastlab, `NOR gates`  kabi juda oddiy ixtisoslashmagan raqamli sxemalar ICga miniatyura qilingan.
Ushbu "building block" IC'larga asoslangan protsessorlar odatda "small-scale integration" (SSI) qurilmalari deb ataladi.
IBM `System/370`, System/360 ning davomi bo'lib, `Solid Logic Technology` discrete-transistorli modullardan ko'ra `SSI IC`-lardan foydalangan.
`DEC`-ning PDP-8/I va KI10 PDP-10 qurilmalari ham PDP-8 va PDP-10 tomonidan ishlatiladigan individual tranzistorlardan `SSI IC`-lariga o'tdi va ularning juda mashhur PDP-11 liniyasi dastlab SSI IC-lari bilan qurilgan, ammo oxir-oqibat `LSI` komponentlari amaliy holga kelganidan keyin amalga oshirildi.

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/IBM_PPC604e_200.jpg/330px-IBM_PPC604e_200.jpg)

Rasmda `IBM PowerPC 604e` protsessori

### Keng miqyosli integratsiya protsessorlari 
`Lee Boysel` nufuzli maqolalarini, shu jumladan 1967 yildagi `"manifesto"` nashr etdi, unda `32-bitli` asosiy kompyuterning ekvivalentini nisbatan kichik miqdordagi keng ko'lamli integratsiya sxemalaridan (LSI) qanday qurish mumkinligi tasvirlangan.

Yuz yoki undan ortiq gateli chiplar bo'lgan LSI chiplarini yaratishning yagona usuli ularni metall-oksid-yarim o'tkazgich `(metal–oxide–semiconductor MOS)` yarimo'tkazgich ishlab chiqarish jarayoni (PMOS logic, NMOS logic yoki  CMOS logic) yordamida qurish edi.
Biroq, ba'zi kompaniyalar bipolyar  `transistor–transistor logic (TTL)` chiplaridan protsessorlar yaratishda davom etishdi, chunki bipolyar ulanish tranzistorlari 1970-yillarga qadar `MOS` chiplariga qaraganda tezroq edi.

1968 yilda Fairchild Semiconductor kompaniyasida Federico Faggin tomonidan silicon-gate MOS texnologiyasini ishlab chiqqandan so'ng, MOS IC 1970-yillarning boshlarida standart chip texnologiyasi sifatida bipolyar TTL o'rnini egalladi.

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Federico_Faggin_%28cropped%29.jpg/382px-Federico_Faggin_%28cropped%29.jpg)

Rasmda Federico Faggin

1968 yilga kelib, to'liq protsessorni yaratish uchun zarur bo'lgan IClar soni sakkiz xil turdagi 24 ICga qisqartirildi, har bir ICda taxminan `1000 MOSFET` mavjud.

### Microprocessor - Mikroprotsessorlar 

Mikroprotsessorlar birinchi marta paydo bo'lganidan beri ular markaziy protsessorlarni amalga oshirishning boshqa barcha usullarini deyarli butunlay ortda qoldirdilar. 1971 yilda ishlab chiqarilgan birinchi tijorat mikroprotsessori `Intel 4004` va 1974 yilda ishlab chiqarilgan birinchi keng tarqalgan mikroprotsessor `Intel 8080` edi.

![alt text](https://hackaday.com/wp-content/uploads/2018/01/intel_c4004_b.jpg?w=640)
![alt text](https://upload.wikimedia.org/wikipedia/commons/3/3a/KL_Intel_i8080_Black_Background.jpg)

Rasmda Intel 4004 va Intel 8080 protsessorlari

Hamma joyda keng tarqalgan shaxsiy kompyuterning paydo bo'lishi va yakuniy muvaffaqiyati bilan birgalikda CPU atamasi endi deyarli faqat mikroprotsessorlarga nisbatan qo'llaniladi.
Oldingi protsessorlar bir yoki bir nechta elektron platalarda discrete componentlar va ko'p sonli kichik integral mikrosxemalar (IC) sifatida amalga oshirilgan.Mikroprotsessorlar esa juda oz sonli IClarda ishlab chiqarilgan protsessorlardir; odatda bitta.

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Componentes.JPG/480px-Componentes.JPG)

Rasmda discrete componentlari
## Operation

Ko'pgina protsessorlarning asosiy ishi, ularning jismoniy shaklidan qat'i nazar, dastur deb ataladigan saqlangan  instructionlar ketma-ketligini bajarishdir.
Bajarilishi kerak bo'lgan instructionlar kompyuterning qandaydir xotirasida saqlanadi. Deyarli barcha protsessorlar o'zlarining ishlashida  instruction cycle deb nomlanuvchi fetch, decode va execute bosqichlarini bajaradilar. Murakkab protsessorlarda bir vaqtning o'zida multiple instructionlar olinishi, dekodlanishi va execute bo'lishi mumkin mumkin.

[Fetch, Decode va Execute Cycle - animatsion videorolig](https://youtu.be/B9kqYiyptCk)
### Fetch

Fetch - program memorydan buyruqni (son yoki raqamlar ketma-ketligi bilan ifodalangan) olishni o'z ichiga oladi. Instructionning program memordagi joylashuvi (ddress)  program counter (Intel x86 mikroprotsessorlarida "instruction pointer" deb ataladi) tomonidan aniqlanadi, u keyingi fetch ko'rsatmaning manzilini aniqlaydigan raqamni saqlaydi.

Instruction fetchdan so'ng, shaxsiy kompyuter buyruqning uzunligiga ko'paytiriladi, shunda u ketma-ketlikda keyingi instructionning addressini o'z ichiga oladi. Ko'pincha, fetch  instructionga nisbatan sekin xotiradan olinishi kerak, bu esa instruction return bo'lishini kutayotganda CPU to'xtab qoladi. Ushbu muammo asosan zamonaviy protsessorlarda cache va pipeline architecturelari orqali hal qilinadi.

### Decode

CPU xotiradan oladigan instruction CPU nima qilishini aniqlaydi. Instruction decoder deb nomlanuvchi binary decoder  sxemasi tomonidan bajariladigan dekodlash bosqichida instruction protsessorning boshqa qismlarini boshqaradigan signallarga aylanadi.
Instructionni interpretation qilish usuli CPU instruction set architecture (ISA) bilan belgilanadi.

Ko'pincha, opcode deb ataladigan buyruq ichidagi bitlarning bir guruhi (ya'ni "field") qaysi instruction bajarish kerakligini ko'rsatadi, qolgan fieldlar odatda operandlar kabi operatsiya uchun zarur bo'lgan qo'shimcha ma'lumotlarni beradi.

Ushbu operandlar constant value (immediate value deb ataladi) yoki ba'zi bir addressing mode tomonidan aniqlangan protsessor registri yoki memory address bo'lishi mumkin bo'lgan qiymatning addressi sifatida ko'rsatilishi mumkin.

Ba'zi protsessor konstruktsiyalarida instruction decode hardwiredir, o'zgarmas binary decode sxemasi sifatida amalga oshiriladi. Boshqalarida mikrodastur  instructiolarni  multiple clock pulslari bo'yicha ketma-ket qo'llaniladigan CPU konfiguratsiya signallari setiga  translate qilish uchun ishlatiladi.

### Execute

Fetch va decode bosqichlaridan so'ng, execut bosqichi amalga oshiriladi. CPU arxitekturasiga qarab, bu single action yoki sequence actiondan iborat bo'lishi mumkin. 
Har bir action davomida control signallari protsessorning turli qismlarini elektr bilan yoqadi yoki o'chiradi, shuning uchun ular kerakli operatsiyani to'liq yoki bir qismini bajarishlari mumkin. Keyin action odatda clock pulsega javoban yakunlanadi. Ko'pincha natijalar keyingi instructionlarga tez kirish uchun internal CPU registriga yoziladi. Boshqa hollarda natijalar sekinroq, lekin arzonroq va yuqori sig'imli asosiy xotiraga yozilishi mumkin.

Misol uchun, agar qo'shish buyrug'i bajariladigan bo'lsa, operandlarni o'z ichiga olgan registrlar, qo'shishni amalga oshiradigan arithmetic logic unit (ALU) qismlari faollashadi. Clock pulsei sodir bo'lganda, operandlar manba registrlaridan ALUga  o'tadi va yig'indisi uning chiqishida paydo bo'ladi. Keyingi clock pulslarida outputni (operatsiya yig'indisini) saqlashga (masalan, registr yoki xotira) ko'chirish uchun boshqa komponentlar yoqiladi (va o'chiriladi). Olingan yig'indi juda katta bo'lsa (ya'ni, u ALU ning output so'z hajmidan kattaroq bo'lsa), keyingi operatsiyaga ta'sir qiluvchi `arithmetic overflow flag` o'rnatiladi.

## Structure va implementation

Protsessorning sxemasiga ulangan u bajarishi mumkin bo'lgan asosiy operatsiyalar to'plami bo'lib, instruction set deb ataladi.
Bunday operatsiyalar, masalan, ikkita raqamni qo'shish yoki ayirish, ikkita raqamni solishtirish yoki dasturning boshqa qismiga o'tishni o'z ichiga olishi mumkin. Har bir instruction mashina tilining opcode deb nomlanuvchi bitlarning noyob kombinatsiya bilan ifodalanadi. Instructionni qayta ishlash jarayonida protsessor opkodni (binary decoder orqali) protsessorning harakatini tartibga soluvchi control signallariga dekodlaydi. Mashina tilining to‘liq instructionni opkoddan va ko‘p hollarda operatsiya uchun argumentlarni ko‘rsatuvchi qo‘shimcha bitlardan iborat (masalan, qo‘shish amalida yig‘iladigan raqamlar). Murakkablik shkalasiga ko'ra, mashina tili dasturi bu CPU bajaradigan mashina tilidagi instructionlar to'plamidir.

Har bir instruction uchun haqiqiy matematik operatsiya CPU protsessoridagi arithmetic–logic unit yoki ALU deb nomlanuvchi kombinatsiyalangan logic sxema tomonidan amalga oshiriladi. Umuman olganda, protsessor buyruqni xotiradan olish, operatsiyani bajarish uchun ALU dan foydalanish va natijani xotiraga saqlash orqali bajaradi.
Integer matematikasi va logic operationlar bo'yicha instructionlar bilan bir qatorda, xotiradan ma'lumotlarni yuklash va ularni qayta saqlash, tarmoqlash operatsiyalari va protsessorning `floating-point unit (FPU)` tomonidan bajariladigan floating-poin raqamlar ustida matematik operatsiyalar kabi boshqa turli xil mashina instructionlari mavjud.

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/ABasicComputer.svg/555px-ABasicComputer.svg.png)

Rasmda asosiy bir protsessorli kompyuterning blok diagrammasi. Qora chiziqlar data flowni(ma'lumotlar oqimi), qizil chiziqlar esa control flowni bildiradi; o'qlar flow directionlarini ko'rsatadi.

[Instruction Set Architectur animatsion videorolig](https://youtu.be/6fgbLOL7bis)


### Control unit

`Control Unit (CU)` protsessorning ishlashini boshqaradigan protsessorning tarkibiy qismidir. U kompyuter xotirasiga, arithmetic logic unitiga hamda input va output qurilmalariga protsessorga yuborilgan instructionlarga qanday javob berish kerakligini aytadi. Vaqt va control signallarini ta'minlash orqali boshqa unitlarning ishlashini boshqaradi. Ko'pgina kompyuter resurslari CU tomonidan boshqariladi. U protsessor va boshqa qurilmalar o'rtasida ma'lumotlar oqimini boshqaradi.
`John von Neumann` control unitni von Neumann arxitekturasining bir qismi sifatida kiritdi. Zamonaviy kompyuter konstruksiyalarida control uniti odatda protsessorning ichki qismi bo‘lib, uning umumiy roli va faoliyati joriy qilinganidan beri o‘zgarmagan.

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/JohnvonNeumann-LosAlamos.gif/368px-JohnvonNeumann-LosAlamos.gif)

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Von_Neumann_Architecture.svg/480px-Von_Neumann_Architecture.svg.png)

Rasmda `John von Neumann` va `von Neumann arxitekturasi`

[Control Unit (CU) animatsion videorolik](https://youtu.be/-Qs5Ypwnb9c)


### Arithmetic logic unit

Arithmetic Logic Unit (ALU) butun sonli arifmetik va bitli mantiqiy amallarni bajaradigan protsessor ichidagi raqamli sxema.
ALU ga inputlar - bu operatsiya qilinadigan ma'lumotlar so'zlari (operandlar deb ataladi), oldingi operatsiyalardagi status ma'lumotlari va qaysi operatsiyani bajarish kerakligini ko'rsatadigan control unitdan olingan kod.
Amalga oshirilayotgan buyruqqa qarab operandlar  internal CPU registrlaridan, external memorydan yoki ALU tomonidan yaratilgan konstantalardan kelib chiqishi mumkin. Barcha input signallari ALU sxemasi bo'ylab joylashib, tarqalgach, bajarilgan operatsiya natijasi ALU outputlarida paydo bo'ladi. Natija registrda yoki xotirada saqlanishi mumkin bo'lgan data word va odatda ushbu maqsad uchun ajratilgan maxsus, internal CPU registrida saqlanadigan status informationdan iborat.

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/ALU_block.gif/435px-ALU_block.gif)

Rasmda ALU va uning input va output signallari

[Arithmetic Logic Unit animatsion videorolik](https://youtu.be/H_aoaQYgKT8)

### Address generation unit

`Address Generation Unit (AGU)`, ba'zan `Address Computation Unit(ACU)` deb ham ataladi, protsessor ichidagi execution unit bo'lib, main memoryga kirish uchun CPU tomonidan foydalaniladigan addresslarni hisoblaydi. Address calculate protsessorning qolgan qismi bilan parallel ravishda ishlaydigan alohida sxemalar orqali amalga oshirish orqali turli xil mashina instructiolarini bajarish uchun zarur bo'lgan protsessor davrlari sonini kamaytirish mumkin, bu esa unumdorlikni oshirishga olib keladi.

Turli operatsiyalarni bajarayotganda, protsessorlar memorydan ma'lumotlarni olish uchun zarur bo'lgan  memory addresslarini hisoblashlari kerak; masalan, protsessor actual memory locationdan ma'lumotlarni olishdan oldin massiv elementlarining memorydagi o'rni hisoblanishi kerak. Ushbu address-generation hisob-kitoblari qo'shish, ayirish, modul operatsiyalari yoki bitni almashtirish kabi turli xil arifmetik operatsiyalarni o'z ichiga oladi.

AGU imkoniyatlari ma'lum bir CPU va uning arxitekturasiga bog'liq. Ba'zi protsessor arxitekturalari bir nechta AGU-larni o'z ichiga oladi, shuning uchun bir vaqtning o'zida bir nechta address-calculation operatsiyalari bajarilishi mumkin, bu esa ilg'or protsessor dizaynlarining superskalyar tabiati tufayli ishlashning yanada yaxshilanishiga olib keladi.
Misol uchun, Intel o'zining `Sandy Bridge` va `Haswell` mikroarxitekturalariga bir nechta AGU-larni o'z ichiga oladi, bu esa bir nechta xotiraga kirish ko'rsatmalarini parallel ravishda bajarishga imkon berish orqali CPU xotirasi subsystemning bandwidthni oshiradi.

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Intel_CPU_Core_i7_2600K_Sandy_Bridge_perspective.jpg/480px-Intel_CPU_Core_i7_2600K_Sandy_Bridge_perspective.jpg)
![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Haswell_Chip.jpg/480px-Haswell_Chip.jpg)

Rasmda `Sandy Bridge` va `Haswell` mikroarxitekturalari

### Memory Management Unit (MMU)

Ko'pgina mikroprotsessorlar (smartfonlar va desktop, noutbuklarda, server kompyuterlarida) `memory management unit`ga ega bo'lib,  `logical address`ni fizik RAM addressga aylantiradi, `memory protection` va `paging abilities`larini ta'minlaydi, virtual memory uchun foydalidir. Oddiyroq protsessorlar, ayniqsa mikrokontrollerlar odatda MMUni o'z ichiga olmaydi.

MMU virtual memoryni boshqarish, bir vaqtning o'zida `memory protection`, `cache control`, `bus arbitration` va oddiy kompyuter arxitekturalarida (ayniqsa 8-bitli tizimlarda) bank switchingni samarali bajaradi.

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/MMU_principle_updated.png/488px-MMU_principle_updated.png)

Rasmda `Memory Management Unit (MMU)`

### Cache

CPU cache - bu main memorydan ma'lumotlarga kirish uchun o'rtacha xarajatlarni (vaqt yoki energiya) kamaytirish uchun kompyuterning  central processing unit (CPU) tomonidan foydalaniladigan hardware keshi.

Cache - bu tez-tez ishlatiladigan main memory  joylaridan ma'lumotlar nusxalarini saqlaydigan protsessor yadrosiga yaqinroq bo'lgan kichikroq, tezroq xotira. Aksariyat protsessorlarda turli xil independent cachelar, jumladan, instruction va data cachelari mavjud, bu yerda data cache odatda ko'proq cache levellari (L1, L2, L3, L4 va boshqalar) ierarxiyasi sifatida tashkil etilgan.

Boshqa turdagi keshlar ham  mavjud, masalan, ko'pchilik protsessorlarda mavjud bo'lgan memory management unitning (MMU) bir qismi bo'lgan `Translation Lookaside Buffer (TLB)`.

CPU cache haqida to'liqroq ma'lumot berilgan maqola bor. Ushbu maqoladan CPU cache haqida to'liqroq bilib olishingiz mumkin

[CPU cache nima va u qanday ishlaydi?](https://ismoilovdev.vercel.app/uz/guide/cpu_cache.html)


### Clock rate

Aksariyat protsessorlar sinxron sxemalardir, ya'ni ular ketma-ket operatsiyalarini tezlashtirish uchun clock signalidan foydalanadilar. Clock signali davriy square wave shaklida har soniyada doimiy miqdordagi impulslarni hosil qiluvchi external oscillator davri tomonidan ishlab chiqariladi. Clock pulselarining chastotasi protsessor instructionlarni bajarish tezligini belgilaydi va shuning uchun sclock qanchalik tez bo'lsa, protsessor har soniyada ko'proq instructionlarni bajaradi.
Protsessorning to'g'ri ishlashini ta'minlash uchun clock period barcha signallarning protsessor orqali tarqalishi (move) uchun zarur bo'lgan maksimal vaqtdan uzoqroqdir. 

Clock periodi tarqalishning eng yomon kechikishidan ancha yuqori qiymatga o'rnatgan holda, butun protsessorni va uning ko'tarilgan va pasaygan clock signalining "edges" atrofida ma'lumotlarni harakatlantirish usulini loyihalash mumkin. Bu protsessorni dizayn nuqtai nazaridan ham, komponentlar soni nuqtai nazaridan ham sezilarli darajada soddalashtirishning afzalligi.

Doimiy o'zgarib turadigan clock ko'plab komponentlarning o'sha paytda ishlatilishidan qat'iy nazar o'zgarishiga olib keladi. Umuman olganda, o'zgaruvchan komponent statik holatdagi elementga qaraganda ko'proq energiya sarflaydi. Shuning uchun, clock rate oshgani sayin, energiya iste'moli ortadi, bu esa protsessorni protsessor sovutish yechimlari shaklida ko'proq issiqlik tarqalishini talab qiladi.

So'nggi paytlarda keng ko'lamli clock modedan foydalanadigan diqqatga sazovor protsessor dizayni `Xbox 360` da ishlatiladigan `IBM PowerPC`-ga asoslangan `Xenon`dir; Shunday qilib, Xbox 360 ning quvvat talablari sezilarli darajada kamayadi.


### Clockless CPU

Global clock signali bilan bog'liq ba'zi muammolarni hal qilishning yana bir usuli - bu clock signalini butunlay olib tashlash.
Global clock signalini olib tashlash dizayn jarayonini ko'p jihatdan ancha murakkablashtirgan bo'lsa-da, asinxron  dizaynlar shunga o'xshash sinxron dizaynlarga nisbatan energiya iste'moli va issiqlik tarqalishida sezilarli afzalliklarga ega.
Biroz kam uchraydigan bo'lsa-da, butun asinxron protsessorlar global clock signalidan foydalanmasdan qurilgan. Bunga ikkita diqqatga sazovor misol - `ARM`-ga mos keladigan `AMULET` va `MIPS R3000`-ga mos keladigan `MiniMIPS`.

Ba'zi protsessor konstruktsiyalari clock signa lini butunlay olib tashlash o'rniga, qurilmaning ba'zi qismlarini asinxron bo'lishiga imkon beradi, masalan, asinxron ALU-larni superscalar pipelining bilan birgalikda arifmetik samaradorlikka erishish uchun ishlatish.

### Voltage regulator module

`Voltage Regulator Module (VRM)`, ba'zan `Processor Power Module (PPM) `deb ataladi, mikroprotsessor va chipsetni mos keladigan kuchlanish kuchlanishini ta'minlaydigan, +3,3 V, +5 V yoki +12 V kuchlanishni qurilmalar tomonidan talab qilinadigan pastroq kuchlanishga aylantiruvchi konvertordir. , har xil ta'minot kuchlanishiga ega qurilmalarni bir xil motherboardga o'rnatishga imkon beradi. Shaxsiy kompyuter (PC) tizimlarida VRM odatda quvvatli MOSFET qurilmalaridan iborat.

Ko'pgina zamonaviy protsessorlarda power managing moduli o'rnatilgan bo'lib, u protsessor sxemasiga talab bo'yicha kuchlanish ta'minotini tartibga soladi, bu esa ishlash va quvvat sarfi o'rtasidagi muvozanatni saqlashga imkon beradi.

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Voltage_regulator_module_for_an_Intel_Xeon_500_MHz_processor.jpg/465px-Voltage_regulator_module_for_an_Intel_Xeon_500_MHz_processor.jpg)

Rasmda `Intel Xeon 500 MHz` protsessorida ishlaydigan ` IBM Netfinity 7000 M10` serveri uchun Voltage Regulator Moduli (VRM)


### Integer range

Har bir CPU ma'lum bir tarzda raqamli qiymatlarni ifodalaydi. Misol uchun, ba'zi dastlabki raqamli kompyuterlar raqamlarni tanish o'nlik (10 ta baza) raqamli tizim qiymatlari sifatida ifodalagan, boshqalari esa uchlik (uchlik asos) kabi noodatiy ko'rinishlardan foydalangan. Barcha zamonaviy protsessorlar  binary formda raqamlarni ifodalaydi, har bir raqam "high" yoki "low" kuchlanish kabi ikki qiymatli jismoniy miqdor bilan ifodalanadi.

Ikkilik protsessor bo'lsa, bu protsessor bitta operatsiyada ishlov berishi mumkin bo'lgan bitlar soni (ikkilik kodlangan butun sonning muhim raqamlari) bilan o'lchanadi, bu odatda word size, bit width, data path width, integer precision yoki integer size

Protsessorning butun son o‘lchami u to‘g‘ridan-to‘g‘ri ishlashi mumkin bo‘lgan butun son qiymatlari diapazonini belgilaydi. Masalan, 8-bitli protsessor sakkiz bit bilan ifodalangan, 256 (28) discrete butun qiymatlar diapazoniga ega bo‘lgan butun sonlarni to‘g‘ridan-to‘g‘ri boshqarishi mumkin.
Butun son diapazoni, shuningdek, protsessor to'g'ridan-to'g'ri murojaat qilishi mumkin bo'lgan memory locationlari soniga ham ta'sir qilishi mumkin. Misol uchun, agar ikkilik protsessor xotira manzilini ko'rsatish uchun 32 bitdan foydalansa, u to'g'ridan-to'g'ri 232 memory locationga murojaat qilishi mumkin. Ushbu cheklovni chetlab o'tish uchun va boshqa sabablarga ko'ra, ba'zi protsessorlar qo'shimcha xotiraga ruxsat beruvchi mexanizmlardan (masalan,  bank switching) foydalanadi.

Kattaroq word sizega ega bo'lgan protsessorlar ko'proq sxemani talab qiladi va shuning uchun jismonan kattaroq, qimmatroq va ko'proq quvvat sarflaydi (va shuning uchun ko'proq issiqlik chiqaradi).
Natijada, word sizelari ancha katta bo'lgan protsessorlar (masalan, 16, 32, 64, hatto 128 bit) mavjud bo'lsa ham, zamonaviy ilovalarda kichikroq 4 yoki 8 bitli mikrokontrollerlar odatda qo'llaniladi. Yuqori unumdorlik talab qilinganda, kattaroq word sizening afzalliklari kamchiliklardan ustun bo'lishi mumkin.

![alt text](http://www.passmark.com/images/forumimages/64bit_vs_32bit_benchmark_V7.png)

### Parallellik 

Odatda `subscalar `deb ataladigan bu turdagi protsessor bir vaqtning o'zida bir yoki ikkita ma'lumot bo'lagida bitta instruction ustida ishlaydi va bajaradi, ya'ni clock cycliga bitta ko'rsatmadan kamroq (IPC < 1).

Bu jarayon subscalar protsessorlarning o'ziga xos samarasizligini keltirib chiqaradi. Bir vaqtning o'zida faqat bitta instruction bajarilganligi sababli, keyingi instructionga o'tishdan oldin butun protsessor ushbu instruction bajarilishini kutishi kerak.

Scalar va yaxshiroq ishlashga erishishga urinishlar protsessorning less linearly va parallel ravishda ishlashiga olib keladigan turli xil dizayn metodologiyalariga olib keldi. Protsessorlarda parallelizm haqida gap ketganda, ushbu dizayn texnikasini tasniflash uchun odatda ikkita atama qo'llaniladi:

* instruction-level parallelism (ILP), protsessor ichida instructionlarni bajarish tezligini oshirishga intiladi (ya'ni, o'z vaqtida bajarish resurslaridan foydalanishni ko'paytirish);
* task-level parallelism (TLP), Bu CPU bir vaqtning o'zida bajarishi mumkin bo'lgan ish zarralari yoki  proceslar sonini ko'paytirishdan iborat.

### Data parallelism - Ma'lumotlar parallelligi 

Protsessorlarning kamroq tarqalgan, ammo tobora muhim bo'lgan paradigmasi (va umuman olganda, hisoblash) data parallelism bilan bog'liq. Yuqorida muhokama qilingan protsessorlarning barchasi skalyar qurilmalarning bir turi deb ataladi. Nomidan ko'rinib turibdiki, vektor protsessorlari bitta instruction kontekstida bir nechta ma'lumotlar qismlari bilan ishlaydi. Bu har bir instruction uchun bitta ma'lumot bo'lagi bilan ishlaydigan skalyar protsessorlardan farq qiladi. `Flynn taxonomy`sidan foydalangan holda, ma'lumotlar bilan ishlashning ushbu ikki sxemasi odatda mos ravishda `single instruction stream,` `multiple data stream (SIMD)` va `single instruction stream`, `single data stream (SISD)` deb ataladi.

Ma'lumotlar vektorlari bilan shug'ullanadigan protsessorlarni yaratishda katta foyda, katta hajmdagi ma'lumotlar to'plamida bir xil operatsiyani (masalan, yig'indi yoki dot product) bajarishni talab qiladigan vazifalarni optimallashtirish turadi.

Skayar protsessor ma'lumotlar to'plamidagi har bir buyruq va fetch qilish, dekodlash va bajarishning butun jarayonini yakunlashi kerak bo'lsa, vektor protsessor bir buyruq bilan nisbatan katta ma'lumotlar to'plamida bitta operatsiyani bajarishi mumkin.

Ko'pgina ilk vektor protsessorlari, masalan, `Cray-1`, deyarli faqat ilmiy tadqiqotlar va kriptografiya ilovalari bilan bog'liq edi.

Ko'p o'tmay, floating-point units general-purpose protsessorlarda odatiy holga aylana boshladi, general-purpose protsessorlar uchun SIMD  execution unitlarining spetsifikatsiyalari va amalga oshirishlari ham paydo bo'la boshladi.

### Hardware performance counter

Ko'pgina zamonaviy arxitekturalar (shu jumladan embedded ones) odatda  low-leveldagi (instruction-level) collection, benchmarking, debugging  yoki running software metriclarini tahlil qilish imkonini beruvchi `hardware performance counters (HPC)` ni o'z ichiga oladi.
HPC shuningdek, dasturiy ta'minotning g'ayrioddiy yoki shubhali faoliyatini aniqlash va tahlil qilish uchun ishlatilishi mumkin, masalan, `return-oriented programming (ROP)` yoki `sigreturn-oriented programming (SROP)` ekspluatatsiyalari va boshqalar.

Ko'pgina yirik ishlab chiqaruvchilar (masalan, IBM, Intel, AMD va Arm va boshqalar) o'lchovlarni olish uchun CPU registrlaridan ma'lumotlarni to'plash uchun ishlatilishi mumkin bo'lgan software interfacelarni (odatda C/C++ da yozilgan) taqdim etadi.
Operatsion tizim vendorlari kernellar va ilovalarda ishlaydigan CPU eventlarni qayd etish, taqqoslash yoki kuzatish uchun `perf`(Linux) kabi dasturlarni ham taqdim etadi.

### Virtual CPU

`Cloud computing` protsessor ishini virtual central processing units(vCPUs) bo'linishni o'z ichiga olishi mumkin.
Virtual CPU (vCPU) virtual protsessor sifatida ham tanilgan, virtual machine (VM) tayinlangan physical central processing unit (CPU).

Virtual protsessorlar haqida batafsil ma'lumot

[IBM - Virtual processors](https://www.ibm.com/docs/en/power8?topic=processors-virtual)

[Datacenters.com - What is a vCPU and How Do You Calculate vCPU to CPU?](datacenters.com/news/what-is-a-vcpu-and-how-do-you-calculate-vcpu-to-cpu)


![alt text](https://hoststud.com/attachments/1614317912921-png.1341/)
![alt text](http://frankdenneman.nl/wp-content/uploads/2013/09/05-vCPU-Stack.png)

### Performance

Protsessorning ishlashi yoki tezligi, boshqa ko'plab omillar bilan bir qatorda, soat tezligiga (odatda gertsning ko'paytmalarida berilgan) va  instructions per clock (IPC) bog'liq bo'lib, ular birgalikda CPU bajarishi mumkin bo'lgan instructions per second (IPS) uchun omillari hisoblanadi.

:::tip
IPC = instructions per clock

IPS = instructions per second
:::

Kompyuterlarning qayta ishlash unumdorligi multi-core protsessorlar(ko'p yadroli) yordamida oshiriladi, bu asosan ikkita yoki undan ortiq individual protsessorlarni (bu ma'noda core deb ataladi) bitta integral mikrosxemaga ulaydi.
Ideal holda, dual core(2 yadroli) protsessor bir yadroli protsessordan deyarli ikki baravar kuchliroq bo'ladi. Amalda, dasturiy ta'minot algoritmlari va amalga oshirishning nomukammalligi tufayli unumdorligi ancha kichik, atigi 50% atrofida.

Zamonaviy protsessorlarning o'ziga xos imkoniyatlari, masalan, simultaneous multithreading o'tkazish va  uncore kabi, bu protsessorning haqiqiy resurslarini ko'paytirishni maqsad qilgan holda almashishni o'z ichiga olganligi sababli, performance darajasi va hardwaredan foydalanishni kuzatish asta-sekin murakkabroq vazifaga aylandi.

Bunga javoban, ba'zi protsessorlar protsessorning turli qismlaridan haqiqiy foydalanishni kuzatuvchi va dasturiy ta'minot uchun mavjud bo'lgan turli hisoblagichlarni ta'minlaydigan qo'shimcha hardware logicni amalga oshiradi; Misol tariqasida Intelning `Performance Counter Monitor` texnologiyasini keltirish mumkin


Maqola juda uzun bo'lgani uchun uzur so'rayman )

Endi sizda CPU ishlashi va qanday tuzilgani haqida bilib oldingiz )

Xato va kamchiliklar bo'lsa uzur so'rayman )


Foydanilgan Manbalar

[Wikipedi](https://en.wikipedia.org/wiki/Central_processing_unit)
va boshqa manbalar


