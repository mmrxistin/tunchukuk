// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim


import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <main className="container mx-auto py-10">
      {/* Hero */}
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-700">Eroğlu İnşaat</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-3">
          Konut ve ticari projelerde anahtar teslim inşaat, tadilat ve restorasyon hizmetleri. Güven, kalite ve zamanında teslim ilkelerimizdir.
        </p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-3">Hakkımızda</h2>
          <p className="text-gray-700 mb-4">
            Eroğlu İnşaat, yılların tecrübesiyle konut ve ticari alanlarda kapsamlı inşaat ve tadilat çözümleri sunar. Müşteri odaklı yaklaşımımız ile projeleri en iyi malzeme ve işçilikle tamamlıyoruz. Her proje bizim için ayrı bir sorumluluk ve imza niteliğindedir.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Misyonumuz</h3>
          <p className="text-gray-700 mb-3">
            Müşterilerimize güvenilir, sürdürülebilir ve estetik çözümler sunmak; projeleri bütçe ve zamanda taahhüt ettiğimiz şekilde teslim etmektir.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Vizyonumuz</h3>
          <p className="text-gray-700 mb-3">
            Bölgesel olarak tercih edilen bir inşaat firması olmak; yenilikçi teknikler ve sürdürülebilir uygulamalarla sektörde örnek teşkil etmektir.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Değerlerimiz</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Kalite ve dürüstlük</li>
            <li>Zamanında teslim</li>
            <li>Müşteri memnuniyeti</li>
            <li>İşçi güvenliği ve sürdürülebilirlik</li>
          </ul>
        </div>

        <aside className="bg-gray-50 p-4 rounded-lg">
          <div className="mb-4">
            <h4 className="font-semibold">Kısa Bilgiler</h4>
            <ul className="text-gray-700 text-sm mt-2 space-y-1">
              <li>Kuruluş: 2005</li>
              <li>Hizmet Alanı: Konut, Ticari, Restorasyon</li>
              <li>Çalışan Sayısı: 50+</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">İletişim</h4>
            <p className="text-sm text-gray-700">Telefon: {process.env.NEXT_PUBLIC_PHONE ?? '—'}</p>
            <p className="text-sm text-gray-700">E-posta: info@erogluinsaat.local</p>
            <a href="/malper/iletisim" className="inline-block mt-3 bg-green-600 text-white px-4 py-2 rounded">İletişime Geç</a>
          </div>
        </aside>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Ekibimiz</h2>
        <p className="text-gray-700 mb-4">
          Uzman ekiplerimizde inşaat mühendisleri, ustalar ve proje yöneticileri yer alır. Her proje için uygun ekip kurulur ve detaylı iş programı ile ilerlenir.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex gap-4 items-center bg-white p-4 rounded-lg shadow">
            <Image src="/assets/ceo.jpg" alt="Omer Eroğlu" width={80} height={80} className="rounded-full" />
            <div>
              <div className="font-semibold">Omer Eroğlu</div>
              <div className="text-sm text-gray-600">CEO</div>
            </div>
          </div>

          <div className="flex gap-4 items-center bg-white p-4 rounded-lg shadow">
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">U</div>
            <div>
              <div className="font-semibold">Ekip Üyesi</div>
              <div className="text-sm text-gray-600">Proje Yöneticisi</div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center py-8">
        <h3 className="text-xl font-semibold mb-3">Projelerimiz hakkında konuşalım</h3>
        <p className="text-gray-700 mb-4">Projeni anlat, ücretsiz keşif ve teklif al.</p>
        <a href="/malper/mmwesayit" className="bg-green-600 text-white px-6 py-2 rounded">Teklif Al</a>
      </section>
    </main>
  )
}