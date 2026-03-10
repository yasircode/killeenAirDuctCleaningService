import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ServiceAreas from './ServiceAreas';

const DryerVentInstallation = () => {
  const { cityName } = useParams();

  // City name formatting (e.g., killeen-tx -> Killeen, TX)
  const displayCity = cityName
    ? cityName.split('-').map(word => word.toUpperCase()).join(' ').replace(' TX', ', TX')
    : "Killeen, TX";

  useEffect(() => {
    document.title = `Professional Dryer Vent Installation in ${displayCity} | Code Compliant`;
    window.scrollTo(0, 0);
  }, [displayCity]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Professional Dryer Vent Installation in ${displayCity}`,
    "serviceType": "HVAC Duct Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "JY HVAC Solutions",
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

      {/* Hero Section */}
      <section style={styles.hero}>
        <video autoPlay loop muted playsInline style={styles.videoBg}>
          <source src="/dryer-installation-bg.mp4" type="video/mp4" />
          <img src="/dryer-install-banner.jpg" alt="Dryer Vent Installation" />
        </video>
        <div style={styles.heroOverlay}>
          <h1 style={styles.h1}>Code-Compliant Dryer Vent Installation in {displayCity}</h1>
          <p style={styles.subtext}>New Construction or Upgrades. We Install Premium Rigid Metal Venting Systems for Maximum Airflow and Fire Safety.</p>
          <div style={styles.btnGroup}>
            <a href="tel:2549983484" style={styles.ctaButton}>Book Installation</a>
            <Link to="/contact" style={styles.secondaryBtn}>Get Free Estimate</Link>
          </div>
        </div>
      </section>

      <div style={styles.contentWrapper}>
        
        {/* Section 1: Proper Installation Importance */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Why Professional Installation Matters in {displayCity}</h2>
          <p style={styles.paragraph}>
            A poorly installed dryer vent is one of the leading causes of residential fires. In <strong>{displayCity}</strong>, many DIY installations use flexible plastic or foil hoses that sag and trap lint. Our professional <strong>Dryer Vent Installation</strong> service ensures your system uses rigid heavy-gauge aluminum ducting. We follow all IRC (International Residential Code) guidelines, ensuring your vent is the correct length with the fewest possible bends for peak efficiency.
          </p>
          {/* <img src="/dryer-vent-installation-rigid.jpg" alt={`Professional Rigid Metal Dryer Vent Installation in ${displayCity}`} style={styles.image} /> */}
        </section>

        {/* Section 2: Installation Scenarios */}
        <section style={styles.section}>
          <h2 style={styles.h2}>When Do You Need a New Installation?</h2>
          <p style={styles.paragraph}>
            Whether you are remodeling your home or building a new one in {displayCity}, a proper setup is crucial for your appliance's longevity:
          </p>
          <ul style={styles.list}>
            <li><strong>New Home Construction:</strong> Routing vents through walls, attics, or roofs from scratch.</li>
            <li><strong>Laundry Room Relocation:</strong> Rerouting your dryer exhaust to a new exterior wall location.</li>
            <li><strong>Upgrading to Code:</strong> Replacing old, dangerous plastic "slinky" vents with rigid metal.</li>
            <li><strong>Stacked Units:</strong> Installing specialized recessed "Dryerboxes" to save space behind the dryer.</li>
            <li><strong>Exterior Vent Termination:</strong> Installing high-quality, pest-proof wall or roof caps.</li>
          </ul>
        </section>

        {/* Section 3: The Installation Process */}
        <section style={styles.infoBox}>
          <h2 style={styles.h2}>Our 4-Step Installation Standard</h2>
          <div style={styles.stepGrid}>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>1. Route Planning</h3>
                <p>We calculate the shortest, most direct path to the outside to minimize lint buildup and back-pressure.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>2. Rigid Ducting</h3>
                <p>We use 4-inch heavy-duty rigid metal pipes, secured with foil tape—never screws (which trap lint).</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>3. Wall/Roof Entry</h3>
                <p>Precision cutting and sealing of exterior exit points with weather-tight, energy-efficient vent hoods.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>4. Final Flow Test</h3>
                <p>After installation, we test the CFM (airflow) to ensure your dryer will dry clothes in the fastest time possible.</p>
            </div>
          </div>
        </section>

        {/* Section 4: FAQ Section (Specific to Installation) */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Frequently Asked Questions</h2>
          <div style={{marginTop: '30px'}}>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>Can a dryer vent be installed through the roof?</h4>
              <p style={styles.paragraph}>Yes. In many {displayCity} homes, the laundry room is in the center of the house, making roof termination the best option. We use specialized roof caps designed to prevent leaks and blockages.</p>
            </div>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>What is the maximum length for a dryer vent?</h4>
              <p style={styles.paragraph}>According to building codes, the maximum length is generally 35 feet, but each 90-degree turn reduces that limit by 5 feet. Our experts ensure your layout stays within safe limits.</p>
            </div>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>Why shouldn't I use flexible plastic hoses?</h4>
              <p style={styles.paragraph}>Plastic and foil "flex" hoses are highly flammable and their ridges trap lint quickly. Most insurance companies and local {displayCity} codes now require rigid metal venting for fire safety.</p>
            </div>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>Do you provide a warranty on new installations?</h4>
              <p style={styles.paragraph}>Yes, all our dryer vent installations in {displayCity} come with a workmanship guarantee. We ensure every joint is sealed and the system meets local safety standards.</p>
            </div>
          </div>
        </section>

      <ServiceAreas/>
      </div>
    </div>
  );
};

const styles = {
  container: { backgroundColor: '#ffffff', color: '#2d3436', fontFamily: '"Inter", sans-serif' },
  hero: { 
    position: 'relative', height: '65vh', display: 'flex', alignItems: 'center', 
    justifyContent: 'center', overflow: 'hidden', textAlign: 'center', color: 'white' 
  },
  videoBg: { 
    position: 'absolute', top: '50%', left: '50%', minWidth: '100%', minHeight: '100%', 
    width: 'auto', height: 'auto', zIndex: '1', transform: 'translateX(-50%) translateY(-50%)', objectFit: 'cover' 
  },
  heroOverlay: { 
    zIndex: '2', padding: '20px', background: 'rgba(0, 0, 0, 0.7)', width: '100%', height: '100%', 
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' 
  },
  h1: { fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: '900', margin: '0 0 15px', lineHeight: '1.1' },
  subtext: { fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', maxWidth: '850px', opacity: '0.9', marginBottom: '35px' },
  btnGroup: { display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' },
  ctaButton: { background: '#27ae60', color: 'white', padding: '18px 35px', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold', fontSize: '1.2rem', boxShadow: '0 4px 15px rgba(39,174,96,0.3)' },
  secondaryBtn: { background: 'transparent', border: '2px solid white', color: 'white', padding: '16px 35px', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' },
  
  contentWrapper: { maxWidth: '1200px', margin: '0 auto', padding: '60px 25px' },
  section: { marginBottom: '80px' },
  h2: { fontSize: '2.2rem', color: '#2c3e50', marginBottom: '25px', fontWeight: '800' },
  paragraph: { fontSize: '1.15rem', lineHeight: '1.9', color: '#4b5563' },
  image: { width: '100%', borderRadius: '12px', marginTop: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' },
  
  list: { paddingLeft: '25px', fontSize: '1.1rem', lineHeight: '2.2', color: '#4b5563', marginBottom: '30px' },
  infoBox: { background: '#f8fafc', padding: '50px', borderRadius: '16px', marginBottom: '80px', border: '1px solid #e2e8f0' },
  
  stepGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '25px', marginTop: '40px' },
  stepCard: { padding: '30px', background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' },
  stepTitle: { color: '#27ae60', fontSize: '1.4rem', marginBottom: '10px', fontWeight: '700' },

  faqItem: { marginBottom: '30px', borderBottom: '1px solid #eee', paddingBottom: '20px' },
  faqQuestion: { fontSize: '1.3rem', color: '#2c3e50', marginBottom: '10px', fontWeight: '700' },
  
  internalLinks: { background: '#0f172a', color: 'white', padding: '60px', borderRadius: '16px' },
  h3: { textAlign: 'center', marginBottom: '40px', fontSize: '1.8rem' },
  linkGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', textAlign: 'center' },
  footerLink: { color: '#94a3b8', textDecoration: 'none', fontSize: '1.05rem', transition: '0.3s', '&:hover': { color: '#fb923c' } }
};

export default DryerVentInstallation;