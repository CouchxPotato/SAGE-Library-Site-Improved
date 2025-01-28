import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LandingPage } from './pages/LandingPage';
import App from './App';
import { AlmirahPage } from './pages/AlmirahPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/library" element={<App />} />
          <Route path="/almirah/:almirahId" element={<AlmirahPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);