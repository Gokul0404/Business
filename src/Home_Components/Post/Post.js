import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "../Post/Post.css";

export default function Post() {
  return (
    <div className="Post_Main " id="post">
      <div className="Post_SubMain mt-5">
        <Container className="mt-5">
          <Row className="mt-5">
            <Col className="mt-5 Post_First_Col" md={6}>
              <h2 className="h1 fw-bold w-75 Post_h1">
                500+ World Top Company Posted There Job.
              </h2>
              <p>We need UI/UX Designer for our Team</p>
              <button className="Post_Button">Post a Job</button>
            </Col>

            <Col md={6}>
              <Image
                src={require("../../post_1.jpg")}
                fluid
                className="pt-5"
              ></Image>
            </Col>
          </Row>
          <Row>
          
          </Row>
        </Container>
      </div>
    </div>
  );
}
