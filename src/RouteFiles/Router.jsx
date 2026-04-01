import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../Pages/Home/HomePage.jsx'; // The new component
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer.jsx';
import RegisterPage from '../Pages/registerNow/RegisterPage.jsx';
import OurPresence from '../Pages/ourPresence/OurPresence.jsx';
import ExamEnquiry from '../Pages/examEnquiry/ExamEnquiry.jsx';
import AboutSection from '../Pages/About/AboutSection.jsx';
import BachelorsOfDesign from '../Pages/Home/BachelorsOfDesign.jsx';
import MasterOfDesign from '../Pages/Home/MasterOfDesign.jsx';
import ForeignPortfolio from '../Pages/Home/ForeignPortfolio.jsx';
import BachelorOfArchitecture from '../Pages/Home/BachelorOfArchitecture.jsx';
import BachelorOfFineArts from '../Pages/Home/BachelorOfFineArts.jsx';
import ScrollToTop from '../components/ScrollToTop.jsx';
import ExamPage from "../Pages/exams/ExamPage";
import PricingPage from "../Pages/PricingPage/PricingPage";
import AuthPage from "../Pages/AuthPage/AuthPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <div className="layout-container">
        {/* 3. RENDER PAGE-SPECIFIC CONTENT (Routes) */}
        <main className="page-content"> 
          <Navbar />
          <Routes>
            {/* Home Page Route */}
            <Route path="/" element={<HomePage />} />
              {/* <Route path="/home" element={<HomePage />} /> */}
              {/* <Route path="/dashboard" element={<HomePage />} />  */}
            {/* The :slug part makes the URL dynamic (e.g., /product/red-wine-art-print) */}
            <Route path ='/registration' element={<RegisterPage/>}/>
            <Route path ='/why-renaissance' element={<AboutSection/>}/>
            <Route path='/our-presence' element={<OurPresence/>}/>
        
                       <Route path='/exam-enquiry' element={<ExamEnquiry/>}/>
            <Route path='/bachelor-of-design' element={<BachelorsOfDesign/>}/>
            <Route path='/master-of-design' element={<MasterOfDesign/>}/>
            <Route path='/portfolio-design' element={<ForeignPortfolio/>}/> 
            <Route path='/bachelor-of-architecture' element={<BachelorOfArchitecture/>}/>
            <Route path='/bachelor-of-fine-arts' element={<BachelorOfFineArts/>}/>
            <Route path="/exams/:examId" element={<ExamPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
          <Footer />
          {/* Add these inside <Routes> in AppRouter.js */}
      {/* <Route path="/profile" element={<div>User Profile Page</div>} />
      <Route path="/settings" element={<div>Account Settings Page</div>} /> */}
        </main>

        {/* 4. RENDER GLOBAL FOOTER */}
        
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;