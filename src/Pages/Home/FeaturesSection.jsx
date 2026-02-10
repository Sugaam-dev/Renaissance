

// import React from 'react';
// import './FeaturesSection.css';

// const FeaturesSection = () => {
//   const candidates = [
//     { name: "Sarthak Lanjewar", img: "/Images/candidate-1.avif" },
//     { name: "Dan Mitchell", img: "/Images/candidate-1.avif" }, 
//     { name: "Noah Patterson", img: "/Images/candidate-1.avif" },
//     { name: "Tess Anderson", img: "/Images/candidate-1.avif" },
//   ];

//   return (
//     <div className="fs-main-wrapper">
//       {/* CTA Section - Slides in from Left */}
//       <section className="fs-banner-cta fs-anim-slide-left">
//         <div className="fs-cta-grid">
//           <h1 className="fs-cta-heading">Apply <br /> Today!</h1>
//           <p className="fs-cta-text">
//             With The Renaissance Design Studio, one program can pave the way to a limitless future in design, art, and architecture."
//           </p>
//           <div className="fs-cta-action">
//             <button className="fs-btn-register">
//               Register Now <span className="fs-arrow">→</span>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Candidates Section - Slides in from Right */}
//       <section className="fs-banner-candidates fs-anim-slide-right">
//         <div className="fs-candidates-layout">
//           <h2 className="fs-section-title">CANDIDATES <br /> OF 2024</h2>
//           <div className="fs-profiles-container">
//             {candidates.map((item, idx) => (
//               /* Each profile pops up from the bottom with a delay */
//               <div 
//                 key={idx} 
//                 className="fs-profile-item fs-anim-slide-up" 
//                 style={{ animationDelay: `${idx * 0.1}s` }}
//               >
//                 <div className="fs-avatar-frame">
//                   <img src={item.img} alt={item.name} className="fs-avatar-img" />
//                 </div>
//                 <span className="fs-profile-label">{item.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default FeaturesSection;

import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const candidates = [
    { name: "Sarthak Lanjewar", img: "/Images/candidate-1.avif" },
    { name: "Dan Mitchell", img: "/Images/candidate-1.avif" }, 
    { name: "Noah Patterson", img: "/Images/candidate-1.avif" },
    { name: "Tess Anderson", img: "/Images/candidate-1.avif" },
  ];

  return (
    <div className="fs-main-wrapper">
      {/* Apply Today Section */}
      <section className="fs-banner-cta">
        <div className="fs-cta-grid">
          <h1 className="fs-cta-heading">
            Apply <br /> Today!
          </h1>

          <p className="fs-cta-text">
            With The Renaissance Design Studio, one program can pave the way to a limitless future in design, art, and architecture.
          </p>

          <div className="fs-cta-action">
            <button className="fs-btn-register">
              Register Now <span className="fs-arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Candidates Section */}
      <section className="fs-banner-candidates">
        <div className="fs-candidates-layout">
          <h2 className="fs-section-title">
            CANDIDATES <br /> OF 2024
          </h2>

          <div className="fs-profiles-container">
            {candidates.map((item, idx) => (
              <div key={idx} className="fs-profile-item">
                <div className="fs-avatar-frame">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="fs-avatar-img"
                  />
                </div>
                <span className="fs-profile-label">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;
