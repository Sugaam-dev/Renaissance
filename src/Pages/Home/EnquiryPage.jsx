// import React from 'react';
// import './EnquiryPage.css';

// const EnquiryPage = () => {
//   return (
//     <main className="ep-hero-wrapper">
//       <div className="ep-glass-overlay">
//         <div className="ep-main-container">
          
//           {/* Left Section: Branding & Image */}
//           <section className="ep-info-section">
//             <h1 className="ep-title-text">
//               Connect with us to <br />
//               <span className="ep-title-highlight">start your Creative Journey</span>
//             </h1>
//             <p className="ep-sub-description">
//               Lorem Ipsum is simply dummy text of the printing and typesetting 
//               dummy text ever when an unknown printer took a galley of type 
//               and scrambled it to make a type specimen book.
//             </p>
//             {/* Reduced size image box for desktop */}
//             <div className="ep-image-frame">
//               <img 
//                 src="/Images/enquiry-inner-img.avif" 
//                 alt="Students collaborating" 
//                 className="ep-hero-img" 
//               />
//             </div>
//           </section>

//           {/* Right Section: Form */}
//           <section className="ep-form-section">
//             <div className="ep-form-card">
//               <h2 className="ep-form-title">ENQUIRE NOW</h2>
//               <form className="ep-form-element">
//                 <div className="ep-field-group">
//                   <label className="ep-label">FULL NAME</label>
//                   <input type="text" className="ep-input" placeholder="Enter your name" required />
//                 </div>
                
//                 <div className="ep-field-group">
//                   <label className="ep-label">PHONE NO.</label>
//                   <input type="tel" className="ep-input" placeholder="Phone number" required />
//                 </div>
                
//                 <div className="ep-field-group">
//                   <label className="ep-label">EMAIL ADDRESS *</label>
//                   <input type="email" className="ep-input" required />
//                 </div>
                
//                 <div className="ep-field-group">
//                   <label className="ep-label">WHICH STANDARD ARE YOU STUDYING IN?</label>
//                   <input type="text" className="ep-input" required />
//                 </div>
                
//                 <div className="ep-field-group">
//                   <label className="ep-label">WHAT EXAMS ARE YOU PREPARING FOR</label>
//                   <input type="text" className="ep-input" required />
//                 </div>

//                 <button type="submit" className="ep-submit-button">Send</button>
//               </form>
//             </div>
//           </section>

//         </div>
//       </div>

//     </main>
//   );
// };

// export default EnquiryPage;

import React from 'react';
import './EnquiryPage.css';

const EnquiryPage = () => {
  // Define the background style here
  const backgroundStyle = {
    backgroundImage: "url('/Images/enquiry-img.avif')",
  };

  return (
    // Apply the style object to the wrapper
    <main className="ep-hero-wrapper" style={backgroundStyle}>
      <div className="ep-glass-overlay">
        <div className="ep-main-container">
          
          {/* Left Section: Branding & Image */}
          <section className="ep-info-section">
            <h1 className="ep-title-text">
              Connect with us to <br />
              <span className="ep-title-highlight">start your Creative Journey</span>
            </h1>
            <p className="ep-sub-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting 
              dummy text ever when an unknown printer took a galley of type 
              and scrambled it to make a type specimen book.
            </p>
            <div className="ep-image-frame">
              <img 
                src="/Images/enquiry-inner-img.avif" 
                alt="Students collaborating" 
                className="ep-hero-img" 
              />
            </div>
          </section>

          {/* Right Section: Form */}
          <section className="ep-form-section">
            <div className="ep-form-card">
              <h2 className="ep-form-title">ENQUIRE NOW</h2>
              <form className="ep-form-element">
                <div className="ep-field-group">
                  <label className="ep-label">FULL NAME</label>
                  <input type="text" className="ep-input" placeholder="Enter your name" required />
                </div>
                
                <div className="ep-field-group">
                  <label className="ep-label">PHONE NO.</label>
                  <input type="tel" className="ep-input" placeholder="Phone number" required />
                </div>
                
                <div className="ep-field-group">
                  <label className="ep-label">EMAIL ADDRESS *</label>
                  <input type="email" className="ep-input" placeholder="Enter your email" required />
                </div>
                
                <div className="ep-field-group">
                  <label className="ep-label">WHICH STANDARD ARE YOU STUDYING IN?</label>
                  <input type="text" className="ep-input" placeholder="Enter your standard" required />
                </div>
                
                <div className="ep-field-group">
                  <label className="ep-label">WHAT EXAMS ARE YOU PREPARING FOR</label>
                  <input type="text" className="ep-input" placeholder="Enter the exam name" required />
                </div>

                <button type="submit" className="ep-submit-button">Send</button>
              </form>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
};

export default EnquiryPage;