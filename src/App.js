import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CultureCommunity from "./pages/culturecommunity";
import Employment from "./pages/employment";
import Homepage from "./pages/homepage";
import Resources from "./pages/resources";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/culturecommunity" element={<CultureCommunity />} />
        <Route path="/employment" element={<Employment />} />
        <Route path="/resources" element={<Resources />} />

      </Routes>
    </Router>
  );
}

export default App;
