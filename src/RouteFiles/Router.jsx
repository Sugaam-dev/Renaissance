import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../Pages/Home/HomePage.jsx'; // The new component
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer.jsx';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="layout-container">
        
        

        {/* 3. RENDER PAGE-SPECIFIC CONTENT (Routes) */}
        <main className="page-content"> 
          <Navbar />
          <Routes>
            {/* Home Page Route */}
            <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/dashboard" element={<HomePage />} /> 
            {/* The :slug part makes the URL dynamic (e.g., /product/red-wine-art-print) */}
          
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