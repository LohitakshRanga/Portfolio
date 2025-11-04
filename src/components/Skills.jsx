import React from "react";
import { FaReact, FaLaravel, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt, FaJsSquare } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

const skills = [
  { name: "ReactJS", desc: "Frontend Framework", icon: <FaReact color="#61dafb" /> },
  { name: "Laravel", desc: "Backend Framework", icon: <FaLaravel color="#f55247" /> },
  { name: "HTML5", desc: "Web Markup", icon: <FaHtml5 color="#e34c26" /> },
  { name: "CSS3", desc: "Web Styling", icon: <FaCss3Alt color="#2965f1" /> },
  { name: "MySQL", desc: "Database Management", icon: <SiMysql color="#00758f" /> },
  { name: "JavaScript", desc: "Scripting Language", icon: <FaJsSquare color="#f7df1e" /> },
  { name: "Git / GitHub", desc: "Version Control", icon: <FaGitAlt color="#f14e32" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="section glass">
      <div className="container">
        <h2>Skills</h2>
        <p className="sub">Technologies and tools I work with daily.</p>
        <div className="skills-card-grid">
          {skills.map((s) => (
            <div className="skill-card" key={s.name}>
              <div className="skill-icon">{s.icon}</div>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
