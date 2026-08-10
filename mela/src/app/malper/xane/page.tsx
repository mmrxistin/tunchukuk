// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illAllah
// SubhanAllah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// Allah u Ekber Ve Lillahil Hamd
"use client";
import React from "react";
import { Card, Row, Col, Alert } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Xane from "./ForYouFeed";

function page() {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column", // mobilde dikey hizalama
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
          <Card.Title style={{ fontSize: "1.5rem" }}>Pirtukxane</Card.Title>
          <Row className="g-4">
            {/* Sol Kolon */}
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Card style={{ textAlign: "center", height: "100%" }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.1rem" }}>Ekoloji Haberleri</Card.Title>
                  <Card.Text style={{ fontSize: "1rem" }}>
                    <br />
                    <br />
                    <strong>Sonuç</strong>
                    <br />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Sağ Kolon */}
            <Col xs={12} md={6} className="d-flex align-items-center">
              <Xane/>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/* Alert ve ForYouFeed Alt Kısma Taşındı */}
     
    </div>
  );
}

export default page;
//ELHAMDULILLAH ELHAMDULILLAH ELHAMDULILLAH
//ELHAMDULILLAHIRABBILALEMIN


// La ilahe illALLAH u vahdehu la şerike leh, lehul-mulku ve lehul-hamdu
// Yuhyi ve yumit
// Biyadihil xayr
// ve huve ala kulli şey'in kadir