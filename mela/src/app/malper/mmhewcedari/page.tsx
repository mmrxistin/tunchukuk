// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// La ilahe illAllah Muhammeden Abdühü ve Resulühü
// ELHAMDULILLAHİRABBİL'ALAMİN
// Sübhanallah ve bihamdihi, Sübhanallahil-Azim
// La ilahe illallah, Allahu Ekber, Allahu Ekber ve lillahil-hamd
// Bismillahirrahmanirahim

// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allahu Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim

"use client";
import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export default function Page() {
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
        }}
      >
        <Card.Body>
          <Card.Title style={{ fontSize: "1.5rem" }}>
            Hukuk ve Adalet
          </Card.Title>

          <Row className="g-4">
            {/* Sol Taraf */}
            <Col xs={12} md={6}>
              <Card style={{ height: "100%" }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.1rem" }}>
                    Hukukun Toplumdaki Yeri
                  </Card.Title>

                  <Card.Text style={{ fontSize: "1rem", textAlign: "left" }}>
                    Hukuk, toplum düzeninin korunması, bireylerin hak ve
                    özgürlüklerinin güvence altına alınması ve adaletin
                    sağlanması için temel bir sistemdir. Modern devletlerde
                    hukukun üstünlüğü ilkesi, hem kamu otoritesini hem de
                    bireyleri bağlayan evrensel bir prensip olarak kabul
                    edilmektedir.

                    <br /><br />

                    <strong>Hukukun Temel İlkeleri</strong>
                    <br />
                    Hukuk; adalet, eşitlik, insan hakları, güvenlik ve
                    öngörülebilirlik gibi temel prensiplere dayanır. Bu
                    ilkeler, hem yargı süreçlerinin sağlıklı işlemesini hem de
                    bireysel hakların korunmasını sağlar.

                    <br /><br />

                    <strong>Sonuç</strong>
                    <br />
                    Hukuk, toplumların barış içinde yaşamasını ve bireylerin
                    adil bir ortamda hayatlarını sürdürebilmesini sağlayan
                    vazgeçilmez bir mekanizmadır. Adaletin tesisi, güçlü ve
                    bağımsız bir hukuk sistemi sayesinde mümkün olur.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Sağ Taraf */}
            <Col xs={12} md={6} className="d-flex align-items-center">
              <Image
                src="https://img.freepik.com/free-photo/justice-law-concept-with-books_93675-129039.jpg"
                alt="Hukuk ve Adalet"
                fluid
                style={{
                  border: "5px solid white",
                  borderRadius: "10px",
                  width: "100%",
                }}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
// Allahumme salli ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Elhamdulillahirabbulalemin