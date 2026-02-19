import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../Pages/Home/HomePage.jsx'; // The new component
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer.jsx';
import RegisterPage from '../Pages/registerNow/RegisterPage.jsx';
import OurPresence from '../Pages/ourPresence/OurPresence.jsx';
import ExamEnquiry from '../Pages/examEnquiry/ExamEnquiry.jsx';
import AboutSection from '../Pages/About/AboutSection.jsx';
import ScrollToTop from '../components/ScrollToTop.jsx';

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