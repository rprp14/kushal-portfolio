import React from "react";
import profileImage from "../assets/profile.jpeg";

function Contact() {
  return (
    <div className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">📬 Contact</p>
        <h2>Let's connect</h2>
      </div>

      <div className="content-card about-card">
        <p>
          If you'd like to reach out, you can contact me through email, phone,
          or LinkedIn.
        </p>
      </div>

      <div className="contact-avatar-card">
        <div className="contact-avatar">
          <img src={profileImage} alt="Kushal profile avatar" />
        </div>
        <div className="contact-avatar-copy">
          <h3>Kushal Gorde</h3>
          <p>Electrical Engineering | Open to connect</p>
        </div>
      </div>

      <div className="contact-grid" style={{ marginTop: "18px" }}>
        <a className="contact-card" href="mailto:kushal@example.com">
          <span>Email</span>
          <strong>kushalgorde999@gmail.com</strong>
        </a>
        <a className="contact-card" href="tel:+910000000000">
          <span>Phone</span>
          <strong>+91 9022253632</strong>
        </a>
        <a
          className="contact-card"
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          <span>LinkedIn</span>
          <strong>https://www.linkedin.com/in/kushal-gorde-3554862a0/</strong>
        </a>
      </div>
    </div>
  );
}

export default Contact;
