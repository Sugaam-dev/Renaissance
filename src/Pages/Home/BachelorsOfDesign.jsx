import React from 'react';
import { Link } from 'react-router-dom';
import './BachelorsOfDesign.css';

export default function BachelorsOfDesign() {
  return (
    <div className="bofd-page">
      {/* hero/banner with overlay text */}
      <div
  className="bofd-banner"
  style={{ backgroundImage: "url('/Images/ReadMore3.jpg')" }}
>
        <div className="bofd-hero-content">
          <h1 className="bofd-hero-title">
            Under Graduate Program<br />Bachelor of Design (B.Des)
          </h1>
        </div>
      </div>

      {/* main content area */}
      <div className="bofd-container">
        <div className="bofd-content-section">
          <div className="bofd-content-text">
            <p>
              Bachelor of Design (B.Des) is a 4-year undergraduate program focused on design
              thinking, creativity, and problem-solving. Specializations include Product Design,
              Communication Design, UI/UX, Fashion Design, Animation, and more.
            </p>
            <p>
              B.Des is an undergraduate degree program, typically focused on developing creative
              and technical skills in various specializations. These specializations can include
              fields like fashion design, industrial design, interior design, and more. The
              curriculum combines theoretical knowledge with practical studio work, often
              internships and industry exposure. A B.Des aims to equip graduates with the skills
              necessary to solve design problems, innovate, and contribute to creative industries.
            </p>
          </div>
          <div className="bofd-cta-box">
            <Link to="/registration" className="bofd-cta-btn">
              Register
            </Link>
          </div>
        </div>

        <div className="bofd-section">
          <h2 className="bofd-subheading">Key Entrance Exams</h2>
          <ul className="bofd-list">
            <li>
              <strong>UCEED (Undergraduate Common Entrance Examination for Design)</strong> — conducted
              by IIT Bombay. This is your gateway to B.Des programs at IIT Bombay, IIT Delhi, IIT
              Guwahati, IIT Hyderabad, IIT Indore, IIT Roorkee, and IIITDM Jabalpur.
            </li>
          </ul>
          <p className="bofd-text"><strong>Exam Pattern:</strong></p>
          <ul className="bofd-list">
            <li>Total Marks: 300</li>
            <li>Duration: 3 Hours (Part A: 2 hrs + Part B: 1 hr)</li>
            <li>
              Part A (Computer-based): MCQ, MSQ, NAT questions covering Visualization &amp; Spatial
              Ability, Observation &amp; Design Sensitivity, Environmental &amp; Social Awareness,
              Analytical &amp; Logical Reasoning, Language &amp; Creativity, Design Thinking &amp; Problem
              Solving
            </li>
            <li>Part B (Pen &amp; Paper): One Drawing question + One Design Aptitude question</li>
          </ul>

          <ul className="bofd-list">
            <li>
              <strong>NID DAT</strong> — conducted by National Institute of Design for its campuses
              across India (Ahmedabad, Bhopal, Assam (Jorhat), Andhra Pradesh, Kurekshetra etc.)
            </li>
          </ul>
          <p className="bofd-text"><strong>Exam Pattern:</strong></p>
          <ul className="bofd-list">
            <li>
              Stage 1 – Prelims (Offline, 3 hours): CAT section — creative drawing, design thinking,
              imagination-based questions. Approximately 15,000–17,000 candidates compete for 425
              B.Des seats.
            </li>
            <li>Stage 2 – Mains: Studio Test + Portfolio Review + Personal Interview</li>
          </ul>
          <ul className="bofd-list">
            <li>
              <strong>NIFT Entrance</strong> also accepts B.Des aspirants with a Creative Ability
              Test (CAT) and General Ability Test (GAT) pattern.
            </li>
          </ul>
          <p className="bofd-text">
            <strong>Eligibility:</strong> 10+2 from any stream with minimum 50% marks.
          </p>
        </div>
      </div>
    </div>
  );
}
