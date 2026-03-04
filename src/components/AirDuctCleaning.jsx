import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const CityServicePage = () => {
  const { cityName } = useParams();

  const displayCity = cityName
    ? cityName.split('-').map(word => word.toUpperCase()).join(' ').replace(' TX', ', TX')
    : "Killeen, TX";

  useEffect(() => {
    document.title = `Air Duct Cleaning in ${displayCity} | Professional HVAC Services`;
    window.scrollTo(0, 0);
  }, [displayCity]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Air Duct Cleaning in ${displayCity}`,
    "serviceType": "HVAC Cleaning",
    "provider": {
      "@type": "LocalBusiness",
      "name": "JY Air Duct Cleaning",
      "address": { "@type": "PostalAddress", "addressLocality": displayCity, "addressRegion": "TX" },
      "telephone": "(254) 998-3484"
    }
  };

  return (
    <div style={styles.container}>
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

      {/* Hero Section with Background Video */}
      <section style={styles.hero}>
        <video autoPlay loop muted playsInline style={styles.videoBg}>
          <source src="/video.mp4" type="video/mp4" />
          {/* Fallback image if video fails */}
          <img src="/hero-fallback.jpg" alt="Air Duct Cleaning" />
        </video>
        <div style={styles.heroOverlay}>
          <h1 style={styles.h1}>Expert Air Duct Cleaning in {displayCity}</h1>
          <p style={styles.subtext}>Improving Indoor Air Quality for {displayCity} Homes & Businesses. Professional, Reliable, and Affordable.</p>
          <div style={styles.btnGroup}>
            <a href="tel:2549983484" style={styles.ctaButton}>Call (254) 998-3484</a>
            <Link to="/contact" style={styles.secondaryBtn}>Get Online Quote</Link>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div style={styles.contentWrapper}>
        
        {/* Section 1: Introduction */}
        <section style={styles.section}>
          <h2 style={styles.h2}>The Trusted Choice for Air Duct Cleaning in {displayCity}</h2>
          <p style={styles.paragraph}>
            Are you noticing more dust on your furniture? Are your energy bills rising unexpectedly? 
            In <strong>{displayCity}</strong>, the combination of Texas dust and high humidity can turn your HVAC system into a breeding ground for mold, bacteria, and allergens. 
            At JY Air Duct Cleaning, we specialize in deep-cleaning your entire ventilation system to ensure you and your family breathe 100% clean air.
          </p>
          <img src="/profile3.jpeg" alt={`HVAC Sanitization in ${displayCity}`} style={styles.image} />
        </section>

        {/* Section 2: Health Benefits (Expanding Content for SEO) */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Health Benefits of Professional Duct Cleaning</h2>
          <p style={styles.paragraph}>
            Many residents in {displayCity} suffer from seasonal allergies. What they don't realize is that their air ducts are often recirculating the very pollen and dander they are trying to avoid. 
            Our professional-grade equipment removes:
          </p>
          <ul style={styles.list}>
            <li><strong>Microbial Growth:</strong> We sanitize ducts to kill mold spores common in Texas humidity.</li>
            <li><strong>Pet Dander & Hair:</strong> Deep cleaning for homes with furry friends.</li>
            <li><strong>Construction Debris:</strong> Essential for new homes in growing areas like {displayCity}.</li>
            <li><strong>Dust Mites:</strong> Reducing triggers for asthma and respiratory issues.</li>
          </ul>
        </section>

        {/* Section 3: Professional Process */}
        <section style={styles.infoBox}>
          <h2 style={styles.h2}>Our Signature 5-Step Deep Clean Process</h2>
          <div style={styles.stepGrid}>
            <div style={styles.stepCard}><h3>1. Inspection</h3><p>Using high-def cameras to find hidden blockages.</p></div>
            <div style={styles.stepCard}><h3>2. Negative Pressure</h3><p>Connecting high-powered vacuums to trap all dust.</p></div>
            <div style={styles.stepCard}><h3>3. Agitation</h3><p>Brushing and scrubbing the interior walls of every duct.</p></div>
            <div style={styles.stepCard}><h3>4. Sanitization</h3><p>EPA-approved fogging to eliminate odors and bacteria.</p></div>
            <div style={styles.stepCard}><h3>5. Testing</h3><p>Verifying airflow and system efficiency before we leave.</p></div>
          </div>
        </section>

        {/* Section 4: Energy Efficiency */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Save on Energy Bills in {displayCity}</h2>
          <p style={styles.paragraph}>
            A clogged HVAC system has to work significantly harder to maintain the temperature in your {displayCity} home. 
            By removing just a fraction of an inch of dust from your blower fan and coils, we can help improve your system's efficiency by up to 25%. 
            This doesn't just lower your monthly bills; it extends the lifespan of your expensive AC unit.
          </p>
        </section>

        {/* Section 5: Local Links */}
        <section style={styles.internalLinks}>
          <h3 style={styles.h3}>Serving All Areas Near {displayCity}</h3>
          <div style={styles.linkGrid}>
            <Link style={styles.footerLink} to="/location/killeen-tx">Killeen</Link>
            <Link style={styles.footerLink} to="/location/harker-heights-tx">Harker Heights</Link>
            <Link style={styles.footerLink} to="/location/temple-tx">Temple</Link>
            <Link style={styles.footerLink} to="/location/belton-tx">Belton</Link>
            <Link style={styles.footerLink} to="/location/waco-tx">Waco</Link>
            <Link style={styles.footerLink} to="/location/georgetown-tx">Georgetown</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

const styles = {
  container: { backgroundColor: '#f9f9f9', color: '#333', fontFamily: '"Segoe UI", Roboto, sans-serif' },
  hero: { 
    position: 'relative', height: '70vh', display: 'flex', alignItems: 'center', 
    justifyContent: 'center', overflow: 'hidden', textAlign: 'center', color: 'white' 
  },
  videoBg: { 
    position: 'absolute', top: '50%', left: '50%', minWidth: '100%', minHeight: '100%', 
    width: 'auto', height: 'auto', zIndex: '1', transform: 'translateX(-50%) translateY(-50%)', objectFit: 'cover' 
  },
  heroOverlay: { 
    zIndex: '2', padding: '20px', background: 'rgba(0,0,0,0.5)', width: '100%', height: '100%', 
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' 
  },
  h1: { fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', fontWeight: '800', margin: '0 0 20px', textTransform: 'uppercase' },
  subtext: { fontSize: 'clamp(1rem, 2vw, 1.4rem)', maxWidth: '800px', marginBottom: '30px' },
  btnGroup: { display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' },
  ctaButton: { background: '#007bff', color: 'white', padding: '15px 30px', textDecoration: 'none', borderRadius: '50px', fontWeight: 'bold', fontSize: '1.1rem' },
  secondaryBtn: { background: 'white', color: '#007bff', padding: '15px 30px', textDecoration: 'none', borderRadius: '50px', fontWeight: 'bold' },
  
  contentWrapper: { maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' },
  section: { marginBottom: '60px' },
  h2: { fontSize: '2rem', color: '#1a1a1a', marginBottom: '20px', borderLeft: '5px solid #007bff', paddingLeft: '15px' },
  paragraph: { fontSize: '1.1rem', lineHeight: '1.8', color: '#555' },
  image: { width: '100%', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', marginTop: '20px' },
  
  list: { paddingLeft: '20px', fontSize: '1.1rem', lineHeight: '2' },
  infoBox: { background: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', marginBottom: '60px' },
  
  stepGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '30px' },
  stepCard: { padding: '20px', background: '#f0f7ff', borderRadius: '10px', textAlign: 'center' },
  
  internalLinks: { background: '#1a1a1a', color: 'white', padding: '40px', borderRadius: '20px' },
  h3: { textAlign: 'center', marginBottom: '30px' },
  linkGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '15px', textAlign: 'center' },
  footerLink: { color: '#88bcff', textDecoration: 'none', fontSize: '1rem' }
};

export default CityServicePage;