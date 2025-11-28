// Bismillahirahmanirahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// La ilahe illallah, Muhammeden Abdühü ve Resulühü
// ELHAMDULILLAHİRABBİL'ALAMİN
// Sübhanallah ve bihamdihi, Sübhanallahil-Azim
// La ilahe illallah, Allahu Ekber, Allahu Ekber ve lillahil-hamd
// Bismillahirahmanirahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allahu Ekber, Allahu Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// La ilahe illallah, Muhammedur Resulullah

import React from 'react'
import ContactForm from './components/mmfrm'

function page() {
  return (
    <main className="flex-grow container mx-auto py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Tunç Hukuk Bürosu</h1>
        <p className="text-gray-600 mt-2">
          Müvekkillerimize Ceza Hukuku, Aile Hukuku, Ticaret Hukuku, İş Hukuku ve Bilişim Hukuku alanlarında profesyonel avukatlık ve danışmanlık hizmeti sunuyoruz.
        </p>
      </header>

      {/* Hizmetler */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Ceza Hukuku */}
        <article className="bg-white shadow rounded-lg p-6">
          <img
            src="https://images.unsplash.com/photo-1555371364-2d9b024f0be8?auto=format&fit=crop&w=400&q=80"
            alt="Ceza Hukuku"
            className="w-full h-40 object-cover rounded mb-4"
          />
          <h3 className="text-xl font-semibold">Ceza Hukuku</h3>
          <p className="text-gray-600 mt-2">
            Soruşturma ve kovuşturma süreçlerinde profesyonel avukatlık hizmeti.
          </p>
          <a href="/iletisim?konu=ceza" className="text-blue-600 mt-4 inline-block">
            Detaylı Bilgi
          </a>
        </article>

        {/* Aile Hukuku */}
        <article className="bg-white shadow rounded-lg p-6">
          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=400&q=80"
            alt="Aile Hukuku"
            className="w-full h-40 object-cover rounded mb-4"
          />
          <h3 className="text-xl font-semibold">Aile Hukuku</h3>
          <p className="text-gray-600 mt-2">
            Boşanma, velayet, nafaka ve aile hukuku süreçlerinde uzman destek.
          </p>
          <a href="/iletisim?konu=aile" className="text-blue-600 mt-4 inline-block">
            Detaylı Bilgi
          </a>
        </article>

        {/* Ticaret Hukuku */}
        <article className="bg-white shadow rounded-lg p-6">
          <img
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80"
            alt="Ticaret Hukuku"
            className="w-full h-40 object-cover rounded mb-4"
          />
          <h3 className="text-xl font-semibold">Ticaret Hukuku</h3>
          <p className="text-gray-600 mt-2">
            Şirket kuruluşları, sözleşmeler, ticari uyuşmazlık çözümü.
          </p>
          <a href="/iletisim?konu=ticaret" className="text-blue-600 mt-4 inline-block">
            Detaylı Bilgi
          </a>
        </article>

      </section>

      {/* Bilgi & İletişim */}
      <section className="mt-10 bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-3">Bilgilendirme</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Hukuki değerlendirme için ilk ön görüşme ücretsizdir.</li>
          <li>Randevular hafta içi 09:00 – 18:00 arasındadır.</li>
          <li>Dosya durumuna göre süreç tamamen şeffaf şekilde iletilir.</li>
        </ul>

        <div id="contact" className="mt-6">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}

export default page
