import { useState } from 'react'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./authSlice";
import './App.css'
import AppRouter from "./RouteFiles/Router.jsx";
import WhatsappButton from "./components/WhatsappButton.jsx";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      dispatch(setUser(JSON.parse(user)));
    }
  }, []);
  
  return (
    <>
      <AppRouter />
      <WhatsappButton />
    </>
  );
}

export default App
