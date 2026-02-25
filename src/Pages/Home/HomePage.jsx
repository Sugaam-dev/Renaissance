import React, { Suspense, lazy } from 'react';
import './HomePage.css';

const HeroCarousel = lazy(() => import('./HeroCarousel'));
const FeaturesSection = lazy(() => import('./FeaturesSection'));
const GuidanceSection = lazy(() => import('./GuidanceSection'));
const DesignStudio = lazy(() => import('./DesignStudio'));
const Testimonial = lazy(() => import('./Testimonial'));
const EnquiryPage = lazy(() => import('./EnquiryPage'));
const CommunityPage = lazy(() => import('./CommunityPage'));

const HomePage = () => {
  return (
    <div className="home-content-container">
     
        <HeroCarousel />
         <Suspense fallback={<div className="loader">Loading...</div>}>
        <FeaturesSection/>
        <GuidanceSection />
        <DesignStudio />
        <Testimonial />
        <CommunityPage />
        <EnquiryPage />
      </Suspense>
    </div>
  );
};

export default HomePage;
