import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ServiceAreas from './ServiceAreas';

const Commerciacleaning = () => {
  const { cityName } = useParams();

  const displayCity = cityName
    ? cityName.split('-').map(word => word.toUpperCase()).join(' ').replace(' TX', ', TX')
    : "Killeen, TX";

  useEffect(() => {
    // SEO Title for Repair Service
    document.title = `Expert Air Duct Repair in ${displayCity} | Killeen Air Duct Cleaning`;
    window.scrollTo(0, 0);
  }, [displayCity]);

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": `Air Duct Repair & Sealing in ${displayCity}`,
        "serviceType": "HVAC Repair",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Killeen Air Duct Cleaning",
          "address": { "@type": "PostalAddress", "addressLocality": displayCity, "addressRegion": "TX" },
          "telephone": "(254) 998-3484"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `Why is Killeen Air Duct Cleaning the best for repairs in ${displayCity}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use advanced diagnostic tools to find hidden leaks and high-grade mastic sealants to ensure a permanent fix for your HVAC system."
            }
          },
          {
            "@type": "Question",
            "name": "How do I know if my air ducts need repair?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Common signs include skyrocketing energy bills, uneven temperatures in different rooms, and excessive dust buildup even after cleaning."
            }
          }
        ]
      }
    ]
  };

  return (
    <div style={styles.container}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

      {/* Hero Section with Image Background */}
      <section style={styles.hero}>
        <img 
          src="/profile4.jpeg" 
          alt={`Professional Air Duct Repair in ${displayCity}`} 
          style={styles.imageBg} 
        />
        <div style={styles.heroOverlay}>
          <h1 style={styles.h1}>Killeen Air Duct Cleaning: Repair Specialists in {displayCity}</h1>
          <p style={styles.subtext}>Stop wasting energy! Killeen Air Duct Cleaning fixes leaks, crushed ducts, and disconnected vents across {displayCity} for maximum efficiency.</p>
          <div style={styles.btnGroup}>
            <a href="tel:2549983484" style={styles.ctaButton}>Request Repair Now</a>
            <Link to="/contact" style={styles.secondaryBtn}>Free Inspection</Link>
          </div>
        </div>
      </section>

      <div style={styles.contentWrapper}>
        
        {/* Section 1: The Problem (Expanded) */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Is Your {displayCity} Home Losing Air Through Leaky Ducts?</h2>
          <p style={styles.paragraph}>
            Did you know that the average home in <strong>{displayCity}</strong> loses up to 30% of its conditioned air through small holes, loose joints, and cracks in the ductwork? This means your AC is working double-time in the Texas heat, and you are paying for air that never reaches your living space. 
          </p>
          <p style={styles.paragraph}>
            At <strong>Killeen Air Duct Cleaning</strong>, we don't just clean—we restore. Our repair specialists use thermal imaging and pressure testing to identify structural failures. By sealing these leaks, we help you lower your utility bills and improve the lifespan of your entire HVAC unit.
          </p>
          <img src="/033.jpeg" alt={`Technician from Killeen Air Duct Cleaning repairing vents in ${displayCity}`} style={styles.image} />
        </section>

        {/* Section 2: Signs you need repair (Expanded) */}
        <section style={styles.infoBox}>
          <h2 style={styles.h2}>Common Signs You Need Air Duct Repair</h2>
          <p style={styles.paragraph}>Residents of {displayCity} should look out for these critical red flags that indicate it's time to call Killeen Air Duct Cleaning:</p>
          <ul style={styles.list}>
            <li><strong>Hot & Cold Spots:</strong> If your bedroom is freezing but the living room is hot, a disconnected duct is likely the culprit.</li>
            <li><strong>High Utility Bills:</strong> A sudden spike in your {displayCity} electric bill often means air is escaping into your attic or crawlspace.</li>
            <li><strong>Excessive Dust:</strong> Holes in your ductwork pull in dirty attic air, fiberglass particles, and allergens into your home.</li>
            <li><strong>Noisy Vents:</strong> Rattling, whistling, or vibration sounds usually mean a loose joint or a failing duct segment.</li>
            <li><strong>Pest Intrusion:</strong> Rodents and insects often enter HVAC systems through broken sections, creating health hazards.</li>
          </ul>
        </section>

        {/* Section 3: Technical Repair Process (Expanded) */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Killeen Air Duct Cleaning Repair & Sealing Process</h2>
          <p style={styles.paragraph}>Our multi-step repair methodology ensures your {displayCity} property remains energy efficient for years to come:</p>
          <div style={styles.stepGrid}>
            <div style={styles.stepCard}>
              <h3>Thermal Inspection</h3>
              <p>We use infrared cameras to see exactly where cold air is leaking behind your walls or in the attic.</p>
            </div>
            <div style={styles.stepCard}>
              <h3>Mastic Sealing</h3>
              <p>Killeen Air Duct Cleaning uses industrial mastic sealant that remains flexible and airtight for decades.</p>
            </div>
            <div style={styles.stepCard}>
              <h3>Structural Realignment</h3>
              <p>Fixing disconnected pipes and replacing crushed flex ducts that restrict airflow in your {displayCity} home.</p>
            </div>
            <div style={styles.stepCard}>
              <h3>Vapor Barrier Repair</h3>
              <p>We restore the insulation wrap around your ducts to prevent condensation and toxic mold growth.</p>
            </div>
          </div>
        </section>

        {/* Section 4: FAQ Section (High SEO Value) */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Frequently Asked Questions in {displayCity}</h2>
          <div style={styles.faqContainer}>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>How long does an air duct repair take?</h4>
              <p style={styles.paragraph}>Most residential repairs in {displayCity} are completed within 3-5 hours, depending on the extent of the damage and accessibility.</p>
            </div>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>Can't I just use duct tape for repairs?</h4>
              <p style={styles.paragraph}>Actually, "duct tape" is not recommended for ducts! It dries out and peels off. Killeen Air Duct Cleaning uses specialized foil tape and mastic sealant for a permanent bond.</p>
            </div>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>Will repairing my ducts improve my air quality?</h4>
              <p style={styles.paragraph}>Absolutely. Sealing leaks prevents your HVAC system from sucking in dust, mold spores, and insulation from unconditioned spaces like your attic.</p>
            </div>
          </div>
        </section>

     <ServiceAreas/>
      </div>
    </div>
  );
};

const styles = {
  container: { backgroundColor: '#fff', color: '#333', fontFamily: '"Segoe UI", sans-serif' },
  hero: { position: 'relative', height: '65vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', textAlign: 'center', color: 'white' },
  imageBg: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: '1', objectFit: 'cover' },
  heroOverlay: { zIndex: '2', padding: '20px', background: 'rgba(0,0,0,0.65)', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
  h1: { fontSize: 'clamp(1.6rem, 5vw, 2.8rem)', fontWeight: '800', margin: '0 0 20px', textTransform: 'uppercase' },
  subtext: { fontSize: 'clamp(1rem, 2vw, 1.25rem)', maxWidth: '850px', marginBottom: '30px', lineHeight: '1.6' },
  btnGroup: { display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' },
  ctaButton: { background: '#e63946', color: 'white', padding: '15px 30px', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' },
  secondaryBtn: { background: 'white', color: '#1d3557', padding: '15px 30px', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' },
  contentWrapper: { maxWidth: '1100px', margin: '0 auto', padding: '60px 20px' },
  section: { marginBottom: '60px' },
  h2: { fontSize: '2.1rem', color: '#1d3557', marginBottom: '20px', borderLeft: '6px solid #e63946', paddingLeft: '15px' },
  paragraph: { fontSize: '1.1rem', lineHeight: '1.8', color: '#444', marginBottom: '15px' },
  image: { width: '100%', borderRadius: '12px', marginTop: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' },
  list: { paddingLeft: '20px', fontSize: '1.1rem', lineHeight: '2.2', color: '#444' },
  infoBox: { background: '#f8f9fa', padding: '40px', borderRadius: '20px', marginBottom: '60px', border: '1px solid #dee2e6' },
  stepGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '25px', marginTop: '30px' },
  stepCard: { padding: '25px', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'center' },
  faqContainer: { marginTop: '30px' },
  faqItem: { marginBottom: '25px', paddingBottom: '15px', borderBottom: '1px solid #eee' },
  faqQuestion: { color: '#e63946', fontSize: '1.25rem', marginBottom: '10px', fontWeight: '700' },
  internalLinks: { background: '#1d3557', color: 'white', padding: '60px', borderRadius: '20px' },
  h3: { textAlign: 'center', marginBottom: '35px', fontSize: '1.8rem' },
  linkGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px', textAlign: 'center' },
  footerLink: { color: '#f1faee', textDecoration: 'none', fontSize: '1.05rem', transition: '0.3s' }
};

export default Commerciacleaning;