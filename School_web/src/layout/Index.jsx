import React from "react";
import Home from "../pages/Home";
import ContactPage from "../component/Contact.jsx";
import AboutPage from "../component/Aboutpage.jsx";
import Comperhensive from "../component/comprohensive.jsx";
import Posibility from "../component/Posibility.jsx";
import Faq from "../component/Faq.jsx";
import Saasable from "../component/Saasable.jsx";
import PowerfulAdminInterface from "../component/PowerfulAdminInterface.jsx";
import SaasAbleFigma from "../component/SaasAbleFigma.jsx";
import TrustSection from "../component/TrustSection.jsx";
function Index() {
  return (
    <>
   
      <Home />
      <AboutPage />
      <ContactPage />
      <Comperhensive/>
      <Posibility/>
      <Faq />
      <Saasable/>
      <PowerfulAdminInterface/>
      <SaasAbleFigma/>
      <TrustSection />

    </>
  );
}

export default Index;
