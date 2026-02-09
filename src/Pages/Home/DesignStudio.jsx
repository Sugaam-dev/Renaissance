import React from 'react';
import './DesignStudio.css';

const DesignStudio = () => {
  return (
    <section className="rds-help-section">
      <h2 className="rds-title-main">How can we help you?</h2>
      
      <div className="rds-grid-wrapper">
        {/* Left Pillar */}
        <div className="rds-grid-item rds-item-tall">
          <div className="rds-content-box">
            <h3 className="rds-heading-sub">Aptitude Test & Career Guidance</h3>
            <p className="rds-text-body">At The Renaissance Design Studio, we're your ultimate cheerleaders on your design and architecture journey. Take our 10-minute Creativity Test to unlock your potential and slay your next move.</p>
          </div>
        </div>

        {/* Middle Top */}
        <div className="rds-grid-item rds-item-standard">
          <div className="rds-content-box">
            <h3 className="rds-heading-sub">Get Set for Top Design Colleges</h3>
            <p className="rds-text-body">From figuring out your path to acing college applications and interviews, we've got your back. Land a spot in the coolest Design, Fashion, and Architecture colleges for both UG and PG programs.</p>
          </div>
        </div>

        {/* Right Pillar */}
        <div className="rds-grid-item rds-item-tall">
          <div className="rds-content-box">
            <h3 className="rds-heading-sub">Prep Like a Champ with Study Materials & Mock Tests</h3>
            <p className="rds-text-body">NIFT, and NATA. Get your free Material or sign up for a free NATA online mock test and flex those prep muscles.</p>
          </div>
        </div>

        {/* Middle Bottom */}
        <div className="rds-grid-item rds-item-standard">
          <div className="rds-content-box">
            <h3 className="rds-heading-sub">Crack Entrance Exams Like a Pro</h3>
            <p className="rds-text-body">Whether it's NID, NIFT, NATA, CEED, or UCEED, our coaching programs are here to make you unstoppable. Pick from 1-year or 2-year options, and prep like a boss!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignStudio;