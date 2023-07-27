import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import intelligentTraffic from "../../Assets/Projects/intelligentTraffic.jpg";
import vrMeta from "../../Assets/Projects/vrMeta.jpg";
import vidSurveillance from "../../Assets/Projects/vidSurveillance.jpg";
import cityLight from "../../Assets/Projects/cityLight.jpg";
import panoramic from "../../Assets/Projects/panoramic.jpg";
import cloudGaming from "../../Assets/Projects/cloudGaming.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Globe Telecom <strong className="purple">Solutions </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are tech solutions ventured by our company.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={intelligentTraffic}
              isBlog={true}
              title="Intelligent Traffic System"
              maturity="Ideation"
              description=""
              ghLink="https://github.com/soumyajit4419/Chatify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vrMeta}
              isBlog={true}
              title="VR Metaverse"
              maturity="PoC"
              description=""
              ghLink="/about"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vidSurveillance}
              isBlog={true}
              title="Video Surveillance and Analytics"
              description=""
              maturity="PoC"
              ghLink="https://github.com/soumyajit4419/Editor.io"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cityLight}
              isBlog={true}
              title="Intelligent City Light"
              maturity="PoC"
              description=""
              ghLink="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={panoramic}
              isBlog={true}
              title="Live Panoramic Broadcast"
              maturity="PoC"
              description=""
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloudGaming}
              isBlog={true}
              title="Cloud Gaming"
              maturity="PoC"
              description=""
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
