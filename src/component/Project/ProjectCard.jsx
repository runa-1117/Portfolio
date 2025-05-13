import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import "../../index.css"; 

function ProjectCard({ title, shortDesc, fullDesc, img, ghLink, demoLink, tags = [] }) {
  return (
    <div className="project-hover-wrapper">
      <Card className="project-hover-card">
        <div className="project-image-wrapper">
          {img && <Card.Img src={img} alt={`${title} image`} className="project-image" />}

          <div className="project-hover-overlay">
            <Card.Body className="overlay-content">
              <Card.Text className="project-full-desc">{fullDesc}</Card.Text>

              <div className="mb-2">
                {tags.map((tag, index) => (
                  <Badge bg="secondary" key={index} className="me-1">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="mt-2">
                {ghLink && (
                  <Button variant="dark" href={ghLink} target="_blank" className="me-2">
                    <BsGithub /> GitHub
                  </Button>
                )}
                {demoLink && (
                  <Button variant="secondary" href={demoLink} target="_blank">
                    <CgWebsite /> Demo
                  </Button>
                )}
              </div>
            </Card.Body>
          </div>
        </div>

        <Card.Body className="text-center">
          <Card.Title>{title}</Card.Title>
          <Card.Text className="text-muted">{shortDesc}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectCard;
