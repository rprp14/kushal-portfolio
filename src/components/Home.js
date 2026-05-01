import React from "react";
import profileImage from "../assets/profile.png";

const LightningIcon = () => (
  <svg className="lightning-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13 2L4 14h6l-1 8 11-14h-6l-1-6z" fill="currentColor" />
  </svg>
);

function Home() {
  return (
    <div className="section-shell home-shell">
      <div className="hero-copy">
        <p className="eyebrow">
          <LightningIcon /> Welcome
        </p>
        <h1>Hi, I&apos;m Kushal.</h1>
        <p className="hero-note">Electrical engineering | Hands-on learner</p>
        <p className="lead">
          I&apos;m an Electrical Engineering undergraduate with hands-on
          experience in NPD, product validation, and process improvement in the
          automotive domain. Skilled in testing, statistical quality control
          (Cp/Cpk), and root cause analysis (RCA, CAPA). Strong interest in
          product development, manufacturing processes, and R&D, with practical
          exposure to improving reliability, efficiency, and design validation
          of industrial components.
        </p>
        <div className="hero-tags">
          <span>Electrical Engineering</span>
          <span>Hands-on Projects</span>
          <span>Team Friendly</span>
        </div>
      </div>

      <div className="profile-card">
        <div className="profile-frame">
          <img src={profileImage} alt="Kushal profile" className="profile-image" />
          <div className="profile-overlay">
            <h2>Kushal</h2>
            <p>Electrical Engineering</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
