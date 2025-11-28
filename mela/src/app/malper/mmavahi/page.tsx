// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// La ilahe illAllah Muhammeden abdühü ve resulühü

// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
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
        backgroundColor: "#f2f2f2",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Card
        style={{
          opacity: 0.98,
          color: "black",
          textAlign: "center",
          maxWidth: "850px",
          width: "100%",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          borderRadius: "12px",
        }}
      >
        <Card.Body>
          <Card.Title style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
            Hukuki Danışmanlık – Genel Bilgi
          </Card.Title>

          <Row className="g-4 mt-3">
            {/* Sol Kısım */}
            <Col xs={12} md={6}>
              <Card style={{ height: "100%", textAlign: "left", padding: "15px" }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.2rem" }}>
                    Tunç Hukuk Bürosu – Hukuki Destek
                  </Card.Title>
                  <Card.Text style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                    Hukuki danışmanlık, bireylerin ve kurumların haklarını
                    koruyabilmeleri, hukuki süreçleri doğru yönetebilmeleri ve
                    karşılaşabilecekleri riskleri en aza indirmeleri açısından
                    büyük önem taşır.
                    <br />
                    <br />
                    Tunç Hukuk Bürosu olarak; ceza hukuku, aile hukuku,
                    ticaret hukuku, iş hukuku ve bilişim hukuku başta olmak
                    üzere birçok alanda profesyonel danışmanlık sağlıyoruz.
                    <br />
                    <br />
                    <strong>Doğru hukuk desteği, doğru zamanda alınmalıdır.</strong>
                    <br />
                    Hukuki süreçlerde bilgi eksikliği, hak kaybına, maddi zarara
                    veya geri dönüşü olmayan sonuçlara neden olabilir.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Sağ Kısım */}
            <Col xs={12} md={6} className="d-flex align-items-center">
              <Image
                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80"
                style={{
                  border: "4px solid white",
                  borderRadius: "12px",
                  width: "100%",
                  height: "auto",
                }}
                alt="Hukuk – Tunç Hukuk Bürosu"
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
// Estağfirullah El-Azim
// La ilahe illAllah Muhammeden abdühü ve resulühü
// Allahu Ekber, Allahu Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Allahumme salli ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Elhamdulillahirabbulalemin