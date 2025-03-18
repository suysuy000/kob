import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import BusinessCardPage from './pages/BusinessCard';
import CR from './pages/CardRegistration';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/bs" element={<BusinessCardPage />} />
      <Route path="/cr" element={<CR />} />

    </Routes>

  );
}

export default App