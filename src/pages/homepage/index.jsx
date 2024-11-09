import React from 'react';
import videoPath from "../../assets/pathways-hero-clip.mp4";
import './style.css';

const Homepage = () => {
  return (
    <div>
      <div className="hero-container">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Welcome to Pathways</h1>
            <p>Your bridge to resources, community, and support.</p>
          </div>
        </div>
        <video autoPlay muted loop className="hero-video">
          <source src={videoPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="call-to-action">
      <p className="cta-caption">
          Translate the Webpage Below
        </p>
        <button className="cta-button">Translate</button>
      </div>    

      {/* <div className="testimonials-container">
        <Testimonial /> 
      </div> */}
    </div>
  );
}

export default Homepage;
