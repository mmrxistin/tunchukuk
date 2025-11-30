// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// La ilahe illallah, Muhammeden abduhu ve resuluhu
//ELHAMDULILLAHİRABBİLALAMİN
// Sübhanallah ve bihamdihi, Sübhanallahil-Azim
// La ilahe illallah, Allahu Ekber, Allahu Ekber ve lillahil-hamd
// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin 

"use client"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Mmmnavbar() {
  return (
    <Navbar expand="lg" bg="light" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/malper" className="fw-bold text-dark">
        Grafik 
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Nav.Link href="/malper" className="fw-semibold">Anasayfa</Nav.Link>

            <NavDropdown title="Hizmetlerimiz" id="services-dropdown">
              <NavDropdown.Item href="/malper/mmavahi">Ceza Hukuku</NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmhewcedari">Aile Hukuku</NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmkedkar">Ticaret Hukuku</NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmkargeh">İş Hukuku</NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmkinc">Bilişim Hukuku</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/malper/mmwesayit">KVKK ve Veri Koruma</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/malper/mmkinc" className="fw-semibold">Makaleler</Nav.Link>


            <Nav.Link href="/malper/derheq" className="fw-semibold">Hakkımızda</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mmmnavbar;
// Allah U Ekber, Allahu Ekber, Allahu Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// La ilahe illallah, Muhammeden Abdühü ve Resulühü
// ELHAMDULILLAHİRABBİL'ALAMİN
// Sübhanallah ve bihamdihi, Sübhanallahil-Azim
// La ilahe illallah, Allahu Ekber, Allahu Ekber ve lillahil-hamd