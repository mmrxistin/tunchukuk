// Bismillahirahmanirahim
 // Elhamdulillahirrabbulalemin
 // Esselatu vesselamu ala seyyidina Muhammedin
 // Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illAllah
 // SubhanAllah, Elhamdulillah, Allahu Ekber
 // Allah u Ekber Ve Lillahil Hamd



// El Hamdu Lîllah ya Rabbi'l-Âlemîn, El Hamdu Lîllah yâ Rabbi'l-Âlemîn, El Hamdu Lîllah yâ Rabbi'l-Âlemîn
// La ilahe illALLAH u vahdehu la şerike leh, lehul-mulku ve lehul-hamdu
// Yuhyi ve yumit
// Biyadihil xayr
// ve huve ala kulli şey'in kadir
 import React from 'react'
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
 // La ilahe illALLAH u vahdehu la şerike leh, lehul-mulku ve lehul-hamdu.
 // Yuhyi ve yumit
 // Biyadihil xayr
 // ve huve ala kulli şey'in kadir

 // El Hamdu Lîllah ya Kerîm î Rezzaq î Vehhab î Ehed î Quddus î Heq bêdawîtî..
 function page() {
   return (
     <>
       <main className="bg-white text-[#1f1f1f]">
         <div className="container mx-auto px-4 py-8 max-w-7xl">

           {/* Beşa Perwerdehîya Îslamî */}
           <section className="mb-12">

             <div className="flex items-end justify-between border-b-4 border-[#b80000] pb-3 mb-6">
               <div>
                 <div className="flex items-center gap-2 mb-2">
                   <span className="size-3 bg-[#b80000]" />
                   <span className="text-sm font-bold uppercase tracking-wider text-[#b80000]">
                     Son Dakika
                   </span>
                 </div>

                 <h1 className="text-3xl md:text-4xl font-black tracking-tight">
                   Son Dakika Haberleri
                 </h1>

                 <p className="text-gray-600 mt-2">
                   Türkiye ve dünyadan en güncel gelişmeler
                 </p>
               </div>

               <a
                 href="/malper/yek"
                 className="hidden md:block text-[#b80000] font-bold hover:underline"
               >
                 Tüm Haberler →
               </a>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

               {/* Karta 1: Manşet */}
               <article className="lg:col-span-7 border-b border-gray-300 pb-6">
                 <div className="h-64 md:h-96 bg-gray-100 overflow-hidden mb-4">
                   <Dirok/>
                 </div>

                 <span className="text-xs font-black text-[#b80000] uppercase">
                   GÜNDEM
                 </span>

                 <h2 className="text-3xl md:text-4xl font-black leading-tight mt-2 mb-3 transition-colors hover:text-[#b80000]">
                   Nisêbîn'de anma alanına ziyaretler sürüyor
                 </h2>

                 <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                   Özgürlük mücadelesinde yaşamını yitiren gerillalar için Nisêbîn'de
                   kurulan anma alanını, üçüncü gününde çok sayıda kişinin ziyaretiyle
                   devam ediyor.
                 </p>

                 <a
                   href="/malper/du"
                   className="inline-block mt-4 text-[#b80000] font-bold hover:underline"
                 >
                   Haberin Devamını Oku →
                 </a>
               </article>

               <div className="lg:col-span-5 grid grid-cols-1 gap-5">

                 {/* Karta 1: Car */}
                 <article className="border-b border-gray-300 pb-5">
                   <div className="h-44 bg-gray-100 overflow-hidden mb-4">
                     <img
                       src="https://yeniyasamgazetesi9.com/wp-content/uploads/2026/08/mrd-29-08-26-nisebin-taziye-ucuncu-gun23-750x375.jpg"
                       alt="Nisêbîn'de anma alanına ziyaretler sürüyor"
                       className="w-full h-full object-cover"
                     />
                   </div>

                   <span className="text-xs font-black text-[#b80000]">
                     DÜNYA
                   </span>

                   <h3 className="text-2xl font-black mt-2 leading-tight transition-colors hover:text-[#b80000]">
                     Yunanistan: Türkiye İHA'sı hava sahamıza girdi
                   </h3>

                   <p className="text-gray-600 mt-2">
                     Yunanistan, Türk İHA'sının hava sahasına girdiğini iddia etti.
                   </p>
                 </article>

                 {/* Karta 2: Fıkıh */}
                 <article className="border-b border-gray-300 pb-5">
                   <div className="h-44 bg-gray-100 overflow-hidden mb-4">
                     <Du/>
                   </div>

                   <span className="text-xs font-black text-[#b80000]">
                     EKONOMİ
                   </span>

                   <h3 className="text-2xl font-black mt-2 leading-tight transition-colors hover:text-[#b80000]">
                     Maden işçileri kazandı: Buraya 3 kere geldik, direnişimiz zaferle sonuçlandı
                   </h3>

                   <p className="text-gray-600 mt-2">
                     Maden işçilerinin direnişi zaferle sonuçlandı; işçiler kazanımlarını
                     ilan etti.
                   </p>

                   <a
                     href="/malper/se"
                     className="inline-block mt-3 text-[#b80000] font-bold hover:underline"
                   >
                     Ekonomi Haberleri →
                   </a>
                 </article>

               </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-8 border-t border-gray-300">

               {/* Karta 3: Tarîxê Îslamî */}
               <article className="border-b md:border-b-0 md:border-r border-gray-300 py-6 md:pr-5">
                 <div className="h-44 bg-gray-100 overflow-hidden mb-4">
                   <img
                     src="https://yeniyasamgazetesi9.com/wp-content/uploads/2026/08/690x390cc-mrk-28-08-2028-turk-sihasi-yunanitan-havaalanina-girdi-360x180.jpg"
                     alt="Yunanistan: Türkiye İHA'sı hava sahamıza girdi"
                     className="w-full h-full object-cover"
                   />
                 </div>

                 <span className="text-xs font-black text-[#b80000]">
                   SPOR
                 </span>

                 <h3 className="text-xl font-black mt-2">
                   Gülistan Doku'nun kaybolduğu saatlerde defalarca telefon görüşmesi ortaya çıktı
                 </h3>

                 <p className="text-gray-600 mt-2">
                   Jandarma komutanının eşi B.H.K. ile Handan Sonel'in, Gülistan'ın
                   kaybolduğu saatlerde defalarca telefon görüşmesi yaptığı ortaya çıktı.
                 </p>

                 <a
                   href="/malper/car"
                   className="inline-block mt-3 text-[#b80000] font-bold hover:underline"
                 >
                   Spor Haberleri →
                 </a>
               </article>

               {/* Karta 3: Tarîxê Îslamî */}
               <article className="border-b md:border-b-0 md:border-r border-gray-300 py-6 md:px-5">
                 <div className="h-44 bg-gray-100 overflow-hidden mb-4">
                   <img
                     src="https://yeniyasamgazetesi9.com/wp-content/uploads/2026/08/823x463cc-amd-29-08-26-gulistan-doku-dosya-yeni-gelisme-350x250.jpeg"
                     alt="Gülistan Doku dosyası"
                     className="w-full h-full object-cover"
                   />
                 </div>

                 <span className="text-xs font-black text-[#b80000]">
                   KÜLTÜR & SANAT
                 </span>

                 <h3 className="text-xl font-black mt-2">
                   Edebiyatın yılmaz devrimcisi
                 </h3>

                 <p className="text-gray-600 mt-2">
                   Kültür-sanat dünyasından güncel içerikler ve özel haberler.
                 </p>

                 <a
                   href="/malper/xane"
                   className="inline-block mt-3 text-[#b80000] font-bold hover:underline"
                 >
                   Kültür Haberleri →
                 </a>
               </article>

               <article className="py-6 md:pl-5">
                 <div className="h-44 bg-gray-100 overflow-hidden mb-4">
                   <ParvekirinaYek/>
                 </div>

                 <span className="text-xs font-black text-[#b80000]">
                   EKOLOJİ
                 </span>

                 <h3 className="text-xl font-black mt-2">
                   Gîyadin'de siyanür süreci başladı!
                 </h3>

                 <p className="text-gray-600 mt-2">
                   Gîyadin'de altın madeninde siyanürle altın ayrıştırma süreci başladı;
                   bölgede ekolojik tehdit büyüyor.
                 </p>

                 <a
                   href="/malper/penc"
                   className="inline-block mt-3 text-[#b80000] font-bold hover:underline"
                 >
                   Teknoloji ve Çevre Haberleri →
                 </a>
               </article>

             </div>
           </section>

           {/* Beşa Nûvekirinên Perwerdehî */}
           <section className="mt-12">

             <div className="border-b-4 border-[#1f1f1f] pb-3 mb-6">
               <div className="flex items-center gap-2 mb-2">
                 <span className="size-3 bg-[#b80000]" />
                 <span className="text-sm font-bold text-[#b80000] uppercase">
                   Haber Akışı
                 </span>
               </div>

               <h2 className="text-2xl md:text-3xl font-black">
                 Güncel Haberler
               </h2>

               <p className="text-gray-600 mt-1">
                 Günün öne çıkan haberleri ve son dakika gelişmeleri
               </p>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

               <div className="lg:col-span-8">
                 <div className="space-y-0">

                   <article className="border-b border-gray-300 py-6 first:pt-0">
                     <div className="flex flex-col md:flex-row gap-5">

                       <div className="w-full md:w-60 h-40 bg-gray-100 overflow-hidden shrink-0">
                         <Parvekirinayekayeke/>
                       </div>

                       <div>
                         <span className="text-xs text-[#b80000] font-black">
                           GÜNCEL
                         </span>

                         <h3 className="text-2xl font-black mt-2 mb-2 leading-tight transition-colors hover:text-[#b80000]">
                           Nisêbîn'de bir kişi gözaltına alındı
                         </h3>

                         <p className="text-gray-600 leading-relaxed">
                           Hakkında yakalama kararı bulunduğu gerekçesiyle Rıdvan Aslan,
                           Nisêbîn ilçe merkezinde gözaltına alındı.
                         </p>

                         <a
                           href="/malper/penc"
                           className="inline-block mt-3 text-[#b80000] font-bold hover:underline"
                         >
                           Devamını Oku →
                         </a>
                       </div>

                     </div>
                   </article>

                   <article className="border-b border-gray-300 py-6">
                     <div className="flex flex-col md:flex-row gap-5">

                       <div className="w-full md:w-60 h-40 bg-gray-100 overflow-hidden shrink-0">
                         <img
                           src="https://yeniyasamgazetesi9.com/wp-content/uploads/2026/08/amd-29-08-2026-3genc-tahliye-350x250.jpeg"
                           alt="3 genç tahliye edildi"
                           className="w-full h-full object-cover"
                         />
                       </div>

                       <div>
                         <span className="text-xs text-[#b80000] font-black">
                           GÜNDEM
                         </span>

                         <h3 className="text-2xl font-black mt-2 mb-2 leading-tight transition-colors hover:text-[#b80000]">
                           Uyuşturucuya karşı çıktığı için tutuklanan 3 genç tahliye edildi
                         </h3>

                         <p className="text-gray-600 leading-relaxed">
                           Uyuşturucu ticaretine karşı çıktığı için tutuklanan 3 genç,
                           yargı sürecinin ardından tahliye edildi.
                         </p>

                         <Car/>

                         <a
                           href="/malper/rojname"
                           className="inline-block mt-3 text-[#b80000] font-bold hover:underline"
                         >
                           Devamını Oku →
                         </a>
                       </div>

                     </div>
                   </article>

                   <article className="border-b border-gray-300 py-6">
                     <div className="flex flex-col md:flex-row gap-5">

                       <div className="w-full md:w-60 h-40 bg-gray-100 overflow-hidden shrink-0">

                       </div>

                       <div>
                         <span className="text-xs text-[#b80000] font-black">
                           DÜNYA
                         </span>

                         <h3 className="text-2xl font-black mt-2 mb-2 leading-tight transition-colors hover:text-[#b80000]">
                           Irak'ta 12 milletvekili ve yetkilinin mal varlığına el konuldu
                         </h3>

                         <p className="text-gray-600 leading-relaxed">
                           Irak Kerx Mahkemesi ve Maliye Bakanlığı, 12 eski milletvekili
                           ile eski danışmanların tüm mal varlıklarına el koydu.
                         </p>

                         <Rojnm/>

                         <a
                           href="/haberler/dunya"
                           className="inline-block mt-3 text-[#b80000] font-bold hover:underline"
                         >
                           Devamını Oku →
                         </a>
                       </div>

                     </div>
                   </article>

                 </div>
               </div>

               <aside className="lg:col-span-4">

                 <div className="bg-[#f3f3f3] border-t-4 border-[#b80000] p-6">

                   <h2 className="text-xl font-black mb-5 border-b border-gray-300 pb-3">
                     Çok Okunan Haberler
                   </h2>

                   <div className="space-y-0">

                     <a
                       href="/haberler/1"
                       className="flex gap-4 group py-4 border-b border-gray-300"
                     >
                       <span className="text-3xl font-black text-gray-400 transition-colors group-hover:text-[#b80000]">
                         01
                       </span>

                       <div>
                         <h3 className="font-bold transition-colors group-hover:text-[#b80000]">
                           Kaya petrolü Amed'i kurutup zehirleyecek
                         </h3>

                         <span className="text-xs text-gray-500">
                           EN ÇOK OKUNAN
                         </span>
                       </div>
                     </a>

                     <Penc/>

                     <a
                       href="/haberler/2"
                       className="flex gap-4 group py-4 border-b border-gray-300"
                     >
                       <span className="text-3xl font-black text-gray-400 transition-colors group-hover:text-[#b80000]">
                         02
                       </span>

                         <div>
                           <h3 className="font-bold transition-colors group-hover:text-[#b80000]">
                             Murat Karayılan: Savaş koşulları nedeniyle şahadetleri zamanında açıklayamadık
                           </h3>

                           <span className="text-xs text-gray-500">
                             EN ÇOK OKUNAN
                           </span>
                         </div>
                       </a>

                     <a
                       href="/haberler/3"
                       className="flex gap-4 group py-4 border-b border-gray-300"
                     >
                       <span className="text-3xl font-black text-gray-400 transition-colors group-hover:text-[#b80000]">
                         03
                       </span>

                         <div>
                           <h3 className="font-bold transition-colors group-hover:text-[#b80000]">
                             IBAN üzerinden yatırım dolandırıcılığı
                           </h3>

                           <span className="text-xs text-gray-500">
                             EN ÇOK OKUNAN
                           </span>
                         </div>
                       </a>

                     <a
                       href="/haberler/4"
                       className="flex gap-4 group py-4"
                     >
                       <span className="text-3xl font-black text-gray-400 transition-colors group-hover:text-[#b80000]">
                         04
                       </span>

                         <div>
                           <h3 className="font-bold transition-colors group-hover:text-[#b80000]">
                             Entelektüel tartışması, barış ve Öcalan meselesine dair…
                           </h3>

                           <span className="text-xs text-gray-500">
                             EN ÇOK OKUNAN
                           </span>
                         </div>
                       </a>

                   </div>
                 </div>

               </aside>

             </div>
           </section>

           <section className="mt-12">

             <div className="border-b-4 border-[#1f1f1f] pb-3 mb-6">
               <h2 className="text-2xl font-black">
                 Kategoriler
               </h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-300">

               <div className="bg-[#b80000] text-white p-6 transition-colors hover:bg-[#990000]">
                 <span className="text-xs font-bold opacity-80">
                   GÜNDEM
                 </span>

                 <h3 className="text-2xl font-black mt-2">
                   Günün Manşeti
                 </h3>

                 <a
                   href="/malper/car"
                   className="inline-block mt-6 font-bold underline"
                 >
                   Haberleri Gör →
                 </a>
               </div>

               <div className="bg-[#f3f3f3] text-[#1f1f1f] border-t md:border-t-0 md:border-l border-gray-300 p-6 transition-colors hover:bg-gray-200">
                 <span className="text-xs font-bold text-[#b80000]">
                   KADIN
                 </span>

                 <h3 className="text-2xl font-black mt-2">
                   Kadın Haberleri
                 </h3>

                 <a
                   href="/malper/rojname"
                   className="inline-block mt-6 text-[#b80000] font-bold underline"
                 >
                   Haberleri Gör →
                 </a>
               </div>

               <div className="bg-[#f3f3f3] text-[#1f1f1f] border-t md:border-t-0 md:border-l border-gray-300 p-6 transition-colors hover:bg-gray-200">
                 <span className="text-xs font-bold text-[#b80000]">
                   KÜLTÜR
                 </span>

                 <h3 className="text-2xl font-black mt-2">
                   Kültür & Sanat
                 </h3>

                 <Se/>

                 <a
                   href="/malper/dirok"
                   className="inline-block mt-6 text-[#b80000] font-bold underline"
                 >
                   Haberleri Gör →
                 </a>
               </div>

               <div className="bg-[#f3f3f3] text-[#1f1f1f] border-t md:border-t-0 md:border-l border-gray-300 p-6 transition-colors hover:bg-gray-200">
                 <span className="text-xs font-bold text-[#b80000]">
                   DÜNYA
                 </span>

                 <h3 className="text-2xl font-black mt-2">
                   Dünya Haberleri
                 </h3>

                 <Xane/>

                 <a
                   href="/malper/se"
                   className="inline-block mt-6 text-[#b80000] font-bold underline"
                 >
                   Haberleri Gör →
                 </a>
               </div>

             </div>
           </section>

         </div>
       </main>
     </>
   )
 }

 export default page
 // Elhamdulillah Elhamdulillah Elhamdulillah
 // Elhamdulillahirabbilalemin

 // La ilahe illALLAH u vahdehu la şerike leh, lehul-mulku ve lehul-hamdu
 // Yuhyi ve yumit
 // Biyadihil xayr
 // ve huve ala kulli şey'in kadir