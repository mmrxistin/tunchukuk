// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
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
        <Navbar.Brand href="/malper">Eroğlu İnşaat</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/malper">Anasayfa</Nav.Link>
            <NavDropdown title="Projeler" id="projects-nav-dropdown">
              <NavDropdown.Item href="/malper/projeler/konut">Konut Projeleri</NavDropdown.Item>
              <NavDropdown.Item href="/malper/projeler/tadilat">Tadilat & Renovasyon</NavDropdown.Item>
              <NavDropdown.Item href="/malper/projeler/ticari">Ticari & Endüstriyel</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/malper/projeler/anahtar-teslim">Anahtar Teslim</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Hizmetler" id="services-nav-dropdown">
              <NavDropdown.Item href="/malper/hizmetler/siva">Sıva & Cephe</NavDropdown.Item>
              <NavDropdown.Item href="/malper/hizmetler/boya">Boya & Kaplama</NavDropdown.Item>
              <NavDropdown.Item href="/malper/hizmetler/tesisat">Elektrik & Sıhhi Tesisat</NavDropdown.Item>
              <NavDropdown.Item href="/malper/hizmetler/fayans">Fayans & Zemin</NavDropdown.Item>
              <NavDropdown.Item href="/malper/hizmetler/cati">Çatı & İzolasyon</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/malper/hakkimizda">Hakkımızda</Nav.Link>
            <Nav.Link href="/malper/ekip">Ekibimiz</Nav.Link>
            <Nav.Link href="/malper/iletisim">İletişim</Nav.Link>
            <NavDropdown title="Bilgi" id="blog-nav-dropdown">
              <NavDropdown.Item href="/malper/bilgi/ipuclari">İpuçları & Rehber</NavDropdown.Item>
              <NavDropdown.Item href="/malper/bilgi/trendler">Sektör Haberleri</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mmmnavbar;