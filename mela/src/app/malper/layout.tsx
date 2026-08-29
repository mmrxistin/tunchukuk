// Bismillahirahmanirahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah
// La ilahe illAllahu vahdehu la sharika leh, lehu'l-mulku ve lehu'l-hamdu,
// yuhyi ve yumit
// bîyadîhîl xayr
//  ve huve ala kulli şey'in kadir
// Allah u Ekber, Allahu Ekber, Allahu Ekber
// La ilahe illAllah, Allahu Ekber, Allahu Ekber ve lillahi'l-hamd
import React from "react";
import Mmmnavbar from "./components/mmnav";
import MmSlider from "./components/mmslider";
import Footer from "./components/mmbingeh";
import ContactForm from "./components/mmfrm";

// Yeni Yaşam Media YouTube kanalı
const CHANNEL_ID = "UCeHJLmZ75jsot6tzDk-BUUA";
// Kanalın son videoları oynatma listesi (uploads playlist = UU + channelId[2..])
const UPLOADS_PLAYLIST = "UUeHJLmZ75jsot6tzDk-BUUA";

// Editörün Seçtikleri — yeniyasamgazetesi9.com güncel içerik
const editorPicks = [
  { title: "Gülistan Doku'nun kaybolduğu saatlerde defalarca telefon görüşmesi ortaya çıktı", href: "/malper/yek" },
  { title: "Katledilmeden önce polise başvuran Sultan Kara'ya 'Bu ailede adam öldürecek tip yok' denildi", href: "/malper/rojname" },
  { title: "2 köyde 60 yıldır yol ve su yok: Siyasi tercihlerimizden dolayı cezalandırılıyoruz", href: "/malper/xane" },
  { title: "Amed sokaklarına şehitlerin posterleri asıldı", href: "/malper/car" },
  { title: "Avrupa'da kuraklık nehirleri kurutuyor", href: "/malper/penc" },
  { title: "Bir çağın içinden, bir barışın eşiğinde", href: "/malper/mmmmm" },
];



// El Hamdu Lîllah ya Kerîm î Rezzaq î Vehhab î Ehed î Quddus î Heq bêdawîtî..
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4ff]">
      {/*
      <Alert variant="success" style={{ width: "100%", textAlign: "center" }}>
        اَشْهَدُ اَنْ لاَ اِلٰهَ اِلاَّ اللّٰهُ وَاَشْهَدُ اَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ
      </Alert>
      */}
      <Mmmnavbar />

      {/* Üst kısım: Son Dakika + Yazarlar slider'ı */}
      <div className="mm-shell">
      

        {/* Ana ızgara: içerik solda (geniş), TV sağda (dar kolon) */}
        <div className="mm-grid-frame mx-auto w-full">
          <main className="mm-main-col p-4 md:p-5">
            {children}
          </main>

          <aside className="mm-tv-col p-3 space-y-3">
            {/* Canlı TV */}
            <div className="mm-tv-card">
              <div className="mm-tv-head">
                <span className="mm-tv-live">
                  <span className="size-2 rounded-full bg-white animate-pulse" />
                  CANLI TV
                </span>
                <a
                  href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mm-tv-link"
                >
                  Yeni Yaşam Kanalı ↗
                </a>
              </div>
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/fZondUOmR9k"
                  title="Yeni Yaşam TV - Son Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mm-tv-foot">
                <span className="mm-tv-foot-title">Yeni Yaşam TV</span>
                <span className="mm-tv-foot-sub">Güncel yayın akışı</span>
              </div>
            </div>

            {/* Gazete videosu oynatma listesi */}
            <div className="mm-tv-card">
              <div className="mm-tv-head">
                <span className="mm-tv-live dark">VİDEO GALERİ</span>
                <a
                  href={`https://www.youtube.com/channel/${CHANNEL_ID}/videos`}
                  target="_blank"
                  rel="noreferrer"
                  className="mm-tv-link"
                >
                  Tüm Videolar ↗
                </a>
              </div>
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/videoseries?list=${UPLOADS_PLAYLIST}`}
                  title="Yeni Yaşam Gazetesi - Video Oynatma Listesi"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mm-tv-foot">
                <span className="mm-tv-foot-title">VİDEO GALERİ</span>
                <span className="mm-tv-foot-sub">Yeni Yaşam Media — Tüm videolar</span>
              </div>
            </div>

            {/* Editörün Seçtikleri */}
            <div className="mm-editor-pick">
              <div className="mm-editor-head">
                <span className="mm-editor-star">★</span>
                EDİTÖRÜN SEÇTİKLERİ
              </div>
              <div className="mm-editor-list">
                {editorPicks.map((pick, i) => (
                  <a href={pick.href} key={i} className="mm-editor-item">
                    <span className="mm-editor-idx">{String(i + 1).padStart(2, "0")}</span>
                    <span className="mm-editor-txt">{pick.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <ContactForm />
      <Footer />
    </div>
  );
}
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin