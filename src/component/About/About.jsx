import React from  "react";
import "../../index.css"; 

function About() {
  return (
    <section className="about-section">
      <div className="intro-section">
        <div className="intro-text animated-text">
          <h1 className="about-header">Hi there, this is Runa!</h1>
          <p className="about-text">
            I’m a UX designer studying at the University of Washington, where I pursued a degree in Informatics with a concentration in{" "}
            <a
              href="https://ischool.uw.edu/programs/informatics"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline", color: "#2563eb" }}
            >
              Human-Computer Interaction (HCI)
            </a>{" "}
            and Data Science.
          </p>
          <p className="about-text">
            Thanks for taking the time to explore my journey—I’m excited to share my story with you!
          </p>
        </div>
        <div className="intro-image">
          <img src="/Portfolio/images/me.jpg" alt="Runa portrait" className="about-img" />
        </div>
      </div>

      <div className="about-section-block">
        <h2 className="about-subheader">Discovering My Passion for Design</h2>
        <p className="about-text-block">
          Before coming to university, I had no idea about Informatics and what career path I wanted to pursue. All I knew was that I wanted to do something creative and make a real impact on people’s lives.
          During my freshman year, an introductory course in Informatics sparked my interest in UX design. I was captivated by how design goes beyond visual aesthetics to solve real-world problems and drive meaningful change.
        </p>
      </div>

      <div className="about-section-block">
        <h2 className="about-subheader">Design is for Others, Not Yourself</h2>
        <p className="about-text-block">
          From developing a language-learning app that bridges generational gaps to researching how immigrant older adults navigate technology,
          I’ve learned that the best designs emerge when you put people first.
          Every project has reinforced my belief that design isn’t just about creating beautiful interfaces—it’s about understanding users and crafting solutions that truly resonate with them.
        </p>
      </div>

      <div className="about-section-block">
        <h2 className="about-subheader">Shaping Meaningful Experiences Everywhere</h2>
        <div className="about-block">
          <p className="about-text-block">
            Design is everywhere, influencing how we connect, learn, and grow. Whether analyzing data trends or building user-centered products,
            I’m passionate about creating experiences that inspire, empower, and leave a lasting impact.
            As I continue this journey, I remain dedicated to designing with empathy and purpose—one interaction at a time.
          </p>
          <img
            src="/Portfolio/images/hackathon.jpg"
            alt="Hackathon and projects"
            className="about-img-block"
          />
        </div>
      </div>

      <div className="about-section-block">
        <h2 className="about-subheader">Outside of Work</h2>
        <div className="interests-grid">
          <div className="interest-card">
            <img src="/Portfolio/images/travel.jpg" alt="Traveling" className="interest-img" />
            <p className="interest-label">Traveling</p>
          </div>
          <div className="interest-card">
            <img src="/Portfolio/images/workout.jpg" alt="Workout" className="interest-img" />
            <p className="interest-label">Working out</p>
          </div>
          <div className="interest-card">
            <img src="/Portfolio/images/livehouse.jpg" alt="Music" className="interest-img" />
            <p className="interest-label">Going to Livehouses</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
