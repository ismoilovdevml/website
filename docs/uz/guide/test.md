### Kernel arxitekturasining turli dizaynlari mavjud.

#### Kernel turlari

:::tip
Kernellarning beshta asosiy turi:

* Monolitik kernel
* Micro Kernel
* Gibrid Kernel
* Exo Kernel
* Nano Kernel
:::

#### Monolitik kernel

Monolitik kernellar kernelning eng oddiy va eng keng tarqalgan turidir. Bu barcha operatsion tizim servicelari kernel spaceda ishlaydigan kernel turlaridan biridir. Tizim komponentlari o'rtasida bog'liqlik mavjud. U juda murakkab kod satrlariga ega.Ular operatsion tizimning asosiy funksiyalarini o'z ichiga oladi va unga ulangan barcha qurilmalarni qo'llab-quvvatlaydi.Bunda foydalanuvchi va kernel xizmatlari bir xil memory spaceda amalga oshiriladi. Shu tufayli kernel hajmi kattalashadi, bu esa o'z navbatida operatsion tizim hajmini oshiradi



##### Misollar:

:::tip
Unix, Linux, Open VMS, XTS-400 va boshqalar.
:::

Linux kerneli doimiy ravishda o'sib borayotgan monolit kerneldir; 2018 yilda u 20 million qator kodga ega edi.

#### Afzalliklari

Bu yaxshi ishlashga ega.Asosiy afzallik shundaki, jarayonning tezroq bajarilishi, chunki foydalanuvchi va kernel uchun alohida memory space mavjud emas. 

#### Kamchiliklari

Tizim komponenti va millionlab kod satrlari o'rtasida bog'liqlik mavjud. 


#### Micro Kernel

Mikro kernellar yangi ishlanmadir va shuning uchun monolit kernellar kabi keng tarqalgan emas. Ular faqat tizimning ishlashi uchun zarur bo'lgan asosiy servicelar va qurilmalarni o'z ichiga oladi. Bu tezroq va kamroq xotiradan foydalanadigan kichikroq kernelgaga olib keladi. Bu yerda foydalanuvchi va kernel servicelari ikki xil spaceda amalga oshiriladi. Unda alohida `User Space` va `Kernel Space` mavjud.Bu kernel hajmini kamaytiradi va operatsion tizim hajmini qisqartiradi.

##### Misollar:

:::tip
Mach, L4, AmigaOS, Minix, K42 va boshqalar.
:::

#### Afzalliklari

Bu yanada barqaror.

#### Kamchiliklari

Ko'p system calllari va context switchelar mavjud.


#### Gibrid Kernel

Gibrid kernellar monolit va mikro kernellarni birlashtiradi. Ular mikro kernellarga qaraganda ko'proq servicelarni o'z ichiga oladi, lekin monolit kernellardan kamroq. Bu ularga ikkala kernelning ba'zi afzalliklarini taklif qilish imkonini beradi. U monolit kernellardan tezlikni va mikro kernellardan modullikni oladi.

##### Misollar:

:::tip
Windows NT, Netware, BeOS va boshqalar.
:::

#### Afzalliklari

U monolit kernel va mikro kernelni birlashtiradi.

#### Kamchiliklari

U hali ham monolit kernelga o'xshaydi.

#### Exo Kernel
Bu `end-to-end` tamoyiliga amal qiladigan kernel turi. Unda iloji boricha kamroq hardware abstractionlari mavjud. U jismoniy resurslarni ilovalarga ajratadi. Bu kernel alohida resurs protection va boshqaruviga ega. Ilovaga maxsus moslashtirishni amalga oshirishda foydalanish uchun javob beradi. Exo kernellari mobil qurilmalarda foydalanish uchun mo'ljallangan. Ular power management va bir nechta protsessorlarni qo'llab-quvvatlash kabi mobil qurilmalar uchun maxsus qo'shimcha funksiyalarni o'z ichiga olgan mikrokernellarning o'zgarishi.

##### Misollar:

:::tip
Nemesis, ExOS va boshqalar.
:::

#### Afzalliklari

Unda juda kam hardware abstractionlari mavjud.

#### Kamchiliklari

Ilovalarni ishlab chiquvchilar uchun ko'proq ish bor.

#### Nano Kernel

Nano kernellar kernelning eng kichik turi bo'lib, bir necha ming kod qatoridan iborat. Bu hardware abstractionini taklif qiladigan, lekin system servicelarisiz kernel turi. Micro Kernel ham system servicelariga ega emas, shuning uchun Micro Kernel va Nano Kernel o'xshash bo'ladi. Bu hardwerining privilegeli rejimida bajariladigan kod minimal ekanligini anglatadi. Ular asosan embedded systemlarda yoki cheklangan resurslarga ega qurilmalarda qo'llaniladi.

##### Misollar:

:::tip
EROS va boshqalar.
:::

#### Afzalliklari

U system servicelarisiz hardware abstractionlarini taklif qiladi.

#### Kamchiliklari

Bu mikrok ernel bilan bir xil, shuning uchun u kamroq qo'llaniladi.


Kompyuter tizimining ushbu markaziy komponenti dasturlarni bajarish uchun javobgardir. Kernel istalgan vaqtda ko'plab ishlaydigan dasturlardan qaysi biri protsessor yoki protsessorlarga ajratilishi kerakligini hal qilish uchun javobgarlikni o'z zimmasiga oladi.
