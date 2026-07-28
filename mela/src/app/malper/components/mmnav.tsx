// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// La ilahe illAllahuvahdehu la sherike leh,lehu'l-mulku ve lehul-hamd yuhyi ve yumit, biyadhil xayr ve huwa ala kulli şey'in kadir
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
"use client"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Mmmnavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/malper">Rosa Kadın Derneği</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link href="/malper">Anasayfa</Nav.Link>
              <NavDropdown title="Projeler" id="projects-nav-dropdown">
                <NavDropdown.Item href="/malper/projeler/egitim">Eğitim Programları</NavDropdown.Item>
                <NavDropdown.Item href="/malper/projeler/sosyal">Sosyal Projeler</NavDropdown.Item>
                <NavDropdown.Item href="/malper/projeler/girisim">Girişim Destekleri</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/malper/projeler/ortak-projeler">Ortak Projeler</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Hizmetler" id="services-nav-dropdown">
                <NavDropdown.Item href="/malper/hizmetler/egitim">Eğitim & Atölye</NavDropdown.Item>
                <NavDropdown.Item href="/malper/hizmetler/destek">Destek & Danışmanlık</NavDropdown.Item>
                <NavDropdown.Item href="/malper/hizmetler/girisimcilik">Girişimcilik & Mentorluk</NavDropdown.Item>
                <NavDropdown.Item href="/malper/hizmetler/saglik">Sağlık & Destek</NavDropdown.Item>
                <NavDropdown.Item href="/malper/hizmetler/farkindalik">Farkındalık & Etkinlik</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/malper/hakkimizda">Hakkımızda</Nav.Link>
              <Nav.Link href="/malper/ekip">Ekibimiz</Nav.Link>
              <Nav.Link href="/malper/iletisim">İletişim</Nav.Link>
              <NavDropdown title="Bilgi" id="blog-nav-dropdown">
                <NavDropdown.Item href="/malper/bilgi/ipuclari">İpuçları & Rehber</NavDropdown.Item>
                <NavDropdown.Item href="/malper/bilgi/etkinlikler">Etkinlikler & Haberler</NavDropdown.Item>
              </NavDropdown>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mmmnavbar;