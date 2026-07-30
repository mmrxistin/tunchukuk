// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
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
    <Navbar expand="lg" bg="primary" variant="dark" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/malper">Rosa Kadın Derneği</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/malper">Ana Sayfa</Nav.Link>

            <NavDropdown title="Projeler" id="projects-dropdown">
              <NavDropdown.Item href="/malper/egitim">Eğitim Programları</NavDropdown.Item>
              <NavDropdown.Item href="/malper/dayanisma">Dayanışma Projeleri</NavDropdown.Item>
              <NavDropdown.Item href="/malper/saglik">Sağlık ve Destek</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/malper/etkinlikler">Etkinlikler</Nav.Link>

            <NavDropdown title="Kaynaklar" id="resources-dropdown">
              <NavDropdown.Item href="/malper/kaynaklar">Makale & Rehber</NavDropdown.Item>
              <NavDropdown.Item href="/malper/yonetim">Yönetim ve Politika</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/malper/hakkimizda">Hakkımızda</Nav.Link>
            <Nav.Link href="/malper/account">Hesabım</Nav.Link>
            <Nav.Link href="/login">Giriş</Nav.Link>
            <Nav.Link href="/signup">Üye Ol</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mmmnavbar;
//Subhanallah Subhanallah Subhanallahi Azim ve Bihamdihi
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin
// La ilahe illAllah Muhammden abduhu ve resuluhu
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin
