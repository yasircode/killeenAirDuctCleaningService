import React from 'react';

const FortCavazosCleaning = () => {
  const styles = {
    wrapper: {
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: '#2d3436',
      backgroundColor: '#fdfdfd',
      lineHeight: '1.8',
      margin: 0,
    },
    header: {
      background: 'linear-gradient(rgba(0, 43, 91, 0.9), rgba(0, 43, 91, 0.9)), url("https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?auto=format&fit=crop&q=80&w=1200")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '120px 20px',
      textAlign: 'center',
      borderBottom: '8px solid #bf9b30', // Army-style gold accent
    },
    heroH1: {
      fontSize: 'clamp(1.8rem, 6vw, 3rem)',
      margin: '0 0 20px 0',
      fontWeight: '900',
      textTransform: 'uppercase',
      letterSpacing: '1px',
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
      boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
      marginTop: '-110px',
      position: 'relative',
      zIndex: 2,
      border: '1px solid #dcdde1',
    },
    sectionTitle: {
      color: '#002b5b',
      fontSize: '2.4rem',
      marginBottom: '25px',
      fontWeight: '800',
      textTransform: 'capitalize',
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
      boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
      borderLeft: '10px solid #002b5b',
    },
    militaryBadge: {
      display: 'inline-block',
      backgroundColor: '#bf9b30',
      color: '#fff',
      padding: '5px 15px',
      borderRadius: '5px',
      fontSize: '0.9rem',
      fontWeight: 'bold',
      marginBottom: '15px',
    },
    ctaArea: {
      backgroundColor: '#002b5b',
      color: 'white',
      padding: '80px 30px',
      borderRadius: '20px',
      textAlign: 'center',
      margin: '80px 0',
    },
    btnMain: {
      padding: '20px 45px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      margin: '10px',
      backgroundColor: '#bf9b30',
      color: '#fff',
      transition: '0.3s',
    }
  };

  return (
    <div style={styles.wrapper}>
      {/* --- HERO SECTION --- */}
      <header style={styles.header}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={styles.heroH1}>Air Duct Cleaning in Fort Cavazos, TX | Dedicated Military Support</h1>
          <p style={{ fontSize: '1.4rem', fontWeight: '400', fontStyle: 'italic' }}>
            Trusted Air Quality Solutions for the Great Place and Our Service Members.
          </p>
        </div>
      </header>

      <div style={styles.container}>
        {/* --- LOCALIZED INTRO --- */}
        <section style={styles.introBox}>
          <div style={styles.militaryBadge}>Proudly Serving Fort Cavazos (formerly Fort Hood)</div>
          <h2 style={{ color: '#002b5b', marginTop: 10 }}>Ready for Inspection-Grade Air Quality</h2>
          <p>
            Whether you are living in <strong>Cavalry Family Housing</strong>, moving into on-post quarters near <strong>Clear Creek</strong>, or preparing for a PCS move, the indoor air quality of your home is vital. Fort Cavazos is subject to intense dust, tactical vehicle exhaust particles, and Central Texas allergens that can saturate your ventilation system.
          </p>
          <p>
            At <strong>Killeen Air Duct Cleaners</strong>, we take pride in supporting our troops. We provide thorough, military-grade air duct and HVAC cleaning that ensures your family breathes easy, especially after a long deployment or during the high-pollen spring season in Texas.
          </p>
        </section>

        {/* --- SERVICE 1: AIR DUCT CLEANING --- */}
        <div style={{ marginTop: '80px' }}>
          <h2 style={styles.sectionTitle}>Air Duct Cleaning in Fort Cavazos, TX</h2>
          <p>
            Constant moving and high-traffic military life mean dust accumulates faster. Our <strong>duct cleaning Fort Cavazos TX</strong> service is designed to handle the heavy-duty filtration needs of homes on and off post. We remove years of buildup, pet dander, and microscopic contaminants.
          </p>
          <div style={styles.serviceGrid}>
            <div style={styles.card}>
              <h4 style={{color: '#002b5b'}}>Precision Vent Cleaning:</h4>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Complete <strong>vent cleaning Fort Cavazos</strong> coverage</li>
                <li>Powerful HEPA vacuum extraction</li>
                <li>Sanitization of supply and return registers</li>
                <li>Removal of construction dust in newer housing units</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- SERVICE 2: HVAC SYSTEM CLEANING (PCS Ready) --- */}
        <div style={{ marginTop: '40px' }}>
          <h2 style={styles.sectionTitle}>HVAC System Cleaning in Fort Cavazos, TX</h2>
          <p>
            Don't let a dirty HVAC system lead to a failed housing inspection or a massive energy bill. Our <strong>HVAC cleaning Fort Cavazos TX</strong> goes deep into the mechanical components of your unit. In the Central Texas heat, a clean coil can be the difference between a cool home and a system breakdown.
          </p>
          <div style={styles.serviceGrid}>
            <div style={{...styles.card, borderLeftColor: '#bf9b30'}}>
              <h4 style={{color: '#002b5b'}}>Critical Component Cleaning:</h4>
              <ul style={{ paddingLeft: '20px' }}>
                <li><strong>AC system cleaning Fort Cavazos</strong> for blowers & coils</li>
                <li>Air handler disinfection</li>
                <li>Drain line clearing (prevents water damage/mold)</li>
                <li>Return plenum deep-clean</li>
              </ul>
              <p style={{marginTop: '15px', fontWeight: '600'}}>Lower utility costs for military families on a budget.</p>
            </div>
          </div>
        </div>

        {/* --- SERVICE 3: REPLACEMENT & INSULATION --- */}
        <div style={styles.serviceGrid}>
          <div style={{...styles.card, borderLeftColor: '#27ae60'}}>
            <h3 style={{color: '#1e8449'}}>🏠 Attic Insulation Services</h3>
            <p>Texas attics are brutal. Our <strong>blown-in insulation Fort Cavazos</strong> service helps maintain a stable temperature, reducing the strain on your AC and saving you money on monthly cooling costs.</p>
          </div>
          <div style={{...styles.card, borderLeftColor: '#e67e22'}}>
            <h3 style={{color: '#d35400'}}>🛠️ Air Duct Replacement</h3>
            <p>If your on-post or off-post rental has old, deteriorating ductwork, we offer professional <strong>duct replacement Fort Cavazos TX</strong> to improve airflow and air quality immediately.</p>
          </div>
        </div>

        {/* --- SERVICE 4: DRYER VENTS & CHIMNEYS --- */}
        <div style={styles.serviceGrid}>
          <div style={styles.card}>
            <h3 style={{color: '#002b5b'}}>🧺 Dryer Vent Cleaning</h3>
            <p>Safety is paramount on a military installation. Clogged dryer vents are a major fire risk. We ensure your vents are clear of lint and obstructions.</p>
          </div>
          <div style={styles.card}>
            <h3 style={{color: '#002b5b'}}>🧹 Chimney Sweep</h3>
            <p>Seasonal maintenance for off-post homes. We remove creosote and ensure your fireplace is ready for the Texas winter.</p>
          </div>
        </div>

        {/* --- FAQ SECTION --- */}
        <section style={{ margin: '80px 0', background: '#f8f9fa', padding: '40px', borderRadius: '15px' }}>
          <h2 style={{textAlign: 'center', color: '#002b5b', marginBottom: '40px'}}>Fort Cavazos Military Housing FAQ</h2>
          <div style={{ display: 'grid', gap: '20px' }}>
            <div style={{ background: '#fff', padding: '25px', borderRadius: '10px' }}>
              <p><strong>Do you provide services for on-post housing?</strong></p>
              <p>Yes! We work with residents in Fort Cavazos housing to ensure their indoor air quality meets high standards for health and comfort.</p>
            </div>
            <div style={{ background: '#fff', padding: '25px', borderRadius: '10px' }}>
              <p><strong>How can HVAC cleaning help with my electricity bill?</strong></p>
              <p>When coils and blowers are clean, the system doesn't have to run as long to cool the house. This efficiency directly lowers your monthly Texas energy costs.</p>
            </div>
          </div>
        </section>

        {/* --- CALL TO ACTION --- */}
        <div style={styles.ctaArea}>
          <h2 style={{ fontSize: '2.8rem', marginBottom: '20px' }}>Inspection-Ready Air Services</h2>
          <p style={{ fontSize: '1.4rem', opacity: '0.9', marginBottom: '50px' }}>
            Supporting those who serve with the best air duct cleaning in Fort Cavazos.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={styles.btnMain}>📞 Call (254) XXX-XXXX</button>
            <button style={{ ...styles.btnMain, backgroundColor: '#fff', color: '#002b5b' }}>📩 PCS Move Request</button>
          </div>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '60px', color: '#7f8c8d', fontSize: '1rem' }}>
        © 2026 Killeen Air Duct Cleaners | Dedicated to the Great Place and Fort Cavazos Families.
      </footer>
    </div>
  );
};

export default FortCavazosCleaning;