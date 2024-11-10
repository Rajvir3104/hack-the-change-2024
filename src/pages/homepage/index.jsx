import { gapi } from 'gapi-script';
import React, { useEffect } from 'react';
import Community_image from "../../assets/Community_Image.png";
import Discover_image from "../../assets/Discover_Image.png";
import Employment_image from "../../assets/Employment_Image.png";
import videoPath from "../../assets/pathways-hero-clip.mp4";
import Translation_image from "../../assets/Translation_Image.png";
import LoginButton from "../login";
import './style.css';

const clientId = process.env.REACT_APP_CLIENT_ID;

const Homepage = () => {

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load('client:auth2', start);
  }, []);

  const smoothScroll = (event) => {
    event.preventDefault();
    const target = document.querySelector(event.target.getAttribute("href"));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div>
      <div className="hero-container">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Welcome to <span className='blue-tag'>Pathways</span></h1>
            <p>Your bridge to resources, community, and support.</p>
            <p>
              <LoginButton />
              <button className="cta-button">Translate</button>
            </p>
            <p>Take a peak at our mission <a href="#translation-heading" className='blue-tag-link' onClick={smoothScroll}>below!</a></p>
          </div>
        </div>
        <video autoPlay muted loop className="hero-video">
          <source src={videoPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="#translation-experience">
        <div className="translation-section" id="translation-heading">
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

      <div className="section-break"></div>

      <div className="discover-experience">
        <div className="discover-section">
          <img src={Discover_image} alt="Discover Restaurants" />
          <div className="discover-wording">
            <h1 className="discover-heading"> <span className='blue-tag'>Discover</span> Restaurants Near You</h1>
            <p className="discover-caption">
              Easily find a variety of dining options near you, from cozy cafes to fine dining restaurants.
              Filter restaurants based on your cuisine preferences, budget, and location to find the perfect spot for your next meal.
              Pathways makes dining out easy, with options that cater to every taste and need.
            </p>
          </div>
        </div>
      </div>


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
