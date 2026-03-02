import React, { useState } from "react";
import DuctLandingPage from "../DuctLandingPage";
import Banner from "./Banner";
import Any from "./Any";

const HVACInstallation = () => {
  // State for Accordion FAQs
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What does HVAC installation and repair involve in Central Texas?",
      answer: "HVAC installation involves setting up the furnace, AC unit, and ductwork optimized for the Texas heat. Repair includes diagnosing issues like faulty thermostats, refrigerant leaks, or broken compressors to restore comfort in Killeen, Temple, and Belton homes."
    },
    {
      question: "How often should HVAC systems be serviced in Bell County?",
      answer: "Given the intense summers in Killeen and Harker Heights, we recommend servicing your system twice a year—once in the spring for AC and once in the fall for heating—to prevent emergency breakdowns."
    },
    {
      question: "What are the signs that my HVAC system needs repairs?",
      answer: "Common signs include unusual noises, inconsistent temperatures between rooms, unusually high energy bills, and poor airflow in your Killeen or Copperas Cove property."
    },
    {
      question: "Is it better to repair or replace my AC unit?",
      answer: "If your unit is over 10-15 years old and repair costs are more than half its value, a replacement is often more cost-effective. We provide expert consultations across Temple and Belton to help you decide."
    },
    {
      question: "Why choose Killeen Air Duct Cleaning for HVAC services?",
      answer: "We are local experts serving Killeen, Fort Cavazos, and surrounding cities. We provide transparent pricing, certified technicians, and specialized knowledge of Texas HVAC requirements."
    }
  ];

  return (
    <div className="residential-page">
      <br></br>
       <br></br>
        <br></br>
     
         
      
      {/* HERO SECTION */}
      <section className="hero">
        <div className="overlay">
          <h1>HVAC Installation & Repair in Killeen, Temple & Belton, TX</h1>
          <p className="breadcrumb">Home » HVAC Services » Central Texas Installation & Repair</p>
          <a href="tel:2549983484" className="call-btn">GET AN ESTIMATE: (254) 998-3484</a>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="content-section">
        <div className="container">
          <div className="text">
            <h2>Reliable HVAC Solutions Across Killeen & Temple, TX</h2>
            <p>
              When the Texas heat hits, a high-performing AC system is not a luxury—it's a necessity. At <strong>Killeen Air Duct Cleaning</strong>, we provide top-tier HVAC installation and repair services tailored to the unique climate of <strong>Killeen, Harker Heights, and Copperas Cove</strong>.
            </p>
            <p>
              From complex system diagnostics in <strong>Temple</strong> to full unit replacements in <strong>Belton</strong>, our trained technicians ensure your home stays cool in the summer and warm in the winter. We specialize in energy-efficient systems that save you money on utility bills.
            </p>
          </div>
          <div className="image">
            <img src="o5.jpeg" alt="HVAC Technicians in Killeen TX" className="square-img" />
          </div>
        </div>
      </section>
      <section className="content-section">
  <div className="container">
    <div className="text">
      <h2>Deep HVAC System Sanitization & Airflow Optimization</h2>
      <p>
        Killeen ki dhool aur humidity aapke HVAC coils aur blowers par jam sakti hai, jo system ko slow kar deti hai. Hum provide karte hain <strong>professional HVAC cleaning services</strong> jo sirf surface tak mahdood nahi hain. Hum aapke system ke internal components ko deep-clean karte hain taake aapko mile <strong>maximum airflow aur kam energy consumption</strong>.
      </p>
      <p>
        Chahe aap <strong>Nolanville</strong> mein ho ya <strong>Fort Cavazos</strong> ke kareeb, hamara cleaning process mold aur bacteria ko eliminate karta hai. Isse na sirf aapka AC behtar cooling karta hai, balki aapke <strong>indoor air quality (IAQ)</strong> index ko bhi behtar banata hai—taake aapki family fresh air mein saans le sake.
      </p>
    </div>
    <div className="image">
      {/* Change image source to something relevant to cleaning if available */}
      <img src="031.jpeg" alt="Professional HVAC Cleaning and Sanitization in Central Texas" className="square-img" />
    </div>
  </div>
</section>

      <Banner/>
      <Any/>

      {/* STEP BY STEP DUAL BOX LAYOUT */}
      <div className="dual-box-container">
        
        {/* Row 1 */}
        <div className="grid-flex">
          <div className="info-card">
            <div className="card-header">HVAC Sanitation & Performance</div>
            <div className="card-body">
              <p>In cities like <strong>Killeen and Fort Cavazos</strong>, dust and allergens can quickly clog your HVAC system. We aim to <strong>improve efficiency, extend lifespan</strong>, and protect your family from poor indoor air quality.</p>
              <p>Our experts use advanced tools to clean and sanitize your units, ensuring that your HVAC system breathes as easily as you do.</p>
            </div>
          </div>
          <div className="info-card">
            <div className="card-header">Service Areas in Central Texas</div>
            <div className="card-body">
              <p>We are proud to be the top-rated HVAC service provider for the following communities:</p>
              <ul className="service-list">
                <li><strong>Killeen & Fort Cavazos</strong> - Rapid Response</li>
                <li><strong>Temple & Belton</strong> - Full System Installs</li>
                <li><strong>Harker Heights</strong> - Maintenance Plans</li>
                <li><strong>Copperas Cove & Nolanville</strong> - Repair Services</li>
              </ul>
            </div>
          </div>
        </div>
        

        {/* Row 2 */}
        <div className="grid-flex">
          <div className="info-card">
            <div className="card-header">Prompt Repair & Emergency Service</div>
            <div className="card-body">
              <p>Accumulated wear and tear can cause your AC to fail during the hottest Killeen days. Our team provides fast, efficient debris removal and mechanical repairs to get your system back online.</p>
              <a href="tel:2549983484" className="inline-call">CALL FOR REPAIR: (254) 998-3484</a>
            </div>
          </div>
          <div className="info-card">
            <div className="card-header">Modern HVAC Upgrades</div>
            <div className="card-body">
              <p>Looking for a more efficient system in <strong>Temple or Belton</strong>? We provide the latest in HVAC technology to reduce your carbon footprint and energy costs.</p>
              <ul className="service-list">
                <li>Energy-Star Unit Installation</li>
                <li>Smart Thermostat Integration</li>
                <li>Zoned Cooling Solutions</li>
                <li>Full Ductwork Integration</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="faq-container">
          <h2>Central Texas HVAC: Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
              <div className="faq-question">
                <span>{faq.question}</span>
                <span className="icon">{openIndex === index ? "−" : "+"}</span>
              </div>
              {openIndex === index && (
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
        .residential-page { font-family: 'Segoe UI', Arial, sans-serif; background: #fff; color: #333; }

        /* HERO */
        .hero {
          background-image: url("o5.jpeg");
          background-size: cover; background-position: center;
          min-height: 500px; display: flex; align-items: center; justify-content: center;
        }
        .overlay { background: rgba(0, 0, 0, 0.7); width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px 20px; color: white; }
        .overlay h1 { font-size: 40px; font-weight: 800; max-width: 950px; text-transform: uppercase; }

        /* INTRO */
        .content-section { padding: 80px 20px; background: #fdfdfd; }
        .container { max-width: 1200px; margin: auto; display: flex; align-items: center; gap: 60px; }
        .text { flex: 1.2; font-size: 18px; line-height: 1.8; }
        .text h2 { color: #0e1b4d; margin-bottom: 20px; font-size: 32px; font-weight: 700; }
        .square-img { width: 100%; max-width: 450px; aspect-ratio: 1/1; object-fit: cover; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }

        /* DUAL BOX STYLE */
        .dual-box-container { max-width: 1200px; margin: 40px auto; padding: 0 20px; }
        .grid-flex { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px; }
        .info-card { background: #fff; border: 1px solid #eee; border-radius: 8px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
        .card-header { background: #0e1b4d; color: white; padding: 22px; text-align: center; font-weight: bold; font-size: 21px; }
        .card-body { padding: 30px; font-size: 17px; line-height: 1.7; }
        
        .service-list { list-style: none; margin-top: 15px; }
        .service-list li { padding-left: 30px; position: relative; margin-bottom: 12px; font-weight: 500; }
        .service-list li::before { content: "✓"; position: absolute; left: 0; color: #c62828; font-weight: bold; font-size: 18px; }

        .inline-call { display: inline-block; margin-top: 15px; background: #c62828; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; font-weight: bold; transition: 0.3s; }
        .inline-call:hover { background: #0e1b4d; }

        /* FAQ */
        .faq-section { background: #f4f7fa; padding: 80px 20px; }
        .faq-container { max-width: 1000px; margin: auto; }
        .faq-container h2 { text-align: center; margin-bottom: 40px; color: #0e1b4d; font-size: 32px; font-weight: 800; }
        .faq-item { background: white; border: 1px solid #e0e6ed; margin-bottom: 12px; cursor: pointer; border-radius: 8px; transition: 0.3s; }
        .faq-item:hover { border-color: #c62828; }
        .faq-question { padding: 20px; display: flex; justify-content: space-between; font-weight: bold; color: #0e1b4d; font-size: 18px; }
        .faq-answer { padding: 0 20px 20px; color: #555; line-height: 1.6; border-top: 1px solid #f1f1f1; padding-top: 15px; }
        .icon { color: #c62828; font-size: 22px; }

        /* MOBILE */
        @media (max-width: 992px) {
          .container { flex-direction: column; text-align: center; }
          .grid-flex { grid-template-columns: 1fr; }
          .overlay h1 { font-size: 30px; }
          .hero { min-height: 400px; }
        }
      `}</style>
      
      <DuctLandingPage/>
    </div>
  );
};

export default HVACInstallation;