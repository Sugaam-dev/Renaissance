import React from 'react';
import './CommunityPage.css';

const CommunityPage = () => {
  return (
    <section className="cp-wrapper">
      <h2 className="cp-main-title">Our Community</h2>
      
      <div className="cp-content-row">
        {/* Profile Branding Section */}
        <div className="cp-brand-group">
          <div className="cp-logo-circle">
            <span className="cp-logo-symbol">R</span>
          </div>
          
          <div className="cp-text-meta">
            <span className="cp-brand-name">The Renaissance</span>
            <span className="cp-post-count">1,345 Posts</span>
          </div>
        </div>

        {/* Separator */}
        <div className="cp-vertical-divider"></div>

        {/* Action Button */}
        <button 
          className="cp-follow-button" 
          type="button"
          onClick={() => console.log('Follow clicked')}
        >
          Follow Us
        </button>
      </div>
    </section>
  );
};

export default CommunityPage;