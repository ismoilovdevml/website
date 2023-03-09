# Blockchain


![alt text](https://iscjobs.com/wp-content/uploads/2020/10/Blockchain_Search_Consultants-scaled.jpg)

Blokcheyn – kriptografik xeshlar orqali xavfsiz bog‘langan yozuvlar (bloklar) ro‘yxati ortib borayotgan taqsimlangan daftardir. Har bir blok oldingi blokning kriptografik xeshi, timestamp va tranzaksiya ma'lumotlarini o'z ichiga oladi (odatda Merkle daraxti sifatida taqdim etiladi, bu yerda ma'lumotlar tugunlari barglar bilan ifodalanadi). Timestamp blok yaratilganda tranzaksiya ma'lumotlari mavjudligini tasdiqlaydi. Har bir blok oldingi blok haqida ma'lumotni o'z ichiga olganligi sababli, ular samarali ravishda zanjir hosil qiladi, har bir qo'shimcha blok o'zidan oldingi bloklar bilan bog'lanadi.

Natijada, blokcheyn tranzaktsiyalari qaytarib bo'lmaydigan bo'lib, ular yozib olingandan so'ng, har qanday blokdagi ma'lumotlarni keyingi barcha bloklarni o'zgartirmasdan retroaktiv tarzda o'zgartirib bo'lmaydi. 

Blokcheynlar odatda umumiy taqsimlangan daftar sifatida foydalanish uchun peer-to-peer (P2P) kompyuter tarmog'i tomonidan boshqariladi, bu yerda tugunlar birgalikda yangi tranzaksiya bloklarini qo'shish va tasdiqlash uchun consensus algoritmi protokoliga amal qiladi.


Blokcheyn 2008 yilda Satoshi Nakamoto nomidan foydalanib, bitkoin kriptovalyuta operatsiyalari uchun public distributed ledger sifatida xizmat qilish uchun shaxs (yoki odamlar guruhi) tomonidan yaratilgan. Stuart Haber, W. Scott Stornetta, va Dave Bayerning oldingi ishlariga asoslangan. Bitkoin ichida blokcheynning amalga oshirilishi uni ishonchli organ yoki markaziy serverga ehtiyoj sezmasdan ikki marta sarflash muammosini hal qiladigan birinchi raqamli valyutaga aylantirdi. Bitkoin dizayni jamoatchilik tomonidan o'qilishi mumkin bo'lgan va kriptovalyutalar tomonidan keng qo'llaniladigan boshqa ilovalar va blokcheynlarni ilhomlantirdi.


## Tarixi

Kriptograf David Chaum birinchi marta 1982 yilda o'zining "O'zaro shubhali guruhlar tomonidan yaratilgan, qo'llab-quvvatlanadigan va ishonchli kompyuter tizimlari" dissertatsiyasida blokcheynga o'xshash protokolni taklif qildi. Kriptografik himoyalangan bloklar zanjiri bo'yicha keyingi ishlar 1991 yilda Stuart Haber va W. Scott Stornetta tomonidan tasvirlangan. Ular document timestamplarini o'zgartirib bo'lmaydigan tizimni joriy qilmoqchi edilar. 1992 yilda Haber, Stornetta va Dave Bayer dizaynga Merkle daraxtlarini kiritdilar, bu esa bir nechta hujjat sertifikatlarini bir blokda to'plash imkonini berib, uning samaradorligini oshirdi.

Birinchi markazlashtirilmagan blokcheyn 2008 yilda Satoshi Nakamoto nomi bilan tanilgan shaxs tomonidan kontseptuallashtirilgan. Nakamoto bloklarni ishonchli shaxs tomonidan imzolanishini talab qilmasdan va zanjirga bloklar qo'shilish tezligini barqarorlashtirish uchun qiyinchilik parametrini kiritmasdan timestamp uchun Hashcashga o'xshash usuldan foydalangan holda dizaynni muhim tarzda takomillashtirdi. Dizayn keyingi yili Nakamoto tomonidan bitkoin kriptovalyutasining asosiy komponenti sifatida amalga oshirildi, u erda tarmoqdagi barcha tranzaktsiyalar uchun umumiy hisob kitobi bo'lib xizmat qiladi.


2014 yil avgust oyida tarmoqdagi barcha tranzaksiyalarning yozuvlarini o'z ichiga olgan bitcoin blokcheyn fayl hajmi 20 GB (gigabayt) ga yetdi. 2015 yil yanvar oyida uning hajmi deyarli 30 Gb gacha o'sdi va 2016 yil yanvaridan 2017 yil yanvarigacha bitkoin blokcheyni 50 Gb dan 100 Gb gacha o'sdi. 2020 yil boshiga kelib ledger size 200 Gb dan oshdi. 2023 yil 6 mart hisobiga ko'ra bu hajm 461GB ga chiqqan.

Blok(block) va zanjir(chain) so'zlari Satoshi Nakamotoning asl qog'ozida alohida ishlatilgan, ammo oxir-oqibat 2016 yilga kelib bitta so'z, blokcheyn sifatida ommalashgan. Sanoat savdo guruhlari 2016 yilda Chamber of Digital Commercesining tashabbusi bilan Global Blockchain Forumini yaratish uchun birlashdilar.

## Struktura va Dizayn

Blokcheyn - bu markazlashtirilmagan(decentralized), taqsimlangan(distributed) va tez-tez ommaviy, digital ledger bo'lib, bloklar deb ataladigan yozuvlardan iborat bo'lib, ular ko'plab kompyuterlar bo'ylab tranzaktsiyalarni yozib olish uchun ishlatiladi, shuning uchun har qanday blokni keyingi barcha bloklarni o'zgartirmasdan o'zgartirib bo'lmaydi. Bu ishtirokchilarga operatsiyalarni mustaqil va nisbatan arzon tekshirish va tekshirish imkonini beradi. Blockchain ma'lumotlar bazasi peer-to-peer tarmog'i va taqsimlangan vaqtni(timestamping) belgilash serveri yordamida avtonom tarzda boshqariladi.Ular jamoaviy manfaatlar asosidagi ommaviy hamkorlik orqali tasdiqlanadi

Bunday dizayn ishonchli ish oqimini osonlashtiradi, bunda ishtirokchilarning ma'lumotlar xavfsizligi bo'yicha noaniqligi chegaralangan.Blokcheyndan foydalanish digital assetdan cheksiz takrorlanuvchanlik(infinite reproducibility) xususiyatini olib tashlaydi. Bu qiymatning har bir birligi faqat bir marta o'tkazilganligini tasdiqlaydi, bu esa uzoq vaqtdan beri mavjud bo'lgan double-spending(ikki marta sarflash) muammosini hal qiladi. Blokcheyn value-exchange protocol(qiymat almashinuvi protokoli) sifatida tavsiflangan. Blokcheyn egalik huquqini saqlab qolishi mumkin, chunki ayirboshlash shartnomasini batafsil bayon qilish uchun to'g'ri sozlanganda, u taklif va qabul qilishga majburlovchi yozuvni taqdim etadi.


:::tip
Mantiqan, blokcheynni bir necha qismlardan iborat deb ko'rish mumkin.

* infrastructure (hardware)
* networking(tarmoq) (node discovery, ma'lumotni tarqatish va tekshirish)
* consensus (proof of work, proof of stake)
* data(ma'lumotlar) (bloklar, tranzaksiyalar)
* ilova (agar mavjud bo'lsa, aqlli shartnomalar/markazlashtirilmagan ilovalar)

:::

![alt text](https://media.geeksforgeeks.org/wp-content/uploads/20221111160733/Structureofblocksinblockchain.png)

## Bloklar

Bloklar Merkle daraxtiga xeshlangan va kodlangan yaroqli tranzaktsiyalar to'plamini saqlaydi. Har bir blok blokcheyndagi oldingi blokning kriptografik xeshini o'z ichiga oladi va ikkalasini bog'laydi.Bog'langan bloklar zanjir hosil qiladi. Ushbu iterativ jarayon oldingi blokning yaxlitligini tasdiqlaydi, genesis bloki (blok 0) deb nomlanuvchi boshlang'ich blokga qadar. Blok va undagi ma'lumotlarning yaxlitligini ta'minlash uchun blok odatda raqamli imzolanadi.

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Hash_Tree.svg/1200px-Hash_Tree.svg.png)

![alt text](https://media.geeksforgeeks.org/wp-content/cdn-uploads/MerkleTree-min-1024x512.png)

Rasmda Merkle Daraxti


![alt text](https://positiwise.com/wp-content/uploads/2022/06/hash-function.png)



![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Cryptographic_Hash_Function.svg/1200px-Cryptographic_Hash_Function.svg.png)

![alt text](https://www.mdpi.com/J/J-02-00021/article_deploy/html/images/J-02-00021-g003.png)

Rasmda kriptografik xesh

Ba'zan alohida bloklar bir vaqtning o'zida ishlab chiqarilishi mumkin, bu esa temporary forklar yaratadi. Xavfsiz hash-based historyga qo'shimcha ravishda, har qanday blokcheyn historyning turli versiyalarini baholash uchun aniq algoritmga ega, shuning uchun yuqori ballga ega bo'lgan birini boshqalardan tanlash mumkin.


Xavfsiz hash-based historyga qo'shimcha ravishda, har qanday blokcheyn historyning turli versiyalarini baholash uchun belgilangan algoritmga ega, shuning uchun yuqori ballga ega bo'lgan birini boshqalardan tanlash mumkin. Zanjirga kiritish uchun tanlanmagan bloklar yetim bloklar(orphan blocks) deb ataladi. Ma'lumotlar bazasini qo'llab-quvvatlovchi peerlar vaqti-vaqti bilan historyning turli versiyalariga ega. Ular ma'lumotlar bazasining faqat o'zlariga ma'lum bo'lgan eng yuqori ballli versiyasini saqlaydilar. Har safar peer yuqori ballli versiyani (odatda bitta yangi blok qo'shilgan eski versiya) olganida, ular o'zlarining ma'lumotlar bazasini kengaytiradilar yoki qayta yozadilar va yaxshilanishni peerlariga qayta uzatadilar. Har qanday alohida yozuv abadiy historyning eng yaxshi versiyasida qolishiga hech qachon mutlaq kafolat yo'q. Blokcheynlar odatda eski bloklarga yangi bloklar ballini qo'shish uchun qurilgan va eski bloklarni qayta yozish o'rniga yangi bloklar bilan kengaytirish uchun rag'batlantiriladi. Shuning uchun, yozuvning o'rnini bosish ehtimoli eksponent ravishda kamayadi, chunki uning ustiga ko'proq bloklar qurilgan va oxir-oqibat juda past bo'ladi. Masalan, bitcoin `proof-of-work` tizimidan foydalanadi, bunda proof-of-work eng ko‘p bo‘lgan zanjir tarmoq tomonidan yaroqli deb hisoblanadi. Hisoblashning yetarli darajasini ko'rsatish uchun ishlatilishi mumkin bo'lgan bir qator usullar mavjud. Blokcheyn ichida hisoblash an'anaviy ajratilgan va parallel usulda emas, balki redundantly(ortiqcha) tarzda amalga oshiriladi.