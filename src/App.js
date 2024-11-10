import React from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Dashboard from "./pages/dashboard";
import Employment from "./pages/employment";
import EventPosting from "./pages/eventposting";
import Homepage from "./pages/homepage";
import Maps from "./pages/maps";
import OrganizationPosting from "./pages/organization";


import Translation from "./pages/translation";

// Import the LanguageContext and the LanguageProvider
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function App() {
  return (
    // Wrap the entire app with the LanguageProvider to manage language globally
    <LanguageProvider>
      <Router>
        <ConditionalNavbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/culturecommunity" element={<CultureCommunity />} />
          <Route path="/employment" element={<Employment />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/translation" element={<Translation />} />
          <Route path="/maps" element={<Maps />} />
        </Routes>
      </Router>
    </LanguageProvider>

  );
}

function ConditionalNavbar() {
  const location = useLocation();
  const { changeLanguage } = useLanguage(); // Access changeLanguage function from context

  // Function to handle language switch
  const handleLanguageChange = (language) => {
    changeLanguage(language);
  };

  // Render Navbar only on routes other than the homepage
  if (location.pathname === "/") return null;

  return (
    <Navbar>
      {/* Language switch buttons inside Navbar */}
      <button onClick={() => handleLanguageChange('en')}>English</button>
      <button onClick={() => handleLanguageChange('es')}>Español</button>
    </Navbar>
  );
}

export default App;
