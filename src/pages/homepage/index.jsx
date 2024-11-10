import React, { useState } from 'react';
import Community_image from "../../assets/Community_Image.png";
import Discover_image from "../../assets/Discover_Image.png";
import Employment_image from "../../assets/Employment_Image.png";
import videoPath from "../../assets/pathways-hero-clip.mp4";
import Translation_image from "../../assets/Translation_Image.png";
import GoogleTranslate from '../../components/GoogleTranslate.jsx'; // Import the GoogleTranslate component
import './style.css';

const Homepage = () => {
  const [showTranslate, setShowTranslate] = useState(false);

  return (
    <div>
      <GoogleTranslate isVisible={showTranslate} />
      <div className="hero-container">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Welcome to <span className='blue-tag'>Pathways</span></h1>
            <p>Your bridge to resources, community, and support.</p>
            <p>
              <button className="cta-button">Sign Up</button>
              <button 
                className="cta-button" 
                onClick={() => setShowTranslate(prev => !prev)} // Toggle widget visibility
              >
                Translate
              </button>
            </p>
            <p>Already have an account? <a href="/login" className='blue-tag-link'>Log-in</a></p>
          </div>
        </div>
        <video autoPlay muted loop className="hero-video">
          <source src={videoPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="translation-experience">
        <div className="translation-section">
          <div className="translation-wording">
            <h1 className="translation-heading"> <span className='blue-tag'>Seamless</span> Language Support</h1>
            <p className="translation-caption">
              Easily translate content into your preferred language with just a click. 
              Our built-in translation tool ensures you have the support you need to fully understand and engage with the platform, no matter your language.
            </p>
          </div>
          <img src={Translation_image} alt="Translation" />
        </div>
      </div>    

      {/* Line break */}
      <div className="section-break"></div>

      <div className="discover-experience">
        <div className="discover-section">
          <img src={Discover_image} alt="Discover Resources" />
          <div className="discover-wording">
            <h1 className="discover-heading"> <span className='blue-tag'>Discover</span> Essential Resources Near You</h1>
            <p className="discover-caption">
              Easily locate vital services such as food shelters, healthcare centers, and more with our interactive map. 
              Filter resources based on your needs and find immediate support right at your doorstep. 
              Pathways ensures you never have to navigate these challenges alone.
            </p>
          </div>
        </div>
      </div>    

      {/* Line break */}
      <div className="section-break"></div>

      <div className="employment-experience">
        <div className="employment-section">
          <div className="employment-wording">
            <h1 className="employment-heading"> <span className='blue-tag'>Explore</span> Job Opportunities Near You</h1>
            <p className="employment-caption">
              Find tailored job listings that match your skills and language needs. Stay informed about entry-level roles and career opportunities in your area. 
              With our easy-to-navigate job portal, you can access local employment options and take the next step towards building your future.
            </p>
          </div>
          <img src={Employment_image} alt="Employment" />
        </div>
      </div>    

      {/* Line break */}
      <div className="section-break"></div>

      <div className="culture-experience">
        <div className="culture-section">
          <img src={Community_image} alt="Community" />
          <div className="culture-wording">
            <h1 className="culture-heading"> <span className='blue-tag'>Connect</span> with Your New Community</h1>
            <p className="culture-caption">
              Easily translate content into your preferred language with just a click. 
              Our built-in translation tool ensures you have the support you need to fully understand and engage with the platform, no matter your language.
            </p>
          </div>
        </div>
      </div> 

      <div className="footer">
       © 2024 Pathways.inc, All rights reserved.
      </div>
    </div>
  );
}

export default Homepage;
