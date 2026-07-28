// Bismillahirahmanirahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin 
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// La ilahe illallah, Muhammedur Resulullah
// Bismillahirrahmanirrahim
// Elhamdulillahirabbilalemin
// Esselatu vesselamu ala seyyidina Muhammedin 
// Subhanallah, Elhamdulillah, Allahu Ekber
// La ilahe illallah, Muhammedur Resulullah

import React from 'react'
import Image from 'next/image'

function Page() {
  return (
    <main className="flex-grow container mx-auto py-10">
      {/* Başlık / Hero */}
      <section className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-2">Eroğlu Kadın Derneği — Topluluk, Eğitim, Destek</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Kadınların güçlenmesi için eğitim, meslek edindirme ve toplumsal destek programları sunuyoruz. Dayanışma ve sürdürülebilir projelerle yanınızdayız.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="/malper" className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition">Teklif Al</a>
          <a href="/malper/parvekirin" className="bg-white border border-gray-200 text-gray-700 px-5 py-2 rounded-md hover:shadow transition">Projelerimize Bak</a>
        </div>
      </section>

      {/* Hizmetler Detaylı */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Hizmetlerimiz</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Eğitim & Atölye</h3>
            <p className="text-gray-600 mb-3">Kadınlara yönelik mesleki eğitimler, el becerileri atölyeleri ve kişisel gelişim programları düzenliyoruz.</p>
            <ul className="text-gray-600 list-disc pl-5 space-y-1">
              <li>Meslek edindirme kursları</li>
              <li>Kariyer ve girişimcilik atölyeleri</li>
              <li>Kişisel gelişim seminerleri</li>
            </ul>
          </article>

          <article className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Destek & Danışmanlık</h3>
            <p className="text-gray-600 mb-3">Psikososyal destek, hukuki danışmanlık ve rehberlik hizmetleriyle yanınızdayız.</p>
            <ul className="text-gray-600 list-disc pl-5 space-y-1">
              <li>Bireysel danışmanlık</li>
              <li>Grupla destek oturumları</li>
              <li>Hukuki yönlendirme</li>
            </ul>
          </article>

          <article className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Girişimcilik & Meslek Edindirme</h3>
            <p className="text-gray-600 mb-3">Kendi işini kurmak isteyen kadınlara eğitim, mentorluk ve mikro-hibe destekleri sağlıyoruz.</p>
            <ul className="text-gray-600 list-disc pl-5 space-y-1">
              <li>İş planı ve finansal eğitim</li>
              <li>Mentorluk programları</li>
              <li>Mikro-hibe ve destek yönlendirmesi</li>
            </ul>
          </article>

          <article className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Sağlık & Danışmanlık</h3>
            <p className="text-gray-600 mb-3">Sağlık bilgilendirmesi, tarama etkinlikleri ve yönlendirme hizmetleri sunuyoruz.</p>
            <ul className="text-gray-600 list-disc pl-5 space-y-1">
              <li>Sağlık tarama etkinlikleri</li>
              <li>Doğum ve anne-çocuk desteği</li>
              <li>Sağlık bilgilendirme seminerleri</li>
            </ul>
          </article>

          <article className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Sosyal Projeler & Etkinlikler</h3>
            <p className="text-gray-600 mb-3">Topluluk etkinlikleri, farkındalık kampanyaları ve ortak projelerle toplumsal etki yaratıyoruz.</p>
            <ul className="text-gray-600 list-disc pl-5 space-y-1">
              <li>Atölye ve seminer organizasyonu</li>
              <li>Farkındalık kampanyaları</li>
              <li>Topluluk buluşmaları</li>
            </ul>
          </article>

          <article className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Mentorluk & Rehberlik</h3>
            <p className="text-gray-600 mb-3">Bireysel kariyer rehberliği, eğitim planlaması ve topluluk temelli mentorluk programları sunuyoruz.</p>
            <ul className="text-gray-600 list-disc pl-5 space-y-1">
              <li>Kariyer koçluğu</li>
              <li>Eğitim planlama desteği</li>
              <li>Mentorluk eşleştirmesi</li>
            </ul>
          </article>

          <article className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Topluluk Proje Yönetimi</h3>
            <p className="text-gray-600 mb-3">Projelerin planlanması, kaynak yönetimi ve uygulama desteği ile topluluk tabanlı programlar yürütüyoruz.</p>
            <ul className="text-gray-600 list-disc pl-5 space-y-1">
              <li>Proje planlama ve koordinasyon</li>
              <li>Kaynak ve bütçe yönetimi</li>
              <li>Değerlendirme ve sürdürülebilirlik</li>
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
     
  
      <section className="text-center mb-12">
        <h3 className="text-xl font-semibold mb-2">Teklif almak için bizimle iletişime geçin</h3>
        <p className="text-gray-600 mb-4">Projeyi anlatın, ücretsiz keşif ve fiyatlandırma alın.</p>
        <div className="flex justify-center gap-3">
          <a href="" className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">Hemen İletişime Geç</a>
          <a href="mailto:info@eroglukadindernegi.local" className="bg-white border border-gray-200 text-gray-700 px-6 py-2 rounded-md hover:shadow transition">E-posta Gönder</a>
        </div>
      </section>
    </main>
  )
}

export default Page
