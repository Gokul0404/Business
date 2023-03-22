import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import '../ContentMore/Content.css'

export default function Content() {
  return (
    <div className="Content_Over_Main">
      <Container>
        <Row>
          <Col md={6}>
            <Image src={require("../../content.png")}  width="100%"  fluid></Image>
          </Col>

          <Col md={6}>
            <Card style={{ width: "30rem" }} className="border-0 Content_Main pt-5">
              <Card.Body className="pt-5">
                <Card.Title>
                  <h2
                    className="h1 fw-bold "
                    style={{
                      color: "rgb(12,12,31)",
                    }}
                  >
                    Over 10,000+ Talented People Registered in Our Website.
                  </h2>
                </Card.Title>
                <Card.Text className="mt-4">
                  There are many variations of passages of loearn Ipsum
                  available but the majarity home sufferd afternoon
                </Card.Text>
                              <Button className="Apply_Btn mt-3">
                  Explore More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
