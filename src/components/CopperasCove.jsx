import React from 'react';

const CopperasCoveCleaning = () => {
  const styles = {
    wrapper: {
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: '#2d3436',
      backgroundColor: '#f9f9f9',
      lineHeight: '1.8',
      margin: 0,
    },
    header: {
      background: 'linear-gradient(rgba(0, 50, 100, 0.9), rgba(0, 50, 100, 0.9)), url("https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=1000")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '100px 20px',
      textAlign: 'center',
    },
    heroH1: {
      fontSize: 'clamp(1.8rem, 6vw, 3rem)',
      margin: '0 0 20px 0',
      fontWeight: '850',
      textTransform: 'capitalize',
    },
    accentBar: {
      height: '6px',
      width: '90px',
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
      padding: '45px',
      borderRadius: '25px',
      boxShadow: '0 12px 40px rgba(0,0,0,0.06)',
      marginTop: '-90px',
      position: 'relative',
      zIndex: 2,
      border: '1px solid #eee',
    },
    sectionTitle: {
      color: '#003264',
      fontSize: '2.1rem',
      marginBottom: '20px',
      fontWeight: '700',
    },
    serviceGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
      gap: '30px',
      margin: '50px 0',
    },
    card: {
      backgroundColor: '#fff',
      padding: '35px',
      borderRadius: '18px',
      boxShadow: '0 6px 15px rgba(0,0,0,0.03)',
      borderTop: '6px solid #00d2ff',
    },
    highlight: {
      color: '#003264',
      fontWeight: 'bold',
    },
    ctaArea: {
      backgroundColor: '#003264',
      color: 'white',
      padding: '70px 30px',
      borderRadius: '28px',
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
    }
  };

  return (
    <div style={styles.wrapper}>
      {/* --- HERO SECTION --- */}
      <header style={styles.header}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={styles.heroH1}>Air Duct Cleaning in Copperas Cove, TX | The City of Five Hills</h1>
          <div style={styles.accentBar}></div>
          <p style={{ fontSize: '1.4rem', fontWeight: '300' }}>
            Breathe Deeply with Expert HVAC & Duct Solutions for Cove Homeowners.
          </p>
        </div>
      </header>

      <div style={styles.container}>
        {/* --- LOCALIZED INTRO --- */}
        <section style={styles.introBox}>
          <h2 style={{ color: '#003264', marginTop: 0 }}>Serving the Heart of Copperas Cove</h2>
          <p>
            From the winding roads of the <strong>Five Hills</strong> to the busy corridors of <strong>Hwy 190</strong>, Copperas Cove homes face unique environmental challenges. The rocky terrain and dry Texas winds often kick up limestone dust and allergens that find their way directly into your air filtration system.
          </p>
          <p>
            At <strong>Killeen Air Duct Cleaners</strong>, we understand that whether you live in a classic home near <strong>Topsey</strong> or a newer development by <strong>Camp Hood</strong>, a clean HVAC system is your best defense against the Central Texas heat. We specialize in deep-cleaning services that restore your home's air to its natural, fresh state.
          </p>
        </section>

        {/* --- SERVICE 1: AIR DUCT CLEANING --- */}
        <div style={{ marginTop: '70px' }}>
          <h2 style={styles.sectionTitle}>Air Duct Cleaning in Copperas Cove, TX</h2>
          <p>
            Are your vents blowing out more than just cool air? Our specialized <strong>duct cleaning Copperas Cove TX</strong> service utilizes negative pressure technology to ensure no dust escapes into your living room during the process. We target every corner of your supply and return lines.
          </p>
          <div style={styles.serviceGrid}>
            <div style={styles.card}>
              <h4 style={styles.highlight}>Cove Resident Priority:</h4>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Precision <strong>vent cleaning Copperas Cove</strong></li>
                <li>Removal of pet dander & seasonal pollen</li>
                <li>Trunk line sanitization & debris extraction</li>
                <li>Elimination of dust-mites and microscopic debris</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- SERVICE 2: HVAC SYSTEM CLEANING (The Big Job) --- */}
        <div style={{ marginTop: '40px' }}>
          <h2 style={styles.sectionTitle}>HVAC System Cleaning in Copperas Cove, TX</h2>
          <p>
            In "The Cove," summers are relentless. If your AC is running 24/7 but the house still feels stuffy, the problem might be inside the unit itself. Our <strong>HVAC cleaning Copperas Cove TX</strong> goes beyond the ducts to service the actual machinery that cools your home.
          </p>
          <div style={styles.serviceGrid}>
            <div style={{...styles.card, borderTopColor: '#003264'}}>
              <h4 style={styles.highlight}>Internal Unit Care:</h4>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Comprehensive <strong>AC system cleaning Copperas Cove</strong></li>
                <li>Blower motor & housing decontamination</li>
                <li>Evaporator & condenser coil flushing</li>
                <li>Drain pan and line clearing to prevent mold</li>
              </ul>
              <p style={{marginTop: '15px', color: '#636e72'}}><em>Lower your utility bills by up to 15% with a clean, efficient unit.</em></p>
            </div>
          </div>
        </div>

        {/* --- SERVICE 3: DUCT REPLACEMENT (High Ticket) --- */}
        <div style={{ marginTop: '40px' }}>
          <h2 style={styles.sectionTitle}>Air Duct Replacement in Copperas Cove, TX</h2>
          <p>
            Many homes in Copperas Cove still have original flexible ductwork that may be leaking or losing air into the attic. We provide <strong>duct replacement Copperas Cove TX</strong> to ensure every bit of cold air you pay for actually reaches your rooms.
          </p>
          <div style={styles.serviceGrid}>
            <div style={{...styles.card, borderTopColor: '#e17055'}}>
              <h4 style={styles.highlight}>Why Replace?</h4>
              <p>Old ducts can tear or become a playground for rodents. If you notice uneven cooling or a spike in energy costs, it’s time for a professional <strong>air duct installation Copperas Cove</strong> evaluation.</p>
            </div>
          </div>
        </div>

        {/* --- SERVICE 4: ATTIC INSULATION --- */}
        <div style={{ marginTop: '40px' }}>
          <h2 style={styles.sectionTitle}>Attic Insulation Services in Copperas Cove, TX</h2>
          <p>
            The Five Hills heat is no joke. Our <strong>blown-in insulation Copperas Cove</strong> service creates a thermal blanket over your home. By upgrading your R-value, you keep the Texas sun out and the cool air in, significantly reducing the load on your HVAC system.
          </p>
        </div>

        {/* --- SERVICE 5: DRYER VENTS & CHIMNEY --- */}
        <div style={styles.serviceGrid}>
          <div style={styles.card}>
            <h3 style={{color: '#003264'}}>🧺 Dryer Vent Cleaning</h3>
            <p>Don't let lint buildup become a fire hazard. We offer annual maintenance for Copperas Cove families to ensure dryer efficiency and safety.</p>
          </div>
          <div style={styles.card}>
            <h3 style={{color: '#003264'}}>🧹 Chimney Sweep</h3>
            <p>Ensure your fireplace is ready for the cold Hill Country snaps. We provide thorough creosote removal and flue inspections.</p>
          </div>
        </div>

        {/* --- FAQ SECTION --- */}
        <section style={{ margin: '60px 0', borderTop: '2px solid #eee', paddingTop: '40px' }}>
          <h2 style={{textAlign: 'center', color: '#003264', marginBottom: '30px'}}>Common Questions from Cove Residents</h2>
          <div style={{ display: 'grid', gap: '20px' }}>
            <div style={styles.card}>
              <p><strong>Is HVAC cleaning better than just duct cleaning?</strong></p>
              <p>Duct cleaning handles the air paths, but HVAC cleaning ensures the coils and motor are efficient. For Copperas Cove homes, we recommend both for the best results.</p>
            </div>
            <div style={styles.card}>
              <p><strong>How does attic insulation save me money?</strong></p>
              <p>In the summer, your attic can reach 140°F. Proper insulation prevents that heat from "leaking" into your cooled rooms, so your AC doesn't have to work double shifts.</p>
            </div>
          </div>
        </section>

        {/* --- CALL TO ACTION --- */}
        <div style={styles.ctaArea}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Free Estimates for Copperas Cove Homes</h2>
          <p style={{ fontSize: '1.25rem', opacity: '0.9', marginBottom: '40px' }}>
            Contact the Cove's most trusted air quality team today.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{ ...styles.btn, backgroundColor: '#00d2ff', color: '#003264' }}>📞 Call (254) XXX-XXXX</button>
            <button style={{ ...styles.btn, backgroundColor: 'white', color: '#003264' }}>📩 Request Quote</button>
          </div>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '50px', color: '#b2bec3', fontSize: '0.9rem' }}>
        © 2026 Killeen Air Duct Cleaners | Dedicated to the Health of Copperas Cove Families.
      </footer>
    </div>
  );
};

export default CopperasCoveCleaning;