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
          <div className="info-item">📍 Serving Killeen, TX & Surrounding Areas</div>
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
            
            {/* SERVICE SECTION - UPDATED LIST */}
            <li className={`dropdown ${showService ? 'open' : ''}`}>
              <div className="nav-link-item" onClick={() => setShowService(!showService)}>
                SERVICES <span className="arrow">▾</span>
              </div>
              
              <ul className="dropdown-menu mega-menu">
                {/* Air Duct Services Category */}
                <li className="menu-category">
                  <span className="category-title">Air Duct Cleaning Services</span>
                  <ul>
                     <li><Link to="/Ductservice" onClick={closeMenu}>HVAC Duct & Vent Cleaning</Link></li>
                    <li><Link to="/AirDuctCleaning" onClick={closeMenu}>Air Duct Cleaning</Link></li>
                    <li><Link to="/Commerciacleaning" onClick={closeMenu}>Air Duct Repair</Link></li>
                    <li><Link to="/DryerVentCleaning" onClick={closeMenu}>Air Duct Replacement</Link></li>
                   
                  </ul>
                </li>

                  <li className="menu-category">
                  <span className="category-title">Dryer Vent Cleaning</span>
                  <ul>  
                         <li><Link to="/ChimneyCleaning" onClick={closeMenu}>Dryer Air Vent Cleaning</Link></li>


                     <li><Link to="/dryerventinspection" onClick={closeMenu}>Dryer Vent Inspection </Link></li>
                    <li><Link to="/dryerventrepair" onClick={closeMenu}>Dryer Vent Repair</Link></li>
                    <li><Link to="/dryerventinstallation" onClick={closeMenu}>Dryer Vent Installation</Link></li>
                    <li><Link to="/lintremoval" onClick={closeMenu}>Lint Removal Service </Link></li>
                     <li><Link to="/dryerventblockage" onClick={closeMenu}>Dryer Vent Blockage Removel </Link></li>

                       <li><Link to="/dryerventflow" onClick={closeMenu}>Dryer Vent Airflow Testing</Link></li>
                       
                   
                  </ul>
                </li>

                 {/* Chimney & Vent Category */}
                <li className="menu-category">
                  <span className="category-title">Indoor Air Quality Services </span>
                  <ul>
               
                  <li><Link to="/UVLightInstallation" onClick={closeMenu}>Indoor Air UV Light Purification</Link></li>
                  </ul>
                </li>

                {/* Chimney & Vent Category */}
                <li className="menu-category">
                  <span className="category-title">Chimney Services</span>
                  <ul>
               
                    <li><Link to="/ChimneySweepPage" onClick={closeMenu}>Chimney Sweep</Link></li>
                    <li><Link to="/ChimneyServicePage" onClick={closeMenu}>Chimney Services</Link></li>
                  </ul>
                </li>

                {/* Insulation & Purification Category */}
                <li className="menu-category">
                  <span className="category-title">Insulation Service</span>
                  <ul>
                    <li><Link to="/AtticInsulation" onClick={closeMenu}>Attic Insulation</Link></li>
                  
                  </ul>
                </li>
              </ul>
            </li>

            {/* LOCATION SECTION */}
            <li className={`dropdown ${showLocation ? 'open' : ''}`}>
              <div className="nav-link-item" onClick={() => setShowLocation(!showLocation)}>
                LOCATION <span className="arrow">▾</span>
              </div>
              <ul className="dropdown-menu scrollable-menu">
                <li><Link to="/location/killeen" onClick={closeMenu}>Killeen, TX</Link></li>
                <li><Link to="/location/harkerheights" onClick={closeMenu}>Harker Heights, TX</Link></li>
                <li><Link to="/location/copperascove" onClick={closeMenu}>Copperas Cove, TX</Link></li>
                <li><Link to="/location/Nolanville" onClick={closeMenu}>Nolanville, TX</Link></li>
                <li><Link to="/location/fortcavazos" onClick={closeMenu}>FortCavaos, TX</Link></li>
                <li><Link to="/location/belton" onClick={closeMenu}>Belton, TX</Link></li>
                <li><Link to="/location/temple" onClick={closeMenu}>Temple, TX</Link></li>
                <li><Link to="/location/waco" onClick={closeMenu}>Waco, TX</Link></li>
                <li><Link to="/location/libertyhill" onClick={closeMenu}>Liberty Hill, TX</Link></li>
                <li><Link to="/location/jarrell" onClick={closeMenu}>Jarrell, TX</Link></li>
                <li><Link to="/location/salado" onClick={closeMenu}>Salado, TX</Link></li>
                <li><Link to="/location/georgetown" onClick={closeMenu}>Georgetown, TX</Link></li>
                <li><Link to="/location/lampasas" onClick={closeMenu}>Lampasas, TX</Link></li>
              </ul>
            </li>
            
            <li><Link to="/About" onClick={closeMenu} className="nav-link-item">ABOUT</Link></li>
            <li><Link to="/Contact" onClick={closeMenu} className="nav-link-item">CONTACT</Link></li>
          </ul>
        </div>

        <div className="nav-right desktop-only-call">
          <a href="tel:(254) 998-3484" className="call-now-btn">
            (254) 998-3484
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;