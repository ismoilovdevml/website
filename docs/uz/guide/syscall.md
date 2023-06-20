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