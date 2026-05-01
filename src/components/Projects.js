import React from "react";

const projects = [
  {
    title: "Non-Electrical Solar Tracker (SIH 2024), Renewable Energy",
    description:
      "Designed and developed a mechanical solar tracking system to improve energy efficiency without electronic control, focusing on cost-effective and sustainable product design.",
  },
  {
    title: "BESS Integration with Solar Power, MATLAB, BESS",
    description:
      "Modeled and optimized a solar-BESS integrated system using MATLAB to enhance energy efficiency, storage utilization, and system reliability.",
  },
  {
    title: "Remote Operated Accelerator  & Brake System (DIPEX 2025), Arduino, Stepper Motors",
    description:
      "Developed a hand-controlled acceleration and beaking system for drivers with lower-limb disabilities.",
  },
  {
    title: "Li-Fi Technology",
    description:
      "Built a visible-light data transmission system offering fast and secure wireless communication.",
  },
];

function Projects() {
  return (
    <div className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">🛠 Projects</p>
        <h2>Some projects I worked on</h2>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
