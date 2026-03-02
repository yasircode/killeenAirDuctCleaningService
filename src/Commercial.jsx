import React from 'react';
import './Commercial.css';

const Commercial = () => {
  return (
    <section className="comm-section">
      <div className="comm-flex">
        <div className="comm-img-box">
          <img src="o8.jpeg" alt="Commercial Cleaning" />
        </div>
       <div className="comm-text-box">
  <h2>PREMIUM ATTIC INSULATION SERVICES: ENERGY EFFICIENCY AT ITS BEST</h2>
  
  <p>Is your HVAC system working overtime but your rooms still feel uncomfortable? The secret to a perfect indoor climate starts in your attic. At <strong>Killeen Air Duct Cleaning</strong>, we don’t just clean your air—we help you keep it at the perfect temperature.</p>

  <h3>Why Upgrade Your Attic Insulation?</h3>
  <ul>
    <li><strong>Slash Your Energy Bills:</strong> Proper insulation acts as a thermal barrier, reducing the load on your AC and heater.</li>
    <li><strong>Year-Round Comfort:</strong> Keep the scorching Texas heat out during summer and trap warmth inside during winter.</li>
    <li><strong>Enhanced HVAC Lifespan:</strong> A well-insulated attic prevents premature wear and tear on your unit.</li>
    <li><strong>Improved Air Quality:</strong> New, clean insulation prevents dust and pollutants from filtering into your living spaces.</li>
  </ul>

  <p>Our certified technicians use <strong>High-Performance Blow-In Insulation</strong> to ensure every nook and cranny is fully covered, creating a seamless thermal blanket for your home.</p>

  <button className="comm-btn">GET AN ESTIMATE</button>
</div>
      </div>    
    </section>
  );
};

export default Commercial;