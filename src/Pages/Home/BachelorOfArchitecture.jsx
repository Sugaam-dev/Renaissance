import React from 'react';
import { Link } from 'react-router-dom';
import './BachelorOfArchitecture.css';

export default function BachelorOfArchitecture() {
  return (
    <div className="barch-page">
      {/* hero/banner with overlay text */}
      <div className="barch-banner">
        <div className="barch-hero-content">
          <h1 className="barch-hero-title">
            Under Graduate Program<br />Bachelor of Architecture (B.Arch)
          </h1>
        </div>
      </div>

      {/* main content area */}
      <div className="barch-container">
        <div className="barch-content-section">
          <div className="barch-content-text">
            <p>
              Bachelor of Architecture (B.Arch) is a 5-year undergraduate program that trains
              students to design buildings, spaces, and urban environments. It covers structural
              design, architectural history, environmental planning, construction technology, and
              studio-based design projects.
            </p>
          </div>

          <div className="barch-cta-box">
            <Link to="/registration" className="barch-cta-btn">
              Register
            </Link>
          </div>
        </div>

        <div className="barch-section">
          <h2 className="barch-subheading">Key Entrance Exams</h2>

          <ul className="barch-list">
            <li>
              <strong>NATA (National Aptitude Test in Architecture)</strong> — conducted by the
              Council of Architecture (CoA). More than 400 colleges across India accept NATA scores.
            </li>
          </ul>

          <p className="barch-text"><strong>Exam Pattern (2025):</strong></p>

          <ul className="barch-list">
            <li>Fully Computer-Based Test for Part B and Physical Drawing Test</li>
            <li>Total Questions: 53 | Total Marks: 200</li>
            <li>Duration: 3 Hours (one session)</li>
            <li>No Negative Marking</li>
            <li>
              Question Types: MCQ, Multiple Select (MSQ), Preferential Choice (PCQ), Numerical
              Answer Type (NAQ) – 120 Marks
            </li>
            <li>Drawing Section (Part A) – 80 Marks</li>
          </ul>

          <p className="barch-text">
            <strong>Syllabus Covers:</strong> Mathematics (Algebra, Trigonometry, Geometry),
            General Aptitude (Visual Reasoning, Logical Reasoning, Diagrammatic Reasoning, Abstract
            Reasoning, Situational Judgment), Aesthetic Sensitivity, Colour Theory, Architectural
            Vocabulary, Building Construction Basics, Current Affairs & GK, Visual Perception &
            Cognition.
          </p>

          <p className="barch-text">
            <strong>Drawing:</strong> Composition & Color, Sketching & Composition, 3D Composition.
          </p>

          <p className="barch-text">
            Candidates can attempt NATA up to 3 times in one academic year; best score is
            considered. NATA score is valid for 2 academic years.
          </p>

          <ul className="barch-list">
            <li>
              <strong>JEE Paper 2 (B.Arch)</strong> — conducted by NTA, accepted by NITs, SPAs
              (School of Planning & Architecture), and other central institutions. Pattern:
              Mathematics + Aptitude + Drawing Test.
            </li>
          </ul>

          <p className="barch-text">
            <strong>Eligibility:</strong> 10+2 with Physics, Chemistry, and Mathematics as
            compulsory subjects.
          </p>
        </div>
      </div>
    </div>
  );
}