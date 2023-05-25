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

Biroq, ko'pgina monolit kernellar subsytemlar o'rtasida, ayniqsa kernel coresi va qurilma drayverlari o'rtasida logical separation(mantiqiy ajratish)ni ta'minlaydi, ular bitta subsystem yoki qurilma drayverlari tomonidan taklif qilinadigan xizmatlarga kirish uchun ishlatilishi kerak bo'lgan nisbatan qat'iy API-larga ega (lekin o'rnatilgan bo'lishi shart emas).

### Micro kernel

Mikro-kernel kernelning katta qismlari bir-biridan himoyalangan, odatda user spaceda xizmat ko'rsatadigan kerneldir. Kernelning muhim qismlari hozir foydalanuvchi rejimida(user mod) ishlayotganligi sababli, kernel rejimida(kernel mode) ishlaydigan qolgan kod sezilarli darajada kichikroq, shuning uchun mikro kernel atamasi ishlatiladi.

![alt text](https://linux-kernel-labs.github.io/refs/heads/master/_images/ditaa-c8a3d93d0109b7be6f608871d16adff4aaa933da.png)