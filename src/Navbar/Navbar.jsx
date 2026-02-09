// // // import React, { useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import "./Navbar.css";

// // // const Navbar = () => {
// // //   const [menuOpen, setMenuOpen] = useState(false);

// // //   return (
// // //     <header className="navbar">
// // //       <div className="navbar-container">
// // //         <div className="navbar-logo">
// // //           {/* Use a string path if logo is in public folder */}
// // //           <img src="/logo.png" alt="The Renaissance" /> 
// // //           <div className="navbar-logo-text">
// // //             <h1>THE RENAISSANCE</h1>
// // //             <p>ART | DESIGNING | TRAINING | CONSULTING</p>
// // //           </div>
// // //         </div>

// // //         <div className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
// // //           <span></span>
// // //           <span></span>
// // //           <span></span>
// // //         </div>

// // //         <nav className={`navbar-menu ${menuOpen ? "open" : ""}`}>
// // //           <Link to="/" className="navbar-link" onClick={() => setMenuOpen(false)}>Home</Link>
// // //           <Link to="/why" className="navbar-link" onClick={() => setMenuOpen(false)}>Why Renaissance</Link>
// // //           {/* Add other links as needed */}
// // //           <a href="#" className="navbar-download">Download Brochure</a>
// // //         </nav>
// // //       </div>
// // //     </header>
// // //   );
// // // };

// // // export default Navbar;

// // import React, { useState } from 'react';
// // import './Navbar.css';

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <nav className="navbar-main">
// //       <div className="flex-between">
        
// //         {/* Logo Section */}
// //         <div className="logo-container">
// //           <div className="logo-circle-gradient">
// //             <img src="/Images/logo.avif" alt="Renaissance Logo" className="brand-logo-img" />
// //             {/* <span className="logo-r">R</span> */}
// //           </div>
// //           <div>
// //             <h1 className="brand-title">THE RENAISSANCE</h1>
// //             <p className="brand-sub">
// //               <span className="t-orange">ART</span> | 
// //               <span className="t-green"> DESIGNING</span> | 
// //               <span className="t-blue"> TRAINING</span> | 
// //               <span className="t-red"> CONSULTING</span>
// //             </p>
// //           </div>
// //         </div>

// //         {/* Hamburger for Mobile */}
// //         <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
// //           <span></span>
// //           <span></span>
// //           <span></span>
// //         </div>

// //         {/* Navigation Menu */}
// //         <div className={`nav-menu-container flex-center gap-15 ${isOpen ? 'is-open' : ''}`}>
// //           <div className="nav-links-list flex-center gap-8">
// //             <a href="#" className="nav-pill bg-purple">Home</a>
// //             <a href="#" className="nav-pill bg-yellow">Why Renaissance</a>
// //             <a href="#" className="nav-pill bg-yellow">Register now</a>
// //             <a href="#" className="nav-pill bg-yellow">Our Presence</a>
// //             <a href="#" className="nav-pill bg-yellow">Exams</a>
// //             <a href="#" className="nav-pill bg-yellow">Enquiry for exam</a>
// //           </div>

// //           <button className="btn-rect bg-yellow">
// //             Download Brochure
// //           </button>
// //         </div>

// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import React, { useState } from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="navbar-main">
//       <div className="flex-between">
        
//         {/* Simplified Logo Section */}
//         <div className="logo-container">
//           {/* We reference the image directly from the public/Images folder */}
//           <img src="/Images/logo.avif" alt="The Renaissance" className="full-brand-logo" />
//         </div>

//         {/* Hamburger for Mobile */}
//         <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>

//         {/* Navigation Menu */}
//         <div className={`nav-menu-container flex-center gap-15 ${isOpen ? 'is-open' : ''}`}>
//           <div className="nav-links-list flex-center gap-8">
//             <a href="#" className="nav-pill bg-purple">Home</a>
//             <a href="#" className="nav-pill bg-yellow">Why Renaissance</a>
//             <a href="#" className="nav-pill bg-yellow">Register now</a>
//             <a href="#" className="nav-pill bg-yellow">Our Presence</a>
//             <a href="#" className="nav-pill bg-yellow">Exams</a>
//             <a href="#" className="nav-pill bg-yellow">Enquiry for exam</a>
//           </div>

//           <button className="btn-rect bg-yellow">
//             Download Brochure
//           </button>
//         </div>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;

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
          <span></span>
          <span></span>
          <span></span>
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