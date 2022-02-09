import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeImage from "../../Assets/programmer.svg";
import Particle from "../Particle";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> KASPER BAUN</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeImage} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
        </Container>

        <Container fluid className="home-about-section" id="about">
        <Row>
          <Col md={12} className="home-about-social" /*style={{ paddingBottom: 40, paddingTop: 100}}*/>
            <h1>FIND ME ON</h1>
          
            <ul className="home-about-social-links">

              <li className="social-icons">
                <a
                  href="https://www.github.com/KasperBaun"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kasper-baun/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kasperbaun/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>

            <p>Feel free to <span className="green"><b>connect</b></span> with me</p>

          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
