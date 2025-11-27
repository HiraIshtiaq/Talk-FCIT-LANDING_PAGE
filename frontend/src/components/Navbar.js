import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://img.icons8.com/27d897/96/chat--v1.png"
          alt="chat logo"
          className="logo-icon"
        />
        Talk@FCIT
      </div>
      <ul className="nav-links">
        <li>Features</li>
        <li>Community</li>
        <li>Support</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

export default Navbar;