

import React, { useEffect, useRef, useState } from 'react';
import './GuidanceSection.css';

const GuidanceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      className={`gs-main-card ${isVisible ? 'gs-reveal' : ''}`} 
      ref={sectionRef}
    >
      {/* Top Section: Image + Text Side-by-Side */}
      <div className="gs-content-row">
        <div className="gs-image-container">
          <img src="/Images/herocarousel-1.avif" alt="Gallery" className="gs-hero-img" />
          <div className="gs-dots-pattern"></div>
        </div>

        <div className="gs-info-container">
          <h2 className="gs-title">Where Your Creative Vibes Meet Career Goals!</h2>
          <div className="gs-features">
            <div className="gs-feature-row">
              <span className="gs-icon purple-bg">🎯</span>
              <p>Aptitude & Career Counseling</p>
            </div>
            <div className="gs-feature-row">
              <span className="gs-icon orange-bg">🚀</span>
              <p>Expert Entrance Exam Coaching</p>
            </div>
            <div className="gs-feature-row">
              <span className="gs-icon blue-bg">🎓</span>
              <p>College Admission Guidance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Integrated Purple Banner */}
      <div className="gs-footer-banner">
        <p className="gs-banner-msg">To schedule a Personalized Counseling session register Today!</p>
        <button
          type="button"
          className="gs-reg-btn"
          onClick={() => {
            const phoneNumber = '919021071084';
            const message = 'Hi, I would like to schedule a counselling call back.';
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
          }}
        >
          GET A CALL BACK <span>&rarr;</span>
        </button>
      </div>
    </section>
  );
};

export default GuidanceSection;