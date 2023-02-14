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

















# Kvant hisoblash nima?

Kvant hisoblash - bu klassik kompyuterlar uchun juda murakkab muammolarni hal qilish uchun kvant mexanikasi qonunlaridan foydalanadigan tez rivojlanayotgan texnologiya. 

Bugungi kunda IBM Quantum haqiqiy kvant uskunasini ishlab chiqaradi - olimlar buni faqat 30 yil oldin tasavvur qila boshlagan - yuz minglab ishlab chiquvchilar uchun mavjud.

## Nima uchun bizga kvant kompyuterlari kerak?

Ba'zi muammolar uchun superkompyuterlar u qadar super emas.

Olimlar va muhandislar qiyin muammolarga duch kelganda, ular superkompyuterlarga murojaat qilishadi. Bular juda katta klassik kompyuterlar bo'lib, ko'pincha minglab klassik CPU va GPU yadrolariga ega. Biroq, hatto superkompyuterlar ham muayyan turdagi muammolarni hal qilish uchun kurashadilar.

Agar superkompyuter qotib qolsa, bu katta klassik mashinadan yuqori darajadagi murakkablikdagi muammoni hal qilish so'ralgani uchundir. Klassik kompyuterlar ishlamay qolganda, bu ko'pincha murakkablik tufayli yuzaga keladi. Molekuladagi alohida atomlarning xatti-harakatlarini modellashtirish murakkab muammodir, chunki har xil elektronlar bir-biri bilan o'zaro ta'sir qiladi. Global yuk tashish tarmog'ida bir necha yuz tankerlar uchun ideal marshrutlarni saralash ham murakkab.

## Nima uchun kvant kompyuterlari tezroq

Klassik kompyuterlar muvaffaqiyatsizlikka uchragan joyda kvant kompyuterlari qanday muvaffaqiyat qozonishini ko'rsatadigan misolni ko'rib chiqaylik:

Superkompyuter oqsil ketma-ketliklarining katta ma'lumotlar bazasini saralash kabi qiyin vazifalarda ajoyib bo'lishi mumkin. Ammo bu ma'lumotlardagi oqsillarning o'zini qanday tutishini aniqlaydigan nozik sabablarni ko'rish qiyin bo'ladi.

Proteinlar aminokislotalarning uzun qatorlari bo'lib, ular murakkab shakllarga aylanganda foydali biologik mashinalarga aylanadi. Oqsillarning qanday yig'ilishini aniqlash biologiya va tibbiyot uchun muhim ahamiyatga ega bo'lgan muammodir. 

Klassik superkompyuter o'zining ko'plab protsessorlaridan foydalanib, oqsilni qo'pol kuch bilan katlamoqchi bo'lishi mumkin, bu javobga kelishdan oldin kimyoviy zanjirni egishning barcha mumkin bo'lgan usullarini tekshirishi mumkin. Ammo oqsil ketma-ketligi sifatida Kvant hisoblash nima? uzoqroq va murakkabroq bo'lsin, superkompyuter to'xtaydi. 100 ta aminokislotadan iborat zanjir nazariy jihatdan trillionlab usullardan birida yi'gila oladi. Hech bir kompyuter alohida burmalarning barcha mumkin bo'lgan kombinatsiyalarini boshqarish uchun ishchi xotiraga ega emas.

Kvant algoritmlari bunday murakkab muammolarga yangicha yondashadi -- alohida ma'lumotlar nuqtalarini bog'laydigan sabablar paydo bo'ladigan ko'p o'lchovli bo'shliqlarni yaratadi. Proteinni yig'ish muammosi bo'lsa, bu sabab ishlab chiqarish uchun eng kam energiya talab qiladigan burmalar birikmasi bo'lishi mumkin. Bu burmalarning kombinatsiyasi muammoning yechimidir.

Klassik kompyuterlar bu hisoblash maydonlarini yarata olmaydi, shuning uchun ular bu sabablarni topa olmaydi. Proteinlarga kelsak, klassik kompyuterlarning mashaqqatli tekshirish protseduralarisiz mutlaqo yangi, samaraliroq usullarda yi'gilish sabablarini topishi mumkin bo'lgan dastlabki kvant algoritmlari allaqachon mavjud. Kvant apparat shkalasi va bu algoritmlar rivojlangani sayin, ular har qanday superkompyuter uchun juda murakkab oqsillarni yi'gilish muammolarini hal qilishlari mumkin.

### Murakkablik superkompyuterlarni qanday hayratda qoldiradi

Proteinlar aminokislotalarning uzun qatorlari bo'lib, ular murakkab shakllarga aylanganda foydali biologik mashinalarga aylanadi. Oqsillarning qanday yig'ilishini aniqlash biologiya va tibbiyot uchun muhim ahamiyatga ega bo'lgan muammodir. Klassik superkompyuter o'zining ko'plab protsessorlaridan foydalanib, oqsilni qo'pol kuch bilan yig'moqchi bo'lishi mumkin, bu javobga kelishdan oldin kimyoviy zanjirni egishning barcha mumkin bo'lgan usullarini tekshirishi mumkin. Ammo oqsil ketma-ketligi uzoqroq va murakkablashgani sayin, superkompyuter to'xtab qoladi. 100 ta aminokislotadan iborat zanjir nazariy jihatdan trillionlab usullardan birida topa oladi. Hech bir kompyuter alohida burmalarning barcha mumkin bo'lgan kombinatsiyalarini boshqarish uchun ishchi xotiraga ega emas.

### Kvant kompyuterlari murakkablik uchun yaratilgan
