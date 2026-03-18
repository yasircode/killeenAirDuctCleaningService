import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ServiceAreas from './components/ServiceAreas';
import Yasir from './components/Yasir';

const DryerVentBlockage = () => {
  const { cityName } = useParams();

  const displayCity = cityName
    ? cityName.split('-').map(word => word.toUpperCase()).join(' ').replace(' TX', ', TX')
    : "Killeen, TX";

  useEffect(() => {
    document.title = `Emergency Dryer Vent Blockage Removal in ${displayCity} | Clear Clogs`;
    window.scrollTo(0, 0);
  }, [displayCity]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Dryer Vent Blockage & Obstruction Removal in ${displayCity}`,
    "serviceType": "Emergency Duct Cleaning",
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
          <source src="/blockage-removal-bg.mp4" type="video/mp4" />
          <img src="/blockage-banner.jpg" alt="Dryer Vent Blockage Removal" />
        </video>
        <div style={styles.heroOverlay}>
          <h1 style={styles.h1}>Expert Blockage Removal in {displayCity}</h1>
          <p style={styles.subtext}>Is Your Vent 100% Blocked? We Remove Bird Nests, Compressed Lint Clogs, and Debris That Standard Brushes Can't Reach.</p>
          <div style={styles.btnGroup}>
            <a href="tel:2549983484" style={styles.ctaButton}>Clear My Blockage</a>
            <Link to="/contact" style={styles.secondaryBtn}>Emergency Service</Link>
          </div>
        </div>
      </section>

      <div style={styles.contentWrapper}>
        
        {/* Section 1: Types of Blockages */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Serious Obstructions Require Serious Solutions</h2>
          <p style={styles.paragraph}>
            In <strong>{displayCity}</strong>, a blocked dryer vent is more than an inconvenience—it's a critical safety hazard. Sometimes, a simple cleaning isn't enough because the blockage is solid. Whether it's a <strong>bird's nest</strong> built during the spring, a <strong>rodent infestation</strong>, or <strong>"wet lint"</strong> that has turned into a cement-like plug, our team has the heavy-duty extraction tools to clear your lines completely without damaging your ductwork.
          </p>
          <img src="/040.jpeg" alt={`Removing Bird Nest Blockage from Dryer Vent in ${displayCity}`} style={styles.image} />
          <img src="/o10.jpeg" alt={`Removing Bird Nest Blockage from Dryer Vent in ${displayCity}`} style={styles.image} />
          <img src="/041.jpeg" alt={`Removing Bird Nest Blockage from Dryer Vent in ${displayCity}`} style={styles.image} />
        </section>

        {/* Section 2: Severe Symptoms */}
        <section style={styles.section}>
          <h2 style={styles.h2}>How to Tell Your Vent is Completely Blocked</h2>
          <p style={styles.paragraph}>
            If you experience any of these "Total Blockage" symptoms in your {displayCity} home, stop using your dryer immediately:
          </p>
          <ul style={styles.list}>
            <li><strong>Automatic Shut-off:</strong> The dryer turns off mid-cycle due to high-limit heat sensors.</li>
            <li><strong>Zero Airflow:</strong> No air is felt coming out of the exterior vent hood while the dryer is on.</li>
            <li><strong>Exterior Flap is Stuck:</strong> Debris or nests have physically jammed the vent door.</li>
            <li><strong>Condensation Puddles:</strong> Water is pooling inside the vent pipe or behind the dryer.</li>
            <li><strong>Visible Debris:</strong> Seeing twigs, straw, or feathers sticking out of your vent opening.</li>
          </ul>
        </section>

        {/* Section 3: Specialized Extraction Process */}
        <section style={styles.infoBox}>
          <h2 style={styles.h2}>Our Blockage Extraction Strategy</h2>
          <div style={styles.stepGrid}>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>HD Inspection</h3>
                <p>We start with a high-definition camera to identify the exact location and nature of the blockage (Nest vs. Lint).</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Nest Removal</h3>
                <p>Using specialized retrieval hooks, we carefully extract bird nests and nesting materials without leaving debris behind.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Pneumatic Air-Whips</h3>
                <p>For heavy lint clogs, we use 200 PSI air-whips that blast the blockage apart from the inside out.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>Sanitization</h3>
                <p>After removing biological blockages (like nests), we treat the area with antimicrobial spray to ensure air quality.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Blockage-Specific FAQs */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Dryer Vent Blockage: Common Questions</h2>
          <div style={{marginTop: '30px'}}>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>Can a bird nest in my vent cause a fire?</h4>
              <p style={styles.paragraph}>Absolutely. Bird nests are made of highly flammable straw and twigs. When combined with hot dryer air and trapped lint, they become the perfect fuel for a house fire in {displayCity}.</p>
            </div>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>What if the blockage is deep inside the wall?</h4>
              <p style={styles.paragraph}>Our industrial equipment is designed to reach up to 50 feet inside ductwork. We can clear obstructions hidden deep within walls or floor joists without cutting into your drywall.</p>
            </div>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>How do I prevent birds from nesting in my vent again?</h4>
              <p style={styles.paragraph}>As part of our blockage service in {displayCity}, we offer the installation of bird-proof vent covers that allow air to flow out but keep animals and debris from getting in.</p>
            </div>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>Is a "blocked" vent more dangerous than a "dirty" vent?</h4>
              <p style={styles.paragraph}>Yes. A dirty vent restricts flow, but a blocked vent stops it. This causes heat to build up rapidly inside the dryer's drum, which can lead to immediate mechanical failure or fire.</p>
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
    zIndex: '2', padding: '20px', background: 'rgba(0, 0, 0, 0.75)', width: '100%', height: '100%', 
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' 
  },
  h1: { fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: '900', margin: '0 0 15px', lineHeight: '1.1' },
  subtext: { fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', maxWidth: '850px', opacity: '0.9', marginBottom: '35px' },
  btnGroup: { display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' },
  ctaButton: { background: '#8e44ad', color: 'white', padding: '18px 35px', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold', fontSize: '1.2rem', boxShadow: '0 4px 15px rgba(142,68,173,0.3)' },
  secondaryBtn: { background: 'transparent', border: '2px solid white', color: 'white', padding: '16px 35px', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' },
  
  contentWrapper: { maxWidth: '1200px', margin: '0 auto', padding: '60px 25px' },
  section: { marginBottom: '80px' },
  h2: { fontSize: '2.2rem', color: '#2c3e50', marginBottom: '25px', fontWeight: '800' },
  paragraph: { fontSize: '1.15rem', lineHeight: '1.9', color: '#4b5563' },
  image: { width: '100%', borderRadius: '12px', marginTop: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' },
  
  list: { paddingLeft: '25px', fontSize: '1.1rem', lineHeight: '2.2', color: '#4b5563', marginBottom: '30px' },
  infoBox: { background: '#f3e5f5', padding: '50px', borderRadius: '16px', marginBottom: '80px', border: '1px solid #e1bee7' },
  
  stepGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '25px', marginTop: '40px' },
  stepCard: { padding: '30px', background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' },
  stepTitle: { color: '#8e44ad', fontSize: '1.4rem', marginBottom: '10px', fontWeight: '700' },

  faqItem: { marginBottom: '30px', borderBottom: '1px solid #eee', paddingBottom: '20px' },
  faqQuestion: { fontSize: '1.3rem', color: '#2c3e50', marginBottom: '10px', fontWeight: '700' },
  
  internalLinks: { background: '#2c3e50', color: 'white', padding: '60px', borderRadius: '16px' },
  h3: { textAlign: 'center', marginBottom: '40px', fontSize: '1.8rem' },
  linkGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', textAlign: 'center' },
  footerLink: { color: '#bdc3c7', textDecoration: 'none', fontSize: '1.05rem', transition: '0.3s', '&:hover': { color: '#a29bfe' } }
};

export default DryerVentBlockage;