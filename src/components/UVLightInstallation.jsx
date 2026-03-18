import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ServiceAreas from './ServiceAreas';
import Yasir from './Yasir';


const UVLightInstallation = () => {
  const { cityName } = useParams();

  // Formatting location for display
  const displayCity = cityName
    ? cityName.split('-').map(word => word.toUpperCase()).join(' ').replace(' TX', ', TX')
    : "Killeen, TX";

  useEffect(() => {
    document.title = `UV Light Air Purification in ${displayCity} | Killeen Air Duct Cleaning`;
    window.scrollTo(0, 0);
  }, [displayCity]);

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": `HVAC UV Light Installation in ${displayCity}`,
        "serviceType": "Air Purification Service",
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
            "name": `Why should I install UV lights in my ${displayCity} home?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `In ${displayCity}, high humidity can cause mold growth on AC coils. Killeen Air Duct Cleaning installs UV lights to kill 99.9% of bacteria and viruses, ensuring pure indoor air.`
            }
          },
          {
            "@type": "Question",
            "name": "How long do HVAC UV bulbs last?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most germicidal UV bulbs stay effective for about 9,000 hours, which means Killeen Air Duct Cleaning recommends a replacement once every 12 months for peak performance."
            }
          },
          {
            "@type": "Question",
            "name": "Is UV light safe for my family?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The UV lights are installed inside your ductwork or air handler. Killeen Air Duct Cleaning uses safety interlocks to ensure no direct exposure to your living space."
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

      {/* Hero Section: Futuristic & Clean Focus */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.h1}>Killeen Air Duct Cleaning: UV Purification in {displayCity}</h1>
          <p style={styles.subtext}>Eliminate 99.9% of Airborne Pathogens. Medical-Grade UV-C Technology for Your {displayCity} HVAC System.</p>
          <div style={styles.btnGroup}>
            <a href="tel:2549983484" style={styles.ctaButton}>Free Air Quality Audit</a>
            <Link to="/contact" style={styles.secondaryBtn}>Explore UV Models</Link>
          </div>
        </div>
      </section>

      <div style={styles.contentWrapper}>
        
        {/* Section 1: The Power of UV-C */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Pure Air Through Light Science in {displayCity}</h2>
          <p style={styles.paragraph}>
            Standard filters trap dust, but they can't stop microscopic bacteria and viruses. In <strong>{displayCity}</strong>, the high humidity inside AC units creates a perfect breeding ground for mold on evaporator coils. At <strong>Killeen Air Duct Cleaning</strong>, our UV-C Light Purification systems use specific germicidal wavelengths to scramble the DNA of organic contaminants, rendering them harmless. By installing UV lights directly into your HVAC system, you turn your existing ductwork into a 24/7 air sterilization chamber.
          </p>
          
          
          <img src="/o7.jpeg" alt={`UV-C Light Installation in ${displayCity}`} style={styles.image} />
        </section>

        {/* Section 2: Benefits of UV Sterilization */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Why Killeen Air Duct Cleaning for Your {displayCity} Home?</h2>
          <p style={styles.paragraph}>
            UV purification is an essential upgrade for families concerned about respiratory health and system efficiency:
          </p>
          <ul style={styles.list}>
            <li><strong>Pathogen Neutralization:</strong> Effectively kills airborne viruses, bacteria, and flu germs as they pass through the vents.</li>
            <li><strong>Stops "Dirty Sock" Syndrome:</strong> Eliminates the mold and mildew on coils that cause damp, musty odors in {displayCity} homes.</li>
            <li><strong>Enhanced Airflow:</strong> By keeping coils clean of bio-growth, your HVAC system breathes easier and lasts longer.</li>
            <li><strong>Allergy Relief:</strong> Reduces the concentration of mold spores and organic allergens circulating in your rooms.</li>
            <li><strong>Chemical-Free:</strong> A natural, light-based solution that doesn't release ozone or harmful byproducts.</li>
          </ul>
        </section>

        {/* Section 3: Professional Implementation */}
        <section style={styles.infoBox}>
          <h2 style={styles.h2}>Killeen Air Duct Cleaning: UV Installation Process</h2>
          <div style={styles.stepGrid}>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>1. Placement Analysis</h3>
                <p>We determine if your system needs Coil-Shine (direct surface) or Air-Stream (in-duct) UV treatment.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>2. Precision Mounting</h3>
                <p>Expertly installing high-output UV lamps to ensure maximum exposure to the air handler's internal surfaces.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>3. Safety Interlock</h3>
                <p>Wiring the system with safety switches to prevent accidental UV exposure during routine {displayCity} maintenance.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>4. Verification</h3>
                <p>Testing the ballast and lamp intensity to confirm your air is being sterilized at peak performance.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section (New) */}
        <section style={styles.section}>
          <h2 style={styles.h2}>FAQs: Air Purification in {displayCity}</h2>
          <div style={styles.faqContainer}>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>Does UV light really kill viruses?</h4>
              <p style={styles.paragraph}>Yes, UV-C light is scientifically proven to destroy the nucleic acids in microorganisms, preventing them from replicating. <strong>Killeen Air Duct Cleaning</strong> uses medical-grade bulbs for this purpose.</p>
            </div>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>Can I install the UV light myself?</h4>
              <p style={styles.paragraph}>We highly recommend professional installation by <strong>Killeen Air Duct Cleaning</strong>. UV-C light is harmful to eyes and skin, and improper wiring can damage your HVAC control board.</p>
            </div>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>Is maintenance expensive?</h4>
              <p style={styles.paragraph}>Maintenance is simple! You only need to replace the UV bulb once a year. Killeen Air Duct Cleaning offers affordable bulb replacement services in {displayCity}.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Efficiency & Maintenance */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Maintain a Healthy Thermal Envelope in {displayCity}</h2>
          <p style={styles.paragraph}>
            A cleaner HVAC unit is a more efficient one. When mold builds up on your cooling coils, it acts as an insulator, forcing your system to work harder to cool your <strong>{displayCity}</strong> home. UV lights installed by <strong>Killeen Air Duct Cleaning</strong> keep those coils pristine, maintaining optimal heat exchange and lowering your energy consumption.
          </p>
        </section>
<Yasir/>
       <ServiceAreas/>
      </div>
    </div>
  );
};

const styles = {
  container: { backgroundColor: '#faffff', color: '#1a3a3a', fontFamily: '"Lexend", sans-serif' },
  hero: { 
    height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', 
    background: 'radial-gradient(circle, #2c3e50 0%, #000000 100%)', textAlign: 'center', color: 'white' 
  },
  heroOverlay: { padding: '30px', maxWidth: '1000px' },
  h1: { fontSize: 'clamp(1.5rem, 5vw, 3rem)', fontWeight: '800', textShadow: '0 0 15px #3498db', textTransform: 'uppercase' },
  subtext: { fontSize: '1.2rem', marginTop: '20px', color: '#bdc3c7', letterSpacing: '0.5px' },
  btnGroup: { display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '35px' },
  ctaButton: { background: '#3498db', color: 'white', padding: '16px 34px', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold', boxShadow: '0 0 20px rgba(52, 152, 219, 0.4)' },
  secondaryBtn: { background: 'transparent', border: '1px solid #3498db', color: '#3498db', padding: '16px 34px', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' },
  contentWrapper: { maxWidth: '1150px', margin: '0 auto', padding: '70px 25px' },
  section: { marginBottom: '80px' },
  h2: { fontSize: '2.1rem', color: '#2c3e50', marginBottom: '25px', borderLeft: '6px solid #3498db', paddingLeft: '20px' },
  paragraph: { fontSize: '1.1rem', lineHeight: '1.85', color: '#34495e' },
  image: { width: '100%', borderRadius: '8px', marginTop: '30px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' },
  list: { paddingLeft: '20px', fontSize: '1.1rem', lineHeight: '2.4' },
  infoBox: { background: '#ebf5fb', padding: '50px', borderRadius: '15px', marginBottom: '80px' },
  stepGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '25px', marginTop: '40px' },
  stepCard: { padding: '25px', background: 'white', borderRadius: '10px', textAlign: 'center', borderBottom: '4px solid #3498db' },
  stepTitle: { color: '#2980b9', marginBottom: '12px', fontSize: '1.25rem', fontWeight: 'bold' },
  faqContainer: { marginTop: '20px', background: '#fff', padding: '25px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' },
  faqItem: { marginBottom: '20px', borderBottom: '1px solid #eee', pb: '15px' },
  faqQuestion: { color: '#3498db', fontSize: '1.2rem', marginBottom: '8px', fontWeight: 'bold' },
  internalLinks: { background: '#1c2833', color: 'white', padding: '60px', borderRadius: '15px' },
  h3: { textAlign: 'center', marginBottom: '40px', fontSize: '1.8rem' },
  linkGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '20px', textAlign: 'center' },
  footerLink: { color: '#5dade2', textDecoration: 'none', fontSize: '1.1rem' }
};

export default UVLightInstallation;