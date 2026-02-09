

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import HeroCarousel from './HeroCarousel';
import FeaturesSection from './FeaturesSection';
import GuidanceSection from './GuidanceSection';
import DesignStudio from './DesignStudio';
import Testimonial from './Testimonial';
import EnquiryPage from './EnquiryPage';

const HomePage = () => {

  return (
    <div className="home-content-container">
      <HeroCarousel />
      <FeaturesSection />
      <GuidanceSection />
      <DesignStudio />
      <Testimonial />
      <EnquiryPage />
    </div>
  );
};

export default HomePage;