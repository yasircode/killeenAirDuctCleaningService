import React from 'react';

const KilleenDuctCleaning = () => {
  const styles = {
    wrapper: {
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: '#2d3436',
      backgroundColor: '#f8f9fa',
      lineHeight: '1.8',
      margin: 0,
    },
    header: {
      background: 'linear-gradient(rgba(0, 51, 102, 0.85), rgba(0, 51, 102, 0.85)), url("https://images.unsplash.com/photo-1581094288338-2314dddb790b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")', // Professional Background Hint
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '100px 20px',
      textAlign: 'center',
    },
    heroH1: {
      fontSize: 'clamp(1.8rem, 6vw, 3.2rem)',
      margin: '0 0 20px 0',
      fontWeight: '850',
      lineHeight: '1.2',
    },
    accentBar: {
      height: '5px',
      width: '80px',
      backgroundColor: '#00d2ff',
      margin: '20px auto',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
    },
    introBox: {
      background: 'white',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
      marginTop: '-80px',
      position: 'relative',
      zIndex: 2,
    },
    sectionTitle: {
      color: '#003366',
      fontSize: '2rem',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    serviceGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
      gap: '30px',
      margin: '50px 0',
    },
    card: {
      backgroundColor: 'white',
      padding: '35px',
      borderRadius: '15px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.03)',
      borderTop: '6px solid #0056b3',
      transition: 'transform 0.3s ease',
    },
    list: {
      paddingLeft: '20px',
      color: '#444',
    },
    highlight: {
      color: '#0056b3',
      fontWeight: '700',
    },
    ctaArea: {
      backgroundColor: '#003366',
      color: 'white',
      padding: '60px 30px',
      borderRadius: '25px',
      textAlign: 'center',
      margin: '60px 0',
    },
    btn: {
      padding: '18px 40px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      borderRadius: '50px',
      border: 'none',
      cursor: 'pointer',
      margin: '10px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    },
    faqItem: {
      backgroundColor: '#fff',
      padding: '25px',
      borderRadius: '12px',
      marginBottom: '15px',
      borderLeft: '5px solid #00d2ff',
    }
  };

  return (
    <div style={styles.wrapper}>
      {/* --- HERO --- */}
      <header style={styles.header}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={styles.heroH1}>Air Duct Cleaning in Killeen, TX | Killeen Air Duct Cleaners</h1>
          <div style={styles.accentBar}></div>
          <p style={{ fontSize: '1.4rem', fontWeight: '300' }}>
            Breathe Cleaner, Live Better. Your Local Air Quality Experts.
          </p>
        </div>
      </header>

      <div style={styles.container}>
        {/* --- INTRO --- */}
        <section style={styles.introBox}>
          <p>
            <strong>Killeen Air Duct Cleaners</strong> provides professional air duct cleaning, HVAC system cleaning, 
            dryer vent cleaning, chimney sweep, duct replacement, attic insulation, and indoor UV light purification 
            services throughout <strong>Killeen, TX</strong>.
          </p>
          <p>
            With extreme Central Texas heat and nearly year-round air conditioning use, HVAC systems in Killeen homes 
            operate constantly. From homes near <strong>Fort Cavazos</strong> to established neighborhoods off 
            <strong> Rancier Avenue</strong> and <strong>Stan Schlueter Loop</strong>, we deliver safe, thorough, 
            and efficient solutions designed for long-term performance.
          </p>
        </section>

        {/* --- SERVICE SECTION 1: DUCTS --- */}
        <div style={{ marginTop: '60px' }}>
          <h2 style={styles.sectionTitle}>🌬️ Air Duct Cleaning in Killeen, TX</h2>
          <p>
            In Killeen’s dry climate, dust, pollen, and pet dander accumulate faster than many homeowners expect inside supply and return vents.
          </p>
          <div style={styles.serviceGrid}>
            <div style={styles.card}>
              <h4 style={styles.highlight}>What’s Included:</h4>
              <ul style={styles.list}>
                <li>Complete supply and return vent cleaning</li>
                <li>High-powered vacuum extraction</li>
                <li>Debris removal from trunk lines</li>
                <li>Inspection of airflow performance</li>
              </ul>
            </div>
            <div style={{...styles.card, borderTopColor: '#00d2ff'}}>
              <h4 style={styles.highlight}>The Benefits:</h4>
              <p>Clean ductwork improves air circulation, reduces allergens, and helps your HVAC system operate more efficiently. Notice fewer dust particles on surfaces and improved breathing comfort.</p>
            </div>
          </div>
        </div>

        {/* --- SERVICE SECTION 2: HVAC & UV --- */}
        <div style={styles.serviceGrid}>
          <div style={styles.card}>
            <h2 style={{...styles.sectionTitle, fontSize: '1.5rem'}}>❄️ HVAC System Cleaning</h2>
            <p>Duct cleaning alone is not enough if internal components are dirty.</p>
            <ul style={styles.list}>
              <li>Blower motor cleaning</li>
              <li>Evaporator coil cleaning</li>
              <li>Air handler servicing</li>
              <li>Return plenum cleaning</li>
            </ul>
          </div>
          <div style={{...styles.card, borderTopColor: '#6c5ce7'}}>
            <h2 style={{...styles.sectionTitle, fontSize: '1.5rem'}}>🛡️ Indoor UV Light Purification</h2>
            <p>Neutralize airborne bacteria, mold spores, and viruses directly inside your HVAC system.</p>
            <ul style={styles.list}>
              <li>Reduction of airborne pathogens</li>
              <li>Mold growth prevention inside coils</li>
              <li>Continuous operation & low maintenance</li>
            </ul>
          </div>
        </div>

        {/* --- SERVICE SECTION 3: DRYER & CHIMNEY --- */}
        <div style={styles.serviceGrid}>
          <div style={styles.card}>
            <h2 style={{...styles.sectionTitle, fontSize: '1.5rem'}}>🧺 Dryer Vent Cleaning</h2>
            <p>Lint buildup is a serious fire hazard. Annual inspection is strongly recommended for Killeen homes.</p>
            <ul style={styles.list}>
              <li>Faster drying times</li>
              <li>Lower energy bills</li>
              <li>Reduced fire risk</li>
            </ul>
          </div>
          <div style={styles.card}>
            <h2 style={{...styles.sectionTitle, fontSize: '1.5rem'}}>🧹 Chimney Sweep Services</h2>
            <p>Ensure safe seasonal operation with professional creosote removal and flue inspection.</p>
            <ul style={styles.list}>
              <li>Creosote removal</li>
              <li>Fireplace safety evaluation</li>
              <li>Smoke draft correction</li>
            </ul>
          </div>
        </div>

        {/* --- SERVICE SECTION 4: REPLACEMENT & INSULATION --- */}
        <div style={styles.serviceGrid}>
          <div style={{...styles.card, borderTopColor: '#e17055'}}>
            <h2 style={{...styles.sectionTitle, fontSize: '1.5rem'}}>🛠️ Air Duct Replacement</h2>
            <p>Old or damaged duct systems reduce airflow efficiency. We design and install properly sized systems.</p>
            <ul style={styles.list}>
              <li>Fix uneven room temperatures</li>
              <li>Replace torn or collapsed flex ducts</li>
              <li>Remediate mold or rodent damage</li>
            </ul>
          </div>
          <div style={{...styles.card, borderTopColor: '#00b894'}}>
            <h2 style={{...styles.sectionTitle, fontSize: '1.5rem'}}>🏠 Attic Insulation Services</h2>
            <p>Attic temperatures in Killeen often exceed 130°F. Proper insulation is your first line of defense.</p>
            <ul style={styles.list}>
              <li>Blown-in insulation</li>
              <li>Insulation removal</li>
              <li>Energy cost reduction</li>
            </ul>
          </div>
        </div>

        {/* --- WHY CHOOSE US --- */}
        <section style={{ textAlign: 'center', margin: '80px 0' }}>
          <h2 style={styles.sectionTitle, {justifyContent: 'center', display: 'flex'}}>Why Choose Killeen Air Duct Cleaners?</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
            {['Locally Owned', 'Texas Climate Experts', 'Professional Equipment', 'Transparent Pricing'].map((text, i) => (
              <div key={i} style={{ padding: '15px 25px', background: '#fff', borderRadius: '50px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', fontWeight: 'bold', color: '#0056b3' }}>
                ✓ {text}
              </div>
            ))}
          </div>
        </section>

        {/* --- FAQ --- */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{...styles.sectionTitle, textAlign: 'center', display: 'block'}}>Frequently Asked Questions</h2>
          <div style={styles.faqItem}>
            <p><strong>How often should air ducts be cleaned in Killeen?</strong></p>
            <p>Every 2–3 years, depending on usage and dust exposure.</p>
          </div>
          <div style={styles.faqItem}>
            <p><strong>Is HVAC cleaning different from duct cleaning?</strong></p>
            <p>Yes. HVAC cleaning includes internal mechanical components like coils and blower motors.</p>
          </div>
          <div style={styles.faqItem}>
            <p><strong>Do UV lights really work?</strong></p>
            <p>Yes. UV systems reduce microbial growth and neutralize airborne pathogens inside HVAC systems.</p>
          </div>
          <div style={styles.faqItem}>
            <p><strong>Does insulation reduce summer cooling costs?</strong></p>
            <p>Proper insulation significantly lowers heat transfer and reduces energy usage by keeping your home cooler.</p>
          </div>
        </section>

        {/* --- CTA --- */}
        <div style={styles.ctaArea}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '10px' }}>Get a Free Estimate in Killeen, TX</h2>
          <p style={{ fontSize: '1.2rem', opacity: '0.9', marginBottom: '30px' }}>Contact us today for professional air system solutions.</p>
          <button style={{ ...styles.btn, backgroundColor: '#ffce00', color: '#003366' }}>📞 Call Now: (254) 998 3484 </button>
          <button style={{ ...styles.btn, backgroundColor: 'transparent', color: 'white', border: '2px solid white' }}>📩 Request Service Online</button>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '40px', color: '#636e72', fontSize: '0.9rem' }}>
        © 2026 Killeen Air Duct Cleaners. All Rights Reserved. | Serving Killeen, Fort Cavazos, and Central Texas.
      </footer>
    </div>
  );
};


export default KilleenDuctCleaning;