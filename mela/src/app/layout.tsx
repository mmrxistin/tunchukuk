// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah ve ala alihi ve sahbihi ecmain
// Allahumme salli ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allahu Ekber, Allahu Ekber
// La ilahe illallah, Allahu Ekber, Allahu Ekber, ve lillahi'l-hamd
// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah ve ala alihi ve sahbihi ecmain
// Allahumme salli ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain

import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import { extractRouterConfig } from "uploadthing/server";
import { fileRouter } from "./api/uploadthing/core";
import "./globals.css";
import ReactQueryProvider from "./ReactQueryProvider";
import AssistantRoot from "./malper/assistant";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

// ------------------
// ⚖️ Tunç Hukuk Bürosu Metadata
// ------------------
export const metadata: Metadata = {
  title: {
    template: "%s | Tunç Hukuk Bürosu",
    default: "Tunç Hukuk Bürosu",
  },
  description:
    "Tunç Hukuk Bürosu — Ceza Hukuku, Aile Hukuku, Ticaret Hukuku, İş Hukuku ve Bilişim Hukuku alanlarında profesyonel avukatlık ve danışmanlık hizmetleri.",
  keywords: [
    "Tunç Hukuk Bürosu",
    "Avukat",
    "Hukuk",
    "Ceza hukuku",
    "Aile hukuku",
    "İcra hukuku",
    "Bilişim hukuku",
    "Danışmanlık"
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NextSSRPlugin routerConfig={extractRouterConfig(fileRouter)} />

        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ReactQueryProvider>

        <Toaster />
      </body>
    </html>
  );
}

// ----------------------------------------
// ⚖️ Profesyonel Kurumsal Footer (Tunç Hukuk Bürosu)
// ----------------------------------------
export function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-20 bg-[#1a1a1a] text-gray-200 border-t border-gray-700">
      <div className="text-center">
        <p className="text-sm font-semibold tracking-wide">
          © {new Date().getFullYear()} Tunç Hukuk Bürosu — Tüm Hakları Saklıdır.
        </p>
        <p className="text-xs opacity-70 mt-1">
          Hukuki Danışmanlık • Avukatlık Hizmetleri • Kurumsal Çözüm Ortağınız
        </p>
      </div>
    </footer>
  );
}
