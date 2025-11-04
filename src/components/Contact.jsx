import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact</h2>
        <p className="sub">Want to work together or have a quick question? Drop an email or connect on GitHub / LinkedIn.</p>
        <div className="contact-grid">
          <div className="contact-card">
            <h4>Email</h4>
            <p><a href="mailto:rangalohitaksh@gmail.com">rangalohitaksh@gmail.com</a></p>
          </div>
          <div className="contact-card">
            <h4>GitHub</h4>
            <p><a href="https://github.com/LohitakshRanga" target="_blank" rel="noreferrer">github.com/LohitakshRanga</a></p>
          </div>
          <div className="contact-card">
            <h4>LinkedIn</h4>
            <p><a href="https://linkedin.com/in/lohitakshranga" target="_blank" rel="noreferrer">linkedin.com/in/lohitakshranga</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
