import React from 'react';

const SaladoDuctCleaning = () => {
  const styles = {
    wrapper: {
      fontFamily: '"Georgia", serif', // Classy look for Salado
      color: '#2d3436',
      backgroundColor: '#fdfbf7',
      lineHeight: '1.8',
      margin: 0,
    },
    header: {
      background: 'linear-gradient(rgba(44, 62, 80, 0.9), rgba(44, 62, 80, 0.9)), url("https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '120px 20px',
      textAlign: 'center',
      borderBottom: '5px solid #c0392b',
    },
    heroH1: {
      fontSize: 'clamp(1.8rem, 6vw, 3rem)',
      margin: '0 0 20px 0',
      fontWeight: '700',
      letterSpacing: '0.5px',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
    },
    introBox: {
      background: 'white',
      padding: '50px',
      borderRadius: '10px',
      boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
      marginTop: '-100px',
      position: 'relative',
      zIndex: 2,
      border: '1px solid #e0e0e0',
    },
    sectionTitle: {
      color: '#2c3e50',
      fontSize: '2.2rem',
      marginBottom: '25px',
      fontWeight: '700',
      borderBottom: '2px solid #c0392b',
      display: 'inline-block',
      paddingBottom: '10px'
    },
    serviceGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
      gap: '30px',
      margin: '60px 0',
    },
    card: {
      backgroundColor: '#ffffff',
      padding: '40px',
      borderRadius: '8px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.03)',
      borderLeft: '5px solid #c0392b',
    },
    ctaArea: {
      backgroundColor: '#2c3e50',
      color: 'white',
      padding: '80px 30px',
      borderRadius: '15px',
      textAlign: 'center',
      margin: '80px 0',
    },
    btn: {
      padding: '18px 45px',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      margin: '10px',
      backgroundColor: '#c0392b',
      color: '#fff',
    }
  };

  return (
    <div style={styles.wrapper}>
      {/* --- HERO SECTION --- */}
      <header style={styles.header}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={styles.heroH1}>Breathe Pure in Historic Salado, TX</h1>
          <p style={{ fontSize: '1.4rem', fontStyle: 'italic', opacity: 0.9 }}>
            Preserving Air Quality in the Village of Salado with Expert Care.
          </p>
        </div>
      </header>

      <div style={styles.container}>
        {/* --- LOCALIZED INTRO --- */}
        <section style={styles.introBox}>
          <h2 style={{ color: '#2c3e50', marginTop: 0 }}>Specialized Service for a Unique Texas Village</h2>
          <p>
            Salado is a place of history and charm, from the artisan shops on <strong>Main Street</strong> to the historic homes along <strong>Royal Street</strong>. But with older architecture comes a unique challenge: decades of dust and pollen trapped in aging duct systems. The humidity near <strong>Salado Creek</strong> also creates a perfect environment for mold to grow within HVAC units.
          </p>
          <p>
            At <strong>Killeen Air Duct Cleaners</strong>, we treat Salado homes with the respect they deserve. We don't just clean; we restore your indoor air quality to its healthiest state, ensuring your historic or modern home remains a sanctuary.
          </p>
        </section>

        {/* --- SERVICE 1: AIR DUCT CLEANING --- */}
        <div style={{ marginTop: '70px' }}>
          <h2 style={styles.sectionTitle}>Air Duct Cleaning in Salado, TX</h2>
          <p>
            In Salado’s picturesque setting, allergens like cedar and oak pollen are constant. Our <strong>duct cleaning Salado TX</strong> process uses precision tools to remove these irritants. We specialize in the careful handling of ductwork in older homes to ensure a thorough clean without damage.
          </p>
          <div style={styles.serviceGrid}>
            <div style={styles.card}>
              <h4 style={{color: '#c0392b'}}>Why Salado Homes Need This:</h4>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Detailed <strong>vent cleaning Salado</strong> for historic properties</li>
                <li>HEPA-filtered extraction to protect your interior</li>
                <li>Removal of dust, pet dander, and microscopic pollen</li>
                <li>Restoration of fresh, odorless airflow</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- SERVICE 2: HVAC SYSTEM CLEANING (The System Saver) --- */}
        <div style={{ marginTop: '40px' }}>
          <h2 style={styles.sectionTitle}>HVAC System Cleaning in Salado, TX</h2>
          <p>
            The humidity from the creek and the intense Texas heat put a massive strain on your air handler. Our <strong>HVAC cleaning Salado TX</strong> service focuses on the internal components that matter. A clean system not only cools better but lasts significantly longer.
          </p>
          <div style={styles.serviceGrid}>
            <div style={{...styles.card, borderLeftColor: '#2c3e50'}}>
              <h4 style={{color: '#2c3e50'}}>System Restoration Includes:</h4>
              <ul style={{ paddingLeft: '20px' }}>
                <li><strong>AC system cleaning Salado</strong> coil decontamination</li>
                <li>Blower motor and fan blade deep-clean</li>
                <li>Condensate drain line clearing (Essential for mold prevention)</li>
                <li>Return plenum sanitization</li>
              </ul>
              <p style={{marginTop: '15px', color: '#7f8c8d'}}><em>Keep your Salado property efficient and avoid costly mid-summer breakdowns.</em></p>
            </div>
          </div>
        </div>

        {/* --- SERVICE 3: REPLACEMENT & INSULATION --- */}
        <div style={styles.serviceGrid}>
          <div style={styles.card}>
            <h3 style={{color: '#2c3e50'}}>🛠️ Air Duct Replacement</h3>
            <p>Older Salado homes often have deteriorating fiberglass ducts that leak energy. We offer <strong>duct replacement Salado TX</strong> to modernize your system while maintaining your home's character.</p>
          </div>
          <div style={styles.card}>
            <h3 style={{color: '#2c3e50'}}>🏠 Attic Insulation Services</h3>
            <p>Improve your energy efficiency. Our <strong>blown-in insulation Salado</strong> creates a powerful thermal barrier, keeping the Texas sun from overheating your living space.</p>
          </div>
        </div>

        {/* --- SERVICE 4: DRYER VENTS & CHIMNEYS --- */}
        <div style={styles.serviceGrid}>
          <div style={{...styles.card, borderLeftColor: '#c0392b'}}>
            <h3>🧺 Dryer Vent Cleaning</h3>
            <p>Lint buildup is the leading cause of dryer fires. We provide professional cleaning to protect your Salado home and improve appliance performance.</p>
          </div>
          <div style={{...styles.card, borderLeftColor: '#c0392b'}}>
            <h3>🧹 Chimney Sweep</h3>
            <p>Annual chimney cleaning and inspection for Salado’s traditional fireplaces. We ensure your home stays cozy and safe during the winter months.</p>
          </div>
        </div>

        {/* --- FAQ SECTION --- */}
        <section style={{ margin: '60px 0', borderTop: '1px solid #ddd', paddingTop: '40px' }}>
          <h2 style={{textAlign: 'center', color: '#2c3e50', marginBottom: '30px'}}>Village of Salado Resident FAQ</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: '20px' }}>
              <p><strong>Can you clean ducts in very old historic homes?</strong></p>
              <p>Yes. We have specialized techniques for older systems that ensure a deep clean without compromising the integrity of the original structure.</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <p><strong>Does Salado Creek humidity affect my air vents?</strong></p>
              <p>Absolutely. High humidity can lead to moisture in the ducts, which attracts dust and can cause mold. Regular cleaning is highly recommended.</p>
            </div>
          </div>
        </section>

        {/* --- CALL TO ACTION --- */}
        <div style={styles.ctaArea}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Quality You Can Trust.</h2>
          <p style={{ fontSize: '1.2rem', opacity: '0.9', marginBottom: '40px' }}>
            Get a free estimate for Salado’s premier air duct and HVAC cleaning service.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={styles.btn}>📞 Call Now: (254) XXX-XXXX</button>
            <button style={{ ...styles.btn, backgroundColor: 'white', color: '#2c3e50' }}>📩 Request Service</button>
          </div>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '60px', color: '#95a5a6', fontSize: '1rem' }}>
        © 2026 Killeen Air Duct Cleaners | Serving Salado and the Greater Chisholm Trail Area.
      </footer>
    </div>
  );
};

export default SaladoDuctCleaning;