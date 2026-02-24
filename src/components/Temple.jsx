import React from 'react';

const TempleDuctCleaning = () => {
  const styles = {
    wrapper: {
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: '#2d3436',
      backgroundColor: '#f0f4f8',
      lineHeight: '1.8',
      margin: 0,
    },
    header: {
      background: 'linear-gradient(rgba(0, 74, 173, 0.88), rgba(0, 74, 173, 0.88)), url("https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '120px 20px',
      textAlign: 'center',
      borderBottom: '10px solid #00d2ff',
    },
    heroH1: {
      fontSize: 'clamp(2rem, 6vw, 3.5rem)',
      margin: '0 0 20px 0',
      fontWeight: '900',
      letterSpacing: '-1px',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
    },
    introBox: {
      background: 'white',
      padding: '50px',
      borderRadius: '30px',
      boxShadow: '0 20px 45px rgba(0,0,0,0.08)',
      marginTop: '-100px',
      position: 'relative',
      zIndex: 2,
    },
    sectionTitle: {
      color: '#004aad',
      fontSize: '2.5rem',
      marginBottom: '25px',
      fontWeight: '800',
      display: 'flex',
      alignItems: 'center',
      gap: '15px'
    },
    serviceGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
      gap: '30px',
      margin: '60px 0',
    },
    card: {
      backgroundColor: '#ffffff',
      padding: '40px',
      borderRadius: '25px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
      borderTop: '10px solid #004aad',
    },
    statusBadge: {
      backgroundColor: '#e3f2fd',
      color: '#004aad',
      padding: '8px 20px',
      borderRadius: '50px',
      fontSize: '0.9rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      display: 'inline-block'
    },
    ctaArea: {
      backgroundColor: '#004aad',
      color: 'white',
      padding: '80px 30px',
      borderRadius: '40px',
      textAlign: 'center',
      margin: '80px 0',
      boxShadow: '0 30px 60px rgba(0,74,173,0.3)',
    },
    btn: {
      padding: '20px 50px',
      fontSize: '1.3rem',
      fontWeight: 'bold',
      borderRadius: '60px',
      border: 'none',
      cursor: 'pointer',
      margin: '15px',
      backgroundColor: '#ffce00',
      color: '#004aad',
    }
  };

  return (
    <div style={styles.wrapper}>
      {/* --- HERO SECTION --- */}
      <header style={styles.header}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={styles.heroH1}>Hospital-Grade Air Duct Cleaning in Temple, TX</h1>
          <p style={{ fontSize: '1.5rem', fontWeight: '300', opacity: 0.95 }}>
            Advanced Indoor Air Quality Solutions for Temple's Homes and Medical Community.
          </p>
        </div>
      </header>

      <div style={styles.container}>
        {/* --- LOCALIZED INTRO --- */}
        <section style={styles.introBox}>
          <div style={styles.statusBadge}>Serving Temple, Belton & Pepper Creek</div>
          <h2 style={{ color: '#004aad', marginTop: 10 }}>Why Air Quality Matters in Temple</h2>
          <p>
            As the medical hub of Central Texas, Temple residents understand that clean air isn't a luxury—it's a health necessity. With the massive expansion near <strong>Baylor Scott & White</strong> and new developments rising around <strong>West Adams Avenue</strong>, construction dust and seasonal allergens are at an all-time high.
          </p>
          <p>
            At <strong>Killeen Air Duct Cleaners</strong>, we bring "medical-grade" attention to detail to every residential job. Whether you live in a quiet neighborhood near <strong>Pepper Creek</strong> or a busy area off <strong>Hwy 317</strong>, our deep-cleaning technology ensures your HVAC system is free from the irritants that trigger asthma and allergies.
          </p>
        </section>

        {/* --- SERVICE 1: AIR DUCT CLEANING --- */}
        <div style={{ marginTop: '80px' }}>
          <h2 style={styles.sectionTitle}>🌬️ Air Duct Cleaning in Temple, TX</h2>
          <p>
            Temple’s windy seasons carry vast amounts of pollen and limestone dust directly into your return vents. Our <strong>duct cleaning Temple TX</strong> service goes beyond basic vacuuming. We use agitation tools and negative pressure to scrub your duct walls clean.
          </p>
          <div style={styles.serviceGrid}>
            <div style={styles.card}>
              <h4 style={{color: '#004aad'}}>The Professional Standard:</h4>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Complete <strong>vent cleaning Temple</strong> for all registers</li>
                <li>HEPA-filtered extraction (Medical-Grade Air)</li>
                <li>Removal of construction debris & pet dander</li>
                <li>System-wide airflow optimization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- SERVICE 2: HVAC SYSTEM CLEANING (High Ticket) --- */}
        <div style={{ marginTop: '40px' }}>
          <h2 style={styles.sectionTitle}>❄️ HVAC System Cleaning in Temple, TX</h2>
          <p>
            Dusty coils are the #1 cause of AC failure in Temple. Our <strong>HVAC cleaning Temple TX</strong> doesn't just clean the "pipes"—we service the "heart" of your machine. A clean blower and evaporator coil can lower your summer energy bills by up to 20%.
          </p>
          <div style={styles.serviceGrid}>
            <div style={{...styles.card, borderTopColor: '#00d2ff'}}>
              <h4 style={{color: '#004aad'}}>Detailed HVAC Servicing:</h4>
              <ul style={{ paddingLeft: '20px' }}>
                <li><strong>AC system cleaning Temple</strong> specialists</li>
                <li>Chemical-free coil decontamination</li>
                <li>Blower wheel & housing sanitization</li>
                <li>Drain line clearing to prevent humidity mold</li>
              </ul>
              <p style={{marginTop: '15px', fontWeight: 'bold', color: '#27ae60'}}>Stop overpaying on your Texas utility bills!</p>
            </div>
          </div>
        </div>

        {/* --- SERVICE 3: REPLACEMENT & INSULATION --- */}
        <div style={styles.serviceGrid}>
          <div style={{...styles.card, borderTopColor: '#e17055'}}>
            <h3 style={{color: '#d35400'}}>🛠️ Air Duct Replacement</h3>
            <p>Older Temple homes often have collapsed or rodent-damaged flex ducts. We provide <strong>duct replacement Temple TX</strong> to fix uneven cooling and restore system integrity.</p>
          </div>
          <div style={{...styles.card, borderTopColor: '#0984e3'}}>
            <h3 style={{color: '#004aad'}}>🏠 Attic Insulation Services</h3>
            <p>Texas heat is relentless. Our <strong>blown-in insulation Temple</strong> service creates a protective shield, keeping your Temple home cool and your AC motor stress-free.</p>
          </div>
        </div>

        {/* --- SERVICE 4: DRYER VENTS & CHIMNEYS --- */}
        <div style={styles.serviceGrid}>
          <div style={styles.card}>
            <h3>🧺 Dryer Vent Cleaning</h3>
            <p>Temple fire safety begins with your laundry room. We remove heavy lint buildup to prevent house fires and speed up drying times.</p>
          </div>
          <div style={styles.card}>
            <h3>🧹 Chimney Sweep</h3>
            <p>Seasonal maintenance for Temple’s traditional homes. We ensure your fireplace is safe, clean, and ready for winter.</p>
          </div>
        </div>

        {/* --- FAQ SECTION --- */}
        <section style={{ margin: '80px 0', borderTop: '2px solid #e3f2fd', paddingTop: '40px' }}>
          <h2 style={{textAlign: 'center', color: '#004aad', marginBottom: '40px'}}>Temple Air Quality FAQ</h2>
          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <div style={{ marginBottom: '25px' }}>
              <p><strong>Is HVAC cleaning necessary for new homes in Temple?</strong></p>
              <p>Yes. Many new homes around Temple have significant construction dust and drywall particles trapped in the ducts before the family even moves in.</p>
            </div>
            <div style={{ marginBottom: '25px' }}>
              <p><strong>How long does a professional duct cleaning take?</strong></p>
              <p>For an average Temple home, it takes 3–5 hours to perform a medical-grade deep clean of all vents and system components.</p>
            </div>
          </div>
        </section>

        {/* --- CALL TO ACTION --- */}
        <div style={styles.ctaArea}>
          <h2 style={{ fontSize: '2.8rem', marginBottom: '15px' }}>Better Air Starts Here.</h2>
          <p style={{ fontSize: '1.4rem', opacity: '0.9', marginBottom: '50px' }}>
            Get a Free Estimate for your Temple home today. Professional. Local. Guaranteed.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={styles.btn}>📞 Call Now: (254) XXX-XXXX</button>
            <button style={{ ...styles.btn, backgroundColor: 'white', color: '#004aad' }}>📩 Request Estimate</button>
          </div>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '60px', color: '#b2bec3', fontSize: '1rem' }}>
        © 2026 Killeen Air Duct Cleaners | Serving Temple, Troy, and Little River-Academy.
      </footer>
    </div>
  );
};

export default TempleDuctCleaning;