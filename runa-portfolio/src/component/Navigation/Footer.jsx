import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "../../index.css"; 


function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        {/* Phone */}
        <Col md={4} className="footer-copy">
          <h5>Phone:</h5>
          <p>206-476-4351</p>
        </Col>

        {/* Email */}
        <Col md={4} className="footer-copy">
          <h5>Email:</h5>
          <p>hejueru16@gmail.com</p>
          <p>jueruh@uw.edu</p>
        </Col>

        <Col md={4} className="footer-social">
          <ul className="social-icons-list">
            <li>
              <a href="https://github.com/runa-1117" target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jueru-he/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/hjr_runa?igsh=bHg4ZXlnZThxM3cx&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col className="copyright">
          <p>© {year} Runa He</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
