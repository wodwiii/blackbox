import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineRead } from "react-icons/ai";
import { ImFontSize } from "react-icons/im";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img className="project-card-view-img" variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{padding: "20px"}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <AiOutlineRead /> &nbsp;
          {"Read More"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
        <Card.Footer style={{fontSize: 11, paddingTop:50, textAlign:"left"}}>
          {"Maturity:"} {props.maturity}</Card.Footer>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
