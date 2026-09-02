// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illAllah
// SubhanAllah, Elhamdulillah,La ilahe illAllah u Allahu Ekber
// Estağfirullah El-Azim
// Allah u Ekber Ve Lillahil Hamd
"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import MmSlider from './mmslider';

const NAV_LINKS = [
  { href: '/malper', label: 'Ana Sayfa' },
  { href: '/malper/yek', label: 'Tümü' },
  { href: '/malper/car', label: 'Gündem' },
  { href: '/malper/se', label: 'Dünya' },
  { href: '/malper/dirok', label: 'Ekonomi' },
  { href: '/malper/xane', label: 'Ekoloji' },
  { href: '/malper/rojname', label: 'Kadın' },
  { href: '/malper/mmmmm', label: 'Yazarlar' },
  { href: '/malper/account', label: 'Forum' },
];

function Mmmnavbar() {
const [open, setOpen] = useState(false);

return (
<>
<header className="relative z-50 w-full bg-[#0a0a0a] text-white">

    {/* BBC Style Top Header Bar */}
    <div className="border-b border-white/[0.06] bg-[#080808]">
      <div className="mx-auto flex min-h-[58px] max-w-[1600px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

        <Link
          href="/malper"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2 no-underline"
        >
          <div className="flex items-center gap-1">
            <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#b5121b] text-sm font-black text-white sm:h-9 sm:w-9 sm:text-base">
              Y
            </span>

            <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#b5121b] text-sm font-black text-white sm:h-9 sm:w-9 sm:text-base">
              Y
            </span>

            <span className="flex h-8 w-8 items-center justify-center rounded-sm border border-white/10 bg-[#151515] text-sm font-black text-white sm:h-9 sm:w-9 sm:text-base">
              G
            </span>
          </div>

          <div className="ml-1 hidden sm:block">
            <div className="text-lg font-black tracking-[-0.04em] text-white transition-colors group-hover:text-[#ed3b46] sm:text-xl">
              YENİ YAŞAM
            </div>

            <div className="mt-1 text-[8px] font-bold tracking-[0.34em] text-zinc-500">
              HABER • GÜNDEM • YAŞAM
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">

          <span className="hidden text-xs font-medium capitalize text-zinc-500 md:inline-block">
            {new Date().toLocaleDateString('tr-TR', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>

          <a
            href="/login"
            className="flex h-9 items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 text-xs font-bold text-zinc-200 no-underline transition-all hover:bg-white/[0.08] hover:text-white"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>

            <span className="hidden sm:inline">
              Giriş Yap
            </span>
          </a>

          <a
            href="/signup"
            className="flex h-9 items-center rounded-md bg-[#b5121b] px-3.5 text-xs font-black text-white no-underline shadow-lg shadow-red-900/20 transition-all hover:bg-[#d51d29] hover:text-white"
          >
            Üye Ol
          </a>

          {/* HAMBURGER — mobilde üç çizgi */}
          <button
            type="button"
            aria-label="Menüyü aç/kapat"
            aria-expanded={open}
            aria-controls="mm-main-menu"
            onClick={() => setOpen((v) => !v)}
            className="mm-burger flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] transition-all hover:bg-white/[0.1] lg:hidden"
          >
            <div className={`mm-burger-lines ${open ? 'mm-burger-open' : ''}`}>
              <span /><span /><span />
            </div>
          </button>

        </div>
      </div>
    </div>

    {/* ANA MENÜ — açılıp kapanabilir */}
    <div className={`mm-menu-wrap ${open ? 'mm-menu-open' : ''}`} id="mm-main-menu">
      <nav className="mx-auto w-full max-w-[1600px] px-0 lg:px-8">
        <ul className="m-0 flex w-full list-none flex-col p-0 lg:flex-row lg:items-center lg:flex-wrap">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="w-full lg:w-auto">
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`nav-modern-link flex w-full items-center ${link.href === '/malper' ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>

    {/* SLIDER — TEK ÇERÇEVE */}
    <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
      <div className="mm-navbar-slider-frame">
        <div className="mm-navbar-slider-inner">
          <MmSlider />
        </div>
      </div>
    </div>

    {/* BBC Live / Son Dakika Ticker Bar */}
    <div className="border-y border-white/[0.06] bg-[#151515]">
      <div className="mx-auto flex min-h-[42px] max-w-[1600px] items-center px-4 sm:px-6 lg:px-8">

        <span className="flex shrink-0 items-center gap-2 rounded-sm bg-[#b5121b] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-white">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          Yazarlar
        </span>

        <div className="mx-3 h-4 w-px shrink-0 bg-white/10" />

        <div className="min-w-0 overflow-hidden">
          <div className="truncate text-xs font-medium text-zinc-400">
            Gîyadin'de siyanür süreci başladı! — Nisêbîn'de anma alanına ziyaretler sürüyor — Maden işçileri kazandı: Direnişimiz zaferle sonuçlandı — Irak'ta 12 milletvekili ve yetkilinin mal varlığına el konuldu
          </div>
        </div>

      </div>
    </div>

  </header>

  <style jsx global>{`

    /* ============================================================
       HAMBURGER — ÜÇ ÇİZGİ
       ============================================================ */

    .mm-burger-lines { position: relative; width: 20px; height: 14px; }

    .mm-burger-lines span {
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      border-radius: 2px;
      background: #fff;
      transition: transform .25s ease, opacity .2s ease, top .25s ease;
    }

    .mm-burger-lines span:nth-child(1) { top: 0; }
    .mm-burger-lines span:nth-child(2) { top: 6px; }
    .mm-burger-lines span:nth-child(3) { top: 12px; }

    .mm-burger-open span:nth-child(1) { top: 6px; transform: rotate(45deg); }
    .mm-burger-open span:nth-child(2) { opacity: 0; }
    .mm-burger-open span:nth-child(3) { top: 6px; transform: rotate(-45deg); }

    /* ============================================================
       MENÜ — MOBİLDE KAPALI, TIKLAYINCA AÇILIR
       ============================================================ */

    .mm-menu-wrap {
      display: none;
      overflow: hidden;
      background: #0d0d0d;
      border-bottom: 1px solid rgba(255,255,255,.06);
      animation: mmMenuDown .25s ease;
    }

    .mm-menu-wrap.mm-menu-open { display: block; }

    @keyframes mmMenuDown {
      from { opacity: 0; transform: translateY(-6px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @media (min-width: 1024px) {
      .mm-menu-wrap {
        display: block !important;
        overflow: visible;
      }

      .mm-burger { display: none !important; }
    }

    /* ============================================================
       MODERN NAVIGATION
       ============================================================ */

    .nav-modern-link {
      position: relative !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;

      padding: 15px 14px !important;

      color: #a1a1aa !important;
      background: transparent !important;

      font-size: 11px !important;
      font-weight: 800 !important;
      letter-spacing: .1em !important;
      text-transform: uppercase !important;

      text-decoration: none !important;

      border: 0 !important;

      transition:
        color .2s ease,
        background .2s ease !important;
    }

    .nav-modern-link::after {
      content: "";
      position: absolute;

      left: 12px;
      right: 12px;
      bottom: 0;

      height: 2px;

      background: #b5121b;

      transform: scaleX(0);
      transform-origin: center;

      transition: transform .25s ease;
    }

    .nav-modern-link:hover {
      color: #fff !important;
      background: rgba(255,255,255,.025) !important;
    }

    .nav-modern-link:hover::after,
    .nav-modern-link.active::after {
      transform: scaleX(1);
    }

    .nav-modern-link.active {
      color: #fff !important;
    }


    /* ============================================================
       SLIDER ANA ÇERÇEVE
       ============================================================ */

    .mm-navbar-slider-frame {
      width: 100%;
      margin: 8px 0 10px;
      padding: 5px;

      box-sizing: border-box;

      background:
        linear-gradient(
          145deg,
          #141414 0%,
          #0e0e0e 100%
        );

      border: 1px solid rgba(255,255,255,.12);

      border-radius: 10px;

      box-shadow:
        0 4px 14px rgba(0,0,0,.18);
    }

    .mm-navbar-slider-inner {
      width: 100%;
      min-width: 0;
    }


    /* ============================================================
       İKİ KUTU — EŞİT BOYUT
       ============================================================ */

    .mm-navbar-slider-inner > div {
      width: 100%;
    }

    .mm-navbar-slider-inner .mm-hero-slider,
    .mm-navbar-slider-inner .mm-yazar-slider {
      box-sizing: border-box;

      width: 100% !important;

      min-height: 190px !important;
      height: 190px !important;

      margin: 0 !important;
    }


    /* ============================================================
       SLIDER İÇERİĞİ
       ============================================================ */

    .mm-navbar-slider-inner .mm-slider-content,
    .mm-navbar-slider-inner .mm-yazar-content {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }


    /* ============================================================
       MODERN KART EFEKTİ
       ============================================================ */

    .mm-navbar-slider-inner .mm-hero-slider,
    .mm-navbar-slider-inner .mm-yazar-slider {
      transition:
        transform .25s ease,
        box-shadow .25s ease,
        border-color .25s ease !important;
    }

    .mm-navbar-slider-inner .mm-hero-slider:hover,
    .mm-navbar-slider-inner .mm-yazar-slider:hover {
      transform: translateY(-3px) !important;

      box-shadow:
        0 15px 35px rgba(0,0,0,.35) !important;
    }


    /* ============================================================
       TABLET
       ============================================================ */

    @media (max-width: 1023px) {

      .nav-modern-link {
        justify-content: flex-start !important;
        padding: 13px 16px !important;

        border-bottom: 1px solid rgba(255,255,255,.05) !important;
      }

      .nav-modern-link::after {
        left: 16px;
        right: auto;
        width: 35px;
      }

      .mm-navbar-slider-frame {
        margin-top: 8px;
        padding: 8px;
      }

      .mm-navbar-slider-inner .mm-hero-slider,
      .mm-navbar-slider-inner .mm-yazar-slider {
        min-height: 175px !important;
        height: 175px !important;
      }

    }


    /* ============================================================
       MOBİL — KUTULAR ALT ALTA
       ============================================================ */

    @media (max-width: 640px) {

      .mm-navbar-slider-frame {
        margin: 6px 0 8px;
        padding: 4px;

        border-radius: 8px;
      }

      .mm-navbar-slider-inner .mm-hero-slider,
      .mm-navbar-slider-inner .mm-yazar-slider {
        width: 100% !important;

        min-height: 165px !important;
        height: 165px !important;
      }

      .mm-navbar-slider-inner .mm-slider-title,
      .mm-navbar-slider-inner .mm-yazar-title {
        font-size: 1rem !important;
        line-height: 1.25 !important;
      }

      .mm-navbar-slider-inner .mm-slider-tag {
        left: 1rem !important;
        top: .8rem !important;
      }

    }


    /* ============================================================
       KÜÇÜK TELEFON
       ============================================================ */

    @media (max-width: 400px) {

      .mm-navbar-slider-frame {
        padding: 3px;
        border-radius: 7px;
      }

      .mm-navbar-slider-inner .mm-hero-slider,
      .mm-navbar-slider-inner .mm-yazar-slider {
        min-height: 150px !important;
        height: 150px !important;
      }

      .mm-navbar-slider-inner .mm-slider-title,
      .mm-navbar-slider-inner .mm-yazar-title {
        font-size: .92rem !important;
      }

    }

  `}</style>

</>


);
}

export default Mmmnavbar;
//SubhanAllahi Rahmanir Rahim ve Bihamdihi
// SubhanAllah i Ehed ve Bihamdihi
// SubhanAllah i Samed i Azim ve Bihamdihi
// Suphan Allahi Kerim i Vehhab ve Bihamdihi
// SubhanAllahi Azim ve Bihamdihi
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin
// La ilahe illAllah Muhammden abduhu ve resuluhu
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin
// La ilahe illAllahu vahdehu la sharika leh, lehu'l-mulku ve lehu'l-hamdu.

// yuhyi ve yumit
// Biyadihil xayr
// ve huve ala kulli şey'in kadir