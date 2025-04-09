import React from "react";
import Home from "../pages/Home";
import ContactPage from "../Component/Contact.jsx";
import AboutPage from "../Component/Aboutpage.jsx";
import Comperhensive from "../Component/comprohensive.jsx";
import Posibility from "../Component/Posibility.jsx";

function Index() {
  return (
    <>
      <Home />
      <AboutPage />
      <ContactPage />
      <Comperhensive/>
      <Posibility/>
    </>
  );
}

export default Index;
