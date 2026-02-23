import React from 'react';

const KilleenPage = () => {
  return (
    <div className="page-wrapper">
      <style>
        {`
          :root {
            --primary-blue: #003366;
            --accent-blue: #0056b3;
            --light-blue: #eef4fb;
            --text-dark: #2d3436;
            --white: #ffffff;
          }

          .page-wrapper {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            color: var(--text-dark);
            line-height: 1.6;
            background-color: #fcfcfc;
          }

          /* --- Hero Section --- */
          .hero {
            background: linear-gradient(135deg, var(--primary-blue) 0%, #001a33 100%);
            color: var(--white);
            padding: 80px 20px;
            text-align: center;
            border-bottom: 8px solid var(--accent-blue);
          }

          .hero-container { max-width: 900px; margin: 0 auto; }
          
          .badge {
            background: rgba(255, 255, 255, 0.2);
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 20px;
            display: inline-block;
          }

          .hero h1 { font-size: clamp(2rem, 5vw, 3.5rem); margin-bottom: 20px; line-height: 1.1; }
          .hero p { font-size: 1.2rem; opacity: 0.9; margin-bottom: 30px; }

          .btn-call {
            background: var(--white);
            color: var(--primary-blue);
            padding: 18px 35px;
            border-radius: 50px;
            font-weight: 800;
            text-decoration: none;
            display: inline-block;
            transition: 0.3s;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          }

          /* --- Intro Section --- */
          .intro { padding: 60px 20px; text-align: center; background: white; }
          .container { max-width: 1100px; margin: 0 auto; }

          /* --- Services Grid --- */
          .services-section { padding: 80px 20px; }
          .grid {
            display: flex;
            flex-direction: column;
            gap: 25px;
          }

          .card {
            background: var(--white);
            border-radius: 12px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            border-top: 5px solid var(--accent-blue);
            transition: 0.3s;
          }

          .card:hover { transform: translateY(-5px); }
          .card h3 { color: var(--primary-blue); font-size: 1.5rem; margin-bottom: 15px; border-bottom: 2px solid var(--light-blue); padding-bottom: 10px; }
          .card ul { padding-left: 20px; margin-top: 15px; }
          .card li { margin-bottom: 8px; font-size: 0.95rem; list-style: square; }

          /* --- FAQ --- */
          .faq { background: var(--light-blue); padding: 80px 20px; border-radius: 40px 40px 0 0; }
          .faq-item { background: white; padding: 20px; border-radius: 10px; margin-bottom: 15px; }
          .faq-item h4 { color: var(--accent-blue); margin-bottom: 10px; }

          /* --- Desktop Responsive --- */
          @media (min-width: 768px) {
            .grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (min-width: 1024px) {
            .grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
        `}
      </style>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-container">
          <span className="badge">Serving Killeen & Fort Cavazos</span>
          <h1>Professional Air Duct Cleaning in Killeen, TX</h1>
          <p>Your trusted experts for HVAC cleaning, duct replacement, and energy-saving attic insulation solutions.</p>
          <a href="tel:YOUR_NUMBER" className="btn-call">📞 Call Now: Get Free Estimate</a>
        </div>
      </header>

      {/* Intro */}
      <section className="intro">
        <div className="container">
          <p style={{fontSize: '1.1rem', color: '#555'}}>
            Killeen ki shadeed garmi aur AC ke lagataar istemal se ducts mein dhool aur allergens jama ho jate hain. 
            Hum <strong>Fort Cavazos</strong> aur <strong>Rancier Avenue</strong> ke ilaqon mein professional safai aur energy efficiency provide karte hain.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 style={{textAlign: 'center', color: 'var(--primary-blue)', marginBottom: '50px', fontSize: '2.5rem'}}>Our Professional Services</h2>
          <div className="grid">
            
            <div className="card">
              <h3>Air Duct Cleaning</h3>
              <p>Full system cleaning for supply and return vents.</p>
              <ul>
                <li>Dust & Pet Dander removal</li>
                <li>Mold spores elimination</li>
                <li>Improved airflow performance</li>
              </ul>
            </div>

            <div className="card" style={{borderColor: '#00cc66'}}>
              <h3>HVAC System Cleaning</h3>
              <p><strong>High-Ticket Service:</strong> Deep cleaning of mechanical components.</p>
              <ul>
                <li>Blower Motor Cleaning</li>
                <li>Evaporator Coil Cleaning</li>
                <li>Air Handler & Return Plenum</li>
              </ul>
            </div>

            <div className="card">
              <h3>Duct Replacement</h3>
              <p>Upgrade old or damaged ductwork for better efficiency.</p>
              <ul>
                <li>New Duct Installation</li>
                <li>Rodent damage repair</li>
                <li>Leakage prevention</li>
              </ul>
            </div>

            <div className="card">
              <h3>Attic Insulation</h3>
              <p>The best way to lower energy bills in Texas summers.</p>
              <ul>
                <li>Blown-in Insulation</li>
                <li>Old Insulation Removal</li>
                <li>Thermal barrier protection</li>
              </ul>
            </div>

            <div className="card">
              <h3>Dryer Vent Cleaning</h3>
              <p>Professional lint removal to prevent house fires.</p>
              <ul>
                <li>Fire hazard prevention</li>
                <li>Faster drying times</li>
                <li>Annual safety maintenance</li>
              </ul>
            </div>

            <div className="card">
              <h3>UV Light Purification</h3>
              <p>Indoor air sanitation using medical-grade UV lights.</p>
              <ul>
                <li>Bacteria neutralization</li>
                <li>Mold growth prevention</li>
                <li>Healthier indoor air quality</li>
              </ul>
            </div>

            <div className="card">
              <h3>Chimney Sweep</h3>
              <p>Fall and winter prep for your fireplace.</p>
              <ul>
                <li>Creosote removal</li>
                <li>Safety inspection</li>
                <li>Smoke draft correction</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <h2 style={{textAlign: 'center', color: 'var(--primary-blue)', marginBottom: '40px'}}>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h4>How do I know if my air ducts need replacement?</h4>
            <p>Agar ducts 15 saal se purani hain, torn hain, ya airflow kam hai to replacement behtar hai.</p>
          </div>
          <div className="faq-item">
            <h4>Does attic insulation lower energy bills?</h4>
            <p>Ji haan! Proper insulation Texas ki garmi mein AC par load kam karti hai jis se bills kam aate hain.</p>
          </div>
          <div className="faq-item">
            <h4>What is the difference between duct and HVAC cleaning?</h4>
            <p>Duct cleaning sirf vents saaf karti hai, jabke HVAC cleaning internal blower aur coils ko bhi saaf karti hai.</p>
          </div>
        </div>
      </section>

      <footer style={{background: 'var(--primary-blue)', color: 'white', padding: '40px 20px', textAlign: 'center'}}>
        <p>© 2026 Killeen Air Duct Cleaners. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default KilleenPage;