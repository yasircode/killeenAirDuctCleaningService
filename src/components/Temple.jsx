import React from 'react';

const Temple = () => {
  // --- INTERNAL STYLES (Mobile & Desktop Responsive) ---
  const styles = {
    container: {
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      color: '#2d3436',
      lineHeight: '1.7',
      margin: '0 auto',
      padding: '0',
      backgroundColor: '#ffffff',
    },
    hero: {
      background: 'linear-gradient(rgba(0, 41, 107, 0.85), rgba(0, 41, 107, 0.85)), url("https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '80px 20px',
      textAlign: 'center',
    },
    section: {
      maxWidth: '1000px',
      margin: '40px auto',
      padding: '0 20px',
    },
    h1: { fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '15px', fontWeight: '800' },
    h2: { 
      fontSize: '1.8rem', 
      color: '#00296b', 
      borderLeft: '5px solid #d9534f', 
      paddingLeft: '15px',
      marginTop: '40px',
      marginBottom: '20px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '25px',
      marginTop: '20px'
    },
    card: {
      backgroundColor: '#f8f9fa',
      padding: '25px',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      border: '1px solid #e9ecef'
    },
    ctaBox: {
      backgroundColor: '#00296b',
      color: 'white',
      padding: '50px 20px',
      textAlign: 'center',
      borderRadius: '15px',
      margin: '60px 20px'
    },
    button: {
      backgroundColor: '#d9534f',
      color: 'white',
      padding: '16px 35px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
      marginTop: '20px',
      transition: 'transform 0.2s'
    },
    faqContainer: {
      backgroundColor: '#f1f3f5',
      padding: '40px 20px',
      borderRadius: '10px'
    },
    faqItem: {
      marginBottom: '25px',
      paddingBottom: '15px',
      borderBottom: '1px solid #dee2e6'
    }
  };

  return (
    <div style={styles.container}>
      <br></br>
      <br></br>
      {/* HERO SECTION */}
      <header style={styles.hero}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <h1 style={styles.h1}>Air Duct Cleaning in Temple, TX | Killeen Air Duct Cleaners</h1>
          <p style={{fontSize: '1.2rem', opacity: '0.9'}}>Professional Air Quality Solutions for Central Texas Homes & Businesses</p>
        </div>
      </header>

      {/* INTRO SECTION */}
      <section style={styles.section}>
        <p>
          The <strong>Texas heat</strong> is relentless, and your AC works overtime to keep you cool. In Temple, this heavy usage leads to a rapid buildup of <strong>dust, allergens, and debris</strong> within your ventilation system. At Killeen Air Duct Cleaners, we focus on maximizing your home’s <strong>energy efficiency</strong> and ensuring the air your family breathes is clean and safe.
        </p>
      </section>

      {/* AIR DUCT CLEANING SECTION */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Air Duct Cleaning in Temple, TX</h2>
        <p>Our comprehensive <strong>duct cleaning Temple TX</strong> service ensures every corner of your system is addressed. We don't just vacuum vents; we perform a deep medical-grade cleaning.</p>
        <div style={styles.grid}>
          <div style={styles.card}>
            <strong>Full System Cleaning:</strong> We clean both supply and return vents to eliminate pet dander, dust, and mold spores.
          </div>
          <div style={styles.card}>
            <strong>Improved Airflow:</strong> Professional <strong>vent cleaning Temple</strong> removes blockages, allowing your HVAC to breathe easier.
          </div>
        </div>
      </section>

      {/* HVAC SYSTEM CLEANING SECTION */}
      <section style={styles.section}>
        <h2 style={styles.h2}>HVAC System Cleaning in Temple, TX</h2>
        <p>To target higher efficiency and bigger energy savings, our <strong>HVAC cleaning Temple TX</strong> includes the internal components that most cleaners skip.</p>
        <div style={styles.grid}>
          <ul style={{paddingLeft: '20px'}}>
            <li><strong>Blower Motor Cleaning:</strong> Improves mechanical longevity.</li>
            <li><strong>Evaporator Coil Cleaning:</strong> Boosts cooling performance.</li>
            <li><strong>Air Handler Cleaning:</strong> Ensures pure air at the source.</li>
          </ul>
          <ul style={{paddingLeft: '20px'}}>
            <li><strong>Lower Energy Bills:</strong> A clean system runs cheaper.</li>
            <li><strong>Prevent Breakdowns:</strong> Reduce <strong>AC system cleaning Temple</strong> emergency calls.</li>
          </ul>
        </div>
      </section>

      {/* DRYER VENT & CHIMNEY SECTION */}
      <section style={styles.section}>
        <div style={styles.grid}>
          <div>
            <h2 style={styles.h2}>Dryer Vent Cleaning</h2>
            <p>Lint is a major fire hazard. Our Temple team provides expert lint removal for faster drying times and <strong>fire hazard prevention</strong>.</p>
          </div>
          <div>
            <h2 style={styles.h2}>Chimney Sweep</h2>
            <p>Prepare for the cooler months with our <strong>creosote removal</strong> and fireplace inspection services in Temple, TX.</p>
          </div>
        </div>
      </section>

      {/* DUCT REPLACEMENT SECTION */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Air Duct Replacement in Temple, TX</h2>
        <p>Sometimes cleaning isn't enough. If you have <strong>new ductwork Temple</strong> needs, we provide high-ticket replacement services for:</p>
        <ul>
          <li>Old or torn flexible ductwork (15+ years old).</li>
          <li>Significant mold contamination or rodent damage.</li>
          <li>Crushed ducts causing poor airflow in specific rooms.</li>
        </ul>
        <p><em>Benefit: Total control over your indoor climate and maximum energy savings.</em></p>
      </section>

      {/* ATTIC INSULATION SECTION */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Attic Insulation Services in Temple, TX</h2>
        <p>In Texas, your attic can reach 150°F. Our <strong>attic insulation Temple TX</strong> services include blown-in insulation that acts as a thermal shield, drastically reducing the strain on your HVAC system.</p>
      </section>

      {/* CTA SECTION */}
      <div style={styles.ctaBox}>
        <h2 style={{color: 'white', border: 'none', padding: '0'}}>Get a Free Estimate in Temple, TX</h2>
        <p>Call Killeen Air Duct Cleaners today for professional air duct cleaning, HVAC cleaning, duct replacement, and insulation.</p>
        <div style={{display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}>
            <a href="tel:#" style={styles.button}>📞 Call Now</a>
            <a href="#contact" style={{...styles.button, backgroundColor: '#ffffff', color: '#00296b'}}>📩 Request Estimate</a>
        </div>
      </div>

      {/* FAQ SECTION */}
      <section style={{...styles.section, ...styles.faqContainer}}>
        <h2 style={{...styles.h2, border: 'none', textAlign: 'center'}}>Frequently Asked Questions</h2>
        <div style={styles.faqItem}>
          <h4 style={{marginBottom: '5px'}}>How do I know if my air ducts need replacement?</h4>
          <p>If your ducts are over 15 years old, have visible tears, or if you notice consistent dust despite regular cleaning, it's time for a replacement.</p>
        </div>
        <div style={styles.faqItem}>
          <h4 style={{marginBottom: '5px'}}>Does attic insulation really lower energy bills in Texas?</h4>
          <p>Absolutely. Proper <strong>blown-in insulation Temple</strong> can lower your cooling costs by up to 20% by preventing heat transfer from the attic into your living space.</p>
        </div>
        <div style={styles.faqItem}>
          <h4 style={{marginBottom: '5px'}}>What’s the difference between duct cleaning and HVAC cleaning?</h4>
          <p>Duct cleaning focuses on the tubes (vents), while HVAC cleaning includes the mechanical parts like coils, blowers, and air handlers.</p>
        </div>
      </section>

      {/* FOOTER AREA (Simple) */}
      <footer style={{textAlign: 'center', padding: '40px', color: '#777', fontSize: '0.9rem'}}>
        &copy; {new Date().getFullYear()} Killeen Air Duct Cleaners. Serving Temple, Belton, and surrounding areas.
      </footer>
    </div>
  );
};

export default Temple;