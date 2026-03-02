import React, { useState } from 'react';
import ImageComparison from './ImageComparison';
const Temple = () => {
  const [selectedService, setSelectedService] = useState(null);

  const styles = {
    wrapper: {
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: '#2d3436',
      backgroundColor: '#f0f4f8',
      lineHeight: '1.8',
      margin: 0,
      minHeight: '100vh'
    },
    header: {
      background: 'linear-gradient(rgba(49, 62, 80, 0.9), rgba(0, 74, 173, 0.8)), url("https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '100px 20px',
      textAlign: 'center',
      borderBottom: '10px solid #ffce00',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
    },
    sectionTitle: {
      color: '#004aad',
      fontSize: '2.2rem',
      fontWeight: '800',
      marginBottom: '20px',
      textAlign: 'center'
    },
    card: {
      backgroundColor: '#ffffff',
      padding: '30px',
      borderRadius: '20px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
      borderTop: '8px solid #004aad',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textAlign: 'center'
    },
    serviceGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '25px',
      marginTop: '40px'
    },
    detailView: {
      background: 'white',
      padding: '40px',
      borderRadius: '30px',
      boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
      marginTop: '20px'
    },
    btnBack: {
      padding: '12px 25px',
      backgroundColor: '#004aad',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      marginBottom: '20px',
      fontWeight: 'bold',
      display: 'inline-flex',
      alignItems: 'center'
    },
    ctaBox: {
      backgroundColor: '#004aad',
      color: 'white',
      padding: '60px 30px',
      borderRadius: '30px',
      textAlign: 'center',
      marginTop: '60px'
    },
    btnCall: {
      padding: '15px 40px',
      backgroundColor: '#ffce00',
      color: '#004aad',
      border: 'none',
      borderRadius: '50px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      margin: '10px'
    }
  };

  // --- Services Data Based on Your Requirements ---
  const services = {
  "air-duct": {
  "h2": "Professional Air Duct Cleaning in Temple, TX",
  "h3_subtitle": "Breathe Cleaner, Healthier Air in Your Central Texas Home",
  
  "intro": "Temple’s unique climate—marked by windy seasons and high cedar counts—carries vast amounts of pollen, allergens, and limestone dust directly into your return vents. Over time, these contaminants settle in your HVAC system, circulating every time your AC kicks on. Our specialized duct cleaning Temple TX service goes far beyond basic vacuuming; we provide a deep-clean restoration of your home’s breathing system.",

  "content": "Using industrial-grade HEPA filtration and high-velocity agitation tools, we provide a full system cleaning that covers every inch of your supply and return ductwork. We don't just move dust around; we extract it. Our process specifically targets stubborn contaminants like pet dander, microscopic mold spores, and construction debris. By clearing these obstructions, we help your HVAC system run more efficiently, reducing utility costs and ensuring medical-grade air quality for your family.",

  "process_steps": [
    "Pre-Cleaning Inspection: We use video borescope cameras to identify debris buildup and potential leaks.",
    "System Pressurization: The system is placed under negative pressure to ensure no dust escapes into your living space.",
    "Mechanical Agitation: Specialized brushes and 'air whips' loosen stuck-on grime from the duct walls.",
    "HEPA Extraction: A high-powered vacuum pulls all loosened contaminants out of your home and into our containment system.",
    "Final Sanitization (Optional): An antimicrobial fogging treatment to eliminate lingering odors and bacteria."
  ],

  "keywords": "duct cleaning Temple TX, vent cleaning Temple, HVAC duct service, professional air duct cleaners, AC duct sanitizing Temple, improved indoor air quality",

  "benefits": [
    "Comprehensive System Hygiene: Deep scrubbing of both supply and return lines.",
    "Enhanced Equipment Longevity: Reduced strain on your blower motor by improving airflow.",
    "Allergen Eradication: Significant removal of Temple-specific allergens like cedar and limestone dust.",
    "Odor Elimination: Removes the source of 'musty' or 'dusty' smells in the home.",
    "Energy Efficiency: Potential reduction in monthly energy bills by up to 15% through better airflow."
  ],

  "cta": "Don't let your ducts collect Texas dust. Schedule your Temple, TX air duct inspection today!"
},
   "hvac-system": {
  "h2": "Comprehensive HVAC System & Coil Cleaning in Temple, TX",
  "h3_subtitle": "Protect Your Investment and Slash Your Cooling Costs",
  
  "intro": "In larger Temple homes, your HVAC system works overtime to combat the Texas heat. This is our most critical mechanical service; dusty, clogged coils are the #1 cause of AC compressor failure during our brutal 100°F+ summers. If your system is running constantly but your home isn't staying cool, a deep mechanical cleaning is likely the solution.",

  "content": "Our AC system cleaning Temple service targets the 'heart' of your machine. When dust and limestone particles from the Central Texas air coat your evaporator coils and blower motors, your system has to work twice as hard to move half the air. By performing a surgical-grade cleaning of the internal components, we can restore your system's efficiency, potentially lowering your monthly energy bills by up to 20% and preventing the $2,000+ 'emergency breakdown' scenarios common in July and August.",

  "technical_details": [
    "Evaporator Coil Restoration: Removing the 'blanket' of dust that prevents heat exchange.",
    "Blower Motor Calibrated Cleaning: Removing weight from fan blades to prevent motor burnout.",
    "Air Handler Sanitization: Deep cleaning the cabinet to prevent mold spores from entering the airstream.",
    "Return Plenum Seal Check: Ensuring the main air intake isn't pulling hot attic air into your system."
  ],

  "keywords": "HVAC cleaning Temple TX, AC system cleaning Temple, central air cleaning Temple, evaporator coil cleaning Temple, HVAC blower motor service, air handler cleaning Texas",

  "included": [
    "Blower motor & assembly cleaning",
    "Evaporator coil (indoor) chemical-free wash",
    "Air handler cabinet vacuuming & wiping",
    "Return plenum & transition cleaning",
    "Drain pan & condensate line clearing"
  ],

  "benefits": [
    "Peak Cooling Performance: Reach your thermostat's target temperature faster.",
    "Drastic Energy Savings: Lower electricity consumption by up to 20%.",
    "System Longevity: Extend the life of your AC unit by 3-5 years.",
    "Humidity Control: Clean coils remove moisture from the air much more effectively.",
    "Warranty Protection: Regular professional cleaning helps maintain manufacturer warranties."
  ]
},
   "dryer-vent": {
  "h2": "Expert Dryer Vent Cleaning in Temple, TX",
  "h3_subtitle": "Eliminate Fire Hazards & Cut Your Drying Time in Half",
  
  "intro": "In Central Texas, dryer vents often work overtime, especially for large families. Fire safety isn't just a buzzword—compacted lint is highly flammable and remains a leading cause of household fires across Texas. If your clothes are taking more than one cycle to dry, or if the top of your dryer feels hot to the touch, your vent is likely a ticking time bomb of trapped lint.",

  "content": "Our professional dryer vent cleaning Temple service goes deep into the venting system where standard vacuums can't reach. We use high-pressure compressed air and rotary brush systems to clear obstructions from the back of the dryer all the way to the exterior exit. By removing years of accumulated lint, bird nests, and debris, we restore proper airflow. This doesn't just prevent fires; it slashes your energy consumption and prevents your dryer's heating element from burning out prematurely.",

  "safety_indicators": [
    "Excessive Heat: The dryer or laundry room feels unusually hot during a cycle.",
    "Long Dry Times: Clothes require 2-3 cycles to dry completely.",
    "Burning Smell: A distinct 'toasty' or burning odor when the dryer is running.",
    "Vent Flap Issues: The exterior vent flap doesn't open when the dryer is on."
  ],

  "keywords": "dryer vent cleaning Temple TX, lint removal Temple, dryer fire prevention, professional vent sweep, clogged dryer vent repair Texas",

  "benefits": [
    "Maximum Fire Prevention: Eliminate the #1 fuel source for laundry room fires.",
    "Reduced Utility Bills: Shorter cycle times mean less electricity or gas usage.",
    "Appliance Longevity: Prevent your dryer from overheating and mechanical failure.",
    "Clothing Care: Less tumbling time means less wear and tear on your favorite clothes.",
    "Allergen Reduction: Prevents moist lint from creating a breeding ground for mold."
  ]
},
   "chimney": {
  "h2": "Professional Chimney Sweep & Fireplace Safety in Temple, TX",
  "h3_subtitle": "Ensure Your Hearth is Safe Before the First Texas Freeze",
  
  "intro": "When the Central Texas winter chill finally hits, there’s nothing better than a crackling fire. However, an unmaintained chimney is a major liability. Our professional chimney sweep Temple TX service ensures your fireplace is free of combustible residues and structural hazards, allowing you to enjoy your home safely.",

  "content": "Our certified technicians perform a multi-point safety inspection alongside a thorough cleaning. We specialize in the removal of 'Creosote'—a highly flammable byproduct of wood-burning that accounts for the majority of chimney fires. Beyond cleaning, we check for masonry cracks, flue obstructions (like bird nests or debris), and damper functionality. Whether you have a traditional masonry fireplace or a modern wood-burning stove, we ensure your system exhausts smoke perfectly without backdrafting into your living room.",

  "inspection_points": [
    "Creosote & Soot Extraction: Removing layers of flammable glazed creosote.",
    "Flue & Liner Inspection: Checking for cracks that could leak carbon monoxide.",
    "Obstruction Removal: Clearing out 'Temple wildlife' like swifts or squirrels.",
    "Cap & Crown Analysis: Ensuring water isn't leaking into your home's structure."
  ],

  "keywords": "Chimney sweep Temple TX, fireplace inspection Temple, creosote removal, chimney repair Temple, flue cleaning Texas, wood stove service",

  "benefits": [
    "Zero-Mess Guarantee: Our high-power dust containment keeps your living room spotless.",
    "Fire Prevention: Elimination of Stage 1, 2, and 3 creosote deposits.",
    "Carbon Monoxide Safety: Ensuring toxic gases exit the home properly.",
    "Improved Efficiency: Better airflow means more heat and less wasted wood.",
    "Peace of Mind: Knowing your family is protected by a certified inspection."
  ]
},
    "replacement": {
      h2: "Air Duct Replacement in Temple, TX",
      intro: "Sometimes cleaning isn't enough. If your Temple home has 15+ year old ductwork, it might be time for an upgrade.",
      content: "We replace torn, crushed, or rodent-damaged ducts with high-efficiency new ductwork Temple installations.",
      keywords: "duct replacement Temple TX, air duct installation Temple, new ductwork Temple",
      signs: ["Old flexible ductwork (15+ years)", "Torn or crushed ducts", "Poor airflow in specific rooms", "Severe mold contamination", "Rodent damage"],
      benefits: ["Maximum airflow", "Perfect indoor air quality", "Significant energy savings"]
    },
    "insulation": {
      h2: "Attic Insulation Services in Temple, TX",
      intro: "Texas heat is relentless. Without proper insulation, your AC is fighting a losing battle against the sun.",
      content: "Our blown-in insulation Temple service creates a thermal barrier that keeps the heat out and the cool air in.",
      keywords: "attic insulation Temple TX, blown-in insulation Temple, insulation contractor Temple",
      benefits: ["Blown-in high-R-value insulation", "Removal of old, thin insulation", "Reduced HVAC strain", "Lower utility bills during Texas summers"]
    }
  };

  // --- Render Detail Page ---
  if (selectedService) {
    const s = services[selectedService];
    return (
      <div style={styles.wrapper}>
        <div style={styles.container}>
          <button onClick={() => setSelectedService(null)} style={styles.btnBack}>← Back to Services</button>
          <div style={styles.detailView}>
            <h2 style={{color: '#004aad', fontSize: '2.5rem'}}>{s.h2}</h2>
            <p style={{fontSize: '1.2rem', marginBottom: '20px'}}><strong>{s.intro}</strong></p>
            <p style={{fontSize: '1.1rem'}}>{s.content}</p>
            
            <div style={{marginTop: '30px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
              <div style={{backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '15px'}}>
                <h4 style={{color: '#004aad'}}>What We Do:</h4>
                <ul>
                  {(s.included || s.benefits || s.signs).map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div style={{backgroundColor: '#e3f2fd', padding: '20px', borderRadius: '15px'}}>
                <h4 style={{color: '#004aad'}}>Service Keywords:</h4>
                <p style={{fontStyle: 'italic', fontSize: '0.9rem'}}>{s.keywords}</p>
              </div>
            </div>
            
            <button style={{...styles.btnCall, width: '100%', marginTop: '30px'}}>Get Free Estimate for {s.h2}</button>
          </div>
        </div>
      </div>
    );
  }

  // --- Render Main Page ---
  return (
    <div style={styles.wrapper}>
      <header style={styles.header}>
        <h1 style={{fontSize: '3rem', margin: 0}}>Air Duct Cleaning in Temple, TX</h1>
        <h3 style={{fontWeight: '300'}}>Killeen Air Duct Cleaners - Local Experts</h3>
      </header>

      <div style={styles.container}>
        {/* Intro */}
        <section style={{backgroundColor: 'white', padding: '40px', borderRadius: '20px', marginTop: '-60px', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}}>
          <h2 style={{color: '#004aad'}}>The Central Texas Air Challenge</h2>
          <p>The <strong>Texas heat</strong> is more than just uncomfortable—it forces your AC into overdrive. Heavy AC use leads to massive <strong>dust and allergen</strong> buildup. Our mission is to restore your home's <strong>energy efficiency</strong> and air purity.</p>
        </section>

        <h2 style={{...styles.sectionTitle, marginTop: '60px'}}>Our Professional Services in Temple, TX</h2>
        <p style={{textAlign: 'center'}}>Click on a service below to see full details and benefits.</p>

        <div style={styles.serviceGrid}>
          <div style={styles.card} onClick={() => setSelectedService('air-duct')}>
            <h3>🌬️ Air Duct Cleaning in Temple,TX</h3>
            <p>Full vent cleaning for Temple homes.</p>
            <span style={{color: '#004aad', fontWeight: 'bold'}}>Learn More →</span>
          </div>
          <div style={{...styles.card, borderTopColor: '#00d2ff'}} onClick={() => setSelectedService('hvac-system')}>
            <h3>❄️ HVAC System Cleaning in Temple, TX</h3>
            <p>Blower & Coil cleaning for max performance.</p>
            <span style={{color: '#00d2ff', fontWeight: 'bold'}}>Learn More →</span>
          </div>
          <div style={{...styles.card, borderTopColor: '#e17055'}} onClick={() => setSelectedService('dryer-vent')}>
            <h3>🧺 Dryer Vent Cleaning in Temple, TX</h3>
            <p>Fire prevention & faster drying.</p>
            <span style={{color: '#e17055', fontWeight: 'bold'}}>Learn More →</span>
          </div>
          <div style={{...styles.card, borderTopColor: '#2d3436'}} onClick={() => setSelectedService('chimney')}>
            <h3>🧹 Chimney Sweep in Temple, TX</h3>
            <p>Creosote removal & winter safety.</p>
            <span style={{color: '#2d3436', fontWeight: 'bold'}}>Learn More →</span>
          </div>
          <div style={{...styles.card, borderTopColor: '#d63031'}} onClick={() => setSelectedService('replacement')}>
            <h3>🛠️ Duct Replacement in Temple, TX</h3>
            <p>New ductwork for better airflow.</p>
            <span style={{color: '#d63031', fontWeight: 'bold'}}>Learn More →</span>
          </div>
          <div style={{...styles.card, borderTopColor: '#00b894'}} onClick={() => setSelectedService('insulation')}>
            <h3>🏠 Attic Insulation in Temple, TX</h3>
            <p>Slash energy bills with blown-in insulation.</p>
            <span style={{color: '#00b894', fontWeight: 'bold'}}>Learn More →</span>
          </div>
        </div>

        {/* FAQ Section */}
        <section style={{marginTop: '80px'}}>
          <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <div style={{background: 'white', padding: '20px', borderRadius: '15px'}}>
              <strong>How do I know if my air ducts need replacement?</strong>
              <p>If your ducts are over 15 years old, damaged, or causing airflow problems, replacement may be necessary.</p>
            </div>
            <div style={{background: 'white', padding: '20px', borderRadius: '15px'}}>
              <strong>Does attic insulation really lower energy bills in Texas?</strong>
              <p>Yes. Proper attic insulation reduces heat transfer and lowers cooling costs significantly during brutal Texas summers.</p>
            </div>
            <div style={{background: 'white', padding: '20px', borderRadius: '15px'}}>
              <strong>What’s the difference between duct cleaning and HVAC cleaning?</strong>
              <p>Duct cleaning focuses on the air ducts, while HVAC cleaning includes cleaning internal system components like coils and blowers.</p>
            </div>
          </div>
        </section>
        <ImageComparison/>

        {/* CTA Section */}
        <div style={styles.ctaBox}>
          <h2>Get a Free Estimate in Temple, TX</h2>
          <p>Call Killeen Air Duct Cleaners today for professional services in Temple and surrounding areas.</p>
          <button style={styles.btnCall}>📞 Call Now: (254) 998-3484</button>
          <button style={{...styles.btnCall, backgroundColor: 'white'}}>📩 Request Estimate</button>
          
        </div>
      </div>
    </div>
  );
};

export default Temple;