import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../assets/react.svg"; // ✅ 请换成你自己的图像路径
import Type from "./Type"; 
// import Particle from "../Particle"; // 你可以先注释它，后续再加

function Home() {
  return (
    <section id="home" className="home-section">
      {/* <Particle /> */}

      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-start">
            <h1 className="intro-title">
              Hello, I'm <span className="main-name">Runa.</span>
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h1 className="type-heading">
              I'M <span className="typewriter-text"><Type /></span>
            </h1>
            <p className="intro-subtitle">
              I specialize in Human-Computer Interaction (HCI) and UX Design,
              with a curious, passionate, and fast-learning mindset that drives
              innovative problem-solving.
            </p>
            <p className="intro-subtitle">
              Seeking new opportunities—feel free to reach out!
            </p>
          </Col>

          <Col md={6} className="text-center">
            <img
            src="images/profile.png"
            alt="Runa profile"
            className="img-fluid"
            style={{ maxHeight: "400px", borderRadius: "12px" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
