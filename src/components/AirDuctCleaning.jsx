import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ServiceAreas from './ServiceAreas';




const CityServicePage = () => {
  const { cityName } = useParams();

  // URL se city name nikalne aur format karne ka logic
  const displayCity = cityName
    ? cityName.split('-').map(word => word.toUpperCase()).join(' ').replace(' TX', ', TX')
    : "Killeen, TX";

  useEffect(() => {
    // Dynamic Title for SEO
    document.title = `Air Duct Cleaning in ${displayCity} | Killeen Air Duct Cleaning`;
    window.scrollTo(0, 0);
  }, [displayCity]);

  // Updated SEO Schema with new Company Name
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": `Professional Air Duct Cleaning in ${displayCity}`,
        "serviceType": "HVAC & Air Duct Cleaning",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Killeen Air Duct Cleaning",
          "address": { "@type": "PostalAddress", "addressLocality": displayCity, "addressRegion": "TX" },
          "telephone": "(254) 998-3484",
          "areaServed": displayCity
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `Why choose Killeen Air Duct Cleaning for ${displayCity} homes?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Killeen Air Duct Cleaning provides specialized HVAC sanitization using high-powered negative air machines to ensure 100% dust removal and improved air quality."
            }
          },
          {
            "@type": "Question",
            "name": "How often should air ducts be cleaned in Central Texas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Due to the high levels of dust and allergens in Central Texas, we recommend a professional cleaning every 2-4 years."
            }
          }
        ]
      }
    ]
  };

  return (
    <div style={styles.container}>
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

      {/* Hero Section with Background Image */}
      <section style={styles.hero}>
        <img 
          src="/o6.jpeg"
          alt={`Professional Air Duct Cleaning in ${displayCity}`} 
          style={styles.imageBg} 
        />
        <div style={styles.heroOverlay}>
          <h1 style={styles.h1}>Killeen Air Duct Cleaning - {displayCity}</h1>
          <p style={styles.subtext}>
            Trusted Experts in Air Duct & HVAC Cleaning Services. 
            We Remove Dust, Mold, and Allergens from Your {displayCity} Home.
          </p>
          <div style={styles.btnGroup}>
            <a href="tel:2549983484" style={styles.ctaButton}>Call (254) 998-3484</a>
            <Link to="/contact" style={styles.secondaryBtn}>Free Quote</Link>
          </div>
        </div>
      </section>




      {/* Main Content Area */}
      <div style={styles.contentWrapper}>
        
        {/* Section 1: Intro with SEO Focus */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Top-Rated Air Duct Cleaning in {displayCity}</h2>
          <p style={styles.paragraph}>
            Are you looking for a professional <strong>Air Duct Cleaning in {displayCity}</strong>? 
            <strong> Killeen Air Duct Cleaning</strong> is dedicated to providing cleaner, healthier indoor air for our local community. 
            Whether it's seasonal allergies or Texas dust, our deep-cleaning process ensures your HVAC system is operating at peak efficiency.
          </p>
          <img src="/myman.jpeg" alt="Air Duct Cleaning Equipment in Action" style={styles.contentImage} />
        </section>

        {/* Section 2: Benefits List */}
        <section style={styles.infoBox}>
          <h2 style={styles.h2}>Benefits of Our Service</h2>
          <ul style={styles.list}>
            <li><strong>Improved Air Quality:</strong> Eliminate 99% of dust and pet dander.</li>
            <li><strong>Energy Savings:</strong> Clean vents help your AC work less and save you money.</li>
            <li><strong>Odor Removal:</strong> We neutralize smells caused by mold and mildew.</li>
            <li><strong>Healthier Home:</strong> Perfect for asthma and allergy sufferers in {displayCity}.</li>
          </ul>
        </section>

        {/* Section 3: FAQ Section */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Frequently Asked Questions</h2>
          <div style={styles.faqContainer}>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>Is Killeen Air Duct Cleaning available on weekends?</h4>
              <p style={styles.paragraph}>Yes, we offer flexible scheduling for all our {displayCity} clients, including emergency services if needed.</p>
            </div>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>What is included in a standard duct cleaning?</h4>
              <p style={styles.paragraph}>Our process includes cleaning all supply and return vents, the main trunk line, and sanitizing the system to kill bacteria.</p>
            </div>
          </div>
        </section>

     <ServiceAreas/>

      
   
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: { backgroundColor: '#fcfcfc', color: '#333', fontFamily: '"Segoe UI", Roboto, sans-serif' },
  hero: { 
    position: 'relative', height: '60vh', display: 'flex', alignItems: 'center', 
    justifyContent: 'center', overflow: 'hidden', textAlign: 'center', color: 'white' 
  },
  imageBg: { 
    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
    zIndex: '1', objectFit: 'cover', filter: 'brightness(0.45)' 
  },
  heroOverlay: { 
    zIndex: '2', padding: '20px', width: '100%', display: 'flex', 
    flexDirection: 'column', justifyContent: 'center', alignItems: 'center' 
  },
  h1: { fontSize: 'clamp(1.5rem, 6vw, 2.8rem)', fontWeight: '900', margin: '0 0 15px', textTransform: 'uppercase' },
  subtext: { fontSize: 'clamp(0.9rem, 2.5vw, 1.25rem)', maxWidth: '800px', marginBottom: '25px' },
  btnGroup: { display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' },
  ctaButton: { background: '#d32f2f', color: 'white', padding: '14px 28px', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' },
  secondaryBtn: { background: 'white', color: '#333', padding: '14px 28px', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' },
  contentWrapper: { maxWidth: '1050px', margin: '0 auto', padding: '40px 20px' },
  section: { marginBottom: '50px' },
  h2: { fontSize: '1.75rem', color: '#111', marginBottom: '20px', borderLeft: '6px solid #d32f2f', paddingLeft: '15px' },
  paragraph: { fontSize: '1.05rem', lineHeight: '1.75', color: '#444' },
  contentImage: { width: '100%', borderRadius: '8px', marginTop: '20px' },
  list: { paddingLeft: '20px', fontSize: '1.05rem', lineHeight: '2', color: '#444' },
  infoBox: { background: '#f0f0f0', padding: '30px', borderRadius: '8px', marginBottom: '50px' },
  faqContainer: { background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' },
  faqItem: { marginBottom: '20px', borderBottom: '1px solid #eee' },
  faqQuestion: { color: '#d32f2f', fontSize: '1.15rem', marginBottom: '8px' },
  internalLinks: { background: '#222', color: 'white', padding: '40px', borderRadius: '8px' },
  h3: { textAlign: 'center', marginBottom: '25px' },
  linkGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '15px', textAlign: 'center' },
  footerLink: { color: '#bbb', textDecoration: 'none', fontSize: '0.95rem' }
};

export default CityServicePage;