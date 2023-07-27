import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">VR Metaverse</span> is a virtual environment that allows you 
            to merge the cutting-edge technology of Augmented Reality with Virtual Reality and more, 
            allowing you to live as you would in real life, but with a virtual shape and experience.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Advanced Traffic Management System
            </li>
            <li className="about-activity">
              <ImPointRight /> Advanced Traveler Information System
            </li>
            <li className="about-activity">
              <ImPointRight /> Advanced Public Transportation System
            </li>
            <li className="about-activity">
              <ImPointRight />  Advanced Commercial Vehicles Operations system
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
