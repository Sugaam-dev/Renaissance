import React from "react";
import "./ExamHero.css";

const ExamHero = ({ title }) => {
  return (
    <div className="exam-hero-section">
      <div className="exam-hero-card">
        <h1>{title}</h1>
        <div className="hero-divider"></div>
      </div>
    </div>
  );
};

export default ExamHero;