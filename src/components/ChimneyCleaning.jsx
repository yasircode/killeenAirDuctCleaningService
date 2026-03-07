import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ChimneyCleaning = () => {
  const { cityName } = useParams();

  // Formatting location for display
  const displayCity = cityName
    ? cityName.split('-').map(word => word.toUpperCase()).join(' ').replace(' TX', ', TX')
    : "Killeen, TX";

  useEffect(() => {
    document.title = `Dryer Vent & Chimney Cleaning in ${displayCity} | Fire Prevention`;
    window.scrollTo(0, 0);
  }, [displayCity]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Dryer Vent & Chimney Sweeping in ${displayCity}`,
    "serviceType": "Fire Safety Cleaning",
    "provider": {
      "@type": "LocalBusiness",
      "name": "JY Safety Clean",
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

      {/* Hero Section - Focused on Safety */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.h1}>Dryer Vent & Chimney Cleaning in {displayCity}</h1>
          <p style={styles.subtext}>Protecting Your {displayCity} Home from Fire Hazards. Expert Lint & Creosote Removal Services.</p>
          <div style={styles.btnGroup}>
            <a href="tel:2549983484" style={styles.ctaButton}>Book Safety Inspection</a>
            <Link to="/contact" style={styles.secondaryBtn}>Get Instant Quote</Link>
          </div>
        </div>
      </section>

      <div style={styles.contentWrapper}>
        
        {/* Section 1: The Danger of Neglect */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Prevent House Fires in {displayCity}</h2>
          <p style={styles.paragraph}>
            Did you know that dirty dryer vents and soot-filled chimneys are leading causes of household fires in <strong>{displayCity}</strong>? Over time, dryer vents become choked with highly flammable lint, while chimneys accumulate creosote—a tar-like substance that can ignite easily. Our specialized cleaning service doesn't just improve efficiency; it provides peace of mind for you and your family.
          </p>
          <img src="/vent-safety.jpg" alt={`Dryer Vent and Chimney Sweep in ${displayCity}`} style={styles.image} />
        </section>

        {/* Section 2: Signs of Clogging */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Warning Signs You Need Cleaning</h2>
          <p style={styles.paragraph}>
            If you notice any of these red flags in your {displayCity} residence, call us immediately:
          </p>
          <ul style={styles.list}>
            <li><strong>Long Drying Cycles:</strong> Clothes taking more than one cycle to dry completely.</li>
            <li><strong>Burning Smell:</strong> A clear sign that lint or dust is overheating inside the system.</li>
            <li><strong>Excessive Heat:</strong> The dryer or laundry room feels unusually hot during operation.</li>
            <li><strong>Chimney Odors:</strong> A "camp-fire" smell coming from your fireplace even when not in use.</li>
            <li><strong>Visible Debris:</strong> Lint appearing around the outside vent opening.</li>
          </ul>
        </section>

        {/* Section 3: Specialized Process */}
        <section style={styles.infoBox}>
          <h2 style={styles.h2}>Our High-Power Cleaning Methodology</h2>
          <div style={styles.stepGrid}>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Video Inspection</h3>
                <p>We use flexible cameras to locate blockages and structural cracks deep inside vents and flues.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Rotary Brushing</h3>
                <p>Industrial-grade spinning brushes dislodge stubborn lint and hardened creosote buildup.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>HEPA Extraction</h3>
                <p>High-suction vacuums capture all debris, ensuring no dust enters your {displayCity} home.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Flow Testing</h3>
                <p>We measure the backpressure and airflow to verify the system is 100% clear and safe.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Efficiency & Performance */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Save Time and Money on Utilities</h2>
          <p style={styles.paragraph}>
            A clogged dryer vent forces your appliance to run longer, which can double your energy consumption per load and wear out the dryer's heating element. Similarly, a clean chimney improves draft, making your fireplace more efficient. Residents of <strong>{displayCity}</strong> can save hundreds of dollars in repair costs and energy bills by simply scheduling an annual professional cleaning.
          </p>
        </section>

        {/* Section 5: Dynamic Geo-Links */}
        <section style={styles.internalLinks}>
          <h3 style={styles.h3}>Local Safety Services Around {displayCity}</h3>
          <div style={styles.linkGrid}>
            <Link style={styles.footerLink} to="/dryer-vent/killeen-tx">Killeen Safety Clean</Link>
            <Link style={styles.footerLink} to="/dryer-vent/temple-tx">Temple Vent Cleaning</Link>
            <Link style={styles.footerLink} to="/dryer-vent/belton-tx">Belton Chimney Sweep</Link>
            <Link style={styles.footerLink} to="/dryer-vent/harker-heights-tx">Harker Heights</Link>
            <Link style={styles.footerLink} to="/dryer-vent/copperas-cove-tx">Copperas Cove</Link>
            <Link style={styles.footerLink} to="/dryer-vent/waco-tx">Waco Vent Service</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

const styles = {
  container: { backgroundColor: '#fffaf5', color: '#3e2723', fontFamily: '"Segoe UI", sans-serif' },
  hero: { 
    height: '65vh', display: 'flex', alignItems: 'center', justifyContent: 'center', 
    background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/chimney-hero.jpg")', 
    backgroundSize: 'cover', backgroundPosition: 'center', textAlign: 'center', color: 'white' 
  },
  heroOverlay: { padding: '20px', maxWidth: '900px' },
  h1: { fontSize: 'clamp(1.8rem, 5vw, 3.2rem)', fontWeight: '800', marginBottom: '20px', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' },
  subtext: { fontSize: '1.2rem', marginBottom: '35px', fontWeight: '400' },
  btnGroup: { display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' },
  ctaButton: { background: '#d32f2f', color: 'white', padding: '16px 32px', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold', fontSize: '1.1rem' },
  secondaryBtn: { background: 'white', color: '#d32f2f', padding: '16px 32px', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' },
  
  contentWrapper: { maxWidth: '1100px', margin: '0 auto', padding: '60px 20px' },
  section: { marginBottom: '70px' },
  h2: { fontSize: '2.1rem', color: '#d32f2f', marginBottom: '20px', borderBottom: '2px solid #ffc107', display: 'inline-block', paddingBottom: '5px' },
  paragraph: { fontSize: '1.15rem', lineHeight: '1.8', color: '#4e342e' },
  image: { width: '100%', borderRadius: '12px', marginTop: '30px', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' },
  
  list: { paddingLeft: '20px', fontSize: '1.1rem', lineHeight: '2.2', marginTop: '15px' },
  infoBox: { background: '#ffffff', padding: '45px', borderRadius: '15px', border: '1px solid #ffe0b2', marginBottom: '70px' },
  
  stepGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginTop: '30px' },
  stepCard: { padding: '25px', background: '#fff3e0', borderRadius: '8px', textAlign: 'left' },
  stepTitle: { color: '#e65100', marginBottom: '10px', fontSize: '1.3rem', fontWeight: 'bold' },
  
  internalLinks: { background: '#263238', color: 'white', padding: '50px', borderRadius: '15px' },
  h3: { textAlign: 'center', marginBottom: '35px', fontSize: '1.8rem' },
  linkGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '15px', textAlign: 'center' },
  footerLink: { color: '#ffc107', textDecoration: 'none', fontSize: '1.1rem' }
};

export default ChimneyCleaning;