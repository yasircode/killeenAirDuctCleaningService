import React, { useState } from "react";
import ImageComparison from "./ImageComparison";
import Benefits from "../Benefits";
import AirDuctnew from "./AirDuctnew";

const AirDuctCleaning = () => {
  // State for expanding details in cards
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="residential-page">
      {/* HERO SECTION - SEO Optimized */}
      <section className="hero">
        <div className="overlay">
          <h1>
            TOP-RATED RESIDENTIAL AIR DUCT CLEANING IN KILLEEN, TX & SURROUNDING AREAS
          </h1>
          <p className="breadcrumb">
            Home » Residential Air Duct Cleaning Killeen
          </p>
          <a href="tel:2459983484" className="call-btn">
            BOOK AN APPOINTMENT: (245) 998-3484
          </a>
        </div>
      </section>

    

      {/* CORE SERVICES SECTION - CARDS (Cleaning, Repair, Replacement) */}
      <section className="services-grid-section">
        <div className="container-grid">
          <h2 className="section-main-title">Our Professional Ductwork Solutions</h2>
          <div className="services-grid">
            
            {/* CARD 1: AIR DUCT CLEANING */}
            <div className={`service-card ${expanded === 'cleaning' ? 'active' : ''}`}>
              <div className="card-icon">🌬️</div>
              <h3>Air Duct Cleaning</h3>
              <p>Professional vent cleaning to remove dust, pet dander, and mold spores from your home.</p>
              {expanded === 'cleaning' && (
                <div className="expanded-content">
                  <p>Our <strong>duct cleaning Temple TX</strong> and Killeen services include:</p>
                  <ul>
                    <li>Supply and Return vent cleaning</li>
                    <li>Anti-microbial fogging/sanitization</li>
                    <li>HEPA-filtered extraction</li>
                    <li>Video inspection of ductwork</li>
                  </ul>
                  <p><strong>Benefit:</strong> Reduces allergy symptoms and lowers energy bills by improving airflow.</p>
                </div>
              )}
              <button onClick={() => toggleExpand('cleaning')} className="read-more">
                {expanded === 'cleaning' ? 'Show Less' : 'Learn More'}
              </button>
            </div>


            

            {/* CARD 2: AIR DUCT REPAIR */}
            <div className={`service-card ${expanded === 'repair' ? 'active' : ''}`}>
              <div className="card-icon">🛠️</div>
              <h3>Air Duct Repair</h3>
              <p>Leaky ducts can waste 30% of your energy. We seal and fix damaged ductwork fast.</p>
              {expanded === 'repair' && (
                <div className="expanded-content">
                  <p>Common signs you need <strong>air duct repair in Killeen</strong>:</p>
                  <ul>
                    <li>Hot and cold spots in different rooms</li>
                    <li>Unusually high electricity bills</li>
                    <li>Visible holes or loose connections</li>
                    <li>Whistling noises from the vents</li>
                  </ul>
                  <p>We use high-grade mastic sealants and R-8 insulation to ensure your air stays inside the pipes.</p>
                </div>
              )}
              <button onClick={() => toggleExpand('repair')} className="read-more">
                {expanded === 'repair' ? 'Show Less' : 'Learn More'}
              </button>
            </div>

            {/* CARD 3: AIR DUCT REPLACEMENT */}
            <div className={`service-card ${expanded === 'replacement' ? 'active' : ''}`}>
              <div className="card-icon">🔄</div>
              <h3>Air Duct Replacement</h3>
              <p>For old, collapsed, or rodent-damaged ducts, a full replacement is the best long-term solution.</p>
              {expanded === 'replacement' && (
                <div className="expanded-content">
                  <p>Our <strong>duct replacement Killeen TX</strong> service is ideal for:</p>
                  <ul>
                    <li>Ducts older than 15-20 years</li>
                    <li>Severe rodent or pest infestations</li>
                    <li>Major mold contamination within flex ducts</li>
                    <li>Upgrading to high-efficiency insulated ducts</li>
                  </ul>
                  <p>We install modern, antimicrobial, and highly insulated ductwork for maximum performance.</p>
                </div>
              )}
              <button onClick={() => toggleExpand('replacement')} className="read-more">
                {expanded === 'replacement' ? 'Show Less' : 'Learn More'}
              </button>
            </div>

          </div>
        </div>
      </section>
<AirDuctnew/>
        {/* INTRO CONTENT SECTION */}
      <section className="content-section">
        <div className="container">
          <div className="text">
            <h2>Breathe Fresh Air in Your Killeen Home</h2>
            <p>
              Air quality is not only about the air outside; it matters what
              you’re breathing in your home too. At <strong>Killeen Air Duct Cleaning</strong>,
              we specialize in Residential Air Duct Cleaning for homeowners across 
              <strong> Killeen, Harker Heights, and Copperas Cove</strong>. 
            </p>
            <p>
              Using <strong>negative pressure technology</strong> and <strong>HEPA-filtered vacuums</strong>, 
              we remove dust, allergens, and contaminants from your HVAC system, serving the entire <strong>Bell County</strong> region.
            </p>
          </div>
          <div className="image">
            <img src="profile1.jpeg" alt="Professional Residential Air Duct Cleaning in Killeen TX" />
          </div>
        </div>
      </section>

      {/* SANITATION & SERVICE AREAS */}
      <section className="sanitation-info-section">
        <div className="info-container">
          <div className="info-card">
            <div className="card-header">
              <h2>HVAC Sanitation Services in Central Texas</h2>
            </div>
            <div className="card-body">
              <p>
                A well-functioning HVAC system is the backbone of a comfortable home. With 
                <strong> Killeen Air Duct Cleaning’s </strong> comprehensive HVAC sanitation, 
                we improve efficiency and extend system lifespan.
              </p>
              <p className="highlight-text">
                Serving <strong>Fort Cavazos (Fort Hood)</strong> and surrounding communities.
              </p>
            </div>
          </div>

          <div className="info-card">
            <div className="card-header">
              <h2>Killeen's #1 Residential Experts</h2>
            </div>
            <div className="card-body">
              <ul className="service-list">
                <li>Killeen & Fort Cavazos</li>
                <li>Harker Heights & Nolanville</li>
                <li>Copperas Cove & Kempner</li>
                <li>Temple & Belton, TX</li>
                <li>Salado & Morgan's Point</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
<ImageComparison/>
<Benefits/>
      <style>{`
        /* GLOBAL & RESET */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .residential-page { font-family: 'Segoe UI', sans-serif; background: #ffffff; color: #333; }

        /* HERO SECTION */
        .hero { 
          background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("033.jpeg") center/cover;
          min-height: 500px; display: flex; align-items: center; justify-content: center; text-align: center;
        }
        .overlay h1 { font-size: clamp(24px, 5vw, 42px); color: white; padding: 0 20px; font-weight: 800; }
        .call-btn { 
          margin-top: 25px; background: #c62828; color: white; padding: 15px 30px; 
          text-decoration: none; font-weight: bold; border-radius: 5px; transition: 0.3s;
        }
        .call-btn:hover { background: #a51d1d; transform: scale(1.05); }

        /* CONTENT SECTION */
        .container { max-width: 1200px; margin: auto; display: flex; flex-wrap: wrap; gap: 40px; padding: 60px 20px; align-items: center; }
        .text { flex: 1; min-width: 300px; }
        .text h2 { color: #0e1b4d; font-size: 32px; margin-bottom: 20px; }
        .image { flex: 1; min-width: 300px; }
        .image img { width: 100%; border-radius: 15px; box-shadow: 0 10px 20px rgba(0,0,0,0.1); }

        /* SERVICES GRID (3 CARDS) */
        .services-grid-section { background: #f9f9f9; padding: 80px 20px; }
        .container-grid { max-width: 1200px; margin: auto; }
        .section-main-title { text-align: center; color: #0e1b4d; font-size: 36px; margin-bottom: 50px; }
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; }
        
        .service-card { 
          background: white; padding: 30px; border-radius: 15px; text-align: center;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05); border-top: 5px solid #c62828;
          transition: 0.3s ease;
        }
        .service-card.active { border-top: 5px solid #0e1b4d; }
        .card-icon { font-size: 40px; margin-bottom: 15px; }
        .service-card h3 { color: #0e1b4d; margin-bottom: 15px; font-size: 24px; }
        .expanded-content { margin-top: 20px; text-align: left; background: #fdfdfd; padding: 15px; border-radius: 8px; font-size: 15px; border-left: 3px solid #c62828;}
        .expanded-content ul { margin-left: 20px; margin-top: 10px; }
        
        .read-more { 
          margin-top: 20px; background: none; border: 2px solid #0e1b4d; color: #0e1b4d; 
          padding: 8px 20px; border-radius: 5px; cursor: pointer; font-weight: bold; transition: 0.3s;
        }
        .read-more:hover { background: #0e1b4d; color: white; }

        /* INFO SECTION */
        .info-container { max-width: 1200px; margin: auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; padding: 60px 20px; }
        .info-card { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.08); }
        .card-header { background: #0e1b4d; color: white; padding: 20px; text-align: center; }
        .card-body { padding: 30px; line-height: 1.7; }
        .service-list { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-weight: bold; color: #0e1b4d;}

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .service-list { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default AirDuctCleaning;