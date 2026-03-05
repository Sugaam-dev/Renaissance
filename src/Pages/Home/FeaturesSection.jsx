import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const candidates = [
    { name: "Sarthak Lanjewar", img: "/Images/candidate-1.avif" },
    { name: "Dan Mitchell", img: "/Images/candidate-2.avif" }, 
    { name: "Noah Patterson", img: "/Images/candidate-3.avif" },
    { name: "Tess Anderson", img: "/Images/candidate-4.avif" },
  ];

  const navigate = useNavigate();

  const goRegister = () => navigate('/registration');

  return (
    <div className="fs-main-wrapper">
      {/* Apply Today Section */}
      <section className="fs-banner-cta">
        <div className="fs-cta-grid">
          <h1 className="fs-cta-heading">
            Apply <br /> Today!
          </h1>

          <p className="fs-cta-text">
            With The Renaissance Design Studio, one program can pave the way to a limitless future in design, art, and architecture.
          </p>

          <div className="fs-cta-action">
            <button className="fs-btn-register" onClick={goRegister}>
              Register Now <span className="fs-arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Candidates Section */}
      <section className="fs-banner-candidates">
        <div className="fs-candidates-layout">
          <h2 className="fs-section-title">
            CANDIDATES <br /> OF 2024
          </h2>

          <div className="fs-profiles-container">
            {candidates.map((item, idx) => (
              <div key={idx} className="fs-profile-item">
                <div className="fs-avatar-frame">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="fs-avatar-img"
                  />
                </div>
                <span className="fs-profile-label">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;
