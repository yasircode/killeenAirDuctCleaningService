import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MultiStepQuoteForm from './MultiStepQuoteForm';

const DryerVentCleaning = () => {
  const { cityName } = useParams();

  const displayCity = cityName
    ? cityName.split('-').map(word => word.toUpperCase()).join(' ').replace(' TX', ', TX')
    : "Killeen, TX";

  useEffect(() => {
    document.title = `Professional Air Duct Replacement in ${displayCity} | Killeen Air Duct Cleaning`;
    window.scrollTo(0, 0);
  }, [displayCity]);

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": `HVAC Air Duct Replacement in ${displayCity}`,
        "serviceType": "Ductwork Installation",
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
            "name": `When should I choose Killeen Air Duct Cleaning for replacement in ${displayCity}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Replacement is best if your ducts are over 15 years old, have major air leaks, or visible structural damage that cleaning cannot fix."
            }
          },
          {
            "@type": "Question",
            "name": "Does Killeen Air Duct Cleaning provide free estimates?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide 100% free on-site inspections and replacement quotes for all residents in the Central Texas area."
            }
          }
        ]
      }
    ]
  };

  return (
    <div style={styles.container}>
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

      {/* Hero Section with Background Image */}
      <section style={styles.hero}>
        <img 
          src="/profile3.jpeg" 
          alt={`Expert Air Duct Replacement in ${displayCity}`} 
          style={styles.imageBg} 
        />
        <div style={styles.heroOverlay}>
          <h1 style={styles.h1}>Killeen Air Duct Cleaning: Replacement Experts</h1>
          <p style={styles.subtext}>Professional HVAC Ductwork Replacement in {displayCity}. High-Efficiency Insulated Ducts for Maximum Comfort.</p>
          <div style={styles.btnGroup}>
            <a href="tel:2549983484" style={styles.ctaButton}>Get Replacement Quote</a>
            <Link to="/contact" style={styles.secondaryBtn}>Schedule Inspection</Link>
          </div>
        </div>
      </section>

      <div style={styles.contentWrapper}>
        
        {/* Section 1: Replacement Focus */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Complete Air Duct Replacement in {displayCity}</h2>
          <p style={styles.paragraph}>
            Sometimes cleaning isn't enough. If your system is old or damaged, <strong>Killeen Air Duct Cleaning</strong> offers specialized <strong>Air Duct Replacement in {displayCity}</strong>. We remove outdated, leaky, and contaminated ductwork and replace it with modern, R-8 rated insulated systems. This ensures your HVAC system doesn't have to work overtime in the Texas heat, significantly reducing your monthly energy costs.
          </p>
          <img src="/profile1.jpeg" alt={`Professional Duct Replacement by Killeen Air Duct Cleaning in ${displayCity}`} style={styles.image} />
        </section>

        {/* Section 2: Signs for Replacement */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Signs You Need Duct Replacement from Killeen Air Duct Cleaning</h2>
          <p style={styles.paragraph}>
            How do you know it's time to stop cleaning and start replacing? <strong>Killeen Air Duct Cleaning</strong> recommends a full replacement for {displayCity} homeowners if you notice:
          </p>
          <ul style={styles.list}>
            <li><strong>Excessive Age:</strong> Ducts older than 15 years often lose their sealing and insulation value.</li>
            <li><strong>Severe Mold:</strong> If mold has penetrated the porous material of your ducts, replacement is the only permanent solution.</li>
            <li><strong>Crushed Ductwork:</strong> Restricted airflow due to physically damaged ducts in your {displayCity} home.</li>
            <li><strong>Pest Damage:</strong> When rodents have compromised the integrity of your ventilation.</li>
          </ul>
        </section>

        {/* Section 3: Process */}
        <section style={styles.infoBox}>
          <h2 style={styles.h2}>Killeen Air Duct Cleaning Replacement Process</h2>
          <div style={styles.stepGrid}>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Step 1: Evaluation</h3>
                <p>Killeen Air Duct Cleaning performs a full airflow test in your {displayCity} property.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Step 2: Removal</h3>
                <p>Safe extraction of old, contaminated materials to prevent dust spreading.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Step 3: Installation</h3>
                <p>Installing brand new, energy-efficient ducting tailored to your home's layout.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Step 4: Sealing</h3>
                <p>Applying professional-grade mastic sealant for a 100% airtight finish.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={styles.section}>
          <h2 style={styles.h2}>FAQs: Air Duct Replacement in {displayCity}</h2>
          <div style={styles.faqItem}>
            <h4 style={styles.faqQuestion}>Can Killeen Air Duct Cleaning replace ducts in the attic?</h4>
            <p style={styles.paragraph}>Yes, we specialize in attic and crawlspace ductwork replacement across {displayCity} and surrounding areas.</p>
          </div>
          <div style={styles.faqItem}>
            <h4 style={styles.faqQuestion}>Will a new system reduce dust?</h4>
            <p style={styles.paragraph}>Absolutely. New, sealed ducts from <strong>Killeen Air Duct Cleaning</strong> prevent attic dust and insulation particles from entering your living areas.</p>
          </div>
        </section>

        <MultiStepQuoteForm/>

        {/* Section 5: Service Areas */}
        <section style={styles.internalLinks}>
          <h3 style={styles.h3}>Killeen Air Duct Cleaning: Local Service Hubs</h3>
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
  imageBg: { 
    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
    zIndex: '1', objectFit: 'cover' 
  },
  heroOverlay: { 
    zIndex: '2', padding: '20px', background: 'rgba(15, 32, 39, 0.75)', width: '100%', height: '100%', 
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' 
  },
  h1: { fontSize: 'clamp(1.8rem, 6vw, 3.2rem)', fontWeight: '900', margin: '0 0 15px', lineHeight: '1.2' },
  subtext: { fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', maxWidth: '850px', opacity: '0.9', marginBottom: '35px' },
  btnGroup: { display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' },
  ctaButton: { background: '#e67e22', color: 'white', padding: '16px 32px', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold', fontSize: '1.1rem' },
  secondaryBtn: { background: 'transparent', border: '2px solid white', color: 'white', padding: '14px 32px', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' },
  contentWrapper: { maxWidth: '1100px', margin: '0 auto', padding: '60px 25px' },
  section: { marginBottom: '70px' },
  h2: { fontSize: '2.2rem', color: '#2c3e50', marginBottom: '25px', fontWeight: '800' },
  paragraph: { fontSize: '1.1rem', lineHeight: '1.85', color: '#4b5563' },
  image: { width: '100%', borderRadius: '8px', marginTop: '25px' },
  list: { paddingLeft: '25px', fontSize: '1.1rem', lineHeight: '2.1', color: '#4b5563' },
  infoBox: { background: '#f8fafc', padding: '45px', borderRadius: '12px', marginBottom: '70px', border: '1px solid #e2e8f0' },
  stepGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginTop: '30px' },
  stepCard: { padding: '25px', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' },
  stepTitle: { color: '#e67e22', fontSize: '1.3rem', marginBottom: '8px' },
  faqQuestion: { color: '#e67e22', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '8px' },
  faqItem: { marginBottom: '30px', paddingBottom: '15px', borderBottom: '1px solid #eee' },
  internalLinks: { background: '#0f172a', color: 'white', padding: '50px', borderRadius: '12px' },
  h3: { textAlign: 'center', marginBottom: '35px', fontSize: '1.7rem' },
  linkGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '15px', textAlign: 'center' },
  footerLink: { color: '#94a3b8', textDecoration: 'none', fontSize: '1rem' }
};

export default DryerVentCleaning;