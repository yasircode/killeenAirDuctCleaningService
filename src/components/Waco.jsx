import React from 'react';

const WacoDuctCleaning = () => {
  const styles = {
    wrapper: {
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: '#2d3436',
      backgroundColor: '#f9f9f9',
      lineHeight: '1.8',
      margin: 0,
    },
    header: {
      background: 'linear-gradient(rgba(26, 54, 41, 0.88), rgba(26, 54, 41, 0.88)), url("https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=1200")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '120px 20px',
      textAlign: 'center',
      borderBottom: '8px solid #ffb81c', // Baylor Gold accent
    },
    heroH1: {
      fontSize: 'clamp(2rem, 6vw, 3.5rem)',
      margin: '0 0 20px 0',
      fontWeight: '900',
      textTransform: 'uppercase',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
    },
    introBox: {
      background: 'white',
      padding: '50px',
      borderRadius: '15px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
      marginTop: '-100px',
      position: 'relative',
      zIndex: 2,
      border: '1px solid #eee',
    },
    sectionTitle: {
      color: '#1a3629', // Deep Waco Green
      fontSize: '2.5rem',
      marginBottom: '25px',
      fontWeight: '800',
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
      borderRadius: '12px',
      boxShadow: '0 10px 20px rgba(0,0,0,0.03)',
      borderTop: '10px solid #1a3629',
    },
    ctaArea: {
      backgroundColor: '#1a3629',
      color: 'white',
      padding: '80px 30px',
      borderRadius: '20px',
      textAlign: 'center',
      margin: '80px 0',
    },
    btn: {
      padding: '20px 50px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      margin: '15px',
      backgroundColor: '#ffb81c',
      color: '#1a3629',
    }
  };

  return (
    <div style={styles.wrapper}>
      {/* --- HERO SECTION --- */}
      <header style={styles.header}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={styles.heroH1}>Air Duct Cleaning in Waco, TX</h1>
          <p style={{ fontSize: '1.6rem', fontWeight: '300', opacity: 0.9 }}>
            Restoring Indoor Air Quality for the Heart of Texas.
          </p>
        </div>
      </header>

      <div style={styles.container}>
        {/* --- LOCALIZED INTRO --- */}
        <section style={styles.introBox}>
          <h2 style={{ color: '#1a3629', marginTop: 0 }}>Expert HVAC Solutions for Waco Residents</h2>
          <p>
            Waco is a city of transformation. From the historic charm of the <strong>Castle Heights</strong> district to the modern lofts near <strong>Brazos River</strong>, every home deserves clean air. However, Waco's position in the Blackland Prairie means we deal with heavy, dark soil dust and intense seasonal allergens from <strong>Cameron Park</strong>.
          </p>
          <p>
            At <strong>Killeen Air Duct Cleaners</strong>, we bring professional-grade equipment to every Waco doorstep. Whether you’re a <strong>Baylor University</strong> faculty member or a homeowner near the <strong>Silos</strong>, our specialized cleaning process removes the hidden buildup that triggers allergies and slows down your AC.
          </p>
        </section>

        {/* --- SERVICE 1: AIR DUCT CLEANING --- */}
        <div style={{ marginTop: '80px' }}>
          <h2 style={styles.sectionTitle}>Deep Air Duct Cleaning in Waco, TX</h2>
          <p>
            Does your Waco home feel dusty even after a deep clean? The culprit is likely your ventilation. Our <strong>duct cleaning Waco TX</strong> service uses negative pressure and agitation to scrub your vents from the inside out. 
          </p>
          <div style={styles.serviceGrid}>
            <div style={styles.card}>
              <h4 style={{color: '#1a3629'}}>Our Waco Service Standard:</h4>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Complete <strong>vent cleaning Waco</strong> for all rooms</li>
                <li>HEPA-filtered extraction of fine prairie dust</li>
                <li>Source removal of mold spores & pet dander</li>
                <li>Detailed air duct inspection & reporting</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- SERVICE 2: HVAC SYSTEM CLEANING --- */}
        <div style={{ marginTop: '40px' }}>
          <h2 style={styles.sectionTitle}>HVAC Restoration in Waco, TX</h2>
          <p>
            The Texas sun near <strong>McLane Stadium</strong> is no joke. If your AC coils are clogged with grime, you’re paying too much for cooling. Our <strong>HVAC cleaning Waco TX</strong> focuses on the heart of your system, ensuring peak performance when you need it most.
          </p>
          <div style={styles.serviceGrid}>
            <div style={{...styles.card, borderTopColor: '#ffb81c'}}>
              <h4 style={{color: '#1a3629'}}>Full System Maintenance:</h4>
              <ul style={{ paddingLeft: '20px' }}>
                <li><strong>AC system cleaning Waco</strong> for evaporator coils</li>
                <li>Blower wheel & motor housing decontamination</li>
                <li>Anti-microbial treatment for air handlers</li>
                <li>Condensate drain line clearing</li>
              </ul>
              <p style={{marginTop: '15px', fontStyle: 'italic'}}>Keep your Waco home efficient and lower your electric bills.</p>
            </div>
          </div>
        </div>

        {/* --- SERVICE 3: REPLACEMENT & INSULATION --- */}
        <div style={styles.serviceGrid}>
          <div style={{...styles.card, borderTopColor: '#e17055'}}>
            <h3 style={{color: '#d35400'}}>🛠️ Air Duct Replacement</h3>
            <p>Older Waco "Fixer Upper" homes often have outdated or damaged ductwork. We provide expert <strong>duct replacement Waco TX</strong> to eliminate hot spots and air leaks.</p>
          </div>
          <div style={{...styles.card, borderTopColor: '#27ae60'}}>
            <h3 style={{color: '#218c74'}}>🏠 Attic Insulation Services</h3>
            <p>Seal in the cool air! Our <strong>blown-in insulation Waco</strong> service helps Waco families fight the summer heat by creating a superior thermal barrier.</p>
          </div>
        </div>

        {/* --- SERVICE 4: DRYER VENTS & CHIMNEYS --- */}
        <div style={styles.serviceGrid}>
          <div style={styles.card}>
            <h3>🧺 Dryer Vent Cleaning</h3>
            <p>Protect your home from fire hazards. We remove dangerous lint buildup from Waco residential dryer vents for safety and efficiency.</p>
          </div>
          <div style={styles.card}>
            <h3>🧹 Chimney Sweep</h3>
            <p>Ready for a Waco winter? We provide professional creosote removal and chimney inspections to keep your fireplace safe.</p>
          </div>
        </div>

        {/* --- FAQ SECTION --- */}
        <section style={{ margin: '80px 0', borderTop: '1px solid #eee', paddingTop: '40px' }}>
          <h2 style={{textAlign: 'center', color: '#1a3629', marginBottom: '40px'}}>Waco Homeowner FAQ</h2>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ background: '#fff', padding: '25px', borderRadius: '10px', marginBottom: '15px' }}>
              <p><strong>Why is air duct cleaning important in Waco?</strong></p>
              <p>Waco’s high pollen counts and dark prairie soil mean more particles enter your home. Cleaning removes these before they circulate in your air.</p>
            </div>
            <div style={{ background: '#fff', padding: '25px', borderRadius: '10px', marginBottom: '15px' }}>
              <p><strong>Does cleaning help with musty smells?</strong></p>
              <p>Yes. Our HVAC sanitization process eliminates the bacteria and mold that cause those "old house" smells often found in historic Waco homes.</p>
            </div>
          </div>
        </section>

        {/* --- CALL TO ACTION --- */}
        <div style={styles.ctaArea}>
          <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Ready for a Healthier Waco Home?</h2>
          <p style={{ fontSize: '1.4rem', opacity: '0.9', marginBottom: '50px' }}>
            Schedule your professional air duct inspection today.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={styles.btn}>📞 Call Now: (254) XXX-XXXX</button>
            <button style={{ ...styles.btn, backgroundColor: 'white', color: '#1a3629' }}>📩 Get a Free Quote</button>
          </div>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '60px', color: '#95a5a6', fontSize: '1rem' }}>
        © 2026 Killeen Air Duct Cleaners | Proudly Serving Waco, Woodway, and Hewitt.
      </footer>
    </div>
  );
};

export default WacoDuctCleaning;