import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const DryerVentRepair = () => {
  const { cityName } = useParams();

  // City name formatting (e.g., killeen-tx -> Killeen, TX)
  const displayCity = cityName
    ? cityName.split('-').map(word => word.toUpperCase()).join(' ').replace(' TX', ', TX')
    : "Killeen, TX";

  useEffect(() => {
    document.title = `Professional Dryer Vent Repair in ${displayCity} | Certified Technicians`;
    window.scrollTo(0, 0);
  }, [displayCity]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Expert Dryer Vent Repair in ${displayCity}`,
    "serviceType": "Dryer Vent Repair and Maintenance",
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
          <source src="/dryer-repair-bg.mp4" type="video/mp4" />
          <img src="/dryer-repair-banner.jpg" alt="Dryer Vent Repair Services" />
        </video>
        <div style={styles.heroOverlay}>
          <h1 style={styles.h1}>Reliable Dryer Vent Repair in {displayCity}</h1>
          <p style={styles.subtext}>Broken Ducts? Detached Vents? We Provide Structural Repairs, Joint Sealing, and Full Vent Replacements to Ensure Your Home's Safety.</p>
          <div style={styles.btnGroup}>
            <a href="tel:2549983484" style={styles.ctaButton}>Book Repair Now</a>
            <Link to="/contact" style={styles.secondaryBtn}>Get a Free Quote</Link>
          </div>
        </div>
      </section>

      <div style={styles.contentWrapper}>
        
        {/* Section 1: The Importance of Repair */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Expert Restoration for Your Dryer Exhaust System</h2>
          <p style={styles.paragraph}>
            Cleaning isn't always enough. In many <strong>{displayCity}</strong> homes, dryer vents suffer from physical damage, such as crushed foil pipes, disconnected joints behind walls, or rusted exterior hoods. A damaged vent leaks moist air and lint into your attic or crawlspace, leading to mold growth and severe fire risks. Our <strong>Dryer Vent Repair</strong> service fixes these structural issues using durable, code-compliant rigid metal ducting.
          </p>
          {/* <img src="/dryer-vent-repair-work.jpg" alt={`Dryer Vent Repair and Duct Sealing in ${displayCity}`} style={styles.image} /> */}
        </section>

        {/* Section 2: When to Call for Repair */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Signs Your Vent System Needs Urgent Repair</h2>
          <p style={styles.paragraph}>
            Don't ignore these red flags. If your vent system is physically compromised, cleaning alone won't fix the problem:
          </p>
          <ul style={styles.list}>
            <li><strong>Visible Damage:</strong> Dented, crushed, or punctured transition hoses behind the dryer.</li>
            <li><strong>Water Leaks:</strong> Condensation dripping from the vent or water stains on your drywall.</li>
            <li><strong>External Flap Failure:</strong> The outside vent cover is broken, missing, or stuck open/closed.</li>
            <li><strong>Excessive Lint:</strong> Finding lint piles behind the dryer or in the attic.</li>
            <li><strong>Noisy Operation:</strong> Rapping or vibration sounds coming from the walls when the dryer runs.</li>
          </ul>
        </section>

        {/* Section 3: Repair Solutions */}
        <section style={styles.infoBox}>
          <h2 style={styles.h2}>Our Professional Repair Solutions</h2>
          <div style={styles.stepGrid}>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Joint Re-Sealing</h3>
                <p>We secure disconnected duct segments and seal joints with professional-grade foil tape to prevent leaks.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Duct Replacement</h3>
                <p>Replacing dangerous plastic or foil "slinky" hoses with fire-rated, rigid aluminum ducting for maximum safety.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Termination Repair</h3>
                <p>Installing bird-proof and pest-resistant vent hoods to keep critters out of your exhaust line.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Rerouting</h3>
                <p>If your vent is too long or has too many bends, we reroute it to the shortest path for better airflow.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Frequently Asked Questions</h2>
          <div style={{marginTop: '30px'}}>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>How long does a dryer vent repair usually take?</h4>
              <p style={styles.paragraph}>Most repairs in {displayCity} are completed within 1 to 2 hours, depending on the accessibility of the ductwork.</p>
            </div>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>Can I repair my own dryer vent?</h4>
              <p style={styles.paragraph}>While small transition hoses can be replaced by homeowners, repairs inside walls or on the roof should be handled by professionals to ensure they meet local building codes.</p>
            </div>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>What materials do you use for repairs?</h4>
              <p style={styles.paragraph}>We exclusively use UL-listed, fire-rated rigid metal or semi-rigid aluminum ducting. We never use plastic or thin foil, as they are fire hazards.</p>
            </div>
          </div>
        </section>

        {/* Section 5: Geo-Links */}
        <section style={styles.internalLinks}>
          <h3 style={styles.h3}>Dryer Vent Repair Locations Near You</h3>
          <div style={styles.linkGrid}>
            <Link style={styles.footerLink} to="/dryer-vent-repair/killeen-tx">Killeen Repair</Link>
            <Link style={styles.footerLink} to="/dryer-vent-repair/temple-tx">Temple Repair</Link>
            <Link style={styles.footerLink} to="/dryer-vent-repair/belton-tx">Belton Repair</Link>
            <Link style={styles.footerLink} to="/dryer-vent-repair/harker-heights-tx">Harker Heights</Link>
            <Link style={styles.footerLink} to="/dryer-vent-repair/copperas-cove-tx">Copperas Cove</Link>
            <Link style={styles.footerLink} to="/dryer-vent-repair/waco-tx">Waco Repair</Link>
            <Link style={styles.footerLink} to="/dryer-vent-repair/georgetown-tx">Georgetown Repair</Link>
            <Link style={styles.footerLink} to="/dryer-vent-repair/salado-tx">Salado Repair</Link>
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
    zIndex: '2', padding: '20px', background: 'rgba(0, 0, 0, 0.7)', width: '100%', height: '100%', 
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' 
  },
  h1: { fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: '900', margin: '0 0 15px', lineHeight: '1.1' },
  subtext: { fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', maxWidth: '850px', opacity: '0.9', marginBottom: '35px' },
  btnGroup: { display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' },
  ctaButton: { background: '#e67e22', color: 'white', padding: '18px 35px', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold', fontSize: '1.2rem', boxShadow: '0 4px 15px rgba(230,126,34,0.3)' },
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
  stepTitle: { color: '#e67e22', fontSize: '1.4rem', marginBottom: '10px', fontWeight: '700' },

  faqItem: { marginBottom: '30px', borderBottom: '1px solid #eee', paddingBottom: '20px' },
  faqQuestion: { fontSize: '1.3rem', color: '#2c3e50', marginBottom: '10px', fontWeight: '700' },
  
  internalLinks: { background: '#0f172a', color: 'white', padding: '60px', borderRadius: '16px' },
  h3: { textAlign: 'center', marginBottom: '40px', fontSize: '1.8rem' },
  linkGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', textAlign: 'center' },
  footerLink: { color: '#94a3b8', textDecoration: 'none', fontSize: '1.05rem', transition: '0.3s', '&:hover': { color: '#fb923c' } }
};

export default DryerVentRepair;