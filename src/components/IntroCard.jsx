import React from 'react';
import './IntroCard.css';

const IntroCard = () => {
  return (
    <div className="intro-section">
      <div className="intro-card">
        <h2 className="intro-title">
          Expert Air Duct Cleaning <span>Killeen, TX</span>
        </h2>

        <p className="intro-text">
          Restore your indoor air quality with <strong>Air Duct Cleaning Killeen</strong>, Central Texas's trusted HVAC hygiene specialists. We provide <strong>certified source removal</strong> to ensure your home remains a healthy, dust-free sanctuary.
        </p>

        <p className="intro-text">
          Using <strong>industrial-grade HEPA filtration</strong> and mechanical agitation, we eliminate deep-seated allergens and pollutants, optimizing your system’s airflow and <strong>reducing energy costs</strong>.
        </p>

        <div className="intro-highlight">
          <strong>Breathe Cleaner Today.</strong> Experience the visible difference of a professionally sanitized HVAC system.
        </div>

        {/* Badge Section */}
        <div className="badge-container">
          <img src="/google.png" alt="Google Review" className="trust-badge" />
          <img src="/angni.webp" alt="Angi Award" className="trust-badge" />
          <img src="/yelp.webp" alt="Yelp Rating" className="trust-badge" />
           <img src="/logo2.webp" alt="Yelp Rating" className="trust-badge" />
            <img src="/BBB.webp" alt="Yelp Rating" className="trust-badge" />
            <img src="/logo5.png" alt="Yelp Rating" className="trust-badge" />

        </div>
      </div>
    </div>
  );
};

export default IntroCard;