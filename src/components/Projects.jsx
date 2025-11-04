import React from "react";

const projects = [
  { title: "Divyatattva (E-commerce)", url: "https://divyatattva.com/" },
  { title: "CourierDai (Admin Panel)", url: "https://courierdai.com/" },
  { title: "ParcelHub (Admin & Customer)", url: "https://parcelhub.co.ke/" },
  { title: "Gomile (Admin & Customer)", url: "https://gomile.fniix.com/" },
  { title: "Speedify", url: "https://speedify.fniix.com/" },
];

const Projects = () => {
  return (
    <section id="projects" className="section glass">
      <div className="container">
        <h2>Projects</h2>
        <p className="sub">Live projects I've contributed to — admin & customer panels, courier/delivery systems, and e-commerce.</p>
        <div className="projects-grid">
          {projects.map((p) => (
            <article className="project-card" key={p.title}>
              <div className="project-head">
                <h3>{p.title}</h3>
              </div>
              <p className="project-desc">
                Contributed to admin panels, modular architecture, secure API integration, role-based auth, and real-time data features.
              </p>
              <a className="btn" href={p.url} target="_blank" rel="noreferrer">Visit</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
