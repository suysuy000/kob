import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import BusinessCardPage from './pages/BusinessCard';
import CR from './pages/CardRegistration';
import ChatApp from './pages/Message';
import ResumePage from './pages/ResumeRes';
import Resume from './pages/Resume';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/bs" element={<BusinessCardPage />} />
      <Route path="/cr" element={<CR />} />
      <Route path="/ms" element={<ChatApp/>} />
      <Route path="/rs" element={<ResumePage/>} />
      <Route path="/resume" element={<Resume/>} />
      
    </Routes>

  );
}

export default App