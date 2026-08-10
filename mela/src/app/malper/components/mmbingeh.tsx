
// Bismillahirrahmanirrahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin 
// Subhanallah, Elhamdulillah, Allahu Ekber
// La ilahe illAllah u vahdehu la şerike leh, lehul-mulku ve lehul-hamdu.Y ve huve ala kulli şey'in kadir
// Allahu Ekber, Allahu Ekber, Allahu Ekber, La ilahe illallah
// Bila Allah Azze ve Celle me ji sunneta Resulullah Muhammed (s.a.v) neqetine, amin rabbal alemin
// Xeyni Allah tu Xweda tune
import React from "react";

const Footer = () => (
  <footer className="bg-gray-950 text-white mt-12">

    <div className="container mx-auto px-4 py-10">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Links Section */}
        <div className="mb-4">
          <h5 className="text-lg font-bold border-b border-red-600 pb-3 mb-4">
            Gazetemiz
          </h5>

          <ul className="space-y-3 list-none p-0 m-0">
            <li>
              <a
                href="/"
                className="text-gray-300 hover:text-white transition"
              >
                Ana Sayfa
              </a>
            </li>

            <li>
              <a
                href="/haberler"
                className="text-gray-300 hover:text-white transition"
              >
                Tüm Haberler
              </a>
            </li>

            <li>
              <a
                href="/son-dakika"
                className="text-gray-300 hover:text-white transition"
              >
                Son Dakika
              </a>
            </li>

            <li>
              <a
                href="/hakkimizda"
                className="text-gray-300 hover:text-white transition"
              >
                Hakkımızda
              </a>
            </li>

            <li>
              <a
                href="/iletisim"
                className="text-gray-300 hover:text-white transition"
              >
                İletişim
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="mb-4">
          <h5 className="text-lg font-bold border-b border-red-600 pb-3 mb-4">
            Haber Kategorileri
          </h5>

          <ul className="space-y-3 list-none p-0 m-0">
            <li>
              <a
                href="/haberler/gundem"
                className="text-gray-300 hover:text-white transition"
              >
                Gündem
              </a>
            </li>

            <li>
              <a
                href="/haberler/dunya"
                className="text-gray-300 hover:text-white transition"
              >
                Dünya
              </a>
            </li>

            <li>
              <a
                href="/haberler/ekonomi"
                className="text-gray-300 hover:text-white transition"
              >
                Ekonomi
              </a>
            </li>

            <li>
              <a
                href="/haberler/spor"
                className="text-gray-300 hover:text-white transition"
              >
                Spor
              </a>
            </li>

            <li>
              <a
                href="/haberler/teknoloji"
                className="text-gray-300 hover:text-white transition"
              >
                Teknoloji
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h5 className="text-lg font-bold border-b border-red-600 pb-3 mb-4">
            Faydalı Bağlantılar
          </h5>

          <ul className="space-y-3 list-none p-0 m-0">
            <li>
              <a
                href="/haberler/kultur-sanat"
                className="text-gray-300 hover:text-white transition"
              >
                Kültür & Sanat
              </a>
            </li>

            <li>
              <a
                href="/haberler/saglik"
                className="text-gray-300 hover:text-white transition"
              >
                Sağlık
              </a>
            </li>

            <li>
              <a
                href="/haberler/yasam"
                className="text-gray-300 hover:text-white transition"
              >
                Yaşam
              </a>
            </li>

            <li>
              <a
                href="/gizlilik"
                className="text-gray-300 hover:text-white transition"
              >
                Gizlilik Politikası
              </a>
            </li>

            <li>
              <a
                href="/kullanim-sartlari"
                className="text-gray-300 hover:text-white transition"
              >
                Kullanım Şartları
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h5 className="text-lg font-bold border-b border-red-600 pb-3 mb-4">
            Bizi Takip Edin
          </h5>

          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            Güncel haberleri ve son dakika gelişmelerini sosyal medya
            hesaplarımızdan takip edebilirsiniz.
          </p>

          <div className="flex items-center gap-3">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-sky-500 transition"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600 transition"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition"
            >
              <i className="fab fa-youtube"></i>
            </a>

          </div>

          <div className="mt-6">
            <a
              href="/login"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md mr-2 transition"
            >
              Giriş
            </a>

            <a
              href="/signup"
              className="inline-block border border-gray-600 hover:border-white text-gray-300 hover:text-white px-5 py-2 rounded-md transition"
            >
              Üye Ol
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-8 pt-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <div className="text-center md:text-left">
            <h3 className="text-xl font-black tracking-wide">
              YEKAZAD
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Güncel haberlerin güvenilir adresi
            </p>
          </div>

          <div className="text-gray-500 text-sm text-center md:text-right">
            © {new Date().getFullYear()} Tüm hakları saklıdır.
            <br />
            Haberler ve içerikler ilgili kaynaklara aittir.
          </div>

        </div>

      </div>

    </div>

    <div className="bg-black border-t border-gray-900">
      <div className="container mx-auto px-4 py-4">

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm">

          <span className="text-gray-500">
            © {new Date().getFullYear()} Yekazad
          </span>

          <div className="flex gap-5">
            <a
              href="/gizlilik"
              className="text-gray-500 hover:text-white transition"
            >
              Gizlilik
            </a>

            <a
              href="/iletisim"
              className="text-gray-500 hover:text-white transition"
            >
              İletişim
            </a>

            <a
              href="/kunye"
              className="text-gray-500 hover:text-white transition"
            >
              Künye
            </a>
          </div>

        </div>

      </div>
    </div>

  </footer>
);

export default Footer;

