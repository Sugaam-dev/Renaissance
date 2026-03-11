import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [examHover, setExamHover] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar-main">
      <div className="nav-flex-wrapper">

        {/* LEFT */}
        <div className="nav-left">
          <img
            src="/Images/logo.avif"
            alt="Renaissance"
            className="brand-logo-img"
          />
        </div>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar-top"></span>
          <span className="bar-mid"></span>
          <span className="bar-bot"></span>
        </div>

        {/* MENU */}
        <div className={`nav-menu-group ${isOpen ? "is-open" : ""}`}>

          <div className="nav-links-center">

            <NavLink to="/" end onClick={closeMenu}
              className={({ isActive }) =>
                `pill ${isActive ? "active purple" : "yellow"}`
              }
            >
              Home
            </NavLink>

            <NavLink to="/why-renaissance" onClick={closeMenu}
              className={({ isActive }) =>
                `pill ${isActive ? "active purple" : "yellow"}`
              }
            >
              Why Renaissance
            </NavLink>

            <NavLink to="/registration" onClick={closeMenu}
              className={({ isActive }) =>
                `pill ${isActive ? "active purple" : "yellow"}`
              }
            >
              Register now
            </NavLink>

            <NavLink to="/our-presence" onClick={closeMenu}
              className={({ isActive }) =>
                `pill ${isActive ? "active purple" : "yellow"}`
              }
            >
              Our Presence
            </NavLink>

            <div
  className="dropdown-wrapper"
  onMouseEnter={() => {
    if (!isOpen) setExamHover(true);
  }}
  onMouseLeave={() => {
    if (!isOpen) setExamHover(false);
  }}
>
  <div
    className="pill yellow"
    onClick={() => {
      if (isOpen) setExamHover(!examHover);
    }}
  >
    Exams
  </div>

  {examHover && (
    <div className="exam-dropdown">
      <NavLink to="/exams/nid-ug" onClick={closeMenu} className="dropdown-item">NID UG</NavLink>
      <NavLink to="/exams/nid-pg" onClick={closeMenu} className="dropdown-item">NID PG</NavLink>
      <NavLink to="/exams/uceed" onClick={closeMenu} className="dropdown-item">UCEED</NavLink>
      <NavLink to="/exams/ceed" onClick={closeMenu} className="dropdown-item">CEED</NavLink>
      <NavLink to="/exams/nift-ug" onClick={closeMenu} className="dropdown-item">NIFT UG</NavLink>
      <NavLink to="/exams/nift-pg" onClick={closeMenu} className="dropdown-item">NIFT PG</NavLink>
      <NavLink to="/exams/jee-2" onClick={closeMenu} className="dropdown-item">JEE-2</NavLink>
      <NavLink to="/exams/nata" onClick={closeMenu} className="dropdown-item">NATA</NavLink>
      <NavLink to="/exams/bfa" onClick={closeMenu} className="dropdown-item">BFA</NavLink>
    </div>
  )}
</div>

            <NavLink to="/exam-enquiry" onClick={closeMenu}
              className={({ isActive }) =>
                `pill ${isActive ? "active purple" : "yellow"}`
              }
            >
              Enquiry for exam
            </NavLink>

          </div>

          <div className="nav-right">
            <button className="btn-download">
              Download Brochure
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
