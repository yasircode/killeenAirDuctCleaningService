import React from "react";
import Banner from "./Banner";
import DuctLandingPage from "../DuctLandingPage";
import Any from "./Any";

const AirDuctCleaning = () => {
  return (
    <div className="residential-page">
      {/* HERO SECTION - SEO Optimized Title */}
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

      {/* CONTENT SECTION */}
      <section className="content-section">
        <div className="container">
          <div className="text">
            <h2>Breathe Fresh Air in Your Killeen Home</h2>
            <p>
              Air quality is not only about the air outside; it matters what
              you’re breathing in your home too. At <strong>Killeen Air Duct Cleaning</strong>,
              we specialize in Residential Air Duct Cleaning for homeowners across 
              <strong> Killeen, Harker Heights, and Copperas Cove</strong>. 
              We ensure you and your loved ones enjoy a cleaner, healthier indoor environment.
            </p>
            <p>
              We leverage state-of-the-art equipment, advanced techniques,
              and skilled professionals to remove dust, allergens, and
              contaminants from your air duct system, serving the entire <strong>Bell County</strong> region.
            </p>
          </div>
          <div className="image">
            <img src="profile1.jpeg" alt="Professional Residential Air Duct Cleaning in Killeen TX" />
          </div>
        </div>
      </section>

   
      {/* NEW UPDATED CONTENT SECTION */}
      <section className="sanitation-info-section">
        <div className="info-container">
          
          {/* Box 1: HVAC Sanitation */}
          <div className="info-card">
            <div className="card-header">
              <h2>HVAC Sanitation Services in Central Texas</h2>
            </div>
            <div className="card-body">
              <p>
                A well-functioning HVAC system is the backbone of a comfortable home environment. With 
                <strong> Killeen Air Duct Cleaning’s </strong> comprehensive HVAC sanitation services, 
                <strong> we aim to improve your system’s efficiency, extend its lifespan, and save you from unexpected repair costs.</strong>
              </p>
              <p>
                Our experts utilize the latest sanitation techniques, removing dirt, grime, and any potential blockages. 
                This preventive care helps to maintain <strong>consistent temperatures and optimum air quality</strong> in your 
                <strong> Belton or Temple, TX</strong> home. 
                Don’t let a poorly maintained HVAC system compromise your comfort or health.
              </p>
              <p className="highlight-text">
                Serving <strong>Fort Cavazos (Fort Hood)</strong> and surrounding communities, 
                reach out to <span className="red-text">Killeen Air Duct Cleaning</span> for top-notch HVAC sanitation services.
              </p>
            </div>
          </div>

          {/* Box 2: Best Service */}
          <div className="info-card">
            <div className="card-header">
              <h2>Killeen's #1 Residential Duct Cleaning Experts</h2>
            </div>
            <div className="card-body">
              <p>
                We’re proud to offer our <strong>top-rated Residential Air Duct Cleaning</strong> services to the beautiful city of 
                <strong> Killeen, Texas</strong> and neighboring areas like <strong>Nolanville and Salado</strong>.
              </p>
              <p>
                Our technicians are skilled, reliable, and local to the <strong>Killeen, Fort Cavazos, and Harker Heights area</strong>, 
                ensuring you receive personalized, prompt, and efficient service every time.
              </p>
              <h3 className="list-title">Our Service Areas Include:</h3>
              <ul className="service-list">
                <li>Killeen & Fort Cavazos (Fort Hood)</li>
                <li>Harker Heights & Nolanville</li>
                <li>Copperas Cove & Kempner</li>
                <li>Temple & Belton, TX</li>
                <li>Salado & Morgan's Point Resort</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

   

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .residential-page {
          font-family: 'Segoe UI', Roboto, Arial, sans-serif;
          overflow-x: hidden;
          background: #ffffff;
        }

        /* HERO SECTION */
        .hero {
          background-image: url("033.jpeg");
          background-size: cover;
          background-position: center;
          min-height: 550px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .overlay {
          background: rgba(0, 0, 0, 0.6);
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 40px 20px;
          color: white;
        }

        .overlay h1 {
          font-size: 42px;
          font-weight: 800;
          max-width: 1000px;
          line-height: 1.2;
          text-transform: uppercase;
        }

        .breadcrumb {
          margin-top: 20px;
          font-size: 18px;
          color: #f1f1f1;
        }

        .call-btn {
          margin-top: 35px;
          background-color: #c62828;
          color: white;
          padding: 18px 45px;
          text-decoration: none;
          font-size: 20px;
          font-weight: bold;
          border-radius: 5px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          transition: 0.3s;
          display: inline-block;
        }

        .call-btn:hover { 
          background-color: #a51d1d;
          transform: translateY(-2px);
        }

        /* CONTENT SECTION */
        .content-section {
          padding: 80px 20px;
          background: #fdfdfd;
        }

        .container {
          max-width: 1200px;
          margin: auto;
          display: flex;
          align-items: center;
          gap: 60px;
        }

        .text { flex: 1.2; font-size: 18px; line-height: 1.8; color: #333; }
        .text h2 { color: #0e1b4d; margin-bottom: 20px; font-size: 32px; }
        .text p { margin-bottom: 20px; }
        .image { flex: 1; }
        .image img { width: 100%; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); }

        /* SANITATION SECTION */
        .sanitation-info-section {
          padding: 80px 20px;
          background: #f4f7fa;
        }

        .info-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .info-card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0,0,0,0.06);
          display: flex;
          flex-direction: column;
        }

        .card-header {
          background-color: #0e1b4d;
          padding: 25px;
          text-align: center;
        }

        .card-header h2 {
          color: white;
          font-size: 24px;
          font-weight: 700;
        }

        .card-body {
          padding: 40px;
          font-size: 17px;
          line-height: 1.8;
          color: #444;
          flex-grow: 1;
        }

        .highlight-text { margin-top: 25px; border-top: 1px solid #eee; padding-top: 20px; }
        .red-text { color: #c62828; font-weight: bold; }
        
        .list-title {
          font-size: 20px;
          font-weight: 700;
          color: #0e1b4d;
          margin: 25px 0 15px 0;
        }

        .service-list {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .service-list li {
          position: relative;
          padding-left: 25px;
          font-weight: 600;
          font-size: 15px;
        }

        .service-list li::before {
          content: "✓";
          color: #c62828;
          font-weight: bold;
          position: absolute;
          left: 0;
        }

        /* MOBILE RESPONSIVE */
        @media (max-width: 992px) {
          .overlay h1 { font-size: 32px; }
          .container { flex-direction: column; text-align: center; }
          .info-container { grid-template-columns: 1fr; }
        }

        @media (max-width: 576px) {
          .overlay h1 { font-size: 26px; }
          .service-list { grid-template-columns: 1fr; }
          .card-body { padding: 25px; }
        }
      `}</style>
    </div>
  );
};

export default AirDuctCleaning;