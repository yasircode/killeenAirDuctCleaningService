import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';


const Ductservice = () => {
  const { cityName } = useParams();

  // Formatting location for display
  const displayCity = cityName
    ? cityName.split('-').map(word => word.toUpperCase()).join(' ').replace(' TX', ', TX')
    : "Killeen, TX";

  useEffect(() => {
    document.title = `Full HVAC System Cleaning in ${displayCity} | Coil & Unit Sanitization`;
    window.scrollTo(0, 0);
  }, [displayCity]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Comprehensive HVAC System Cleaning in ${displayCity}`,
    "serviceType": "HVAC Maintenance",
    "provider": {
      "@type": "LocalBusiness",
      "name": "JY HVAC Specialists",
      "address": { "@type": "PostalAddress", "addressLocality": displayCity, "addressRegion": "TX" },
      "telephone": "(254) 998-3484"
    }
  };

  return (
    <div style={styles.container}>
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
<br></br>
        <br></br>
      {/* Modern Unit-Focused Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.h1}>Professional HVAC System Cleaning in {displayCity}</h1>
          <p style={styles.subtext}>Maximize your unit's lifespan with deep coil cleaning and blower motor sanitization. 100% efficiency restored.</p>
          <div style={styles.btnGroup}>
            <a href="tel:2549983484" style={styles.ctaButton}>Get a Free Unit Quote</a>
            <Link to="/contact" style={styles.secondaryBtn}>View Special Offers</Link>
          </div>
        </div>
      </section>

      <div style={styles.contentWrapper}>
        
        {/* Section 1: Beyond Just Ducts */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Is Your HVAC Unit Struggling in {displayCity}?</h2>
          <p style={styles.paragraph}>
            Cleaning your ducts is only half the battle. If your evaporator coils and blower motor are covered in grime, your system will still circulate allergens and struggle to cool your home. In <strong>{displayCity}</strong>, high pollen counts and dust can clog your HVAC's internal components, leading to premature mechanical failure. Our specialized HVAC system cleaning goes deep inside your furnace and AC unit to ensure every component runs like new.
          </p>
          <img src="/hvac-unit-cleaning.jpg" alt={`HVAC Coil Cleaning in ${displayCity}`} style={styles.image} />
        </section>

        {/* Section 2: Component-Specific Cleaning */}
        <section style={styles.section}>
          <h2 style={styles.h2}>What’s Included in Our Full System Clean?</h2>
          <p style={styles.paragraph}>
            Unlike standard duct cleaning, our HVAC system overhaul focuses on the "heart" of your home's comfort:
          </p>
          <ul style={styles.list}>
            <li><strong>Evaporator Coil Cleaning:</strong> We remove the sticky biofilm that prevents heat transfer.</li>
            <li><strong>Blower Motor Sanitization:</strong> Removing dust from the fan blades to ensure maximum airflow.</li>
            <li><strong>Drain Pan & Line Treatment:</strong> Preventing algae growth and water damage inside your {displayCity} attic.</li>
            <li><strong>Heat Exchanger Inspection:</strong> Checking for cracks while removing soot and debris.</li>
          </ul>
        </section>

        {/* Section 3: Process Box */}
        <section style={styles.infoBox}>
          <h2 style={styles.h2}>Our HVAC Restoration Protocol</h2>
          <div style={styles.stepGrid}>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Step 1: System Diagnostic</h3>
                <p>We check airflow and temperature drops before starting the cleaning process.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Step 2: Component Access</h3>
                <p>Carefully opening the air handler to reach the coils and blower housing.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Step 3: Precision Cleaning</h3>
                <p>Using specialized self-rinsing foams and high-pressure air to dislodge buildup.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Step 4: Anti-Microbial Seal</h3>
                <p>Applying an EPA-registered coating to prevent future mold growth on damp surfaces.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Efficiency Savings */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Restore 99% Efficiency to Your {displayCity} Unit</h2>
          <p style={styles.paragraph}>
            A dirty HVAC system can consume up to 37% more electricity. In <strong>{displayCity}</strong>, where AC units run almost year-round, that’s a lot of wasted money. By restoring the heat-exchange surfaces of your unit, we help your AC reach the desired temperature faster, reducing runtime and significantly lowering your utility bills.
          </p>
        </section>

        {/* Section 5: Dynamic Area Links */}
        <section style={styles.internalLinks}>
          <h3 style={styles.h3}>HVAC Maintenance Areas Near {displayCity}</h3>
          <div style={styles.linkGrid}>
            <Link style={styles.footerLink} to="/hvac-clean/killeen-tx">Killeen Unit Service</Link>
            <Link style={styles.footerLink} to="/hvac-clean/temple-tx">Temple Unit Service</Link>
            <Link style={styles.footerLink} to="/hvac-clean/belton-tx">Belton Unit Service</Link>
            <Link style={styles.footerLink} to="/hvac-clean/harker-heights-tx">Harker Heights</Link>
            <Link style={styles.footerLink} to="/hvac-clean/georgetown-tx">Georgetown</Link>
            <Link style={styles.footerLink} to="/hvac-clean/waco-tx">Waco Unit Service</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

const styles = {
  container: { backgroundColor: '#f0f4f8', color: '#2c3e50', fontFamily: '"Montserrat", sans-serif' },
  hero: { 
    height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', 
    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)', textAlign: 'center', color: 'white' 
  },
  heroOverlay: { padding: '30px', maxWidth: '1000px' },
  h1: { fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '700', marginBottom: '20px' },
  subtext: { fontSize: '1.3rem', marginBottom: '40px', fontWeight: '300' },
  btnGroup: { display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' },
  ctaButton: { background: '#27ae60', color: 'white', padding: '16px 32px', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold' },
  secondaryBtn: { background: 'white', color: '#1e3c72', padding: '16px 32px', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold' },
  
  contentWrapper: { maxWidth: '1140px', margin: '0 auto', padding: '50px 20px' },
  section: { marginBottom: '70px' },
  h2: { fontSize: '2.2rem', color: '#1e3c72', marginBottom: '20px', position: 'relative' },
  paragraph: { fontSize: '1.1rem', lineHeight: '1.8', color: '#444' },
  image: { width: '100%', borderRadius: '20px', marginTop: '30px', filter: 'brightness(0.9)' },
  
  list: { paddingLeft: '20px', fontSize: '1.1rem', lineHeight: '2.2' },
  infoBox: { background: '#fff', padding: '45px', borderRadius: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', marginBottom: '70px' },
  
  stepGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '25px', marginTop: '35px' },
  stepCard: { padding: '25px', background: '#eef2f7', borderRadius: '12px', borderLeft: '6px solid #27ae60' },
  stepTitle: { color: '#1e3c72', marginBottom: '10px', fontSize: '1.25rem' },
  
  internalLinks: { background: '#1e3c72', color: 'white', padding: '50px', borderRadius: '15px' },
  h3: { textAlign: 'center', marginBottom: '35px', fontSize: '1.8rem' },
  linkGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '15px', textAlign: 'center' },
  footerLink: { color: '#bdc3c7', textDecoration: 'none', fontSize: '1.1rem' }
};

export default Ductservice;