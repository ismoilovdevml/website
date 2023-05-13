# Kompilyatorlar qanday ishlaydi

![alt text](https://t2informatik.de/wp-content/uploads/2023/03/compiler.png)

Dasturlash tillari dasturchilarga inson o'qiy oladigan manba kodini yozishga imkon berish uchun yaratilgan. Biroq, kompyuterlar mashina kodlari bilan ishlaydi, odamlar uni yozish yoki o'qish qiyin. Shunday qilib, kompilyatorlar dasturlash tilining manba kodini ma'lum bir mashinaga bag'ishlangan mashina kodiga tarjima qiladilar.

Ushbu maqolada biz kompilyatsiya jarayonining bosqichlarini tahlil qilamiz. Keyin, biz kompilyatorlar va interpretatorlar o'rtasidagi farqlarni ko'ramiz. Va nihoyat, biz zamonaviy dasturlash tillarining bir nechta kompilyatorlariga misollar keltiramiz.

## Kompilyatsiya bosqichlari

Yuqorida aytib o'tganimizdek, kompilyatsiya jarayoni high-leveldagi manba kodini maqsadli mashina tomonidan bajarilishi mumkin bo'lgan low-leveldagi mashina kodiga aylantiradi. Bundan tashqari, kompilyatorlarning muhim roli dasturchiga yo'l qo'yilgan xatolar, ayniqsa sintaksis bilan bog'liq bo'lganlar haqida xabardor qilishdir.

> Kompilyatsiya jarayoni bir necha bosqichlardan iborat