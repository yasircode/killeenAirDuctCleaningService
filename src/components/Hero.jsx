import React from 'react';

const Hero = () => {
  // --- Inline CSS Styles ---
  const styles = {
    heroWrapper: {
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      // Yahan apni image ka link dalen
      backgroundImage: `url('profile3.jpeg')`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)', // Image ko dark karne ke liye
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      textAlign: 'center',
    },
    contentBox: {
      maxWidth: '800px',
      width: '100%',
    },
    title: {
      color: '#ffffff',
      fontSize: 'clamp(1.5rem, 5vw, 2.8rem)', // Responsive font size
      fontWeight: '900',
      lineHeight: '1.2',
      marginBottom: '20px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    tagline: {
      color: '#ffffff',
      fontSize: 'clamp(0.9rem, 3vw, 1.3rem)',
      fontWeight: '600',
      marginBottom: '35px',
      lineHeight: '1.4',
    },
    ratingSection: {
      marginBottom: '30px',
    },
    ratingScore: {
      color: '#FFB400', // Yellow/Gold
      fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
      fontWeight: 'bold',
      margin: '0 0 5px 0',
    },
    ratingSubtitle: {
      color: '#FFB400',
      fontSize: '1.1rem',
      fontWeight: '500',
      margin: 0,
    },
    buttonGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      width: '100%',
      alignItems: 'center',
    },
    ctaButton: {
      backgroundColor: '#A31D1D', // Dark Red
      color: '#ffffff',
      padding: '16px 0',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      border: 'none',
      cursor: 'pointer',
      width: '100%',
      maxWidth: '450px',
      textDecoration: 'none',
      textAlign: 'center',
      display: 'block',
      textTransform: 'uppercase',
      transition: '0.3s',
    }
  };

  return (
    <div style={styles.heroWrapper}>
      <div style={styles.overlay}>
        <section style={styles.contentBox}>
          
          <h1 style={styles.title}>
            AMERICA AIR DUCT CLEANING <br />
            SAN ANTONIO, TX
          </h1>

          <p style={styles.tagline}>
            Breathe Easy, Live Healthy - Exceptional Air Duct <br />
            Solutions For Your Ultimate Indoor Comfort!
          </p>

          <div style={styles.ratingSection}>
            <h2 style={styles.ratingScore}>Rated 4.9 out of 5 Stars</h2>
            <p style={styles.ratingSubtitle}>Based On 328 customer reviews</p>
          </div>

          <div style={styles.buttonGroup}>
            <a href="tel:2107770616" style={styles.ctaButton}>
              CALL US: (210) 777-0616
            </a>
            <button style={styles.ctaButton}>
              SCHEDULE NOW
            </button>
          </div>

        </section>
      </div>
    </div>
  );
};

export default Hero;