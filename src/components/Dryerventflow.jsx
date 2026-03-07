import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Dryerventflow = () => {
  const { cityName } = useParams();

  const displayCity = cityName
    ? cityName.split('-').map(word => word.toUpperCase()).join(' ').replace(' TX', ', TX')
    : "Killeen, TX";

  useEffect(() => {
    document.title = `Certified Dryer Vent Airflow Testing in ${displayCity} | Performance Check`;
    window.scrollTo(0, 0);
  }, [displayCity]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Professional Dryer Vent Airflow Testing in ${displayCity}`,
    "serviceType": "HVAC Performance Diagnostic",
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
          <source src="/airflow-test-bg.mp4" type="video/mp4" />
          <img src="/airflow-testing-banner.jpg" alt="Dryer Vent Airflow Testing" />
        </video>
        <div style={styles.heroOverlay}>
          <h1 style={styles.h1}>Scientific Airflow Testing in {displayCity}</h1>
          <p style={styles.subtext}>Don't Guess—Measure. We Use Digital Anemometers to Verify Your Dryer's CFM Output and Ensure Peak Mechanical Performance.</p>
          <div style={styles.btnGroup}>
            <a href="tel:2549983484" style={styles.ctaButton}>Test My Airflow</a>
            <Link to="/contact" style={styles.secondaryBtn}>Get Diagnostic Quote</Link>
          </div>
        </div>
      </section>

      <div style={styles.contentWrapper}>
        
        {/* Section 1: Why Testing? */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Precise Diagnostics for Your Exhaust System</h2>
          <p style={styles.paragraph}>
            Many homeowners in <strong>{displayCity}</strong> assume that if the dryer is running, the vent is fine. However, low airflow is a silent killer for dryer heating elements. Our <strong>Airflow Testing Service</strong> goes beyond a visual check. We measure the actual velocity (FPM) and volume (CFM) of the air exiting your vent. If the flow is below manufacturer specifications, your dryer works twice as hard, wasting energy and increasing the risk of a lint-fueled fire.
          </p>
          
          <img src="/airflow-diagnostic-tool.jpg" alt={`Digital Airflow Velocity Test in ${displayCity}`} style={styles.image} />
        </section>

        {/* Section 2: Performance Metrics */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Key Benefits of Professional Testing</h2>
          <p style={styles.paragraph}>
            Our diagnostic service provides data-driven results for your {displayCity} property:
          </p>
          <ul style={styles.list}>
            <li><strong>CFM Verification:</strong> Ensuring the Cubic Feet per Minute matches the dryer’s design.</li>
            <li><strong>Back-Pressure Analysis:</strong> Identifying if internal duct resistance is straining the motor.</li>
            <li><strong>Thermal Imaging:</strong> Checking for heat leaks along the vent line that indicate gaps.</li>
            <li><strong>Efficiency Audit:</strong> Calculating potential energy savings with restored airflow.</li>
            <li><strong>Safety Certification:</strong> Documenting that your vent meets fire safety flow standards.</li>
          </ul>
        </section>

        {/* Section 3: The Testing Protocol */}
        <section style={styles.infoBox}>
          <h2 style={styles.h2}>Our Airflow Analysis Steps</h2>
          <div style={styles.stepGrid}>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Baseline Reading</h3>
                <p>We measure the air speed directly at the back of the dryer to see what the machine is capable of producing.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Exit Velocity</h3>
                <p>We test the air at the exterior termination point. A significant drop indicates a hidden clog or crushed pipe.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Static Pressure</h3>
                <p>Using a manometer, we check for "choke points" in the turns and elbows of your ductwork.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Post-Fix Audit</h3>
                <p>After any necessary cleaning or repair, we re-test to provide you with a 'Before & After' performance report.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Airflow Specific FAQs */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Airflow Testing FAQs</h2>
          <div style={{marginTop: '30px'}}>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>What is a "good" airflow reading for a dryer?</h4>
              <p style={styles.paragraph}>Most residential dryers require an exit velocity of at least 1,500 feet per minute (FPM). If your {displayCity} home tests below 1,000 FPM, it is considered a fire hazard and needs immediate attention.</p>
            </div>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>Can poor airflow damage my brand-new dryer?</h4>
              <p style={styles.paragraph}>Yes. Modern dryers have sensitive sensors. Poor airflow causes them to run hotter and longer, which often leads to blown thermal fuses and burnt-out heating elements within the first year.</p>
            </div>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>How long does the testing process take?</h4>
              <p style={styles.paragraph}>A standard airflow diagnostic takes about 30 to 45 minutes. It is a non-invasive process that provides a clear picture of your system's health.</p>
            </div>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>Is airflow testing included in a standard cleaning?</h4>
              <p style={styles.paragraph}>We include a basic flow check with every cleaning in {displayCity}, but our "Advanced Diagnostic" is a separate service for complex systems or troubleshooting recurring issues.</p>
            </div>
          </div>
        </section>

        {/* Section 5: Geo-Links */}
        <section style={styles.internalLinks}>
          <h3 style={styles.h3}>Diagnostic Testing Services in Central Texas</h3>
          <div style={styles.linkGrid}>
            <Link style={styles.footerLink} to="/airflow-testing/killeen-tx">Killeen Testing</Link>
            <Link style={styles.footerLink} to="/airflow-testing/temple-tx">Temple Testing</Link>
            <Link style={styles.footerLink} to="/airflow-testing/belton-tx">Belton Testing</Link>
            <Link style={styles.footerLink} to="/airflow-testing/harker-heights-tx">Harker Heights</Link>
            <Link style={styles.footerLink} to="/airflow-testing/copperas-cove-tx">Copperas Cove</Link>
            <Link style={styles.footerLink} to="/airflow-testing/waco-tx">Waco Testing</Link>
            <Link style={styles.footerLink} to="/airflow-testing/georgetown-tx">Georgetown Testing</Link>
            <Link style={styles.footerLink} to="/airflow-testing/salado-tx">Salado Testing</Link>
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
  ctaButton: { background: '#2980b9', color: 'white', padding: '18px 35px', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold', fontSize: '1.2rem', boxShadow: '0 4px 15px rgba(41,128,185,0.3)' },
  secondaryBtn: { background: 'transparent', border: '2px solid white', color: 'white', padding: '16px 35px', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' },
  
  contentWrapper: { maxWidth: '1200px', margin: '0 auto', padding: '60px 25px' },
  section: { marginBottom: '80px' },
  h2: { fontSize: '2.2rem', color: '#2c3e50', marginBottom: '25px', fontWeight: '800' },
  paragraph: { fontSize: '1.15rem', lineHeight: '1.9', color: '#4b5563' },
  image: { width: '100%', borderRadius: '12px', marginTop: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' },
  
  list: { paddingLeft: '25px', fontSize: '1.1rem', lineHeight: '2.2', color: '#4b5563', marginBottom: '30px' },
  infoBox: { background: '#ebf8ff', padding: '50px', borderRadius: '16px', marginBottom: '80px', border: '1px solid #bee3f8' },
  
  stepGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '25px', marginTop: '40px' },
  stepCard: { padding: '30px', background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' },
  stepTitle: { color: '#2980b9', fontSize: '1.4rem', marginBottom: '10px', fontWeight: '700' },

  faqItem: { marginBottom: '30px', borderBottom: '1px solid #eee', paddingBottom: '20px' },
  faqQuestion: { fontSize: '1.3rem', color: '#2c3e50', marginBottom: '10px', fontWeight: '700' },
  
  internalLinks: { background: '#2d3748', color: 'white', padding: '60px', borderRadius: '16px' },
  h3: { textAlign: 'center', marginBottom: '40px', fontSize: '1.8rem' },
  linkGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', textAlign: 'center' },
  footerLink: { color: '#a0aec0', textDecoration: 'none', fontSize: '1.05rem', transition: '0.3s', '&:hover': { color: '#63b3ed' } }
};

export default Dryerventflow;