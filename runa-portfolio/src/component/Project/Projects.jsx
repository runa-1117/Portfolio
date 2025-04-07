import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

const projectData = [
  {
    title: "VoxTune",
    description: "Music Warmup App (Front-end)",
    img: "images/VoxTune.png",
    ghLink: "https://github.com/runa-1117/VoxTune",
    demoLink: "https://voxtune-info340-wi25.web.app/",
  },
  {
    title: "NeedsNow",
    description: "Disaster Relief Resource Donation Platform",
    img: "images/NeedsNow.png",
    ghLink: "https://github.com/yourname/blog-site",
    demoLink: "https://www.figma.com/proto/iCEO44VJEDPVpVmmn11eYP/WINFO-HACK---NeedsNow?node-id=0-1&t=wh1iKZ0sEiDbxDPz-1",
  },
  {
    title: "PhotoLINGO",
    description: "Language-bridging and Communication App",
    //img: "images/PhotoLingo.png",
    ghLink: "https://github.com/yourname/code-editor",
    demoLink: "https://www.figma.com/design/OhFbZtbz14A4Sd8Yshic4X/INFO360-Prototype?node-id=1-3&p=f&t=GePDEMIKlxuwt7v0-0",
  },
  {
    title: "Web Design",
    description: "Badminton Court Reservation Website Design",
    img: "images/badminton.png",
    ghLink: "https://github.com/yourname/blog-site",
    demoLink: "https://gaojiayijerry.wixsite.com/imabadminton",
  }
];

function ProjectCard({ title, description, img, ghLink, demoLink }) {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Img variant="top" src={img} alt={`${title} image`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="dark" href={ghLink} target="_blank">
          <BsGithub /> GitHub
        </Button>
        {demoLink && (
          <Button
            variant="secondary"
            href={demoLink}
            target="_blank"
            className="ms-2"
          >
            <CgWebsite /> Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

function Projects() {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <Row>
        {projectData.map((project, idx) => (
          <Col md={4} key={idx}>
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
