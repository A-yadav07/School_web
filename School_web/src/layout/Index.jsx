import React from "react";
import Home from "../pages/Home";
import ContactPage from "../Component/Contact.jsx";
import AboutPage from "../Component/Aboutpage.jsx";
import Faq from "../component/Faq.jsx";

function Index() {
  return (
    <>
   
      <Home />
      <AboutPage />
      <ContactPage />
      <Faq />
    </>
  );
}

export default Index;
