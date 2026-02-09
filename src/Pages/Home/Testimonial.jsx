

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Testimonial.css';

const Testimonial = () => {
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
      text: "The Renaissance Design Studio changed my perspective on creativity. The mentorship for my portfolio was invaluable!"
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "Architecture Aspirant",
      text: "The mock tests and study materials are top-notch. I felt incredibly prepared for NATA thanks to the constant guidance."
    },
    {
      id: 3,
      name: "Sneha Kapoor",
      role: "Fashion Design",
      text: "The guidance here is unmatched. I secured admission into my dream college thanks to their portfolio reviews."
    }
  ];

  return (
    <div className="rds-main-container">
      {/* Testimonials Section */}
      <section className="rds-testimonial-section">
        <h2 className="rds-testimonial-heading">TESTIMONIALS</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          className="rds-swiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="rds-slide-content">
                <p className="rds-quote">"{item.text}"</p>
                <p className="rds-author"><strong>{item.name}</strong> — {item.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Internship Section - Comes from Left to Right */}
      <div className="rds-white-section rds-hidden rds-from-left">
        <img 
          src="/Images/interanship-img.avif" 
          alt="Internship Opportunities" 
          className="rds-full-width-img"
        />
      </div>

      {/* Community Section - Comes from Right to Left */}
      <div className="rds-white-section rds-community-logo-container rds-hidden rds-from-right">
        <img 
          src="/Images/community-logo.avif" 
          alt="Our Community" 
          className="rds-community-logo-img"
        />
      </div>
    </div>
  );
};

export default Testimonial;