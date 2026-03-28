import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="rs-about-root-container">
      <div className="rs-about-card-wrapper">
        
        {/* Text Section */}
        <div className="rs-about-text-column">
          <h2 className="rs-about-main-heading">Why Renaissance?</h2>
          
          <div className="rs-about-body-content">
            <p>
The Renaissance Design & Architecture Institute stands as one of the oldest and most trusted institutes specializing in design and architecture entrance preparation in India and abroad.
With a strong track record in exams like NIFT, NID, UCEED, CEED, NATA, JEE (Paper 2), and international design portfolio preparation, the institute has consistently guided students toward top B.Des and M.Des and B.Arch colleges across the world.


            </p>
            <p>
              With over<strong> 15 years</strong> of excellence, The Renaissance is widely recognized for its 5-star reviews from aspirants globally, reflecting its commitment to quality education and student success.
What truly sets The Renaissance apart:
1. Expert Career Counseling
Personalized guidance by the founder and experienced team, helping students make informed career choices in design and architecture.
2. Individual Attention
A student-centric approach with dedicated mentorship and support available round the clock.
3. Industry-Experienced Faculty
Learn from professionals who bring real-world insights into the classroom.
4. Hands-On Learning Experience
Engaging workshops and practical sessions designed to build creativity, skills, and confidence in this ever-evolving industry.

At The Renaissance, it’s not just about cracking exams — it’s about shaping future designers and architects with vision, skill, and clarity.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="rs-about-image-column">
          <img 
            src="/Images/enquiry-inner-img.avif" 
            alt="Students at Renaissance Institute" 
            className="rs-about-hero-image"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;