import React from "react";

const certifications = [
  {
    title: "Battery & Battery Management System (BMS)",
    issuer: "eMobility Academy",
  },
  {
    title: "MATLAB Onramp",
    issuer: "MathWorks",
  },
  {
    title: "DIPEX",
    issuer: "DIPEX 2025 - State Level Model Competition, COEP Pune",
  },
];

function Certifications() {
  return (
    <div className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Certifications</p>
        <h2>Courses and certifications</h2>
      </div>

      <div className="content-card certifications-card">
        {certifications.map((certification) => (
          <article className="certification-entry" key={certification.title}>
            <h3>{certification.title}</h3>
            <p>{certification.issuer}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
