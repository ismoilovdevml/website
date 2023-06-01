# Asosiy operatsion tizim atamalari va tushunchalari


:::tip
Dokumentatsiyada
* Asosiy operatsion tizim atamalari va tushunchalari
* Linux kernelining umumiy ko'rinishi
:::

Kernel(yadro) va foydalanuvchi(user) operatsion tizimlarda tez-tez ishlatiladigan ikkita atamadir. Ularning ta'rifi juda aniq: kernel(yadro) operatsion tizimning yuqori imtiyozlar bilan ishlaydigan qismidir, foydalanuvchi(user) odatda past imtiyozlar bilan ishlaydigan ilovalarni anglatadi. Biroq, bu atamalar haddan tashqari yuklangan va ba'zi kontekstlarda juda aniq ma'nolarga ega bo'lishi mumkin. Foydalanuvchi rejimi(user mode) va kernel rejimi(kernel mode) protsessorning ishlash rejimiga xos bo'lgan atamalardir. Kernel modeda ishlaydigan kod protsessorni to'liq boshqarishi mumkin, user modeda ishlaydigan kod esa ma'lum cheklovlarga ega. Agar user modeda ishlayotganda bunday operatsiyaga urinilsa, istisno hosil bo'ladi va kernel uni boshqarishni o'z zimmasiga oladi.

:::tip
Ba'zi protsessorlar kernel modedan ham yuqori imtiyozlarga ega bo'lishi mumkin, masalan. hypervisor mode, unga faqat hypervisorda ishlaydigan kod kirish mumkin (virtual mashina monitori)
:::

User space(foydalanuvchi maydoni) va kernel space(yadro maydoni), xususan,memory protectionga yoki kernel yoki foydalanuvchi ilovalari bilan bog'liq virtual address spacelariga tegishli bo'lishi mumkin. Juda soddalashtirilgan holda, kernel space kernel uchun ajratilgan memory area(xotira maydoni), user space  esa ma'lum bir foydalanuvchi jarayoni uchun ajratilgan xotira maydoni. Kernel spacega kirish himoyalangan bo'lib, user applications(foydalanuvchi ilovalari) unga to'g'ridan-to'g'ri kira olmaydi, user space esa kernel modeda ishlaydigan koddan to'g'ridan-to'g'ri kirish mumkin.

:::tip
Asosiy operatsion tizim atamalari va tushunchalari:
* Operating System (OS)
* Kernel
* Process
* Thread
* Scheduler
* Memory Management
* File System
* Device Drivers
* System Calls
* Virtualization
* Interrupt
* Multitasking
va boshqalar
:::

### Oddiy operatsion tizim arxitekturasi

Oddiy operatsion tizim arxitekturasida (quyidagi rasmga tasvirlangan) operatsion tizim kerneli bir nechta ilovalar bilan xavfsiz va to'gri tarzda hardwarega kirish va almashish uchun javobgardir.

![alt text](https://linux-kernel-labs.github.io/refs/heads/master/_images/ditaa-48374873962ca32ada36c14ab9a83b60f112a1e0.png)

Kernel odatda "System Calls(Tizim qo'ng'iroqlari)" deb ataladigan ilovalar chiqaradigan API to'plamini taklif qiladi. Ushbu API'lar oddiy kutubxona API'laridan farq qiladi, chunki ular execution mode, user modedan kernel modega o'tish chegarasi hisoblanadi. Application(ilova) mosligini ta'minlash uchun system calllari kamdan-kam hollarda o'zgartiriladi. Linux, ayniqsa, buni amalga oshiradi (kerak bo'lganda o'zgarishi mumkin bo'lgan kernel API-laridan farqli o'laroq). Kernel kodining o'zi kernel kodida va qurilma drayverlari kodida logical(mantiqiy) ravishda ajratilishi mumkin. Asosiy kernel kodi umumiy bo'lsa, qurilma drayverlari kodi muayyan qurilmalarga kirish uchun javobgardir. Kernel yadrosi(core) yana bir nechta logical subsystem tizimlarga bo'linishi mumkin (masalan, fayllarga kirish, tarmoqqa ulanish, jarayonni boshqarish va boshqalar).

### Monolithic kernel

Monolitik kernel operatsion tizim dizaynining bir turi bo'lib, unda butun operatsion tizim kernel spaceda yoki "boss rejimida" ishlaydi. Bu shuni anglatadiki, rejalashtirish, fayllarni boshqarish va xotirani boshqarish kabi barcha asosiy tizim xizmatlari bir joyda mahkam birlashtirilgan va eng yuqori imtiyozlar darajasida ishlaydi.

Afzallik shundaki, bu yuqori samaradorlikka olib kelishi mumkin, chunki barcha xizmatlarga osongina kirish mumkin va bir-biri bilan bevosita muloqot qilish mumkin. Ammo salbiy tomoni shundaki, agar bir qism ishlamay qolsa, u butun tizimni ishdan chiqarishi mumkin, chunki hamma narsa bir-biriga bog'langan.

Bu sizning uyingiz uchun barcha boshqaruv elementlari - chiroqlar, harorat, qulflar - bitta katta boshqaruv panelida bo'lganga o'xshaydi. Bu samarali va tez, lekin panelda biror narsa noto'g'ri bo'lsa, hamma narsa ishlamay qolishi mumkin.

Monolit krernel - bu kernelning turli quyi tizimlari(subsystem) o'rtasida kirish himoyasi mavjud bo'lmagan va umumiy funksiyalarni turli subsystemlar o'rtasida bevosita chaqirish mumkin bo'lgan kerneldir.

![alt text](https://linux-kernel-labs.github.io/refs/heads/master/_images/ditaa-3dc899167df5e16a230c434cf5d6964cb5868482.png)

Biroq, ko'pgina monolit kernellar subsytemlar o'rtasida, ayniqsa kernel coresi va qurilma drayverlari o'rtasida logical separation(mantiqiy ajratish)ni ta'minlaydi, ular bitta subsystem yoki qurilma drayverlari tomonidan taklif qilinadigan servicelarga kirish uchun ishlatilishi kerak bo'lgan nisbatan qat'iy API-larga ega (lekin o'rnatilgan bo'lishi shart emas).

### Micro kernel

Mikro-kernel - bu operatsion tizim dizaynining yana turi, unda faqat eng muhim servicelar (masalan, minimal process va memory management) kernel ichida bo'lib, "boss rejimi"da ishlaydi. Qurilma drayverlari, fayl tizimlari va tarmoq kabi boshqa komponentlar alohida processlar sifatida user modeda ishlaydi.

Bu kernelni kichikroq va soddalashtiradi va potentsial ravishda ishonchliroq qiladi. Agar bitta service ishlamay qolsa, bu boshqalarga yoki kernel coresiga ta'sir qilishi shart emas. Lekin bu sekinroq bo'lishi mumkin, chunki servicelar bir-birlari bilan ko'pincha xabarlar yordamida rasmiyroq muloqot qilishlari kerak.

Buni uyingizda yorug'lik, harorat va qulflar uchun turli xil boshqaruv panellari mavjudligi kabi o'ylab ko'ring. Agar yorug'likni boshqarish noto'g'ri bo'lsa, siz hali ham haroratni sozlashingiz va eshiklarni qulflashingiz mumkin. Ammo chiroqni yoqish va eshikni qulflash uchun siz ikki xil joyga borishingiz kerak bo'lishi mumkin.

Mikro-kernel kernelning katta qismlari bir-biridan himoyalangan, odatda user spaceda xizmat ko'rsatadigan kerneldir. Kernelning muhim qismlari hozir foydalanuvchi rejimida(user mod) ishlayotganligi sababli, kernel rejimida(kernel mode) ishlaydigan qolgan kod sezilarli darajada kichikroq, shuning uchun mikro kernel atamasi ishlatiladi.

![alt text](https://linux-kernel-labs.github.io/refs/heads/master/_images/ditaa-c8a3d93d0109b7be6f608871d16adff4aaa933da.png)

Mikro-kernel arxitekturasida kernel turli xil ishlaydigan jarayonlar o'rtasida xabar o'tishiga imkon beradigan yetarli kodni o'z ichiga oladi.
Amalda bu kernelda scheduler(rejalashtiruvchi )va IPC mexanizmini, shuningdek ilovalar va servicelar o'rtasida himoyani o'rnatish uchun asosiy xotira boshqaruvini amalga oshirishni anglatadi. Ushbu arxitekturaning afzalliklaridan biri shundaki, servicelar izolyatsiya qilingan va shuning uchun bitta servicedagi xatolar boshqa servicelarga ta'sir qilmaydi. Shunday qilib, agar service ishlamay qolsa, biz butun tizimga ta'sir qilmasdan uni qayta ishga tushirishimiz mumkin.
Biroq, amalda bunga erishish qiyin, chunki serviceni qayta ishga tushirish ushbu servicega bog'liq bo'lgan barcha ilovalarga ta'sir qilishi mumkin (masalan, agar fayl serveri ochilgan fayl identifikatorlari bo'lgan barcha ilovalarni buzsa, ularga kirishda xatolar yuzaga keladi). Ushbu arxitektura kernelga modulli yondashuvni qo'llaydi va xizmatlar o'rtasida memory protection(xotirani himoya) qilishni taklif qiladi, lekin ishlash xarajati bilan. Monolitik kernellardagi ikkita service o'rtasidagi oddiy funksiya chaqiruvi endi IPC va schedulingdan o'tishni talab qiladi.


### Micro-kernel vs Monolitik kernel

Micro-kernel tarafdorlari ko'pincha micro-kernel modulli dizayni tufayli micro-kernelning ustun ekanligini ta'kidlaydilar. Biroq, monolit kernellar modulli bo'lishi mumkin va zamonaviy monolit kernellari bu maqsadda foydalanadigan bir nechta yondashuvlar mavjud:

* Komponentlar kompilyatsiya vaqtida yoqilishi yoki o'chirilishi mumkin
* Yuklanadigan kernel modullarini qo'llab-quvvatlash (runtimeda)
* Logical, independent subsystemlarda kernelni tashkil qilish
* Strict interfeyslar, lekin performance(unumdorligi) past: makroslar, inline funksiyalar, funksiya pointerlari

Monolit va mikro kernellar o'rtasida (masalan, Windows, Mac OS X) o'zini gibrid(hybrid) kernel deb da'vo qiladigan operatsion tizimlar sinfi mavjud. Biroq, barcha tipik monolit servicelar ushbu operatsion tizimlarda kernel modeda ishlaganligi sababli, ularni monolit kernellardan tashqari sifatlash uchun unchalik ahamiyatli emas. Ko'pgina operatsion tizimlar va kernel mutaxassislari buni ma'nosiz va shunchaki marketing deb rad etishdi. Linus Torvalds bu masala haqida shunday dedi:

"Gibrid kernelga kelsak, bu shunchaki marketing. Bu mikro-kernellarda yaxshi PR bor edi, qanday qilib biz ishlaydigan kernelimiz uchun yaxshi PR olishga harakat qilishimiz mumkin? O, bilaman, keling, ajoyib nom ishlatamiz va harakat qilib ko'raylik. Bu boshqa tizimdagi barcha PR afzalliklariga ega ekanligini anglatadi."

### Address space

Address space atamasi turli kontekstlarda turli ma'nolarga ega bo'lishi mumkin bo'lgan atama. Physical address space(jismoniy manzil maydo)ni operativ xotira va qurilma xotiralari memory busida qanday ko'rinishini bildiradi. Masalan, 32 bitli Intel arxitekturasida RAMni lower physical address spacega joylashtirish odatiy holdir, grafik karta xotirasi esa physical address spaceda yuqori bo'ladi. Virtual address spacesi (yoki ba'zan shunchaki address space) virtual xotira moduli yoqilganda (ba'zan protected mode yoki paging yoqilgan deb ataladi) protsessor xotirani ko'rish usulini bildiradi. Kernel virtual addreslar spaceni yaratadigan xaritalashni(mapping) o'rnatish uchun javobgardir, unda ushbu spacening hududlari ma'lum physical memory arealariga mos keladi. Virtual address spacesi bilan bog'liq holda tez-tez ishlatiladigan yana ikkita atama mavjud: process (address) space va kernel (address) space. Process spacesi process(jarayon) bilan bog'langan virtual address spacesi (bir qismi). Bu jarayonlarning "xotira ko'rinishi(memory view)". Bu noldan boshlanadigan uzluksiz maydon. Processning address spacesi qayerda tugashi implementation va arxitekturaga bog'liq. Kernel spacw - kernel modeda ishlaydigan kodning "xotira ko'rinishi(memory view)".

Address space process yoki tizim foydalanishi mumkin bo'lgan memory location oralig'ini bildiradi.

Kompyuter dasturi uchunaddress space ma'lumotlarni saqlash va olish uchun kirishi mumkin bo'lgan xotirani ifodalaydi. Bu dasturning shaxsiy ish maydoniga o'xshaydi - boshqa hech qanday dastur unga tegishi mumkin emas. Bu har bir dastur ishini alohida saqlaydi va ularning bir-biriga tasodifan aralashishini oldini oladi.

Butun tizim uchun address space barcha dasturlar va operatsion tizim foydalanishi mumkin bo'lgan umumiy xotirani ifodalaydi. Bu kompyuterda mavjud bo'lgan umumiy ish maydoniga o'xshaydi.

### User va kernel virtual address space taqsimlanishi

User va kernel spacelari uchun odatiy dastur virtual address spacesi user processes(foydalanuvchi jarayonlari) va kernel o'rtasida taqsimlanadi. Bu holda kernel space address spacening yuqori qismida, user space esa pastki qismida joylashgan. User processlarining kernel spacega kirishiga yo'l qo'ymaslik uchun kernel user modedan kernel spacega kirishni taqiqlovchi xaritalarni yaratadi.

Operatsion tizimda virtual address space tushunchasi process(jarayon ) yoki task(vazifa) tomonidan ko'riladigan asosiy xotira (RAM) mavhumligini bildiradi. Bu space ikkita asosiy bo'limga bo'lingan: user space va kernel space.

User Space: Bu user applicationlari yoki processlari uchun ajratilgan xotira qismi. Har bir process o'zining private(shaxsiy) user spacega ega. Ushbu spaceda process kodni bajarishi(execute), ma'lumotlarni saqlashi va boshqa process-specific tasklarni bajarishi mumkin.

Kernel Space: Bu kernel, kernel kengaytmalari(extension) va aksariyat qurilma drayverlarini(device driver) ishga tushirish uchun ajratilgan xotira qismidir. User spacedan farqli o'laroq, kernel space barcha processlar o'rtasida taqsimlanadi.

Ham user space, ham kernel space bir xil virtual address spacega ega, ammo ular xavfsizlik va barqarorlik maqsadida ajratilgan. User modedagi process faqat o'zining user modedagi xotiraga kirishi mumkin va kernel spacega bevosita kira olmaydi. Agar process kernel bilan o'zaro aloqada bo'lishi kerak bo'lsa (masalan, I/O(input/output) operatsiyalari uchun), u buni system calllari yordamida amalga oshiradi, bu user applicationlariga operatsion tizimdan servicelarni so'rash imkonini beruvchi boshqariladigan interfeyslardir.

User va kernel space o'rtasidagi bu bo'linish user-space processidagi xato yoki xavfsizlik buzilishi tizimni buzmasligi yoki kernelni buzmasligini ta'minlashga yordam beradi. Kernel butun tizim ustidan to'liq nazoratga ega, shuning uchun uni noto'g'ri user-space processlaridan himoya qilish juda muhimdir.

![alt text](https://linux-kernel-labs.github.io/refs/heads/master/_images/ditaa-a5f93e0d17ccdc2ba24828b620d7227f7fc75e33.png)

### Execution contexts

Execution Context, sodda qilib aytganda, kod bo'lagi ishlayotgan  'environment' yoki 'state' ga o'xshaydi. U rocess qayerda bajarilayotgani, o'zgaruvchilar qiymatlari va kodni to'g'ri ishga tushirish uchun zarur bo'lgan boshqa tafsilotlar kabi ma'lumotlarni o'z ichiga oladi.

Masalan, kompyuteringizda dastur ishlayotgan bo'lsa, operatsion tizim uning uchun execution contextini yaratadi. Bu dastur nima qilayotganini kuzatib borishi kerak bo'lgan barcha tafsilotlarni o'z ichiga oladi, masalan, keyingi instruction(ko'rsatma)ni bajarishi, qanday ma'lumotlar bilan ishlayotgani va hokazo. Agar dasturni to'xtatib turish kerak bo'lsa (masalan, boshqa dasturni ishga tushirish uchun), operatsion tizim ushbu kontekstni saqlab qo'yishi va dastur to'xtagan joyidan davom etishi uchun uni keyinroq qayta yuklashi mumkin.

Kernelning eng muhim vazifalaridan biri interruptlarga xizmat ko'rsatish va ularga samarali xizmat ko'rsatishdir. Bu juda muhimki, u bilan maxsus execution context bog'langan. Kernel interrupt natijasida ishlaganda interrupt contextda ishlaydi. Bunga interrupt handler kiradi, lekin u bilan cheklanmaydi, interrupt modeda ishlaydigan boshqa maxsus(software)  konstruksiyalar mavjud. Interrupt kontekstida ishlaydigan kod har doim kernel modeda ishlaydi va kerel dasturchisi bilishi kerak bo'lgan ma'lum cheklovlar mavjud (masalan, blokirovkalash funktsiyalarini chaqirmaslik yoki user spacega kirish). Interrupt kontekstiga qarshi process(jarayon )konteksti mavjud. Process kontekstida ishlaydigan kod buni user modeda(executing application code)  yoki kernel modeda (executing a system call) amalga oshirishi mumkin.

### Multi-tasking

Multitasking - bu operatsion tizimning bir nechta dasturlarni "bir vaqtning o'zida(simultaneously)" bajarish qobiliyati. Buni ishlaydigan processeslar o'rtasida tezda almashish orqali amalga oshiradi. Kooperativ multitasking dasturlardan ko'p vazifani bajarish uchun hamkorlik qilishni talab qiladi. Dastur ishga tushadi va CPU boshqaruvini OSga qaytaradi, keyin esa boshqa dasturni rejalashtiradi. Preemptive multitasking bilan kernel har bir  process uchun qat'iy cheklovlarni amalga oshiradi, shuning uchun barcha  processlarni ishga tushirish uchun  imkoniyat bo'ladi. Har bir processga vaqt boʻlagini (masalan, 100ms) ishga tushirishga ruxsat beriladi, shundan soʻng, agar u hali ham ishlayotgan boʻlsa, u majburiy ravishda oʻchiriladi va boshqa vazifa rejalashtiriladi.

Multi-tasking - bu kompyuterning bir vaqtning o'zida bir nechta task yoki processlarni bajarishi(run).

Tasavvur qiling, siz bir vaqtning o'zida musiqa tinglash, hujjat yozish va Internetni ko'rish uchun kompyuteringizdan foydalanyapsiz. Sizning kompyuteringiz multi-tasking(ko'p vazifali) bo'lib, bu vazifalarni soniyada bir necha marta oldinga va orqaga almashtiradi.

Bu bir vaqtning o'zida bir nechta taom tayyorlayotgan oshpazga o'xshaydi va hamma narsa tayyor bo'lishi uchun ular orasida doimiy almashadi. Oshpaz bir vaqtning o'zida hamma narsani qiladi deb o'ylashingiz mumkin, lekin ular aslida vazifalarni juda tez o'zgartiradilar. Multi-tasking kompyuteringizda shunday ishlaydi.

### Preemptive kernel

Preemptive multitasking va preemptive kernellari turli atamalardir.

Agar kernel modeda ishlayotganda processni oldini olish mumkin bo'lsa, kernel preemptive hisoblanadi.

Biroq, preemptiv bo'lmagan kernellar preemptive multitaskingni qo'llab-quvvatlashi mumkinligini unutmang.

Operatsion tizimdagi preemptiv kernel tizimga yuqoriroq ustuvor task(vazifa) foydasiga joriy ishlayotgan taskni interrupt qilishi yoki to'xtatish imkonini beradi. Bu shuni anglatadiki, agar muhimroq task paydo bo'lsa, kernel joriy taskni "oldindan o'tkazishi(preempt)" yoki to'xtatib qo'yishi va muhimi birinchi bo'lib ishga tushishi mumkin.

Buni oziq-ovqat do'konidagi kassada bo'lish kabi o'ylab ko'ring. Agar siz tekshirish o'rtasida bo'lsangiz-u, lekin kimdir shoshilinch ehtiyojga duch kelsa, masalan, narxni tekshirish, kassir (kernel kabi) tranzaktsiyangizni to'xtatib qo'yishi mumkin (joriy task), shoshilinch ehtiyojni hal qilishi mumkin (yuqori - ustuvor task (higher-priority task)) va keyin tranzaktsiyani tugatish uchun qaytib keling. Bu preemptive kernel qiladigan narsaga o'xshaydi: u muhim tasklarni tezda hal qilinishini ta'minlaydi va tizimning umumiy samaradorligini oshiradi.

### Sahifalanadigan(pageable) kernel memory

Agar kernel xotirasining qismlari (kod, ma'lumotlar, stek yoki dinamik ravishda ajratilgan xotira) diskka almashtirilishi mumkin bo'lsa, kernel pageable kernel memoryni qo'llab-quvvatlaydi.

Pageable kernel memory - bu system memoryning bir qismi bo'lib, kerak bo'lganda physical(jismoniy) memoryni (RAM) bo'shatish uchun hard diskka ko'chiriladi. Operatsion tizim buni xotirani kichik bo'laklarga yoki "sahifalarga(pages)" bo'lish orqali amalga oshiradi va faqat hozir keraklilarini operativ xotirada saqlaydi.

Pageable kernel memoryni kitob javoni kabi o'ylab ko'ring. Siz faqat javondagi (RAM) kitoblarni (maʼlumotlarni) oʻqishingiz mumkin, lekin javon toʻlgan boʻlsa va siz yangi kitob qoʻshishingiz kerak boʻlsa, hozir oʻqimayotgan kitoblaringizdan birini saqlash qutisiga koʻchirishingiz mumkin. (hard disk). Sizga yana kitob kerak bo'lganda, siz uni javonga almashtirasiz, ehtimol qutiga boshqa kitob qo'yasiz. Bu jarayon, xuddi pageable kernel memory kabi, cheklangan miqdordagi javon maydoni (RAM) bilan ko'p sonli kitoblarni (ma'lumotlarni) boshqarish imkonini beradi. Bu tizimni har doim operativ xotirada saqlashga to'g'ri kelganidan ko'ra ko'proq vazifalar va ma'lumotlarni boshqarish imkonini berib, tizimni yanada moslashuvchan va samarali qiladi.

### Kernel stack

Har bir process kernel modeda bajarilayotganda system call natijasida funksiya chaqiruvi(function call) zanjiri va local o'zgaruvchilar(variable) holatini saqlab turish uchun ishlatiladigan kernel stekiga ega.

Kernel stegi kichik (4KB - 12 KB), shuning uchun kernel dasturchisi to'g'ri chegaralanmagan stek yoki recursive calllarda katta structurelarni ajratishdan qochishi kerak.

Kernel stack - bu operatsion tizimdagi har bir taskga(vazifa) (yoki theread) tayinlangan kichik hajmdagi xotira. Bu taskni bajarish uchun zarur bo'lgan ma'lumotlarni saqlash uchun ishlatiladi, masalan, function call ma'lumotlari, local variablelar va return addreslari.

Kitoblar to'plamini tasavvur qiling, bu yerda siz faqat yuqoridan kitob qo'shishingiz yoki olib tashlashingiz mumkin. Funksiya chaqirilganda, uning ma'lumotlari (masalan, yangi kitob) stek ustiga qo'shiladi. Funksiya tugagach, uning ma'lumotlari stekning yuqori qismidan o'chiriladi. Bu funksiya chaqiruvlari bilan bog'liq ma'lumotlarni saqlash va boshqarishda kernel stekining qanday ishlashiga o'xshaydi.

Ushbu stuctura zarur, chunki u tizimga funksiyalarni chaqirish tartibini eslab qolishga yordam beradi. Turli tasklar ma'lumotlari o'rtasida chalkashliklarga yo'l qo'ymaslik uchun har bir task yoki thread o'z stekini oladi. Agar task boshqa funksiyani chaqiradigan funksiyani chaqirsa, stek hamma narsa sodir bo'lishini va to'g'ri tartibda tugashini ta'minlaydi. Bu operatsion tizimlar vazifalar va funksiya chaqiruvlarini qanday boshqarishining asosiy qismidir.


### Portability

Turli arxitekturalar va hardware konfiguratsiyalarida portativlikni oshirish uchun zamonaviy kernellar yuqori darajada quyidagicha tashkil etilgan:

* Arxitektura va mashinaga xos kod (C & ASM)
* Mustaqil arxitektura kodi (C):
* Kernel core (keyinchalik bir nechta quyi tizimlarga bo'lingan)
* qurilma drayverlari
Bu turli arxitekturalar va mashine konfiguratsiyalari o'rtasida kodni iloji boricha qayta ishlatishni osonlashtiradi.

Portativ kernel turli hardware arxitekturalari yoki platformalarida ishlash uchun osongina moslash yoki ko'chirish uchun mo'ljallangan, operatsion tizimning asosiy komponenti bo'lgan kernelga ishora qiladi. U hardwarega xos assembler tili o‘rniga C kabi yuqori darajadagi tilda yozilgan bo‘lib, turli tizimlar uchun o‘zgartirishni osonlashtiradi.

Agar sizda retsept bo'lsa, qaysi oshxonada bo'lishingizdan qat'i nazar, o'zingizning oshxonangizmi, do'stingizning oshxonasimi yoki  ijarada bo'lgan oshxonami, o'sha taomni pishirishingiz mumkin. Turli xil qozon va kostryulkalar yoki pechning quvvati uchun biroz sozlashingiz kerak bo'lishi mumkin, ammo retsept aslida bir xil bo'lib qoladi.

Xuddi shunday tarzda, portativ kernel turli xil hardware platformalarida (masalan, turli oshxonalarda bo'lish) ba'zi o'zgarishlar bilan ishlashi mumkin. Xuddi retsept kabi, u o'zining asosiy funksiyalari va tuzilishini saqlab qolgan holda turli muhitlarda ishlash qobiliyatiga ega.

Portativ kernelning mashhur namunalaridan biri bu Linux kerneli bo'lib, u asosiy kadrlar va superkompyuterlardan tortib shaxsiy kompyuterlar, mobil qurilmalar va hatto kichik embedded systemlargacha bo'lgan juda ko'p turli xil hardware vositalarida ishlash uchun ko'chirilgan. Ushbu portativlik Linuxning keng ommalashishi va qo'llanilishining sabablaridan biridir.

### Asymmetric MultiProcessing (ASMP)

Asymmetric MultiProcessing (ASMP) bu kernel tomonidan bir nechta protsessorlarni (corelarni) qo'llab-quvvatlash usuli bo'lib, bu yerda protsessor kernelga ajratilgan va boshqa barcha protsessorlar user space dasturlarini boshqaradi. Ushbu yondashuvning ojizligi shundaki, kernel o'tkazuvchanligi (masalan, system call, interrupt handling va h.k.) protsessorlar soniga mos kelmaydi va shuning uchun odatiy processlar tez-tez system callardan foydalanadi. Yondashuvning kengaytirilishi juda aniq tizimlar (masalan, ilmiy ilovalar) bilan cheklangan.

Asymmetric MultiProcessing (ASMP) - bu tizimdagi bir nechta protsessorlarga operatsion tizim tomonidan har biriga o'ziga xos tasklar yoki rollar tayinlangan hisoblash arxitekturasining bir turi.

Loyiha ustida ishlayotgan jamoani tasavvur qiling. Ushbu jamoada har bir kishi dizayner, dasturchi, loyiha menejeri va boshqalar kabi o'ziga xos ish roliga ega va ularning har biri o'z vazifalariga e'tibor qaratadi. Xuddi shunday, ASMP tizimida har bir protsessorga muayyan tasklar yoki rollar beriladi. Bu har bir protsessorga o'z ishiga e'tibor qaratish, samaradorlik va ish faoliyatini yaxshilash imkonini beradi.

Misol uchun, bitta protsessor operatsion tizimni ishga tushirishga bag'ishlangan bo'lishi mumkin, ikkinchisi esa foydalanuvchi ilovalarini boshqaradi. Bu barcha protsessorlarga teng munosabatda bo'lgan va har qanday protsessor har qanday vazifani bajarishi mumkin bo'lgan Symmetric MultiProcessing (SMP) dan farqli o'laroq.

ASMP ko'p protsessorli tizimlarning oldingi kunlarida ko'proq qo'llanilgan, ammo bugungi tizimlar load balancingni yaxshilanganligi va barcha mavjud qayta ishlash quvvatlaridan yaxshiroq foydalanish tufayli odatda SMP ni afzal ko'radi. Biroq, ASMP mantiqiy bo'lgan ba'zi maxsus stsenariylar mavjud bo'lishi mumkin, masalan, aniq vazifalar uchun kafolatlangan qayta ishlash resurslari kerak bo'lgan real vaqt tizimlarida.


![alt text](https://linux-kernel-labs.github.io/refs/heads/master/_images/ditaa-cb16db58a2489307b74d4f70256a48c81c65f6c6.png)

### Symmetric MultiProcessing (SMP)

ASMP dan farqli o'laroq, SMP rejimida kerel user processlari kabi mavjud protsessorlarning har qandayida ishlashi mumkin. Ushbu yondashuvni amalga oshirish qiyinroq, chunki u kernelda poyga sharoitlarini yaratadi, agar ikkita process bir xil memory locationga kiradigan kernel funksiyalarini ishga tushirsa.

SMP-ni qo'llab-quvvatlash uchun kernel faqat bitta protsessor muhim bo'limni bajarishini kafolatlash uchun sinxronizatsiya primitivlarini (masalan, spin locks) amalga oshirishi kerak.

Symmetric MultiProcessing (SMP)- bu kompyuter tizimidagi ikki yoki undan ortiq bir xil protsessorlar xotirani va I/O(input/output) bus yoki data pathni almashadigan qayta ishlash konfiguratsiyasining bir turi. Har bir protsessor resurslardan teng foydalanish huquqiga ega va ushbu vazifa uchun ma'lumotlar xotirada qayerda joylashganidan qat'i nazar, istalgan vazifani(task) bajarishi mumkin.

Buni restoran oshxonasidagi oshpazlar jamoasi kabi tasavvur qiling. Barcha oshpazlar barcha ingredientlardan (xotira) va asboblardan (I/O bus) teng foydalanish huquqiga ega va har qanday oshpaz menyudan istalgan taom tayyorlashi mumkin (har qanday task bajarish). Shunday qilib, workloadi teng taqsimlanadi va oshxonada ovqatni tezroq va samaraliroq tayyorlash mumkin.

SMP - bu bir vaqtning o'zida bir nechta foydalanuvchilarga veb-saytga xizmat ko'rsatish yoki grafiklarni ko'rsatish kabi kichikroq vazifalarga osongina bo'linadigan og'ir processing loadlarini yoki vazifalarni bajaradigan tizimlarning ishlashini yaxshilash usullaridan biridir. Bu ko'plab zamonaviy kompyuterlar, serverlardan consumer desktop va noutbuklar uchun, ayniqsa, multi-core(ko'p yadroli(core)) protsessorlarga ega bo'lganlar uchun odatiy sozlash.

![alt text](https://linux-kernel-labs.github.io/refs/heads/master/_images/ditaa-08aff771b3ff7a5525df7b0c090e28c836502788.png)

### CPU Scalability

CPU scalability corelar soni bilan ishlashning qanchalik yaxshi miqyosda ekanligini anglatadi. Kernel dasturchisi CPU scalability bilan bog'liq bir nechta narsalarni yodda tutishi kerak:

* Concurrency and Parallelism
* Load Balancing
* Synchronization
* Resource Management
* Scalable Data Structures
* Interrupt Handling
* Power Efficiency
* Portability

Kernel Dasturchilar bir nechta CPUlardan haqiqatan ham foydalanish uchun kernelni diqqat bilan loyihalashlari va optimallashtirishlari kerak.

CPU scalability kompyuter tizimining ko'proq protsessorlarni (yoki multi-core tizimlar kontekstida corelarni) qo'shish yoki kuchliroq protsessorga yangilash orqali ish faoliyatini oshirish qobiliyatini anglatadi.

Magistral yo'lni tasavvur qiling. Ikki qatorli avtomagistralda tirbandlik juda ko'p bo'lsa, uni to'rt qatorga kengaytirishingiz mumkin. Unda bir vaqtning o'zida ko'proq avtomobillar harakatlanishi mumkin, shuning uchun transport yaxshi harakatlanadi. Xuddi shunday, qo'shimcha protsessorlar yoki corelarni qo'shish kompyuter tizimiga bir vaqtning o'zida ko'proq vazifalarni bajarishga va umumiy ish faoliyatini yaxshilashga imkon beradi.

Biroq, avtomagistralni kengaytirish chorrahalarni qayta ishlashni va belgilarni o'zgartirishni talab qilishi mumkin bo'lganidek, CPU scalability ham har doim ham oson emas. Tizimning dasturiy ta'minoti, jumladan, operatsion tizim va applicationlar, tasklarni samarali taqsimlash orqali bir nechta protsessorlar yoki corelardan foydalanish uchun mo'ljallangan bo'lishi kerak. Bundan tashqari, qancha protsessor yoki core qo'shilishi mumkinligi uchun physical(jismoniy) yoki architectural(erxetekturaviy) cheklovlar bo'lishi mumkin.

Oxir oqibat, CPU scalability ko'proq protsessorlar/corelarni qo'shish yoki kuchliroqlaridan foydalanish orqali qayta ishlash quvvatini oshirish orqali tizim ish faoliyatini yaxshilash bilan bog'liq.



## Linux Kernelining umumiy ko'rinishi

Linux kerneli Linux operatsion tizimining asosiy komponenti bo'lib, kompyuter hardware va uning processlari o'rtasidagi asosiy interfeys hisoblanadi. U kompyuterning hardware va dasturiy ta'minoti o'rtasida aloqa o'rnatadi va tizim resurslarini iloji boricha samarali boshqaradi.

Linux kerneli monolitdir, ya'ni uning barcha funksiyalari to'g'ridan-to'g'ri kernel imagega, jumladan, qurilma drayverlari, fayl tizimi bilan ishlash, tarmoq protokollari va boshqalarga kiritilgan.

Dastlab Linus Torvalds tomonidan yozilgan Linux kerneli open source dasturiy ta'minot bo'lib, uning manba kodi jamoatchilikka bepul bo'lishini anglatadi va uni GNU General Public License (GPL) shartlariga muvofiq har kim o'zgartirishi va tarqatishi mumkin. U Ubuntu, Fedora va Debian, shuningdek, Android mobil operatsion tizimi kabi turli xil Linux distributivlari uchun asos bo'lib xizmat qiladi.

Shunday qilib, siz Internetni ko'rib chiqyapsizmi, hujjat yozyapsizmi yoki Linux tizimida o'yin o'ynayapsizmi, barchasi muammosiz ishlashi uchun sahna ortida ishlaydigan Linux kerneli.

### Linux development model

Linux operatsion tizimi ko'pincha "Linux kernel development model" deb ataladigan ishlab chiqish modeliga amal qiladi. Bu open source loyihadir, ya'ni manba(source) kodi ommaga ochiq(public) va har kim unga hissa qo'shishi(contribute qilishi) mumkin. Biroq, bu jarayonni boshqaradigan ba'zi asosiy tamoyillar va rollar mavjud:

Linus Torvalds: Linuxning asl yaratuvchisi Linus Torvalds hali ham Linux kernelini ishlab chiqish bo'yicha eng yuqori vakolatga ega. Qaysi o'zgartirishlar, tuzatishlar va qo'shimchalar uni asosiy kernel deb nomlanuvchi kernelning rasmiy versiyasiga kiritishini oxir-oqibat u hal qiladi.

Maintainerlar: Tarmoq drayverlari yoki fayl tizimlari kabi kernelning muayyan qismlari uchun mas'ul bo'lgan ko'plab subsystem maintainerlari mavjud. Ular kernelning tegishli qismlari uchun o'zgarishlarni ko'rib chiqadilar va qabul qiladilar, so'ngra bu o'zgarishlarni yakuniy tasdiqlash uchun Linus Torvaldsga topshiradilar.

Contributorlar: Har kim kodni yaxshilash yoki xatolarni tuzatish orqali Linux kerneliga contribute qilishi mumkin. Contributionlar odatda tegishli subsystem maintainerlariga elektron pochta orqali patcheslar sifatida yuboriladi.

Release Cycle: Linux kerneli yangi versiyalar odatda har 9-10 haftada chiqariladigan release cyclelini kuzatib boradi. Har bir reliz davri ikki haftalik bmerge windowni o'z ichiga oladi, unda yangi xususiyatlar qo'shiladi, so'ngra barqarorlashtirish davri keladi, bu yerda faqat xatolarni tuzatish qabul qilinadi.

Linux Distributionlari: Rasmiy Linux kerneli turli xil Linux distributivlari uchun asos bo'lib xizmat qiladi (Ubuntu, Fedora va boshqalar). Ushbu distributionlar asosiy kernel ustiga qo'shimcha funksiyalar, oldindan tuzilgan sozlamalar yoki foydalanuvchi uchun qulay vositalarni qo'shishi mumkin.

GPL Litsenziyasi: Linux kerneli GNU General Public License (GPL) ostida chiqarilgan boʻlib, u har kimga dasturiy taʼminotdan foydalanish, oʻzgartirish va tarqatish imkonini beradi, agar ular har qanday oʻzgartirish yoki yaxshilanishlar kiritsa, open source.

Open Source va hamkorlikdagi rivojlanish modeli Linuxni kichik embedded qurilmalardan tortib yirik superkompyuterlargacha bo'lgan hamma narsada qo'llanilishiga olib keldi. Turli xil contributorlar va foydalanuvchilar uni doimiy ravishda rivojlantirish va takomillashtirishga yordam beradi.

### Maintainer hierarchy

Linux kerneli ishlab chiquvchilarning ierarxik tuzilishi(hierarchical structure) bilan ta'minlanadi, uni quyidagicha soddalashtirish mumkin:

Linus Torvalds: Ierarxiyaning yuqori qismida Linuxning asl yaratuvchisi Linus Torvalds turadi. Rasmiy Linux kerneliga qaysi oʻzgarishlar kiritilishi haqida soʻnggi soʻzni u aytadi.

Leytenant Maintainerlar: Linusning to'g'ridan-to'g'ri ostida leytenant maintainerlar, vaqt o'tishi bilan izchil va yuqori sifatli hissa(contribute qilgan) qo'shgan ishonchli shaxslar. Bu shaxslar kernelning turli qismlarini saqlab turadilar, o'ziga xos subsystem(quyi tizim)lari uchun patchelarni ko'rib chiqadilar va Linusga ma'qullagan patchelarni yo'naltiradilar.

Subsystem Maintainerlari: Ushbu Maintainerlar Linux kernelining networking stackgi(tarmoq stegi), fayl tizimi, qurilma drayverlari va boshqalar kabi ma'lum subsystemlari yoki componentlari(tarkibiy qismlari) uchun javobgardir. Ular o'z hududiga tegishli patchelar va contributionlarni ko'rib chiqadilar va o'zlari ma'qullaganlarini leytenantga yuboradilar. maintainerlarga yoki to'g'ridan-to'g'ri Linus Torvaldsga.

Contributorlar: Bular kernelga patchelarni qo'shadigan butun dunyo bo'ylab dasturchilardir. Ular o'zlarining patchelarini ko'rib chiqish uchun tegishli subsystem maintainerga taqdim etadilar.

Ushbu ierarxiya Linux loyihasining keng ko'lamini boshqarishga yordam beradi, har bir relizda yuz minglab kod satrlari o'zgartiriladi. Shuni ta'kidlash kerakki, bu soddalashtirilgan tushuntirish va haqiqiy tuzilma murakkabroq va harakatchan bo'lishi mumkin, ba'zi shaxslar bir nechta rollarni o'ynaydi.