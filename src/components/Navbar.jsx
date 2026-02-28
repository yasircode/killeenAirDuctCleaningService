import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  const closeMenu = () => {
    setIsMobile(false);
    setShowService(false);
    setShowLocation(false);
  };

  return (
    <nav className="nav-fixed-wrapper">
      <div className="top-black-bar">
        <div className="top-bar-inner">
          <div className="info-item">📍 Killeen, TX</div>
        </div>
      </div>

      <div className="main-nav-white">
        <div className="nav-left">
          <Link to="/" onClick={closeMenu}>
            <img src="/logom.jpeg" alt="Logo" className="site-logo" />
          </Link>
        </div>

        <div className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? '✖' : '☰'}
        </div>

        <div className={`nav-center ${isMobile ? 'nav-center-mobile' : ''}`}>
          <ul className="nav-menu-list">
            <li><Link to="/" onClick={closeMenu} className="nav-link-item">HOME</Link></li>
            
            {/* SERVICE SECTION */}
            <li className={`dropdown ${showService ? 'open' : ''}`}>
              <div className="nav-link-item" onClick={() => setShowService(!showService)}>
                SERVICES <span className="arrow">▾</span>
              </div>
              <ul className="dropdown-menu">
                <li><Link to="/air-duct-cleaning" onClick={closeMenu}>Air Duct Cleaning</Link></li>
                <li><Link to="/hvac-system-cleaning" onClick={closeMenu}>HVAC System Cleaning</Link></li>
                <li><Link to="/dryer-vent-cleaning" onClick={closeMenu}>Dryer Vent Cleaning</Link></li>
                <li><Link to="/chimney-sweep-services" onClick={closeMenu}>Chimney Sweep & Services</Link></li>
                <li><Link to="/air-duct-repair" onClick={closeMenu}>Air Duct Repair</Link></li>
                <li><Link to="/air-duct-replacement" onClick={closeMenu}>Air Duct Replacement</Link></li>
                <li><Link to="/attic-insulation" onClick={closeMenu}>Attic Insulation</Link></li>
                <li><Link to="/uv-light-purification" onClick={closeMenu}>Indoor Air UV Light Purification</Link></li>
              </ul>
            </li>

            {/* LOCATION SECTION - UPDATED FOR KILLEEN NESTED MENU */}
            <li className={`dropdown ${showLocation ? 'open' : ''}`}>
              <div className="nav-link-item" onClick={() => setShowLocation(!showLocation)}>
                LOCATION <span className="arrow">▾</span>
              </div>
              <ul className="dropdown-menu scrollable-menu">
                
                {/* KILLEEN NESTED SUB-MENU */}
                <li className="nested-parent">
                  <span className="city-label">Killeen, TX ▸</span>
                  <ul className="nested-dropdown-menu">
                    <li><Link to="/air-duct-cleaning-killeen-tx" onClick={closeMenu}>Air Duct Cleaning</Link></li>
                    <li><Link to="/hvac-system-cleaning-killeen-tx" onClick={closeMenu}>HVAC System Cleaning</Link></li>
                    <li><Link to="/dryer-vent-cleaning-killeen-tx" onClick={closeMenu}>Dryer Vent Cleaning</Link></li>
                    <li><Link to="/chimney-sweep-killeen-tx" onClick={closeMenu}>Chimney Sweep</Link></li>
                    <li><Link to="/chimney-services-killeen-tx" onClick={closeMenu}>Chimney Services</Link></li>
                    <li><Link to="/air-duct-repair-killeen-tx" onClick={closeMenu}>Air Duct Repair</Link></li>
                    <li><Link to="/air-duct-replacement-killeen-tx" onClick={closeMenu}>Air Duct Replacement</Link></li>
                    <li><Link to="/attic-insulation-killeen-tx" onClick={closeMenu}>Attic Insulation</Link></li>
                    <li><Link to="/uv-light-air-purification-killeen-tx" onClick={closeMenu}>UV Light Purification</Link></li>
                  </ul>
                </li>

                {/* OTHER CITIES */}
                <li><Link to="/location/harkerheights" onClick={closeMenu}>Harker Heights, TX</Link></li>
                <li><Link to="/location/copperascove" onClick={closeMenu}>Copperas Cove, TX</Link></li>
                <li><Link to="/location/nolanville" onClick={closeMenu}>Nolanville, TX</Link></li>
                <li><Link to="/location/fortcavazos" onClick={closeMenu}>Fort Cavazos, TX</Link></li>
                <li><Link to="/location/belton" onClick={closeMenu}>Belton, TX</Link></li>
                <li><Link to="/location/temple" onClick={closeMenu}>Temple, TX</Link></li>
                <li><Link to="/location/salado" onClick={closeMenu}>Salado, TX</Link></li>
                <li><Link to="/location/Lampasas" onClick={closeMenu}>Lampasas, TX</Link></li>
                <li><Link to="/location/LibertyHill" onClick={closeMenu}>Liberty Hill, TX</Link></li>
                <li><Link to="/location/Georgetown" onClick={closeMenu}>Georgetown, TX</Link></li>
                <li><Link to="/location/Waco" onClick={closeMenu}>Waco, TX</Link></li>
                <li><Link to="/location/Jarrell" onClick={closeMenu}>Jarrell, TX</Link></li>
              </ul>
            </li>
            
            <li><Link to="/About" onClick={closeMenu} className="nav-link-item">ABOUT</Link></li>
            <li><Link to="/Contact" onClick={closeMenu} className="nav-link-item">CONTACT</Link></li>
          </ul>
        </div>

        <div className="nav-right desktop-only-call">
          <a href="tel:(254) 998-3484" className="call-now-btn">
            CALL US: (254) 998-3484
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;