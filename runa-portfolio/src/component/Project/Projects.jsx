import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard"; 
import "../../index.css"; 

const projectData = [
  {
    title: "VoxTune",
    shortDesc: "Music Warmup App (Front-end)",
    fullDesc:
    "• Developed a music warm-up platform using HTML, JavaScript, CSS, and React, optimizing warm-up flows and increasing new user completion rates by 35% and engagement by 25%.\n" +
    "• Integrated Firebase to store user warm-up preferences, enabling personalized experiences and reducing setup time by 40%, significantly improving usability.\n" +
    "• Enhanced user interaction and responsive design; improved navigation structure to ensure smooth performance across devices (desktop, tablet, mobile), achieving a 90% user satisfaction rate.",
    img: "images/VoxTune.png",
    ghLink: "https://github.com/runa-1117/VoxTune",
    demoLink: "https://voxtune-info340-wi25.web.app/",
    tags: ["HTML", "JavaScript", "CSS", "React", "FireBase"]
  },
  {
    title: "NeedsNow",
    shortDesc: "Disaster Relief Resource Donation Platform",
    fullDesc: 
    "• Researched 10+ existing solutions and optimized product design through iterative prototyping with 8 industry mentors.\n" +
    "• Developed a mobile app prototype with an interactive map and real-time tracking, increasing donor transparency by 60% and reducing mismatched donations by 40%.\n" +
    "• Awarded 2nd place among 70+ competing teams in the Best Overall Project category.",
    img: "images/NeedsNow.png",
    demoLink: "https://www.figma.com/proto/iCEO44VJEDPVpVmmn11eYP/WINFO-HACK---NeedsNow",
    tags: ["Figma", "UI/UX", "Interaction Design"]
  },
  {
    title: "PhotoLINGO",
    shortDesc: "Language-bridging and Communication App",
    fullDesc: 
    "• Led a 4-person team and designed Figma prototype addressing language barriers faced by older immigrants, achieving a 95% user satisfaction rate.\n" +
    "• Conducted user research with 10+ immigrant older adults, ensuring the app’s usability by integrating features like automatic translation and a photo gallery.\n" +
    "• Collaborated closely with stakeholders to continuously refine the design based on user feedback, resulting in a 40% increase in user engagement during pilot testing.",
    img: "images/PhotoLingo.png",
    demoLink: "https://www.figma.com/design/OhFbZtbz14A4Sd8Yshic4X/INFO360-Prototype?node-id=1-3&p=f&t=GePDEMIKlxuwt7v0-0",
    tags: ["Figma", "UI/UX", "Prototyping", "Accessibility"]
  },
  {
    title: "Badminton Court Reservation Website ",
    shortDesc: "Badminton Court Reservation Website Design",
    fullDesc: 
    "• Led a team of 5 to design and prototype a badminton court reservation website, completing three iterations within 9 weeks and incorporating user feedback to refine functionality.\n" +
    "• Conducted research with 50+ students, applying user experience design principles to create personas that reflected user behaviors and needs.\n" +
    "• Earned the Best Design Award and a perfect project score due to the innovative and efficient solution.",
    img: "images/badminton.png",
    demoLink: "https://gaojiayijerry.wixsite.com/imabadminton",
    tags: ["Web Design", "UI/UX", "Stakeholder Management"]
  }
];

function Projects() {
  return (
    <Container className="py-5">
      <h2 className="text-center projects-title">My Projects</h2>
      <Row>
        {projectData.map((project, index) => (
          <Col xs={12} md={6} key={index}> 
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
