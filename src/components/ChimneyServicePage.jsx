import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ChimneyServicePage = () => {
  const { cityName } = useParams();

  // City formatting (e.g., killeen-tx to Killeen, TX)
  const displayCity = cityName
    ? cityName.split('-').map(word => word.toUpperCase()).join(' ').replace(' TX', ', TX')
    : "Killeen, TX";

  useEffect(() => {
    document.title = `Full Chimney Service & Repair in ${displayCity} | Masonry Experts`;
    window.scrollTo(0, 0);
  }, [displayCity]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Comprehensive Chimney Services in ${displayCity}`,
    "serviceType": "Chimney Repair and Maintenance",
    "provider": {
      "@type": "LocalBusiness",
      "name": "JY Chimney & Masonry",
      "address": { "@type": "PostalAddress", "addressLocality": displayCity, "addressRegion": "TX" },
      "telephone": "(254) 998-3484"
    }
  };

  return (
    <div style={styles.container}>
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
<br></br>
<br></br>
<br></br>
      {/* Hero Section: Repair & Service Focus */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.h1}>Full-Service Chimney Care in {displayCity}</h1>
          <p style={styles.subtext}>From Structural Repairs to Waterproofing. Keeping Your {displayCity} Chimney Safe and Beautiful All Year Round.</p>
          <div style={styles.btnGroup}>
            <a href="tel:2549983484" style={styles.ctaButton}>Request Service</a>
            <Link to="/contact" style={styles.secondaryBtn}>Upload Photo for Quote</Link>
          </div>
        </div>
      </section>

      <div style={styles.contentWrapper}>
        
        {/* Section 1: Comprehensive Maintenance */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Complete Chimney Solutions in {displayCity}</h2>
          <p style={styles.paragraph}>
            A chimney needs more than just a sweep; it needs structural integrity. In <strong>{displayCity}</strong>, heavy rain and temperature shifts can cause brickwork to crack and mortar to deteriorate. Our <strong>Chimney Service</strong> covers everything from minor tuckpointing to full chimney rebuilds. We don't just fix the symptoms; we find the root cause of leaks, drafts, and masonry damage to protect your property investment.
          </p>
          <img src="/chimney-repair-masonry.jpg" alt={`Chimney masonry repair in ${displayCity}`} style={styles.image} />
        </section>

        {/* Section 2: Specialized Repairs */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Our Specialized Chimney Services</h2>
          <p style={styles.paragraph}>
            Homeowners in {displayCity} trust us for more than just basic cleaning. We specialize in:
          </p>
          <ul style={styles.list}>
            <li><strong>Chimney Waterproofing:</strong> Specialized sealants that let the brick breathe while keeping moisture out.</li>
            <li><strong>Crown & Cap Repair:</strong> Fixing the "roof" of your chimney to prevent water from rotting your fireplace.</li>
            <li><strong>Flash Repair:</strong> Sealing the gap between your roof and chimney to stop ceiling leaks.</li>
            <li><strong>Tuckpointing:</strong> Replacing old, crumbling mortar with fresh, high-strength material.</li>
            <li><strong>Firebox Restoration:</strong> Repairing the inner bricks where the actual fire burns.</li>
          </ul>
        </section>

        {/* Section 3: Diagnostic Approach */}
        <section style={styles.infoBox}>
          <h2 style={styles.h2}>How We Service Your Chimney</h2>
          <div style={styles.stepGrid}>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Structure Audit</h3>
                <p>We examine the exterior bricks and mortar for signs of "spalling" or water absorption.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Leak Detection</h3>
                <p>Using advanced moisture meters to find exactly where water is entering your system.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Precision Repair</h3>
                <p>Applying masonry-grade materials that match the aesthetic of your {displayCity} home.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Final Weather-Seal</h3>
                <p>An optional protective layer that shields your chimney from Texas humidity and rain.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Why Professional Service Matters */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Long-Term Protection for {displayCity} Residences</h2>
          <p style={styles.paragraph}>
            Ignoring a small crack in your chimney today can lead to a thousands of dollars in water damage tomorrow. In <strong>{displayCity}</strong>, structural chimney issues are often overlooked until they become emergencies. Regular professional service ensures that your fireplace remains a source of warmth, not a source of stress. Our team is trained in the latest masonry techniques to ensure your chimney lasts for decades.
          </p>
        </section>

        {/* Section 5: Geo-Targeted Links */}
        <section style={styles.internalLinks}>
          <h3 style={styles.h3}>Local Chimney Service Experts</h3>
          <div style={styles.linkGrid}>
            <Link style={styles.footerLink} to="/chimney-service/killeen-tx">Killeen Repairs</Link>
            <Link style={styles.footerLink} to="/chimney-service/temple-tx">Temple Chimney Care</Link>
            <Link style={styles.footerLink} to="/chimney-service/belton-tx">Belton Masonry</Link>
            <Link style={styles.footerLink} to="/chimney-service/harker-heights-tx">Harker Heights</Link>
            <Link style={styles.footerLink} to="/chimney-service/copperas-cove-tx">Copperas Cove</Link>
            <Link style={styles.footerLink} to="/chimney-service/waco-tx">Waco Service</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

const styles = {
  container: { backgroundColor: '#fdfbf9', color: '#4a3728', fontFamily: '"Georgia", serif' },
  hero: { 
    height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', 
    background: 'linear-gradient(rgba(42, 28, 19, 0.8), rgba(42, 28, 19, 0.8)), url("/chimney-service-hero.jpg")', 
    backgroundSize: 'cover', backgroundPosition: 'center', textAlign: 'center', color: 'white' 
  },
  heroOverlay: { padding: '30px', maxWidth: '1000px' },
  h1: { fontSize: 'clamp(1.8rem, 5vw, 3.4rem)', fontWeight: 'bold', textTransform: 'capitalize' },
  subtext: { fontSize: '1.25rem', marginTop: '20px', opacity: '0.9', lineHeight: '1.6' },
  btnGroup: { display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '35px' },
  ctaButton: { background: '#8d6e63', color: 'white', padding: '16px 34px', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' },
  secondaryBtn: { background: 'white', color: '#5d4037', padding: '16px 34px', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' },
  
  contentWrapper: { maxWidth: '1150px', margin: '0 auto', padding: '60px 25px' },
  section: { marginBottom: '75px' },
  h2: { fontSize: '2.2rem', color: '#5d4037', marginBottom: '25px', borderBottom: '3px solid #d7ccc8', display: 'inline-block' },
  paragraph: { fontSize: '1.15rem', lineHeight: '1.9', color: '#5d4037' },
  image: { width: '100%', borderRadius: '10px', marginTop: '30px', boxShadow: '0 12px 24px rgba(0,0,0,0.1)' },
  
  list: { paddingLeft: '20px', fontSize: '1.1rem', lineHeight: '2.3', marginTop: '20px' },
  infoBox: { background: '#fff', padding: '50px', borderRadius: '15px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', marginBottom: '80px', border: '1px solid #efebe9' },
  
  stepGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '25px', marginTop: '40px' },
  stepCard: { padding: '25px', background: '#fcfaf9', borderRadius: '8px', borderTop: '4px solid #8d6e63' },
  stepTitle: { color: '#5d4037', marginBottom: '12px', fontSize: '1.3rem', fontWeight: 'bold' },
  
  internalLinks: { background: '#3e2723', color: 'white', padding: '60px', borderRadius: '15px' },
  h3: { textAlign: 'center', marginBottom: '40px', fontSize: '1.9rem' },
  linkGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '20px', textAlign: 'center' },
  footerLink: { color: '#d7ccc8', textDecoration: 'none', fontSize: '1.1rem', transition: '0.3s' }
};

export default ChimneyServicePage;