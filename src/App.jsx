import { Routes, Route } from 'react-router-dom';
import './App.css';
// Sare Imports
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';
import Newadd from './components/Newadd';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Yahoo from   './components/yahoo';
import Hero from './components/Hero';
import IntroCard from './components/IntroCard';
import Any from './components/Any';
import ImageComparison from './components/ImageComparison';
import Benefits from './Benefits';
import Blue from './Blue';
import DuctCleaning from './DuctCleaning';
import MaintenanceGuide from './MaintenanceGuide';
import HVACLandingPage from './HVACLandingPage';
import Commercial from './Commercial';
import DuctService from './DuctService';
import DuctServiceFAQ from './DuctServiceFAQ';
import DuctLandingPage from './DuctLandingPage';
import Gallery from './Gallery';
import ServiceAreas from './components/ServiceAreas';
import Management from './components/Management'
import MultiStepQuoteForm from './components/MultiStepQuoteForm';
import KilleenServicePage from './KilleenServicePage';
import AirDuctnew from './components/AirDuctnew';





// --- NEW IMPORTS FOR SERVICES ---
import AirDuctCleaning from './components/AirDuctCleaning';
import Commercialcleaning from './components/Commerciacleaning';
import DryerVentCleaning from './components/DryerVentCleaning';
import Ductservice from './components/Ductservice';
import HVACInstallation from './components/ChimneySweepPage';
import ChimneyCleaning from './components/ChimneyCleaning';  
import DryerVentInspection from './DryerVentInspection';
import DryerVentRepair from './DryerVentRepair';
import DryerVentInstallation from './components/DryerVentInstallation';
import LintRemoval from './components/LintRemoval';
import ChimneySweepPage from './components/ChimneySweepPage';
import ChimneyServicePage from './components/ChimneyServicePage';
import DryerVentBlockage from './DryerVentBlockage';
import Dryerventflow from './components/Dryerventflow';


import AtticInsulation from './components/AtticInsulation';
import UVLightInstallation from './components/UVLightInstallation';

      
// --- NEW IMPORT FOR LOCATION ---
import Killeen from './components/Killeen';
import HarkerHeights from './components/HarkerHeights';
import CopperasCove from './components/CopperasCove';
import Nolanville from './components/Nolanville';
import FortCavazos from './components/FortCavazos';
import Belton from './components/Belton';
import Temple from './components/Temple';
import Salado from './components/Salado';
import Lampasas from './components/Lampasas';
import Georgetown from './components/Georgetown';
import LibertyHill from './components/LibertyHill';

import Waco from './components/Waco';
import Jarrell from './components/Jarrell';



// ... baaqi cities ke imports yahan karein







const Home = () => (
  <>
    <Hero />
    <br />
    <IntroCard />
    <br /><br />
    <ServiceAreas />
    <Gallery />
    <br />
    <Banner />
    <AirDuctnew/>
  
<MultiStepQuoteForm/>

    <br />
    <Management />
    <br />
    <Any />
    <ImageComparison />
    <Benefits />
    <br />
    <Blue />
    <Yahoo/>
    
    <MaintenanceGuide/>
    <DuctCleaning />
    <HVACLandingPage />
    <Newadd/>
    <Commercial />
    <DuctService />
    <DuctServiceFAQ />
    <br />
    <DuctLandingPage />
  </>
);

function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>

        <Route path="/" element={<Home />} />
       
{/* --- DYNAMIC ROUTES FOR SERVICES --- */}
        <Route path="/airductcleaning" element={<AirDuctCleaning />} />
        <Route path="/commerciacleaning" element={<Commercialcleaning />} />
        <Route path="/dryerventcleaning" element={<DryerVentCleaning />} />
        <Route path="/ductservice" element={<Ductservice />} />
        <Route path="/dryerventinspection" element={<DryerVentInspection />} />
        <Route path="/dryerventrepair" element={<DryerVentRepair />} />
        <Route path="/dryerventinstallation" element={<DryerVentInstallation />} />
        <Route path="/LintRemoval" element={<LintRemoval/>} />
        <Route path="/dryerventblockage" element={<DryerVentBlockage/>} />
        <Route path="/dryerventflow" element={<Dryerventflow/>} />



        <Route path="/Chimneycleaning" element={<ChimneyCleaning />} />
        <Route path="/ChimneySweepPage" element={<ChimneySweepPage />} />
         <Route path="/ChimneyServicePage" element={<ChimneyServicePage />} />


       
        <Route path="/atticinsulation" element={<AtticInsulation />} />
        <Route path="/uvlightinstallation" element={<UVLightInstallation />} />



      
       
        
        {/* --- DYNAMIC ROUTE FOR ALL CITIES --- */}
        {/* Ye line saare 8 cities ko handle karegi */}
    
        <Route path="/location/killeen" element={<Killeen />} />
        <Route path="/location/harkerheights" element={<HarkerHeights />} />
        <Route path="/location/copperascove" element={<CopperasCove />} />
        <Route path="/location/nolanville" element={<Nolanville />} />
        <Route path="/location/fortcavazos" element={<FortCavazos />} />
        <Route path="/location/belton" element={<Belton />} />
        <Route path="/location/temple" element={<Temple />} />
        <Route path="/location/salado" element={<Salado />} />
       <Route  path="/location/lampasas" element={<Lampasas/>}/>
        <Route path="/location/georgetown" element={<Georgetown />} />
        <Route path="/location/libertyhill" element={<LibertyHill />} />
        
        <Route path="/location/waco" element={<Waco />} />
        <Route path="/location/Jarrell" element={<Jarrell />} />
        <Route path="/:serviceSlug" element={<KilleenServicePage />} />
        
        
        
        
        

         {/* Aap yahan aur bhi routes add kar sakte hain */}

        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;