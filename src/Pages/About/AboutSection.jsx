import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="rs-about-root-container">
      <div className="rs-about-card-wrapper">
        
        {/* Text Section */}
        <div className="rs-about-text-column">
          <h2 className="rs-about-main-heading">Why Renaissance?</h2>
          
          <div className="rs-about-body-content">
            <p>
              The Renaissance is a leading coaching institute in India with over 
              <strong> 14 years of experience</strong> specializing in Design and 
              Architecture entrance exam preparation (NATA, JEE-2nd, NID, NIFT, 
              UCEED, CEED, and International Design Portfolio).
            </p>
            <p>
              They offer personalized coaching across six centers in Pune and Navi 
              Mumbai, and one in Bhubneshwar, focusing on developing creative vision 
              and lateral thinking. With a proven track record of student success, 
              The Renaissance aims to expand its global reach and continue setting 
              high standards in design and architecture education. 
            </p>
            <p>
              Their vision is to be a leading global institute that fosters creative 
              and imaginative minds while promoting sustainable practices.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="rs-about-image-column">
          <img 
            src="/Images/enquiry-inner-img.avif" 
            alt="Students at Renaissance Institute" 
            className="rs-about-hero-image"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;