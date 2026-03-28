import React from 'react';
import { Link } from 'react-router-dom';
import './BachelorOfFineArts.css';

export default function BachelorOfFineArts() {
  return (
    <div className="bfa-page">
      {/* hero/banner */}
      <div
  className="bfa-banner"
  style={{ backgroundImage: "url('/Images/ReadMore2.jpg')" }}
>
        <div className="bfa-hero-content">
          <h1 className="bfa-hero-title">
            Under Graduate Program<br />Bachelor of Fine Arts (BFA)
          </h1>
        </div>
      </div>

      {/* main content */}
      <div className="bfa-container">
        <div className="bfa-content-section">
          <div className="bfa-content-text">
            <p>
              Bachelor of Fine Arts (BFA) is a 3–4 year undergraduate program focused on visual and
              performing arts. Specializations include Painting, Sculpture, Applied Arts,
              Printmaking, Photography, Animation, Graphic Design, and more.
            </p>

            <p>
              Top institutions offering BFA include Faculty of Fine Arts (MS University Baroda),
              Sir J.J. School of Art (Mumbai), College of Art (Delhi University),
              Jamia Millia Islamia (Delhi), and BHU (Varanasi).
            </p>
          </div>

          <div className="bfa-cta-box">
            <Link to="/registration" className="bfa-cta-btn">
              Register
            </Link>
          </div>
        </div>

        <div className="bfa-section">
          <h2 className="bfa-subheading">Key Entrance Exams</h2>

          <ul className="bfa-list">
            <li>
              <strong>CUET (UG) Fine Arts</strong> — conducted by NTA; accepted by most central
              universities for BFA admission.
            </li>
          </ul>

          <p className="bfa-text"><strong>Exam Pattern:</strong></p>

          <ul className="bfa-list">
            <li>Duration: 60 minutes per paper</li>
            <li>Computer-Based Test</li>
            <li>
              Sections: Fine Arts domain (Indian Art History — Rajasthani, Pahari, Mughal, Deccan,
              Bengal School, Modern Indian Art), General Test, English
            </li>
            <li>Question Type: MCQ</li>
          </ul>

          <ul className="bfa-list">
            <li>
              <strong>BHU UET (BFA)</strong>: Tests memory drawing, sketching, art history,
              knowledge of colours, patterns, and performing arts — along with an MCQ section.
            </li>

            <li>
              <strong>JMI (Jamia) BFA Entrance</strong>: Covers MCQ theory + design/still life
              drawing + art history with focus on important dates and historical events in Indian &
              Western art.
            </li>

            <li>
              <strong>JNAFAU FADEE (Hyderabad)</strong>: Separate papers for Memory Drawing &
              Colouring, Object Drawing, and an MCQ General Knowledge + Art paper.
            </li>
          </ul>

          <p className="bfa-text">
            <strong>Common Syllabus Across BFA Exams:</strong> Drawing & Sketching, Memory Drawing,
            Still Life, Colour Theory, Indian & Western Art History, Aesthetics, Visual Perception,
            Printmaking Basics, Portfolio (for select institutes).
          </p>

          <p className="bfa-text">
            <strong>Eligibility:</strong> 10+2 from any stream with minimum 50% marks from a
            recognized board.
          </p>
        </div>
      </div>
    </div>
  );
}