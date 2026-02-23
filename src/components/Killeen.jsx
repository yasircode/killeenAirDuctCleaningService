import React from 'react';

const Killeen = () => {
  return (
    <div className="killeen-page-container">
      <style>
        {`
          .killeen-page-container {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #333;
            line-height: 1.5;
            background-color: #fff;
            overflow-x: hidden; /* Prevent horizontal scroll on mobile */
          }

          .container {
            max-width: 1140px;
            margin: 0 auto;
            padding: 0 15px; /* Slightly tighter for mobile */
          }

          /* --- Hero Section --- */
          .hero-section {
            padding: 40px 0; /* Reduced padding for mobile */
            text-align: center;
            background: linear-gradient(to bottom, #fcfcfc, #fff);
          }

          .hero-content { 
            max-width: 100%; 
          }
          
          .badge {
            background: #e11d24;
            color: white;
            padding: 4px 10px;
            font-size: 12px;
            font-weight: bold;
            border-radius: 4px;
            text-transform: uppercase;
            display: inline-block;
          }

          .hero-content h1 {
            font-size: 28px; /* Optimized for mobile screens */
            margin: 15px 0;
            color: #1a1a1a;
            line-height: 1.2;
          }

          .hero-content .subtext {
            font-size: 18px;
            color: #e11d24;
            font-weight: 600;
            margin-bottom: 15px;
            display: block;
          }

          .hero-features {
            display: flex;
            flex-direction: column; /* Stack vertically on small screens */
            gap: 10px;
            margin-top: 20px;
            font-weight: 600;
            font-size: 14px;
            align-items: center;
          }

          /* --- Services Grid --- */
          .services-section {
            padding: 50px 0;
            background-color: #f9f9f9;
          }

          .section-title {
            text-align: center;
            font-size: 26px;
            margin-bottom: 30px;
            color: #111;
          }

          .services-grid {
            display: grid;
            grid-template-columns: 1fr; /* Default to 1 column for mobile */
            gap: 20px;
          }

          .service-box {
            background: white;
            padding: 25px;
            border-radius: 12px;
            border-top: 4px solid #e11d24;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          }

          .service-box h3 {
            font-size: 20px;
            margin-bottom: 12px;
            color: #111;
          }

          .service-box ul {
            padding-left: 18px;
            margin-top: 10px;
            font-size: 14px;
          }

          /* --- CTA Banner --- */
          .cta-section { margin: 40px 0; }

          .cta-banner {
            background: #1a1a1a;
            color: white;
            padding: 30px 20px;
            border-radius: 15px;
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .cta-text h2 { font-size: 24px; margin-bottom: 8px; }
          .cta-text p { font-size: 14px; opacity: 0.9; }
          
          .cta-button {
            background: #e11d24;
            color: white;
            padding: 16px 30px;
            font-size: 18px;
            font-weight: bold;
            text-decoration: none;
            border-radius: 8px;
            display: inline-block;
          }

          /* --- FAQ Section --- */
          .faq-section { padding: 40px 0; }

          .faq-item {
            margin-bottom: 25px;
            border-bottom: 1px solid #eee;
            padding-bottom: 15px;
          }

          .faq-item h4 {
            font-size: 17px;
            color: #e11d24;
            margin-bottom: 8px;
            line-height: 1.4;
          }
          
          .faq-item p { font-size: 14px; }

          /* --- Desktop Optimization --- */
          @media (min-width: 768px) {
            .hero-content h1 { font-size: 45px; }
            .hero-features { flex-direction: row; justify-content: center; font-size: 16px; }
            .services-grid { grid-template-columns: repeat(2, 1fr); }
            .cta-banner { flex-direction: row; text-align: left; padding: 50px; justify-content: space-between; }
            .section-title { font-size: 36px; }
          }
          
          @media (min-width: 1024px) {
            .services-grid { grid-template-columns: repeat(3, 1fr); }
          }
        `}
      </style>

      {/* --- HERO --- */}
      <div className="container">
        <section className="hero-section">
          <div className="hero-content">
            <span className="badge">Killeen's Best Service</span>
            <h1>Air Duct Cleaning in Killeen, TX | Killeen Air Duct Cleaners</h1>
            <span className="subtext">Pure Air For Fort Cavazos & Surrounding Areas</span>
            <p style={{ fontSize: '15px' }}>
              We provide professional air duct cleaning, HVAC maintenance, and energy-saving solutions across Killeen. 
              Improve your indoor air quality and lower your monthly bills today.
            </p>
            <div className="hero-features">
              <div>✓ Certified Pros</div>
              <div>✓ Locally Owned</div>
              <div>✓ HEPA Filtration</div>
            </div>
          </div>
        </section>
      </div>

      {/* --- SERVICES --- */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Professional Services</h2>
          <div className="services-grid">
            <div className="service-box">
              <h3>Air Duct Cleaning</h3>
              <p>Eliminate dust, pet dander, and mold for maximum airflow in Killeen’s dry conditions.</p>
              <ul>
                <li>Complete supply & return cleaning</li>
                <li>High-powered vacuum extraction</li>
                <li>Full airflow inspection</li>
              </ul>
            </div>

            <div className="service-box">
              <h3>HVAC System Cleaning</h3>
              <p>Clean internal components like blower motors and coils to prevent system strain.</p>
              <ul>
                <li>Blower motor & Coil cleaning</li>
                <li>Air handler cleaning</li>
                <li>Increased energy efficiency</li>
              </ul>
            </div>

            <div className="service-box">
              <h3>Dryer Vent Cleaning</h3>
              <p>Reduce fire risks and drying times with our deep-cleaning vent service.</p>
              <ul>
                <li>Lint buildup removal</li>
                <li>Fire hazard prevention</li>
                <li>Lower energy costs</li>
              </ul>
            </div>

            <div className="service-box">
              <h3>Attic Insulation</h3>
              <p>Keep your home cool during brutal Texas summers with modern insulation upgrades.</p>
              <ul>
                <li>Blown-in insulation</li>
                <li>Energy efficiency boost</li>
                <li>Reduced HVAC strain</li>
              </ul>
            </div>

            <div className="service-box">
              <h3>Duct Replacement</h3>
              <p>Replace old, leaky, or rodent-damaged ductwork to improve your home's air quality.</p>
              <ul>
                <li>New duct installation</li>
                <li>Mold & damage repair</li>
                <li>Properly sized systems</li>
              </ul>
            </div>

            <div className="service-box">
              <h3>Chimney Sweep</h3>
              <p>Safety-first chimney cleaning and inspection before the cold months arrive.</p>
              <ul>
                <li>Creosote removal</li>
                <li>Full safety assessment</li>
                <li>Draft correction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <div className="container">
        <section className="cta-section">
          <div className="cta-banner">
            <div className="cta-text">
              <h2>Ready for Cleaner Air?</h2>
              <p>Contact Killeen Air Duct Cleaners for a free estimate.</p>
            </div>
            <a href="tel:YOUR_NUMBER" className="cta-button">📞 Call (Insert Number)</a>
          </div>
        </section>
      </div>

      {/* --- FAQ --- */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">FAQs</h2>
          <div className="faq-container">
            <div className="faq-item">
              <h4>How often should ducts be cleaned?</h4>
              <p>In Killeen, we recommend cleaning every 2–3 years due to high dust levels.</p>
            </div>
            <div className="faq-item">
              <h4>Does insulation lower bills?</h4>
              <p>Yes. Proper attic insulation can significantly reduce cooling costs in Central Texas.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Killeen;