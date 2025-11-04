import React from "react";

const About = () => {
  return (
    <section id="about" className="section glass">
      <div className="container section-grid">
        <div className="left">
          <h2>About Me</h2>
          <p className="lead">
            Full-stack developer skilled in ReactJS and Laravel with hands-on
            experience delivering e-commerce, portfolio, and business websites.
            Strong in problem-solving, client communication, and building
            scalable web solutions.
          </p>
          <p>
            Email: <a href="mailto:rangalohitaksh@gmail.com">rangalohitaksh@gmail.com</a>
          </p>
          <div className="links">
            <a href="https://github.com/LohitakshRanga" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/lohitakshranga" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="/lohitaksh-resume.pdf" download>Download Resume</a>
          </div>
        </div>
        <div className="right">
          <div className="meta-card">
            <h3>At a glance</h3>
            <ul>
              <li><strong>Location:</strong> Bikaner, India</li>
              <li><strong>Current:</strong> Front-end & Back-end Developer at Eagle Technosys (Oct 2024 – Present)</li>
              <li><strong>Education:</strong> B.Tech - Computer Science (Aug 2023)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
