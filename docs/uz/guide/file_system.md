## Linux fayl tizimi uchun keng qamrovli qo'llanma

![alt text](https://cdn.mos.cms.futurecdn.net/DCLGUx4ks428XWdHvrX93m-1200-80.jpg)

### Kirish

Linux fayl tizimi - bu Linux operatsion tizimida fayllar va directorylarni saqlash, tartibga solish va ularga kirish usuli. Bu hard disk yoki ssd disk kabi saqlash qurilmasida ma'lumotlar qanday saqlanishini belgilaydigan ierarxik tuzilma. Linux fayl tizimida ildiz directorysi `/` bilan belgilanadi tizimdagi barcha boshqa directory va fayllarni o'z ichiga olgan yuqori darajadagi directorydir. Har bir directory ma'lumotlarning ierarxik tashkil etilishiga imkon beruvchi boshqa kichik directorylar yoki fayllarni o'z ichiga olishi mumkin.

Operatsion tizimda fayl tizimining ahamiyati shundan iboratki, u operatsion tizimga tizimdagi barcha fayllar va directorylarni kuzatib borish va ularga kirishni boshqarish imkonini beradi. Fayl tizimi diskda bo'sh joy ajratish, ma'lumotlarni joylashtirish va kirishni osonlashtiradigan tarzda tartibga solish va ma'lumotlarning samarali saqlanishi va olinishini ta'minlash uchun javobgardir.

Linuxda har xil fayl tizimlaridan foydalanish mumkin, ularning har biri o'ziga xos xususiyatlarga va ishlash xususiyatlariga ega. Ba'zi mashhur Linux fayl tizimlariga Ext2, Ext3 va Ext4 fayl tizimlari, shuningdek, yangi Btrfs va XFS fayl tizimlari kiradi. Fayl tizimini tanlash Linux tizimining ishlashi, ishonchliligi va mosligiga ta'sir qilishi mumkin, shuning uchun vazifa uchun to'g'ri fayl tizimini tanlash muhimdir.

### Linux fayl tizimining umumiy ko'rinishi


Linux fayl tizimi uzoq va qiziqarli tarixga ega. Asl Linux fayl tizimi Minix fayl tizimi o'z imkoniyatlari bilan cheklangan edi va tez orada Ext (extended) fayl tizimi bilan almashtirildi. Ext fayl tizimining birinchi versiyasi Ext2 1993 yilda chiqarildi va mustahkam dizayni va katta hajmdagi fayllarni qoʻllab-quvvatlash va ish faoliyatini yaxshilash kabi ilg'or xususiyatlari tufayli Linux tizimlarida keng qoʻllanila boshlandi.

Yillar davomida Ext fayl tizimi rivojlandi va takomillashtirildi, bu Ext3 va Ext4 fayl tizimlarining yaratilishiga olib keldi. Ext3 2001-yilda chiqarildi va Ext fayl tizimiga jurnal yuritish imkoniyatlarini qo'shdi, bu esa diskdagi operatsiyalarning ishonchliligi va tezligini oshirdi. 2008-yilda chiqarilgan Ext4 Ext3 imkoniyatlarini yanada takomillashtirildi va kattaroq fayl tizimlarini qo‘llab-quvvatlash va ish faoliyatini yaxshilash imkonini berdi.

Ext fayl tizimlariga qo'shimcha ravishda, Linuxda ishlatiladigan yana bir qancha fayl tizimi turlari mavjud bo'lib, ularning har biri o'ziga xos xususiyat va afzalliklarga ega. Eng mashhurlaridan ba'zilari:

* Btrfs (B-tree file system):

Bu Oracle va Red Hat kabi bir nechta kompaniyalar tomonidan ishlab chiqilgan zamonaviy fayl tizimi. Btrfs yozishda nusxa ko'chirish, snapshotlar va checksumlari kabi ilg'or xususiyatlarni taklif etadi, bu esa uni saqlash tizimlari va serverlarida foydalanish uchun mashhur tanlovga aylantiradi.

* XFS (XFS file system):
Bu Silicon Graphics tomonidan ishlab chiqilgan yuqori samarali fayl tizimi. XFS katta fayl tizimlari uchun optimallashtirilgan va ko'pincha yuqori unumli hisoblash va boshqa talabchan ilovalar uchun ishlatiladi.

* NTFS (New Technology File System):

Bu Windows va Linux o'rnatilgan ikkilamchi yuklash tizimlari uchun tez-tez ishlatiladigan Microsoft fayl tizimi. NTFS Windows tizimlari bilan yaxshi moslikni ta'minlaydi va ko'pincha Windows bo'limlarida saqlangan ma'lumotlarga kirish uchun ishlatiladi.

Ushbu fayl tizimlarining har biri o'zining kuchli va zaif tomonlariga ega va qaysi birini tanlash muayyan tizimning o'ziga xos ehtiyojlari va talablariga bog'liq bo'lishi mumkin. Umuman olganda, Linux fayl tizimining evolyutsiyasi ma'lumotlarni saqlash va boshqarishning mustahkam va moslashuvchan usulini ta'minlovchi operatsion tizim sifatida Linuxning muvaffaqiyatida asosiy rol o'ynadi.

### Linux fayl tizimining tuzilishi

Linux fayl tizimining tuzilishi ierarxik bo'lib, ildiz directorysi `/` tizimdagi barcha boshqa fayllar va directorylarni o'z ichiga olgan yuqori darajadagi directory bo'lib xizmat qiladi. Ildiz directorysidan ma'lum turdagi fayllarni o'z ichiga olgan va ma'lum maqsadlarga xizmat qiluvchi bir nechta subdirectorylar mavjud. Linux fayl tizimidagi eng muhim subdirectorylardan ba'zilari:

`/bin` Ushbu directory tizimni yuklash va to'g'ri ishlashi uchun zarur bo'lgan muhim binary fayllarni o'z ichiga oladi. Bu fayllar odatda tizimdagi barcha foydalanuvchilar uchun umumiy bo'lib, ls, cp va mv kabi asosiy buyruqlarni o'z ichiga oladi.

`/boot` Ushbu directory tizimni yuklash uchun zarur bo'lgan fayllarni o'z ichiga oladi, jumladan Linux kerneli, system map fayli va boot loader konfiguratsiya fayllari.

`/dev `Ushbu directory tizimdagi qattiq disklar, klaviaturalar va sichqonlar kabi turli xil hardware qurilmalarini ifodalovchi qurilma fayllarini o'z ichiga oladi.

`/etc` Ushbu directory tizim va ilovalar uchun konfiguratsiya fayllarini o'z ichiga oladi. Ushbu directory ko'pincha tarmoq konfiguratsiya fayllari va foydalanuvchi autentifikatsiya fayllari kabi butun tizim sozlamalarini saqlash uchun ishlatiladi.

`/home` Ushbu directory tizimdagi alohida foydalanuvchilarning shaxsiy fayllari va konfiguratsiya fayllarini saqlashi mumkin bo'lgan home directorylarini o'z ichiga oladi.

`/lib` Ushbu directory ilovalar va tizim uchun zarur bo'lgan umumiy kutubxonalar va boshqa fayllarni o'z ichiga oladi.

`/media` Ushbu directory odatda USB drayvlar va CD-ROMlar kabi olinadigan xotira qurilmalarini o'rnatish uchun ishlatiladi.

`/mnt `Ushbu directory fayl tizimlarini vaqtincha o'rnatish uchun ishlatiladi, masalan, masofaviy serverdagi ma'lumotlarga kirish uchun mount buyrug'idan foydalanganda.

`/opt` Ushbu directory asosiy tizimning bir qismi bo'lmagan ixtiyoriy dasturiy paketlarni saqlash uchun ishlatiladi.

`/tmp` Ushbu directory ilovalar va tizim tomonidan yaratilgan vaqtinchalik fayllarni saqlash uchun ishlatiladi.

`/proc` Bu tizim va uning jarayonlari haqida ma'lumot beruvchi virtual fayl tizimi. /proc directorydagi fayllar diskda saqlanmaydi, balki kernel tomonidan real vaqtda yaratiladi.

`/root` Bu tizimdagi administrator hisobi bo'lgan root foydalanuvchi uchun home  directorydir.

`/sbin` Ushbu directory tizimni boshqarish va texnik xizmat ko'rsatish uchun ishlatiladigan binary fayllarni o'z ichiga oladi. Odatda bu fayllarga faqat root foydalanuvchisi kirishi mumkin.

`/sys` Bu virtual fayl tizimi bo'lib, tizimning hardware ta'minoti, jumladan, tizim qurilmalari va ularning konfiguratsiyasi haqida ma'lumot beradi.

`/var` Ushbu directory jurnal fayllari va ma'lumotlar bazasi fayllari kabi o'zgaruvchan fayllarni o'z ichiga oladi. Ushbu directorydagi fayllar tizimdan foydalanishga qarab hajmi o'zgarishi mumkin, shuning uchun u `o'zgaruvchan` deb ataladi.

Ushbu directorylarning har biri muayyan maqsadga xizmat qiladi va tizimdagi fayllarni topish va boshqarishni osonlashtiradigan tarzda tashkil etilgan. Linux fayl tizimining tuzilishini tushunish Linux tizimidan samarali foydalanish va boshqarish uchun zarurdir.

## Inode tuzilishini tushunish


Index nodening qisqartmasi inode - Linux fayl tizimidagi fayl haqidagi ma'lumotlarni saqlash uchun ishlatiladigan ma'lumotlar tuzilmasi. Inode tuzilmalari har bir faylga xos boʻlib, fayl haqidagi maʼlumotlar, jumladan, uning egaligi, ruxsatlari, vaqt belgilari va fayl maʼlumotlarining diskdagi joylashuvi haqidagi maʼlumotlarning markaziy ombori boʻlib xizmat qiladi.

Har bir inode yaratilganda unga noyob raqam (inode raqami) beriladi va bu raqam inode va uning ma'lumotlariga kirish uchun ishlatiladi. Inode raqami fayl tizimi tomonidan diskdagi fayl ma'lumotlarini aniqlash uchun ishlatiladi va faylning directory yozuvida saqlanadi. Fayl ochilganda, uning inode diskdan o'qiladi va undagi ma'lumotlar faylga kirish ruxsatlarini, vaqt belgilarini va boshqa atributlarini aniqlash uchun ishlatiladi.

Inodeda saqlanadigan ma'lumotlar quyidagilarni o'z ichiga oladi

* Fayl turi (masalan, oddiy fayl, directory, symbolic link va boshqalar)
* Egalik (foydalanuvchi va guruh identifikatorlari)
* Permission(Ruxsatlar) (o'qish, yozish, bajarish va h.k.)
* Timestamp (oxirgi kirish vaqti, oxirgi o'zgartirish vaqti va yaratish vaqti)
* Havolalar soni (faylga qattiq havolalar soni)
* Fayl hajmi

Faylni tashkil etuvchi ma'lumotlar bloklariga pointerlar (direct blocklar, indirect blocklar, double indirect blocklar va boshqalar).
Inode tuzilmalari Linux fayl tizimining muhim qismi bo'lib, fayl tizimining yaxlitligi va izchilligini ta'minlash uchun ishlatiladi. Har bir fayl haqidagi ma'lumotni markaziy joyda saqlash orqali inodelar fayl tizimining o'lchami va tuzilishi vaqt o'tishi bilan o'zgargan taqdirda ham fayllarga samarali kirish va boshqarishni ta'minlaydi. Linux fayl tizimidagi inodelarning rolini tushunish fayllar va kataloglarni boshqarish va fayl tizimining qanday ishlashini tushunish uchun muhimdir.


## Superblok

Superblok Linux fayl tizimidagi markaziy ma'lumotlar strukturasi bo'lib, u butun fayl tizimi haqida muhim ma'lumotlarni o'z ichiga oladi. Ushbu ma'lumotlar fayl tizimining o'zi haqidagi metama'lumotlarni o'z ichiga oladi, masalan, bloklarning umumiy soni, bloklarning o'lchami va inodelarning umumiy soni. Superblok odatda diskdagi belgilangan joyda, odatda fayl tizimining boshida saqlanadi va fayl tizimi tomonidan fayl tizimining umumiy holatini kuzatish uchun foydalaniladi.

Superblokning vazifasi operatsion tizimga fayl tizimi haqida muhim ma'lumotlarni taqdim etishdan iborat. Ushbu ma'lumotlar operatsion tizim tomonidan fayl tizimini boshqarish va uning izchilligi va yaxlitligini saqlash uchun ishlatiladi. Superblokda saqlanadigan ba'zi asosiy ma'lumotlarga quyidagilar kiradi:

* Fayl tizimi turi: Bu ext4, btrfs, XFS va boshqalar kabi foydalanilayotgan fayl tizimining turini bildiradi.

* Bloklarning umumiy soni: Bu fayl tizimidagi ishlatilgan va foydalanilmagan bloklarning umumiy sonini bildiradi.

* Inodlarning umumiy soni: Bu fayl tizimidagi ishlatilgan va foydalanilmagan inodelarning umumiy sonini bildiradi.

* Blok hajmi: Bu fayl tizimidagi blok hajmini baytlarda ko'rsatadi.

* Fayl tizimini yaratish vaqti: Bu fayl tizimi yaratilgan sana va vaqtni bildiradi.

* Oxirgi o'rnatish vaqti: Bu fayl tizimi oxirgi marta o'rnatilgan sana va vaqtni bildiradi.

* Oxirgi yozish vaqti: Bu fayl tizimi oxirgi marta yozilgan sana va vaqtni bildiradi.

Superblok fayl tizimining muhim komponentidir va agar u buzilgan yoki yo'qolsa, fayl tizimiga kirish imkoni bo'lmaydi va ma'lumotlar yo'qolishi mumkin. Bunga yo'l qo'ymaslik uchun, zamonaviy Linux fayl tizimlari, odatda, diskning turli joylarida saqlanadigan superblokning bir nechta nusxalarini saqlaydi, bu buzilish yoki yo'qolgan taqdirda har doim haqiqiy nusxasi mavjudligini ta'minlaydi.

Xulosa qilib aytadigan bo'lsak, superblok Linux fayl tizimidagi muhim ma'lumotlar tuzilmasi bo'lib, fayl tizimining izchilligi va yaxlitligini saqlashda markaziy rol o'ynaydi. Superblokning rolini tushunish Linux fayl tizimini boshqarish va unga xizmat ko'rsatish hamda fayl tizimining qanday ishlashini tushunish uchun muhimdir.

## Fayl tizimlarini mountlash  va ummount

Fayl tizimlarini mount qilish va ummount qilish Linuxda muhim jarayondir, chunki u operatsion tizimga fayl tizimlariga kirish va undan foydalanish imkonini beradi. Operatsion tizim va foydalanuvchilar tomonidan foydalanish uchun fayl tizimi o'rnatilgan bo'lishi kerak. Fayl tizimi mount qilinganda, u Linux fayl tizimi ierarxiyasidagi  mount pointga biriktiriladi va uning tarkibiga kirish mumkin va foydalanish mumkin bo'ladi.

Fayl tizimini mount qilish quyidagi bosqichlarni o'z ichiga oladi

* Mount qilishi kerak bo'lgan fayl tizimini o'z ichiga olgan qurilmani aniqlash. Bu jismoniy disk, diskdagi partition yoki virtual disk image fayli bo'lishi mumkin.

* Fayl tizimi ierarxiyasida mount pointni yaratish. Bu fayl tizimi biriktiriladigan va uning tarkibiga kirish mumkin bo'lgan joy.

* Mount qilish buyrug'ini ishga tushirish, qurilma va mount pointni ko'rsatish. Masalan: `mount /dev/sda1 /mnt` birinchi diskdagi (sda1) birinchi bo'limni `/mnt` directoryga o'rnatadi.

* Fayl tizimi mount qilgandan so'ng, uning tarkibiga kirish va fayl tizimining boshqa qismlari kabi foydalanish mumkin. Fayl tizimi endi kerak bo'lmaganda, uni fayl tizimi ierarxiyasidan ajratish va foydalanayotgan resurslarni bo'shatish uchun uni ummount qilish mumkin.

Fayl tizimini ummount qilish quyidagi bosqichlarni o'z ichiga oladi: