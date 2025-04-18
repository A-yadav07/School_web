import React from "react";
import Home from "../pages/Home";
import TrustSection from "../component/TrustSection.jsx";
import ContactPage from "../Component/Contact.jsx";
import Comperhensive from "../component/comprohensive.jsx";
import Posibility from "../component/Posibility.jsx";
import Saasable from "../component/Saasable.jsx";
import PowerfulAdminInterface from "../component/PowerfulAdminInterface.jsx";
import Faq from "../component/Faq.jsx";
import SaasAbleFigma from "../component/SaasAbleFigma.jsx";
function Index() {
  return (
    <>
   
      <Home />
      <TrustSection />
       {/* <AboutPaglkjhgfdrtfgbhgtfcvbhytrdcv e /> */}
       <Saasable/>
      <Comperhensive/>
      <Posibility/>

      <PowerfulAdminInterface/>
      <SaasAbleFigma/>
      
      <ContactPage />
      <Faq />

    </>
  );
}

export default Index;
