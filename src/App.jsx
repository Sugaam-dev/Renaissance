import { useState } from 'react'
import './App.css'
import AppRouter from "./RouteFiles/Router.jsx";
import WhatsappButton from "./components/WhatsappButton.jsx";


function App() {
  return (
    <>
      <AppRouter />
      <WhatsappButton />
    </>
  );
}

export default App
