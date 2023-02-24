# LLVM Arxitekturasi va Optimallashtirish


![alt text](https://llvm.org/img/DragonMedium.png)


:::tip
LLVM - bu low level virtual machineni ifodalovchi qisqartma
:::

LLVM — kompilyator va toolchain texnologiyalari boʻlib, har qanday dasturlash tili uchun frontend va har qanday instruction set arxitekturasi uchun backendni ishlab chiqish uchun ishlatilishi mumkin. LLVM tildan mustaqil `Intermediate Representation (IR) ` atrofida ishlab chiqilgan bo'lib, u portativ, high-level assembly language bo'lib xizmat qiladi, uni multiple passe orqali turli xil o'zgarishlar bilan optimallashtirish mumkin.

LLVM C++ tilida yozilgan va compile-time, link-time, run-time va "idle-time" optimallashtirish uchun mo'ljallangan.
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


LLVM kompilyatordan intermediate representation (IR) kodini olib, optimallashtirilgan IR-ni chiqaradigan to'liq kompilyator tizimining o'rta qatlamlarini taqdim etishi mumkin. Ushbu yangi IR keyinchalik maqsadli platforma uchun mashinaga bog'liq assembly language kodiga aylantirilishi va bog'lanishi mumkin. LLVM `GNU Compiler Collection (GCC)` toolchaindan IR ni qabul qilishi mumkin, bu esa uni ushbu loyiha uchun yozilgan mavjud kompilyator old qismlarining keng qatori bilan ishlatishga imkon beradi.