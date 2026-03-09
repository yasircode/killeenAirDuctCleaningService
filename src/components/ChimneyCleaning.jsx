import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ChimneyCleaning= () => {
  const { cityName } = useParams();
  const [openFaq, setOpenFaq] = useState(null);

  // Formatting location for display
  const displayCity = cityName
    ? cityName.split('-').map(word => word.toUpperCase()).join(' ').replace(' TX', ', TX')
    : "Killeen, TX";

  useEffect(() => {
    document.title = `Professional Dryer Vent Cleaning in ${displayCity} | Killeen Air Duct Cleaning`;
    window.scrollTo(0, 0);
  }, [displayCity]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Professional Dryer Vent Cleaning in ${displayCity}`,
    "serviceType": "Dryer Vent Maintenance",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Killeen Air Duct Cleaning",
      "address": { "@type": "PostalAddress", "addressLocality": displayCity, "addressRegion": "TX" },
      "telephone": "(254) 998-3484"
    }
  };

  const faqs = [
    {
      q: "How often should I have my dryer vent cleaned?",
      a: "For most homes in Killeen, we recommend a professional cleaning at least once a year. However, if you have a large family or do laundry daily, you might need it every 6 months."
    },
    {
      q: "Can a clogged dryer vent really cause a fire?",
      a: "Yes, absolutely. Lint is highly flammable. When it builds up, it restricts airflow, causing the dryer to overheat and potentially ignite the lint inside the vent line."
    },
    {
      q: "How long does the cleaning process take?",
      a: "Typically, a standard residential dryer vent cleaning takes between 45 minutes to 1.5 hours, depending on the length of the vent and the amount of debris."
    },
    {
      q: "Will cleaning my vent lower my electric bill?",
      a: "Yes. When your vent is clear, your dryer runs more efficiently and dries clothes faster, which significantly reduces energy consumption."
    }
  ];

  return (
    <div style={styles.container}>
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.h1}>Expert Dryer Air Vent Cleaning in {displayCity}</h1>
          <p style={styles.subtext}>Killeen Air Duct Cleaning: Reducing Fire Risks & Improving Efficiency for Your Home.</p>
          <div style={styles.btnGroup}>
            <a href="tel:2549983484" style={styles.ctaButton}>Call (254) 998-3484</a>
            <Link to="/contact" style={styles.secondaryBtn}>Get a Free Quote</Link>
          </div>
        </div>
      </section>

      <div style={styles.contentWrapper}>
        
        {/* Section 1: Importance of Cleaning */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Why Dryer Vent Cleaning Matters</h2>
          <p style={styles.paragraph}>
            At <strong>Killeen Air Duct Cleaning</strong>, we specialize in removing the hidden dangers lurking in your laundry room. A clogged dryer vent isn't just an inconvenience—it's a major fire hazard. Every year, thousands of structure fires are caused by lint buildup. Our professional service ensures that your vent is clear, your home is safe, and your dryer is performing at its peak.
          </p>
        </section>

        {/* Section 2: Warning Signs */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Signs Your Vent is Clogged</h2>
          <p style={styles.paragraph}>
            Keep an eye out for these indicators that it’s time to call the experts at Killeen Air Duct Cleaning:
          </p>
          <ul style={styles.list}>
            <li><strong>Long Dry Times:</strong> Clothes take more than one cycle to dry.</li>
            <li><strong>Hot Dryer:</strong> The top of your dryer feels hot to the touch during a cycle.</li>
            <li><strong>Musty Odor:</strong> A damp or burning smell when the dryer is running.</li>
            <li><strong>No Airflow:</strong> Little to no air coming out of the exterior vent flap.</li>
            <li><strong>Excessive Lint:</strong> Finding lint behind or around the dryer unit.</li>
          </ul>
        </section>

        {/* New Image Gallery Section */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Our Recent Work</h2>
          <div style={styles.imageGrid}>
            <img src="/016.jpeg" alt="Dryer Vent Cleaning 1" style={styles.galleryImage} />
            <img src="/myman.jpeg" alt="Dryer Vent Cleaning 2" style={styles.galleryImage} />
            <img src="/041.jpeg" alt="Dryer Vent Cleaning 3" style={styles.galleryImage} />
            <img src="/023.jpeg" alt="Dryer Vent Cleaning 4" style={styles.galleryImage} />
          </div>
        </section>

        {/* Section 3: Our Process */}
        <section style={styles.infoBox}>
          <h2 style={styles.h2}>Our Professional Cleaning Process</h2>
          <div style={styles.stepGrid}>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>1. Inspection</h3>
                <p>We check the airflow levels and use cameras to see the extent of the lint buildup.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>2. Agitation</h3>
                <p>Using specialized rotating brushes, we break loose the trapped lint from the vent walls.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>3. Vacuuming</h3>
                <p>High-powered HEPA vacuums extract all debris, leaving no mess in your home.</p>
            </div>
            <div style={styles.stepCard}>
                <h3 style={styles.stepTitle}>4. Final Test</h3>
                <p>We verify the airflow once more to ensure your system is 100% clear and efficient.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Frequently Asked Questions</h2>
          <div style={styles.faqContainer}>
            {faqs.map((faq, index) => (
              <div key={index} style={styles.faqItem} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                <div style={styles.faqQuestion}>
                  <strong>{faq.q}</strong>
                  <span>{openFaq === index ? '-' : '+'}</span>
                </div>
                {openFaq === index && <p style={styles.faqAnswer}>{faq.a}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links */}
        <section style={styles.internalLinks}>
          <h3 style={styles.h3}>Serving Our Local Communities</h3>
          <div style={styles.linkGrid}>
            <Link style={styles.footerLink} to="/dryer-vent/killeen-tx">Killeen</Link>
            <Link style={styles.footerLink} to="/dryer-vent/temple-tx">Temple</Link>
            <Link style={styles.footerLink} to="/dryer-vent/belton-tx">Belton</Link>
            <Link style={styles.footerLink} to="/dryer-vent/harker-heights-tx">Harker Heights</Link>
            <Link style={styles.footerLink} to="/dryer-vent/copperas-cove-tx">Copperas Cove</Link>
            <Link style={styles.footerLink} to="/dryer-vent/salado-tx">Salado</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

const styles = {
  container: { backgroundColor: '#f9f9f9', color: '#333', fontFamily: '"Arial", sans-serif' },
  hero: { 
    height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', 
    background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/dryer-vent-hero.jpg")', 
    backgroundSize: 'cover', backgroundPosition: 'center', textAlign: 'center', color: 'white' 
  },
  heroOverlay: { padding: '20px', maxWidth: '850px' },
  h1: { fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '15px' },
  subtext: { fontSize: '1.2rem', marginBottom: '30px' },
  btnGroup: { display: 'flex', gap: '15px', justifyContent: 'center' },
  ctaButton: { background: '#007bff', color: 'white', padding: '15px 30px', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' },
  secondaryBtn: { background: 'white', color: '#007bff', padding: '15px 30px', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' },
  
  contentWrapper: { maxWidth: '1000px', margin: '0 auto', padding: '50px 20px' },
  section: { marginBottom: '60px' },
  h2: { fontSize: '2rem', color: '#0056b3', marginBottom: '20px', borderLeft: '5px solid #007bff', paddingLeft: '15px' },
  paragraph: { fontSize: '1.1rem', lineHeight: '1.7' },
  list: { paddingLeft: '20px', fontSize: '1.05rem', lineHeight: '2' },

  // Style for the new image gallery
  imageGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginTop: '20px' },
  galleryImage: { width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' },
  
  infoBox: { background: '#e9f2ff', padding: '40px', borderRadius: '10px', marginBottom: '60px' },
  stepGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '25px' },
  stepCard: { padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' },
  stepTitle: { color: '#007bff', marginBottom: '10px' },

  faqContainer: { marginTop: '20px' },
  faqItem: { borderBottom: '1px solid #ddd', padding: '15px 0', cursor: 'pointer' },
  faqQuestion: { display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem' },
  faqAnswer: { marginTop: '10px', color: '#555', lineHeight: '1.5' },

  internalLinks: { background: '#333', color: 'white', padding: '40px', borderRadius: '10px' },
  h3: { textAlign: 'center', marginBottom: '25px' },
  linkGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px', textAlign: 'center' },
  footerLink: { color: '#66b2ff', textDecoration: 'none' }
};

export default ChimneyCleaning;