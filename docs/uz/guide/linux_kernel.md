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


## Linux manba kodining tartibi

![alt text](https://linux-kernel-labs.github.io/refs/heads/master/_images/ditaa-f45246aade5ecc7cfb71f7f103a57f95fc7c2b9e.png)

Linux kernelining manba kodi har bir kernelning turli qismlarini o'z ichiga olgan ma'lum bir directory structureda tashkil etilgan. Bu yerda tartibning yuqori darajadagi umumiy ko'rinishi:


`/arch:` Bu yerda siz arxitekturaga xos kodni topasiz. Linux tomonidan qo'llab-quvvatlanadigan kompyuter arxitekturasining har bir turi (masalan, `x86`, `arm`, `mips`) bu yerda alohida subdirectoryga ega.

`/block:` Ushbu directoryda siz hard drivelar, SSDlar kabi storage devicelariga "blocks"lardagi ma'lumotlarni o'qish va yozishni(read/write) boshqaradigan kernelning bir qismi bo'lgan blokli I/O(input/output) qatlami kodini topasiz, va boshqa block devicelar.

`/certs:` Ushbu directory module signatureni tekshirish uchun sertifikatlarni saqlash uchun ishlatiladi. Xavfsiz yuklash(secure boot) stsenariysida ushbu directorydagi sertifikatlar kernel modullarining digital signaturelarini(raqamli imzolarini) kernela yuklanishidan oldin tekshirish uchun ishlatiladi. Bu faqat ishonchli, o'zgartirilmagan modullarning yuklanishini(load) ta'minlashga yordam beradi va tizim xavfsizligini oshiradi.

`/crypto:` Ushbu directoryda siz Linux kernelining kriptografik API-ni topasiz. Ushbu API turli xil kriptografik algoritmlarni amalga oshirishni o'z ichiga oladi, ular butun kernelda xavfsizlik xususiyatlarini ta'minlash uchun ishlatiladi.

`/Documentation:` Ushbu directoryda siz kernelning turli qismlarini, ular qanday ishlashini va ulardan qanday foydalanishni tavsiflovchi turli xil hujjat fayllarini topasiz. Bu kernel ustida ishlaydigan developerlar yoki kernel qanday ishlashini tushunishni istaganlar uchun qimmatli manbadir.

`/drivers:` Ushbu directory barcha turli hardware device driverlari uchun kodni o'z ichiga oladi. Qurilma drayveri - kernelning ma'lum bir hardware qismi bilan o'zaro ta'sirini ta'minlaydigan dasturiy ta'minot. Masalan, hard devicelar, USB devicelari, network cardlari va boshqalar uchun drayverlar mavjud. Har bir toifadagi drayverlar `/drivers` directorysida o'z subdirectorysiga ega.

`/firmware:` Ushbu directoryda siz ba'zi drayverlar to'g'ri ishlashi uchun kerak bo'lgan firmware fayllarini topasiz. Firmware low-leveldagi dasturiy ta'minot bo'lib, uning funksiyalarini boshqarish uchun qurilmaga o'rnatiladi. Ba'zi hardware devicelari o'zlarining drayverlari tomonidan ma'lum firmware filelarini yuklashni talab qiladi va bu directory ushbu firmware fayllari saqlanadigan joydir.

`/fs:` Ushbu directory fayl tizimi(file system) ilovalarini o'z ichiga oladi. Fayl tizimlari - bu storage devicelarida(saqlash qurilmalari) ma'lumotlarni saqlash va tartibga solish usullari. `/fs` directoryda siz Linux tomonidan qo'llab-quvvatlanadigan `ext4`, `XFS`, `Btrfs` va boshqa ko'plab fayl tizimlarining kodini topasiz.

`/include:` directoryda siz butun kernelda ishlatiladigan header filelarini topasiz. Header filelari odatda funksiyalar va o'zgaruvchilarning definitionlarini, shuningdek, kernelning bir nechta qismlarida ishlatiladigan ma'lumotlar turlari va tuzilmalarini o'z ichiga oladi. Ushbu umumiy elementlarni header filelarida `/include` directoryda saqlash orqali ularni kerak bo'lganda osongina kiritish mumkin, bu kodni qayta ishlatish va tartibga solishga yordam beradi.

`/init:` directory kernelni yuklash uchun javobgar bo'lgan kodni o'z ichiga oladi. Kernelni ishga tushirish jarayoni shu yerda boshlanadi, jumladan xotira boshqaruvini sozlash, dastlabki jarayonni yaratish va boshqalar.

`/ipc:` directoryda siz inter-process communication(jarayonlararo aloqa)(IPC) mexanizmlarini amalga oshirishni topasiz. IPC mexanizmlari turli jarayonlarni bir-biri bilan aloqa qilish va sinxronlashtirish imkonini beruvchi usullardir. Message queuelari, emaphorelar va shared memory.

`/kernel` directory Linux kernelining asosiy qismlarini o'z ichiga oladi. U process management(jarayonlarni boshqarish) (scheduling, creating va destroying process), interrupt handling va system calllarini amalga oshirish kabi muhim kichik tizimlarni o'z ichiga oladi. Aslini olganda, u kernelning "yuragi" ni ushlab turadi.

`/lib` directoryda siz kernel tomonidan ishlatiladigan turli xil library routinelarini topasiz. Bular kernelning bir nechta joylarida ishlatiladigan umumiy funksiyalardir. Bularni libraryga qo‘yish orqali ularni kerakli joyda qayta ishlatish mumkin, bu esa DRY (Don't Repeat Yourself) kod bazasini saqlaydi.

`/mm` directory Linux kernelining memory management subsystemni o'z ichiga oladi. U xotirani qanday ajratish, ajratish va tartibga solish, jumladan, paging va swappingni boshqaradi. Bu tizimning muhim qismi boʻlib, har bir process oʻziga kerakli xotirani olishini va jismoniy xotiradan samarali foydalanishni taʼminlaydi.

`/net` directoryda turli tarmoq protokollarini (TCP/IP, UDP va boshqalar) amalga oshiradigan va tarmoq aloqasini boshqaradigan networking subsystemi joylashgan. Tarmoqlarning keng qo'llanilishi bilan bu har qanday zamonaviy operatsion tizimning muhim qismidir.

`/samples` directory Linux kernelining turli funksiyalari va API-laridan qanday foydalanishni ko'rsatadigan namuna kodini o'z ichiga oladi. Bu kernel uchun kod yozishni o'rganayotgan developerlar uchun foydali bo'lishi mumkin.

`/scripts` directory siz kernelni yaratish va sozlash bilan bog'liq turli maqsadlarda ishlatiladigan skriptlarni topasiz. Bunga konfiguratsiya fayllarini yaratish, kernelni kompilyatsiya qilish va boshqalar uchun skriptlar kiradi.

`/security` directoryda Linux Security Modules (LSM)(Linux Xavfsizlik Modullari) frameworki hamda unga ulanishi mumkin bo'lgan turli xil xavfsizlik modullari, masalan, SELinux, AppArmor va hokazolar bor. Kernelning xavfsizlik bilan bog'liq kodining katta qismi shu yerda joylashgan. Standart (Unix) xavfsizlik modelini kengaytirish, shuningdek, SELinux, smack, apparmor, tomoyo va boshqalar kabi bir nechta kengaytmalarni amalga oshirish imkonini beruvchi Linux Xavfsizlik Moduli fremworki directorysi.

`/sound` directoryda siz sound subsystemni, jumladan, ovoz drayverlari va turli xil audio qurilmalar bilan o'zaro ishlash uchun kodni topasiz. ALSA (Advanced Linux Sound System), Linux sound framework (OSS)

`/tools` directory kernel bilan ishlash uchun turli xil tollarni o'z ichiga oladi. Ushbu tollarning ba'zilari kernelni ishlab chiqishda qo'llaniladi, boshqalari esa kernel bilan ishlaydigan tizimlarni boshqaruvchi administratorlar uchun foydalidir.

`/usr` directory tashqi modullarni yaratish uchun  headerlar va Makefilelar mavjud. To'g'ridan-to'g'ri kernelning bir qismi bo'lmasa-da, bu fayllar kernel bilan o'zaro aloqada bo'lgan modullarni yozayotgan yoki yaratayotgan ishlab chiquvchilar uchun muhim bo'lishi mumkin.

`/virt` directory virtualizatsiya bilan bog'liq kodni o'z ichiga oladi. Xususan, u Linux kerneliga integratsiyalangan virtualizatsiya yechimi bo'lgan Kernel-based Virtual Machine (KVM)(Kernelga asoslangan virtual mashina) amalga oshirishni o'z ichiga oladi.

#### Linux kerneli arxitekturasi

![alt text](https://linux-kernel-labs.github.io/refs/heads/master/_images/ditaa-b9ffae65be16d30be11b5eca188a7a143b1b8227.png)


### arch

Linux kerneli manba kodida `arch` directorysi arxitekturaga xos kodni bildiradi. U Linux kerneli tomonidan qo'llab-quvvatlanadigan turli protsessor arxitekturalari va platformalariga mos keladigan subdirectorilarni o'z ichiga oladi. `arch` ichidagi har bir subdirectory `x86`, `ARM`, `MIPS`, `PowerPC` va boshqalar kabi o'ziga xos arxitekturani ifodalaydi. `arch` directorysining maqsadi low-leveldagi funksionallikning arxitekturaga xos ilovalarini, jumladan, hardwarega xos kodni, qurilma drayverlari va kernelning low-level darajadagi ishga tushirish tartiblari.

Keling, `arch` directorysi tuzilishining texnik tafsilotlarini ko'rib chiqaylik:

#### archga xos(arch-specific) directorylar

`arch/x86:` Bu directory x86 arxitekturasiga xos kodni o'z ichiga oladi, u 32-bitli va 64-bitli tizimlarni qamrab oladi. U 32 bitli tizimlar uchun `x86_32` va 64 bitli tizimlar uchun `x86_64` kabi turli xil x86 platformalari uchun subdirectorilarni o'z ichiga oladi.

`arch/arm:` directoryda embedded systemlar va mobil qurilmalarda keng qo'llaniladigan ARM arxitekturasi uchun kod mavjud. U turli xil ARM platformalari uchun `arm`, `arm64`, `arm32` va boshqalar kabi kichik subdirectorilarni o'z ichiga oladi.

`arch/mips:` directory odatda tarmoq uskunalari va embedded systemlarda mavjud bo'lgan MIPS arxitekturasi uchun kodni o'z ichiga oladi.

`arch/powerpc:` directory turli tizimlarda, jumladan serverlar, o'yin konsollari va embedded devicelarda qo'llaniladigan PowerPC arxitekturasi uchun kodni o'z ichiga oladi.

#### Machine-specific Directorylar

 Har bir arxitektura uchun maxsus directory ichida siz ma'lum machine yoki platforma turlari uchun qo'shimcha subdirectorilarni topasiz. Ushbu subdirectorylarda ma'lum hardware platformalari yoki oilalariga xos kod mavjud. 

Masalan:

`arch/x86/platforms` Bu directory da `pc`, `acer`, `dell`, kabi turli xil x86 platformalariga xos kodlar mavjud.

`arch/arm/mach` directoryda `omap`, `exynos`, `imx` va boshqalar kabi turli xil ARM-ga asoslangan mashina turlariga xos kod mavjud.

#### Asosiy arxitektura fayllari

Machine uchun maxsus directorylardan tashqari, `arch` directorisi turli platformalarda low-leveldagi funksionallikni ta'minlaydigan asosiy arxitektura fayllarini ham o'z ichiga oladi. Bu fayllarga quyidagilar kiradi:

`arch/<arch>/kernel` directory tizimni ishga tushirish(system initialization), interrupt handling, context switching, memory management va timekeeping kabi arxitekturaga xos kernel core kodini o'z ichiga oladi.

`arch/<arch>/include/asm` directory hardware registerlarini, low-leveldagi ma'lumotlar turlarini va kernel tomonidan ishlatiladigan protsessorga xos makrolarni belgilaydigan arxitekturaga xos header fayllarini o'z ichiga oladi.

#### Qurilma drayverlari va tashqi qurilmalar

`arch` directorysi shuningdek, arxitekturaga xos bo'lgan turli xil qurilma drayverlari va tashqi qurilmalar uchun directorylarni o'z ichiga oladi. Ushbu directorylarda storage controllerlari, tarmoq interfeyslari, grafik adapterlar va boshqalar kabi muayyan hardware componentlari uchun drayverlar mavjud.

`arch` directorysining tuzilishi Linux kerneli turli protsessor arxitekturalarida yuqori darajada portativ bo'lishiga imkon beradi va shu bilan birga samarali va arxitekturaga xos ilovalarni ta'minlaydi. Arxitekturaga xos kodni alohida directorylarda tashkil qilish orqali har bir arxitektura uchun kernelni mustaqil ravishda saqlash, ishlab chiqish va debug qilish osonlashadi.

### Device drivers (Qurilma drayverlari)

Linux kernelidagi qurilma drayverlari operatsion tizim va hardware qurilmalari o'rtasidagi aloqani ta'minlovchi dasturiy komponentlardir. Ular application uchun tarmoq kartalari(network card), storage controller(saqlash kontroller)lari va displey adapterlari kabi qurilmalar bilan o'zaro ishlash uchun standartlashtirilgan interfeysni ta'minlaydi. Qurilma drayverlari Linux kerneli manba kodining `drivers` directorysida tashkil etilgan.

Linux kerneli unified device modelidan foydalanadi, uning maqsadi tizimning holati va tuzilishini aks ettiruvchi ichki ma'lumotlar tuzilmalarini saqlashdir. Bunday ma'lumotlarga qaysi qurilmalar borligi, ularning holati, ular qaysi bus ga ulanganligi, qaysi driverga biriktirilganligi va hokazo kiradi. Bu ma'lumotlar tizimni keng miqyosda power managementni amalga oshirish, shuningdek, qurilmani aniqlash va dinamik qurilmani olib tashlash uchun zarurdir.

Har bir subsystem o'ziga xos drayver interfeysiga ega bo'lib, u to'g'ri drayverlarni yozishni osonlashtirish va kodlarning takrorlanishini kamaytirish uchun o'zi taqdim etgan qurilmalarga moslashtirilgan.

Linux qurilma drayverlarining eng xilma-xil to'plamidan birini qo'llab-quvvatlaydi, ba'zi misollar: TTY, serial, SCSI, fileystem, ethernet, USB, framebuffer, input, sound va boshqalar.

### Process management

Process management - bu operatsion tizim ichidagi processlarni(jarayon) muvofiqlashtirish va boshqarish. Bu processlarni yaratish(creating), bajarish(executing) va tugatish(terminating), shuningdek, ularning resurslarini boshqarish va rejalashtirishni(scheduling) o'z ichiga oladi. Process management bir vaqtning o'zida bir nechta vazifalar yoki dasturlarni bajarishga imkon beradi, resurslardan samarali foydalanishni ta'minlaydi va operatsion tizimda barqarorlik va xavfsizlikni ta'minlaydi. U processlarning bajarilishini tashkil etish va nazorat qilish, multitaskinglarni bajarish va tizim resurslaridan samarali foydalanish uchun javobgardir.

Process management loyihani bajarish uchun birgalikda ishlaydigan bir guruh odamlarni boshqarishning oddiy hayotiy misoli bilan tushuntirish mumkin.

Tasavvur qiling-a, bir guruh shaxslar loyiha ustida hamkorlik qilmoqda, masalan, mablag' yig'ish tadbirini tashkil qilish. Har bir jamoa a'zosi loyiha doirasidagi jarayonni ifodalaydi. Loyiha menejeri operatsion tizimning process manageri rolini o'z zimmasiga oladi.

Loyiha menejeri har bir guruh a'zosiga o'z mahorati va tajribasidan kelib chiqqan holda aniq vazifalarni belgilash orqali loyihani boshlaydi. Ushbu vazifani belgilash operatsion tizimda processni yaratishga o'xshaydi.

Loyiha davomida loyiha menejeri har bir topshiriqning(task) bajarilishini nazorat qilib, belgilangan muddatlarga rioya etilishini va loyihaning yo‘lda davom etishini ta’minlaydi. Ular vazifalarni qayta belgilashlari yoki kerak bo'lganda ustuvorliklarni sozlashlari mumkin, xuddi operatsion tizimdagi process scheduling kabi.

Loyiha menejeri, shuningdek, byudjet, vaqt va jihozlar kabi resurslarni boshqaradi va ularni jamoa ishini qo'llab-quvvatlash uchun to'g'ri taqsimlaydi. Ushbu resurslarni taqsimlash operatsion tizim proceslar o'rtasida tizim resurslarini qanday boshqarishi bilan taqqoslanadi.

Har qanday muammo yoki nizolar bo'lsa, loyiha menejeri ularni hal qilish uchun harakat qiladi va loyiha muammosiz davom etishini ta'minlaydi. Bu rol operatsion tizimning process manageri tomonidan bajariladigan xatolarni qayta ishlash va nizolarni hal qilishga o'xshaydi.

Oxir-oqibat, loyiha tugallangach, loyiha menejeri vazifalarni tugatadi va loyihani yakunlaydi. Ushbu tugatish jarayoni, ularning bajarilishi tugagandan so'ng, operatsion tizim processlarni qanday tugatishiga mos keladi.

Ushbu real misolda loyiha menejerining mas'uliyati operatsion tizimda processlarni boshqarishning asosiy jihatlarini, jumladan, processni yaratish, rejalashtirish(scheduling), resurslarni taqsimlash(resource allocation), xatolarni qayta ishlash(handling) va tugatishni( termination) aks ettiradi.

Linux fork(), exec(), wait() kabi standart Unix processlarni boshqarish API-larini, shuningdek, standart POSIX threadlarini implement qiladi.

Biroq, Linux processnlari va threadlari boshqa kernellardan farqli ravishda implement qilinadi. Processlar yoki threadlarni implement qiladigan  internal structurelar mavjud emas, buning o'rniga task deb nomlangan abstract scheduling unit tavsiflovchi struct task_struct mavjud.

Taskda address space, file descriptorlari, IPC idlari va boshqalar kabi manbalar pointerlari mavjud. Xuddi shu processning bir qismi bo'lgan tasklar uchun resurs ko'rsatkichlari bir xil resurslarga ishora qiladi, turli processlarning tasklari resurslari esa turli resurslarga ishora qiladi.

Bu o'ziga xoslik, clone() va unshare() system calllari bilan birgalikda namespacelari kabi yangi xususiyatlarni(feature) implement qilish imkonini beradi.

Linuxda operatsion tizim virtualizatsiyasini implement qilish uchun namespacelari boshqaruv guruhlari(control group)(cgroup) bilan birgalikda ishlatiladi.

cgroup - bu processlarni ierarxik tarzda tashkil qilish va tizim resurslarini ierarxiya bo'ylab boshqariladigan va sozlanishi mumkin bo'lgan tarzda taqsimlash mexanizmi.

### Memory management

Memory management deganda operatsion tizimda kompyuter xotirasi resurslarini tashkil qilish va boshqarish jarayoni tushuniladi. Bu xotirani dasturlarga ajratish, xotiraning qaysi qismlari ishlatilayotganligini kuzatish va kerak bo‘lmaganda xotirani ajratishni(allocating memory) o‘z ichiga oladi. Memory management dasturlarning muammosiz bajarilishini ta'minlash va ishdan chiqish yoki tizim sekinlashishi kabi xotira bilan bog'liq muammolarni oldini olish uchun mavjud xotiradan samarali va xavfsiz foydalanishni ta'minlaydi.

Tasavvur qiling, sizda kitoblarni saqlash uchun cheklangan joy bo'lgan kitob javoningiz bor. Har bir kitob kompyuter tizimidagi dastur yoki  processni, kitob javoni esa xotirani(memory) ifodalaydi. Memory management tizimi kutubxonachi vazifasini bajaradi, kitob javonini boshqarish uchun javobgardir.

#### Memory Allocation (Xotirani taqsimlash)

Agar javonga yangi kitob qo'shmoqchi bo'lsangiz, kutubxonachi bo'sh joy topadi va uni kitob uchun ajratadi. Xuddi shunday, memory managementda, dastur ishlashi uchun xotira kerak bo'lganda, operatsion tizim uning instructionlari va datalarini saqlash uchun ushbu dasturga xotira blokini ajratadi.

#### Memory Deallocation (Xotirani ajratish)
Agar siz kitob javonidan kitobni olib tashlasangiz, kutubxonachi bu joyni boshqa kitoblar foydalanishi mumkin deb belgilaydi. Memory managementda, dastur tugallanganda yoki tugatilganda, operatsion tizim ushbu dasturga ajratilgan xotirani bo'shatadi va uni boshqa dasturlarning foydalanishi uchun imkon yaratadi.

#### Memory Tracking (Xotirani kuzatish)
Kutubxonachi kitob javonida qaysi joy ajratilgani va qaysi biri bo'sh ekanligini qayd qiladi. Xuddi shunday, operatsion tizimdagi memory management tizimi xotiraning qaysi qismlari ishlatilayotganligi va qaysi biri mavjud ekanligini kuzatib boradi.

#### Memory Fragmentation

Vaqt o'tishi bilan kitob javonida kitoblar orasidagi bo'shliqlar bo'lishi mumkin, bu esa katta kitob uchun katta doimiy joy topishni qiyinlashtiradi. Bu fragmentation deb ataladi. Memory managementda fragmentation xotira ajratilganda va ajratilganda sodir bo'ladi, natijada xotirada kichik foydalanilmagan bo'shliqlar paydo bo'ladi. Bu internal fragmentation (ajratilgan xotira bloklari ichida foydalanilmagan bo'sh joy) yoki external fragmentation (ajratilgan xotira bloklari orasidagi foydalanilmagan bo'sh joy) bo'lishi mumkin. Memory management usullari fragmentationni minimallashtirish va xotiradan maksimal darajada foydalanishga qaratilgan.

Memory management kompyuter xotirasidan samarali foydalanishni ta'minlaydi, xotiraga ruxsatsiz kirishni oldini oladi va turli dasturlar va processlar o'rtasida xotira resurslarini taqsimlashni optimallashtiradi.

Linux memory management murakkab subsystem bo'lib, u quyidagilar bilan shug'ullanadi:

* Physical(jismoniy) xotirani boshqarish: memory allocating va freeing(bo'shatish)
* Virtual xotirani boshqarish: paging, swapping, demand paging, yozishda nusxalash
* Foydalanuvchi xizmatlari(User services): user address spaceni boshqarish (masalan, mmap(), brk(), shared memory)
* Kernel servicelari: SL*B allocatorlari, vmalloc

### Block I/O management

Block I/O management operatsion tizimdagi blok qurilmalari(block device) ishtirokidagi input/output(O/I kiritish/chiqarish) operatsiyalarini management va controlni anglatadi. Hard drivelar yoki solid-state drivelar(SSD) kabi block devicelari ma'lumotlarni fixed-size blocklar yoki sektorlarda uzatishni amalga oshiradi(data transfer).

Oddiy qilib aytganda, blokni I/O managementni boshqarish ombordagi jismoniy tovarlar harakatini boshqarishga o'xshaydi.

#### Data Transfer (Ma'lumot uzatish)

Tovarlar omborning turli joylari o'rtasida uzatilganidek,  block I/O managementi ham data blocklarini storage devicelari (block devicelari) va kompyuter xotirasi o'rtasida uzatishni o'z ichiga oladi.

#### Request Handling (So'rovni ko'rib chiqish)

Block I/O managementi dasturiy ta'minot yoki applicationlardan o'qish(read) yoki blok qurilmadagi ma'lum bloklarga yozish(write) uchun so'rovlarni qayta ishlaydi. Ushbu so'rovlar ombordagi ma'lum narsalar uchun berilgan buyurtmalarga o'xshaydi.

#### Scheduling and Ordering

Block I/O management boshqaruvi ishlashni optimallashtirish va kechikishni(latency) minimallashtirish uchun so'rovlarni tartibga soladi. Qidiruv vaqtini qisqartirish, ma'lumotlar joylashuvini maksimal darajada oshirish yoki umumiy o'tkazish qobiliyatini yaxshilash uchun so'rovlar tartibini o'zgartirishi mumkin.

#### Buffering and Caching

Ishlashni yaxshilash block I/O managementi buferlash(buffering) va keshlash(caching) usullaridan foydalanadi. Tez-tez foydalaniladigan ma'lumotlar bloklari kirish vaqtini kamaytirish uchun vaqtinchalik xotira buferlarida yoki keshlarida saqlanadi.

#### Error Handling 
Block I/O management diskdagi xatolar yoki ma'lumotlarning buzilishi kabi ma'lumotlarni uzatish paytida xatolarni aniqlaydi va hal qiladi. U muvaffaqiyatsiz operatsiyalarni qayta urinib ko'rishi, ortiqcha nusxalardan ma'lumotlarni tiklashi yoki xatolar haqida higher-leveldagi dasturiy ta'minotga xabar berishi mumkin.

#### Synchronization (Sinxronizatsiya)

Block I/O management bir vaqtda o'qish(read) va yozish(write) operatsiyalarini muvofiqlashtirish orqali ma'lumotlarning izchilligini ta'minlaydi. U bir vaqtning o'zida bir nechta jarayonlar bir blokga kirishda ma'lumotlarning buzilishi yoki conflictlarni oldini olish uchun sinxronizatsiya mexanizmlarini qo'llaydi.

Block I/O managementi ma'lumotlarni samarali saqlash va qidirishda muhim rol o'ynaydi, bu ilovalar va operatsion tizimning block devicelar bilan samarali o'zaro ta'siriga imkon beradi. U ma'lumotlar uzatishni(data transfer) optimallashtiradi, xatolik holatlarini hal qiladi va block devicelar bilan ishlashda ma'lumotlar yaxlitligini ta'minlaydi.


Linux Block I/O subsystemi qurilmalardan ma'lumotlarni o'qish va yozish bilan shug'ullanadi: blockli I/O requestlarini yaratish, blockli I/O requestlarini o'zgartirish (masalan, dasturiy ta'minot RAID yoki LVM uchun), so'rovlarni birlashtirish(merge request) va tartiblash(sorting) va ularni scheduling qilish qurilma drayverlarini blokirovka qilish uchun turli xil I/O schedulerlari.

![alt text](https://linux-kernel-labs.github.io/refs/heads/master/_images/ditaa-0a96997f269a7a9cd0cdc9c9125f6e62e549be94.png)

### Virtual Filesystem Switch

Virtual Filesystem Switch (VFS) Linux kernelidagi software layer bo'lib, u turli fayl tizimlari bilan o'zaro ishlash uchun yagona interfeysni ta'minlaydi. U abstraction layer vazifasini bajarib, applicationlar va kernelga turli fayl tizimlari bilan izchil ishlash imkonini beradi.

Oddiy qilib aytganda, VFS ni turli tillar orasidagi tarjimon yoki vositachi bilan solishtirish mumkin:

#### Common Interface (Umumiy interfeys)

VFS fayl tizimlari qo'llab-quvvatlashi kerak bo'lgan standart operatsiyalar va ma'lumotlar tuzilmalari to'plamini belgilaydi. Ushbu umumiy interfeys applicationlar va kernelga fayllarni o'qish(read), yozish(write), ochish(open), yopish(close) va qidirish kabi operatsiyalarni har bir asosiy fayl tizimining o'ziga xos xususiyatlarini bilmasdan bajarishga imkon beradi.

#### Transparent Translation (Shaffof tarjima)
Malakali tarjimon og'zaki so'zlarni bir tildan boshqa tilga o'zgartirgani kabi, VFS hamapplicationlar tomonidan so'raladigan umumiy fayl tizimi operatsiyalarini asosiy fayl tizimlari uchun specific calllarga tarjima qiladi. Amaldagi fayl tizimidan qat'i nazar, tegishli fayl tizimiga xos funksiyalarni ishga tushirishni ta'minlaydi.

#### File System Integration (Fayl tizimi integratsiyasi)
VFS ext4, NTFS yoki NFS kabi turli fayl tizimlarini Linux yadrosiga muammosiz integratsiya qilish imkonini beradi. Har bir fayl tizimi VFS operatsiyalari uchun o'zining amalga oshirilishini ta'minlaydi, bu yadroga bir xil yuqori darajadagi buyruqlar to'plamidan foydalangan holda turli fayl tizimlari bilan ishlash imkonini beradi.

#### Filesystem-Specific Mounting

Fayl tizimiga kirish kerak bo'lganda, VFS uni tizimga o'rnatish(mounting) jarayonini boshqaradi. O'rnatish(mountlash) yangi tashqi xotira qurilmasini kompyuterga ulash va undan foydalanish imkoniyatini yaratishga o'xshaydi. VFS fayl tizimi turini tanib olish, kerakli resurslarni taqsimlash va uni fayl tizimi ierarxiyasiga integratsiyalash bilan shug'ullanadi.

#### Virtual Filesystem Tree (Virtual fayl tizimi daraxti)
VFS asosiy fayl tizimlaridan qat'i nazar, fayl tizimi ierarxiyasining yagona ko'rinishini taqdim etadi. U barcha o'rnatilgan fayl tizimlarini yagona directory tuzilishiga birlashtirgan virtual filesystem treeni yaratadi. Bu applicationlarga, ular yashaydigan haqiqiy fayl tizimidan qat'i nazar, izchil yo'llar yordamida fayllarni kezish va ularga kirish imkonini beradi.

Virtual Filesystem Switch Linux kernelida bir xil interfeys va turli fayl tizimlarining uzluksiz integratsiyasini ta'minlashda hal qiluvchi rol o'ynaydi. Bu qo'llaniladigan fayl tizimining ma'lum bir dasturidan qat'i nazar, applicationlarning standartlashtirilgan buyruqlar to'plamidan foydalangan holda fayllar va directorilar bilan o'zaro ishlashini ta'minlaydi.


Linux Virtual Filesystem Switch fayl tizimi drayverlarini takrorlashni kamaytirish uchun umumiy / generic fayl tizimi kodini implement qiladi. U ma'lum fayl tizimi abstraktsiyalarini taqdim etadi, masalan:

+ `inode` - diskdagi faylni tavsiflaydi (atributlar, diskdagi ma'lumotlar bloklarining joylashuvi)
* `dentry` - inodeni nomga bog'laydi
* `file` - ochilgan faylning xususiyatlarini tavsiflaydi (masalan, fayl ko'rsatkichi)
* `superblock` - formatlangan fayl tizimining xususiyatlarini tavsiflaydi (masalan, bloklar soni, blok hajmi, diskdagi root directorining joylashuvi, shifrlash va boshqalar).

![alt text](https://linux-kernel-labs.github.io/refs/heads/master/_images/ditaa-afa57a07e21b1b842554278abe30fea575278452.png)

Linux VFS shuningdek, quyidagilarni o'z ichiga olgan murakkab keshlash mexanizmini amalga oshiradi:

* `inode cache` - fayl atributlari va ichki fayl metama'lumotlarini keshlaydi
* `dentry cache ` - fayl tizimining directory ierarxiyasini keshlaydi
* `page cache` - xotiradagi fayl ma'lumotlar bloklarini keshlaydi

### Networking stack

Networking stack - bu tarmoq orqali qurilmalar o'rtasida aloqa o'rnatishga imkon beruvchi dasturiy ta'minot protokollari va komponentlar to'plami. U ma'lumotlarni jo'natish va qabul qilish jarayonini tashkil qiladi, axborotni samarali uzatish va qabul qilishni ta'minlaydi.

Asosan, networking stacki bir necha layerlardan(qatlam) iborat bo'lib, ularning har biri tarmoq aloqasining o'ziga xos jihati uchun javobgardir. Ushbu layerlar ulanishlarni o'rnatish, ma'lumotlar uzatishni boshqarish va ishonchli yetkazib berishni ta'minlash uchun birgalikda ishlaydi. Oddiy tarmoq stek layerlarining soddalashtirilgan ko‘rinishi:

#### Physical Layer
Bu layer ma'lumotlarni jismoniy uzatish bilan shug'ullanadi, shu jumladan kabellar, tarmoq adapterlari va tarmoq orqali ma'lumotlarni uzatish uchun ishlatiladigan signalizatsiya usullari.

#### Data Link Layer

Data Link Layeri ma'lumotlarni framelar yoki paketlarga tartibga solish va tizimlashtirish, zarur boshqaruv ma'lumotlarini qo'shish va jismoniy tarmoq muhitiga kirishni boshqarish uchun javobgardir.

#### Network Layer

Network Layeri turli tarmoqlar bo'ylab ma'lumotlar paketlarini addressing va routing bilan shug'ullanadi. U ma'lumotlarni uzatish uchun optimal yo'lni aniqlaydi va paketlarning mo'ljallangan manziliga yetib borishini ta'minlaydi.

#### Transport Layer

Bu qatlam end-to-end commincate xizmatlarini, ulanishlarni o'rnatish, ma'lumotlarni kichikroq birliklarga (segmentlarga) ajratish va TCP (Transmission Control Protocol) yoki UDP (User Datagram Protocol) kabi protokollar orqali ishonchli yetkazib berishni ta'minlaydi.

#### Application Layer

Application Layeri muayyan tarmoq applicationlarining bir-biri bilan aloqa qilishiga imkon beruvchi protokollar va servicelarni o'z ichiga oladi. Masalan, veb-sahifalar uchun HTTP, elektron pochta uchun SMTP va fayllarni uzatish uchun FTP.

Amaliy ma'noda, networking stacki qurilmalarga tarmoqlar orqali ulanish va bir-biri bilan muloqot qilish imkonini beradi. U qurilmalar oʻrtasida maʼlumotlar uzatishni boshqarish, maʼlumotlar yaxlitligi va ishonchli yetkazib berishni taʼminlash orqali internetni koʻrish, fayllarni almashish, video oqim va onlayn oʻyinlar kabi faoliyatni osonlashtiradi.

![alt text](https://linux-kernel-labs.github.io/refs/heads/master/_images/ditaa-a2ded49c8b739635d6742479583443fb10ad120a.png)

## Linux Security Modules

Linux xavfsizlik modullari (LSM) turli xil xavfsizlik siyosatlarini(security policies) amalga oshirish uchun standartlashtirilgan interfeysni ta'minlovchi Linux kernelidagi framework hisoblanadi. U kirishni boshqarish(access control), mandatory access control (MAC) va boshqa xavfsizlik mexanizmlarini qo'llashi mumkin bo'lgan xavfsizlik modullarini qo'shish imkonini beradi.

Oddiy qilib aytganda, LSM kernelga standart sozlamalardan tashqari turli xil xavfsizlik modellarini qo'llab-quvvatlash imkonini beradi. Bu system administratorga qo'shimcha xavfsizlik modullarini ulash orqali o'zlarining Linux tizimlari xavfsizligini oshirishga imkon beradi.

Ushbu xavfsizlik modullari fayl tizimi ruxsatlari(file system permission), tarmoqqa kirishni boshqarish(network access control), process cheklovlari(process restrictions) va boshqalar kabi poliselarni amalga oshirishi mumkin.

LSM bir vaqtning o'zida bir nechta xavfsizlik modullaridan foydalanishga imkon beruvchi moslashuvchanlik va kengayishni ta'minlaydi. Ushbu modulli yondashuv Linux kerneliga uning asosiy kod bazasini o'zgartirmasdan uchinchi tomon xavfsizlik yechimlarini integratsiyalashni osonlashtiradi.

Bir nechta Linux security extensionlari kengaytirilgan security policelarini qo'llash uchun LSM dan foydalanadi. 

Mana bir nechta diqqatga sazovor misollar:

#### Security Enhanced Linux (SELinux)

SELinux keng qoʻllaniladigan security extensioni boʻlib, mandatory access control (MAC) policelarini amalga oshiradi. U processlarga, fayllarga va tarmoq resurslariga tayinlangan security labellariga asoslangan fine-grained access controlini amalga oshiradi.

#### AppArmor

AppArmor - bu  application-leveldagi xavfsizlikka qaratilgan yana bir mashhur security extension. U LSM dan individual applicationlar uchun xavfsizlik profillarini aniqlash va joriy qilish, ularning resurslarga kirishini cheklash va xavfsizlikning mumkin bo'lgan zaifliklarining ta'sirini kamaytirish uchun foydalanadi.

#### Tomoyo

Tomoyo Linux - bu fine-grained system-wide protectionni ta'minlaydigan  lightweight access control tizimi. U LSM dan domain-specific policy konfiguratsiyasiga asoslangan poliselarni amalga oshirish, oldindan belgilangan qoidalarga asoslangan muayyan harakatlarga ruxsat berish yoki rad etish uchun foydalanadi.

#### Smack

Smack (Simplified Mandatory Access Control Kernel) bu soddalashtirilgan MAC yondashuvidan foydalanadigan Linux xavfsizlik modulidir. U processlar va obyektlarga security labellarini belgilash uchun LSM dan foydalanadi, bu esa ushbu teglar asosida kirishni boshqarish qarorlarini qabul qilish imkonini beradi.

LSM dan foydalangan holda, ushbu xavfsizlik kengaytmalari Linux yadrosi bilan muammosiz integratsiyalashishi va maxsus xavfsizlik siyosatini amalga oshirishi mumkin. Ushbu modulli yondashuv tizim ma'murlariga o'z talablariga eng mos keladigan xavfsizlik kengaytmasini tanlash va yadroning asosiy kod bazasini o'zgartirmasdan qo'llash imkonini beradi.

LSM Linux kernelining xavfsizlik imkoniyatlarini oshiradigan, turli xil kirishni boshqarish va xavfsizlik siyosatlarini amalga oshirish uchun qo'shimcha xavfsizlik modullarini amalga oshirish imkonini beruvchi framework hisoblanadi.

Bu shunchaki kirish mavzu edi holos )

Biz bu maqolada asosiy ishlatiladigan atamalarni yuzaki ko'rib chiqdik aslida bularni har biri katta katta mavzu hisoblanadi :)
Keyingi qimslarda bularni hammasiga alohida alohida to'xtalamiz.

Xato va kamchiliklar bo'lsa uzur so'rayman :)

[Telegram Blog](https://t.me/Otabek_Ismoilov)

Foydanilgan Manbalar

[linux-kernel-labs](https://linux-kernel-labs.github.io/refs/heads/master/lectures/intro.html)

va boshqa ko'plab manbalar
