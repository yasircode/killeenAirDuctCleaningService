import React from 'react';

const GoogleReviewBadge = () => {
  // Styles Object
  const styles = {
    // Wrapper to center the badge on any screen
    wrapper: {
      display: 'flex',
      justifyContent: 'center', // Horizontal Center
      alignItems: 'center',     // Vertical Center
      width: '100%',
      padding: '20px 0',
    },
    container: {
      display: 'inline-flex',
      alignItems: 'center',
      backgroundColor: '#f1f1f1', 
      padding: '6px 14px',
      borderRadius: '25px', // Rounded corners like modern Google style
      fontFamily: 'Roboto, Arial, sans-serif',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      border: '1px solid #e0e0e0',
    },
    starsContainer: {
      display: 'flex',
      gap: '2px',
      marginRight: '8px',
    },
    star: {
      color: '#FBBC05', 
      fontSize: '16px',
    },
    text: {
      fontSize: '13px',
      fontWeight: '500',
      color: '#5f6368',
      marginRight: '8px',
      whiteSpace: 'nowrap',
    },
    googleLogo: {
      fontSize: '16px',
      fontWeight: '600',
      display: 'flex',
      letterSpacing: '-0.2px',
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* 5 Stars */}
        <div style={styles.starsContainer}>
          {[...Array(5)].map((_, i) => (
            <span key={i} style={styles.star}>★</span>
          ))}
        </div>

        {/* Review Count */}
        <span style={styles.text}>58 reviews</span>

        {/* Google Logo with exact branding colors */}
        <div style={styles.googleLogo}>
          <span style={{ color: '#4285F4' }}>G</span>
          <span style={{ color: '#EA4335' }}>o</span>
          <span style={{ color: '#FBBC05' }}>o</span>
          <span style={{ color: '#4285F4' }}>g</span>
          <span style={{ color: '#34A853' }}>l</span>
          <span style={{ color: '#EA4335' }}>e</span>
        </div>
      </div>
    </div>
  );
};

export default GoogleReviewBadge;