import React from "react";
import Home from "../pages/Home";
import ContactPage from "../Component/Contact.jsx";
import AboutPage from "../Component/Aboutpage.jsx";
import Comperhensive from "../Component/comprohensive.jsx";
import Posibility from "../Component/Posibility.jsx";
import Faq from "../component/Faq.jsx";
import Saasable from "../Component/Saasable.jsx";

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

    </>
  );
}

export default Index;
