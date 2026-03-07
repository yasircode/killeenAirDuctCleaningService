import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const AtticInsulation= () => {
  const { cityName } = useParams();

  // Dynamic City Formatting
  const displayCity = cityName
    ? cityName.split('-').map(word => word.toUpperCase()).join(' ').replace(' TX', ', TX')
    : "Killeen, TX";

  useEffect(() => {
    document.title = `Attic Insulation Services in ${displayCity} | Energy Saving Solutions`;
    window.scrollTo(0, 0);
  }, [displayCity]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Professional Attic Insulation in ${displayCity}`,
    "serviceType": "Insulation Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "JY Attic Solutions",
      "address": { "@type": "PostalAddress", "addressLocality": displayCity, "addressRegion": "TX" },
      "telephone": "(254) 998-3484"
    }
  };

  return (
    <div style={styles.container}>
      <br></br>
        <br></br>
<br></br>
        <br></br>
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

      {/* Hero Section - Efficiency Focus */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.h1}>Expert Attic Insulation in {displayCity}</h1>
          <p style={styles.subtext}>Stop Your Cool Air From Escaping. High-Performance Insulation Upgrades for Maximum {displayCity} Comfort.</p>
          <div style={styles.btnGroup}>
            <a href="tel:2549983484" style={styles.ctaButton}>Get My Energy Audit</a>
            <Link to="/contact" style={styles.secondaryBtn}>View Pricing</Link>
          </div>
        </div>
      </section>

      <div style={styles.contentWrapper}>
        
        {/* Section 1: The Energy Gap */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Is Your Attic Costing You Money in {displayCity}?</h2>
          <p style={styles.paragraph}>
            In the intense Texas summer, an under-insulated attic can reach temperatures of 150°F. Without a proper thermal barrier, that heat radiates directly into your living space. At JY Attic Solutions, we specialize in high-efficiency <strong>attic insulation in {displayCity}</strong>. Whether you need an "over-blow" of existing material or a complete removal and replacement of old, settled insulation, we ensure your home meets modern R-value standards.
          </p>
          
          <img src="/o8.jpeg" alt={`Blown-in insulation installation in ${displayCity}`} style={styles.image} />
        </section>

        {/* Section 2: Types of Insulation Offered */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Our Insulation & Weatherization Options</h2>
          <p style={styles.paragraph}>
            Every {displayCity} home has different needs. We offer tailored solutions including:
          </p>
          <ul style={styles.list}>
            <li><strong>Blown-in Fiberglass:</strong> High-density coverage that fills every nook and cranny for a seamless seal.</li>
            <li><strong>Cellulose Insulation:</strong> Eco-friendly, fire-treated material with excellent sound-dampening properties.</li>
            <li><strong>Radiant Barriers:</strong> Reflective foil technology that blocks up to 97% of radiant heat from the sun.</li>
            <li><strong>Air Sealing:</strong> Closing gaps around pipes, wires, and top plates to stop expensive air leaks.</li>
            <li><strong>Old Insulation Removal:</strong> Safe extraction of contaminated or water-damaged material.</li>
          </ul>
        </section>

        {/* Section 3: Professional Workflow */}
        <section style={styles.infoBox}>
          <h2 style={styles.h2}>The JY Insulation Installation Process</h2>
          <div style={styles.stepGrid}>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>1. Thermal Scan</h3>
                <p>We use infrared cameras to identify "hot spots" where your {displayCity} home is losing energy.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>2. Prep & Shield</h3>
                <p>Recessed lights and attic hatches are shielded to ensure safe and proper ventilation flow.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>3. Precision Blow</h3>
                <p>Using calibrated machinery to achieve the exact R-value (depth) required for the Texas climate.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>4. Final Audit</h3>
                <p>We provide a certificate of completion showing the square footage and thickness of material added.</p>
            </div>
          </div>
        </section>

        {/* Section 4: ROI & Comfort */}
        <section style={styles.section}>
          <h2 style={styles.h2}>A Wise Investment for {displayCity} Homeowners</h2>
          <p style={styles.paragraph}>
            Attic insulation is one of the few home improvements that actually pays for itself. By stabilizing your home's temperature, you reduce the workload on your HVAC system, leading to lower monthly bills and fewer repairs. Residents of <strong>{displayCity}</strong> often report a 15-25% reduction in cooling costs immediately after an insulation upgrade. Plus, it makes your home much quieter and more comfortable year-round.
          </p>
        </section>

        {/* Section 5: Localized Links */}
        <section style={styles.internalLinks}>
          <h3 style={styles.h3}>Insulation Experts Serving {displayCity} & Beyond</h3>
          <div style={styles.linkGrid}>
            <Link style={styles.footerLink} to="/attic-insulation/killeen-tx">Killeen Upgrades</Link>
            <Link style={styles.footerLink} to="/attic-insulation/temple-tx">Temple Insulation</Link>
            <Link style={styles.footerLink} to="/attic-insulation/belton-tx">Belton Attic Care</Link>
            <Link style={styles.footerLink} to="/attic-insulation/harker-heights-tx">Harker Heights</Link>
            <Link style={styles.footerLink} to="/attic-insulation/georgetown-tx">Georgetown</Link>
            <Link style={styles.footerLink} to="/attic-insulation/waco-tx">Waco Energy Solutions</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

const styles = {
  container: { backgroundColor: '#f4f7f6', color: '#2c3e50', fontFamily: '"Open Sans", sans-serif' },
  hero: { 
    height: '65vh', display: 'flex', alignItems: 'center', justifyContent: 'center', 
    background: 'linear-gradient(rgba(44, 62, 80, 0.7), rgba(44, 62, 80, 0.7)), url("/attic-hero.jpg")', 
    backgroundSize: 'cover', backgroundPosition: 'center', textAlign: 'center', color: 'white' 
  },
  heroOverlay: { padding: '20px', maxWidth: '1000px' },
  h1: { fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '800', marginBottom: '15px' },
  subtext: { fontSize: '1.3rem', marginBottom: '35px', fontWeight: '300', opacity: '0.9' },
  btnGroup: { display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' },
  ctaButton: { background: '#2980b9', color: 'white', padding: '16px 32px', textDecoration: 'none', borderRadius: '30px', fontWeight: 'bold', transition: '0.3s' },
  secondaryBtn: { background: 'white', color: '#2980b9', padding: '16px 32px', textDecoration: 'none', borderRadius: '30px', fontWeight: 'bold' },
  
  contentWrapper: { maxWidth: '1100px', margin: '0 auto', padding: '60px 20px' },
  section: { marginBottom: '80px' },
  h2: { fontSize: '2.3rem', color: '#2980b9', marginBottom: '25px', fontWeight: '700' },
  paragraph: { fontSize: '1.15rem', lineHeight: '1.9', color: '#444' },
  image: { width: '100%', borderRadius: '15px', marginTop: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' },
  
  list: { paddingLeft: '20px', fontSize: '1.1rem', lineHeight: '2.2', color: '#444' },
  infoBox: { background: '#fff', padding: '50px', borderRadius: '20px', borderTop: '8px solid #2980b9', marginBottom: '80px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' },
  
  stepGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '30px', marginTop: '40px' },
  stepCard: { textAlign: 'left', padding: '10px' },
  stepTitle: { color: '#2c3e50', marginBottom: '10px', fontSize: '1.3rem', fontWeight: 'bold' },
  
  internalLinks: { background: '#2c3e50', color: 'white', padding: '60px', borderRadius: '20px' },
  h3: { textAlign: 'center', marginBottom: '40px', fontSize: '1.8rem' },
  linkGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '20px', textAlign: 'center' },
  footerLink: { color: '#3498db', textDecoration: 'none', fontSize: '1.1rem' }
};

export default AtticInsulation;