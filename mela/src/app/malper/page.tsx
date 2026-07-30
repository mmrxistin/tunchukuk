// Bismillahirahmanirahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin 
// La ilahe illAllahu vahdehu la şerike leh, lehul mulku ve lehul hamdu ,yuhyi ve yumit,biyadihil xayr ve huve ala kulli şeyin kadir
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// La ilahe illallah, Muhammedur Resulullah
"use client";
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function Page() {
  return (
    <main className="flex-grow">
      <Container className="py-5">
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h1 className="display-5 fw-bold">Rosa Kadın Derneği</h1>
            <p className="lead">
              Kadınların güçlenmesi, eğitim ve dayanışma için birlikteyiz. Projelerimize
              katılın, destek olun veya gönüllü olun.
            </p>
            <div className="d-flex gap-2">
              <Button href="/signup" variant="primary">Üye Ol</Button>
              <Button href="/malper/projeler" variant="outline-primary">Projelerimiz</Button>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80&auto=format&fit=crop" alt="Rosa Kadınlar" className="img-fluid rounded shadow" />
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Eğitim Programları</Card.Title>
                <Card.Text>
                  Mesleki eğitimlerden psikososyal desteğe kadar geniş programlarımızla
                  kadınların becerilerini artırıyoruz.
                </Card.Text>
                <Button href="/malper/egitim" variant="outline-primary">Detaylar</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Toplumsal Dayanışma</Card.Title>
                <Card.Text>
                  Yerel ağlarla dayanışma projeleri, destek grupları ve danışmanlık hizmetleri.
                </Card.Text>
                <Button href="/malper/dayanisma" variant="outline-primary">Detaylar</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Gönüllülük</Card.Title>
                <Card.Text>
                  Gönüllü ekibimize katılın ve projelerimizin bir parçası olun.
                </Card.Text>
                <Button href="/malper/gonulluler" variant="outline-primary">Katıl</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  )
}
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// SubhanAllah, Elhamdulillah, Allahu Ekber
// Allah u Ekber Ve Lillahil Hamd, Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah