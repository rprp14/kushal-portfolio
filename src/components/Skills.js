import React from "react";

const coreCompetencies = [
  "Product Development & Validation",
  "Process Improvement & Optimization",
  "Root Cause Analysis (RCA, 5 Why, Fishbone)",
  "Statistical Quality Control (Cp, Cpk)",
  "GD&T & Engineering Inspection",
  "Manufacturing Process Understanding",
  "Data Analysis & Technical Reporting",
];

const skillAreas = [
  {
    title: "Skills",
    items: [
      "Process Engineering",
      "Lean Manufacturing (basic)",
      "Problem Solving Tools (7QC tools)",
      "Continuous Improvement",
    ],
  },
  {
    title: "Tools",
    items: ["MATLAB Simulink", "Arduino IDE", "MS Excel", "PowerPoint", "Word"],
  },
  {
    title: "Soft Skills",
    items: [
      "Quick Learner",
      "Team Work",
      "Effective Communicator",
      "Adaptable",
      "Problem Solver",
      "Ambitious",
      "Analytical Thinking",
    ],
  },
];

const skillAvatars = [
  { label: "MATLAB", tone: "tone-cyan" },
  { label: "Arduino", tone: "tone-teal" },
  { label: "Excel", tone: "tone-green" },
  { label: "RCA", tone: "tone-amber" },
  { label: "GD&T", tone: "tone-violet" },
  { label: "Lean", tone: "tone-sky" },
];

function Skills() {
  return (
    <div className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <h2>Technical skills and core strengths</h2>
      </div>

      <div className="content-card skills-avatar-strip">
        {skillAvatars.map((avatar) => (
          <div className={`skill-avatar ${avatar.tone}`} key={avatar.label}>
            <span>{avatar.label}</span>
          </div>
        ))}
      </div>

      <div className="skills-grid skills-grid--expanded">
        <article className="skill-card skill-card--full">
          <h3>Core Competencies</h3>
          <ul>
            {coreCompetencies.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        {skillAreas.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Skills;
