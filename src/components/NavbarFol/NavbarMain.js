import React, { useState, state } from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../NavbarFol/NavbarMain.css";

export default function NavbarMain() {


  

 
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div
      className={
        colorChange
          ? "nav_main_colorChange d-flex justify-content-center"
          : "nav_main d-flex justify-content-center"
      }
    >
      <div className="nav_submain ">
        <Navbar
          expand="lg"
          className="nav_height"
       
        >
          <Container fluid className="navbar_root p-4">
            <Image
              src={require("../../logo.png")}
              width="8%"
              className="Nav_Logo"
            />

            <Navbar.Toggle  />
            <Navbar.Collapse className="hamb_menu" id="na">
              <Nav
                className="mx-auto my-2 my-lg-0 fw-bold"
                style={{ maxHeight: "100px" }}
              >
                <Nav.Link className="px-4 T" href="#home">
                  Home
                </Nav.Link>
                <Nav.Link className="px-4 T" href="#job">
                  About Us
                </Nav.Link>

                <Nav.Link className="px-4 T" href="#walk">
                  Category
                </Nav.Link>

                <Nav.Link className="px-4 T" href="#post">
                  Post a Job
                </Nav.Link>

                <Nav.Link className="px-4 T" href="#footer">
                  Contact
                </Nav.Link>
              </Nav>

              <Form className="raw">
                <Button className="btn  btn-primary">Sign Up</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
