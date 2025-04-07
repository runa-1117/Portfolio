import React from  "react";
import "../../index.css"; 

function About() {
    return (
      <section className="about-section">
        <h1 className="about-header">Hi there, this is Runa!</h1>
        <p className="about-text">
          I’m a UX designer studying at the University of Washington, where I pursued a degree in Informatics with a concentration in{' '}
          <a
            href="https://ischool.uw.edu/programs/informatics"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'underline', color: '#2563eb' }} // blue link
          >
            Human-Computer Interaction (HCI)
          </a>{' '}
          and Data Science.
        </p>
        <p className="about-text">
          Thanks for taking the time to explore my journey—I’m excited to share my story with you!
        </p>
        {/* <img src={profileImage} alt="Runa" className="about-img" /> */}
      </section>
    );
  }
  

export default About;
