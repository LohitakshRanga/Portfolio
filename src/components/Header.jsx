import React from "react";

const Header = () => {
  const nav = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand">
          <div className="avatar">LR</div>
          <div>
            <h1 className="name">Lohitaksh Ranga</h1>
            <p className="role">Full-stack Developer — ReactJS & Laravel</p>
          </div>
        </div>
        <nav className="nav">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="nav-link">
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
