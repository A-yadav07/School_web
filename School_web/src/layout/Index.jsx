import React from "react";
import Home from "../pages/Home";
import ContactPage from "../component/Contact.jsx";
import AboutPage from "../component/Aboutpage.jsx";
import Comperhensive from "../component/comprohensive.jsx";
import Posibility from "../component/Posibility.jsx";
import Faq from "../component/Faq.jsx";
import Saasable from "../Component/Saasable.jsx";
import Advantage from "../Component/Advantage.jsx";

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
      <Advantage/>
      

    </>
  );
}

export default Index;
