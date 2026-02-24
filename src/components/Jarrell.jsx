import React from 'react';

const JarrellDuctCleaning = () => {
  const styles = {
    wrapper: {
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: '#2d3436',
      backgroundColor: '#f4f4f2',
      lineHeight: '1.8',
      margin: 0,
    },
    header: {
      background: 'linear-gradient(rgba(0, 31, 63, 0.9), rgba(0, 31, 63, 0.9)), url("https://images.unsplash.com/photo-1449156001935-d2863fb72690?auto=format&fit=crop&q=80&w=1200")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '110px 20px',
      textAlign: 'center',
      borderBottom: '8px solid #0074d9', 
    },
    heroH1: {
      fontSize: 'clamp(1.8rem, 6vw, 3.2rem)',
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
      borderRadius: '20px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
      marginTop: '-100px',
      position: 'relative',
      zIndex: 2,
    },
    sectionTitle: {
      color: '#001f3f',
      fontSize: '2.3rem',
      marginBottom: '25px',
      fontWeight: '800',
      borderBottom: '4px solid #0074d9',
      display: 'inline-block',
      paddingBottom: '5px'
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
      borderRadius: '15px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.04)',
      borderTop: '8px solid #001f3f',
    },
    ctaArea: {
      backgroundColor: '#001f3f',
      color: 'white',
      padding: '80px 30px',
      borderRadius: '25px',
      textAlign: 'center',
      margin: '80px 0',
    },
    btn: {
      padding: '20px 50px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      borderRadius: '50px',
      border: 'none',
      cursor: 'pointer',
      margin: '15px',
      backgroundColor: '#0074d9',
      color: 'white',
    }
  };

  return (
    <div style={styles.wrapper}>
      {/* --- HERO SECTION --- */}
      <header style={styles.header}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={styles.heroH1}>Air Duct Cleaning in Jarrell, TX</h1>
          <p style={{ fontSize: '1.4rem', fontWeight: '300' }}>
            Providing Pure Air for Jarrell’s Rapidly Growing Communities.
          </p>
        </div>
      </header>

      <div style={styles.container}>
        {/* --- LOCALIZED INTRO --- */}
        <section style={styles.introBox}>
          <h2 style={{ color: '#001f3f', marginTop: 0 }}>Protect Your New Home in Jarrell</h2>
          <p>
            Jarrell is booming! As new neighborhoods like <strong>Sonterra</strong> continue to expand, the amount of airborne construction dust—fine drywall particles, sawdust, and limestone—is unprecedented. These contaminants often settle in your brand-new HVAC system before you even move in.
          </p>
          <p>
            At <strong>Killeen Air Duct Cleaners</strong>, we help Jarrell residents (Home of the Cougars!) maintain a healthy living environment. Whether you are living in a newly built modern home or an established property near <strong>Jarrell High School</strong>, our advanced duct cleaning technology removes the irritants that clog your filters and strain your AC.
          </p>
        </section>

        {/* --- SERVICE 1: AIR DUCT CLEANING --- */}
        <div style={{ marginTop: '80px' }}>
          <h2 style={styles.sectionTitle}>Air Duct Cleaning Jarrell TX</h2>
          <p>
            The heavy winds across Jarrell’s open landscapes carry significant dust and allergens. Our <strong>duct cleaning Jarrell TX</strong> service is designed to tackle this heavy debris. We use high-powered agitation and suction to ensure every vent in your house is medically clean.
          </p>
          <div style={styles.serviceGrid}>
            <div style={styles.card}>
              <h4 style={{color: '#0074d9'}}>Our Specialized Process:</h4>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Complete <strong>vent cleaning Jarrell</strong> for all supply/return lines</li>
                <li>Extraction of drywall dust & construction debris</li>
                <li>HEPA-filtered air purification during the process</li>
                <li>Allergen and pet dander source removal</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- SERVICE 2: HVAC SYSTEM CLEANING --- */}
        <div style={{ marginTop: '40px' }}>
          <h2 style={styles.sectionTitle}>HVAC System Restoration Jarrell TX</h2>
          <p>
            In Jarrell’s wide-open spaces, your outdoor unit and internal coils are constantly exposed to dust. Our <strong>HVAC cleaning Jarrell TX</strong> focuses on restoring your system's efficiency, ensuring you stay cool during those triple-digit Texas summer days.
          </p>
          
          <div style={styles.serviceGrid}>
            <div style={{...styles.card, borderTopColor: '#0074d9'}}>
              <h4 style={{color: '#001f3f'}}>Unit Efficiency Care:</h4>
              <ul style={{ paddingLeft: '20px' }}>
                <li><strong>AC system cleaning Jarrell</strong> for evaporator coils</li>
                <li>Blower motor and housing decontamination</li>
                <li>Sanitization of the air handler unit</li>
                <li>Condensate drain line clearing to prevent mold</li>
              </ul>
              <p style={{marginTop: '15px', fontStyle: 'italic'}}>A clean system reduces monthly energy consumption by up to 15%.</p>
            </div>
          </div>
        </div>

        {/* --- SERVICE 3: REPLACEMENT & INSULATION --- */}
        <div style={styles.serviceGrid}>
          <div style={{...styles.card, borderTopColor: '#e17055'}}>
            <h3 style={{color: '#d35400'}}>🛠️ Air Duct Replacement</h3>
            <p>If your home’s ductwork has been damaged by pests or simply aged, we provide <strong>duct replacement Jarrell TX</strong> to stop air leaks and restore perfect airflow to every room.</p>
          </div>
          <div style={{...styles.card, borderTopColor: '#2ecc71'}}>
            <h3 style={{color: '#27ae60'}}>🏠 Attic Insulation Services</h3>
            <p>Jarrell attics get incredibly hot. Our <strong>blown-in insulation Jarrell</strong> service helps you maintain a stable temperature, lowering the load on your HVAC system during peak heat.</p>
          </div>
        </div>

        {/* --- SERVICE 4: DRYER VENTS & CHIMNEYS --- */}
        <div style={styles.serviceGrid}>
          <div style={styles.card}>
            <h3>🧺 Dryer Vent Cleaning</h3>
            <p>Prevent house fires and save energy. We remove lint blockages from dryer vents in Jarrell homes, ensuring your laundry dries faster and safer.</p>
          </div>
          <div style={styles.card}>
            <h3>🧹 Chimney Sweep</h3>
            <p>Preparing for a North Texas freeze? We offer professional creosote removal and inspections for Jarrell fireplaces to keep your family safe.</p>
          </div>
        </div>

        {/* --- FAQ SECTION --- */}
        <section style={{ margin: '80px 0', borderTop: '1px solid #ddd', paddingTop: '40px' }}>
          <h2 style={{textAlign: 'center', color: '#001f3f', marginBottom: '40px'}}>Jarrell Homeowner FAQ</h2>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ marginBottom: '25px' }}>
              <p><strong>Should I clean my ducts in a brand new Jarrell home?</strong></p>
              <p>Yes. Construction dust is often trapped in the vents during the build phase. Cleaning ensures you aren't breathing in drywall dust from day one.</p>
            </div>
            <div style={{ marginBottom: '25px' }}>
              <p><strong>How often is HVAC cleaning needed in Jarrell?</strong></p>
              <p>Because of the open winds and construction in Jarrell, we recommend a professional inspection and cleaning every 2 years to maintain air quality.</p>
            </div>
          </div>
        </section>

        {/* --- CALL TO ACTION --- */}
        <div style={styles.ctaArea}>
          <h2 style={{ fontSize: '2.8rem', marginBottom: '15px' }}>Free Estimates for Jarrell Neighbors</h2>
          <p style={{ fontSize: '1.3rem', opacity: '0.9', marginBottom: '50px' }}>
            Get the best air quality service in Williamson County. Call today!
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={styles.btn}>📞 Call Now: (254) XXX-XXXX</button>
            <button style={{ ...styles.btn, backgroundColor: 'white', color: '#001f3f' }}>📩 Request Quote</button>
          </div>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '60px', color: '#95a5a6', fontSize: '1rem' }}>
        © 2026 Killeen Air Duct Cleaners | Serving Jarrell, Sonterra, and Schwertner.
      </footer>
    </div>
  );
};

export default JarrellDuctCleaning;