// Bismillahirahmanirahim
 // Elhamdulillahirrabbulalemin
 // Esselatu vesselamu ala seyyidina Muhammedin
 // Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illAllah
 // SubhanAllah, Elhamdulillah, Allahu Ekber
 // Allah u Ekber Ve Lillahil Hamd



// El Hamdu Lîllah ya Rabbi'l-Âlemîn, El Hamdu Lîllah yâ Rabbi'l-Âlemîn, El Hamdu Lîllah yâ Rabbi'l-Âlemîn
// La ilahe illALLAH u vahdehu la şerike leh, lehul-mulku ve lehu'l-hamdu
// Yuhyi ve yumit
// Biyadihil xayr
// ve huve ala kulli şey'in kadir
 import React from 'react'
 import MansetSlider from './components/mmanset'
 import ParvekirinaYek from './yek/parvekirin'
 import Parvekirinayekayeke from './yek/yek/parvekirin'

 import Du from './du/parvekirin'
 import Rojnm from './rojname/ForYouFeed'
 import Dirok from './dirok/ForYouFeed'
 import Car from './car/ForYouFeed'
 import Penc from './penc/ForYouFeed'
 import Se from './se/parvekirin'
 import Xane from './xane/ForYouFeed'
 // El Hamdu Lîllah ya Rabbi'l-Âlemîn, El Hamdu Lîllah yâ Rabbi'l-Âlemîn, El Hamdu Lîllah yâ Rabbi'l-Âlemîn
 // La ilahe illALLAH u vahdehu la şerike leh, lehul-mulku ve lehu'l-hamdu.
 // Yuhyi ve yumit
 // Biyadihil xayr
 // ve huve ala kulli şey'in kadir

 // El Hamdu Lîllah ya Kerîm î Rezzaq î Vehhab î Ehed î Quddus î Heq bêdawîtî..
 function page() {
   return (
     <>
       <main className="min-h-screen bg-[#f4f4f5] text-[#18181b]">


           {/* ANA SAYFA TEK ÇERÇEVE */}

             <section className="border-b border-zinc-200 bg-white px-4 py-6 sm:px-6 lg:px-8 lg:py-8">

               <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

                 <div>
                   <div className="mb-3 flex items-center gap-2">
                     <span className="h-3 w-3 rounded-sm bg-[#b80000] shadow-[0_0_0_4px_rgba(184,0,0,0.08)]" />

                     <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#b80000]">
                     Gündemde
                     </span>
                   </div>

                   <h1 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                   Gündem
                   </h1>

                   <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base">
                     Türkiye ve dünyadan en güncel gelişmeler
                   </p>
                 </div>

                 <a
                   href="/malper/yek"
                   className="inline-flex w-fit items-center rounded-lg border border-[#b80000]/20 bg-[#b80000]/5 px-4 py-2.5 text-sm font-bold text-[#b80000] transition-all hover:bg-[#b80000] hover:text-white"
                 >
                   Tüm Haberler
                   <span className="ml-2">→</span>
                 </a>

               </div>

             </section>


             {/* MANŞET ALANI — DÖNEN SLIDER */}
             <section className="bg-[#fafafa] p-3 sm:p-5 lg:p-6">

               <div className="overflow-hidden rounded-lg bg-white">
                 <MansetSlider />
               </div>

             {/* ALT 3 KART - EŞİT */}
               <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">

                 {/* Karta 3: Tarîxê Îslamî */}
                 <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                   <div className="relative h-48 overflow-hidden bg-zinc-100">
                     <img
                       src="https://yeniyasamgazetesi9.com/wp-content/uploads/2026/08/690x390cc-mrk-28-08-2028-turk-sihasi-yunanitan-havaalanina-girdi-360x180.jpg"
                       alt="Yunanistan: Türkiye İHA'sı hava sahamıza girdi"
                       className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                   </div>

                   <div className="flex flex-1 flex-col p-5">

                     <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#b80000]">
                       SPOR
                     </span>

                     <h3 className="mt-2 text-xl font-black leading-tight group-hover:text-[#b80000]">
                       Gülistan Doku'nun kaybolduğu saatlerde defalarca telefon görüşmesi ortaya çıktı
                     </h3>

                     <p className="mt-2 flex-1 text-sm leading-6 text-zinc-500">
                       Jandarma komutanının eşi B.H.K. ile Handan Sonel'in, Gülistan'ın
                       kaybolduğu saatlerde defalarca telefon görüşmesi yaptığı ortaya çıktı.
                     </p>

                     <a
                       href="/malper/car"
                       className="mt-4 text-sm font-extrabold text-[#b80000] hover:underline"
                     >
                       Spor Haberleri →
                     </a>

                   </div>

                 </article>


                 {/* Karta 3: Tarîxê Îslamî */}
                 <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                   <div className="relative h-48 overflow-hidden bg-zinc-100">
                     <img
                       src="https://yeniyasamgazetesi9.com/wp-content/uploads/2026/08/823x463cc-amd-29-08-26-gulistan-doku-dosya-yeni-gelisme-350x250.jpeg"
                       alt="Gülistan Doku dosyası"
                       className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                   </div>

                   <div className="flex flex-1 flex-col p-5">

                     <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#b80000]">
                       KÜLTÜR & SANAT
                     </span>

                     <h3 className="mt-2 text-xl font-black leading-tight group-hover:text-[#b80000]">
                       Edebiyatın yılmaz devrimcisi
                     </h3>

                     <p className="mt-2 flex-1 text-sm leading-6 text-zinc-500">
                       Kültür-sanat dünyasından güncel içerikler ve özel haberler.
                     </p>

                     <a
                       href="/malper/xane"
                       className="mt-4 text-sm font-extrabold text-[#b80000] hover:underline"
                     >
                       Kültür Haberleri →
                     </a>

                   </div>

                 </article>


                 <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                   <div className="relative h-48 overflow-hidden bg-zinc-100">
                     <ParvekirinaYek/>

                     <div className="absolute left-4 top-4">
                       <span className="rounded-md bg-[#b80000] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-white">
                         EKOLOJİ
                       </span>
                     </div>
                   </div>

                   <div className="flex flex-1 flex-col p-5">

                     <h3 className="text-xl font-black leading-tight group-hover:text-[#b80000]">
                       Gîyadin'de siyanür süreci başladı!
                     </h3>

                     <p className="mt-2 flex-1 text-sm leading-6 text-zinc-500">
                       Gîyadin'de altın madeninde siyanürle altın ayrıştırma süreci başladı;
                       bölgede ekolojik tehdit büyüyor.
                     </p>

                     <a
                       href="/malper/penc"
                       className="mt-4 text-sm font-extrabold text-[#b80000] hover:underline"
                     >
                       Teknoloji ve Çevre Haberleri →
                     </a>

                   </div>

                 </article>

               </div>

             </section>


             {/* HABER AKIŞI */}
             <section className="border-t border-zinc-200 bg-white px-4 py-8 sm:px-6 lg:px-8">

               <div className="mb-6 border-b-2 border-zinc-900 pb-4">

                 <div className="mb-2 flex items-center gap-2">
                   <span className="h-3 w-3 rounded-sm bg-[#b80000]" />

                   <span className="text-xs font-black uppercase tracking-[0.15em] text-[#b80000]">
                     Haber Akışı
                   </span>
                 </div>

                 <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                   Güncel Haberler
                 </h2>

                 <p className="mt-1 text-sm text-zinc-500">
                   Günün öne çıkan haberleri ve son dakika gelişmeleri
                 </p>

               </div>


               <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">

                 <div className="lg:col-span-8">

                   <div className="space-y-4">

                     <article className="group overflow-hidden rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition-all hover:border-[#b80000]/30 hover:shadow-lg sm:p-5">

                       <div className="flex flex-col gap-5 md:flex-row">

                         <div className="h-52 w-full shrink-0 overflow-hidden rounded-lg bg-zinc-100 md:h-40 md:w-60">
                           <Parvekirinayekayeke/>
                         </div>

                         <div className="flex flex-1 flex-col">

                           <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#b80000]">
                             GÜNCEL
                           </span>

                           <h3 className="mt-2 text-xl font-black leading-tight transition-colors group-hover:text-[#b80000] sm:text-2xl">
                             Nisêbîn'de bir kişi gözaltına alındı
                           </h3>

                           <p className="mt-2 text-sm leading-6 text-zinc-500">
                             Hakkında yakalama kararı bulunduğu gerekçesiyle Rıdvan Aslan,
                             Nisêbîn ilçe merkezinde gözaltına alındı.
                           </p>

                           <a
                             href="/malper/penc"
                             className="mt-3 text-sm font-extrabold text-[#b80000] hover:underline"
                           >
                             Devamını Oku →
                           </a>

                         </div>

                       </div>

                     </article>


                     <article className="group overflow-hidden rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition-all hover:border-[#b80000]/30 hover:shadow-lg sm:p-5">

                       <div className="flex flex-col gap-5 md:flex-row">

                         <div className="h-52 w-full shrink-0 overflow-hidden rounded-lg bg-zinc-100 md:h-40 md:w-60">
                           <img
                             src="https://yeniyasamgazetesi9.com/wp-content/uploads/2026/08/amd-29-08-2026-3genc-tahliye-350x250.jpeg"
                             alt="3 genç tahliye edildi"
                             className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                           />
                         </div>

                         <div className="flex flex-1 flex-col">

                           <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#b80000]">
                             GÜNDEM
                           </span>

                           <h3 className="mt-2 text-xl font-black leading-tight transition-colors group-hover:text-[#b80000] sm:text-2xl">
                             Uyuşturucuya karşı çıktığı için tutuklanan 3 genç tahliye edildi
                           </h3>

                           <p className="mt-2 text-sm leading-6 text-zinc-500">
                             Uyuşturucu ticaretine karşı çıktığı için tutuklanan 3 genç,
                             yargı sürecinin ardından tahliye edildi.
                           </p>

                           <Car/>

                           <a
                             href="/malper/rojname"
                             className="mt-3 text-sm font-extrabold text-[#b80000] hover:underline"
                           >
                             Devamını Oku →
                           </a>

                         </div>

                       </div>

                     </article>


                     <article className="group overflow-hidden rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition-all hover:border-[#b80000]/30 hover:shadow-lg sm:p-5">

                       <div className="flex flex-col gap-5 md:flex-row">

                         <div className="h-52 w-full shrink-0 overflow-hidden rounded-lg bg-zinc-100 md:h-40 md:w-60">
                           <img
                             src="https://yeniyasamgazetesi9.com/wp-content/uploads/2026/08/mrd-29-08-26-nisebin-taziye-ucuncu-gun23-750x375.jpg"
                             alt="Irak'ta milletvekili mal varlıklarına el konuldu"
                             className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                           />
                         </div>

                         <div className="flex flex-1 flex-col">

                           <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#b80000]">
                             DÜNYA
                           </span>

                           <h3 className="mt-2 text-xl font-black leading-tight transition-colors group-hover:text-[#b80000] sm:text-2xl">
                             Irak'ta 12 milletvekili ve yetkilinin mal varlığına el konuldu
                           </h3>

                           <p className="mt-2 text-sm leading-6 text-zinc-500">
                             Irak Kerx Mahkemesi ve Maliye Bakanlığı, 12 eski milletvekili
                             ile eski danışmanların tüm mal varlıklarına el koydu.
                           </p>

                           <Rojnm/>

                           <a
                             href="/haberler/dunya"
                             className="mt-3 text-sm font-extrabold text-[#b80000] hover:underline"
                           >
                             Devamını Oku →
                           </a>

                         </div>

                       </div>

                     </article>

                   </div>

                 </div>


                 {/* ÇOK OKUNAN */}
                 <aside className="lg:col-span-4">

                   <div className="sticky top-5 overflow-hidden rounded-xl border border-zinc-200 bg-[#fafafa] shadow-sm">

                     <div className="border-t-4 border-[#b80000] px-5 py-5">

                       <h2 className="text-xl font-black">
                         Çok Okunan Haberler
                       </h2>

                       <p className="mt-1 text-xs text-zinc-500">
                         Okurların en çok ilgisini çeken haberler
                       </p>

                     </div>


                     <div className="divide-y divide-zinc-200">

                       <a
                         href="/haberler/1"
                         className="group flex gap-4 p-5 transition-colors hover:bg-white"
                       >
                         <span className="text-3xl font-black text-zinc-300 transition-colors group-hover:text-[#b80000]">
                           01
                         </span>

                         <div>
                           <h3 className="text-sm font-bold leading-5 group-hover:text-[#b80000]">
                             Kaya petrolü Amed'i kurutup zehirleyecek
                           </h3>

                           <span className="mt-2 block text-[9px] font-black uppercase tracking-wider text-zinc-400">
                             EN ÇOK OKUNAN
                           </span>
                         </div>
                       </a>

                       <Penc/>

                       <a
                         href="/haberler/2"
                         className="group flex gap-4 p-5 transition-colors hover:bg-white"
                       >
                         <span className="text-3xl font-black text-zinc-300 transition-colors group-hover:text-[#b80000]">
                           02
                         </span>

                         <div>
                           <h3 className="text-sm font-bold leading-5 group-hover:text-[#b80000]">
                             Murat Karayılan: Savaş koşulları nedeniyle şahadetleri zamanında açıklayamadık
                           </h3>

                           <span className="mt-2 block text-[9px] font-black uppercase tracking-wider text-zinc-400">
                             EN ÇOK OKUNAN
                           </span>
                         </div>
                       </a>

                       <a
                         href="/haberler/3"
                         className="group flex gap-4 p-5 transition-colors hover:bg-white"
                       >
                         <span className="text-3xl font-black text-zinc-300 transition-colors group-hover:text-[#b80000]">
                           03
                         </span>

                         <div>
                           <h3 className="text-sm font-bold leading-5 group-hover:text-[#b80000]">
                             IBAN üzerinden yatırım dolandırıcılığı
                           </h3>

                           <span className="mt-2 block text-[9px] font-black uppercase tracking-wider text-zinc-400">
                             EN ÇOK OKUNAN
                           </span>
                         </div>
                       </a>

                       <a
                         href="/haberler/4"
                         className="group flex gap-4 p-5 transition-colors hover:bg-white"
                       >
                         <span className="text-3xl font-black text-zinc-300 transition-colors group-hover:text-[#b80000]">
                           04
                         </span>

                         <div>
                           <h3 className="text-sm font-bold leading-5 group-hover:text-[#b80000]">
                             Entelektüel tartışması, barış ve Öcalan meselesine dair…
                           </h3>

                           <span className="mt-2 block text-[9px] font-black uppercase tracking-wider text-zinc-400">
                             EN ÇOK OKUNAN
                           </span>
                         </div>
                       </a>

                     </div>

                   </div>

                 </aside>

               </div>

             </section>


             {/* KATEGORİLER */}
             <section className="border-t border-zinc-200 bg-[#f7f7f8] px-4 py-8 sm:px-6 lg:px-8">

               <div className="mb-6 border-b-2 border-zinc-900 pb-4">

                 <div className="flex items-center gap-2">
                   <span className="h-3 w-3 rounded-sm bg-[#b80000]" />

                   <h2 className="text-2xl font-black">
                     Kategoriler
                   </h2>
                 </div>

               </div>


               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

                 <div className="group flex min-h-[210px] flex-col justify-between overflow-hidden rounded-xl bg-[#b80000] p-6 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                   <div>
                     <span className="text-[10px] font-black uppercase tracking-[0.15em] opacity-70">
                       GÜNDEM
                     </span>

                     <h3 className="mt-3 text-2xl font-black">
                       Günün Manşeti
                     </h3>
                   </div>

                   <a
                     href="/malper/car"
                     className="mt-8 text-sm font-bold underline underline-offset-4"
                   >
                     Haberleri Gör →
                   </a>

                 </div>


                 <div className="group flex min-h-[210px] flex-col justify-between overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b80000]/30 hover:shadow-xl">

                   <div>
                     <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#b80000]">
                       KADIN
                     </span>

                     <h3 className="mt-3 text-2xl font-black">
                       Kadın Haberleri
                     </h3>
                   </div>

                   <a
                     href="/malper/rojname"
                     className="mt-8 text-sm font-bold text-[#b80000] underline underline-offset-4"
                   >
                     Haberleri Gör →
                   </a>

                 </div>


                 <div className="group flex min-h-[210px] flex-col justify-between overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b80000]/30 hover:shadow-xl">

                   <div>
                     <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#b80000]">
                       KÜLTÜR
                     </span>

                     <h3 className="mt-3 text-2xl font-black">
                       Kültür & Sanat
                     </h3>

                     <div className="mt-3">
                       <Se/>
                     </div>
                   </div>

                   <a
                     href="/malper/dirok"
                     className="mt-8 text-sm font-bold text-[#b80000] underline underline-offset-4"
                   >
                     Haberleri Gör →
                   </a>

                 </div>


                 <div className="group flex min-h-[210px] flex-col justify-between overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b80000]/30 hover:shadow-xl">

                   <div>
                     <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#b80000]">
                       DÜNYA
                     </span>

                     <h3 className="mt-3 text-2xl font-black">
                       Dünya Haberleri
                     </h3>

                     <div className="mt-3">
                       <Xane/>
                     </div>
                   </div>

                   <a
                     href="/malper/se"
                     className="mt-8 text-sm font-bold text-[#b80000] underline underline-offset-4"
                   >
                     Haberleri Gör →
                   </a>

                 </div>

               </div>

             </section>


             {/* ALT BOŞLUK / FOOTER AYIRICI */}
             <div className="h-3 bg-[#18181b]" />





       </main>
     </>
   )
 }

 export default page
 // Elhamdulillah Elhamdulillah Elhamdulillah
 // Elhamdulillahirabbilalemin

 // La ilahe illALLAH u vahdehu la şerike leh, lehul-mulku ve lehu'l-hamdu.

 // Yuhyi ve yumit
 // Biyadihil xayr
 // ve huve ala kulli şey'in kadir
