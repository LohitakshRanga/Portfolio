import React from "react";

const jobs = [
  {
    title: "Front-end and Back-end Developer",
    company: "Eagle Technosys",
    location: "Bikaner, India",
    period: "Oct 2024 – Present",
    bullets: [
      "Developing full-stack web apps using Laravel, Blade, Bootstrap and ReactJS.",
      "Built e-commerce features: auth, profiles, reviews, address mgmt.",
      "Delivered secure, responsive and scalable solutions."
    ]
  },
  {
    title: "Front-end Developer",
    company: "Freelancer",
    location: "Bikaner, India",
    period: "Aug 2023 – Feb 2024",
    bullets: [
      "Designed and deployed client projects (KonectHo, Bissa Ji Group, event management).",
      "Implemented payments, real-time tracking, store locator."
    ]
  },
  {
    title: "Front-end Intern",
    company: "Dunes Factory",
    location: "Bikaner, India",
    period: "Dec 2021 – Feb 2022",
    bullets: [
      "Cross-browser/device testing and responsiveness improvements.",
      "Built dynamic UI using ReactJS."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experience</h2>
        <div className="timeline">
          {jobs.map((job, idx) => (
            <div key={idx} className={`timeline-item ${idx % 2 === 0 ? "" : "alt"}`}>
              <div className="timeline-card">
                <h3>{job.title}</h3>
                <p className="muted">{job.company} • {job.location}</p>
                <p className="period">{job.period}</p>
                <ul>
                  {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
