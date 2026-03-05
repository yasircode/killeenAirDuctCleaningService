import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const DryerVentCleaning = () => {
  const { cityName } = useParams();

  // City name formatting (Killeen-tx -> Killeen, TX)
  const displayCity = cityName
    ? cityName.split('-').map(word => word.toUpperCase()).join(' ').replace(' TX', ', TX')
    : "Killeen, TX";

  useEffect(() => {
    document.title = `Full Air Duct Replacement in ${displayCity} | New HVAC Ductwork`;
    window.scrollTo(0, 0);
  }, [displayCity]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Professional Air Duct Replacement in ${displayCity}`,
    "serviceType": "HVAC Ductwork Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "JY HVAC Solutions",
      "address": { "@type": "PostalAddress", "addressLocality": displayCity, "addressRegion": "TX" },
      "telephone": "(254) 998-3484"
    }
  };

  return (
    <div style={styles.container}>
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

      {/* Hero Section with New Messaging */}
      <section style={styles.hero}>
        <video autoPlay loop muted playsInline style={styles.videoBg}>
          <source src="/replacement-hvac.mp4" type="video/mp4" />
          <img src="/replacement-banner.jpg" alt="Air Duct Replacement" />
        </video>
        <div style={styles.heroOverlay}>
          <h1 style={styles.h1}>Modern Air Duct Replacement in {displayCity}</h1>
          <p style={styles.subtext}>Upgrade to Energy-Efficient, Fully Sealed Duct Systems. Stop Wasting Money on Leaky Vents.</p>
          <div style={styles.btnGroup}>
            <a href="tel:2549983484" style={styles.ctaButton}>Free Replacement Quote</a>
            <Link to="/contact" style={styles.secondaryBtn}>Book Inspection</Link>
          </div>
        </div>
      </section>

      <div style={styles.contentWrapper}>
        
        {/* Section 1: Why Replace? */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Why Upgrade Your Ductwork in {displayCity}?</h2>
          <p style={styles.paragraph}>
            Cleaning is a great maintenance step, but sometimes your home’s ventilation is beyond repair. In <strong>{displayCity}</strong>, older homes often have fiberboard or plastic flex ducts that degrade over time. If your ducts are more than 15 years old, they are likely leaking up to 30% of your cooled air into the attic. At JY Air Duct Services, we provide complete removal of old, contaminated pipes and install modern, R-8 insulated ducting to maximize your comfort.
          </p>
          <img src="/duct-install-service.jpg" alt={`New HVAC Duct Installation in ${displayCity}`} style={styles.image} />
        </section>

        {/* Section 2: Technical Indicators */}
        <section style={styles.section}>
          <h2 style={styles.h2}>When Should You Consider Replacement?</h2>
          <p style={styles.paragraph}>
            Repairing small leaks is possible, but full replacement is recommended for {displayCity} residents when:
          </p>
          <ul style={styles.list}>
            <li><strong>Material Fatigue:</strong> Fiberglass ducts are shedding particles into your indoor air.</li>
            <li><strong>Poor Design:</strong> Your current system has "hot spots" or rooms that never get cold.</li>
            <li><strong>Animal Infestation:</strong> Rodents have chewed through the insulation, creating biohazards.</li>
            <li><strong>Structural Damage:</strong> Crushed or collapsed ducts in tight crawlspaces.</li>
          </ul>
        </section>

        {/* Section 3: Engineering Process */}
        <section style={styles.infoBox}>
          <h2 style={styles.h2}>Our Precision Installation Method</h2>
          <div style={styles.stepGrid}>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>1. Load Calculation</h3>
                <p>We analyze your HVAC unit's CFM capacity to ensure the new ducts are perfectly sized.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>2. Safe Demolition</h3>
                <p>Our team carefully removes old, dusty ducts without contaminating your living space.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>3. Custom Routing</h3>
                <p>Optimizing the layout to reduce air resistance and increase cooling speed.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>4. Mastic Sealing</h3>
                <p>We use high-grade mastic sealant on every joint to ensure a 100% airtight system.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Local Impact */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Lower Your Energy Bills in {displayCity}</h2>
          <p style={styles.paragraph}>
            With the scorching Texas summers in <strong>{displayCity}</strong>, a faulty duct system is an expensive luxury. By replacing your outdated ductwork with high-efficiency alternatives, you reduce the workload on your AC compressor. This not only lowers your monthly electric bill but also extends the life of your entire HVAC system by several years.
          </p>
        </section>

        {/* Section 5: Dynamic Geo-Links */}
        <section style={styles.internalLinks}>
          <h3 style={styles.h3}>Duct Replacement Service Areas</h3>
          <div style={styles.linkGrid}>
            <Link style={styles.footerLink} to="/service/killeen-tx">Killeen Replacement</Link>
            <Link style={styles.footerLink} to="/service/temple-tx">Temple Replacement</Link>
            <Link style={styles.footerLink} to="/service/belton-tx">Belton Replacement</Link>
            <Link style={styles.footerLink} to="/service/harker-heights-tx">Harker Heights</Link>
            <Link style={styles.footerLink} to="/service/copperas-cove-tx">Copperas Cove</Link>
            <Link style={styles.footerLink} to="/service/waco-tx">Waco Replacement</Link>
          </div>
        </section>
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
    zIndex: '2', padding: '20px', background: 'rgba(15, 32, 39, 0.7)', width: '100%', height: '100%', 
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' 
  },
  h1: { fontSize: 'clamp(2rem, 6vw, 3.8rem)', fontWeight: '900', margin: '0 0 15px', lineHeight: '1.1' },
  subtext: { fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', maxWidth: '900px', opacity: '0.9', marginBottom: '35px' },
  btnGroup: { display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' },
  ctaButton: { background: '#e67e22', color: 'white', padding: '18px 35px', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold', fontSize: '1.2rem', boxShadow: '0 4px 15px rgba(230,126,34,0.3)' },
  secondaryBtn: { background: 'transparent', border: '2px solid white', color: 'white', padding: '16px 35px', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' },
  
  contentWrapper: { maxWidth: '1200px', margin: '0 auto', padding: '60px 25px' },
  section: { marginBottom: '80px' },
  h2: { fontSize: '2.4rem', color: '#2c3e50', marginBottom: '25px', fontWeight: '800' },
  paragraph: { fontSize: '1.15rem', lineHeight: '1.9', color: '#4b5563' },
  image: { width: '100%', borderRadius: '8px', marginTop: '30px' },
  
  list: { paddingLeft: '25px', fontSize: '1.1rem', lineHeight: '2.2', color: '#4b5563' },
  infoBox: { background: '#f8fafc', padding: '50px', borderRadius: '12px', marginBottom: '80px', border: '1px solid #e2e8f0' },
  
  stepGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '25px', marginTop: '40px' },
  stepCard: { padding: '30px', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' },
  stepTitle: { color: '#e67e22', fontSize: '1.4rem', marginBottom: '10px' },
  
  internalLinks: { background: '#0f172a', color: 'white', padding: '60px', borderRadius: '12px' },
  h3: { textAlign: 'center', marginBottom: '40px', fontSize: '1.8rem' },
  linkGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px', textAlign: 'center' },
  footerLink: { color: '#94a3b8', textDecoration: 'none', fontSize: '1.1rem', transition: '0.3s' }
};

export default DryerVentCleaning;