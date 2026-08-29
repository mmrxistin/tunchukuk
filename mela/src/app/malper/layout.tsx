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



// El Hamdu Lîllah ya Kerîm î Rezzaq î Vehhab î Ehed î Quddus î Heq bêdawîtî..
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f4f4]">
      {/*
      <Alert variant="success" style={{ width: "100%", textAlign: "center" }}>
        اَشْهَدُ اَنْ لاَ اِلٰهَ اِلاَّ اللّٰهُ وَاَشْهَدُ اَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ
      </Alert>
      */}
      <Mmmnavbar />

      {/* Üst kısım: Son Dakika + Yazarlar slider'ı */}
      <MmSlider />

      {/* TV bölümü: sağda canlı TV, altında gazetenin oynatma listesi */}
      <div className="flex flex-col md:flex-row w-full gap-0">
        <aside className="w-full md:w-auto md:min-w-[300px] lg:min-w-[340px] p-4 space-y-4">
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
          </div>
        </aside>

        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>
      </div>

      <ContactForm />
      <Footer />
    </div>
  );
}
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin