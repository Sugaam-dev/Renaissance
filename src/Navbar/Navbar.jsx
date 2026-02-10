

import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-main">
      {/* Main container for the entire screen width */}
      <div className="nav-flex-wrapper">
        
        {/* LEFT: Attached to the left edge */}
        <div className="nav-left">
          <img src="/Images/logo.avif" alt="Renaissance" className="brand-logo-img" />
        </div>

        {/* MOBILE TOGGLE */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar-top"></span>
          <span className="bar-mid"></span>
          <span className="bar-bot"></span>
        </div>

        {/* CENTER & RIGHT: Navigation Menu */}
        <div className={`nav-menu-group ${isOpen ? 'is-open' : ''}`}>
          {/* MIDDLE: Links centered between Logo and Button */}
          <div className="nav-links-center">
            <a href="#" className="pill purple">Home</a>
            <a href="#" className="pill yellow">Why Renaissance</a>
            <a href="#" className="pill yellow">Register now</a>
            <a href="#" className="pill yellow">Our Presence</a>
            <a href="#" className="pill yellow">Exams</a>
            <a href="#" className="pill yellow">Enquiry for exam</a>
          </div>

          {/* RIGHT: Attached to the right edge */}
          <div className="nav-right">
            <button className="btn-download">Download Brochure</button>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;