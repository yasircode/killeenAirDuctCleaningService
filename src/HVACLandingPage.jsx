import React, { useState } from 'react';
import './HVACLandingPage.css';

const HVACLandingPage = () => {
  const [activeTab, setActiveTab] = useState('annual');

  const specialties = [
    "AC Cleaning Service", "Attic Insulation Services",
    "Dryer Vent Cleaning", "Commercial Air Duct Cleaning",
    "HVAC Installation & Repair", "Air Duct Repair & Replacement",
    "UV Light System Installation", "Residential Air Duct Cleaning"
  ];

  const maintenanceContent = {
    annual: "Just like your home needs regular dusting, your air ducts collect dust over time. We recommend a basic air duct cleaning once a year. This service involves a thorough vacuuming to remove any loose dust and debris, ensuring the air you breathe is fresh and clean.",
    deep: "For peak system performance and air quality, a more intensive cleaning is advisable every 3 to 5 years using rotary brushes and disinfection solutions.",
    custom: "We understand every home is unique. We provide initial inspections to determine the specific needs of your HVAC system for a personalized approach.",
    pricing: "We believe in upfront pricing. Deep cleaning usually ranges from $50 to $100 per duct, improving both air quality and system longevity."
  };

  return (
    <div className="page-wrapper">
      
      {/* SECTION 1: RESIDENTIAL CLEANING */}
      <section className="section-container">
        <div className="flex-layout">
          <div className="image-box">
            <img src="024.jpeg" alt="Kitchen Duct Cleaning" />
          </div>
         <div className="text-box">
  <h2 className="title-bold">RESIDENTIAL AIR DUCT CLEANING IN KILLEEN, TX – CLEAN AIR, HEALTHY HOME</h2>
  
  <p className="description">
    Air ducts are the lungs of your home, and at <strong>Killeen Air Duct Cleaning</strong>, we ensure they breathe fresh. Over time, dust and allergens build up, but our expert team is here to restore your indoor air quality.
  </p>

  <p className="description">
    As shown in our process, we use high-powered <strong>Negative Pressure Cleaning</strong> units. By connecting industrial-grade, HEPA-filtered vacuums directly to your system, we pull every ounce of debris out of your home without leaving a speck of dust behind.
  </p>

  <p className="description">
    Our specialized equipment doesn't just clean; it sanitizes your environment by reducing allergens, eliminating musty odors, and significantly improving your HVAC efficiency.
  </p>

  <button className="red-btn align-right">GET AN ESTIMATE</button>
</div>
        </div>
      </section>
    </div>
  );
};

export default HVACLandingPage;