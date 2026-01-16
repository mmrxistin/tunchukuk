// Bismillahirahmanirahim 
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah 
// Allahumme salli ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allahu Ekber, Allahu Ekber
// La ilahe illallah, Allahu Ekber, Allahu Ekber, ve lillahi'l-hamd

import { Toaster } from "@/components/ui/toaster";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import { extractRouterConfig } from "uploadthing/server";
import { fileRouter } from "./api/uploadthing/core";
import "./globals.css";
import ReactQueryProvider from "./ReactQueryProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    template: "%s |Eroğlu İnşaat",
    default: "Eroğlu İnşaat - Sıva, Boya, Tadilat Hizmetleri",
  },
  description: "  Eroğlu İnşaat, konut ve ticari mekanlarda anahtar teslim tadilat, iç-dış sıva, boya, elektrik ve sıhhi tesisat hizmetleri sunar. Profesyonel ekip, kaliteli malzeme ve uygun fiyatlarla güvenilir çözümler.",
  keywords: [
    "Eroğlu İnşaat",
    "Sıva",
    "Boya",
    "Tadilat",
    "İnşaat Hizmetleri",
    "Anahtar Teslim Tadilat",
    "Dış Cephe Sıva",
    "İç Cephe Boya",
    "Elektrik Tesisatı",
    "Sıhhi Tesisat",
    "Fayans Döşeme",
    "Çatı İzolasyonu",
    "Konut Tadilatı",
    "Ticari Tadilat",
    "Renovasyon Hizmetleri",
    "Profesyonel İnşaat",
    "Güvenilir Tadilat",
    "Uygun Fiyatlı İnşaat",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NextSSRPlugin routerConfig={extractRouterConfig(fileRouter)} />
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
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
