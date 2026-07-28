// Bismillahirahmanirahim 
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah 
// Allahumme salli ala seyyidina Muhammedin 
// Allah u Ekber, Allahu Ekber, Allahu Ekber
// La ilahe illallah, Allahu Ekber, Allahu Ekber, ve lillahi'l-hamd
import React from "react";
import { Alert } from "react-bootstrap";
import Mmmnavbar from "./components/mmnav";

import 'bootstrap/dist/css/bootstrap.css'
import Footer from "./components/mmbingeh";
import AssistantRoot from "./assistant";
import ContactForm from "./components/mmfrm";



export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  // Read phone/whatsapp from public env vars so numbers are configurable per-deploy
  const phone = process.env.NEXT_PUBLIC_PHONE ?? ''
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP ?? ''

  const waHref = whatsapp ? `https://wa.me/${whatsapp.replace(/\D/g, '')}` : ''
  const telHref = phone ? `tel:${phone}` : ''

  return (
    <div>

      <Mmmnavbar />

      {children}

      {/* Floating contact buttons (WhatsApp + Phone) */}
      {(whatsapp || phone) && (
        <div className="fixed z-50 right-4 bottom-24 flex flex-col gap-3">
          {whatsapp ? (
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp ile iletişime geç"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition"
            >
              {/* WhatsApp SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M20.52 3.48A11.9 11.9 0 0012 .5C5.73.5.99 5.24.99 11.5c0 2.03.53 4.03 1.54 5.78L.5 23.5l6.53-1.72A11.94 11.94 0 0012 23.5c6.27 0 11.01-4.74 11.01-11 0-3.04-1.18-5.86-3.49-7.02zM12 21.5c-1.86 0-3.62-.5-5.14-1.43l-.37-.22-3.88 1.02 1.04-3.78-.24-.39A9 9 0 113.02 6.98a.75.75 0 00.82-.13l.92-.92a.75.75 0 01.92-.12c.35.21 1.03.6 1.74 1.2.7.58 1.19 1.09 1.38 1.45.19.36.06.75-.34 1.08l-.58.44a1 1 0 00-.36.9c.1.92.68 2.35 2.07 3.74 1.39 1.39 2.82 1.98 3.74 2.07.23.03.47.04.69.04.36 0 .73-.12 1.02-.35l.44-.35c.34-.27.78-.38 1.17-.3.39.07.74.33.9.7.58 1.11.72 2.58.4 3.88A8.99 8.99 0 0112 21.5z" />
              </svg>
            </a>
          ) : null}

          {phone ? (
            <a
              href={telHref}
              aria-label="Telefon ile ara"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition"
            >
              {/* Phone SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75a19.5 19.5 0 0014.25 14.25l3-3a2.625 2.625 0 00-.75-4.5l-2.25-.75a.75.75 0 00-.75.19l-1.2 1.2a12.037 12.037 0 01-5.16-5.16l1.2-1.2a.75.75 0 00.19-.75L9.75 3.75A2.625 2.625 0 005.25 3l-3 .75z" />
              </svg>
            </a>
          ) : null}
        </div>
      )}

      <ContactForm />
      <Footer />
    </div>
  );
}
// Bismillahirahmanirahim 
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah
// Allahumme salli ala seyyidina Muhammedin 
// Allah u Ekber, Allahu Ekber, Allahu Ekber
// La ilahe illallah, Allahu Ekber, Allahu Ekber, ve lillahi'l-hamd
