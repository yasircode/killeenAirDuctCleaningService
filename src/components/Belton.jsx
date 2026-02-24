import React from 'react';

const BeltonDuctCleaning = () => {
  const styles = {
    wrapper: {
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: '#2d3436',
      backgroundColor: '#fdfcf0', // Slight cream tint for a historic feel
      lineHeight: '1.8',
      margin: 0,
    },
    header: {
      background: 'linear-gradient(rgba(100, 20, 20, 0.85), rgba(100, 20, 20, 0.85)), url("https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&q=80&w=1200")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '110px 20px',
      textAlign: 'center',
      borderBottom: '6px solid #d4af37', // Gold accent to match UMHB vibes
    },
    heroH1: {
      fontSize: 'clamp(1.8rem, 6vw, 3.2rem)',
      margin: '0 0 20px 0',
      fontWeight: '850',
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
      boxShadow: '0 15px 40px rgba(0,0,0,0.05)',
      marginTop: '-90px',
      position: 'relative',
      zIndex: 2,
    },
    sectionTitle: {
      color: '#641414', // Deep maroon/brick red for Belton/UMHB theme
      fontSize: '2.3rem',
      marginBottom: '25px',
      fontWeight: '800',
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
      boxShadow: '0 8px 25px rgba(0,0,0,0.03)',
      borderTop: '8px solid #641414',
    },
    highlight: {
      color: '#641414',
      fontWeight: 'bold',
    },
    ctaArea: {
      backgroundColor: '#641414',
      color: 'white',
      padding: '80px 30px',
      borderRadius: '25px',
      textAlign: 'center',
      margin: '60px 0',
    },
    btn: {
      padding: '18px 45px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      borderRadius: '50px',
      border: 'none',
      cursor: 'pointer',
      margin: '10px',
      backgroundColor: '#d4af37',
      color: '#641414',
    }
  };

  return (
    <div style={styles.wrapper}>
      {/* --- HERO SECTION --- */}
      <header style={styles.header}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={styles.heroH1}>Air Duct Cleaning in Belton, TX | Preservation & Purity</h1>
          <p style={{ fontSize: '1.4rem', fontWeight: '300' }}>
            Trusted HVAC Care for Belton’s Historic Homes and Modern Developments.
          </p>
        </div>
      </header>

      <div style={styles.container}>
        {/* --- LOCALIZED INTRO --- */}
        <section style={styles.introBox}>
          <h2 style={{ color: '#641414', marginTop: 0 }}>Breathe Better in the Heart of Bell County</h2>
          <p>
            Belton is a city of legacy, from the historic architecture near the <strong>Bell County Courthouse</strong> to the scenic beauty of <strong>Nolan Creek</strong>. However, older homes in Belton often harbor decades of settled dust, allergens, and debris within their original ductwork. 
          </p>
          <p>
            At <strong>Killeen Air Duct Cleaners</strong>, we specialize in the delicate yet deep cleaning required for Belton’s diverse housing. Whether you are a student/faculty member near <strong>UMHB</strong> or a family enjoying life near <strong>Lake Belton</strong>, our mission is to ensure your indoor air is as fresh as a Texas breeze.
          </p>
        </section>

        {/* --- SERVICE 1: AIR DUCT CLEANING --- */}
        <div style={{ marginTop: '80px' }}>
          <h2 style={styles.sectionTitle}>Air Duct Cleaning in Belton, TX</h2>
          <p>
            Dust isn't just a nuisance; it's an efficiency killer. Our <strong>duct cleaning Belton TX</strong> process is thorough and safe for all types of ventilation systems. We remove "historic dust," pet dander, and pollen that Central Texas is famous for.
          </p>
          <div style={styles.serviceGrid}>
            <div style={styles.card}>
              <h4 style={styles.highlight}>Our Belton Service Includes:</h4>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Complete <strong>vent cleaning Belton</strong> registers & lines</li>
                <li>HEPA-filtered particulate extraction</li>
                <li>Anti-microbial fogging (optional for allergy sufferers)</li>
                <li>Full airflow diagnostic check</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- SERVICE 2: HVAC SYSTEM CLEANING (The Energy Saver) --- */}
        <div style={{ marginTop: '40px' }}>
          <h2 style={styles.sectionTitle}>HVAC System Cleaning in Belton, TX</h2>
          <p>
            With the high humidity near the lake and the summer heat, your air handler can become a breeding ground for mold if not maintained. Our <strong>HVAC cleaning Belton TX</strong> service ensures that your system's "lungs"—the coils and blower—are spotless.
          </p>
          <div style={styles.serviceGrid}>
            <div style={{...styles.card, borderTopColor: '#d4af37'}}>
              <h4 style={styles.highlight}>Mechanical Deep-Clean:</h4>
              <ul style={{ paddingLeft: '20px' }}>
                <li><strong>AC system cleaning Belton</strong> for evaporator coils</li>
                <li>Blower wheel and motor housing decontamination</li>
                <li>Condensate drain line flush (prevents lake-side humidity mold)</li>
                <li>Return plenum sanitization</li>
              </ul>
              <p style={{marginTop: '15px', fontStyle: 'italic'}}>A clean system runs shorter cycles and lasts years longer.</p>
            </div>
          </div>
        </div>

        {/* --- SERVICE 3: REPLACEMENT & INSULATION --- */}
        <div style={styles.serviceGrid}>
          <div style={{...styles.card, borderTopColor: '#e17055'}}>
            <h3 style={{color: '#d35400'}}>🛠️ Air Duct Replacement</h3>
            <p>If your Belton home has old fiberglass-lined ducts that are crumbling, cleaning might not be enough. We provide <strong>duct replacement Belton TX</strong> using modern, R-8 insulated materials for maximum efficiency.</p>
          </div>
          <div style={{...styles.card, borderTopColor: '#27ae60'}}>
            <h3 style={{color: '#218c74'}}>🏠 Attic Insulation Services</h3>
            <p>Don't let your cool air escape through the roof. Our <strong>blown-in insulation Belton</strong> service keeps your UMHB-area home comfortable and your utility bills manageable.</p>
          </div>
        </div>

        {/* --- SERVICE 4: DRYER VENTS & CHIMNEYS --- */}
        <div style={styles.serviceGrid}>
          <div style={styles.card}>
            <h3>🧺 Dryer Vent Cleaning</h3>
            <p>Fast drying and fire safety for Belton households. We remove lint blockages that can lead to hazardous overheating.</p>
          </div>
          <div style={styles.card}>
            <h3>🧹 Chimney Sweep</h3>
            <p>Ensure your fireplace is ready for the Chisholm Trail winter. We provide full creosote removal and flue inspections.</p>
          </div>
        </div>

        {/* --- FAQ SECTION --- */}
        <section style={{ margin: '60px 0', background: '#fff', padding: '40px', borderRadius: '20px' }}>
          <h2 style={{textAlign: 'center', color: '#641414', marginBottom: '40px'}}>Belton Community FAQ</h2>
          <div style={{ display: 'grid', gap: '20px' }}>
            <div style={{ borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
              <p><strong>Do you clean historic homes in Belton?</strong></p>
              <p>Yes! We have specialized equipment that is gentle yet effective for older ductwork found in Belton's historic districts.</p>
            </div>
            <div style={{ borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
              <p><strong>How does humidity from Lake Belton affect my HVAC?</strong></p>
              <p>High humidity can lead to moisture buildup on coils, which attracts dust and can cause mold. Regular HVAC cleaning prevents this growth.</p>
            </div>
          </div>
        </section>

        {/* --- CALL TO ACTION --- */}
        <div style={styles.ctaArea}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Schedule Your Belton Air Inspection</h2>
          <p style={{ fontSize: '1.3rem', opacity: '0.9', marginBottom: '40px' }}>
            Serving the Tiger community with pride and professional integrity.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={styles.btn}>📞 Call Now: (254) XXX-XXXX</button>
            <button style={{ ...styles.btn, backgroundColor: 'white', border: '2px solid #d4af37' }}>📩 Get a Free Quote</button>
          </div>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '60px', color: '#95a5a6', fontSize: '1rem' }}>
        © 2026 Killeen Air Duct Cleaners | Your Local Experts in Belton and Bell County.
      </footer>
    </div>
  );
};

export default BeltonDuctCleaning;