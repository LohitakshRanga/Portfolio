import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Lohitaksh Ranga — Built with React</p>
        <p className="muted">Made with a traditional craftsmanship approach and a modern toolset.</p>
      </div>
    </footer>
  );
};

export default Footer;
