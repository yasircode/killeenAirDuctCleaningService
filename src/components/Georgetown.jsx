import React from 'react';

const GeorgetownDuctCleaning = () => {
  const styles = {
    wrapper: {
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: '#2d3436',
      backgroundColor: '#f8f9fa',
      lineHeight: '1.8',
      margin: 0,
    },
    header: {
      background: 'linear-gradient(rgba(0, 40, 80, 0.85), rgba(0, 40, 80, 0.85)), url("https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&q=80&w=1200")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '120px 20px',
      textAlign: 'center',
      borderBottom: '10px solid #c0392b', // Red accent for the "Most Beautiful Town Square" vibe
    },
    heroH1: {
      fontSize: 'clamp(2rem, 6vw, 3.5rem)',
      margin: '0 0 20px 0',
      fontWeight: '900',
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
      boxShadow: '0 25px 60px rgba(0,0,0,0.1)',
      marginTop: '-110px',
      position: 'relative',
      zIndex: 2,
    },
    sectionTitle: {
      color: '#002850',
      fontSize: '2.5rem',
      marginBottom: '25px',
      fontWeight: '800',
      borderLeft: '12px solid #c0392b',
      paddingLeft: '25px'
    },
    serviceGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
      gap: '30px',
      margin: '60px 0',
    },
    card: {
      backgroundColor: '#ffffff',
      padding: '45px',
      borderRadius: '25px',
      boxShadow: '0 12px 35px rgba(0,0,0,0.04)',
      borderTop: '10px solid #002850',
    },
    ctaArea: {
      backgroundColor: '#002850',
      color: 'white',
      padding: '80px 30px',
      borderRadius: '45px',
      textAlign: 'center',
      margin: '80px 0',
    },
    btn: {
      padding: '22px 55px',
      fontSize: '1.3rem',
      fontWeight: 'bold',
      borderRadius: '60px',
      border: 'none',
      cursor: 'pointer',
      margin: '15px',
      backgroundColor: '#c0392b',
      color: 'white',
    }
  };

  return (
    <div style={styles.wrapper}>
      {/* --- HERO SECTION --- */}
      <header style={styles.header}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={styles.heroH1}>Air Duct Cleaning in Georgetown, TX</h1>
          <p style={{ fontSize: '1.6rem', fontWeight: '300', opacity: 0.95 }}>
            Elite Air Quality Services for the Most Beautiful Square in Texas.
          </p>
        </div>
      </header>

      <div style={styles.container}>
        {/* --- LOCALIZED INTRO --- */}
        <section style={styles.introBox}>
          <h2 style={{ color: '#002850', marginTop: 0 }}>Advanced Air Care for Georgetown Families</h2>
          <p>
            Georgetown is a blend of historic charm and modern living. From the retirement oasis of <strong>Sun City</strong> to the vibrant student life near <strong>Southwestern University</strong>, the demand for clean, allergen-free air has never been higher. With the expansion near <strong>Inner Space Cavern</strong> and new developments along <strong>IH-35</strong>, construction dust and Hill Country pollen are constant threats to your HVAC system.
          </p>
          <p>
            At <strong>Killeen Air Duct Cleaners</strong>, we provide meticulous service that matches the high standards of Georgetown residents. We specialize in removing the microscopic irritants that settle in your vents, helping you enjoy a healthier, more energy-efficient home.
          </p>
        </section>

        {/* --- SERVICE 1: AIR DUCT CLEANING --- */}
        <div style={{ marginTop: '80px' }}>
          <h2 style={styles.sectionTitle}>Breathe Pure: Duct Cleaning Georgetown TX</h2>
          <p>
            The limestone dust and cedar pollen in Williamson County can quickly overwhelm your home’s air distribution system. Our <strong>duct cleaning Georgetown TX</strong> service is designed for deep source removal, ensuring your family breathes air that is as clear as the water at <strong>Blue Hole</strong>.
          </p>
          <div style={styles.serviceGrid}>
            <div style={styles.card}>
              <h4 style={{color: '#c0392b'}}>Why Choose Our Georgetown Team:</h4>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Precision <strong>vent cleaning Georgetown</strong> technology</li>
                <li>HEPA-filtered extraction systems</li>
                <li>Sanitization for pet dander & seasonal mold</li>
                <li>Complete system-wide debris removal</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- SERVICE 2: HVAC SYSTEM CLEANING --- */}
        <div style={{ marginTop: '40px' }}>
          <h2 style={styles.sectionTitle}>HVAC Optimization in Georgetown, TX</h2>
          <p>
            In a city that values sustainability, a dirty AC unit is your biggest energy drain. Our <strong>HVAC cleaning Georgetown TX</strong> targets the internal coils and blower motors that often get neglected. We help Georgetown homeowners reduce their carbon footprint—and their utility bills.
          </p>
          
          <div style={styles.serviceGrid}>
            <div style={{...styles.card, borderTopColor: '#c0392b'}}>
              <h4 style={{color: '#002850'}}>Full System Decontamination:</h4>
              <ul style={{ paddingLeft: '20px' }}>
                <li><strong>AC system cleaning Georgetown</strong> expert care</li>
                <li>Anti-microbial coil flushing</li>
                <li>Blower housing & fan blade scrubbing</li>
                <li>Condensate drain line clearing</li>
              </ul>
              <p style={{marginTop: '20px', color: '#636e72'}}><em>Essential for Sun City residents and sensitive respiratory health.</em></p>
            </div>
          </div>
        </div>

        {/* --- SERVICE 3: REPLACEMENT & INSULATION --- */}
        <div style={styles.serviceGrid}>
          <div style={{...styles.card, borderTopColor: '#27ae60'}}>
            <h3 style={{color: '#27ae60'}}>🏠 Attic Insulation Services</h3>
            <p>Georgetown's summer heat can reach triple digits. Our <strong>blown-in insulation Georgetown</strong> creates a thermal shield, keeping your modern home cool and your HVAC unit from working overtime.</p>
          </div>
          <div style={{...styles.card, borderTopColor: '#e17055'}}>
            <h3 style={{color: '#d35400'}}>🛠️ Air Duct Replacement</h3>
            <p>Older homes near the Historic Square often have leaking or outdated ductwork. We provide professional <strong>duct replacement Georgetown TX</strong> to modernize your airflow and efficiency.</p>
          </div>
        </div>

        {/* --- SERVICE 4: DRYER VENTS & CHIMNEYS --- */}
        <div style={styles.serviceGrid}>
          <div style={styles.card}>
            <h3>🧺 Dryer Vent Cleaning</h3>
            <p>Don't risk a lint fire. We provide thorough cleaning for Georgetown laundry rooms, extending appliance life and ensuring safety.</p>
          </div>
          <div style={styles.card}>
            <h3>🧹 Chimney Sweep</h3>
            <p>Ready your home for the Central Texas winter. We offer creosote removal and inspections for Georgetown’s traditional fireplaces.</p>
          </div>
        </div>

        {/* --- FAQ SECTION --- */}
        <section style={{ margin: '80px 0', borderTop: '2px solid #eee', paddingTop: '50px' }}>
          <h2 style={{textAlign: 'center', color: '#002850', marginBottom: '40px'}}>Georgetown Community FAQ</h2>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ background: '#fff', padding: '30px', borderRadius: '15px', marginBottom: '20px' }}>
              <p><strong>Is HVAC cleaning important for older homes near the Square?</strong></p>
              <p>Absolutely. Historic homes often have original ductwork that has accumulated decades of dust. Deep cleaning restores airflow without damaging the property’s integrity.</p>
            </div>
            <div style={{ background: '#fff', padding: '30px', borderRadius: '15px', marginBottom: '20px' }}>
              <p><strong>Do you service the Sun City area?</strong></p>
              <p>Yes, we have many satisfied customers in Sun City. We focus on providing allergen-free air, which is vital for senior health and respiratory comfort.</p>
            </div>
          </div>
        </section>

        {/* --- CALL TO ACTION --- */}
        <div style={styles.ctaArea}>
          <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Experience a Cleaner Georgetown Home</h2>
          <p style={{ fontSize: '1.4rem', opacity: '0.9', marginBottom: '50px' }}>
            Healthier air is just a phone call away. Get your free estimate today.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={styles.btn}>📞 Call Now: (254) XXX-XXXX</button>
            <button style={{ ...styles.btn, backgroundColor: 'white', color: '#002850' }}>📩 Request Quote</button>
          </div>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '60px', color: '#95a5a6', fontSize: '1rem' }}>
        © 2026 Killeen Air Duct Cleaners | Serving Georgetown, Round Rock, and Jarrell.
      </footer>
    </div>
  );
};

export default GeorgetownDuctCleaning;