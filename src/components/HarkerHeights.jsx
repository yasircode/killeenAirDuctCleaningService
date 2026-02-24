import React from 'react';

const HarkerHeightsCleaning = () => {
  const styles = {
    wrapper: {
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: '#2d3436',
      backgroundColor: '#fdfdfd',
      lineHeight: '1.8',
      margin: 0,
    },
    header: {
      background: 'linear-gradient(rgba(0, 40, 80, 0.88), rgba(0, 40, 80, 0.88)), url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '100px 20px',
      textAlign: 'center',
    },
    heroH1: {
      fontSize: 'clamp(1.8rem, 6vw, 2.8rem)',
      margin: '0 0 20px 0',
      fontWeight: '900',
      letterSpacing: '-0.5px',
    },
    accentBar: {
      height: '5px',
      width: '100px',
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
      borderRadius: '24px',
      boxShadow: '0 15px 35px rgba(0,0,0,0.07)',
      marginTop: '-90px',
      position: 'relative',
      zIndex: 2,
      border: '1px solid #f0f0f0',
    },
    sectionTitle: {
      color: '#002850',
      fontSize: '2.2rem',
      marginBottom: '20px',
      fontWeight: '800',
    },
    serviceGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '25px',
      margin: '50px 0',
    },
    card: {
      backgroundColor: '#ffffff',
      padding: '35px',
      borderRadius: '20px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.04)',
      borderTop: '8px solid #002850',
      transition: 'all 0.3s ease',
    },
    highlight: {
      color: '#00d2ff',
      fontWeight: 'bold',
    },
    ctaArea: {
      backgroundColor: '#002850',
      color: 'white',
      padding: '70px 30px',
      borderRadius: '30px',
      textAlign: 'center',
      margin: '60px 0',
    },
    btn: {
      padding: '20px 45px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      borderRadius: '50px',
      border: 'none',
      cursor: 'pointer',
      margin: '10px',
      transition: 'transform 0.2s',
    }
  };

  return (
    <div style={styles.wrapper}>
      {/* --- HERO SECTION --- */}
      <header style={styles.header}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={styles.heroH1}>Air Duct Cleaning in Harker Heights, TX | Expert Air Quality</h1>
          <div style={styles.accentBar}></div>
          <p style={{ fontSize: '1.3rem', fontWeight: '300', opacity: 0.9 }}>
            Providing Advanced HVAC Solutions for the Bright Star of Central Texas.
          </p>
        </div>
      </header>

      <div style={styles.container}>
        {/* --- LOCALIZED INTRO --- */}
        <section style={styles.introBox}>
          <h2 style={{ color: '#002850', marginTop: 0 }}>Protecting Harker Heights Homes</h2>
          <p>
            Harker Heights is known for its beautiful landscapes and proximity to <strong>Stillhouse Hollow Lake</strong>. However, the same environment that makes our city great also brings high pollen counts and lakeside humidity. Over time, these particles enter your HVAC system, settling deep within your vents.
          </p>
          <p>
            From the upscale neighborhoods along <strong>Knights Way</strong> to homes nestled near <strong>Dana Peak Park</strong>, we understand that dust and allergens are a constant battle. At <strong>Killeen Air Duct Cleaners</strong>, we deliver more than just a surface clean; we provide a healthier living environment for our Harker Heights neighbors.
          </p>
        </section>

        {/* --- SERVICE 1: AIR DUCT CLEANING --- */}
        <div style={{ marginTop: '70px' }}>
          <h2 style={styles.sectionTitle}>Air Duct Cleaning in Harker Heights, TX</h2>
          <p>
            Is your HVAC system circulating dust? Our professional <strong>duct cleaning Harker Heights TX</strong> service focuses on removing the debris that filters miss. Using high-powered negative pressure vacuum systems, we extract dust, pet dander, and microscopic mold spores.
          </p>
          <div style={styles.serviceGrid}>
            <div style={styles.card}>
              <h4 style={styles.highlight}>Harker Heights Specialty:</h4>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Precision <strong>vent cleaning Harker Heights</strong></li>
                <li>Trunk line and plenum debris removal</li>
                <li>HEPA-filtered extraction technology</li>
                <li>Elimination of musty "lakeside" odors</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- SERVICE 2: HVAC SYSTEM CLEANING (High Value) --- */}
        <div style={{ marginTop: '40px' }}>
          <h2 style={styles.sectionTitle}>HVAC System Cleaning in Harker Heights, TX</h2>
          <p>
            With the intense Texas sun beating down on our Hill Country terrain, your AC works overtime. A standard duct cleaning doesn't touch the blower motor or coils where efficiency is lost. Our <strong>HVAC cleaning Harker Heights TX</strong> ensures your entire unit is optimized.
          </p>
          <div style={styles.serviceGrid}>
            <div style={{...styles.card, borderTopColor: '#00d2ff'}}>
              <h4 style={{color: '#002850', fontWeight: 'bold'}}>System Optimization Includes:</h4>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Blower wheel and motor decontamination</li>
                <li>Evaporator coil antimicrobial treatment</li>
                <li><strong>AC system cleaning Harker Heights</strong> inspection</li>
                <li>Condensate drain line clearing</li>
              </ul>
              <p style={{marginTop: '15px', fontSize: '0.95rem', color: '#636e72'}}><em>Lower your utility bills by improving heat exchange efficiency.</em></p>
            </div>
          </div>
        </div>

        {/* --- SERVICE 3: REPLACEMENT & INSULATION --- */}
        <div style={styles.serviceGrid}>
          {/* Duct Replacement */}
          <div style={{...styles.card, borderTopColor: '#e17055'}}>
            <h3 style={{color: '#d35400'}}>🛠️ Air Duct Replacement</h3>
            <p>Older homes in the Heights often have degraded fiberglass ductwork. We provide professional <strong>duct replacement Harker Heights TX</strong> to eliminate leaks and hot spots.</p>
            <p className="small-text" style={{fontSize: '0.9rem'}}>Upgrade to R-8 insulated flex ducts for maximum energy retention.</p>
          </div>
          {/* Attic Insulation */}
          <div style={{...styles.card, borderTopColor: '#27ae60'}}>
            <h3 style={{color: '#218c74'}}>🏠 Attic Insulation Services</h3>
            <p>Combat the Harker Heights heat. Our <strong>blown-in insulation Harker Heights</strong> service creates a thermal barrier that keeps your home cool when the Texas sun is at its peak.</p>
          </div>
        </div>

        {/* --- SERVICE 4: DRYER VENTS & CHIMNEY --- */}
        <div style={styles.serviceGrid}>
          <div style={styles.card}>
            <h3>🧺 Dryer Vent Cleaning</h3>
            <p>Harker Heights residential safety is our priority. Removing lint buildup prevents fires and extends the life of your expensive appliances.</p>
          </div>
          <div style={styles.card}>
            <h3>🧹 Chimney Sweep</h3>
            <p>Annual maintenance for your fireplace. We ensure a safe, smoke-free draft before the Hill Country winters arrive.</p>
          </div>
        </div>

        {/* --- FAQ SECTION --- */}
        <section style={{ margin: '60px 0', background: '#f1f2f6', padding: '40px', borderRadius: '25px' }}>
          <h2 style={{textAlign: 'center', color: '#002850', marginBottom: '40px'}}>Harker Heights Service FAQs</h2>
          <div style={{ display: 'grid', gap: '20px' }}>
            <div style={{ background: '#fff', padding: '20px', borderRadius: '15px' }}>
              <p><strong>Is HVAC cleaning different from duct cleaning?</strong></p>
              <p>Yes. Duct cleaning removes debris from the "veins" of your home, while HVAC cleaning services the "heart" (blower, coils, and internal components).</p>
            </div>
            <div style={{ background: '#fff', padding: '20px', borderRadius: '15px' }}>
              <p><strong>How often should I clean my vents in Harker Heights?</strong></p>
              <p>Due to the dust and wind in Central Texas, we recommend a professional cleaning every 2–3 years for most households.</p>
            </div>
            <div style={{ background: '#fff', padding: '20px', borderRadius: '15px' }}>
              <p><strong>Does new insulation really help my AC?</strong></p>
              <p>In Texas, an under-insulated attic can reach 140°F. Proper insulation prevents that heat from radiating into your home, reducing AC strain significantly.</p>
            </div>
          </div>
        </section>

        {/* --- CALL TO ACTION --- */}
        <div style={styles.ctaArea}>
          <h2 style={{ fontSize: '2.4rem', marginBottom: '15px' }}>Ready for a Healthier Home?</h2>
          <p style={{ fontSize: '1.25rem', opacity: '0.9', marginBottom: '40px' }}>
            Get a Free Estimate for Harker Heights air duct cleaning, replacement, or insulation today.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{ ...styles.btn, backgroundColor: '#00d2ff', color: '#002850' }}>📞 Call Now</button>
            <button style={{ ...styles.btn, backgroundColor: 'white', color: '#002850', border: '2px solid #00d2ff' }}>📩 Online Request</button>
          </div>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '50px', color: '#95a5a6', fontSize: '0.95rem' }}>
        © 2026 Killeen Air Duct Cleaners | Serving the Harker Heights Community with Integrity.
      </footer>
    </div>
  );
};

export default HarkerHeightsCleaning;