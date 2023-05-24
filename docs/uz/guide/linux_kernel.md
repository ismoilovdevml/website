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

Kernel odatda "System Calls(Tizim qo'ng'iroqlari)" deb ataladigan ilovalar chiqaradigan API to'plamini taklif qiladi. Ushbu API'lar oddiy kutubxona API'laridan farq qiladi, chunki ular execution mode, user modedan kernel modega o'tish chegarasi hisoblanadi. Application(ilova) mosligini ta'minlash uchun system calllari kamdan-kam hollarda o'zgartiriladi.