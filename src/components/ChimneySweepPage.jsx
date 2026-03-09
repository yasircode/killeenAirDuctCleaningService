import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ChimneySweepPage = () => {
  const { cityName } = useParams();

  const displayCity = cityName
    ? cityName.split('-').map(word => word.toUpperCase()).join(' ').replace(' TX', ', TX')
    : "Killeen, TX";

  useEffect(() => {
    document.title = `Professional Chimney Sweep in ${displayCity} | Killeen Air Duct Cleaning`;
    window.scrollTo(0, 0);
  }, [displayCity]);

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": `Chimney Sweeping & Inspection in ${displayCity}`,
        "serviceType": "Chimney Maintenance",
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
            "name": "How often should I have my chimney swept?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The NFPA recommends a chimney inspection and sweep at least once a year to prevent creosote buildup and ensure structural integrity."
            }
          },
          {
            "@type": "Question",
            "name": "Will chimney cleaning make a mess in my house?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Killeen Air Duct Cleaning uses industrial HEPA vacuums and drop cloths to ensure a 100% mess-free service in your home."
            }
          }
        ]
      }
    ]
  };

  return (
    <div style={styles.container}>
      <br /><br /><br /><br />
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

      {/* Hero Section */}
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
        
        {/* Section 1: Side-by-Side Images Section */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Is Your Fireplace Safe for Winter in {displayCity}?</h2>
          <p style={styles.paragraph}>
            A cozy fire is a luxury in <strong>{displayCity}</strong>, but an unmaintained chimney is a hidden danger. Our professional sweeps use specialized tools to scrub your chimney walls, ensuring smoke and toxic gases exit your home safely.
          </p>
          
          {/* Amna Samna Images (Side-by-Side) */}
          <div style={styles.imageGrid}>
             <div style={styles.imageWrapper}>
                <img src="/038.jpeg" alt="Dirty Chimney with Creosote" style={styles.sideImage} />
                <p style={styles.imgLabel}></p>
             </div>
             <div style={styles.imageWrapper}>
                <img src="/039.jpeg" alt="Clean Swept Chimney" style={styles.sideImage} />
                <p style={styles.imgLabel}></p>
             </div>
          </div>
        </section>

        {/* Section 2: Comprehensive Inspection */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Beyond Just Sweeping: Our Safety Check</h2>
          <p style={styles.paragraph}>
            At <strong>Killeen Air Duct Cleaning</strong>, we don't just brush away the soot. Our {displayCity} chimney technicians perform a multi-point safety check to ensure your flue is structurally sound.
          </p>
          <ul style={styles.list}>
            <li><strong>Creosote Level Analysis:</strong> Checking for flammable glazed creosote.</li>
            <li><strong>Damper Operation:</strong> Ensuring your damper seals tightly to save energy.</li>
            <li><strong>Chimney Cap Inspection:</strong> Checking for cracks that allow rain and pests into your home.</li>
            <li><strong>Flue Liner Integrity:</strong> Searching for gaps that could leak heat into your walls.</li>
          </ul>
        </section>

        {/* Section 3: Process Grid */}
        <section style={styles.infoBox}>
          <h2 style={styles.h2}>Our Signature "No-Mess" Cleaning Process</h2>
          <div style={styles.stepGrid}>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Step 1: Prep</h3>
                <p>We lay down drop cloths and set up industrial dust collectors to keep your room spotless.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Step 2: Sweep</h3>
                <p>Using poly or steel brushes, we scrub the flue from top to bottom, removing all debris.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Step 3: Vacuum</h3>
                <p>Triple-filtration HEPA vacuums ensure that even the smallest ash particles are contained.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Step 4: Certify</h3>
                <p>After the sweep, we provide a full report on the health of your chimney system in {displayCity}.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section (New) */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Chimney Cleaning FAQs in {displayCity}</h2>
          <div style={styles.faqBox}>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>What is creosote and why is it dangerous?</h4>
              <p style={styles.paragraph}>Creosote is a byproduct of wood burning that sticks to your chimney walls. It is highly flammable and the leading cause of chimney fires in {displayCity}.</p>
            </div>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>Do gas fireplaces need to be cleaned?</h4>
              <p style={styles.paragraph}>Yes. While they don't produce creosote, they can have debris, spider webs, or bird nests that block the exhaust of carbon monoxide.</p>
            </div>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>How long does a chimney sweep take?</h4>
              <p style={styles.paragraph}>A standard sweep and inspection usually takes between 45 to 90 minutes.</p>
            </div>
          </div>
        </section>

        {/* Section 5: Area Links */}
        <section style={styles.internalLinks}>
          <h3 style={styles.h3}>Killeen Air Duct Cleaning: Chimney Service Areas</h3>
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
  h1: { fontSize: 'clamp(1.8rem, 5vw, 3.2rem)', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' },
  subtext: { fontSize: '1.2rem', margin: '20px 0 40px', opacity: '0.9' },
  btnGroup: { display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' },
  ctaButton: { background: '#c0392b', color: 'white', padding: '18px 36px', textDecoration: 'none', borderRadius: '2px', fontWeight: 'bold' },
  secondaryBtn: { background: 'white', color: '#2c3e50', padding: '18px 36px', textDecoration: 'none', borderRadius: '2px', fontWeight: 'bold' },
  contentWrapper: { maxWidth: '1100px', margin: '0 auto', padding: '70px 20px' },
  section: { marginBottom: '80px' },
  h2: { fontSize: '2.1rem', color: '#2c3e50', marginBottom: '25px', borderLeft: '4px solid #c0392b', paddingLeft: '20px' },
  paragraph: { fontSize: '1.1rem', lineHeight: '1.8', color: '#555' },
  
  // Side by Side Image Styles
  imageGrid: { display: 'flex', gap: '20px', marginTop: '30px', flexWrap: 'wrap' },
  imageWrapper: { flex: '1 1 45%', minWidth: '300px', textAlign: 'center' },
  sideImage: { width: '100%', borderRadius: '4px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', height: '250px', objectFit: 'cover' },
  imgLabel: { marginTop: '10px', fontWeight: 'bold', color: '#c0392b' },

  list: { paddingLeft: '20px', fontSize: '1.1rem', lineHeight: '2.3' },
  infoBox: { background: '#f9f9f9', padding: '50px', borderRadius: '8px', marginBottom: '80px', border: '1px solid #eee' },
  stepGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', marginTop: '40px' },
  stepCard: { textAlign: 'center' },
  stepTitle: { color: '#c0392b', marginBottom: '12px', fontSize: '1.4rem', fontWeight: 'bold' },
  
  // FAQ Styles
  faqBox: { background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 15px rgba(0,0,0,0.05)' },
  faqItem: { marginBottom: '20px', borderBottom: '1px solid #f0f0f0', paddingBottom: '15px' },
  faqQuestion: { color: '#c0392b', fontSize: '1.2rem', marginBottom: '8px', fontWeight: '700' },

  internalLinks: { background: '#1c1c1c', color: 'white', padding: '60px', borderRadius: '8px' },
  h3: { textAlign: 'center', marginBottom: '40px', fontSize: '1.9rem' },
  linkGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '20px', textAlign: 'center' },
  footerLink: { color: '#e74c3c', textDecoration: 'none', fontSize: '1.1rem' }
};

export default ChimneySweepPage;