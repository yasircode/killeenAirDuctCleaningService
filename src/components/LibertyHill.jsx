import React from 'react';

const LibertyHillCleaning = () => {
  const styles = {
    wrapper: {
      fontFamily: '"Segoe UI", Roboto, Arial, sans-serif',
      color: '#2d3436',
      backgroundColor: '#fcfcfc',
      lineHeight: '1.8',
      margin: 0,
    },
    header: {
      background: 'linear-gradient(rgba(0, 51, 102, 0.9), rgba(0, 51, 102, 0.9)), url("https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=1200")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '120px 20px',
      textAlign: 'center',
      borderBottom: '8px solid #ffcc00',
    },
    heroH1: {
      fontSize: 'clamp(1.8rem, 6vw, 3.2rem)',
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
      borderRadius: '25px',
      boxShadow: '0 20px 50px rgba(0,0,0,0.07)',
      marginTop: '-110px',
      position: 'relative',
      zIndex: 2,
    },
    sectionTitle: {
      color: '#003366',
      fontSize: '2.4rem',
      marginBottom: '25px',
      fontWeight: '800',
      borderLeft: '10px solid #ffcc00',
      paddingLeft: '20px',
    },
    serviceGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px',
      margin: '60px 0',
    },
    card: {
      backgroundColor: '#ffffff',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
      borderTop: '6px solid #003366',
      transition: 'transform 0.3s ease',
    },
    ctaArea: {
      backgroundColor: '#003366',
      color: 'white',
      padding: '80px 30px',
      borderRadius: '35px',
      textAlign: 'center',
      margin: '80px 0',
    },
    btnMain: {
      padding: '20px 50px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      borderRadius: '50px',
      border: 'none',
      cursor: 'pointer',
      margin: '10px',
      backgroundColor: '#ffcc00',
      color: '#003366',
    }
  };

  return (
    <div style={styles.wrapper}>
      {/* --- HERO SECTION --- */}
      <header style={styles.header}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={styles.heroH1}>Air Duct Cleaning in Liberty Hill, TX</h1>
          <p style={{ fontSize: '1.5rem', fontWeight: '300', opacity: 0.9 }}>
            Professional HVAC Restoration for Liberty Hill’s Expanding Communities.
          </p>
        </div>
      </header>

      <div style={styles.container}>
        {/* --- LOCALIZED INTRO --- */}
        <section style={styles.introBox}>
          <h2 style={{ color: '#003366', marginTop: 0 }}>Keeping the Hill Country Air Clean</h2>
          <p>
            Liberty Hill is one of the fastest-growing cities in the Texas Hill Country. While new neighborhoods rise along <strong>Hwy 29</strong> and near <strong>Wetzel Park</strong>, the heavy construction kicks up massive amounts of fine drywall dust and silica that bypasses standard air filters. 
          </p>
          <p>
            At <strong>Killeen Air Duct Cleaners</strong>, we understand the local "LHTX" lifestyle. Whether you are in a brand-new build or an established home with a view, our mission is to remove the seasonal cedar pollen and construction debris that compromises your indoor air quality and spikes your energy bills.
          </p>
        </section>

        {/* --- SERVICE 1: AIR DUCT CLEANING --- */}
        <div style={{ marginTop: '80px' }}>
          <h2 style={styles.sectionTitle}>Air Duct Cleaning in Liberty Hill, TX</h2>
          <p>
            Don't let construction dust settle in your new home’s lungs. Our <strong>duct cleaning Liberty Hill TX</strong> service is a deep-extraction process designed to pull out the most stubborn particulates. We ensure your supply and return vents are spotless.
          </p>
          <div style={styles.serviceGrid}>
            <div style={styles.card}>
              <h4 style={{color: '#003366'}}>Our Comprehensive Approach:</h4>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Complete <strong>vent cleaning Liberty Hill</strong> for all registers</li>
                <li>Powerful negative-pressure vacuum extraction</li>
                <li>Removal of sawdust, dander, and Hill Country allergens</li>
                <li>Microbial fogging options for a sanitized system</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- SERVICE 2: HVAC SYSTEM CLEANING (The Energy Optimizer) --- */}
        <div style={{ marginTop: '40px' }}>
          <h2 style={styles.sectionTitle}>HVAC System Cleaning in Liberty Hill, TX</h2>
          <p>
            With the intense heat on the Liberty Hill ridge, your AC unit can easily overheat if the coils are dirty. Our <strong>HVAC cleaning Liberty Hill TX</strong> service focuses on the internal mechanics that drive your home's comfort. A clean system is a cheap-to-run system.
          </p>
          <div style={styles.serviceGrid}>
            <div style={{...styles.card, borderTopColor: '#ffcc00'}}>
              <h4 style={{color: '#003366'}}>Full System Restoration:</h4>
              <ul style={{ paddingLeft: '20px' }}>
                <li><strong>AC system cleaning Liberty Hill</strong> for evaporator coils</li>
                <li>Blower wheel & motor housing deep-cleaning</li>
                <li>Detailed air handler sanitization</li>
                <li>Condensate line clearing to prevent summer mold</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- SERVICE 3: REPLACEMENT & INSULATION --- */}
        <div style={styles.serviceGrid}>
          <div style={{...styles.card, borderTopColor: '#e17055'}}>
            <h3 style={{color: '#d35400'}}>🛠️ Air Duct Replacement</h3>
            <p>Leaky ducts are common in the Hill Country's shifting soils. We provide professional <strong>duct replacement Liberty Hill TX</strong> to fix air leaks and ensure your AC isn't cooling your attic instead of your home.</p>
          </div>
          <div style={{...styles.card, borderTopColor: '#27ae60'}}>
            <h3 style={{color: '#218c74'}}>🏠 Attic Insulation Services</h3>
            <p>Upgrade your home's thermal barrier. Our <strong>blown-in insulation Liberty Hill</strong> service keeps your home cool during those 105°F Texas days and lowers your monthly utility costs.</p>
          </div>
        </div>

        {/* --- SERVICE 4: DRYER VENTS & CHIMNEYS --- */}
        <div style={styles.serviceGrid}>
          <div style={styles.card}>
            <h3>🧺 Dryer Vent Cleaning</h3>
            <p>Fast-track your laundry and protect your home from fire hazards. We remove dangerous lint buildup from Liberty Hill dryer exhaust systems.</p>
          </div>
          <div style={styles.card}>
            <h3>🧹 Chimney Sweep</h3>
            <p>Get ready for the Hill Country freeze. We provide thorough creosote removal and fireplace inspections for safe winter nights.</p>
          </div>
        </div>

        {/* --- FAQ SECTION --- */}
        <section style={{ margin: '80px 0', background: '#f8f9fa', padding: '40px', borderRadius: '20px' }}>
          <h2 style={{textAlign: 'center', color: '#003366', marginBottom: '40px'}}>Liberty Hill Resident FAQ</h2>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ marginBottom: '25px', background: '#fff', padding: '20px', borderRadius: '10px' }}>
              <p><strong>Do new homes in Liberty Hill need duct cleaning?</strong></p>
              <p>Absolutely. Construction debris like drywall dust and sawdust often falls into the vents during the build process, which can irritate allergies and strain your new HVAC.</p>
            </div>
            <div style={{ marginBottom: '25px', background: '#fff', padding: '20px', borderRadius: '10px' }}>
              <p><strong>How can I lower my summer electricity bill?</strong></p>
              <p>Cleaning your HVAC coils and ensuring your attic has proper R-value insulation are the two most effective ways to reduce cooling costs in Liberty Hill.</p>
            </div>
          </div>
        </section>

        {/* --- CALL TO ACTION --- */}
        <div style={styles.ctaArea}>
          <h2 style={{ fontSize: '2.8rem', marginBottom: '20px' }}>Free Estimates for Liberty Hill</h2>
          <p style={{ fontSize: '1.3rem', opacity: '0.9', marginBottom: '50px' }}>
            Serving Liberty Hill, Santa Rita Ranch, and Orchard Ridge with pride.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={styles.btnMain}>📞 Call (254) XXX-XXXX</button>
            <button style={{ ...styles.btnMain, backgroundColor: 'white', color: '#003366' }}>📩 Online Quote</button>
          </div>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '60px', color: '#7f8c8d', fontSize: '1rem' }}>
        © 2026 Killeen Air Duct Cleaners | Dedicated to the Liberty Hill Community.
      </footer>
    </div>
  );
};

export default LibertyHillCleaning;