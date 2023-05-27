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

### Oddiy operatsion tizim arxitekturasi

Oddiy operatsion tizim arxitekturasida (quyidagi rasmga tasvirlangan) operatsion tizim kerneli bir nechta ilovalar bilan xavfsiz va to'gri tarzda hardwarega kirish va almashish uchun javobgardir.

![alt text](https://linux-kernel-labs.github.io/refs/heads/master/_images/ditaa-48374873962ca32ada36c14ab9a83b60f112a1e0.png)

Kernel odatda "System Calls(Tizim qo'ng'iroqlari)" deb ataladigan ilovalar chiqaradigan API to'plamini taklif qiladi. Ushbu API'lar oddiy kutubxona API'laridan farq qiladi, chunki ular execution mode, user modedan kernel modega o'tish chegarasi hisoblanadi. Application(ilova) mosligini ta'minlash uchun system calllari kamdan-kam hollarda o'zgartiriladi. Linux, ayniqsa, buni amalga oshiradi (kerak bo'lganda o'zgarishi mumkin bo'lgan kernel API-laridan farqli o'laroq). Kernel kodining o'zi kernel kodida va qurilma drayverlari kodida logical(mantiqiy) ravishda ajratilishi mumkin. Asosiy kernel kodi umumiy bo'lsa, qurilma drayverlari kodi muayyan qurilmalarga kirish uchun javobgardir. Kernel yadrosi(core) yana bir nechta logical subsystem tizimlarga bo'linishi mumkin (masalan, fayllarga kirish, tarmoqqa ulanish, jarayonni boshqarish va boshqalar).

### Monolithic kernel

Monolit krernel - bu kernelning turli quyi tizimlari(subsystem) o'rtasida kirish himoyasi mavjud bo'lmagan va umumiy funksiyalarni turli subsystemlar o'rtasida bevosita chaqirish mumkin bo'lgan kerneldir.

![alt text](https://linux-kernel-labs.github.io/refs/heads/master/_images/ditaa-3dc899167df5e16a230c434cf5d6964cb5868482.png)

Biroq, ko'pgina monolit kernellar subsytemlar o'rtasida, ayniqsa kernel coresi va qurilma drayverlari o'rtasida logical separation(mantiqiy ajratish)ni ta'minlaydi, ular bitta subsystem yoki qurilma drayverlari tomonidan taklif qilinadigan servicelarga kirish uchun ishlatilishi kerak bo'lgan nisbatan qat'iy API-larga ega (lekin o'rnatilgan bo'lishi shart emas).

### Micro kernel

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

### User va kernel virtual address space taqsimlanishi

User va kernel spacelari uchun odatiy dastur virtual address spacesi user processes(foydalanuvchi jarayonlari) va kernel o'rtasida taqsimlanadi. Bu holda kernel space address spacening yuqori qismida, user space esa pastki qismida joylashgan. User processlarining kernel spacega kirishiga yo'l qo'ymaslik uchun kernel user modedan kernel spacega kirishni taqiqlovchi xaritalarni yaratadi.

![alt text](https://linux-kernel-labs.github.io/refs/heads/master/_images/ditaa-a5f93e0d17ccdc2ba24828b620d7227f7fc75e33.png)

### Execution contexts

Kernelning eng muhim vazifalaridan biri interruptlarga xizmat ko'rsatish va ularga samarali xizmat ko'rsatishdir. Bu juda muhimki, u bilan maxsus execution context bog'langan. Kernel interrupt natijasida ishlaganda interrupt contextda ishlaydi. Bunga interrupt handler kiradi, lekin u bilan cheklanmaydi, interrupt modeda ishlaydigan boshqa maxsus(software)  konstruksiyalar mavjud. Interrupt kontekstida ishlaydigan kod har doim kernel modeda ishlaydi va kerel dasturchisi bilishi kerak bo'lgan ma'lum cheklovlar mavjud (masalan, blokirovkalash funktsiyalarini chaqirmaslik yoki user spacega kirish). Interrupt kontekstiga qarshi process(jarayon )konteksti mavjud. Process kontekstida ishlaydigan kod buni user modeda(executing application code)  yoki kernel modeda (executing a system call) amalga oshirishi mumkin.

### Multi-tasking

Multitasking - bu operatsion tizimning bir nechta dasturlarni "bir vaqtning o'zida(simultaneously)" bajarish qobiliyati. Buni ishlaydigan processeslar o'rtasida tezda almashish orqali amalga oshiradi. Kooperativ multitasking dasturlardan ko'p vazifani bajarish uchun hamkorlik qilishni talab qiladi. Dastur ishga tushadi va CPU boshqaruvini OSga qaytaradi, keyin esa boshqa dasturni rejalashtiradi. Preemptive multitasking bilan kernel har bir  process uchun qat'iy cheklovlarni amalga oshiradi, shuning uchun barcha  processlarni ishga tushirish uchun  imkoniyat bo'ladi. Har bir processga vaqt boʻlagini (masalan, 100ms) ishga tushirishga ruxsat beriladi, shundan soʻng, agar u hali ham ishlayotgan boʻlsa, u majburiy ravishda oʻchiriladi va boshqa vazifa rejalashtiriladi.

### Preemptive kernel