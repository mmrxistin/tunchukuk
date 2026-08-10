// Bismillahirahmanirahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illAllah
// SubhanAllah, Elhamdulillah, Allahu Ekber
// Allah u Ekber Ve Lillahil Hamd
import React from 'react'
import ParvekirinaAgahi from './agahi/parvekirin'
import ParvekirinaMeal from './agahi/meal/parvekirin'
import ParvekirinaTefsir from './agahi/tefsir/parvekirin'
import Hedis from './hedis/parvekirin'
import Rojnm from './rojname/ForYouFeed'
import Dirok from './dirok/ForYouFeed'
import Kelam from './kelam/ForYouFeed'
import Dua from './dua/ForYouFeed'
import Fiqih from './fiqih/parvekirin'
import Xane from './xane/ForYouFeed'

function page() {
  return (
    <>
      <main className="container mx-auto px-4 py-8">

        {/* Beşa Perwerdehîya Îslamî */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Son Dakika Haberleri
              </h1>
              <p className="text-gray-600 mt-2">
                Türkiye ve dünyadan en güncel gelişmeler
              </p>
            </div>

            <a
              href="/haberler"
              className="hidden md:block text-blue-600 hover:text-blue-800 font-medium"
            >
              Tüm Haberler →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Karta 1: */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100 hover:shadow-xl transition">
              <div className="h-48 bg-gray-200">
             <Hedis/>
              </div>

              <div className="p-6">
                <span className="text-sm font-semibold text-red-600">
                  GÜNDEM
                </span>

                <h3 className="text-xl font-bold mt-2 mb-3">
                  Türkiye'den güncel gelişmeler ve son dakika haberleri
                </h3>

                <p className="text-gray-600">
                  Ülke gündeminde yaşanan son gelişmeler, önemli açıklamalar
                  ve güncel haberler burada.
                </p>
                  <Dirok/>
                <a
                  href="/haberler/gundem"
                  className="text-blue-600 hover:underline mt-4 block font-medium"
                >
                  Haberin Devamını Oku →
                </a>
              </div>
            </div>

            {/* Karta 1: Kelam */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100 hover:shadow-xl transition">
              <div className="h-48 bg-gray-200">
                <img
                  src="/images/haber-dunya.jpg"
                  alt="Dünya haberleri"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <span className="text-sm font-semibold text-blue-600">
                  DÜNYA
                </span>

                <h3 className="text-xl font-bold mt-2 mb-3">
                  Dünyadan son gelişmeler ve önemli haberler
                </h3>

                <p className="text-gray-600">
                  Dünyada yaşanan siyasi, ekonomik ve toplumsal gelişmeleri
                  yakından takip edin.
                </p>

                <a
                  href="/haberler/dunya"
                  className="text-blue-600 hover:underline mt-4 block font-medium"
                >
                  Haberin Devamını Oku →
                </a>
              </div>
            </div>

            {/* Karta 2: Fıkıh */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100 hover:shadow-xl transition">
              <div className="h-48 bg-gray-200">
                <img
                  src="/images/haber-ekonomi.jpg"
                  alt="Ekonomi haberleri"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <span className="text-sm font-semibold text-green-600">
                  EKONOMİ
                </span>

                <h3 className="text-xl font-bold mt-2 mb-3">
                  Ekonomiden güncel veriler ve son gelişmeler
                </h3>

                <p className="text-gray-600">
                  Piyasalar, döviz, altın, finans ve ekonomi dünyasından
                  önemli gelişmeler.
                </p>

                <a
                  href="/haberler/ekonomi"
                  className="text-blue-600 hover:underline mt-4 block font-medium"
                >
                  Ekonomi Haberleri →
                </a>
              </div>
            </div>

            {/* Karta 3: Tarîxê Îslamî */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100 hover:shadow-xl transition">
              <div className="h-48 bg-gray-200">
                <img
                  src="/images/haber-spor.jpg"
                  alt="Spor haberleri"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <span className="text-sm font-semibold text-orange-600">
                  SPOR
                </span>

                <h3 className="text-xl font-bold mt-2 mb-3">
                  Spor dünyasından son dakika gelişmeleri
                </h3>

                <p className="text-gray-600">
                  Futbol, basketbol ve diğer spor dallarından maç sonuçları,
                  transferler ve son dakika haberleri.
                </p>

                <a
                  href="/haberler/spor"
                  className="text-blue-600 hover:underline mt-4 block font-medium"
                >
                  Spor Haberleri →
                </a>
              </div>
            </div>

            {/* Karta 3: Tarîxê Îslamî */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100 hover:shadow-xl transition">
              <div className="h-48 bg-gray-200">
                <img
                  src="/images/haber-kultur.jpg"
                  alt="Kültür ve sanat haberleri"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <span className="text-sm font-semibold text-purple-600">
                  KÜLTÜR & SANAT
                </span>

                <h3 className="text-xl font-bold mt-2 mb-3">
                  Kültür, sanat ve yaşamdan haberler
                </h3>

                <p className="text-gray-600">
                  Kültür, sanat, kitap, sinema, etkinlikler ve yaşam
                  dünyasından güncel içerikler.
                </p>

                <a
                  href="/haberler/kultur-sanat"
                  className="text-blue-600 hover:underline mt-4 block font-medium"
                >
                  Kültür Haberleri →
                </a>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100 hover:shadow-xl transition">
              <div className="h-48 bg-gray-200">
               <ParvekirinaAgahi/>
              </div>

              <div className="p-6">
                <span className="text-sm font-semibold text-cyan-600">
                  TEKNOLOJİ
                </span>

                <h3 className="text-xl font-bold mt-2 mb-3">
                  Teknoloji dünyasından yeni gelişmeler
                </h3>

                <p className="text-gray-600">
                  Teknoloji, yapay zekâ, internet, mobil cihazlar ve dijital
                  dünyadaki son gelişmeler.
                </p>

                <a
                  href="/haberler/teknoloji"
                  className="text-blue-600 hover:underline mt-4 block font-medium"
                >
                  Teknoloji Haberleri →
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Beşa Nûvekirinên Perwerdehî */}
        <section className="mt-10">
          <div className="border-b border-gray-200 pb-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Güncel Haberler
            </h2>
            <p className="text-gray-600 mt-1">
              Günün öne çıkan haberleri ve son dakika gelişmeleri
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            <div className="lg:col-span-2">
              <div className="space-y-4">

                <article className="bg-white border border-gray-100 rounded-lg p-5 shadow-sm hover:shadow-md transition">
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="w-full md:w-56 h-36 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                     <ParvekirinaMeal/>
                    </div>

                    <div>
                      <span className="text-sm text-red-600 font-semibold">
                        SON DAKİKA
                      </span>

                      <h3 className="text-xl font-bold mt-2 mb-2">
                        Günün öne çıkan gelişmeleri ve son dakika haberleri
                      </h3>

                      <p className="text-gray-600">
                        Türkiye ve dünyadan gün içerisinde yaşanan önemli
                        gelişmelerin detayları.
                      </p>

                      <a
                        href="/haberler/son-dakika"
                        className="inline-block mt-3 text-blue-600 font-medium hover:underline"
                      >
                        Devamını Oku →
                      </a>
                    </div>
                  </div>
                </article>

                <article className="bg-white border border-gray-100 rounded-lg p-5 shadow-sm hover:shadow-md transition">
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="w-full md:w-56 h-36 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src="/images/haber-2.jpg"
                        alt="Gündem haberi"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <span className="text-sm text-blue-600 font-semibold">
                        GÜNDEM
                      </span>

                      <h3 className="text-xl font-bold mt-2 mb-2">
                        Gündemin nabzını tutan önemli gelişmeler
                      </h3>

                      <p className="text-gray-600">
                        Ülke gündemindeki gelişmeler, açıklamalar ve kamuoyunu
                        ilgilendiren haberler.
                      </p>
<Kelam/>
                      <a
                        href="/haberler/gundem"
                        className="inline-block mt-3 text-blue-600 font-medium hover:underline"
                      >
                        Devamını Oku →
                      </a>
                    </div>
                  </div>
                </article>

                <article className="bg-white border border-gray-100 rounded-lg p-5 shadow-sm hover:shadow-md transition">
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="w-full md:w-56 h-36 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                   <ParvekirinaTefsir/>
                    </div>

                    <div>
                      <span className="text-sm text-green-600 font-semibold">
                        DÜNYA
                      </span>

                      <h3 className="text-xl font-bold mt-2 mb-2">
                        Dünyada yaşanan son gelişmeler
                      </h3>

                      <p className="text-gray-600">
                        Uluslararası gündemde öne çıkan gelişmeler ve son
                        dakika haberleri.
                      </p>

                     <Rojnm/>
                        Devamını Oku →
                      
                    </div>
                  </div>
                </article>

              </div>
            </div>

            <aside className="bg-gray-50 rounded-lg p-6 h-fit">
              <h2 className="text-xl font-bold mb-5 border-b pb-3">
                Çok Okunan Haberler
              </h2>

              <div className="space-y-5">

                <a
                  href="/haberler/1"
                  className="flex gap-4 group"
                >
                  <span className="text-3xl font-bold text-gray-300 group-hover:text-blue-500">
                    01
                  </span>

                  <div>
                    <h3 className="font-semibold group-hover:text-blue-600 transition">
                      Günün en çok okunan haberleri
                    </h3>

                    <span className="text-sm text-gray-500">
                      5 dakika önce
                    </span>
                  </div>
                </a>
<Dua/>
                <a
                  href="/haberler/2"
                  className="flex gap-4 group"
                >
                  <span className="text-3xl font-bold text-gray-300 group-hover:text-blue-500">
                    02
                  </span>

                  <div>
                    <h3 className="font-semibold group-hover:text-blue-600 transition">
                      Gündemde büyük yankı uyandıran gelişme
                    </h3>

                    <span className="text-sm text-gray-500">
                      15 dakika önce
                    </span>
                  </div>
                </a>

                <a
                  href="/haberler/3"
                  className="flex gap-4 group"
                >
                  <span className="text-3xl font-bold text-gray-300 group-hover:text-blue-500">
                    03
                  </span>

                  <div>
                    <h3 className="font-semibold group-hover:text-blue-600 transition">
                      Ekonomide günün önemli gelişmeleri
                    </h3>

                    <span className="text-sm text-gray-500">
                      30 dakika önce
                    </span>
                  </div>
                </a>

                <a
                  href="/haberler/4"
                  className="flex gap-4 group"
                >
                  <span className="text-3xl font-bold text-gray-300 group-hover:text-blue-500">
                    04
                  </span>

                  <div>
                    <h3 className="font-semibold group-hover:text-blue-600 transition">
                      Spor dünyasında son dakika
                    </h3>

                    <span className="text-sm text-gray-500">
                      45 dakika önce
                    </span>
                  </div>
                </a>

              </div>
            </aside>

          </div>
        </section>

        <section className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-blue-600 text-white rounded-lg p-6">
              <span className="text-sm opacity-80">
                GÜNDEM
              </span>
              <h3 className="text-xl font-bold mt-2">
                Türkiye Gündemi
              </h3>
              <a
                href="/haberler/gundem"
                className="inline-block mt-4 text-white underline"
              >
                Haberleri Gör →
              </a>
            </div>

            <div className="bg-green-600 text-white rounded-lg p-6">
              <span className="text-sm opacity-80">
                EKONOMİ
              </span>
              <h3 className="text-xl font-bold mt-2">
                Ekonomi Haberleri
              </h3>
              <a
                href="/haberler/ekonomi"
                className="inline-block mt-4 text-white underline"
              >
                Haberleri Gör →
              </a>
            </div>

            <div className="bg-orange-500 text-white rounded-lg p-6">
              <span className="text-sm opacity-80">
                SPOR
              </span>
              <h3 className="text-xl font-bold mt-2">
                Spor Haberleri
              </h3> <Fiqih/>  
              <a
                href="/haberler/spor"
                className="inline-block mt-4 text-white underline"
              >
               
                Haberleri Gör →
              </a>
            </div>

            <div className="bg-purple-600 text-white rounded-lg p-6">
              <span className="text-sm opacity-80">
                DÜNYA
              </span>
              <h3 className="text-xl font-bold mt-2">
                Dünya Haberleri
              </h3>

              <Xane/>
              <a
                href="/haberler/dunya"
                className="inline-block mt-4 text-white underline"
              >
                Haberleri Gör →
              </a>
            </div>

          </div>
        </section>

        

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