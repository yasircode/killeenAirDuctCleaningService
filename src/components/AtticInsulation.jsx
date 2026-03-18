import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ServiceAreas from './ServiceAreas';
import Yasir from './Yasir';

const AtticInsulation= () => {
  const { cityName } = useParams();

  // Dynamic City Formatting
  const displayCity = cityName
    ? cityName.split('-').map(word => word.toUpperCase()).join(' ').replace(' TX', ', TX')
    : "Killeen, TX";

  useEffect(() => {
    document.title = `Attic Insulation Services in ${displayCity} | Killeen Air Duct Cleaning`;
    window.scrollTo(0, 0);
  }, [displayCity]);

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": `Professional Attic Insulation in ${displayCity}`,
        "serviceType": "Insulation Installation",
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
            "name": `How much can I save with attic insulation in ${displayCity}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Homeowners in Central Texas typically see a 15-25% reduction in their cooling costs immediately after upgrading their attic insulation with Killeen Air Duct Cleaning."
            }
          },
          {
            "@type": "Question",
            "name": "What is the best R-value for Texas attics?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For the hot Texas climate, the Department of Energy recommends an R-value of R-38 to R-60, which is approximately 13-20 inches of blown-in insulation."
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
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

      {/* Hero Section - Efficiency Focus */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.h1}>Killeen Air Duct Cleaning: Attic Insulation in {displayCity}</h1>
          <p style={styles.subtext}>Stop Your Cool Air From Escaping. High-Performance Insulation Upgrades for Maximum {displayCity} Comfort.</p>
          <div style={styles.btnGroup}>
            <a href="tel:2549983484" style={styles.ctaButton}>Get My Energy Audit</a>
            <Link to="/contact" style={styles.secondaryBtn}>View Pricing</Link>
          </div>
        </div>
      </section>

      <div style={styles.contentWrapper}>
        
        {/* Section 1: The Energy Gap */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Is Your Attic Costing You Money in {displayCity}?</h2>
          <p style={styles.paragraph}>
            In the intense Texas summer, an under-insulated attic can reach temperatures of 150°F. Without a proper thermal barrier, that heat radiates directly into your living space. At <strong>Killeen Air Duct Cleaning</strong>, we specialize in high-efficiency <strong>attic insulation in {displayCity}</strong>. Whether you need an "over-blow" of existing material or a complete removal and replacement of old, settled insulation, we ensure your home meets modern R-value standards.
          </p>
          
          <img src="/o8.jpeg" alt={`Blown-in insulation installation in ${displayCity} by Killeen Air Duct Cleaning`} style={styles.image} />
        </section>

        {/* Section 2: Types of Insulation Offered */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Killeen Air Duct Cleaning: Weatherization Options</h2>
          <p style={styles.paragraph}>
            Every {displayCity} home has different needs. We offer tailored solutions including:
          </p>
          <ul style={styles.list}>
            <li><strong>Blown-in Fiberglass:</strong> High-density coverage that fills every nook and cranny for a seamless seal.</li>
            <li><strong>Cellulose Insulation:</strong> Eco-friendly, fire-treated material with excellent sound-dampening properties.</li>
            <li><strong>Radiant Barriers:</strong> Reflective foil technology that blocks up to 97% of radiant heat from the sun.</li>
            <li><strong>Air Sealing:</strong> Killeen Air Duct Cleaning closes gaps around pipes and wires to stop expensive air leaks.</li>
            <li><strong>Old Insulation Removal:</strong> Safe extraction of contaminated or water-damaged material from your attic.</li>
          </ul>
        </section>

        {/* Section 3: Professional Workflow */}
        <section style={styles.infoBox}>
          <h2 style={styles.h2}>The Killeen Air Duct Cleaning Installation Process</h2>
          <div style={styles.stepGrid}>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>1. Thermal Scan</h3>
                <p>We use infrared cameras to identify "hot spots" where your {displayCity} home is losing energy.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>2. Prep & Shield</h3>
                <p>Recessed lights and attic hatches are shielded to ensure safe and proper ventilation flow.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>3. Precision Blow</h3>
                <p>Killeen Air Duct Cleaning uses calibrated machinery to achieve the exact R-value required for Texas.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>4. Final Audit</h3>
                <p>We provide a certificate showing the square footage and thickness of material added to your home.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Frequently Asked Questions in {displayCity}</h2>
          <div style={styles.faqItem}>
            <h4 style={styles.faqQuestion}>How do I know if I need more insulation?</h4>
            <p style={styles.paragraph}>If you can see your floor joists in the attic, you likely don't have enough. <strong>Killeen Air Duct Cleaning</strong> recommends at least 15-18 inches of coverage for Central Texas homes.</p>
          </div>
          <div style={styles.faqItem}>
            <h4 style={styles.faqQuestion}>Will new insulation help with my high electric bills?</h4>
            <p style={styles.paragraph}>Absolutely. Better insulation means your AC runs less often to maintain a cool temperature in {displayCity}, saving you significant money every month.</p>
          </div>
          <div style={styles.faqItem}>
            <h4 style={styles.faqQuestion}>Is removal of old insulation necessary?</h4>
            <p style={styles.paragraph}>Only if it is water-damaged, contains mold, or has been contaminated by rodents. <strong>Killeen Air Duct Cleaning</strong> can inspect and advise if a simple "top-off" is sufficient.</p>
          </div>
        </section>

        {/* Section 4: ROI & Comfort */}
        <section style={styles.section}>
          <h2 style={styles.h2}>A Wise Investment with Killeen Air Duct Cleaning</h2>
          <p style={styles.paragraph}>
            Attic insulation is one of the few home improvements that actually pays for itself. By stabilizing your home's temperature, you reduce the workload on your HVAC system, leading to lower monthly bills and fewer repairs. Residents of <strong>{displayCity}</strong> often report a massive improvement in comfort immediately after an upgrade.
          </p>
        </section>
<Yasir/>
    <ServiceAreas/>
      </div>
    </div>
  );
};

const styles = {
  container: { backgroundColor: '#f4f7f6', color: '#2c3e50', fontFamily: '"Open Sans", sans-serif' },
  hero: { 
    height: '65vh', display: 'flex', alignItems: 'center', justifyContent: 'center', 
    background: 'linear-gradient(rgba(44, 62, 80, 0.7), rgba(44, 62, 80, 0.7)), url("/attic-hero.jpg")', 
    backgroundSize: 'cover', backgroundPosition: 'center', textAlign: 'center', color: 'white' 
  },
  heroOverlay: { padding: '20px', maxWidth: '1000px' },
  h1: { fontSize: 'clamp(1.8rem, 5vw, 3.2rem)', fontWeight: '800', marginBottom: '15px', textTransform: 'uppercase' },
  subtext: { fontSize: '1.2rem', marginBottom: '35px', fontWeight: '400', opacity: '0.9' },
  btnGroup: { display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' },
  ctaButton: { background: '#2980b9', color: 'white', padding: '16px 32px', textDecoration: 'none', borderRadius: '30px', fontWeight: 'bold' },
  secondaryBtn: { background: 'white', color: '#2980b9', padding: '16px 32px', textDecoration: 'none', borderRadius: '30px', fontWeight: 'bold' },
  contentWrapper: { maxWidth: '1100px', margin: '0 auto', padding: '60px 20px' },
  section: { marginBottom: '80px' },
  h2: { fontSize: '2.1rem', color: '#2980b9', marginBottom: '25px', fontWeight: '700', borderBottom: '2px solid #2980b9', display: 'inline-block' },
  paragraph: { fontSize: '1.1rem', lineHeight: '1.8', color: '#444' },
  image: { width: '100%', borderRadius: '15px', marginTop: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' },
  list: { paddingLeft: '20px', fontSize: '1.1rem', lineHeight: '2.2', color: '#444' },
  infoBox: { background: '#fff', padding: '50px', borderRadius: '20px', borderTop: '8px solid #2980b9', marginBottom: '80px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' },
  stepGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '30px', marginTop: '40px' },
  stepCard: { textAlign: 'left', padding: '10px' },
  stepTitle: { color: '#2c3e50', marginBottom: '10px', fontSize: '1.2rem', fontWeight: 'bold' },
  faqQuestion: { color: '#2980b9', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '8px' },
  faqItem: { marginBottom: '30px', borderBottom: '1px solid #ddd', paddingBottom: '15px' },
  internalLinks: { background: '#2c3e50', color: 'white', padding: '60px', borderRadius: '20px' },
  h3: { textAlign: 'center', marginBottom: '40px', fontSize: '1.8rem' },
  linkGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '20px', textAlign: 'center' },
  footerLink: { color: '#3498db', textDecoration: 'none', fontSize: '1.1rem' }
};

export default AtticInsulation;