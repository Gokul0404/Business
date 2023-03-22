import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import '../Walk/Walk.css'

export default function Walk() {
  return (
    <div className="Walk_Main" id='walk'>
      <div className="Walk_SubMain">
        <div className="Walk_Container">
          <Container fluid>
            <Row>
              <Col sm={6}>
                <Image
                  src={require("../../walk.png")}
                  fluid
                  className=""
                ></Image>
              </Col>

              <Col sm={5}>
                <div className="pt-5">
                  <div className="pt-5">
                    <h2 className="h1 fw-bold w-75">
                      We always help to help uou with!
                    </h2>
                    <div className="pt-5">
                      <span className="d-flex ">
                        <i class="bi bi-graph-up-arrow Icon_Background fs-2 Walk_Icon_1"></i>
                        <span className="ps-4">
                          <h5 className="fw-bold">Enhance Your Career</h5>
                          <p className="w-75">
                            Loeran ipsum double sim amet conset efull codeing
                            edit cursus.
                          </p>
                        </span>
                      </span>
                      <span className="d-flex ">
                        <i class="bi bi-chat-dots Icon_Background  Walk_Icon_2 fs-2"></i>
                        <span className="ps-4">
                          <h5 className="fw-bold">Communicate With Others</h5>
                          <p className="w-75">
                            Loeran ipsum double sim amet conset efull codeing
                            edit cursus.
                          </p>
                        </span>
                      </span>
                      <span className="d-flex ">
                        <i class="bi bi bi-check2-circle Icon_Background Walk_Icon_3 fs-2"></i>
                        <span className="ps-4">
                          <h5 className="fw-bold">Find jobs with good Career</h5>
                          <p className="w-75">
                            Loeran ipsum double sim amet conset efull codeing
                            edit cursus.
                          </p>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
