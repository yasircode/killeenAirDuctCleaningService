import React from 'react';
import { Link } from 'react-router-dom';

const ChimneyCleaning = () => {
  // --- CITIES DATA ---
  const cities = [
    { name: "Temple", slug: "location/temple" },
    { name: "Belton", slug: "location/belton" },
    { name: "Harker Heights", slug: "location/harkerheights" },
    { name: "Copperas Cove", slug: "location/copperascove" },
    { name: "Georgetown", slug: "location/georgetown" },
    { name: "Waco", slug: "location/waco" },
    { name: "Jarrell", slug: "location/Jarrell" },
    { name: "Nolanville", slug: "location/nolanville" },
    { name: "Salado", slug: "location/salado" },
    { name: "Liberty Hill", slug: "location/libertyhill" },
    { name: "Lampasas", slug: "location/lampasas" },
    { name: "Fort Cavazos", slug: "location/fortcavazos" }
  ];

  // --- STYLES (Clean & Responsive) ---
  const styles = {
    container: {
      fontFamily: "'Inter', sans-serif",
      color: '#2c3e50',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      lineHeight: '1.7',
    },
    heroSection: {
      textAlign: 'center',
      padding: '40px 0',
      borderBottom: '4px solid #c62828', // Red for Fire Safety
      marginBottom: '40px',
    },
    title: {
      fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
      color: '#0e1b4d',
      margin: '0 0 10px 0',
      fontWeight: 800,
    },
    flexGroup: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '40px',
      alignItems: 'center',
      marginBottom: '60px',
    },
    textContent: {
      flex: '1 1 500px',
    },
    imageContent: {
      flex: '1 1 350px', // Image size controlled
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      maxHeight: '400px'
    },
    responsiveImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    },
    heading2: {
      fontSize: '2rem',
      color: '#0e1b4d',
      marginBottom: '20px',
    },
    benefitsBox: {
      backgroundColor: '#fff5f5',
      padding: '30px',
      borderRadius: '12px',
      borderLeft: '6px solid #c62828',
      marginTop: '30px',
    },
    locationTag: {
      display: 'inline-block',
      backgroundColor: '#ffebee',
      color: '#c62828',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '0.9rem',
      fontWeight: 600,
      marginBottom: '10px'
    },
    citiesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
      gap: '15px',
      marginTop: '30px',
      marginBottom: '50px'
    },
    cityLink: {
      textDecoration: 'none',
      backgroundColor: '#fff',
      border: '1px solid #ddd',
      padding: '12px',
      borderRadius: '8px',
      textAlign: 'center',
      color: '#333',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      display: 'block'
    }
  };

  return (
    <div style={styles.container}>
      {/* HEADER */}
      <header style={styles.heroSection}>
        <div style={styles.locationTag}>Killeen Air Duct Cleaning Company</div>
        <h1 style={styles.title}>
          Chimney Sweep & Inspection Services
        </h1>
      </header>

      {/* SECTION 1 */}
      <section style={styles.flexGroup}>
        <div style={styles.textContent}>
          <h2 style={styles.heading2}>Safe & Reliable Chimney Sweeping</h2>
          <p>
            A cozy fireplace is the heart of your home, but hazardous <strong>creosote and soot buildup</strong> can turn it into a fire risk. At <strong>Killeen Air Duct Cleaning Company</strong>, we provide expert chimney sweeping across Killeen, Temple, and Belton.
          </p>
          <p>
            Our certified team uses advanced brushes and HEPA-filtered vacuums to ensure a mess-free cleaning, removing obstructions like bird nests and blockages that hinder proper ventilation.
          </p>
        </div>
        <div style={styles.imageContent}>
          <img src="profile3.jpeg" alt="Chimney Cleaning" style={styles.responsiveImg} />
        </div>
      </section>

      {/* SECTION 2 (REVERSED FLEX) */}
      <section style={{...styles.flexGroup, flexDirection: 'row-reverse'}}>
        <div style={styles.textContent}>
          <h2 style={styles.heading2}>Why Annual Inspection Matters</h2>
          <p>
            Most chimney fires occur because of hidden cracks in the liner or excessive creosote. We serve <strong>Harker Heights, Copperas Cove, and Georgetown</strong> with full-system inspections. 
          </p>
          <p>
            Whether you use your fireplace daily or just during cold snaps, our annual maintenance ensures your flue is safe and your home is protected from smoke damage.
          </p>
        </div>
        <div style={styles.imageContent}>
          <img src="myman.jpeg" alt="Chimney Technician" style={styles.responsiveImg} />
        </div>
      </section>

      {/* BENEFITS BOX */}
      <div style={styles.benefitsBox}>
        <h3 style={{ marginTop: 0, color: '#c62828' }}>Fire Safety Benefits:</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>✔ **Prevent Fires:** Remove highly flammable creosote buildup.</li>
          <li>✔ **Better Draft:** Improve airflow and eliminate smoky odors.</li>
          <li>✔ **Clean Air:** Prevent carbon monoxide from entering your living space.</li>
          <li>✔ **Home Value:** Professional maintenance extends the life of your chimney.</li>
        </ul>
      </div>

      <hr style={{ border: '0', height: '1px', background: '#eee', margin: '60px 0' }} />

      {/* SERVICE LOCATIONS GRID */}
      <h2 style={{textAlign: 'center', color: '#0e1b4d'}}>Our Chimney Service Locations</h2>
      <div style={styles.citiesGrid}>
        {/* Killeen Primary */}
        <Link to="/location/killeen" style={{...styles.cityLink, backgroundColor: '#c62828', color: '#fff', borderColor: '#c62828'}}>
          📍 Killeen, TX
        </Link>
        
        {/* Bulk City Links */}
        {cities.map((city, index) => (
          <Link 
            key={index} 
            to={`/${city.slug}`} 
            style={styles.cityLink}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#fff5f5';
              e.currentTarget.style.borderColor = '#c62828';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#fff';
              e.currentTarget.style.borderColor = '#ddd';
            }}
          >
            📍 {city.name}, TX
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChimneyCleaning;