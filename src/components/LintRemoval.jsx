import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ServiceAreas from './ServiceAreas';
import Yasir from './Yasir';


const LintRemoval = () => {
  const { cityName } = useParams();

  const displayCity = cityName
    ? cityName.split('-').map(word => word.toUpperCase()).join(' ').replace(' TX', ', TX')
    : "Killeen, TX";

  useEffect(() => {
    document.title = `Professional Dryer Lint Removal in ${displayCity} | Deep Cleaning`;
    window.scrollTo(0, 0);
  }, [displayCity]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Deep Dryer Lint Removal Service in ${displayCity}`,
    "serviceType": "Dryer Vent Cleaning",
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
          <source src="/lint-removal-bg.mp4" type="video/mp4" />
          <img src="/lint-removal-banner.jpg" alt="Professional Lint Removal" />
        </video>
        <div style={styles.heroOverlay}>
          <h1 style={styles.h1}>Deep Dryer Lint Removal in {displayCity}</h1>
          <p style={styles.subtext}>Removing Years of Dangerous Build-up. Our High-Powered Extraction System Reaches Deep Into Your Walls to Eliminate Fire Hazards.</p>
          <div style={styles.btnGroup}>
            <a href="tel:2549983484" style={styles.ctaButton}>Clear My Vent Now</a>
            <Link to="/contact" style={styles.secondaryBtn}>Get a Price Estimate</Link>
          </div>
        </div>
      </section>

      <div style={styles.contentWrapper}>
        
        {/* Section 1: The Danger of Hidden Lint */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Beyond the Lint Trap: Hidden Dangers in {displayCity}</h2>
          <p style={styles.paragraph}>
            Cleaning your dryer's lint screen is only 25% of the job. Over time, micro-fibers escape the trap and accumulate deep inside the internal blower housing and the entire length of the exhaust duct. For homeowners in <strong>{displayCity}</strong>, this "hidden lint" acts like a tinderbox, waiting for a single spark to ignite. Our specialized <strong>Lint Removal Service</strong> uses industrial-grade agitation tools and HEPA-filtered vacuums to ensure every ounce of debris is safely extracted from your home.
          </p>
          
          <img src="/deep-lint-cleaning.jpg" alt={`Professional Lint Extraction Service in ${displayCity}`} style={styles.image} />
        </section>

        {/* Section 2: Why Choose Deep Removal */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Why Standard Cleaning Isn't Enough</h2>
          <p style={styles.paragraph}>
            Unlike basic brushing, our deep lint removal process targets the areas where fires actually start:
          </p>
          <ul style={styles.list}>
            <li><strong>Blower Wheel Extraction:</strong> Removing lint from the motor area to prevent mechanical burnout.</li>
            <li><strong>Line Agitation:</strong> Spinning "viper" whips break loose stuck-on wet lint from duct walls.</li>
            <li><strong>Booster Fan Cleaning:</strong> Servicing inline fans that often get choked with fiber buildup.</li>
            <li><strong>Multi-Story Cleaning:</strong> Safely clearing vents that exit through high rooflines or second-story walls.</li>
          </ul>
        </section>

        {/* Section 3: The Extraction Method */}
        <section style={styles.infoBox}>
          <h2 style={styles.h2}>Our High-Pressure Lint Extraction Process</h2>
          <div style={styles.stepGrid}>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Step 1: Scoping</h3>
                <p>We use fiber-optic cameras to locate the thickest areas of lint blockage and check for obstructions.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Step 2: Agitation</h3>
                <p>Reverse-air nozzles and rotary brushes scrub the interior of the ductwork from both ends.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Step 3: Vacuuming</h3>
                <p>Using a high-CFM negative air machine, we pull all loosened lint directly into our containment system.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Step 4: Sanitize</h3>
                <p>We finish with an optional botanical disinfectant to eliminate any musty odors caused by damp lint.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Brand New Unique FAQ Section */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Lint Removal & Safety: Your Questions Answered</h2>
          <div style={{marginTop: '30px'}}>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>How is "Lint Removal" different from regular cleaning?</h4>
              <p style={styles.paragraph}>Regular cleaning often just pushes lint around. Our removal service focuses on total extraction, including the internal cabinet of the dryer and the hard-to-reach elbows of the ductwork where clogs typically form.</p>
            </div>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>Will lint removal improve my dryer’s performance?</h4>
              <p style={styles.paragraph}>Absolutely. Removing the "plug" of lint allows your dryer to breathe. Most customers in {displayCity} report that their drying time is cut in half after a single deep cleaning session.</p>
            </div>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>Does your process create a mess inside my house?</h4>
              <p style={styles.paragraph}>Not at all. We use a sealed negative pressure system. This ensures that every bit of dust and lint is sucked directly into our equipment, leaving your laundry room spotless.</p>
            </div>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>How often should I have the lint professionally removed?</h4>
              <p style={styles.paragraph}>For a typical family in {displayCity} that does 3-5 loads of laundry a week, we recommend a professional deep removal every 12 months to maintain safety and efficiency.</p>
            </div>
          </div>
        </section>
        <Yasir/>

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
    zIndex: '2', padding: '20px', background: 'rgba(0, 0, 0, 0.6)', width: '100%', height: '100%', 
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' 
  },
  h1: { fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: '900', margin: '0 0 15px', lineHeight: '1.1' },
  subtext: { fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', maxWidth: '850px', opacity: '0.9', marginBottom: '35px' },
  btnGroup: { display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' },
  ctaButton: { background: '#c0392b', color: 'white', padding: '18px 35px', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold', fontSize: '1.2rem', boxShadow: '0 4px 15px rgba(192,57,43,0.3)' },
  secondaryBtn: { background: 'transparent', border: '2px solid white', color: 'white', padding: '16px 35px', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' },
  
  contentWrapper: { maxWidth: '1200px', margin: '0 auto', padding: '60px 25px' },
  section: { marginBottom: '80px' },
  h2: { fontSize: '2.2rem', color: '#2c3e50', marginBottom: '25px', fontWeight: '800' },
  paragraph: { fontSize: '1.15rem', lineHeight: '1.9', color: '#4b5563' },
  image: { width: '100%', borderRadius: '12px', marginTop: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' },
  
  list: { paddingLeft: '25px', fontSize: '1.1rem', lineHeight: '2.2', color: '#4b5563', marginBottom: '30px' },
  infoBox: { background: '#fff5f5', padding: '50px', borderRadius: '16px', marginBottom: '80px', border: '1px solid #fed7d7' },
  
  stepGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '25px', marginTop: '40px' },
  stepCard: { padding: '30px', background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' },
  stepTitle: { color: '#c0392b', fontSize: '1.4rem', marginBottom: '10px', fontWeight: '700' },

  faqItem: { marginBottom: '30px', borderBottom: '1px solid #eee', paddingBottom: '20px' },
  faqQuestion: { fontSize: '1.3rem', color: '#2c3e50', marginBottom: '10px', fontWeight: '700' },
  
  internalLinks: { background: '#1a202c', color: 'white', padding: '60px', borderRadius: '16px' },
  h3: { textAlign: 'center', marginBottom: '40px', fontSize: '1.8rem' },
  linkGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', textAlign: 'center' },
  footerLink: { color: '#a0aec0', textDecoration: 'none', fontSize: '1.05rem', transition: '0.3s', '&:hover': { color: '#f56565' } }
};

export default LintRemoval;