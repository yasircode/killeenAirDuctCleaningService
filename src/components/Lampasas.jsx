import React from 'react';

const LampasasDuctCleaning = () => {
  const styles = {
    wrapper: {
      fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
      color: '#333',
      backgroundColor: '#fdfbf9',
      lineHeight: '1.8',
      margin: 0,
    },
    header: {
      background: 'linear-gradient(rgba(46, 82, 51, 0.85), rgba(46, 82, 51, 0.85)), url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '110px 20px',
      textAlign: 'center',
      borderBottom: '6px solid #8b4513', // Earthy brown for Hill Country feel
    },
    heroH1: {
      fontSize: 'clamp(1.8rem, 6vw, 3rem)',
      margin: '0 0 20px 0',
      fontWeight: '800',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
    },
    introBox: {
      background: 'white',
      padding: '45px',
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
      marginTop: '-90px',
      position: 'relative',
      zIndex: 2,
      borderTop: '5px solid #2e5233',
    },
    sectionTitle: {
      color: '#2e5233', // Deep forest green
      fontSize: '2.2rem',
      marginBottom: '20px',
      fontWeight: '700',
    },
    serviceGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
      gap: '25px',
      margin: '50px 0',
    },
    card: {
      backgroundColor: '#ffffff',
      padding: '35px',
      borderRadius: '15px',
      boxShadow: '0 6px 15px rgba(0,0,0,0.04)',
      borderBottom: '4px solid #2e5233',
    },
    ctaArea: {
      backgroundColor: '#2e5233',
      color: 'white',
      padding: '70px 30px',
      borderRadius: '15px',
      textAlign: 'center',
      margin: '60px 0',
    },
    btn: {
      padding: '18px 45px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      margin: '10px',
      backgroundColor: '#ffcc00', // Bright gold for visibility
      color: '#2e5233',
    }
  };

  return (
    <div style={styles.wrapper}>
      {/* --- HERO SECTION --- */}
      <header style={styles.header}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={styles.heroH1}>Air Duct Cleaning in Lampasas, TX</h1>
          <p style={{ fontSize: '1.4rem', fontWeight: '300' }}>
            Pure Air for the Historic Gateway to the Texas Hill Country.
          </p>
        </div>
      </header>

      <div style={styles.container}>
        {/* --- LOCALIZED INTRO --- */}
        <section style={styles.introBox}>
          <h2 style={{ color: '#2e5233', marginTop: 0 }}>Fresh Air in the City of Springs</h2>
          <p>
            Lampasas is famous for its mineral springs and beautiful parks like <strong>Hancock Springs</strong>. However, being the gateway to the Hill Country means our homes are constantly exposed to limestone dust, cedar pollen, and seasonal ranch debris. Whether you have a historic home near <strong>Sulphur Creek</strong> or a modern property along <strong>Key Avenue</strong>, your HVAC system is likely working overtime.
          </p>
          <p>
            At <strong>Killeen Air Duct Cleaners</strong>, we specialize in removing the deep-seated allergens that thrive in the Lampasas climate. We help local families maintain a clean, efficient, and healthy indoor environment year-round.
          </p>
        </section>

        {/* --- SERVICE 1: AIR DUCT CLEANING --- */}
        <div style={{ marginTop: '70px' }}>
          <h2 style={styles.sectionTitle}>Air Duct Cleaning in Lampasas, TX</h2>
          <p>
            Does your home still smell like dust even after cleaning? Our <strong>duct cleaning Lampasas TX</strong> service uses industrial-grade suction to pull out years of buildup. We focus on the unique "Hill Country dust" that settles in Lampasas vents, ensuring your air is as crisp as a spring morning.
          </p>
          <div style={styles.serviceGrid}>
            <div style={styles.card}>
              <h4 style={{color: '#2e5233'}}>Local Cleaning Expertise:</h4>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Full <strong>vent cleaning Lampasas</strong> for all home types</li>
                <li>HEPA-certified dust extraction</li>
                <li>Sanitization of trunk lines and plenums</li>
                <li>Elimination of pet hair and seasonal pollen</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- SERVICE 2: HVAC SYSTEM CLEANING --- */}
        <div style={{ marginTop: '40px' }}>
          <h2 style={styles.sectionTitle}>HVAC System Cleaning in Lampasas, TX</h2>
          <p>
            The Texas heat doesn't play favorites. If your AC coils are clogged with ranch dust or pollen, your system will struggle to cool. Our <strong>HVAC cleaning Lampasas TX</strong> is a deep-mechanical clean that targets the components that save you money on energy bills.
          </p>
          <div style={styles.serviceGrid}>
            <div style={styles.card}>
              <h4 style={{color: '#2e5233'}}>Total System Maintenance:</h4>
              <ul style={{ paddingLeft: '20px' }}>
                <li><strong>AC system cleaning Lampasas</strong> for evaporator coils</li>
                <li>Blower motor and fan blade scrubbing</li>
                <li>Air handler disinfection</li>
                <li>Drain line flushing to prevent moisture damage</li>
              </ul>
              <p style={{marginTop: '15px', fontStyle: 'italic', color: '#666'}}>Efficiency boost: Lower your summer cooling costs significantly.</p>
            </div>
          </div>
        </div>

        {/* --- SERVICE 3: REPLACEMENT & INSULATION --- */}
        <div style={styles.serviceGrid}>
          <div style={{...styles.card, borderLeft: '6px solid #8b4513'}}>
            <h3 style={{color: '#8b4513'}}>🛠️ Air Duct Replacement</h3>
            <p>If your Lampasas home has old, leaky ducts, you’re losing cold air to the attic. we provide professional <strong>duct replacement Lampasas TX</strong> to ensure every room stays comfortable.</p>
          </div>
          <div style={{...styles.card, borderLeft: '6px solid #2e5233'}}>
            <h3 style={{color: '#2e5233'}}>🏠 Attic Insulation Services</h3>
            <p>Keep the Hill Country heat out! Our <strong>blown-in insulation Lampasas</strong> creates a barrier that keeps your home's temperature stable and saves your HVAC from burnout.</p>
          </div>
        </div>

        {/* --- SERVICE 4: DRYER VENTS & CHIMNEYS --- */}
        <div style={styles.serviceGrid}>
          <div style={styles.card}>
            <h3 style={{color: '#2e5233'}}>🧺 Dryer Vent Cleaning</h3>
            <p>Don't let lint buildup be a fire risk in your home. Our Lampasas team ensures your dryer runs safely and dries your clothes faster.</p>
          </div>
          <div style={styles.card}>
            <h3 style={{color: '#2e5233'}}>🧹 Chimney Sweep</h3>
            <p>Essential for those chilly Hill Country nights. We remove dangerous creosote and inspect your chimney for safe winter fires.</p>
          </div>
        </div>

        {/* --- FAQ SECTION --- */}
        <section style={{ margin: '60px 0', background: '#f0f4f1', padding: '40px', borderRadius: '15px' }}>
          <h2 style={{textAlign: 'center', color: '#2e5233', marginBottom: '30px'}}>Lampasas Homeowner FAQ</h2>
          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <div style={{ marginBottom: '20px' }}>
              <p><strong>How often should Lampasas homes have ducts cleaned?</strong></p>
              <p>Due to the dust and cedar in our area, we recommend a professional cleaning every 2–3 years to keep air quality high.</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <p><strong>Can cleaning my HVAC really lower my bills?</strong></p>
              <p>Yes. Clean coils allow for better heat exchange, meaning your AC reaches the desired temperature faster and runs less often.</p>
            </div>
          </div>
        </section>

        {/* --- CALL TO ACTION --- */}
        <div style={styles.ctaArea}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Free Estimates for Lampasas Residents</h2>
          <p style={{ fontSize: '1.2rem', opacity: '0.9', marginBottom: '40px' }}>
            Experience the best air duct and HVAC cleaning in the Hill Country.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={styles.btn}>📞 Call Now: (254) XXX-XXXX</button>
            <button style={{ ...styles.btn, backgroundColor: 'white', border: '1px solid #2e5233' }}>📩 Request Quote</button>
          </div>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '60px', color: '#888', fontSize: '0.9rem' }}>
        © 2026 Killeen Air Duct Cleaners | Serving Lampasas, Kempner, and Lometa.
      </footer>
    </div>
  );
};

export default LampasasDuctCleaning;