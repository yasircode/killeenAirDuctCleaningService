import React from 'react';

const KilleenCityPage = () => {
  // --- INTERNAL STYLES ---
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
      background: 'linear-gradient(rgba(0, 41, 107, 0.9), rgba(0, 41, 107, 0.9)), url("https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '100px 20px',
      textAlign: 'center',
    },
    section: {
      maxWidth: '1100px',
      margin: '50px auto',
      padding: '0 25px',
    },
    h1: { fontSize: 'clamp(2.2rem, 6vw, 3.5rem)', marginBottom: '20px', fontWeight: '800', lineHeight: '1.2' },
    h2: { 
      fontSize: '2rem', 
      color: '#00296b', 
      borderLeft: '6px solid #d9534f', 
      paddingLeft: '20px',
      marginTop: '50px',
      marginBottom: '25px',
      fontWeight: '700'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '25px',
      marginTop: '30px'
    },
    card: {
      backgroundColor: '#f8f9fa',
      padding: '25px',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
      border: '1px solid #e9ecef'
    },
    ctaBox: {
      backgroundColor: '#00296b',
      color: 'white',
      padding: '60px 20px',
      textAlign: 'center',
      borderRadius: '20px',
      margin: '80px 25px'
    },
    button: {
      backgroundColor: '#d9534f',
      color: 'white',
      padding: '18px 45px',
      fontSize: '1.3rem',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
      marginTop: '25px',
      transition: '0.3s'
    },
    faqContainer: {
      backgroundColor: '#f1f3f5',
      padding: '50px 25px',
      borderRadius: '15px'
    },
    faqItem: {
      marginBottom: '25px',
      paddingBottom: '15px',
      borderBottom: '1px solid #dee2e6'
    }
  };

  return (
    <div style={styles.container}>
      {/* HERO SECTION */}
      <header style={styles.hero}>
        <div style={{maxWidth: '1000px', margin: '0 auto'}}>
          <h1 style={styles.h1}>Air Duct Cleaning in Killeen, TX | Killeen Air Duct Cleaners</h1>
          <p style={{fontSize: '1.3rem', opacity: '0.9'}}>Professional Air Quality, HVAC Cleaning & Attic Insulation for Central Texas</p>
          <a href="#quote" style={styles.button}>Get Free Estimate</a>
        </div>
      </header>

      {/* INTRO SECTION (LOCALIZED) */}
      <section style={styles.section}>
        <p style={{fontSize: '1.1rem'}}>
          Killeen Air Duct Cleaners proudly provides professional <strong>air duct cleaning, HVAC cleaning, dryer vent cleaning, chimney sweep, duct replacement, and attic insulation services in Killeen, TX</strong>. With Central Texas heat and year-round air conditioning use, homes in Killeen experience heavy dust buildup and airflow issues. Whether you live near <strong>Fort Cavazos</strong>, in neighborhoods off <strong>Rancier Avenue</strong>, or newer developments, we help you lower energy bills and improve indoor air quality.
        </p>
      </section>

      {/* 1. AIR DUCT CLEANING */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Air Duct Cleaning in Killeen, TX</h2>
        <p>In Killeen’s dry and windy conditions, buildup happens fast. Our professional <strong>duct cleaning Killeen TX</strong> service includes:</p>
        <div style={styles.grid}>
          <div style={styles.card}>
            <strong>Full System Cleaning:</strong> We clean both supply and return vents, removing dust, pet dander, and mold spores.
          </div>
          <div style={styles.card}>
            <strong>Improved Airflow:</strong> Professional <strong>vent cleaning Killeen</strong> removes debris to help your HVAC system breathe.
          </div>
        </div>
      </section>

      {/* 2. HVAC SYSTEM CLEANING (Bigger Jobs) */}
      <section style={styles.section}>
        <h2 style={styles.h2}>HVAC System Cleaning in Killeen, TX</h2>
        <p>Targeting the mechanical components is critical for performance. Our <strong>HVAC cleaning Killeen TX</strong> includes:</p>
        <div style={styles.grid}>
          <ul style={{paddingLeft: '20px'}}>
            <li><strong>Blower Motor:</strong> Removes dust to prevent friction.</li>
            <li><strong>Evaporator Coils:</strong> Essential for cooling performance.</li>
            <li><strong>Air Handler:</strong> Cleans the source of your air.</li>
            <li><strong>Return Plenum:</strong> Ensures the intake is sanitized.</li>
          </ul>
          <div style={styles.card}>
            <strong>Benefits:</strong> Lower energy bills, better cooling in Texas heat, and prevention of expensive system breakdowns.
          </div>
        </div>
      </section>

      {/* 3. DRYER VENT CLEANING (Fire Safety) */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Dryer Vent Cleaning in Killeen, TX</h2>
        <p>Clogged dryer vents are a leading cause of home fires. Our <strong>fire hazard prevention</strong> service includes:</p>
        <div style={styles.grid}>
          <div style={styles.card}>✔ Complete Lint Removal</div>
          <div style={styles.card}>✔ Faster Drying Times</div>
          <div style={styles.card}>✔ Annual Safety Maintenance</div>
          <div style={styles.card}>✔ Reduced Fire Risk</div>
        </div>
      </section>

      {/* 4. CHIMNEY SWEEP */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Chimney Sweep Services in Killeen, TX</h2>
        <p>Prepare for the Central Texas winter with our fall fireplace prep:</p>
        <ul>
          <li><strong>Creosote Removal:</strong> Eliminating dangerous flammable buildup.</li>
          <li><strong>Fireplace Inspection:</strong> Checking for draft issues and safety.</li>
          <li><strong>Smoke Draft Correction:</strong> Ensuring smoke leaves your home properly.</li>
        </ul>
      </section>

      {/* 5. AIR DUCT REPLACEMENT (High-Ticket) */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Air Duct Replacement in Killeen, TX</h2>
        <p>Sometimes cleaning isn't enough. Signs you need <strong>duct replacement Killeen</strong>:</p>
        <div style={styles.grid}>
          <div style={styles.card}>
            <strong>When to Replace:</strong>
            <p>Old flex ductwork (15+ years), torn/crushed ducts, rodent damage, or severe mold contamination.</p>
          </div>
          <div style={styles.card}>
            <strong>The Result:</strong>
            <p>Perfect <strong>air duct installation Killeen</strong> leads to balanced airflow, silent operation, and maximum energy savings.</p>
          </div>
        </div>
      </section>

      {/* 6. ATTIC INSULATION (Energy Savings) */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Attic Insulation Services in Killeen, TX</h2>
        <p>Texas summers are brutal. <strong>Attic insulation Killeen TX</strong> is the best way to lower your utility bills.</p>
        <ul>
          <li><strong>Blown-in Insulation:</strong> High-efficiency energy barrier.</li>
          <li><strong>Insulation Removal:</strong> Getting rid of old, dusty insulation.</li>
          <li><strong>Temperature Control:</strong> Keeps your home cooler and reduces HVAC strain.</li>
        </ul>
      </section>

      {/* 7. INDOOR UV LIGHT PURIFICATION */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Indoor UV Light Purification in Killeen, TX</h2>
        <p>For maximum health, we install UV purification systems directly into your HVAC unit to neutralize airborne pathogens and prevent mold growth on your coils.</p>
      </section>

      {/* WHY CHOOSE US */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Why Choose Killeen Air Duct Cleaners?</h2>
        <div style={styles.grid}>
          <p>• Locally owned & operated</p>
          <p>• Professional-grade equipment</p>
          <p>• Honest, transparent pricing</p>
          <p>• Fast, reliable response times</p>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section style={styles.ctaBox} id="quote">
        <h2 style={{color: 'white', border: 'none', padding: '0'}}>Schedule Service in Killeen Today</h2>
        <p style={{fontSize: '1.2rem'}}>Contact us for a free estimate on Air Duct, HVAC, Insulation, or Chimney services.</p>
        <a href="tel:YOUR-PHONE" style={styles.button}>📞 Call Killeen Cleaners Now</a>
      </section>

      {/* FAQ SECTION */}
      <section style={styles.section}>
        <div style={styles.faqContainer}>
          <h2 style={{marginTop: '0'}}>Frequently Asked Questions</h2>
          <div style={styles.faqItem}>
            <strong>How often should air ducts be cleaned in Killeen, TX?</strong>
            <p>Every 2–3 years due to heavy dust and year-round AC usage.</p>
          </div>
          <div style={styles.faqItem}>
            <strong>How do I know if my air ducts need replacement?</strong>
            <p>If they are over 15 years old, damaged by rodents, or causing major airflow problems.</p>
          </div>
          <div style={styles.faqItem}>
            <strong>Does attic insulation really lower energy bills in Texas?</strong>
            <p>Yes. It reduces heat transfer from the attic into your home, lowering cooling costs significantly.</p>
          </div>
          <div style={styles.faqItem}>
            <strong>What’s the difference between duct cleaning and HVAC cleaning?</strong>
            <p>Duct cleaning focuses on the vents; HVAC cleaning includes internal components like coils and blowers.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KilleenCityPage;