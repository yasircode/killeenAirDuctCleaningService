import React from 'react';
import { Link } from 'react-router-dom';

const DryerVentCleaning = () => {
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

  const styles = {
    container: {
      fontFamily: "'Inter', sans-serif",
      color: '#2c3e50',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      lineHeight: '1.8',
    },
    heroSection: {
      textAlign: 'center',
      padding: '50px 0',
      borderBottom: '4px solid #d32f2f',
      marginBottom: '40px',
      background: 'linear-gradient(to bottom, #ffffff, #fff5f5)'
    },
    title: {
      fontSize: 'clamp(2rem, 5vw, 3rem)',
      color: '#004a99',
      margin: '0 0 15px 0',
      fontWeight: 900,
      textTransform: 'uppercase'
    },
    brandName: {
      color: '#d32f2f',
      display: 'block',
      fontSize: '1.2rem',
      letterSpacing: '2px',
      fontWeight: 700,
      marginBottom: '10px'
    },
    flexGroup: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '50px',
      alignItems: 'flex-start',
      marginBottom: '60px',
    },
    textContent: {
      flex: '1 1 550px',
    },
    imageContent: {
      flex: '1 1 400px',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
    },
    responsiveImg: {
      width: '100%',
      height: 'auto',
      display: 'block',
      transition: 'transform 0.5s ease'
    },
    heading2: {
      fontSize: '2.2rem',
      color: '#004a99',
      marginBottom: '25px',
      borderLeft: '5px solid #d32f2f',
      paddingLeft: '15px'
    },
    infoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      margin: '30px 0'
    },
    infoCard: {
      backgroundColor: '#f8f9fa',
      padding: '20px',
      borderRadius: '10px',
      borderBottom: '3px solid #004a99'
    },
    benefitsBox: {
      backgroundColor: '#004a99',
      color: '#ffffff',
      padding: '40px',
      borderRadius: '15px',
      marginTop: '40px',
      boxShadow: '0 10px 25px rgba(0,74,153,0.2)'
    },
    citiesSection: {
      marginTop: '80px',
      textAlign: 'center'
    },
    citiesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
      gap: '15px',
      marginTop: '40px'
    },
    cityLink: {
      textDecoration: 'none',
      backgroundColor: '#fff',
      border: '1px solid #eee',
      padding: '15px',
      borderRadius: '12px',
      color: '#333',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px'
    }
  };

  return (
    <div style={styles.container}>
      <br></br>
       <br></br>

        <br></br>
      {/* HERO SECTION */}
      <header style={styles.heroSection}>
        <span style={styles.brandName}>KILLEEN AIR DUCT CLEANING COMPANY</span>
        <h1 style={styles.title}>Dryer Vent Cleaning Services</h1>
        <p style={{fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto'}}>
          Eliminating Fire Hazards and Increasing Appliance Efficiency across Central Texas.
        </p>
      </header>

      {/* SECTION 1: THE DANGER */}
      <section style={styles.flexGroup}>
        <div style={styles.textContent}>
          <h2 style={styles.heading2}>Why Killeen Air Duct Cleaning?</h2>
          <p>
            As a leading <strong>Killeen Air Duct Cleaning Company</strong>, we understand that dryer vent maintenance is often overlooked until a problem occurs. Lint is extremely flammable, and when it traps heat inside your dryer's exhaust system, it creates a serious fire risk.
          </p>
          <p>
            Our expert team uses specialized <strong>HEPA-filtered vacuums</strong> and rotating brush systems to reach every inch of your vent line. Whether your vent exits through the roof or a side wall, we ensure a 100% clear path for hot air to escape.
          </p>
          
          <div style={styles.infoGrid}>
            <div style={styles.infoCard}>
              <h4 style={{color: '#d32f2f', margin: '0 0 10px 0'}}>🔥 Fire Safety</h4>
              <p style={{fontSize: '0.9rem', margin: 0}}>Over 15,000 home fires are caused annually by clogged dryer vents. We eliminate this risk.</p>
            </div>
            <div style={styles.infoCard}>
              <h4 style={{color: '#004a99', margin: '0 0 10px 0'}}>⏱️ Save Time</h4>
              <p style={{fontSize: '0.9rem', margin: 0}}>Clothes drying in 1 cycle instead of 3. Get your laundry done faster than ever.</p>
            </div>
          </div>
        </div>
        
        <div style={styles.imageContent}>
          <img src="041.jpeg" alt="Professional Dryer Vent Cleaning Killeen" style={styles.responsiveImg} />
        </div>
      </section>

      {/* SECTION 2: THE BENEFITS */}
      <div style={styles.benefitsBox}>
        <h2 style={{color: '#fff', marginTop: 0}}>The Benefits of Our Professional Service</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'}}>
          <ul style={{listStyle: 'none', padding: 0}}>
            <li style={{marginBottom: '15px'}}>✅ <strong>Reduce Energy Bills:</strong> A clear vent means your dryer runs for less time, saving you money every month.</li>
            <li style={{marginBottom: '15px'}}>✅ <strong>Extend Dryer Life:</strong> Prevent your dryer's heating element from burning out due to back-pressure.</li>
          </ul>
          <ul style={{listStyle: 'none', padding: 0}}>
            <li style={{marginBottom: '15px'}}>✅ <strong>Remove Hidden Dust:</strong> Professional cleaning removes pounds of lint that standard lint traps miss.</li>
            <li style={{marginBottom: '15px'}}>✅ <strong>Odor Removal:</strong> Eliminate that "damp" or "musty" smell from your laundry room.</li>
          </ul>
        </div>
      </div>

      {/* CITIES GRID */}
      <section style={styles.citiesSection}>
        <h2 style={{color: '#004a99'}}>Providing Service To These Local Communities</h2>
        <div style={styles.citiesGrid}>
          <Link to="/location/killeen" style={{...styles.cityLink, backgroundColor: '#004a99', color: '#fff', border: 'none'}}>
             📍 Killeen (Home)
          </Link>
          {cities.map((city, index) => (
            <Link 
              key={index} 
              to={`/${city.slug}`} 
              style={styles.cityLink}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#f0f7ff';
                e.currentTarget.style.borderColor = '#004a99';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.borderColor = '#eee';
              }}
            >
              📍 {city.name}
            </Link>
          ))}
        </div>
      </section>

      <div style={{textAlign: 'center', marginTop: '60px', padding: '20px', backgroundColor: '#eef4ff', borderRadius: '10px'}}>
        <h3 style={{color: '#004a99', margin: '0 0 10px 0'}}>Ready for a Safer Home?</h3>
        <p>Call Killeen Air Duct Cleaning Company today for a free inspection!</p>
        <a href="tel:(254) 998-3484" style={{fontSize: '1.5rem', fontWeight: 800, color: '#d32f2f', textDecoration: 'none'}}>(254) 998-3484</a>
      </div>
    </div>
  );
};

export default DryerVentCleaning;