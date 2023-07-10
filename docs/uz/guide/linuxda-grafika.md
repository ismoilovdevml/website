# Linuxda Grafika

Maqolaning maqsadi

Ushbu keng qamrovli maqolaning maqsadi Linux operatsion tizimidagi grafikalarning nozik tomonlarini yoritishdir. Linux server muhitida, embedded tizimlarda va yaqinda, hatto iste'molchi uchun ish-stollarida keng qo'llanilishiga qaramay, ko'plab foydalanuvchilar va ishlab chiquvchilar uning grafik quyi tizimi bilan to'liq tanish emas. Ushbu qism dasturiy ta'minot ishlab chiquvchilari, Linux ishqibozlari, system administratorlar va Linuxning grafika bilan qanday ishlashini tushunishga qiziqqan barcha texnologiyaga ega bo'lgan barcha shaxslar uchun manba bo'lib xizmat qilishiga qaratilgan.


#### Linux grafikasi haqida qisqacha ma'lumot

Linuxda grafik ishlov berish - bu ekranda vizual chiqishni ta'minlash uchun uzluksiz o'zaro ta'sir qiluvchi komponentlar majmuasini o'z ichiga olgan murakkab, ko'p bosqichli jarayon. Ushbu komponentlar qatoriga 2D va 3D vektorli grafikalarni koʻrsatish, GUI yaratish, software applicationlar va grafik hardwarelar oʻrtasidagi aloqani taʼminlashgacha boʻlgan bir qator funksiyalarni taklif qiluvchi librarylar kiradi.

Bundan tashqari, Linux grafik muhiti doimiy ravishda rivojlanib bormoqda, landshaftni qayta belgilashga qaratilgan yangi tendentsiyalar va texnologiyalar. Ushbu maqola Linuxning grafik ishlovi, librarylar(kutubxona), kernel roli, jalb qilingan drayverlar va ushbu makonni shakllantiradigan kelajakdagi qiziqarli tendentsiyalarni to'liq ko'rib chiqadigan ushbu elementlarni o'rganadi.

Ushbu maqolaning oxiriga kelib, o'quvchilar Linuxda grafikalar haqida yaxshi tushunchaga ega bo'ladilar, bu esa rivojlanish, muammolarni bartaraf etish yoki shunchaki shaxsiy qiziqishni qondirish uchun keyingi tadqiqotlar uchun mustahkam poydevor yaratadi. Keling, Linux grafikasining jozibali dunyosiga sayohatimizni boshlaylik.


## Linuxda grafikaning qisqacha tarixi

Linuxda grafika tarixi o'ttiz yildan ortiq davom etadigan va Linux kernelining o'zi evolyutsiyasi bilan uzviy bog'liq bo'lgan sayohatdir. Bu innovatsiyalar, hamjamiyat hamkorligi va yuqori samarali, to'liq open-source grafik stackga tinimsiz intilish bilan ajralib turadigan hikoya.

##### Erta kunlar (1990-yillar)

Sayohat 1990-yillarning boshida, Linux kerneli Linus Torvalds tomonidan birinchi marta chiqarilgandan so'ng boshlangan. Dastlabki kunlarda Linux o'ziga xos grafik tizimiga ega emas edi. U asosan buyruq qatori interfeyslari(CLI) orqali boshqarildi, grafik displeylar uchun juda oddiy yordam bilan. Ammo foydalanuvchilar uchun qulayroq interfeysga ehtiyoj paydo bo'lishi bilan, `X11` yoki oddiygina `X` deb nomlanuvchi `X Window System` Unix dunyosidan qabul qilindi.

Dastlab 1984 yilda `Massachusetts` texnologiya institutida ishlab chiqilgan X Window System grafik tasvirlarni ko'rsatish va oynalarni boshqarish uchun asosiy mexanizmlarni taqdim etdi, ammo u standart ko'rinish va hisni aniqlamadi. Ushbu moslashuvchanlik KDE va GNOME kabi turli xil desktop environmentlarini tug'dirdi, ularning har biri o'ziga xos estetika va xatti-harakatlarga ega. 

`X Window System` (1984 yildan hozirgi kungacha) X, X11 yoki X Window System nomi bilan ham tanilgan, Unix-ga o'xshash operatsion tizimlarda, jumladan Linuxda grafik foydalanuvchi interfeyslari uchun asos bo'lgan protokol va dasturiy ta'minot. X 1980-yillarning o'rtalarida MITda Linuxdan oldin ishlab chiqilgan. Linux ishlab chiqilganda, u o'zining grafik muhiti uchun X ni qabul qildi. X GUI-ni ishlab chiqish uchun asosiy asosni taqdim etadi, bu ilovalarga GUI elementlarini ko'rsatish, sichqonchani bosish va tugmalarni bosish va hokazolarni boshqarish imkonini beradi. Biroq, X ish stoli(desktop) qanday ko'rinishini aniqlamaydi; bu window manageri va desktop environmentning roli. 

`Window Managerlar` (1980-yillar - hozirgi) Window Manager - bu X Window System muhitida oynalarning ko'rinishi va joylashishini boshqaradigan X clientlari. Birinchi window managerlaridan ba'zilari `TWM` (Tab Window Manager) va keyinchalik `FVWM` (F Virtual Window Manager) ni o'z ichiga olgan. Ular minimalist va zamonaviy standartlarga nisbatan juda qulay emas edi, lekin ular keyingi rivojlanish uchun asos bo'ldi.

`Desktop Environment` (1990-yillar - hozirgi) 1990-yillarning oʻrtalaridan oxirigacha ishlab chiquvchilar yanada kengroq desktop environment(ish stoli muhitlari)ni yaratishni boshladilar. KDE (K Desktop Environment) Unix workstationlari uchun birinchi desktop environment bo'lib, birinchi marta 1996 yilda chiqarilgan. GNOME, yana bir mashhur desktop environment 1999 yilda chiqarilgan. KDE ham, GNOME ham kengroq ilovalar, sozlamalar va yordamchi dasturlar to'plamini taqdim etgan. Linux kundalik foydalanuvchilar uchun qulayroq. Ular vazifalar paneli(taskbar), ishga tushirish menyusi va drag-and-drop(sudrab tashlash) fayllarni boshqarish kabi xususiyatlarni o'z ichiga olgan.

#### Grafik stackni yetishtirish (2000-yillar)

2000-yillarning boshida to'g'ridan-to'g'ri ko'rsatish infratuzilmasi (Direct Rendering Infrastructure DRI) ko'rinishida sezilarli yutuqlarga erishildi. DRI applicationlarga X serverini chetlab o'tish va grafik qurilmalarga to'g'ridan-to'g'ri kirish imkonini berdi, bu esa ishlashning sezilarli yaxshilanishiga olib keldi, ayniqsa 3D grafikalar va o'yinlar uchun juda muhim.

2000-yillarda, shuningdek, Linux platformasida `OpenGL`ni impelement qiluvchi open-source loyiha `Mesa`ning rivojlanishi va yetukligi kuzatildi. Mesa hardware-accelerated 3D grafikalarni taqdim etish uchun DRI bilan birgalikda ishladi. Taxminan bir vaqtning o'zida, grafik karta ishlab chiqaruvchilari, ayniqsa Nvidia va AMD, Linux uchun xususiy drayverlarni taklif qila boshladilar, bu esa grafik ish faoliyatini yanada yaxshilaydi.

`Compositing Window Manager`(Window Managerlarni kompozitsiyalash) (2000-yillar - hozirgi) 2000-yillarning o'rtalarida Compiz, KWin (KDE uchun) va Mutter (GNOME uchun) kabi kompozitsion window managerlari paydo bo'ldi. Ular har bir oynani ekranda ko'rsatishdan oldin uni ekrandan tashqari buferda ko'rsatish orqali ko'zni qamashtiruvchi grafik effektlarni taqdim etdi.

#### Modernizatsiya sari (2010-yillar)

Ushbu yutuqlarga qaramay, X Window System o'zining cheklovlariga ega edi, birinchi navbatda uning yoshi va dizayn falsafasidan kelib chiqqan holda, zamonaviy grafik qurilmalardan to'liq foydalana olmagan. Yechim 2008 yilda `Kristian Høgsberg` tomonidan boshlangan yangi displey protokoli `Wayland` ko'rinishida paydo bo'ldi. Wayland zamonaviy kompozitsion window managerlari bilan yaratilgan soddaroq va samaraliroq displey tizimini taqdim etish orqali X11 o'rnini bosishni maqsad qilgan.

Bu davrda yana bir muhim texnologiya, Kernel Mode Setting (KMS)(kernel rejimni sozlash) paydo bo'ldi. KMS ko'chirilgan rejimni sozlash(mode setting) vazifalari, jumladan, grafik rejimlarni(mode) tanlash va frame bufferlarini o'rnatish, Linux kerneliga. Bu yuklash jarayonlari(boot process) va resolution switche tugmachalarini yumshatishga olib keldi, shuningdek, yanada ilg'or grafik texnologiyalar uchun poydevor qo'ydi.

`Wayland` (2012 - hozirgi): X Window System chekloclariga yechim sifatida ishlab chiqilgan. Birinchi marta 2012 yilda chiqarilgan Wayland grafik muhitni yaratish uchun sodda va zamonaviy protokoldir. Bu X-ga qaraganda xavfsizroq va samaraliroq, ammo uni qabul qilish sekin kechdi, chunki u mavjud dasturiy ta'minotning katta qismini qayta yozishni talab qiladi.

`Vulkan` (2016 yildan hozirgi kungacha) Vulkan - yuqori unumdor 3D grafika uchun low-leveladagi, o'zaro faoliyat platformali API. U GPU ustidan ko'proq to'g'ridan-to'g'ri nazorat(direct control ) qilish va protsessordan kamroq foydalanishni taklif qilish uchun mo'ljallangan, bu video o'yinlar va boshqa grafik talab qiladigan ilovalar uchun foydalidir.

#### Hozirgi kun (2020-yildan)

Bugungi kunda Linux grafik stacklari rivojlanishda davom etmoqda. Wayland tobora ommalashib bormoqda, garchi Xorg moslik sabablari tufayli keng qo'llanilsa ham. Open Source grafik drayverlar sezilarli darajada yaxshilandi, ko'pincha xususiylar bilan teng sharoitlarda raqobatlashdi. Vulkan, yangi avlod grafikasi va hisoblash API-si ishlab chiquvchilarga grafik qurilmalar ustidan ko'proq nazoratni ta'minlab, o'ziga jalb etilmoqda.

Waylandni qabul qilishning ko'payishi (2020-2021): Wayland o'zining soddalashtirilgan yondashuvi va yaxshi xavfsizligi tufayli ancha vaqtdan beri X ning vorisi sifatida e'tirof etilgan. Ushbu davrda Wayland turli xil Linux distribyutorlari bo'ylab qabul qilishning kuchayishini ko'rdi. Masalan, Fedora Fedora 25 (2016) dan beri Wayland-dan standart bo'yicha foydalanmoqda, ammo Ubuntu Ubuntu 21.04 (2021) da uni standart bo'yicha ishlata boshladi. GNOME bir muncha vaqtdan beri Wayland-ni qo'llab-quvvatlab kelmoqda, ammo bu davrda KDE-ning Wayland-ni qo'llab-quvvatlashi sezilarli darajada yaxshilandi.

Vulkanni rivojlantirishni davom ettirish (2020-2021): 3D grafika uchun low-leveldagi, yuqori samarali, o'zaro faoliyat platformali yechimni ta'minlovchi Vulkan API keyingi qabul qilish va ishlab chiqishda davom etdi. 2021-yildan boshlab u oʻyinlarni ishlab chiqishda, jumladan, AAA oʻyin sarlavhalari va Linux oʻyinlarida Valve’ning Proton moslik vositasi tufayli tobora koʻproq foydalanilmoqda.

Linux kerneli grafik quyi tizimi yutuqlari (2020-2021): Linux kernelining grafik subsystemi ham ushbu davrda muntazam yangilanishlarni koʻrdi. Misol uchun, Direct Rendering Manager (DRM) subsystemdagi yaxshilanishlar izchil bo'ldi, jumladan, AMD va Intel GPU-larni yaxshiroq qo'llab-quvvatlash.

`PipeWire` (2020-2021): PipeWire - `PulseAudio` va `JACK `o'rnini bosuvchi Linux ostida audio va video bilan ishlashni yaxshilashga qaratilgan loyiha. Bu shuningdek, grafikaga ham ta'sir qiladi, chunki u Wayland ostida ekran almashish va masofaviy ish stoliga yordam berish uchun mo'ljallangan, stsenariylarda Waylandning xavfsizlikka yo'naltirilgan dizayni X11 ostida qo'llaniladigan an'anaviy usullarni qiyinlashtirdi.

HDR-ni qo'llab-quvvatlash (2020-2021): Yana bir muhim yutuq - Intelning open-source jamoasining katta hissasi bilan Linux ostida yuqori dinamik diapazonli (HDR) displeyni qo'llab-quvvatlash bo'yicha olib borilayotgan ishlar. 2021 yil holatiga ko'ra, Linux ekotizimida HDR joriy etish hali ham ishda.

Bular 2020 va 2021 yillarda Linux grafik landshaftida roʻy bergan baʼzi yutuqlar. Biroq bu soha butun dunyo boʻylab bir qancha ishlab chiquvchilar, hamjamiyat va kompaniyalarning hissasi bilan doimiy ravishda rivojlanib bormoqda.

Linux-dagi grafik sayohati open-source rivojlanish kuchidan dalolat beradi, uning hamkorlik, innovatsiya va doimiy takomillashtirish ruhini o'zida aks ettiradi. Linux oldinga siljishi bilan uning grafik tizimlari rivojlanishda davom etadi va foydalanuvchilar va ishlab chiquvchilarga ko'proq imkoniyatlar, yaxshi ishlash va ko'proq moslashuvchanlikni beradi.

## Linux Graphics Stack

Linux Graphics Stack - bu layerli structura(qatlamli tuzulma) bo'lib, u kompyuter applicationlariga kompyuter ekranida tasvirlarni yaratish, o'zgartirish va ko'rsatish imkonini beradi. Stack application leveldan boshlanadi va hardwaregacha bo'lgan jarayonni o'z ichiga oladi. Buni layerma-layer ko'rib chiqanuz


`Application Layer` stackning yuqori qismi applicationlar joylashgan joy. Bu sizning web-browserngiz, matn muhariringiz yoki ekraningizga tasvir yoki matnni ko'rsatishi kerak bo'lgan boshqa turdagi application(dastur, ilova) bo'lishi mumkin.

`Toolkit Layer` Applicationlar foydalanuvchi interfeyslarini(user interface) ko'rsatishga yordam berish uchun ko'pincha grafik toolkitlardan foydalanadilar. Ushbu toolkitlar tugmalar(button), matn maydonchalari(text boxes), slayderlar(slider) va boshqalar kabi oldindan tayyorlangan elementlar kutubxonalarini taqdim etadi. Masalan, `GTK`, `Qt` yoki `FLTK`.

`Window System Layer` Keyingi layer Window System Layer. Ushbu layer oynalarni(window) boshqa joyga ko'chirish, o'lchamlarini o'zgartirish yoki Z-tartibini o'zgartirish kabi asosiy imkoniyatlarni taqdim etadi. Ko'pgina Linux tizimlarida bu `X Window System (X11)` yoki `Wayland` bo'ladi.

`Compositing Window Manager` Window System Layerning ustiga qo'yish - Compositing Window Manager. Hamma tizimlarda ham bunday layer bo'lmaydi. Compositing Window Managerlari (masalan, Compiz yoki Mutter) ekranga yuborishdan oldin oynalarni buferga birlashtiradi. Bu shaffoflik(transparency), animatsiya yoki 3D desktop kabi effektlarni beradi.

`Window System Server Layer` Window System Server Layeri client applicationlari(mijoz ilovalari) va display hardware o'rtasidagi aloqani boshqarish uchun javobgardir. Linuxda buning eng keng tarqalgan misoli `X11` bilan ishlaydigan tizimlardagi `X Server` bo'lishi mumkin.

`Graphics Library Layer`  Window System Serveri ostida Graphics Library(grafik kutubxona) joylashgan. Bu dasturiy ta'minotning GPU bilan standartlashtirilgan tarzda o'zaro ishlashiga imkon beruvchi APIni taqdim etadi. Bu yerda asosiy misol - `OpenGL` va `Vulkan` kabi bir nechta grafik API-larni amalga oshiradigan `Mesa`.

`Kernel Mode Setting (KMS) va Direct Rendering Manager (DRM) layeri` Bu layer to'g'ridan-to'g'ri kernel bilan ishlaydi. KMS resolutionni aniqlash, rang chuqurligi(color depth) va refresh rateni(yangilanish tezligi) uchun javobgardir. DRM Linux kernelining subsystem(quyi tizi)mi bo'lib, u GPU-lar bilan interfeysga ega va memory management, interrupt handling va DMA kabi vazifalarni bajaradi.

`Kernel Layer` kernel operatsion tizimning asosiy qismidir. U to'g'ridan-to'g'ri hardware bilan bog'lanadi va memory management va task scheduling(vazifalarni rejalashtirish) kabi low-leveldagi service(xizmat)larni taqdim etadi.

`Hardware Layer` stackning pastki qismi actual grafik hardwaredir. Bu `NVIDIA GeForce`, `AMD Radeon` yoki `Intel` integratsiya qilingan GPU kabi bo'lishi mumkin bo'lgan grafik kartangiz.

Stackning har bir layer(qatla)mi to'g'ridan-to'g'ri uning ustidagi va ostidagi layerlar bilan bog'lanib, abstraktsiya darajasini ta'minlaydi. Bu dasturiy ta'minotni ishlab chiquvchilarga boshqa layerlarning barcha tafsilotlarini tushunmasdan turib, o'zlarining maxsus vazifalariga e'tibor qaratish imkonini beradi.

## Display Server

Linuxda Displey serverlari foydalanuvchining grafik interfeysida(user interface) asosiy rol o'ynaydi, ular user applicationlari va kompyuterning hardware vositalari, asosan, grafik qurilmalari o'rtasida vositachi vazifasini bajaradi. Displey serverining vazifalari klaviatura va sichqoncha kabi kiritish qurilmalarini boshqarish, qaysi oyna yuqorida bo'lishini hal qilish, tizim resurslarini taqsimlash va oyna mazmunini(window content) ekranga ko'rsatishni o'z ichiga oladi. Displey serverlarini tushunish juda muhim, chunki u Linux grafik stackidagi asosiy komponentlardan biridir. Displey serveri o'z clienlari bilan tarmoqda shaffof yoki oddiygina tarmoqqa ulanishi mumkin bo'lgan displey server protokoli, aloqa protokoli orqali bog'lanadi. Displey serveri har qanday grafik foydalanuvchi interfeysida, xususan, windowing systemida asosiy komponent hisoblanadi. Mustaqil displey serverining server/client munosabatlari bir oz ziddir, chunki "server" odatda katta, uzoq joylashgan machine sifatida tasavvur qilinadi, ammo mustaqil "displey server" kichik, mahalliy(local) tizim bo'lib, ko'pchilik clientlar katta markaziy machinenada bajariiladi. Tushuntirish shundan iboratki, displey serveri displey va kiritish qurilmalari(input device) xizmatlarini taqdim etadi.

### Display server communications protocols

## X11

Displey serveriga misol sifatida kernelning tepasida ishlaydigan `X.Org` serveridir (odatda Unix-ga o'xshash kernel, masalan, Linux yoki BSD). U foydalanuvchi ma'lumotlarini oladi (masalan, Linux-dagi evdev-dan) va uni clientlaridan biriga uzatadi. Displey serveri o'z clientlaridan ma'lumotlarni ham oladi; u ma'lumotlarni qayta ishlaydi, birlashtirishni amalga oshiradi va Linuxda ma'lumotlarni uchta kernel komponentlaridan biriga - DRM, gem yoki KMS drayveriga uzatadi. Komponent ma'lumotlarni framebufferga yozadi va framebufferning mazmuni ulangan ekranga uzatiladi va ko'rsatiladi. X `GLX` ga tayanadi.

GLX ("OpenGL Extension to X Window System" ning boshlang'ich belgisi) X Window System kernel protokolining kengaytmasi(extension) bo'lib, OpenGL va X Window System o'rtasidagi interfeysni hamda OpenGLning o'zi uchun kengaytmalarni ta'minlaydi. Bu OpenGL-dan foydalanishni xohlovchi dasturlarga buni X Window System tomonidan taqdim etilgan windowda amalga oshirish imkonini beradi. GLX ikkita "state" ni ajratadi: indirect state(bilvosita state) va direct state(bevosita state).

Displey serveri kontseptsiyasining amalga oshirilishidan biri bu X Window System, xususan uning amalda qo'llanilgan versiyasi - X.Org Server va Xlib va XCB clientlar kutubxonalari. X.Org serveri displey serveridir, lekin joriy tatbiqida u kompozitsiyani bajarish uchun ikkinchi dasturga, ya'ni compositing window managerga tayanadi. Misollar Mutter yoki KWin. X11 displey server protokolini implement qiladigan displey serverlarining diqqatga sazovor namunalari `X.Org Server`, `XFree86`, `XQuartz` va `Cygwin/X`, X11 displey server protokolini implement qiluvchi clientlar kutubxonalari esa Xlib va XCB hisoblanadi.



## Wayland

Wayland displey server protokolini impplement qiladigan displey serverlari Wayland kompozitorlari deb ataladi. Har qanday displey serveri singari, Wayland kompozitori ham o'z clientlari uchun kirish va chiqishni boshqarish uchun javobgardir va X11 dan farqli o'laroq - qo'shimcha ravishda kompozitsiya uchun. Masalan, `Weston`, `Mutter`, `KWin` yoki `Enlightenment`.

Wayland kompozitorlari Wayland displey serveri protokoli orqali Wayland clientlari bilan bog'lanadi. Ushbu protokol clientlar EGL rendering API yordamida to'g'ridan-to'g'ri ma'lumotlarni framebufferga yozishi mumkinligini belgilaydi. Displey serveri hali ham qaysi oynaning tepasida ekanligini va shuning uchun foydalanuvchiga ko'rinadiganligini hal qiladi, shuningdek, evdev-dan o'z clientlariga kirish qurilmalariga tegishli ma'lumotlarni uzatish uchun javobgardir.

Wayland ma'lum darajada Fedora kabi ba'zi Linux ish stoli(desktop) distributivlarida qo'llaniladi. U mobil kompyuterlar uchun ham juda mos keladi va masalan, smartfon va planshetlarga yo'naltirilgan `Tizen`, `Sailfish OS` va `AsteroidS` loyihalari tomonidan qabul qilingan.

Wayland dasturi MIT litsenziyasi, libwayland-client va libwayland-server kutubxonalari(libraray) ostida mavjud.
ChromeOS-ga Wayland yordamini qo'shish bo'yicha ishlar davom etmoqda.


## Mir

Mir displey serveri o'zining Mir displey server protokoli bilan birga keladi, bu X11 va Wayland tomonidan qo'llaniladigan protokollardan farq qiladi. Mir qo'shimcha ravishda X11 protokolini qo'llab-quvvatlaydi. U`Canonical` tomonidan ishlab chiqilgan va Ubuntu uchun tanlangan displey serveri bo'lishga mo'ljallangan edi. Mir Canonical kompaniyasining X.org va Waylandni chetlab o'tib, Ubuntu uchun noldan boshlab displey serverini yaratishga urinishi edi. Maqsad, ish stolidan tortib telefonlargacha bo'lgan qurilmalarda ishlaydigan tizim yaratish edi. Biroq, turli omillar tufayli Canonical o'z e'tiborini Waylandga qaratdi. 2017 yildan boshlab u Ubuntu desktop editionlari uchun Wayland displey serveri bilan almashtirildi.

GPLv3 ostida mavjud Mir displey serveri, libmir-server va libmir-mijoz kutubxonalarining ilovalari mavjud.
