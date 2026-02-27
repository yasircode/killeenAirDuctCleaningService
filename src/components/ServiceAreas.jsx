import React from 'react';
import { Link } from 'react-router-dom'; // Link import karna zaroori hai
import "./ServiceAreas.css";

const ServiceArea = () => {
  // Client ki Tier list ke mutabiq cities organize ki hain
  const cities = [
    { name: "Temple", path: "/temple-tx" },
    { name: "Belton", path: "/belton-tx" },
    { name: "Harker Heights", path: "/harker-heights-tx" },
    { name: "Copperas Cove", path: "/copperas-cove-tx" },
    { name: "Georgetown", path: "/georgetown-tx" },
    { name: "Austin", path: "/austin-tx" },
    { name: "Waco", path: "/waco-tx" },
    { name: "Jarrell", path: "/jarrell-tx" },
    { name: "Nolanville", path: "/nolanville-tx" },
    { name: "Salado", path: "/salado-tx" },
    { name: "Liberty Hill", path: "/liberty-hill-tx" },
    { name: "Lampasas", path: "/lampasas-tx" },
    { name: "Fort Cavazos", path: "/fort-cavazos-tx" },
    { name: "Kempner", path: "/air-duct-cleaning-kempner-tx" }
  ];

  return (
    <section className="service-area-section" id="service-areas">
      <div className="content-container">
        {/* HEADER SECTION */}
        <div className="section-header">
          <span className="area-badge">Local Service Area</span>
          <h2 className="area-title">Cities We Serve In Central Texas</h2>
          <div className="accent-line"></div>
          <p className="area-desc">Providing 5-Star Air Duct Cleaning & Chimney Services</p>
        </div>

        {/* RESPONSIVE GRID */}
        <div className="cities-grid">
          {/* PRIMARY HUB CARD - Killeen */}
          <Link to="/killeen-tx" className="city-card hub-card" style={{ textDecoration: 'none' }}>
            <div className="hub-tag">Primary Location</div>
            <h3 className="city-label">📍 Killeen, TX</h3>
            <div className="status-indicator">
              <span className="dot"></span> Active Service Zone
            </div>
          </Link>

          {/* SECONDARY CITY CARDS AS LINKS */}
          {cities.map((city, index) => (
            <Link key={index} to={city.path} className="city-card standard-card" style={{ textDecoration: 'none' }}>
              <span className="pin-icon">📍</span>
              <span className="city-name">{city.name}, TX</span>
            </Link>
          ))}
        </div>

        {/* SEO TEXT FOR GOOGLE */}
        <div className="area-footer-text" style={{ marginTop: '30px', textAlign: 'center', fontSize: '14px', color: '#666' }}>
          <p>We provide professional air duct cleaning, dryer vent cleaning, and chimney sweep services across all major Central Texas locations including Bell County, Williamson County, and McLennan County.</p>
        </div>

        {/* MOBILE-OPTIMIZED CALL TO ACTION */}
        <div className="cta-box">
          <a href="tel:(254) 998-3484" className="area-call-button">
            Check Availability In Your City
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;