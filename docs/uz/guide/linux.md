# Linux nima
 Linux haqida batafsil ma'lumot

## Linux nima?
Windows, iOS va Mac OS kabi, Linux ham operatsion tizimdir.

Smartfonlardan tortib avtomobillar, superkompyuterlar va maishiy texnika, desktop kompyuterdan korporativ serverlargacha, Linux operatsion tizimi hamma joyda.

Linux 1990-yillarning o'rtalaridan beri mavjud bo'lib, butun dunyo bo'ylab foydalanuvchilar bazasiga yetdi. Linux aslida hamma joyda: u telefonlaringizda, termostatlaringizda, mashinalaringizda, muzlatgichlaringizda, Kosmosda, yer ostida, labarotoriyalar va televizorlaringizda. Shuningdek, u Internetning katta qismini, dunyodagi eng yaxshi 500 ta superkompyuterni va jahon fond birjalarini boshqaradi.

Ammo butun dunyo bo'ylab desktop, serverlar va o'rnatilgan tizimlarni ishlatish uchun tanlangan platforma bo'lishdan tashqari, Linux mavjud bo'lgan eng ishonchli, xavfsiz va xavotirsiz operatsion tizimlardan biridir.

Darhaqiqat, sayyoramizdagi eng mashhur platformalardan biri bo'lgan Android Linux operatsion tizimida ishlaydi. Operatsion tizim desktop yoki noutbuk bilan bog'liq barcha harware resurslarini boshqaradigan dasturiy ta'minotdir. Oddiy qilib aytganda, operatsion tizim sizning dasturiy ta'minotingiz va harware o'rtasidagi aloqani boshqaradi. Operatsion tizimsiz (OS) dasturiy ta'minot ishlamaydi.

Linux operatsion tizimi bir nechta turli qismlardan iborat:

* Bootloader -  kompyuteringizni yuklash jarayonini boshqaradigan dastur. Aksariyat foydalanuvchilar uchun bu shunchaki ochiladigan va oxir-oqibat operatsion tizimga yuklash uchun ketadigan ekran bo'ladi.
* Kernel (Yadro) - Bu aslida "Linux" deb ataladigan butunlikning bir qismidir. Kernel tizimning yadrosi bo'lib, CPU, xotira va periferik qurilmalarni boshqaradi. Yadro - OSning eng past darajasi.
* Init tizimi - Bu foydalanuvchi maydonini yuklaydigan va demonlarni boshqarish bilan to'ldirilgan quyi tizim. Eng ko'p qo'llaniladigan init tizimlaridan biri bu systemd bo'lib, u ham eng munozarali tizimlardan biri hisoblanadi. Dastlabki yuklash yuklash qurilmasidan (ya'ni, GRUB yoki GRand Unified Bootloader) topshirilgandan so'ng, yuklash jarayonini boshqaradigan init tizimi.
* Daemons (Demonlar) - Bu yuklash paytida yoki desktopga kirganingizdan keyin ishga tushadigan fon xizmatlari (chop etish, ovoz, rejalashtirish va h.k.).
* Grafik server - Bu sizning monitoringizda grafiklarni ko'rsatadigan quyi tizimdir. U odatda X server yoki faqat X deb ataladi.
* Desktop environment DE (Ish stoli muhiti) - Bu foydalanuvchilar haqiqatda o'zaro ta'sir qiladigan qismdir. Tanlash uchun ko'plab ish stoli muhitlari mavjud (GNOME, Deepin, Cinnamon, Mate, Pantheon, Enlightenment, KDE, Xfce va boshqalar). Har bir ish stoli muhiti o'rnatilgan ilovalarni (masalan, fayl boshqaruvchilari, konfiguratsiya vositalari, veb-brauzerlar va o'yinlar) o'z ichiga oladi.
* Ilovalar - Desktop environment ilovalarning to'liq qatorini taklif qilmaydi. Xuddi Windows va macOS kabi, Linux ham osongina topish va o'rnatish mumkin bo'lgan minglab yuqori sifatli dasturiy ta'minotni taklif etadi. Ko'pgina zamonaviy Linux distributivlari ilovalarni o'rnatishni markazlashtiradigan va soddalashtiradigan App Store-ga o'xshash vositalarni o'z ichiga oladi. Masalan, Ubuntu Linux-da Ubuntu dasturiy ta'minot markazi (GNOME dasturiy ta'minotining rebrendidir) mavjud bo'lib, u sizga minglab ilovalarni tezda qidirish va ularni bitta markazlashtirilgan joydan o'rnatish imkonini beradi.

## Nima uchun Linuxdan foydalanish kerak?

Bu savolga javob berish uchun men yana bir savol beraman. Siz foydalanayotgan operatsion tizim haqiqatan ham “yaxshi” ishlaydimi? Yoki viruslar, zararli dasturlar, sekinlashuvlar, nosozliklar, qimmat ta'mirlash va litsenziya to'lovlari kabi to'siqlarga duch kelyapsizmi? Agar siz yuqoridagilar bilan kurashsangiz, Linux siz uchun mukammal platforma bo'lishi mumkin. Linux sayyoradagi eng ishonchli kompyuter ekotizimlaridan biriga aylandi. Ushbu ishonchlilikni kirishning nol qiymati bilan birlashtiring va siz desktop platformasi uchun mukammal yechimga ega bo'lasiz.

To'g'ri, kirishning nol narxi... bepulda bo'lgani kabi. Dasturiy ta'minot yoki server litsenziyasi uchun bir tyin to'lamasdan, Linuxni xohlaganingizcha ko'p kompyuterlarga o'rnatishingiz mumkin.


Keling, Windows Server 2016 bilan taqqoslaganda Linux serverining narxini ko'rib chiqaylik. Windows Server 2016 Standard nashrining narxi 882,00 AQSh dollarini tashkil etadi (to'g'ridan-to'g'ri Microsoft'dan sotib olinadi). Bunga Client Access License (CALs) va boshqa dasturlar uchun litsenziyalar kirmaydi (masalan, maʼlumotlar bazasi, veb-server, pochta serveri va boshqalar). Masalan, Windows Server 2016 uchun bitta foydalanuvchi CAL 38,00 dollar turadi. Agar siz 10 ta foydalanuvchi qo'shishingiz kerak bo'lsa, masalan, server dasturiy ta'minotini litsenziyalash uchun bu $388,00 ko'proq. Linux serveri bilan hammasi bepul va oʻrnatish oson. Haqiqatan ham, to'liq rivojlangan veb-serverni (ma'lumotlar bazasi serverini o'z ichiga oladi) o'rnatish bir necha marta bosish yoki buyruqlar uzoqda (bu qanchalik sodda bo'lishi mumkinligi haqida tasavvurga ega bo'lish uchun Easy LAMP Serverni o'rnatishni ko'rib chiqing).

Agar nol xarajat sizni mag'lub etish uchun yetarli bo'lmasa – siz undan foydalansangiz, muammosiz ishlaydigan operatsion tizim haqida nima deyish mumkin? Men anchadan beri Linuxdan foydalanaman (desktop va server platformasi sifatida) va to'lov dasturi, zararli dastur yoki viruslar bilan bog'liq muammolarga duch kelmadim. Serverni qayta ishga tushirishga kelsak, ular kernel yangilangan taqdirdagina kerak bo'ladi. Linux serveri yillar davomida qayta ishga tushirilmasdan qolishi odatiy hol emas. Muntazam tavsiya etilgan yangilanishlarga rioya qilsangiz, barqarorlik va ishonchlilik amalda ta'minlanadi.

## Open source

Linux ham Open source litsenziya ostida tarqatiladi. Open source quyidagi asosiy qoidalarga amal qiladi:

* Dasturni istalgan maqsadda ishlatish erkinligi.
* Dastur qanday ishlashini o'rganish va uni xohlaganingizni qilish uchun uni o'zgartirish erkinligi.
* Qo'shningizga yordam berish uchun nusxalarni qayta tarqatish erkinligi.
* O'zgartirilgan versiyalaringiz nusxalarini boshqalarga tarqatish erkinligi.

## "Distributiv" nima?

Linux har qanday foydalanuvchi turiga mos keladigan turli xil versiyalarga ega. Yangi foydalanuvchilardan tortib, asosiy foydalanuvchilarga qadar, ehtiyojlaringizga mos keladigan Linux “distributivini” topasiz. Ushbu versiyalar tarqatish (yoki qisqa shaklda "distros") deb ataladi. Deyarli har bir Linux distributivini bepul yuklab olish, diskka (yoki USB flesh-diskiga) yozish va o'rnatish (istagancha ko'p qurilmalarda) mumkin.

Ommabop Linux distributivlariga quyidagilar kiradi:

* Arch Linux
* Manjaro
* Debian
* Ubuntu
* Fedora
* Redhat
* Kali linux
* Elementary OS

Yuqoridagi server distributivlarining ba'zilari bepul (masalan, Ubuntu Server va CentOS) va ba'zilari tegishli narxga ega (masalan, Red Hat Enterprise Linux va SUSE Enterprise Linux). Tegishli narxga ega bo'lganlar qo'llab-quvvatlashni ham o'z ichiga oladi.

## Qaysi linux distributiv sizga mos keladi?

Qaysi distributivdan foydalanish uchta oddiy savolga javobga bog'liq bo'ladi:

* Siz qanchalik malakali kompyuter foydalanuvchisisiz?
* Zamonaviy yoki standart desktop interfeysini afzal ko'rasizmi?
* Server yoki desktop?

Agar sizning kompyuter ko'nikmalaringiz juda oddiy bo'lsa, siz Linux Mint, Ubuntu, Elementary OS yoki Deepin kabi yangi boshlanuvchilar uchun qulay distributiv. Agar sizning mahoratingiz o'rtachadan yuqori diapazonga kirsa, siz Debian. Arch linux va Fedora kabi distributorga o'tishingiz mumkin. Ammo, agar siz kompyuter va tizim boshqaruvini deyarli o'zlashtirgan bo'lsangiz, Gentoo kabi distributivdan foydalaning. Agar siz haqiqatan ham qiyinchilikni xohlasangiz, Linux From Scratch  yoki Arch iso yordamida o'zingizning shaxsiy Linux distributivingizni yaratishingiz mumkin.

Agar siz faqat server uchun distributiv izlayotgan bo'lsangiz, desktop interfeysi kerakmi yoki buni faqat command-line orqali qilishni xohlaysizmi. Ubuntu serveri GUI interfeysini o'rnatmaydi. Bu shuni anglatadiki, sizning serveringiz grafiklarni yuklashda to'xtab qolmaydi va siz Linux command line haqida yaxshi tushunchaga ega bo'lishingiz kerak bo'ladi. Biroq, siz GUI paketini Ubuntu serverining tepasiga sudo apt-get install ubuntu-desktop kabi bitta buyruq bilan o'rnatishingiz mumkin. Tizim administratorlari, shuningdek, xususiyatlar bo'yicha distributivni ko'rishni xohlashadi. Sizga serveringiz uchun kerak bo'lgan hamma narsani taklif qiladigan serverga xos distributivni xohlaysizmi? Agar shunday bo'lsa, CentOS eng yaxshi tanlov bo'lishi mumkin.

:::tip
Xato va kamchiliklar bo'lsa uzur so'rayman )

[Telegram Blog](https://t.me/Otabek_Ismoilov)
:::