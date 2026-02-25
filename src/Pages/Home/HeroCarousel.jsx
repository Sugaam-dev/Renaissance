
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom'; // 1. Import Link

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './HeroCarousel.css';
import { useNavigate } from 'react-router-dom';

const HeroCarousel = () => {
  const navigate = useNavigate();
  const book =()=>{
    navigate('/registration');
  }
  const slides = [
    {
      id: 1,
      image: '/Images/herocarousel-1.avif',
      italicText: 'Bachelor of fine arts',
      title: 'WELCOME TO The RENAISSANCE',
      desc: 'Your one stop to get future ready to crack Design entrance exams',
      path: '/bachelor-of-design' // 2. Add path for routing
    },
    {
        id: 2,
        image: '/Images/herocarousel-2.avif', 
        italicText: 'Master of Design',
        title: 'EXPERT FACULTY GUIDANCE',
        desc: 'Join the premier institute for NID, NIFT, and UCEED preparation',
        path: '/master-of-design'
    },
    {
        id: 3,
        image: '/Images/herocarousel-3.avif', 
        italicText: 'Bachelor of Finance',
        title: 'BUILD YOUR IDENTITY',
        desc: 'Crafing unique portfolios that get noticed by top design schools',
        path: '/portfolio-design'
    },
      {
        id: 4,
        image: '/Images/herocarousel-2.avif', 
        italicText: 'Master of Architecture',
        title: 'BUILD YOUR IDENTITY',
        desc: 'Crafing unique portfolios that get noticed by top design schools',
        path: '/portfolio-design'
    },
    {
        id: 5,
        image: '/Images/herocarousel-2.avif', 
        italicText: 'Foreign Portfolio',
        title: 'BUILD YOUR IDENTITY',
        desc: 'Crafing unique portfolios that get noticed by top design schools',
        path: '/portfolio-design'
    }
  ];

  return (
    <div className="hero-section">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="hero-slide-bg" 
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url(${slide.image})` }}
            >
              <div className="hero-container">
                {/* Left Content */}
                <div className="hero-left">
                  <h2 className="italic-text">{slide.italicText}</h2>
                  {/* 3. Link Added Here */}
                  <Link to={slide.path} className="read-more-btn">
                    Read More
                  </Link>
                </div>

                {/* Right Content */}
                <div className="hero-right">
                  <div className="title-group">
                    <h1 className="hero-title">{slide.title}</h1>
                    <div className="vertical-line"></div>
                    <p className="hero-desc">{slide.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

        <button className="counseling-btn" onClick={book}>
            BOOK A FREE COUNSELING SESSION
        </button>
    </div>
  );
};

export default HeroCarousel;