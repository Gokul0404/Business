import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import "../Jop/Jop.css";

export default function Jop() {
  return (
    <div className="Jop_Main">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <Card style={{ width: "70rem" }} className="border-0 Jop_Card ">
              <Card.Body>
                <Card.Text
                  className="text-center h1 fw-bold"
                  style={{
                    color: "rgb(12,12,31)",
                  }}
                >
                  What a Job Holder says About Us{" "}
                </Card.Text>
                <Card.Text className="text-center d-flex justify-content-center">
                  <p className="w-50 text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content the bulk of the card's
                    content.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center">
          <Col className="d-flex justify-content-center">
            <div style={{ width: "18rem" }} className="pt-3">
              <span className="d-flex justify-content-center align-items-center text-center">
                <Image
                  src={require("../../job1.png")}
                  width="25%"
                  className="Images_Job"
                ></Image>
              </span>
              <Card
                style={{ width: "18rem" }}
                className="Job_Card_Body_2 border-0"
              >
                <Card.Body className="d-flex flex-column justify-content-center pt-5">
                  <Card.Title className="text-center Card_2_Title">
                    Andrew Smith
                  </Card.Title>
                  <Card.Text className="text-center">
                    One Year With Us
                  </Card.Text>
                  <Card.Text className="text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>

                  <Card.Text className="text-center Card_Star">
                    <i class="bi bi-star-fill fs-5 ps-1"></i>
                    <i class="bi bi-star-fill fs-5 ps-1"></i>
                    <i class="bi bi-star-fill fs-5 ps-1"></i>
                    <i class="bi bi-star-fill fs-5 ps-1"></i>
                    <i class="bi bi-star-half fs-5 ps-1"></i>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col className="d-flex justify-content-center">
            <div style={{ width: "18rem" }} className="pt-3">
              <span className="d-flex justify-content-center align-items-center text-center">
                <Image
                  src={require("../../job2.png")}
                  width="25%"
                  className="Images_Job"
                ></Image>
              </span>
              <Card
                style={{ width: "18rem" }}
                className="Job_Card_Body_2 border-0"
              >
                <Card.Body className="d-flex flex-column justify-content-center pt-5">
                  <Card.Title className="text-center Card_2_Title">
                    Andrew Smith
                  </Card.Title>
                  <Card.Text className="text-center">
                    One Year With Us
                  </Card.Text>
                  <Card.Text className="text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>

                  <Card.Text className="text-center Card_Star">
                    <i class="bi bi-star-fill fs-5 ps-1"></i>
                    <i class="bi bi-star-fill fs-5 ps-1"></i>
                    <i class="bi bi-star-fill fs-5 ps-1"></i>
                    <i class="bi bi-star-fill fs-5 ps-1"></i>
                    <i class="bi bi-star-half fs-5 ps-1"></i>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col className="d-flex justify-content-center">
            <div style={{ width: "18rem" }} className="pt-3">
              <span className="d-flex justify-content-center align-items-center text-center">
                <Image
                  src={require("../../job3.png")}
                  width="25%"
                  className="Images_Job"
                ></Image>
              </span>
              <Card
                style={{ width: "18rem" }}
                className="Job_Card_Body_2 border-0"
              >
                <Card.Body className="d-flex flex-column justify-content-center pt-5">
                  <Card.Title className="text-center Card_2_Title">
                    Andrew Smith
                  </Card.Title>
                  <Card.Text className="text-center">
                    One Year With Us
                  </Card.Text>
                  <Card.Text className="text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>

                  <Card.Text className="text-center Card_Star">
                    <i class="bi bi-star-fill fs-5 ps-1"></i>
                    <i class="bi bi-star-fill fs-5 ps-1"></i>
                    <i class="bi bi-star-fill fs-5 ps-1"></i>
                    <i class="bi bi-star-fill fs-5 ps-1"></i>
                    <i class="bi bi-star-half fs-5 ps-1"></i>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
