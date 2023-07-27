import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import vrMeta from "../../Assets/vrMeta.svg";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              VR <strong className="purple">Metaverse</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "100px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={vrMeta} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 style={{fontSize: "1.6em", textAlign: "left" , paddingLeft:"20px"}}>
          Inquire About This <strong className="purple">></strong>
        </h1>


      </Container>
    </Container>
  );
}

export default About;
