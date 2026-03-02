import React from 'react';
import { Link } from 'react-router-dom';

const ServiceAreas = () => {
  // --- CITIES DATA (Directly linked to your App.js routes) ---
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

  // --- STYLES ---
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
      borderBottom: '4px solid #004a99',
      marginBottom: '40px',
    },
    title: {
      fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
      color: '#004a99',
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
      flex: '1 1 400px',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    },
    responsiveImg: {
      width: '100%',
      height: 'auto',
      display: 'block',
    },
    heading2: {
      fontSize: '2rem',
      color: '#004a99',
      marginBottom: '20px',
    },
    benefitsBox: {
      backgroundColor: '#f0f7ff',
      padding: '30px',
      borderRadius: '12px',
      borderLeft: '6px solid #28a745',
      marginTop: '30px',
    },
    locationTag: {
      display: 'inline-block',
      backgroundColor: '#eef4ff',
      color: '#004a99',
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
    

      {/* BENEFITS SECTION */}
      <div style={styles.benefitsBox}>
        <h3 style={{ marginTop: 0, color: '#155724' }}>Why Choose Our HVAC Cleaning?</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>✔ **Efficiency:** Lower your monthly energy bills by up to 20%.</li>
          <li>✔ **Health:** Eliminate allergens and musty odors from your air supply.</li>
          <li>✔ **Reliability:** Prevent expensive mechanical breakdowns and coil freezing.</li>
        </ul>
      </div>

      <hr style={{ border: '0', height: '1px', background: '#eee', margin: '60px 0' }} />

      {/* SERVICE LOCATIONS GRID */}
      <h2 style={{textAlign: 'center', color: '#004a99'}}>Our Service Areas for HVAC Cleaning</h2>
      <div style={styles.citiesGrid}>
        {/* Killeen Primary */}
        <Link to="/location/killeen" style={{...styles.cityLink, backgroundColor: '#004a99', color: '#fff'}}>
          📍 Killeen, TX
        </Link>
        
        {/* Bulk City Links */}
        {cities.map((city, index) => (
          <Link 
            key={index} 
            to={`/${city.slug}`} 
            style={styles.cityLink}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f0f7ff'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#fff'}
          >
            📍 {city.name}, TX
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceAreas;