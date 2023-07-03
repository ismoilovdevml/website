# System Calls

![Syscalls](https://images.pling.com/img/00/00/17/22/28/1046969/133216-1.jpg)

:::tip
Blog post maqsadlari

* Linux system callarini amalga oshirish(Implemention)
* VDSO va virtual syscallar
* System calllardan user spacega kirish
:::


## Linux system callarini amalga oshirish(Implemention)

Yuqori darajadagi(high level) system call(tizim qo'ng'iroqlari) kernel tomonidan user applicationriga taqdim etiladigan "servicelar" bo'lib, ular library API-lariga o'xshaydi, chunki ular nom, parametrlar va return value(qaytish qiymati) bilan function call(funksiya chaqiruvi) sifatida tavsiflanadi.

Linuxda system call(tizim qo'ng'iroqlari)  user applicationlariga kernelodan servicelarni so'rash imkonini beruvchi asosiy mexanizmdir. Ular high leveldagi funksiya chaqiruvlariga o'xshaydi, lekin lower level darajada boshqacha tarzda amalga oshiriladi.

#### System Callarni identifikatsiyalash(System Call Identification)

System Callar raqamlar orqali aniqlanadi. Har bir system call o'ziga xos raqamga ega. Application system call raqami va parametrlarini arxitekturaning maxsus chaqiruv konventsiyasiga muvofiq o'rnatadi.

#### Kernel Modeni o'zgartirishni ishga tushirish(Triggering Kernel Mode Switch)

System callni boshlash uchun application kernel mode switchni ishga tushiradi. Bu, odatda, dasturiy software interruptlar (masalan, x86 uchun int 0x80) yoki syscall instructionlar (masalan, x86_64) kabi specific assembly instructionlari orqali amalga oshiriladi. Ushbu instructionlar CPUning user modedan kernel modega o'tishiga olib keladi.

#### Registrlarni saqlash va tizim chaqiruvi dispetcherini bajarish(Saving Registers and Executing the System Call Dispatcher)

kernel modega kirgandan so'ng, execution flow  kernel entry pointga o'tkaziladi. Ushbu entry point(kirish nuqtasi) user spacedagi qiymatlarni o'z ichiga olgan registrlarni, shu jumladan system call raqami va parametrlarini kernel stackga saqlaydi. Keyin system call dispatcheri o'z zimmasiga oladi.

#### System Call Dispatcher

System Call Dispatcheri system cal raqamini tekshiradi va ushbu system call bilan bog'liq kernel funksiyasini ishga tushiradi. Dispetcherda system call parametrlarini argumentlar sifatida uzatuvchi tegishli kernel funksiyasi chaqiriladi.

#### Kernel funksiyasining bajarilishi(Execution of Kernel Function)

Kernel Function kernel spaceda so'ralgan operatsiyani bajaradi. U tizim resurslariga kirishi, ma'lumotlar tuzilmalarini boshqarishi yoki boshqa imtiyozli vazifalarni bajarishi mumkin.

#### User Spacega qaytish(Return to User Space)

Kernel Function o'z ishini tugatgandan so'ng, execution flow system call dispatcheriga qaytadi. Dispetcher system callining qaytish(return) qiymatini o'z ichiga olgan tegishli qiymatlar bilan user-space registrlarini tiklaydi. Nihoyat, CPU user modega qaytadi, bu dasturga system call pointida o'z ishini davom ettirishga imkon beradi.

System Callarni amalga oshirish(implementatatsiya) bir necha bosqichlarni o'z ichiga oladi, jumladan, system callar raqamlarini aniqlash, kernel mode switchni ishga tushirish, registrlarni saqlash va tiklash va so'ralgan xizmatni boshqarish uchun tegishli kernel functionni yuborish. System Call mexanizmi xavfsizlik va barqarorlik uchun user va kernel spacelari o'rtasidagi aniq chegarani saqlab qolgan holda, applicationlarga kernel bilan o'zaro aloqada bo'lish va uning funksionalligidan foydalanish imkonini beradi.

![Syscalls](https://linux-kernel-labs.github.io/refs/heads/master/_images/ditaa-e76e44cad2e92f2134ab77f6a09605b29524d039.png)

Biroq, diqqat bilan qaraydigan bo'lsak, system call aslida funksiya chaqiruvlari emas, balki quyidagi amallarni bajaradigan maxsus assembly instructionlari (arxitektura va kernel specific) ekanligini ko'rishimiz mumkin:

* System call va uning parametrlarini aniqlash uchun sozlash ma'lumotlari
* Kernel modeni o'zgartirishni ishga tushirish
* System callning natijasini olish

Linuxda system callari raqamlar bilan aniqlanadi va system callari parametrlari machine word size (32 yoki 64 bit). Maksimal 6 ta system call parametrlari bo'lishi mumkin. System call raqami ham, parametrlari ham ma'lum registrlarda saqlanadi.

Masalan, 32 bitli x86 arxitekturasida system call identifikatori EAX registrida, parametrlar esa EBX, ECX, EDX, ESI, EDI, EBP registrlarida saqlanadi. System librarielari (masalan, libc) applicationdan foydalanishni osonlashtirish uchun actual system calllarini amalga oshiradigan funksiyalarni taklif qiladi. Userchining kernel modega o'tishi sodir bo'lganda, execution flow to'xtatiladi va u kernel entry pointga o'tkaziladi. Bu interruptlar va exceptionlar qanday ko'rib chiqilishiga o'xshaydi (aslida ba'zi arxitekturalarda bu transition exception natijasida sodir bo'ladi).

System call entry pointi registrlarni (user spacedagi qiymatlarni, shu jumladan system call raqami va system call parametrlarini o'z ichiga oladi) stekda saqlaydi va keyin system call dispetcherini bajarishni davom ettiradi.

:::tip
Eslatma!
User - kernel modega o'tish vaqtida stek ham user stekidan kernel stekiga o'tkaziladi. Buni keyingi   interruptlar mavzusida batafsilroq ko'rib chiqamiz.
:::

![Syscalls](https://linux-kernel-labs.github.io/refs/heads/master/_images/ditaa-eeb919cd078d0ba5021028fa628bb47d7d6866e2.png)

System Call dispetcherining maqsadi system call raqamini tekshirish va system call bilan bog'liq kernel funksiyasini ishga tushirishdir.

```c
__visible void do_int80_syscall_32(struct pt_regs *regs)
{
    enter_from_user_mode();
    local_irq_enable();
    do_syscall_32_irqs_on(regs);
}

/* Linux x86 32bitli System Call Dispatcherining soddalashtirilgan versiyasi */
static __always_inline void do_syscall_32_irqs_on(struct pt_regs *regs)
{
    unsigned int nr = regs->orig_ax;

    if (nr < IA32_NR_syscalls)
        regs->ax = ia32_sys_call_table[nr](regs->bx, regs->cx,
                                           regs->dx, regs->si,
                                           regs->di, regs->bp);
    syscall_return_slowpath(regs);
}
```

Biz quyidagilar haqida bilishimiz kerak: System Calls, Interrupts, System Call Dispatchers, kernel va bularning barchasida CPU roli.

System Calls

System Calls process va operatsion tizim o'rtasidagi interfeysni ta'minlaydi. Ular foydalanuvchi dasturlari uchun yadrodan servicelarni so'rashning bir usuli. Bu servicelarga processlarni yaratish, fayllarni o'qish va yozish, boshqa processlar bilan aloqa qilish va boshqalar kiradi.

Interrupts

Interrupt - bu protsessorga zudlik bilan e'tibor berish kerak bo'lgan eventni ko'rsatadigan signal. Interrupt sodir bo'lganda, protsessor joriy faoliyatini to'xtatadi va Interrupt Service Routine (ISR) kodini bajarishni boshlaydi.

System Call Dispatcher

System Call Dispatcheri system callarni boshqarish uchun mas'ul bo'lgan operatsion tizim kernelining tarkibiy qismidir. System Call chaqirilganda, boshqaruv user spacedan kernel spacega o'tkaziladi va system call dispetcheri chaqiriladi. Uning roli system call raqamini tekshirish va system call bilan bog'liq kernel funksiyasini ishga tushirishdir.

Kernel

Kernel(yadro) operatsion tizimning core(asosiy) qismidir. U process management, memory management, device management va file system management kabi tizimning ishlashi uchun muhim bo'lgan barcha task(vazifalar)ni boshqaradi.
CPU haqida to'liq maqola mavjud:
* [Kernel bilan tanishuv](https://ismoilovdev.uz/uz/guide/kernel.html)

CPU

Central Processing Unit (CPU) kompyuterning asosiy komponenti bo'lib, u kompyuter ichidagi ishlov berishning katta qismini bajaradi. U turli vazifalar o'rtasida almashinadi va ularning bajarilishini ta'minlaydi.
CPU haqida to'liq maqola mavjud:

* [1-qism: CPU nima va u qanday ishlaydi?](https://ismoilovdev.uz/uz/guide/cpu.html)
* [2-qism: CPU qanday ishlaydi va qanday tuzilgan (chuqurlashtirilgan)](https://ismoilovdev.uz/uz/guide/cpu_2.html)
* [CPU cache nima va u qanday ishlaydi?](https://ismoilovdev.uz/uz/guide/cpu_cache.html)

Endi, taqdim etilgan kodni tushunish uchun, u x86 32-bitli Linux tizimi uchun system call dispetcherining o'ziga xos namunasini namoyish etishini tushunish muhimdir. Kodning asosiy qismlari quyidagilardir:

:::tip
     `do_int80_syscall_32(struct pt_regs *regs)` Bu funksiya 32-bitli Linuxda system callni chiqarishning anʼanaviy usuli boʻlgan `0x80` interruptni boshqaradi.

     `do_syscall_32_irqs_on(struct pt_regs *regs)` Bu 32-bitli Linux uchun system call dispetcherining soddalashtirilgan versiyasidir. U markaziy protsessor registrlarini system call chaqirilishidan oldingidek aks ettiruvchi tuzilmani oladi.

     `unsigned int nr = regs->orig_ax;` Bu qator `regs` strukturasining `orig_ax` maydonidan system call raqamini oladi. System call raqami qaysi system callni chaqirish kerakligini aniqlaydi.

     `regs->ax = ia32_sys_call_table[nr](regs->bx, regs->cx,
                                        regs->dx, regs->si,
                                        regs->di, regs->bp);`
     Agar system call raqami haqiqiy bo'lsa (ya'ni, `IA32_NR_syscalls` jadvalida belgilangan system callari sonidan kamroq), bu qator `ia32_sys_call_table`-da system call funksiyasini qidiradi va uni system callga o'tkazilgan parametrlar bilan chaqiradi. Keyin system callning qaytish(return) qiymati `regs` strukturasining `ax` maydonida saqlanadi.

     `syscall_return_slowpath(regs);` Bu system calldan qaytishni boshqaradigan funksiya. U saqlangan user-space registrlarini tiklaydi va bajarilishini user-spacega qaytaradi.
:::


Bu jarayon system call amalga oshirilganda user modedan kernel modega (va orqaga) bor tekis va xavfsiz o'tishni ta'minlaydi. Bu tizimning yaxlitligi va barqarorligini ta'minlash uchun juda muhim, chunki u foydalanuvchi dasturlariga kernel kodi va ma'lumotlariga to'g'ridan-to'g'ri kirishni oldini oladi va kernelga tizim resurslariga qanday va qachon kirishni nazorat qilish imkonini beradi.

## System call table

System call table - bu system call dispetcheri system callar raqamlarini kernel funksiyalariga moslashtirish uchun foydalanadi

System call table  operatsion tizim kerneli tomonidan foydalaniladigan ma'lumotlar strukturasi bo'lib, system call raqamlarini ushbu tizim chaqiruvlarini amalga oshiradigan funksiyalarga moslashtiradi. Har bir system callga uni ifodalovchi noyob raqam beriladi va system call table bu raqamlar bilan indekslangan function pointerlari qatoridir.

Application system call yubormoqchi bo'lganida, u hardware interruptni ishga tushiradi va kerakli system callning raqamini ma'lum bir registrga joylashtiradi. So'ngra OS interrupt handler ushbu raqamdan system callar jadvalidagi mos funksiyani qidirish uchun foydalanadi va so'ralgan operatsiyani bajarish uchun ushbu funksiyani chaqiradi.

Ushbu yondashuv OSga system call raqamini tekshirishga imkon beradi (uning jadval uchun tegishli diapazonda bo'lishini ta'minlash uchun) va bajarilishini boshqariladigan tarzda tegishli kernel funksiyasiga o'tkazish va shu bilan tizimning xavfsizligi va barqarorligini ta'minlaydi. Tizim qo'ng'iroqlari jadvali, shuningdek, yangi system callarni qo'shish yoki mavjudlarini o'zgartirishni osonlashtiradi: kernel dasturchilari shunchaki jadvaldagi(table) function pointerlarini yangilashlari kerak.


```c
#define __SYSCALL_I386(nr, sym, qual) [nr] = sym,

const sys_call_ptr_t ia32_sys_call_table[] = {
  [0 ... __NR_syscall_compat_max] = &sys_ni_syscall,
  #include <asm/syscalls_32.h>
};

__SYSCALL_I386(0, sys_restart_syscall)
__SYSCALL_I386(1, sys_exit)
__SYSCALL_I386(2, sys_fork)
__SYSCALL_I386(3, sys_read)
__SYSCALL_I386(4, sys_write)
#ifdef CONFIG_X86_32
__SYSCALL_I386(5, sys_open)
#else
__SYSCALL_I386(5, compat_sys_open)
#endif
__SYSCALL_I386(6, sys_close)

```

Ushbu kod IA-32 (x86) arxitekturasi uchun Linux kernelida system call table qanday amalga oshirilishining soddalashtirilgan tasviridir.

Keling, ushbu kod qismini batafsil ko'rib chiqamiz:


:::tip

     `#define __SYSCALL_I386(nr, sym, qual) [nr] = sym,` Bu system call table yozuvlarini yaratishda yordam beruvchi preprotsessor makrosi. Makros uchta argumentni oladi: system call raqamini bildiruvchi raqam `nr`, system callni amalga oshiradigan funksiyani ifodalovchi symbol sym va ushbu kodda ishlatilmaydigan qualifier qual. Ushbu makros chaqirilganda, u arrayda yozuv hosil qiladi, bunda indeks system call raqami nr va bu indeksdagi qiymat function pointer symidir.

     `const sys_call_ptr_t ia32_sys_call_table[] = { ... };` Bu system call tablelining o'zi deklaratsiyasi. Bu har biri system callga mos keladigan function pointerlari (sys_call_ptr_t) arrayi.

     `[0 ... __NR_syscall_compat_max] = &sys_ni_syscall,` Bu 0 dan `__NR_syscall_compat_max` (maksimal system call raqami) gacha bo'lgan barcha yozuvlarni `&sys_ni_syscall` ga o'rnatadigan initializer. Bu har bir kirishni `sys_ni_syscall` ga ishora qilish uchun ishga tushiradigan "catch-all" sozlamasidir, bu funksiya odatda bajarilmagan system callarni boshqarish uchun ishlatiladi. Bu tableda aniq o'rnatilmagan har qanday system callar o'zboshimchalik va ehtimol xavfli xatti-harakatlardan ko'ra "no operation" yoki xato funksiyasiga olib kelishini ta'minlaydi.

     `#include <asm/syscalls_32.h>:` Bu qator qoʻshimcha system call taʼriflarini oʻz ichiga olgan boshqa header fileni oʻz ichiga oladi.

    `__SYSCALL_I386(0, sys_restart_syscall), __SYSCALL_I386(1, sys_exit)` va boshqalar: Ushbu qatorlar system call table yozuvlar yaratish uchun` __SYSCALL_I386` makrosidan foydalanadi. Masalan, `__SYSCALL_I386(0, sys_restart_syscall)` `ia32_sys_call_table` indeksining 0 indeksida `sys_restart_syscall` funksiyasiga ishora qiluvchi yozuv yaratadi. Xuddi shunday, `__SYSCALL_I386(1, sys_exit)` 1-indeksda `sys_exit` funksiyasiga ishora qiluvchi yozuv yaratadi va hokazo. Ushbu funksiyalar tegishli system callarning haqiqiy funksiyalarini amalga oshiradi.

     `#ifdef CONFIG_X86_32` bo'limi shartli ravishda `sys_open` system callini kompilyatsiya qilish uchun ishlatiladi. Agar operatsion tizim x86 32-bitli arxitekturasi uchun tuzilgan bo'lsa (`CONFIG_X86_32` tomonidan ko'rsatilganidek), u `sys_open`-ni system callari jadvalidagi 5-indeksga tayinlaydi. Aks holda, 64-bitli arxitektura uchun `compat_sys_open` (64-bitli tizimda 32-bitli callar bilan mos `sys_open` versiyasi) bir xil indeksga tayinlanadi.

:::

Ushbu table keyinchalik system call amalga oshirilganda kernel tomonidan ishlatiladi. Kernel user leveldagi process tomonidan taqdim etilgan system call raqamini ko'rib chiqadi, uni tasdiqlaydi va keyin tegishli system call funksiyasini topish va bajarish uchun uni `ia32_sys_call_table` indeksi sifatida ishlatadi.