// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim

// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim

"use client";
import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function page() {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <Card
        style={{
          opacity: 0.97,
          color: "black",
          textAlign: "center",
          maxWidth: "700px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Card.Body>
          <Card.Title style={{ fontSize: "1.5rem" }}>İş Hukuku: İşçi Hakları</Card.Title>
          <Row className="g-4">
            {/* Sol Kolon */}
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Card style={{ textAlign: "center", height: "100%" }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.1rem" }}>İş Hukukunda Temel Haklar</Card.Title>
                  <Card.Text style={{ fontSize: "1rem" }}>
                    <br />
                    İş hukuku, işçi ve işveren arasındaki ilişkileri düzenleyen hukuki
                    çerçeveyi belirler. İşçi hakları, iş sözleşmeleri ve çalışma koşulları
                    bu hukuk dalının temel konularıdır.
                    <br /><br />
                    <strong>1. Çalışma Saatleri ve Fazla Mesai</strong>
                    <br />
                    İşçilere belirlenen çalışma saatleri ve fazla mesai karşılığı ücret
                    kanunen güvence altındadır.
                    <br /><br />
                    <strong>2. Ücret ve Sosyal Haklar</strong>
                    <br />
                    Asgari ücret, izin, prim ve sosyal güvenlik hakları işçilerin korunması
                    için düzenlenmiştir.
                    <br /><br />
                    <strong>3. İş Güvencesi</strong>
                    <br />
                    Haksız fesihlere karşı işçilerin korunması, tazminat ve işten çıkarma
                    süreçleri iş hukukunun temel unsurlarındandır.
                    <br /><br />
                    <strong>Sonuç</strong>
                    <br />
                    İş hukuku, işçi ve işverenin haklarını koruyarak adil bir çalışma
                    ortamı sağlamayı amaçlar. İşçiler bu hakları bilerek hareket etmelidir.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Sağ Kolon */}
            <Col xs={12} md={6} className="d-flex align-items-center">
              <Image
                src="https://www.istockphoto.com/photo/business-law-gm1095230046-291126152"
                style={{
                  border: "5px solid white",
                  borderRadius: "10px",
                  width: "100%",
                  height: "auto",
                  marginBottom: "10px",
                }}
                alt="İş Hukuku"
                fluid
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default page;
// Elhamdulillahirabbulalemin
// Allah U Ekber
// La ilahe illallah Muhammeden abduhu ve resuluhu
// Sübhanallah ve bihamdihi, Sübhanallahil-Azim
// La ilahe illallah, Allahu Ekber, Allahu Ekber ve lillahil-hamd