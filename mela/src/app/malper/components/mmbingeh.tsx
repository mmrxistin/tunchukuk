// Bismillahirrahmanirrahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin 
// Subhanallah, Elhamdulillah, Allahu Ekber
// La ilahe illallah 
// Allahu Ekber, Allahu Ekber, Allahu Ekber, La ilahe illallah
// Bila Allah Azze ve Celle me ji sunneta Resulullah Muhammed (s.a.v) neqetine, amin rabbal alemin 
// Xeyni Allah tu Xweda tune,Allah yeke(Esma ul Husna) û tu şirîkê Allah tune,pesin da jî mulk de jî û spasî tenê Allah re tê kirin.
//  Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah

import React from "react";

const LFooter = () => (
  <footer className="bg-primary text-white pt-5">
    <div className="container text-center text-md-left">
      <div className="row">
        {/* About Section */}
        <div className="col-md-4 mt-md-0 mt-3">
          <h5 className="text-uppercase font-weight-bold">Rosa Kadın Derneği</h5>
          <p>
            Rosa Kadın Derneği, kadınların güçlenmesi, eğitim ve dayanışma
            amaçlı projeler geliştiren bir sivil toplum kuruluşudur.
          </p>
        </div>

        {/* Links Section */}
        <div className="col-md-4 mb-md-0 mb-3">
          <h5 className="text-uppercase font-weight-bold">Hızlı Linkler</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!" className="text-white">
                Ana Sayfa
              </a>
            </li>
            <li>
              <a href="#!" className="text-white">
                Hakkımızda
              </a>
            </li>
            <li>
              <a href="#!" className="text-white">
                Projeler
              </a>
            </li>
            <li>
              <a href="/" className="text-white">
             .....
              </a>
            </li>
            <li>
              <a href="/signup" className="text-white">
                Üye Ol
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="col-md-4 mb-md-0 mb-3">
          <h5 className="text-uppercase font-weight-bold">Bizi Takip Edin</h5>
          <ul className="list-unstyled d-flex justify-content-center">
            <li className="mx-2">
              <a href="https://facebook.com" className="text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://twitter.com" className="text-white">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://instagram.com" className="text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://linkedin.com" className="text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="text-center py-3 small">
      © {new Date().getFullYear()} Rosa Kadın Derneği — Tüm hakları saklıdır.
    </div>
  </footer>
);

export default LFooter;