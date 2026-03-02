import React, { useState } from "react";
import DuctLandingPage from "../DuctLandingPage";
import Any from "./Any";
import Banner from "./Banner";

const AtticInsulation = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Why is attic insulation important for Killeen & Temple homes?",
      answer: "In Killeen and Temple, TX, summer temperatures can exceed 100°F. Proper insulation acts as a heat shield, keeping your home cool and significantly reducing the load on your AC system, which lowers energy bills."
    },
    {
      question: "What types of attic insulation do you offer in Central Texas?",
      answer: "We provide high-performance Blown-in Cellulose, Fiberglass Batts, and Radiant Barriers. Each solution is tailored to the specific architectural needs of homes in Harker Heights, Belton, and Killeen."
    },
    {
      question: "Can proper insulation save me money on utility bills?",
      answer: "Yes! Residents in Copperas Cove and Killeen report up to a 15-20% decrease in monthly cooling and heating costs after upgrading to modern R-Value standards."
    },
    {
      question: "How long does attic insulation last?",
      answer: "Typically, insulation lasts 15-20 years. However, if you live in a high-humidity area like Belton or near the lakes, moisture or pests can damage it sooner. We offer free inspections to check your insulation levels."
    },
    {
      question: "Is attic insulation removal necessary before new installation?",
      answer: "If the old insulation is moldy, pest-infested, or severely compressed, we recommend full removal to ensure a clean, healthy, and effective thermal barrier for your home."
    }
  ];

  return (
    <div className="residential-page">
      <br></br>
      <br></br>
      <br></br>
      {/* HERO SECTION - Targeted for Central Texas */}
      <section className="hero">
        <div className="overlay">
          <h1>Premium Attic Insulation in Killeen, Temple & Belton, TX</h1>
          <p className="breadcrumb">Home » Residential Services » Energy-Saving Attic Insulation</p>
          <a href="tel:2549983484" className="call-btn">FREE ENERGY AUDIT: (254) 998-3484</a>
        </div>
      </section>

      {/* INTRO CONTENT SECTION */}
      <section className="content-section">
        <div className="container">
          <div className="text">
            <h2>Combat the Texas Heat with Expert Attic Solutions</h2>
            <p>
              Is your upstairs always hotter than the rest of the house? At <strong>Killeen Air Duct Cleaning</strong>, we specialize in high-R-value attic insulation that turns your home into an energy-efficient sanctuary. We serve <strong>Killeen, Harker Heights, and Copperas Cove</strong> with professional-grade materials.
            </p>
            <p>
              
              Our team doesn't just "add" insulation; we analyze your home's thermal envelope. Whether you are in <strong>Temple or Belton</strong>, our modern installation techniques prevent heat from seeping through your ceiling, keeping your family comfortable year-round.
            </p>
          </div>
          <div className="image">
            <img src="profile3.jpeg" alt="Attic Insulation Installation Killeen TX" className="styled-img" />
          </div>
        </div>
      </section>

      {/* UPGRADED DUAL BOX SECTION */}
      <div className="info-grid-container">
        <div className="info-row">
          <div className="info-box">
            <div className="box-header">Central Texas Insulation Services</div>
            <div className="box-body">
              <p>We provide the most reliable insulation upgrades in <strong>Bell County</strong>. Our comprehensive services include:</p>
              <ul className="list-items">
                <li><strong>Blown-in Cellulose:</strong> Eco-friendly & high-density.</li>
                <li><strong>Fiberglass Batt Installation:</strong> Perfect for targeted areas.</li>
                <li><strong>Attic Air Sealing:</strong> Plugging leaks around pipes and wires.</li>
                <li><strong>Radiant Barrier Foil:</strong> Reflecting 97% of radiant heat.</li>
                <li><strong>Serving:</strong> Killeen, Temple, Belton, & Cove.</li>
              </ul>
            </div>
          </div>
          <div className="info-box">
            <div className="box-header">Energy Efficiency Optimization</div>
            <div className="box-body">
              <p>Old insulation loses its effectiveness over time. Our skilled team in <strong>Harker Heights</strong> uses specialized blowers to ensure 100% coverage, eliminating "hot spots" in your ceiling and drastically reducing AC wear and tear.</p>
              <a href="tel:2549983484" className="box-call-btn">GET A FREE QUOTE</a>
            </div>
          </div>
        </div>

        <div className="info-row">
          <div className="info-box">
            <div className="box-header">Safe Insulation Removal</div>
            <div className="box-body">
              <p>Contaminated or wet insulation can lead to mold and poor air quality. We provide high-powered vacuum removal for homes in <strong>Temple and Belton</strong>, ensuring all dust and pathogens are safely extracted before new material goes in.</p>
            </div>
          </div>
          <div className="info-box">
            <div className="box-header">Rodent Proofing & Sanitation</div>
            <div className="box-body">
              <p>Pests love old insulation. As part of our service in <strong>Killeen</strong>, we check for rodent entry points and offer attic sanitation to ensure your new insulation stays clean and your air stays pure for years to come.</p>
            </div>
          </div>
        </div>
      </div>

      <Banner/>
      <Any/>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="faq-container">
          <h2 className="faq-title">Attic Insulation & Efficiency: FAQs</h2>
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
        .residential-page { font-family: 'Segoe UI', Arial, sans-serif; overflow-x: hidden; color: #333; }

        /* HERO */
        .hero {
          background-image: url("o8.jpeg");
          background-size: cover; background-position: center;
          min-height: 550px; position: relative; display: flex; align-items: center; justify-content: center;
        }
        .overlay { background: rgba(0, 0, 0, 0.75); width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px 20px; color: white; }
        .overlay h1 { font-size: clamp(26px, 5vw, 42px); font-weight: 800; max-width: 950px; text-transform: uppercase; line-height: 1.2; }
        .call-btn { margin-top: 30px; background-color: #c62828; color: white; padding: 18px 45px; text-decoration: none; font-size: 19px; font-weight: bold; border-radius: 5px; transition: 0.3s; box-shadow: 0 4px 15px rgba(0,0,0,0.3); }
        .call-btn:hover { background-color: #a51d1d; transform: translateY(-2px); }

        /* CONTENT SECTION */
        .content-section { padding: 80px 20px; background: #fff; }
        .container { max-width: 1200px; margin: auto; display: flex; align-items: center; gap: 60px; }
        .text { flex: 1.2; font-size: 18px; line-height: 1.8; color: #444; }
        .text h2 { color: #0e1b4d; margin-bottom: 25px; font-size: 34px; font-weight: 700; }
        .styled-img { width: 100%; max-width: 500px; border-radius: 15px; box-shadow: 0 12px 30px rgba(0,0,0,0.15); }

        /* BOX GRID */
        .info-grid-container { max-width: 1200px; margin: 20px auto 80px; padding: 0 20px; }
        .info-row { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px; }
        .info-box { border: 1px solid #eee; border-radius: 10px; overflow: hidden; background: #fff; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: 0.3s; }
        .info-box:hover { transform: translateY(-5px); box-shadow: 0 8px 25px rgba(0,0,0,0.1); }
        .box-header { background: #0e1b4d; color: white; padding: 20px; font-weight: bold; font-size: 20px; text-align: center; }
        .box-body { padding: 30px; line-height: 1.7; font-size: 17px; }
        .list-items { list-style: none; margin-top: 15px; }
        .list-items li { margin-bottom: 10px; position: relative; padding-left: 25px; }
        .list-items li::before { content: "✓"; color: #c62828; font-weight: bold; position: absolute; left: 0; }
        .box-call-btn { display: inline-block; margin-top: 20px; background: #c62828; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; font-weight: bold; transition: 0.3s; }
        .box-call-btn:hover { background: #0e1b4d; }

        /* FAQ */
        .faq-section { background: #f4f7fa; padding: 80px 20px; }
        .faq-container { max-width: 1000px; margin: auto; }
        .faq-title { text-align: center; margin-bottom: 45px; color: #0e1b4d; font-size: 36px; font-weight: 800; }
        .faq-item { background: white; border: 1px solid #e0e6ed; margin-bottom: 15px; border-radius: 8px; transition: 0.3s; }
        .faq-item:hover { border-color: #c62828; }
        .faq-question { padding: 22px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-weight: 700; color: #0e1b4d; font-size: 19px; }
        .faq-answer { padding: 0 22px 22px; color: #555; line-height: 1.7; border-top: 1px solid #f1f1f1; padding-top: 15px; font-size: 17px; }
        .faq-icon { color: #c62828; font-size: 22px; font-weight: bold; }

        /* MOBILE RESPONSIVE */
        @media (max-width: 992px) {
          .container { flex-direction: column-reverse; text-align: center; gap: 40px; }
          .info-row { grid-template-columns: 1fr; }
          .hero { min-height: 450px; }
          .overlay h1 { font-size: 28px; }
        }
      `}</style>
      <DuctLandingPage/>
    </div>
  );
};

export default AtticInsulation;