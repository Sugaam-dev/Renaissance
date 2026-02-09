// import React, { useEffect, useRef, useState } from 'react';
// import './GuidanceSection.css';

// const GuidanceSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 } // Trigger when 10% of the section is visible
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   const features = [
//     {
//       title: "Aptitude & Career Counseling",
//       icon: "🎯",
//       bgColor: "#f3e8ff",
//       iconColor: "#7030f4"
//     },
//     {
//       title: "Expert Entrance Exam Coaching",
//       icon: "🚀", 
//       bgColor: "#fff7ed",
//       iconColor: "#f97316"
//     },
//     {
//       title: "College Admission Guidance",
//       icon: "🎓",
//       bgColor: "#f0f9ff",
//       iconColor: "#0ea5e9"
//     }
//   ];

//   return (
//     <div 
//       className={`gs-container ${isVisible ? 'gs-reveal' : ''}`} 
//       ref={sectionRef}
//     >
//       {/* Top Layout */}
//       <div className="gs-top-layout">
//         <div className="gs-image-side">
//           <img src="/Images/guidanace-section.avif" alt="Gallery" className="gs-main-img" />
//           <div className="gs-swirl-decoration"></div>
//         </div>

//         <div className="gs-text-side">
//           <h2 className="gs-main-heading">
//             Where Your Creative Vibes <br /> Meet Career Goals!
//           </h2>
//           <div className="gs-features-list">
//             {features.map((item, index) => (
//               <div 
//                 key={index} 
//                 className="gs-feature-item"
//                 style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
//               >
//                 <div 
//                   className="gs-icon-box" 
//                   style={{ backgroundColor: item.bgColor, color: item.iconColor }}
//                 >
//                   {item.icon}
//                 </div>
//                 <h3 className="gs-feature-title">{item.title}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Bottom CTA Banner */}
//       <div className="gs-cta-banner">
//         <p className="gs-cta-text">
//           To schedule a Personalized Counseling session register Today!
//         </p>
//         <button className="gs-register-btn">
//           Register Now <span>&rarr;</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default GuidanceSection;

import React, { useEffect, useRef, useState } from 'react';
import './GuidanceSection.css';

const GuidanceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      className={`gs-main-card ${isVisible ? 'gs-reveal' : ''}`} 
      ref={sectionRef}
    >
      {/* Top Section: Image + Text Side-by-Side */}
      <div className="gs-content-row">
        <div className="gs-image-container">
          <img src="/Images/herocarousel-1.avif" alt="Gallery" className="gs-hero-img" />
          <div className="gs-dots-pattern"></div>
        </div>

        <div className="gs-info-container">
          <h2 className="gs-title">Where Your Creative Vibes Meet Career Goals!</h2>
          <div className="gs-features">
            <div className="gs-feature-row">
              <span className="gs-icon purple-bg">🎯</span>
              <p>Aptitude & Career Counseling</p>
            </div>
            <div className="gs-feature-row">
              <span className="gs-icon orange-bg">🚀</span>
              <p>Expert Entrance Exam Coaching</p>
            </div>
            <div className="gs-feature-row">
              <span className="gs-icon blue-bg">🎓</span>
              <p>College Admission Guidance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Integrated Purple Banner */}
      <div className="gs-footer-banner">
        <p className="gs-banner-msg">To schedule a Personalized Counseling session register Today!</p>
        <button className="gs-reg-btn">
          Register Now <span>&rarr;</span>
        </button>
      </div>
    </section>
  );
};

export default GuidanceSection;