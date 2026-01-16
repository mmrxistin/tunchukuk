// Bismillahirahmanirahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// La ilahe illallah, Muhammedur Resulullah
// Bismillahirrahmanirrahim
// Elhamdulillahirabbilalemin
// Esselatu vesselamu ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Subhanallah, Elhamdulillah, Allahu Ekber
// La ilahe illallah, Muhammedur Resulullah

import React from 'react'
import Image from 'next/image'

function Page() {
  return (
    <main className="flex-grow container mx-auto py-10">
      {/* Başlık / Hero */}
      <section className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-2">Eroğlu İnşaat — Sıva, Boya, Tadilat</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Konut ve ticari mekanlarda anahtar teslim tadilat, iç-dış sıva, boya, elektrik ve sıhhi tesisat işlerinizde güvenilir çözüm.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="/malper/mmwesayit" className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition">Teklif Al</a>
          <a href="/malper/mmavahi" className="bg-white border border-gray-200 text-gray-700 px-5 py-2 rounded-md hover:shadow transition">Projelerimize Bak</a>
        </div>
      </section>

      {/* Hizmetler Detaylı */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Hizmetlerimiz</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Sıva & Dış Cephe</h3>
            <p className="text-gray-600 mb-3">İç ve dış cephe sıva işleri; beton, brüt ve eski yüzey tadilatları. Kaliteli işçilik ve uzun ömürlü uygulama.</p>
            <ul className="text-gray-600 list-disc pl-5 space-y-1">
              <li>Manuel ve makine sıva</li>
              <li>Yüzey onarımı ve priz kontrolü</li>
              <li>Dış cephe tamiri</li>
            </ul>
          </article>

          <article className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Boya & Kaplama</h3>
            <p className="text-gray-600 mb-3">İç ve dış mekan boya işlerinizde geniş havuzlu renk seçenekleri, su bazlı ve solvent bazlı uygulamalar.</p>
            <ul className="text-gray-600 list-disc pl-5 space-y-1">
              <li>İç cephe boya (mat/satin)</li>
              <li>Dış cephe akrilik/ silikonlu kaplamalar</li>
              <li>Astarlama, dolgu ve son kat uygulama</li>
            </ul>
          </article>

          <article className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Elektrik & Sıhhi Tesisat</h3>
            <p className="text-gray-600 mb-3">Güvenlik ve standartlara uygun elektrik tesisatı, aydınlatma, priz, pano işleri ve su tesisatı montajı.</p>
            <ul className="text-gray-600 list-disc pl-5 space-y-1">
              <li>Vector/keystone pano kurulumu</li>
              <li>Banyo ve mutfak tesisat montajı</li>
              <li>Kaçağa karşı test ve garanti</li>
            </ul>
          </article>

          <article className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Fayans, Seramik & Zemin</h3>
            <p className="text-gray-600 mb-3">Profesyonel ölçü, seramik ve fayans döşeme; ısıtmalı zemin uygulamaları dahil.</p>
            <ul className="text-gray-600 list-disc pl-5 space-y-1">
              <li>Banyo/mutfak seramik döşeme</li>
              <li>Merdiven ve dış mekan kaplamaları</li>
              <li>Derz dolgu ve su izolasyonu</li>
            </ul>
          </article>

          <article className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Çatı & İzolasyon</h3>
            <p className="text-gray-600 mb-3">Çatı onarımı, izolasyon ve yağmur suyu drenaj sistemleriyle yapınızı koruyoruz.</p>
            <ul className="text-gray-600 list-disc pl-5 space-y-1">
              <li>Membran ve örtü onarımı</li>
              <li>Isı ve su izolasyon uygulamaları</li>
              <li>Çatı kaplama ve baca onarımı</li>
            </ul>
          </article>

          <article className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Kapı, Pencere & Montaj</h3>
            <p className="text-gray-600 mb-3">PVC, ahşap ve alüminyum doğrama işleri; montaj, değiştirme ve akıllı kilit uygulamaları.</p>
            <ul className="text-gray-600 list-disc pl-5 space-y-1">
              <li>Ölçü ve montaj</li>
              <li>Cam ve izolasyon uygulamaları</li>
              <li>İç kapı ve güvenlik kapıları</li>
            </ul>
          </article>

          <article className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Anahtar Teslim Yapım & Tadilat</h3>
            <p className="text-gray-600 mb-3">Proje yönetimi, malzeme temini ve süre yönetimiyle anahtar teslim çözümler.</p>
            <ul className="text-gray-600 list-disc pl-5 space-y-1">
              <li>Projelendirme ve iş programı</li>
              <li>Malzeme seçimi ve temini</li>
              <li>Teslim sonrası garanti ve bakım</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Neden bizi seçmelisiniz */}
      <section className="mb-8 bg-gray-50 rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-3">Neden Eroğlu?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold">Tecrübe</h4>
            <p className="text-gray-600">Yılların getirdiği deneyimle kaliteli işçilik.</p>
          </div>
          <div>
            <h4 className="font-semibold">Garanti</h4>
            <p className="text-gray-600">Yapılan işlerde malzeme ve işçilik garantisi.</p>
          </div>
          <div>
            <h4 className="font-semibold">Zamanında Teslim</h4>
            <p className="text-gray-600">Program odaklı çalışma ve şeffaf iletişim.</p>
          </div>
        </div>
      </section>

      {/* Referans / İletişim CTA */}
      {/* CEO Profile */}
      <section className="mb-8">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6 flex items-center gap-6">
          <Image src="/assets/ceo.jpg" alt="CEO" width={112} height={112} className="rounded-full border" />
          <div>
            <h3 className="text-2xl font-semibold">Mehmet Eroğlu</h3>
            <p className="text-sm text-gray-500 mb-2">CEO — Eroğlu İnşaat</p>
            <p className="text-gray-600">Yapı ve tadilat sektöründe 20+ yıllık tecrübe ile projeleri yönetiyor; kalite, zamanında teslim ve müşteri memnuniyetini ön planda tutuyor.</p>
            <div className="mt-3 flex gap-3">
              <a href="mailto:info@erogluinsaat.local" className="text-sm text-green-600 hover:underline">E-posta Gönder</a>
              {process.env.NEXT_PUBLIC_PHONE ? (
                <a href={`tel:${process.env.NEXT_PUBLIC_PHONE}`} className="text-sm text-blue-600 hover:underline">{process.env.NEXT_PUBLIC_PHONE}</a>
              ) : null}
            </div>
          </div>
        </div>
      </section>
      <section className="text-center mb-12">
        <h3 className="text-xl font-semibold mb-2">Teklif almak için bizimle iletişime geçin</h3>
        <p className="text-gray-600 mb-4">Projeyi anlatın, ücretsiz keşif ve fiyatlandırma alın.</p>
        <div className="flex justify-center gap-3">
          <a href="/malper/mmwesayit" className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">Hemen İletişime Geç</a>
          <a href="mailto:info@erogluinsaat.local" className="bg-white border border-gray-200 text-gray-700 px-6 py-2 rounded-md hover:shadow transition">E-posta Gönder</a>
        </div>
      </section>
    </main>
  )
}

export default Page
