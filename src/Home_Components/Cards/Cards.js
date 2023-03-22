import React from "react";
import { Col, Container, Row } from "react-bootstrap";


import "../Cards/Cards.css";


export default function Cards() {
  return (
    <div className="Cards_Main" id="Secound">
      <div>
        <Container className="Cards_SubMain">
          <Row sm={12}>
            <Col className="d-flex flex-column justify-content-center align-items-center Cards_Contents">
              <p className="Cards_C_p1 fw-bold">How It Works ?</p>
              <h2 className="h1 fw-bold">Follow Easy 4 Steps</h2>
              <p className="text-align-center w-75 text-center fw-bold">
                There are many variations of passages of learn ipsum available,
                but the may have suff suffered alteration there are many and
                could may that
              </p>
            </Col>
          </Row>

          <Row className="d-flex  justify-content-center align-items-center w-100">
            <Col
              md={3}
              className="d-flex  justify-content-center align-items-center"
            >
              <div className="Cards_Tem w-100 d-flex  justify-content-center  ">
                <div className="val w-75 d-flex flex-column s-center pt-4">
                  <i class="bi bi-search fs-1 Icon_1"></i>
                  <h5 className="fw-bold">Search Job</h5>
                  <p>First you have to Search job here</p>
                </div>
              </div>
            </Col>
            <Col
              md={3}
              className="d-flex  justify-content-center align-items-center"
            >
              <div className="Cards_Tem w-100 d-flex  justify-content-center  ">
                <div className="val w-75 d-flex flex-column s-center pt-4">
                  <i class="bi bi-cloud-upload fs-1 Icon_2"></i>
                  <h5 className="fw-bold">Cv/Resume</h5>
                  <p>First you have to Search job here</p>
                </div>
              </div>
            </Col>
            <Col
              md={3}
              className="d-flex  justify-content-center align-items-center"
            >
              <div className="Cards_Tem w-100 d-flex  justify-content-center  ">
                <div className="val w-75 d-flex flex-column s-center pt-4">
                  <i class="bi bi-person fs-1 Icon_3"></i>
                  <h5 className="fw-bold">Create Account</h5>
                  <p>First you have to Search job here</p>
                </div>
              </div>
            </Col>
            <Col
              md={3}
              className="d-flex  justify-content-center align-items-center"
            >
              <div className="Cards_Tem w-100 d-flex  justify-content-center  ">
                <div className="val w-75 d-flex flex-column s-center pt-4">
                  <i class="bi bi-check2-circle fs-1 Icon_4"></i>
                  <h5 className="fw-bold">Apply Them</h5>
                  <p>First you have to Search job here</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
