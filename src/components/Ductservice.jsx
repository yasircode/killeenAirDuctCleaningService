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
          <h2 style={styles.h2}>Is Your HVAC Unit Struggling in {displayCity} ? | Killeen Air Duct Cleaning</h2>
          <p style={styles.paragraph}>
            Cleaning your ducts is only half the battle. If your evaporator coils and blower motor are covered in grime, your system will still circulate allergens and struggle to cool your home. In <strong>{displayCity}</strong>, high pollen counts and dust can clog your HVAC's internal components, leading to premature mechanical failure. Our specialized HVAC system cleaning goes deep inside your furnace and AC unit to ensure every component runs like new.
          </p>
          {/* Aap yahan apni pehli picture add kar sakte hain */}
          <img src="o6.jpeg" alt={`HVAC System Cleaning in ${displayCity}`} style={styles.image} />
           <img src="yasir1.jpeg" alt={`HVAC System Cleaning in ${displayCity}`} style={styles.image} />
        </section>

        {/* Section 2: Component-Specific Cleaning */}
        <section style={styles.section}>
          <h2 style={styles.h2}>What’s Included in Our Full System Clean?</h2>
          <p style={styles.paragraph}>
            Unlike standard duct cleaning, our HVAC system overhaul focuses on the "heart" of your home's comfort. We ensure that every part of your indoor and outdoor unit is free from obstructions:
          </p>
          <ul style={styles.list}>
            <li><strong>Evaporator Coil Cleaning:</strong> We remove the sticky biofilm and dust that prevents heat transfer, ensuring your AC cools faster.</li>
            <li><strong>Blower Motor Sanitization:</strong> Removing heavy dust from the fan blades to ensure maximum airflow and reduce motor strain.</li>
            <li><strong>Drain Pan & Line Treatment:</strong> We clear the sludge to prevent algae growth and potential water damage inside your {displayCity} home.</li>
            <li><strong>Heat Exchanger & Burner Inspection:</strong> Removing soot and debris to ensure safe and efficient heating during winter.</li>
            <li><strong>Cabinet & Filter Track Sanitization:</strong> Wiping down the internal housing to eliminate mold spores at the source.</li>
          </ul>
        </section>

        {/* Section 3: Process Box */}
        <section style={styles.infoBox}>
          <h2 style={styles.h2}>Our HVAC Restoration Protocol</h2>
          <div style={styles.stepGrid}>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Step 1: System Diagnostic</h3>
                <p>We check airflow and temperature drops across the coils before starting the process.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Step 2: Component Access</h3>
                <p>Carefully opening the air handler and furnace cabinets to reach hidden coils and blowers.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Step 3: Precision Cleaning</h3>
                <p>Using specialized self-rinsing foams and HEPA vacuums to dislodge years of buildup.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Step 4: Anti-Microbial Seal</h3>
                <p>Applying an EPA-registered coating to prevent future mold growth on damp internal surfaces.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Efficiency Savings */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Restore 99% Efficiency to Your {displayCity} Unit</h2>
          <p style={styles.paragraph}>
            A dirty HVAC system can consume up to 37% more electricity. In <strong>{displayCity}</strong>, where AC units run almost year-round, that’s a lot of wasted money. By restoring the heat-exchange surfaces of your unit, we help your AC reach the desired temperature faster, reducing runtime and significantly lowering your utility bills. Regular maintenance also prevents the most common cause of compressor failure: overheating due to restricted airflow.
          </p>
          {/* Aap yahan apni dosri picture add kar sakte hain */}
          <img src="/o5.jpeg" alt={`HVAC Efficiency Service ${displayCity}`} style={styles.image} />
            <img src="/yasir5.jpeg" alt={`HVAC Efficiency Service ${displayCity}`} style={styles.image} />
          
        </section>
      

        {/* Section 5: NEW Detailed FAQ Section */}
        <section style={styles.faqSection}>
          <h2 style={styles.h2}>Frequently Asked Questions</h2>
          <div style={styles.faqContainer}>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>How often should I have my HVAC unit cleaned in {displayCity}?</h4>
              <p style={styles.faqAnswer}>For most homes in Texas, a deep system cleaning is recommended every 2 to 3 years. However, if you have pets, allergies, or a high-traffic household, an annual inspection is better to maintain peak air quality.</p>
            </div>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>Will cleaning the unit improve my air quality?</h4>
              <p style={styles.faqAnswer}>Absolutely. The blower motor and coils are often the primary breeding grounds for mold and bacteria. Sanitizing these components ensures that the air being pushed into your ducts is clean from the start.</p>
            </div>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>Can a dirty HVAC unit cause my AC to freeze up?</h4>
              <p style={styles.faqAnswer}>Yes. When coils are covered in dust, they cannot absorb heat properly. This causes the refrigerant to get too cold, leading to ice buildup (freezing) and eventually shutting down your entire system.</p>
            </div>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>How long does the full system cleaning take?</h4>
              <p style={styles.faqAnswer}>A comprehensive HVAC unit and coil cleaning typically takes between 1.5 to 3 hours, depending on the access and the level of buildup inside the unit.</p>
            </div>
          </div>
        </section>
        

        {/* Section 6: Dynamic Area Links */}
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
  container: { 
    backgroundColor: '#f0f4f8', 
    color: '#2c3e50', 
    fontFamily: '"Montserrat", sans-serif',
    paddingTop: '70px' 
  },
  hero: { 
    minHeight: '60vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)', 
    textAlign: 'center', 
    color: 'white',
    padding: '60px 20px' 
  },
  heroOverlay: { padding: '20px', maxWidth: '1000px' },
  h1: { fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', fontWeight: '700', marginBottom: '20px', lineHeight: '1.2' },
  subtext: { fontSize: 'clamp(1rem, 3vw, 1.3rem)', marginBottom: '30px', fontWeight: '300' },
  btnGroup: { display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' },
  ctaButton: { background: '#27ae60', color: 'white', padding: '14px 28px', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '0.95rem' },
  secondaryBtn: { background: 'white', color: '#1e3c72', padding: '14px 28px', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '0.95rem' },
  
  contentWrapper: { maxWidth: '1140px', margin: '0 auto', padding: '40px 20px' },
  section: { marginBottom: '50px' },
  h2: { fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', color: '#1e3c72', marginBottom: '20px', fontWeight: '700' },
  paragraph: { fontSize: '1.05rem', lineHeight: '1.7', color: '#444' },
  image: { width: '100%', borderRadius: '15px', marginTop: '20px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' },
  
  list: { paddingLeft: '20px', fontSize: '1.05rem', lineHeight: '2' },
  infoBox: { background: '#fff', padding: '30px', borderRadius: '15px', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', marginBottom: '50px' },
  
  stepGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginTop: '30px' },
  stepCard: { padding: '20px', background: '#eef2f7', borderRadius: '12px', borderLeft: '5px solid #27ae60' },
  stepTitle: { color: '#1e3c72', marginBottom: '8px', fontSize: '1.2rem', fontWeight: '600' },

  // FAQ Styles
  faqSection: { marginBottom: '50px', background: '#ffffff', padding: '40px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' },
  faqContainer: { marginTop: '20px' },
  faqItem: { marginBottom: '25px', borderBottom: '1px solid #eef2f7', paddingBottom: '15px' },
  faqQuestion: { fontSize: '1.15rem', color: '#1e3c72', fontWeight: '600', marginBottom: '10px' },
  faqAnswer: { fontSize: '1rem', color: '#555', lineHeight: '1.6' },
  
  internalLinks: { background: '#1e3c72', color: 'white', padding: '40px 20px', borderRadius: '15px' },
  h3: { textAlign: 'center', marginBottom: '30px', fontSize: '1.6rem' },
  linkGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', textAlign: 'center' },
  footerLink: { color: '#bdc3c7', textDecoration: 'none', fontSize: '1rem', transition: '0.3s' }
};

export default Ductservice;