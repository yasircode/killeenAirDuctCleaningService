import React, { useState } from 'react';
import './DuctLandingPage.css';

const DuctLandingPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showTerms, setShowTerms] = useState(false);

  const faqData = [
    {
      question: "Why Is Professional Air Duct Cleaning Important?",
      answer: "Professional air duct cleaning removes dust, allergens, and other pollutants from your HVAC system, improving indoor air quality. It can also enhance system efficiency, leading to lower energy costs."
    },
    { question: "How Often Should Air Ducts Be Cleaned?", answer: "Typically every 3 to 5 years depending on household needs." },
    { question: "What Is The Process Of Air Duct Cleaning?", answer: "Our process includes inspection, vacuuming, and sanitization of the ductwork." },
    { question: "What Techniques And Tools Does America Air Duct Cleaning Use?", answer: "We use high-powered HEPA vacuums and specialized rotary brushes." },
    { question: "How Can I Schedule A Service With America Air Duct Cleaning?", answer: "Call us at (210) 777-0616 or visit our local office." }
  ];

  return (
    <div className="main-wrapper">
      {/* CTA SECTION (Iska height kam karne ke liye padding adjust ki hai) */}
      <section className="cta-section" style={{ padding: '20px 10px', minHeight: 'auto' }}>
        <h1 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Expert Air Duct Cleaning Services in Killeen, TX</h1>
        <div className="cta-text">
          <p>Enhance your indoor air quality and HVAC system performance with our certified air duct cleaning professionals.</p>
          <button className="cta-button" style={{ marginTop: '10px' }}>Request a Free Estimate</button>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="reviews-section">
        <h2>What Our Customers Say</h2>
        <div className="reviews-container">
          <div className="review-item">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"Killeen Air Duct Cleaners did an excellent job cleaning our ducts. The team was professional, punctual, and the air quality in our home has noticeably improved."</p>
            <p className="review-author">- Sarah M., Killeen, TX</p>
          </div>
          <div className="review-item">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"Outstanding service! They explained the process clearly and were very thorough. Our HVAC system is running more efficiently now."</p>
            <p className="review-author">- John D., Temple, TX</p>
          </div>
          <div className="review-item">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"Professional and reliable. The technicians were knowledgeable and cleaned everything to perfection. Great value for the price."</p>
            <p className="review-author">- Emily R., Belton, TX</p>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="footer-area">
        <div className="footer-top">
          <div className="footer-col contact-col">
            <h3 className="yellow-text">Killeen Air Duct Cleaners</h3>
            <h4 className="yellow-text">(254) 998-3484</h4>
            <h3>Killeen, TX,</h3>
            <h3>killeenair@gmail.com</h3>
            
            <div className="payment-icons">
              <div className="card-visa">VISA</div>
              <div className="card-mc">MC</div>
              <div className="card-disc">DISC</div>
              <div className="card-amex">AMEX</div>
            </div>
          </div>

          <div className="footer-col social-col">
            <div className="policy-links">
              <span>Privacy Policy</span> | <span className="terms-trigger" onClick={() => setShowTerms(true)}>Terms and Conditions</span>
            </div>
            
            <div className="social-row">
              <a 
                href="https://www.facebook.com/share/17DuWb7eAK/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <div className="s-icon fb">F</div>
              </a>

              <a href="Killeenair@gmail.com" className="social-link">
                <div className="s-icon tw">M</div>
              </a>

              <a href="#" className="social-link">
                <div className="s-icon yt">Y</div>
              </a>
            </div>
          </div>

          <div className="footer-col map-col">
            <div className="map-wrapper" style={{ overflow: 'hidden', borderRadius: '8px' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110123.456789!2d-97.7277!3d31.1171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86454bc5f2e8f77d%3A0x868b8b9b8b8b8b8b!2sKilleen%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890" 
                className="google-map-iframe"
                width="%"
                height="180" // Map ki height 300 se kam karke 180 kar di hai
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Killeen Air Duct Cleaners Map"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Copyright © 2026 <strong>Killeen Air Duct Cleaners  - All Rights Reserved.</strong></p>
        </div>
      </footer>

      {/* TERMS MODAL */}
      {showTerms && (
        <div className="modal-overlay" onClick={() => setShowTerms(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowTerms(false)}>×</button>
            <h2>Terms and Conditions</h2>
            <div className="modal-body">
              <p>These terms and conditions govern your use of KILLEEN Air Duct Cleaning Services...</p>
              <ul>
                <h6>Introduction</h6>
                <li>Welcome to our website. By accessing and using this website, you agree to adhere to the following Terms and Conditions.</li>
                <br />
                <li>Service estimates are subject to on-site inspection.</li>
                <li>Appointments must be cancelled 24 hours in advance.</li>
                <li>All services are performed by licensed professionals.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DuctLandingPage;