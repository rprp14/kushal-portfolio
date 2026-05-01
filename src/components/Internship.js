import React from "react";

function Internship() {
  return (
    <div className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Organisations</p>
        <h2>Internship experience</h2>
      </div>

      <div className="content-card internship-card">
        <div className="internship-header">
          <div>
            <h3>Dhoot Autocomponets Pvt.Ltd</h3>
            <p>NPD Testing &amp; Quality Intern</p>
          </div>
          <span>12/01/2026 - Present</span>
          <span>Chhatrapati Sambhajinagar</span>
        </div>

        <div className="internship-body">
          <p>
            Performed product validation and reliability testing as per HES,
            JASO, and OEM standards to ensure compliance and design readiness.
          </p>
          <p>
            Conducted statistical analysis (Cp, Cpk) to evaluate process
            capability and improve product consistency.
          </p>
          <p>
            Executed root cause analysis (RCA) and CAPA, reducing defect
            occurrence and improving process robustness.
          </p>
          <p>
            Supported pilot production builds and GD&amp;T-based inspection,
            ensuring dimensional accuracy and manufacturability.
          </p>
          <p>
            Collaborated with cross-functional teams (design, production,
            quality) to enhance product performance and manufacturing
            efficiency.
          </p>
          <p>
            Implemented a Kaizen (continuous improvement) initiative to
            optimize testing/ process workflow, reducing inefficiencies and
            improving overall process reliability.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Internship;
