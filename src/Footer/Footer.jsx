import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="tr-main-footer">
      <div className="tr-footer-container">
        
        <div className="tr-brand-section">
          <div className="tr-logo-wrapper">
            {/* The logo now takes full container width to fill the space */}
            <img src="/Images/logo.avif" alt="Logo" className="tr-footer-logo" />
          </div>
          
          {/* Social icons are now forced below the logo */}
          <div className="tr-social-links">
            <a href="https://www.instagram.com/therenaissanceindia?utm_source=qr&igsh=Z3RhMXJjbXpnbHBp" className="tr-social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/TheRenaissance2010?mibextid=wwXIfr&rdid=FqAjLyqj7DiQOEY7&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ASQdJeZ2a%2F%3Fmibextid%3DwwXIfr#" className="tr-social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="tr-social-icon" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>

        <div className="tr-links-grid">
          <div className="tr-link-column">
            <h3>Exams</h3>
            <ul>
              <li>NID</li><li>UCEED</li><li>NIFT</li><li>NATA</li><li>JEE-2</li><li>BFA</li>
            </ul>
          </div>
          <div className="tr-link-column">
            <h3>Our Programmes</h3>
            <ul>
              <li>Design UG</li><li>Design PG</li><li>Architecture</li><li>BFA</li>
            </ul>
          </div>
          <div className="tr-link-column">
            <h3>Study Material</h3>
            <ul>
              <li>Books</li><li>PYQ</li><li>Sample Papers</li>
            </ul>
          </div>
          {/* <div className="tr-link-column"><h3>Design Internship Prog</h3></div> */}
          <div className="tr-link-column"><h3>Our Presence</h3></div>
          <div className="tr-link-column"><h3>Contact Us</h3></div>
        </div>
      </div>

      <div className="tr-footer-bottom">
        <p>© 2025 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;