// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
// La havle ve la kuvvete illa billahil aliyyil azim
// Allah u Ekber
// La ilahe illallah Muhammedur Resulullah
// Subhanallah, Elhamdulillah, Allahu Ekber, La ilahe illallah
// Estağfirulllah El-Azim
"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function AdminPage() {
  return (
    <Container fluid style={{ background: "#f8f9fa", minHeight: "100vh", padding: "20px" }}>
      <h2 className="mb-4 text-center">Tunç Hukuk Bürosu - Admin Paneli</h2>

      <Row className="mb-4">
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Davalar</Card.Title>
              <Card.Text>Hukuk davalarını ve müvekkil bilgilerini yönet.</Card.Text>
              <Button variant="primary" href="/admin/davalar">
                Git
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Makaleler & Paylaşımlar</Card.Title>
              <Card.Text>Hukuk makalelerini ve blog paylaşımlarını yönet.</Card.Text>
              <Button variant="primary" href="/admin/makaleler">
                Git
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Kategoriler</Card.Title>
              <Card.Text>Hukuk içerik kategorilerini yönet ve ekle.</Card.Text>
              <Button variant="primary" href="/admin/kategoriler">
                Git
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Müvekkiller</Card.Title>
              <Card.Text>Müvekkil bilgilerini görüntüle ve güncelle.</Card.Text>
              <Button variant="primary" href="/admin/muvekkiller">
                Git
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Avukatlar</Card.Title>
              <Card.Text>Avukat profillerini ve yetkilerini yönet.</Card.Text>
              <Button variant="primary" href="/admin/avukatlar">
                Git
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Site Yönetimi</Card.Title>
              <Card.Text>Web sitesini ve genel ayarları yönet.</Card.Text>
              <Button variant="primary" href="/admin/site">
                Git
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminPage;


// Elhamdulillahirabbulalemin

// Sübhanallah ve bihamdihi, Sübhanallahil-Azim
// La ilahe illallah, Allahu Ekber, Allahu Ekber ve lillahil-hamd
// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin
// Allahumme salli ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// La ilahe illAllah Muhammeden Abdühü ve Resulühü
// ELHAMDULILLAHİRABBİL'ALAMİN