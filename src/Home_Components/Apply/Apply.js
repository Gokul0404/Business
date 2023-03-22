import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import '../Apply/Apply.css'

export default function Apply() {
  return (
    <div className="Apply_Main" id='#apply'>
      <div className="Apply_SubMain">
        <Container>
          <Row>
            <Col className=" d-flex justify-content-center">
              <span className=" d-flex justify-content-center flex-column w-50 ">
                <h2 className="h1  text-center Heading_Apply fw-bold">
                  Grab these exciting offer and apply now to use.
                </h2>
                <span className="text-center">Part Time And Full Time</span>
              </span>
            </Col>
          </Row>

          <Row className='Secound_Row'>
            <Col lg={3}  className="pt-5">
              <div className="Apply_card d-flex justify-content-center">
                <div className="layer_2">
                  <div className="d-flex justify-content-center pt-3">
                    <Image src={require("../../a.png")} width="50%"></Image>
                  </div>
                  <div className="pt-4">
                    <div className="d-flex flex-column justify-content-center">
                      <h5 className="text-center Apply_Card_Head">
                        Database Programer
                      </h5>
                      <p className="text-center">Available Business</p>
                    </div>
                    <div>
                      <div className="d-flex">
                        <i class="bi bi-coin"></i>
                        <p className="ps-2">$10,00,000 /Monthly</p>
                      </div>
                      <div className="d-flex">
                        <i class="bi bi-geo-alt"></i>
                        <p className="ps-2">Stant Road Corner / US</p>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex justify-content-evenly">
                        <button className="button_heart">
                          <i class="bi bi-heart-fill heart fs-4"></i>
                        </button>
                        <button className="button_Apply">Apply Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3}   className="pt-5">
              <div className="Apply_card d-flex justify-content-center Apply_Color_1">
                <div className="layer_2">
                  <div className="d-flex justify-content-center pt-3">
                    <Image src={require("../../a3.png")} width="35%"></Image>
                  </div>
                  <div className="pt-4">
                    <div className="d-flex flex-column justify-content-center">
                      <h5 className="text-center Apply_Card_Head">
                        Database Programer
                      </h5>
                      <p className="text-center">Available Business</p>
                    </div>
                    <div>
                      <div className="d-flex">
                        <i class="bi bi-coin"></i>
                        <p className="ps-2">$10,00,000 /Monthly</p>
                      </div>
                      <div className="d-flex">
                        <i class="bi bi-geo-alt"></i>
                        <p className="ps-2">Stant Road Corner / US</p>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex justify-content-evenly">
                        <button className="button_heart Apply_Color_1_1">
                          <i class="bi bi-heart-fill heart fs-4"></i>
                        </button>
                        <button className="button_Apply Apply_Color_1_1">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} className="pt-5">
              <div className="Apply_card d-flex justify-content-center Apply_Color_2">
                <div className="layer_2">
                  <div className="d-flex justify-content-center pt-3">
                    <Image src={require("../../a2.png")} width="38%"></Image>
                  </div>
                  <div className="pt-4">
                    <div className="d-flex flex-column justify-content-center">
                      <h5 className="text-center Apply_Card_Head">
                        Database Programer
                      </h5>
                      <p className="text-center">Available Business</p>
                    </div>
                    <div>
                      <div className="d-flex">
                        <i class="bi bi-coin"></i>
                        <p className="ps-2">$10,00,000 /Monthly</p>
                      </div>
                      <div className="d-flex">
                        <i class="bi bi-geo-alt"></i>
                        <p className="ps-2">Stant Road Corner / US</p>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex justify-content-evenly">
                        <button className="button_heart Apply_Color_2_1">
                          <i class="bi bi-heart-fill heart fs-4"></i>
                        </button>
                        <button className="button_Apply Apply_Color_2_1">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} className="pt-5">
              <div className="Apply_card d-flex justify-content-center Apply_Color_3">
                <div className="layer_2">
                  <div className="d-flex justify-content-center pt-3">
                    <Image src={require("../../a4.png")} width="40%"></Image>
                  </div>
                  <div className="pt-4">
                    <div className="d-flex flex-column justify-content-center">
                      <h5 className="text-center Apply_Card_Head">
                        Database Programer
                      </h5>
                      <p className="text-center">Available Business</p>
                    </div>
                    <div>
                      <div className="d-flex">
                        <i class="bi bi-coin"></i>
                        <p className="ps-2">$10,00,000 /Monthly</p>
                      </div>
                      <div className="d-flex">
                        <i class="bi bi-geo-alt"></i>
                        <p className="ps-2">Stant Road Corner / US</p>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex justify-content-evenly">
                        <button className="button_heart Apply_Color_3_1">
                          <i class="bi bi-heart-fill heart fs-4"></i>
                        </button>
                        <button className="button_Apply Apply_Color_3_1">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
