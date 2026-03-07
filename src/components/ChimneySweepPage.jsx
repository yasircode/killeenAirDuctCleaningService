import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ChimneySweepPage = () => {
  const { cityName } = useParams();

  // Formatting location for display
  const displayCity = cityName
    ? cityName.split('-').map(word => word.toUpperCase()).join(' ').replace(' TX', ', TX')
    : "Killeen, TX";

  useEffect(() => {
    document.title = `Professional Chimney Sweep in ${displayCity} | Fireplace Cleaning`;
    window.scrollTo(0, 0);
  }, [displayCity]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Chimney Sweeping & Inspection in ${displayCity}`,
    "serviceType": "Chimney Maintenance",
    "provider": {
      "@type": "LocalBusiness",
      "name": "JY Chimney Pros",
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

      {/* Hero Section - Classic Chimney Aesthetic */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.h1}>Certified Chimney Sweep Services in {displayCity}</h1>
          <p style={styles.subtext}>Ensuring Safe Fireplace Operation for {displayCity} Families. Removing Dangerous Creosote & Soot Buildup.</p>
          <div style={styles.btnGroup}>
            <a href="tel:2549983484" style={styles.ctaButton}>Schedule a Sweep</a>
            <Link to="/contact" style={styles.secondaryBtn}>Get a Quote</Link>
          </div>
        </div>
      </section>

      <div style={styles.contentWrapper}>
        
        {/* Section 1: Why Chimney Sweeping? */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Is Your Fireplace Safe for Winter in {displayCity}?</h2>
          <p style={styles.paragraph}>
            A cozy fire is a luxury in <strong>{displayCity}</strong> during chilly nights, but an unmaintained chimney is a hidden danger. Every time you burn wood, a sticky substance called creosote builds up inside your flue. This material is highly flammable and is the #1 cause of chimney fires. Our professional sweeps use specialized tools to scrub your chimney walls, ensuring smoke and toxic gases like Carbon Monoxide exit your home safely.
          </p>
          <img src="/chimney-sweep-action.jpg" alt={`Chimney cleaning service in ${displayCity}`} style={styles.image} />
        </section>

        {/* Section 2: Comprehensive Inspection */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Beyond Just Sweeping: Our Safety Check</h2>
          <p style={styles.paragraph}>
            We don't just brush away the soot. Our {displayCity} chimney technicians perform a multi-point safety check:
          </p>
          <ul style={styles.list}>
            <li><strong>Creosote Level Analysis:</strong> Identifying if you have Stage 3 creosote that requires chemical treatment.</li>
            <li><strong>Damper Operation:</strong> Ensuring your damper seals tightly to prevent heat loss.</li>
            <li><strong>Chimney Cap & Crown:</strong> Checking for cracks that allow rain and pests into your flue.</li>
            <li><strong>Flue Liner Integrity:</strong> Searching for gaps or cracks that could leak heat into your walls.</li>
          </ul>
        </section>

        {/* Section 3: Process Grid */}
        <section style={styles.infoBox}>
          <h2 style={styles.h2}>Our Signature "No-Mess" Cleaning Process</h2>
          <div style={styles.stepGrid}>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Step 1: Prep</h3>
                <p>We lay down drop cloths and set up industrial dust collectors to keep your living room spotless.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Step 2: Sweep</h3>
                <p>Using poly or steel brushes, we scrub the flue from top to bottom, removing all soot and debris.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Step 3: Vacuum</h3>
                <p>Triple-filtration HEPA vacuums ensure that even the smallest ash particles are contained.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Step 4: Certify</h3>
                <p>After the sweep, we provide a full report on the structural health of your chimney system.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Efficiency & Smoke Management */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Improve Draft & Air Quality in Your {displayCity} Home</h2>
          <p style={styles.paragraph}>
            Does smoke blow back into your house when you start a fire? This is often caused by a restricted flue or a cold-air plug. In <strong>{displayCity}</strong>, we help homeowners optimize their chimney's draft, ensuring that wood burns cleaner and smoke exits perfectly. A clean chimney means more heat in your room and less ash on your furniture.
          </p>
        </section>

        {/* Section 5: Area Links */}
        <section style={styles.internalLinks}>
          <h3 style={styles.h3}>Serving Chimneys Throughout {displayCity} Area</h3>
          <div style={styles.linkGrid}>
            <Link style={styles.footerLink} to="/chimney-sweep/killeen-tx">Killeen Sweep</Link>
            <Link style={styles.footerLink} to="/chimney-sweep/temple-tx">Temple Sweep</Link>
            <Link style={styles.footerLink} to="/chimney-sweep/belton-tx">Belton Chimney</Link>
            <Link style={styles.footerLink} to="/chimney-sweep/harker-heights-tx">Harker Heights</Link>
            <Link style={styles.footerLink} to="/chimney-sweep/georgetown-tx">Georgetown</Link>
            <Link style={styles.footerLink} to="/chimney-sweep/waco-tx">Waco Chimney Pros</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

const styles = {
  container: { backgroundColor: '#fdfdfd', color: '#333', fontFamily: '"Playfair Display", serif' },
  hero: { 
    height: '65vh', display: 'flex', alignItems: 'center', justifyContent: 'center', 
    background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/chimney-bg.jpg")', 
    backgroundSize: 'cover', backgroundAttachment: 'fixed', textAlign: 'center', color: 'white' 
  },
  heroOverlay: { padding: '40px', maxWidth: '1000px' },
  h1: { fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '700', letterSpacing: '1px' },
  subtext: { fontSize: '1.2rem', margin: '20px 0 40px', opacity: '0.9' },
  btnGroup: { display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' },
  ctaButton: { background: '#c0392b', color: 'white', padding: '18px 36px', textDecoration: 'none', borderRadius: '2px', fontWeight: 'bold' },
  secondaryBtn: { background: 'white', color: '#2c3e50', padding: '18px 36px', textDecoration: 'none', borderRadius: '2px', fontWeight: 'bold' },
  
  contentWrapper: { maxWidth: '1100px', margin: '0 auto', padding: '70px 20px' },
  section: { marginBottom: '80px' },
  h2: { fontSize: '2.3rem', color: '#2c3e50', marginBottom: '25px', borderLeft: '4px solid #c0392b', paddingLeft: '20px' },
  paragraph: { fontSize: '1.15rem', lineHeight: '1.9', color: '#555' },
  image: { width: '100%', borderRadius: '4px', marginTop: '30px', boxShadow: '0 10px 20px rgba(0,0,0,0.08)' },
  
  list: { paddingLeft: '20px', fontSize: '1.1rem', lineHeight: '2.3' },
  infoBox: { background: '#f9f9f9', padding: '50px', borderRadius: '8px', marginBottom: '80px', border: '1px solid #eee' },
  
  stepGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', marginTop: '40px' },
  stepCard: { textAlign: 'center' },
  stepTitle: { color: '#c0392b', marginBottom: '12px', fontSize: '1.4rem' },
  
  internalLinks: { background: '#1c1c1c', color: 'white', padding: '60px', borderRadius: '8px' },
  h3: { textAlign: 'center', marginBottom: '40px', fontSize: '1.9rem' },
  linkGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '20px', textAlign: 'center' },
  footerLink: { color: '#e74c3c', textDecoration: 'none', fontSize: '1.1rem' }
};

export default ChimneySweepPage;