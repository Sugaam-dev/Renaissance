import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Testimonial.css';

const Testimonial = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0); // Track which testimonial (0=1st, 1=2nd, 2=3rd)
  // Animation Observer Logic
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('rds-show');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.rds-hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Ananya Sharma",
      role: "NID Student",
      text: "The Renaissance Design Studio changed my perspective on creativity. The mentorship for my portfolio was invaluable!",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "Architecture Aspirant",
      text: "The mock tests and study materials are top-notch. I felt incredibly prepared for NATA thanks to the constant guidance.",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      id: 3,
      name: "Sneha Kapoor",
      role: "Fashion Design",
      text: "The guidance here is unmatched. I secured admission into my dream college thanks to their portfolio reviews.",
      image: "https://randomuser.me/api/portraits/women/3.jpg"
    }
  ];

  // Create order 1,2,3,2,1,2,3,2,1... (smooth oscillating pattern)
  const displayOrder = [0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1]; // Extended to loop smoothly
  const orderedTestimonials = displayOrder.map(idx => testimonials[idx]);

  return (
    <div className="rds-main-container">
      {/* Testimonials Section */}
      <section className="rds-testimonial-section">
        <h2 className="rds-testimonial-heading">TESTIMONIALS</h2>
        <div className="rds-swiper-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={false}
            autoplay={{ delay: 4000 }}
            className="rds-swiper"
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => {
              // Map slide index to testimonial ID (0, 1, 2 based on pattern)
              const currentTestimonialId = displayOrder[swiper.activeIndex];
              setActiveTestimonial(currentTestimonialId);
            }}
          >
            {orderedTestimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="rds-slide-content">
                  <p className="rds-quote">"{item.text}"</p>
                  <div className="rds-author-section">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="rds-author-image"
                    />
                    <div className="rds-author-info">
                      <p className="rds-author"><strong>{item.name}</strong> — {item.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination - 3 buttons */}
          <div className="rds-custom-pagination">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                className={`rds-pagination-btn ${activeTestimonial === idx ? 'active' : ''}`}
                onClick={() => {
                  // Find first occurrence of this testimonial index in displayOrder
                  const slideIndex = displayOrder.indexOf(idx);
                  if (swiperInstance && slideIndex !== -1) {
                    swiperInstance.slideTo(slideIndex);
                  }
                }}
                aria-label={`Show testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Internship Section - Comes from Left to Right */}
      <div className="rds-white-section rds-hidden rds-from-left">
        <img 
          src="/Images/interanship-img.avif" 
          alt="Internship Opportunities" 
          className="rds-full-width-img"
        />
      </div>
    </div>
  );
};

export default Testimonial;