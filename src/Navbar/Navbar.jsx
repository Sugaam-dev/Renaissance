import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

            <NavLink to="/exams" onClick={closeMenu}
              className={({ isActive }) =>
                `pill ${isActive ? "active purple" : "yellow"}`
              }
            >
              Exams
            </NavLink>

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
