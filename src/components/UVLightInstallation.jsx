import React, { useState } from "react";
import DuctLandingPage from "../DuctLandingPage";
import Any from "./Any";
import Banner from "./Banner";

const UVLightInstallation = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a UV Light System for HVAC?",
      answer: "A UV light system is an advanced air purification technology installed inside your HVAC unit. It uses ultraviolet germicidal irradiation (UV-C) to neutralize bacteria, viruses, and mold spores as they pass through your air ducts in homes across Killeen and Temple."
    },
    {
      question: "How does UV-C help my Killeen home's air quality?",
      answer: "The light emits UV-C rays that penetrate the DNA of microorganisms, effectively destroying them. This ensures the air circulated in your Killeen or Belton home is significantly cleaner and free from biological growth on coils."
    },
    {
      question: "Will a UV system reduce my allergy symptoms?",
      answer: "Yes! Residents in Harker Heights and Copperas Cove often see a reduction in seasonal allergy symptoms because the UV system kills airborne mold and pollen that traditional filters might miss."
    },
    {
      question: "How often do the bulbs need replacement?",
      answer: "While the system is long-lasting, UV-C bulbs typically need replacement every 12 to 24 months to maintain peak germicidal effectiveness for your Central Texas home."
    }
  ];

  return (
    <div className="residential-page">
      <br></br>
         <br></br>
            <br></br>
      {/* HERO SECTION - Localized */}
      <section className="hero">
        <div className="overlay">
          <h1>HVAC UV Light Purification in Killeen, Temple & Belton</h1>
          <p className="breadcrumb">Home » Residential Services » UV Air Purification</p>
          <a href="tel:2549983484" className="call-btn">FREE PURIFICATION QUOTE: (254) 998-3484</a>
        </div>
      </section>

      {/* INTRO CONTENT SECTION */}
      <section className="content-section">
        <div className="container">
          <div className="text">
            <h2>Sanitize Your Air with UV-C Technology</h2>
            <p>
              In the humid seasons of <strong>Central Texas</strong>, mold and bacteria can easily thrive inside your HVAC system. At <strong>Killeen Air Duct Cleaning</strong>, we provide hospital-grade UV light system installation in <strong>Killeen, Harker Heights, and Copperas Cove</strong> to eliminate contaminants at the source.
            </p>
            
            <p>
              Our modern UV-C systems are designed to stop biological growth on your AC coils and neutralize airborne viruses before they reach your living room. Whether you are in <strong>Temple or Belton</strong>, our installation helps you breathe pure, sterilized air year-round.
            </p>
          </div>
          <div className="image">
            <img src="profile3.jpeg" alt="UV Light Installation Experts Killeen TX" className="styled-img" />
          </div>
        </div>
      </section>

      {/* DUAL BOX SECTION - Location Targeted */}
      <div className="info-grid-container">
        <div className="info-row">
          <div className="info-box">
            <div className="box-header">UV-C Disinfection: Killeen & Temple</div>
            <div className="box-body">
              <p>Protect your family in <strong>Bell County</strong> with our expert UV-C technology. This system targets the "invisible" threats that standard filters can't catch.</p>
              <ul className="list-items">
                <li>Elimination of Musty AC Odors</li>
                <li>Reduction in Airborne Flu & Cold Viruses</li>
                <li>Prevents Mold Slime on AC Coils</li>
                <li>Custom Fit for All HVAC Brands</li>
              </ul>
            </div>
          </div>
          <div className="info-box">
            <div className="box-header">Professional Setup in Belton & Cove</div>
            <div className="box-body">
              <p>Our technicians in <strong>Belton and Copperas Cove</strong> ensure your UV system is placed at the optimal angle for maximum sterilization. We don't just install; we calibrate the system for your specific ductwork layout.</p>
              <p><strong>Breathe sterilized air today</strong> with a setup designed for the Texas climate.</p>
              <a href="tel:2549983484" className="box-call-btn">SCHEDULE AN APPOINTMENT</a>
            </div>
          </div>
        </div>

        <div className="info-row">
          <div className="info-box">
            <div className="box-header">Coil Protection Services</div>
            <div className="box-body">
              <p>Mold buildup on coils reduces efficiency. By installing UV lights in your <strong>Temple, TX</strong> home, we keep your coils "factory clean," which can lower your energy bills and extend the life of your entire HVAC unit.</p>
            </div>
          </div>
          <div className="info-box">
            <div className="box-header">Indoor Air Sterilization</div>
            <div className="box-body">
              <p>For homes in <strong>Harker Heights</strong>, integrating a UV air purifier is the best defense against seasonal allergens. You will notice a significant improvement in air freshness and a reduction in dust-borne bacteria.</p>
            </div>
          </div>
        </div>
      </div>

      <Banner/>
      <Any/>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="faq-container">
          <h2 className="faq-title">Air Purification: FAQs for Central Texas</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon">{openFaq === index ? "−" : "+"}</span>
              </div>
              {openFaq === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .residential-page { font-family: 'Segoe UI', Roboto, sans-serif; overflow-x: hidden; color: #333; line-height: 1.6; }

        /* HERO */
        .hero {
          background-image: url("o7.jpeg");
          background-size: cover; background-position: center;
          min-height: 500px; display: flex; align-items: center; justify-content: center;
        }
        .overlay { background: rgba(0, 0, 0, 0.75); width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px 20px; color: white; }
        .overlay h1 { font-size: clamp(26px, 5vw, 42px); font-weight: 800; max-width: 950px; line-height: 1.2; text-transform: uppercase; }
        .call-btn { margin-top: 30px; background-color: #c62828; color: white; padding: 18px 45px; text-decoration: none; font-size: 19px; font-weight: bold; border-radius: 5px; transition: 0.3s; box-shadow: 0 4px 15px rgba(198, 40, 40, 0.4); }
        .call-btn:hover { background-color: #a51d1d; transform: translateY(-2px); }

        /* CONTENT */
        .content-section { padding: 80px 20px; background: #fff; }
        .container { max-width: 1200px; margin: auto; display: flex; align-items: center; gap: 60px; }
        .text { flex: 1.2; font-size: 18px; color: #444; }
        .text h2 { color: #0e1b4d; margin-bottom: 20px; font-size: 34px; font-weight: 700; }
        .image { flex: 1; }
        .styled-img { width: 100%; border-radius: 15px; box-shadow: 0 15px 35px rgba(0,0,0,0.1); }

        /* GRID BOXES */
        .info-grid-container { max-width: 1200px; margin: 20px auto 80px; padding: 0 20px; }
        .info-row { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px; }
        .info-box { border: 1px solid #eef0f2; border-radius: 10px; overflow: hidden; background: #fff; box-shadow: 0 5px 20px rgba(0,0,0,0.05); transition: 0.3s; }
        .info-box:hover { transform: translateY(-5px); box-shadow: 0 8px 30px rgba(0,0,0,0.1); }
        .box-header { background: #0e1b4d; color: white; padding: 22px; font-weight: bold; font-size: 22px; text-align: center; }
        .box-body { padding: 30px; line-height: 1.7; font-size: 17px; }
        .list-items { list-style: none; margin-top: 15px; }
        .list-items li { margin-bottom: 12px; position: relative; padding-left: 30px; }
        .list-items li::before { content: "✓"; color: #c62828; font-weight: bold; position: absolute; left: 0; font-size: 20px; }
        .box-call-btn { display: inline-block; margin-top: 25px; background: #c62828; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; transition: 0.3s; }
        .box-call-btn:hover { background: #0e1b4d; }

        /* FAQ */
        .faq-section { background: #f4f7f9; padding: 80px 20px; }
        .faq-container { max-width: 1000px; margin: auto; }
        .faq-title { text-align: center; margin-bottom: 45px; color: #0e1b4d; font-size: 36px; font-weight: 800; }
        .faq-item { background: white; margin-bottom: 15px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); border: 1px solid #e0e6ed; }
        .faq-question { padding: 22px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-weight: 700; color: #c62828; font-size: 20px; }
        .faq-answer { padding: 0 22px 22px; color: #555; border-top: 1px solid #f9f9f9; padding-top: 15px; font-size: 17px; }

        /* MOBILE RESPONSIVE */
        @media (max-width: 992px) {
          .container { flex-direction: column-reverse; text-align: center; gap: 40px; }
          .info-row { grid-template-columns: 1fr; }
          .text h2 { font-size: 28px; }
          .hero { min-height: 400px; }
          .box-header { font-size: 20px; }
          .overlay h1 { font-size:
           28px; }
        }
      `}</style>
      <DuctLandingPage/>
    </div>
  );
};

export default UVLightInstallation;