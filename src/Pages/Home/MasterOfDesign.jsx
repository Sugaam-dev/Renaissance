import React from 'react';
import { Link } from 'react-router-dom';
import './MasterOfDesign.css';

export default function MasterOfDesign() {
  return (
    <div className="mofd-page">
      {/* hero/banner with overlay text */}
      <div
  className="mofd-banner"
  style={{ backgroundImage: "url('/Images/ReadMore5.jpg')" }}
>
        <div className="mofd-hero-content">
          <h1 className="mofd-hero-title">
            Post Graduate Program<br />Master of Design (M.Des)
          </h1>
        </div>
      </div>

      {/* main content area */}
      <div className="mofd-container">
        <div className="mofd-content-section">
          <div className="mofd-content-text">
            <p>
               Master of Design is a postgraduate program (2 years) that allows designers to specialize deeply in areas like Industrial Design, Visual Communication, Interaction Design, Vehicle Design, Animation, and more.
            </p>
          </div>

          <div className="mofd-cta-box">
            <Link to="/registration" className="mofd-cta-btn">
              Register
            </Link>
          </div>
        </div>

        <div className="mofd-section">
          <h2 className="mofd-subheading">Key Entrance Exams</h2>

          <ul className="mofd-list">
            <li>
              <strong>CEED (Common Entrance Examination for Design)</strong> — conducted by IIT Bombay. Scores are accepted by IIT Bombay, IIT Delhi, IIT Guwahati, IIT Hyderabad, IIT Kanpur, IIT Roorkee, IISc Bangalore, and several other top institutes.
            </li>
          </ul>

          <p className="mofd-text"><strong>Exam Pattern:</strong></p>

          <ul className="mofd-list">
            <li>Conducted every year in January</li>
            <li>Duration: 3 Hours (Part A: 1 hr + Part B: 2 hrs)</li>
            <li>
              Part A (Computer-based – 25% of score): NAT, MSQ, MCQ — covers Visualization & Spatial Reasoning, Design Sensitivity, Observation, Logical & Analytical Ability
            </li>
            <li>
              Part B (Pen & Paper – 75% of score): Drawing, Creativity, Communication through visuals, Problem Identification & Design — this is the most critical section
            </li>
          </ul>

          <p className="mofd-text"><strong> Syllabus Focus Areas:</strong></p>

          <ul className="mofd-list">
            <li>2D & 3D visualization and object transformation</li>
            <li>Product sketching and rendering</li>
            <li>
              Creative design scenarios
            </li>
            <li>
              Storyboarding and visual storytelling
            </li>
            <li>
               Scientific knowledge applied to design
            </li>
          </ul>
          

          <ul className="mofd-list">
            <li>
              <strong>NID DAT (M.Des)</strong> —  is a separate exam for postgraduate programs at NID campuses, following a similar Prelims + Mains + Interview structure.
            </li>
          </ul>

          <p className="mofd-text">
            <strong>Eligibility:</strong> Bachelor's degree (minimum 3 years after 10+2) in Engineering, Architecture, Design, Fine Arts, or equivalent. GD Art diploma with 1 year of professional experience is also accepted. No age limit.
          </p>
        </div>
      </div>
    </div>
  );
}