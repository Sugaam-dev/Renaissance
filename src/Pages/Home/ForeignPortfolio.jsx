import React from 'react';
import { Link } from 'react-router-dom';
import './ForeignPortfolio.css';

export default function ForeignPortfolio() {
  return (
    <div className="fp-page">
      {/* hero/banner with overlay text */}
      <div
  className="fp-banner"
  style={{ backgroundImage: "url('/Images/ReadMore4.jpg')" }}
>
        <div className="fp-hero-content">
          <h1 className="fp-hero-title">
            Foreign Portfolio Preparation
          </h1>
        </div>
      </div>

      {/* main content area */}
      <div className="fp-container">
        <div className="fp-content-section">
          <div className="fp-content-text">
            <p>
              Getting into international design and architecture schools — Parsons (USA), RCA (UK),
              ArtCenter (USA), TU Delft (Netherlands), Bartlett School of Architecture (UK), and
              others — does not rely on entrance exams. Instead, your admission is decided almost
              entirely by your portfolio, Statement of Purpose (SOP), and sometimes an interview.
            </p>
          </div>

          <div className="fp-cta-box">
            <Link to="/registration" className="fp-cta-btn">
              Register
            </Link>
          </div>
        </div>

        <div className="fp-section">
          <h2 className="fp-subheading">What does a Foreign Portfolio require?</h2>

          <p className="fp-text">
            Unlike Indian entrance exams, international schools want to see:
          </p>

          <ul className="fp-list">
            <li>
              <strong>Portfolio:</strong> 15–25 pages of your best creative work. Not just final
              outcomes — they want to see your process (sketches, iterations, research, thinking).
              Each school has different expectations; a Parsons portfolio reads differently from a
              Bartlett one.
            </li>

            <li>
              <strong>Statement of Purpose (SOP):</strong> A written essay (typically 500–1000
              words) explaining who you are as a designer/architect, why you're applying to that
              specific program, and what you plan to do with the degree.
            </li>

            <li>
              <strong>Letters of Recommendation:</strong> Usually 2–3 from professors or
              professionals who know your work.
            </li>

            <li>
              <strong>English Proficiency:</strong> IELTS (typically 6.5–7.0) or TOEFL for
              non-native English speakers.
            </li>

            <li>
              <strong>GRE:</strong> Some US programs (especially graduate-level) still require GRE
              scores.
            </li>

            <li>
              <strong>Key Timelines:</strong> Most international programs have application deadlines
              between November and February for September intake. Early preparation (12–18 months in
              advance) is strongly recommended.
            </li>
          </ul>

          <p className="fp-text">
            <strong>What we prepare you for:</strong> Portfolio development and curation, SOP
            writing, school research and shortlisting, interview preparation, and understanding
            what each individual program is actually looking for.
          </p>
        </div>
      </div>
    </div>
  );
}