import React from "react";

function About() {
  return (
    <div className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Education</p>
        <h2>Academic background</h2>
      </div>

      <div className="content-card education-card">
        <div className="education-entry">
          <h3>B.Tech in Electrical Engineering</h3>
          <p>Maharashtra Institute of Technology, Chhatrapati Sambhajinagar</p>
          <span>CGPA: 7.06 / 10</span>
        </div>

        <div className="education-entry">
          <h3>Higher Secondary Certificate</h3>
          <p>Shri Saraswati Junior College, Akot</p>
          <span>85.83%</span>
        </div>

        <div className="education-entry">
          <h3>Secondary School Certificate</h3>
          <p>Vasundhara Dnyanpeeth, Akot</p>
          <span>72.20%</span>
        </div>

        
      </div>
    </div>
  );
}

export default About;
