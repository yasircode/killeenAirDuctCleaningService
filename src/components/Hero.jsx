import React from 'react';
import './Hero.css';
// Image import (Make sure profile3.jpeg is in the same folder)
import profileImg from './profile3.jpeg'; 

const Hero = () => {
  return (
    <div 
      className="hero-wrapper" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${profileImg})` 
      }}
    >
      <div className="hero-container">
        <section className="hero-box">
          <h1 className="hero-title">
            <br /><br />
            <span>Killeen Air Duct Cleaning & Vent Cleaning Services</span> <br /> 
            <h4>Professional Air Duct & Vent Cleaning in Killeen Texas</h4> 
          </h1>

          <p className="hero-tagline">
            Improve Indoor Air Quality with our <br className="desktop-only" /> 
            Professional Air Duct & Vent Cleaning
          </p>

          <div className="hero-rating-section">
            <div className="stars">★★★★★</div>
            <h2 className="rating-stars">Rated 4.9 out of 5 Stars</h2>
            <p className="rating-subtitle">Based On 328 customer reviews</p>
          </div>

          <div className="hero-button-group">
            <a href="tel:(254) 998-3484" className="cta-button call-btn">
              CALL US: (254) 998-3484
            </a>
            <button className="cta-button schedule-btn">
              SCHEDULE NOW
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;