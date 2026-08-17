// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illAllah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// Allah u Ekber Ve Lillahil Hamd
"use client"

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Mmmnavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="w-full bg-[#121212] text-white border-b border-[#222222]">
      {/* BBC Style Top Header Bar */}
      <div className="border-b border-[#2a2a2a] py-2 px-4 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Iconic BBC Block Branding */}
            <a href="/malper" className="flex items-center gap-1 group text-decoration-none">
              <span className="bg-[#bb1919] text-white font-black text-lg px-2 py-0.5 tracking-tighter">Y</span>
              <span className="bg-[#bb1919] text-white font-black text-lg px-2 py-0.5 tracking-tighter">Y</span>
              <span className="bg-black border border-zinc-700 text-white font-black text-lg px-2 py-0.5 tracking-tighter">G</span>
              <span className="font-extrabold text-xl text-white ml-2 tracking-tight group-hover:text-red-500 transition-colors">
                YENİ YAŞAM
              </span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-zinc-300">
            <span className="hidden md:inline-block text-zinc-400">
              {new Date().toLocaleDateString('tr-TR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <a href="/login" className="hover:text-white transition flex items-center gap-1 text-white border border-zinc-700 px-3 py-1 rounded-none hover:bg-zinc-800 text-decoration-none">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              Giriş Yap
            </a>
            <a href="/signup" className="bg-[#bb1919] hover:bg-[#901313] text-white px-3 py-1 font-semibold transition text-decoration-none">
              Üye Ol
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Menu */}
      <Navbar expand="lg" expanded={expanded} onToggle={(isOpen) => setExpanded(isOpen)} className="py-0 border-b border-zinc-800 bg-[#121212] navbar-dark">
        <Container className="max-w-7xl px-4">
          <Navbar.Toggle aria-controls="bbc-navbar-nav" className="my-2 border-zinc-700 focus:outline-none" />
          <Navbar.Collapse id="bbc-navbar-nav">
            <Nav className="w-full flex items-center justify-between text-sm font-bold uppercase tracking-wider">
              <Nav.Link href="/malper" className="py-3 px-3 text-white hover:text-white border-b-2 border-transparent hover:border-[#bb1919] transition-all">
                Ana Sayfa
              </Nav.Link>
              <Nav.Link href="/malper/Yek" className="py-3 px-3 text-zinc-300 hover:text-white border-b-2 border-transparent hover:border-[#bb1919] transition-all">
                Tümü
              </Nav.Link>
              <Nav.Link href="/malper/Car" className="py-3 px-3 text-zinc-300 hover:text-white border-b-2 border-transparent hover:border-[#bb1919] transition-all">
                Gündem
              </Nav.Link>
              <Nav.Link href="/malper/se" className="py-3 px-3 text-zinc-300 hover:text-white border-b-2 border-transparent hover:border-[#bb1919] transition-all">
                Dünya
              </Nav.Link>
              <Nav.Link href="/malper/dirok" className="py-3 px-3 text-zinc-300 hover:text-white border-b-2 border-transparent hover:border-[#bb1919] transition-all">
                Ekonomi
              </Nav.Link>
              <Nav.Link href="/malper/xane" className="py-3 px-3 text-zinc-300 hover:text-white border-b-2 border-transparent hover:border-[#bb1919] transition-all">
                Ekoloji
              </Nav.Link>
              <Nav.Link href="/malper/rojname" className="py-3 px-3 text-zinc-300 hover:text-white border-b-2 border-transparent hover:border-[#bb1919] transition-all">
                Kadın
              </Nav.Link>
              <Nav.Link href="/malper/mmmmm" className="py-3 px-3 text-zinc-300 hover:text-white border-b-2 border-transparent hover:border-[#bb1919] transition-all">
                Yazarlar
              </Nav.Link>
              <Nav.Link href="/malper/account" className="py-3 px-3 text-zinc-300 hover:text-white border-b-2 border-transparent hover:border-[#bb1919] transition-all">
                Forum
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* BBC Live / Son Dakika Ticker Bar */}
      <div className="bg-[#1a1a1a] border-b border-zinc-800 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <span className="bg-[#bb1919] text-white px-2 py-0.5 font-bold uppercase tracking-wider flex items-center gap-1.5 flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            SON DAKİKA
          </span>
          <div className="text-zinc-300 truncate font-medium">
            Türkiye ve dünyadan en güncel gelişmeler, özel haberler ve canlı yayın takibi Yeni Yaşam'da.
          </div>
        </div>
      </div>
    </header>
  );
}

export default Mmmnavbar;
//SubhanAllahi Rahmanir Rahim ve Bihamdihi
//  SubhanAllah i Ehed ve Bihamdihi
// SubhanAllah i Samed i Azim ve Bihamdihi
// Suphan Allahi Kerim i Vehhab ve Bihamdihi
//  SubhanAllahi Azim ve Bihamdihi
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin
// La ilahe illAllah Muhammden abduhu ve resuluhu
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin
// La ilahe illAllahu vahdehu la sharika leh, lehu'l-mulku ve lehu'l-hamd
// yuhyi ve yumit
// Biyadihil xayr
// ve huve ala kulli şey'in kadir
