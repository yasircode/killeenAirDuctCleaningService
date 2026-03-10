import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ServiceAreas from './components/ServiceAreas';


const DryerVentInspection = () => {
  const { cityName } = useParams();

  // City name formatting (e.g., killeen-tx -> Killeen, TX)
  const displayCity = cityName
    ? cityName.split('-').map(word => word.toUpperCase()).join(' ').replace(' TX', ', TX')
    : "Killeen, TX";

  useEffect(() => {
    document.title = `Professional Dryer Vent Inspection in ${displayCity} | Fire Safety Check`;
    window.scrollTo(0, 0);
  }, [displayCity]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Certified Dryer Vent Inspection in ${displayCity}`,
    "serviceType": "Dryer Vent Safety Inspection",
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
          <source src="/dryer-inspection-bg.mp4" type="video/mp4" />
          <img src="/o11.jpeg" alt="Dryer Vent Inspection" />
        </video>
        <div style={styles.heroOverlay}>
          <h1 style={styles.h1}>Expert Dryer Vent Inspection in {displayCity}</h1>
          <p style={styles.subtext}>Prevent House Fires & Boost Dryer Efficiency. We Identify Clogs, Cracks, and Dangerous Lint Buildup Before They Become Disasters.</p>
          <div style={styles.btnGroup}>
            <a href="tel:2549983484" style={styles.ctaButton}>Get Instant Quote</a>
            <Link to="/contact" style={styles.secondaryBtn}>Schedule Inspection</Link>
          </div>
        </div>
      </section>

      <div style={styles.contentWrapper}>
        
        {/* Section 1: The Importance */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Is Your Dryer A Fire Hazard in {displayCity}?</h2>
          <p style={styles.paragraph}>
            Most homeowners in <strong>{displayCity}</strong> overlook the most dangerous appliance in their home: the dryer vent. Over time, lint bypasses the filter and settles in the vent pipe, creating a highly flammable blockage. Our specialized inspection service uses high-definition cameras to scan your entire vent line, ensuring there are no hidden gaps or bird nests restricting airflow. A simple inspection today can save your home from a devastating fire tomorrow.
          </p>
          <img src="/o11.jpeg" alt={`Professional Dryer Vent Camera Inspection in ${displayCity}`} style={styles.image} />
             <img src="/041.jpeg" alt={`Professional Dryer Vent Camera Inspection in ${displayCity}`} style={styles.image} />
                <img src="/033.jpeg" alt={`Professional Dryer Vent Camera Inspection in ${displayCity}`} style={styles.image} />
        </section>

        {/* Section 2: Warning Signs */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Warning Signs You Need An Inspection Immediately</h2>
          <p style={styles.paragraph}>
            If you notice any of these symptoms in your {displayCity} home, your vent system likely has a dangerous restriction:
          </p>
          <ul style={styles.list}>
            <li><strong>Long Dry Times:</strong> Clothes take more than one cycle to dry completely.</li>
            <li><strong>Excessive Heat:</strong> The top of the dryer or the laundry room feels unusually hot.</li>
            <li><strong>Burning Smell:</strong> A faint smell of scorched lint when the dryer is running.</li>
            <li><strong>No Airflow:</strong> The exterior vent flap doesn't open when the dryer is on.</li>
            <li><strong>Humidity:</strong> Moisture or fog appearing on the laundry room windows.</li>
          </ul>
        </section>

        {/* Section 3: Detailed Inspection Process */}
        <section style={styles.infoBox}>
          <h2 style={styles.h2}>Our 4-Point Safety Inspection Process</h2>
          <div style={styles.stepGrid}>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>1. Video Scanning</h3>
                <p>We use flexible borescope cameras to look deep inside the walls and check for disconnected joints or heavy clogs.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>2. Airflow Testing</h3>
                <p>Using digital anemometers, we measure the exit velocity of the air to ensure it meets manufacturer specs.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>3. Code Compliance</h3>
                <p>We verify if your vent material (like plastic flex) is outdated and needs a transition to fire-rated metal ducting.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>4. Back-Pressure Check</h3>
                <p>We test the static pressure to ensure your dryer motor isn't overworking, which prevents premature mechanical failure.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Efficiency & Savings */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Save Money & Energy in {displayCity}</h2>
          <p style={styles.paragraph}>
            A clogged dryer vent can increase your monthly electric bill by <strong>$15–$30</strong> because the dryer has to run twice as long. For residents in <strong>{displayCity}</strong>, regular inspections ensure your appliance operates at peak efficiency. Not only does this lower your energy costs, but it also extends the lifespan of your dryer, saving you thousands in replacement costs for heating elements and motors.
          </p>
        </section>

      
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
    zIndex: '2', padding: '20px', background: 'rgba(0, 0, 0, 0.65)', width: '100%', height: '100%', 
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' 
  },
  h1: { fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: '900', margin: '0 0 15px', lineHeight: '1.1', textTransform: 'capitalize' },
  subtext: { fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', maxWidth: '850px', opacity: '0.9', marginBottom: '35px' },
  btnGroup: { display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' },
  ctaButton: { background: '#d35400', color: 'white', padding: '18px 35px', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold', fontSize: '1.2rem', boxShadow: '0 4px 15px rgba(211,84,0,0.3)' },
  secondaryBtn: { background: 'transparent', border: '2px solid white', color: 'white', padding: '16px 35px', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' },
  
  contentWrapper: { maxWidth: '1200px', margin: '0 auto', padding: '60px 25px' },
  section: { marginBottom: '80px' },
  h2: { fontSize: '2.2rem', color: '#2c3e50', marginBottom: '25px', fontWeight: '800' },
  paragraph: { fontSize: '1.15rem', lineHeight: '1.9', color: '#4b5563' },
  image: { width: '100%', borderRadius: '12px', marginTop: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' },
  
  list: { paddingLeft: '25px', fontSize: '1.1rem', lineHeight: '2.2', color: '#4b5563' },
  infoBox: { background: '#f1f5f9', padding: '50px', borderRadius: '16px', marginBottom: '80px', border: '1px solid #e2e8f0' },
  
  stepGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '25px', marginTop: '40px' },
  stepCard: { padding: '30px', background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', transition: 'transform 0.3s ease' },
  stepTitle: { color: '#d35400', fontSize: '1.4rem', marginBottom: '10px', fontWeight: '700' },
  
  internalLinks: { background: '#1e293b', color: 'white', padding: '60px', borderRadius: '16px' },
  h3: { textAlign: 'center', marginBottom: '40px', fontSize: '1.8rem' },
  linkGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', textAlign: 'center' },
  footerLink: { color: '#cbd5e1', textDecoration: 'none', fontSize: '1.05rem', transition: '0.3s', '&:hover': { color: '#fb923c' } }
};

export default DryerVentInspection;