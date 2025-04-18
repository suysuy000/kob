import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import BusinessCardPage from './pages/BusinessCard';
import CR from './pages/CardRegistration';
import MessagePage from './pages/Message';
import ResumePage from './pages/ResumeRes';
import Resume from './pages/Resume';
import ResumeHub from './pages/ResumeHub';
import NetworkPage from './pages/NetworkMain';
import NotificationsPage from './pages/Notification';
import SettingsPage from './pages/Settings';

//한국어로 하기

// 라우트 컴포넌트 타입
type RouteConfig = {
  path: string;
  element: React.ReactNode;
};

// 라우트 설정
const routes: RouteConfig[] = [
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.LOGIN, element: <Login /> },
  { path: ROUTES.BUSINESS_CARD, element: <BusinessCardPage /> },
  { path: ROUTES.NETWORK, element: <NetworkPage /> },
  { path: ROUTES.NOTIFICATION, element: <NotificationsPage /> },
  { path: ROUTES.SETTINGS, element: <SettingsPage /> },
  { path: ROUTES.CARD_REGISTRATION, element: <CR /> },
  { path: ROUTES.MESSAGE, element: <MessagePage /> },
  { path: ROUTES.RESUME, element: <ResumePage /> },
  { path: ROUTES.RESUME_DETAIL, element: <Resume /> },
  { path: ROUTES.RESUME_HUB, element: <ResumeHub /> },
];

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/bs" element={<BusinessCardPage />} />
      <Route path="/network" element={<NetworkPage />} />
      <Route path="/noti" element={<NotificationsPage />} />
      <Route path="/set" element={<SettingsPage />} />
      <Route path="/cr" element={<CR />} />
      <Route path="/ms" element={<MessagePage/>} />
      <Route path="/rs" element={<ResumePage/>} />
      <Route path="/resume" element={<Resume/>} />
      <Route path="/resumehub" element={<ResumeHub/>} />
      
    </Routes>

  );
}

export default App