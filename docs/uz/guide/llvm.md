# LLVM Arxitekturasi


![alt text](https://clangpowertools.com/assets/blog/next-steps-for-clang-power-tools/CptBanner.png)


:::tip
LLVM - bu low level virtual machineni ifodalovchi qisqartma
:::

LLVM — kompilyator va toolchain texnologiyalari boʻlib, har qanday dasturlash tili uchun frontend va har qanday instruction set arxitekturasi uchun backendni ishlab chiqish uchun ishlatilishi mumkin. LLVM tildan mustaqil `Intermediate Representation (IR) ` atrofida ishlab chiqilgan bo'lib, u portativ, high-level assembly language bo'lib xizmat qiladi, uni multiple passe orqali turli xil o'zgarishlar bilan optimallashtirish mumkin.

LLVM C++ tilida yozilgan va compile-time, link-time, run-time va idle-time optimallashtirish uchun mo'ljallangan.
Dastlab C va C++ uchun tatbiq etilgan LLVMning language-agnostic dizayni oʻshandan beri turli xil frontendlarni yaratdi: LLVM dan foydalanadigan (yoki bevosita LLVM dan foydalanmaydigan, lekin kompilyatsiya qilingan dasturlarni LLVM IR sifatida yarata oladigan) kompilyatorli tillar ActionScript, Ada, C#, Common Lisp, PicoLisp, Crystal, CUDA, D, Delphi, Dylan, Forth, Fortran, Free Basic, Free Pascal, Graphical G, Halide, Haskell, Java bytecode, Julia, Kotlin, Lua, Objective-C, OpenCL, PostgreSQL SQL va PLpgSQL, Ruby, Rust, Scala, Swift, XC, Xojo va Zig.

![alt text](https://assets-global.website-files.com/620d42e86cb8ec4d0839e59d/620d42e96cb8ec53c539ef17_c47cbc8cca9448df840b6c203a38ab8d.jpeg)

## Tarixi

LLVM loyihasi 2000 yilda Urbana–Champaigndagi Illinois universitetida Vikram Adve va Chris Lattner rahbarligida boshlangan. LLVM dastlab statik va dinamik dasturlash tillari uchun dinamik kompilyatsiya usullarini o'rganish uchun tadqiqot infratuzilmasi sifatida ishlab chiqilgan. LLVM Illinois/NCSA Open Source License ruxsat beruvchi bepul dasturiy ta'minot litsenziyasi ostida chiqarilgan. 

2005-yilda Apple Inc. Lattnerni yolladi va Apple ishlab chiqarish tizimlarida turli maqsadlarda foydalanish uchun LLVM tizimida ishlash uchun jamoa tuzdi. LLVM Xcode 4-dan beri macOS va iOS uchun Apple Xcode ishlab chiqish vositalarining ajralmas qismi bo'lib kelgan.

2006 yilda Lattner `Clang` nomli yangi loyiha ustida ishlay boshladi. Clang front-end va LLVM back-end kombinatsiyasi Clang/LLVM yoki oddiygina Clang deb ataladi. LLVM nomi dastlab `Low Level Virtual Machine` initialism edi. Bu initialismni "chalkash" va "nomaqbul" qildi va 2011 yildan beri LLVM "rasmiy ravishda endi qisqartma emas", balki loyiha endi an'anaviy virtual mashinalarga qaratilmaydi.

Loyiha LLVM intermediate representation (IR), LLVM debuggerini, C++ standart kutubxonasining LLVM dasturini (C++11 va C++14 toʻliq qoʻllab-quvvatlashi bilan) va boshqalarni oʻz ichiga oladi.

LLVM `LLVM Foundation` tomonidan boshqariladi. Kompilyator muhandisi Tanya Lattner 2014-yilda uning prezidenti boʻldi va hozirgacha o'z lavozimida.

"LLVMni loyihalash va implement qilish uchun" Association for Computing Machinery assotsiatsiyasi Vikram Adve, [Chris Lattner](https://github.com/lattner), va Evan Chengga 2012 yil ACM dasturiy ta'minot tizimi mukofotini taqdim etdi.
Loyiha dastlab `UIUC` litsenziyasi ostida mavjud edi. 2019-yilda chiqarilgan `v9.0.0` dan keyin, LLVM LLVM istisnolari bilan Apache 2.0 litsenziyasiga qayta litsenziyalandi.


LLVM kompilyatordan intermediate representation (IR) kodini olib, optimallashtirilgan IR-ni chiqaradigan to'liq kompilyator tizimining o'rta qatlamlarini taqdim etishi mumkin. Ushbu yangi IR keyinchalik maqsadli platforma uchun mashinaga bog'liq assembly language kodiga aylantirilishi va bog'lanishi mumkin. LLVM `GNU Compiler Collection (GCC)` toolchaindan IR ni qabul qilishi mumkin, bu esa uni ushbu loyiha uchun yozilgan mavjud kompilyator frontendining keng doirasi bilan ishlatishga imkon beradi.

LLVM language-independent instruction  va type systemni qo'llab-quvvatlaydi. Har bir instruction static single assignment(SSA) shaklida mavjud, ya'ni har bir o'zgaruvchi (yozilgan registr deb ataladi) bir marta tayinlanadi va keyin muzlatiladi.Bu o'zgaruvchilar orasidagi bog'liqliklarni tahlil qilishni soddalashtirishga yordam beradi. LLVM kodni an'anaviy GCC tizimida bo'lgani kabi statik ravishda kompilyatsiya qilish imkonini beradi yoki Java'ga o'xshash IR-dan mashina kodiga just-in-time compilation (JIT) orqali kech kompilyatsiya qilish uchun qoldiriladi.

Type systemi butun yoki floating-point raqamlar kabi asosiy turlardan va beshta hosila turlaridan iborat: pointerlar, arraylar, vektorlar, structuralar va funksiyalar.

LLVM JIT kompilyatori runtimeda dasturdan keraksiz statik tarmoqlarni optimallashtirishi mumkin va shuning uchun dasturda ko'plab variantlar mavjud bo'lgan hollarda qisman baholash uchun foydali bo'ladi, ularning aksariyati ma'lum bir muhitda keraksizligini osongina aniqlash mumkin. Bu xususiyat Mac OS X Leopard (v10.5) ning OpenGL pipelineda yetishmayotgan hardware xususiyatlarini qo'llab-quvvatlash uchun ishlatiladi.

## Kompilyator arxitekturasi

#### 1. An'anaviy two-pass kompilyator

![alt text](https://www.sites.google.com/site/compiler7987/llvm/1.png?height=75&width=770)

#### 2. LLVM GCC 4

![alt text](https://www.sites.google.com/site/compiler7987/llvm/4.png?height=92&width=760)

#### 3.LLVM Optimizer 

![alt text](https://www.sites.google.com/site/compiler7987/llvm/5.png?height=318&width=784)


## Front end

LLVM dastlab GCC stekidagi mavjud kod generatorini almashtirish uchun yozilgan edi va GCCning ko'pgina frontend qismlari u bilan ishlash uchun o'zgartirildi, natijada endi LLVM-GCC to'plami tugatildi. O'zgartirishlar odatda GIMPLE-to-LLVM IR bosqichini o'z ichiga oladi, shuning uchun GCC ning GIMPLE tizimi o'rniga LLVM optimallashtiruvchilari va kodegen ishlatilishi mumkin. Apple Xcode 4.x (2013) orqali LLVM-GCC-ning muhim foydalanuvchisi edi. GCC frontendidan bunday foydalanish asosan vaqtinchalik chora hisoblangan, ammo Clang-ning paydo bo'lishi va LLVM va Clang-ning zamonaviy va modulli kod bazasining afzalliklari (shuningdek, kompilyatsiya tezligi) asosan eskirgan.

LLVM hozirda Ada, C, C++, D, Delphi, Fortran, Haskell, Julia, Objective-C, Rust, va Swift-ni turli xil frontend qismlarida foydalangan holda kompilyatsiya qilishni qo'llab-quvvatlaydi. 

LLVM ga bo'lgan keng qiziqish turli tillar uchun yangi frontendlarni ishlab chiqish bo'yicha bir qancha sa'y-harakatlarga olib keldi. Eng ko'p e'tiborni tortgan Clang, C, C++ va Objective-C ni qo'llab-quvvatlaydigan yangi kompilyator edi. Asosan Apple tomonidan qo'llab-quvvatlanadigan Clang GCC tizimidagi C/Objective-C kompilyatorini integratsiyalashgan ishlab chiqish muhitlari (IDE) bilan osonroq integratsiyalashgan va ko'p ish zarralarini kengroq qo'llab-quvvatlaydigan tizim bilan almashtirishga qaratilgan. OpenMP directivelarini qo'llab-quvvatlash Clang-ga 3.8 versiyasidan qo'shilgan.

Utrecht Haskell kompilyatori LLVM uchun kod yaratishi mumkin. Generator rivojlanishning dastlabki bosqichida bo'lsa-da, ko'p hollarda u C kod generatoriga qaraganda samaraliroq bo'lgan. LLVM-dan foydalangan holda Glasgow Haskell Compiler (GHC) backend mavjud bo'lib, u GHC yoki C kodini yaratish orqali kompilyatsiya qilish va undan keyin kompilyatsiya qilish orqali mahalliy kodga nisbatan kompilyatsiya qilingan kodni 30% ga tezlashtiradi.

![alt text](https://www.researchgate.net/publication/334167635/figure/fig2/AS:1032001314373634@1623059695273/LLVM-Compiler-Development-architecture.ppm)

![alt text](https://blog.gopheracademy.com/postimages/advent-2018/llvm-ir-and-go/llvm_compiler_pipeline.png)

## Intermediate Representation - IR

LLVM ning yadrosi intermediate representation (IR), assembleyerga o'xshash low-leveldagi dasturlash tilidir. IR - bu reduced instruction set computer (RISC)  ko'p tafsilotlarini qisqartiradigan kuchli terilgan reduced instruction set computer instructionlari to'plami. Masalan, chaqiruv konventsiyasi aniq argumentlar bilan `call` va `ret` instructionlari orqali mavhumlashtiriladi. Shuningdek, belgilangan registrlar to‘plami o‘rniga IR `%0`, `%1` va hokazo ko‘rinishdagi cheksiz vaqtinchalik to‘plamdan foydalanadi. LLVM IRning uchta ekvivalent shaklini qo'llab-quvvatlaydi: odam o'qiy oladigan assembly format(human-readable assembly format), frontendlar uchun mos xotira formati va ketma-ketlashtirish uchun zich bitkod formati. Oddiy "Hello, world!" IR formatidagi dastur:

```c
@.str = internal constant [14 x i8] c"hello, world\0A\00"

declare i32 @printf(ptr, ...)

define i32 @main(i32 %argc, ptr %argv) nounwind {
entry:
    %tmp1 = getelementptr [14 x i8], ptr @.str, i32 0, i32 0
    %tmp2 = call i32 (ptr, ...) @printf( ptr %tmp1 ) nounwind
    ret i32 0
}
```

Amaldagi ko'plab turli konventsiyalar va turli maqsadlar tomonidan taqdim etilgan xususiyatlar LLVM haqiqatan ham maqsadli mustaqil IR ishlab chiqara olmasligini va ba'zi belgilangan qoidalarni buzmasdan uni qayta yo'naltira olmasligini anglatadi. Texnik Hujjatlarda aniq aytib o'tilganidan tashqari target dependence misollarini 2011 yilda onlayn distribution uchun mo'ljallangan LLVM IR ning to'liq target-independent varianti bo'lgan "wordcode" bo'yicha taklifda topish mumkin. LLVM loyihasi shuningdek, Dialect nomli plagin arxitekturasidan foydalangan holda qayta foydalanish mumkin va kengaytiriladigan kompilyator infratuzilmasini yaratishga yordam beruvchi `MLIR` nomli intermediate representationning yana bir turini taqdim etadi. Bu optimallashtirish jarayonida dastur strukturasi haqida yuqori darajadagi ma'lumotlardan, shu jumladan polyhedral kompilyatsiyadan foydalanish imkonini beradi.

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Mesa_layers_of_crap_2016.svg/1280px-Mesa_layers_of_crap_2016.svg.png)

![alt text](https://developers.redhat.com/sites/default/files/styles/article_feature/public/blog/2019/12/mirall.png?itok=0huh_91D)


## Backend

13-versiyada LLVM IA-32, x86-64, ARM, Qualcomm Hexagon, MIPS, Nvidia Parallel Thread Execution (PTX; LLVM hujjatlarida NVPTX deb ataladi), PowerPC, AMD TeraScale,  koʻpchilik AMD kabi instructionlar toʻplamlarini qoʻllab-quvvatlaydi. Ayrim funksiyalar ayrim platformalarda mavjud emas. Aksariyat xususiyatlar IA-32, x86-64, z/Architecture, ARM va PowerPCuchun mavjud. RISC-V 7-versiyadan boshlab qo'llab-quvvatlanadi.

Ilgari LLVM boshqa backendlarni ham toʻliq yoki qisman qoʻllab-quvvatlagan, jumladan C backend, Cell SPU, mblaze (MicroBlaze),AMD R600, DEC/Compaq Alpha (Alpha AXP) va Nios2, lekin bu hardware asosan eskirgan va LLVM ishlab chiquvchilari qo'llab-quvvatlash va texnik xizmat ko'rsatish xarajatlari endi oqlanmasligiga qaror qilishdi.

LLVM, shuningdek, WebAssembly-ni qo'llab-quvvatlaydi, bu kompilyatsiya qilingan dasturlarni Google Chrome / Chromium, Firefox, Microsoft Edge, Apple Safari yoki WAVM kabi WebAssembly yoqilgan muhitlarda bajarishga imkon beradi. LLVM-ga mos keluvchi WebAssembly kompilyatorlari odatda C, C++, D, Rust, Nim, Kotlin va boshqa bir qancha tillarda yozilgan o'zgartirilmagan manba kodini qo'llab-quvvatlaydi.

LLVM machine code (MC) kichik loyihasi matnli shakllar va mashina kodi o'rtasida machine instructionlarini tarjima qilish uchun LLVM asosidir.

Ilgari, LLVM assemblerni mashina kodiga tarjima qilish uchun tizim assembleriga yoki toolchaini tomonidan taqdim etilganiga tayangan. LLVM MC ning integratsiyalashgan assembleri IA-32, x86-64, ARM va ARM64 kabi ko'pgina LLVM maqsadlarini qo'llab-quvvatlaydi. Ba'zi maqsadlar uchun, jumladan, turli MIPS instructionlar to'plamlari uchun, integratsiyalashgan assembly yordami foydalanish mumkin, lekin hali ham beta bosqichida.

![alt text](https://res.cloudinary.com/practicaldev/image/fetch/s--z3KksHsX--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i.imgur.com/CofrtbC.png)


## Linker - Bo'glovchi

lld subproject LLVM uchun o'rnatilgan, platformadan mustaqil linkerni ishlab chiqishga urinishdir. lld uchinchi tomon dependesiga linkerni yo'q qilishga qaratilgan. 2017-yilning may oyi holatiga koʻra, lld ELF, PE/COFF, Mach-O va WebAssemblyni toʻliqligining kamayish tartibida qoʻllab-quvvatlaydi. GNU linkerlaridan farqli o'laroq, lld ulanish vaqtini optimallashtirish (link-time optimization - LTO) uchun o'rnatilgan yordamga ega. Bu tezroq kod ishlab chiqarish imkonini beradi, chunki u linker plagindan foydalanishni chetlab o'tadi, biroq boshqa tomondan LTO ning boshqa xususiyatlari bilan o'zaro ishlashni taqiqlaydi.

![alt text](https://www.aosabook.org/images/llvm/LTO.png)

## C++ standart kutubxonasi

C++ dasturlash tilida C++ standart kutubxonasi asosiy tilda yozilgan va C++ ISO standartining bir qismi bo'lgan classlar va funksiyalar to'plamidir.
LLVM loyihasi MIT litsenziyasi va UIUC litsenziyasi ostida ikki tomonlama litsenziyalangan libc++ deb nomlangan C++ standart kutubxonasini implementationni o'z ichiga oladi. v9.0.0 dan boshlab, u LLVM istisnolari bilan Apache License 2.0 ga qayta litsenziyalangan.

## Polly

Bu ko'p burchakli model yordamida cache-localityni optimallashtirish to'plamini, shuningdek avtomatik parallellik va vektorizatsiyani amalga oshiradi.

Polyhedral model (polytope metodi deb ham ataladi) juda ko'p sonli operatsiyalarni bajaradigan dasturlar uchun matematik framework bo'lib, aniq sanab o'tish uchun juda katta, shuning uchun ixcham tasvirni talab qiladi. Ichki sikl dasturlari odatiy, ammo yagona misol emas va modelning eng keng tarqalgan qo'llanilishi dasturni optimallashtirishda loop nest optimallashtirish uchundir.

![alt text](https://releases.llvm.org/15.0.0/tools/polly/docs/_images/architecture.png)

## Debugger

LLDB Debugger (LLDB) LLVM loyihasining debugger komponentidir. U qayta foydalanish mumkin bo'lgan komponentlar to'plami sifatida yaratilgan bo'lib, ular LLVM ning Clang expression parse va LLVM disassembleri kabi mavjud kutubxonalaridan keng foydalanadi. LLDB Illinois universiteti/NCSA open-source litsenziyasi ostidagi bepul va open-source dasturiy ta'minot bo'lib, BSD uslubidagi ruxsat beruvchi dasturiy ta'minot litsenziyasiga kiradi. LLDB C, Objective-C va C++ tillarida yozilgan dasturlarni debuggingni qo'llab-quvvatlaydi. Swift hamjamiyati tilni qo'llab-quvvatlaydigan versiyani qo'llab-quvvatlaydi.U macOS, Linux, FreeBSD, NetBSD va Windowsda ishlashi maʼlum va i386, x86-64 va ARM instructionlar toʻplamini qoʻllab-quvvatlaydi. LLDB Xcode 5 va undan keyingi versiyalar uchun standart debuggerdir. Android Studio debug uchun LLDB dan ham foydalanadi. LLDB boshqa IDE-lardan, jumladan Visual Studio Code, C++ Builder, Eclipse, va CLion-dan foydalanish mumkin.

![alt text](https://upload.wikimedia.org/wikipedia/commons/c/c2/LLDB_screenshot.png)

## C standart kutubxonasi

C standart kutubxonasi yoki libc ISO C standartida ko'rsatilganidek, C dasturlash tili uchun standart kutubxonadir. Asl `ANSI C `standartidan boshlab, u C kutubxonasi POSIX spetsifikatsiyasi bilan bir vaqtda ishlab chiqilgan bo'lib, uning yuqori qismi hisoblanadi. ANSI C Xalqaro standartlashtirish tashkiloti tomonidan qabul qilinganligi sababli, C standart kutubxonasi ISO C kutubxonasi deb ham ataladi. C standart kutubxonasi macrolarni, turdagi definitionlarni va stringlarni boshqarish, matematik hisoblar, input/outputni qayta ishlash, xotirani boshqarish va boshqa bir qator operatsion tizim xizmatlari kabi vazifalarni taqdim etadi.
llvm-libc - bu LLVM loyihasi tomonidan ishlab chiqilgan, to'liq bo'lmagan, yaqinlashib kelayotgan, ABI mustaqil C standart kutubxonasi.


## Dasturchilar


#### Asosiy Dasturchilar: Vikram Adve va Chris Lattner

LLVM loyisi Open Source bo'lgani uchun manba kodlarini Githubdan topishingiz mumkin.

#### [LLVM Github](https://github.com/llvm/llvm-project)

#### [Loyihaga hissa qo'shgan dasturchilar ro'yxati](https://github.com/llvm/llvm-project/graphs/contributors)

#### [LLVM Dasturchilari ro'yxati](https://github.com/orgs/llvm/people)

:::tip
O'zbekistonda xam LLVM dasturchisi borligini mamnuniyat bilan ayta olaman. O'zbekistondagi LLVM dasturchisi [Yuri Katsuki](https://github.com/katsuki-yuri). Yuri bu haqida yaqinda o'zining [Telegram blogida](https://t.me/yurionblog/233) e'lon qildi. Biz bundan juda xursandmiz.


Xato va kamchiliklar bo'lsa uzur so'rayman )

[Telegram Blog](https://t.me/Otabek_Ismoilov)

Foydanilgan Manbalar

[Wikipedia](https://en.wikipedia.org/wiki/LLVM)
va boshqa ko'plab manbalar
:::