# Kernel nima va u qanday ishlaydi?

![alt text](https://pemmzchannel.com/wp-content/uploads/2022/06/kernel-panic-3.10.0-229.4.2.el7_.png)

`Kernel` - bu kompyuterning operatsion tizimining yadrosi bo'lgan kompyuter dasturi va odatda tizimdagi hamma narsani to'liq nazorat qiladi. Bu operatsion tizim kodining har doim xotirada joylashgan qismi va hardware va software componentlari o'rtasidagi o'zaro aloqalarni osonlashtiradi.
To'liq kernel qurilma drayverlari orqali barcha hardware resurslarini (masalan, I/O(input/output), memory, kriptografiya) boshqaradi, bunday resurslarga tegishli jarayonlar o'rtasidagi conflictni hal qiladi va umumiy resurslardan foydalanishni optimallashtiradi, masalan. CPU va keshdan foydalanish, fayl tizimlari va network socketlari.
Ko'pgina tizimlarda kernel ishga tushirilganda (bootloderdan keyin) yuklangan birinchi dasturlardan biridir.
U ishga tushirishning qolgan qismini, shuningdek, xotira, tashqi qurilmalar va dasturiy ta'minotdan input/output (I/O) so'rovlarini boshqaradi va ularni markaziy protsessor uchun ma'lumotlarni qayta ishlash instructionlariga aylantiradi. Kernelning critical kodi odatda xotiraning alohida maydoniga yuklanadi, u application software yoki operatsion tizimning boshqa unchalik muhim bo'lmagan qismlari tomonidan kirishdan himoyalangan. Kernel ushbu himoyalangan kernel maydonida running process, hard disk kabi hardware qurilmalarini boshqarish va uzilishlarni boshqarish kabi vazifalarini bajaradi.

Bundan farqli o'laroq, brauzerlar, word processorlari va audio yoki video playerlar kabi amaliy dasturlar xotiraning alohida maydonidan, user space(foydalanuvchi maydoni)dan foydalanadi. Kernel interfeysi low-level abstraction layerdir.


Kernel arxitekturasining turli dizaynlari mavjud.