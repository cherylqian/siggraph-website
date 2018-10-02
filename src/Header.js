import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <nav className="navbar navbar-expand-sm navbar-light">
    <span className="navbar-brand mb-0 h1 text-dark">
      ACM Siggraph University of Illinois
    </span>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="collapse navbar-collapse justify-content-end"
      id="navbarNav"
    >
      <div className="navbar-nav">
        <NavLink to="/" className="nav-item nav-link">
          Home
        </NavLink>
        <NavLink to="/projects" className="nav-item nav-link">
          Projects
        </NavLink>
        <NavLink to="/news" className="nav-item nav-link">
          News
        </NavLink>
        <NavLink to="/about" className="nav-item nav-link">
          About
        </NavLink>
      </div>
    </div>
  </nav>
);

export default Header;
