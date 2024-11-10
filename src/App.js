import React from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import CultureCommunity from "./pages/culturecommunity";
import Employment from "./pages/employment";
import Homepage from "./pages/homepage";
import Resources from "./pages/resources";

function App() {
  return (
    <Router>
      <ConditionalNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/culturecommunity" element={<CultureCommunity />} />
        <Route path="/employment" element={<Employment />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

function ConditionalNavbar() {
  const location = useLocation();

  // Render Navbar only on routes other than the homepage
  if (location.pathname === "/") return null;

  return <Navbar />;
}

export default App;
