// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illAllah
// SubhanAllah, Elhamdulillah,  La ilahe illAllah u Allahu Ekber
"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * Üst slider: Son Dakika (solda) + Yazarlar (sağda)
 * Otomatik geçişli, dokunmatik kaydırmalı modern slider.
 */

const sonDakika = [
  { title: "Gîyadin'de siyanür süreci başladı!", href: "/malper/penc", cat: "EKOLOJİ" },
  { title: "Nisêbîn'de anma alanına ziyaretler sürüyor", href: "/malper/du", cat: "GÜNDEM" },
  { title: "Maden işçileri kazandı: Direnişimiz zaferle sonuçlandı", href: "/malper/se", cat: "EKONOMİ" },
  { title: "Irak'ta 12 milletvekili ve yetkilinin mal varlığına el konuldu", href: "/malper/yek", cat: "DÜNYA" },
  { title: "Uyuşturucuya karşı çıktığı için tutuklanan 3 genç tahliye edildi", href: "/malper/car", cat: "GÜNDEM" },
];

const yazarlar = [
  { title: "Suriye'de tasfiye mi, yeni bir kuruculuk mu?", author: "Ender İmrek", href: "/malper/mmmmm" },
  { title: "Seslerin efsanesi", author: "Ahmet Güneş", href: "/malper/mmmmm" },
  { title: "'Ama ne Terörsüz Türkiye!'", author: "Dicle Anter", href: "/malper/mmmmm" },
  { title: "Gökyüzüne bakmadan geçen günler…", author: "Bahadır Altan", href: "/malper/mmmmm" },
  { title: "Müzakere ve mücadele", author: "Ertuğrul Kürkçü", href: "/malper/mmmmm" },
];

function useAutoIndex(length: number, delay = 5000) {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => setIndex((i) => (i + 1) % length), delay);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [length, delay]);

  return [index, setIndex] as const;
}

function SonDakikaSlider() {
  const [index, setIndex] = useAutoIndex(sonDakika.length);
  const item = sonDakika[index];

  return (
    <div className="mm-hero-slider" onMouseEnter={() => setIndex((index) => index)}>
      <div className="mm-slider-tag mm-slider-tag-red">
        <span className="size-2 rounded-full bg-white animate-pulse" />
        SON DAKİKA
      </div>

      <a href={item.href} className="mm-slider-content group" key={index}>
        <span className="mm-slider-cat">{item.cat}</span>
        <h3 className="mm-slider-title">{item.title}</h3>
      </a>

      <div className="mm-slider-dots">
        {sonDakika.map((_, i) => (
          <button
            key={i}
            aria-label={`Haber ${i + 1}`}
            className={`mm-slider-dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

function YazarSlider() {
  const [index, setIndex] = useAutoIndex(yazarlar.length, 4000);
  const item = yazarlar[index];

  return (
    <div className="mm-yazar-slider">
      <div className="mm-slider-tag mm-slider-tag-dark">YAZARLAR</div>

      <a href={item.href} className="mm-yazar-content" key={index}>
        <div className="mm-yazar-avatar">
          {item.author.slice(0, 1)}
        </div>
        <div>
          <h3 className="mm-yazar-title">{item.title}</h3>
          <span className="mm-yazar-name">{item.author}</span>
        </div>
      </a>

      <div className="mm-slider-dots">
        {yazarlar.map((_, i) => (
          <button
            key={i}
            aria-label={`Yazı ${i + 1}`}
            className={`mm-slider-dot dark ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MmSlider() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-5 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <SonDakikaSlider />
      </div>
      <div className="lg:col-span-5">
        <YazarSlider />
      </div>
    </div>
  );
}
