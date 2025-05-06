import React, { useEffect } from "react";
import "../../index.css";

function Resume() {
  useEffect(() => {
    window.open("/resume.pdf", "_blank");
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "100px 20px" }}>
      <h1>Redirecting to Resume...</h1>
      <p>
        If the PDF didn’t open,{" "}
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          click here
        </a>.
      </p>
    </div>
  );
}

export default Resume;
