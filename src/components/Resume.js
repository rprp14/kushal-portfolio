import React from "react";
import resumePdf from "../assets/resume.pdf";

function Resume() {
  return (
    <div className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">📄 Resume</p>
        <h2>Take a quick look at my resume</h2>
      </div>

      <div className="content-card resume-card">
        <p>
          If you want a quick summary of my education, projects, and internship
          experience, you can download my resume here.
        </p>
        <a className="primary-button" href={resumePdf} download>
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;
