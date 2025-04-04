
import React from "react";
// import ImageSlider from "../ImageSlider/ImageSlider";
// import Discription from "./Discription";
// import Gallary from "../Gallary/Gallary";
// import Ouerservice from "../OverServices/Overservice";
// import ContactUs from "../ContactUs/ContactUs";
// import Productpage from "../Product/Productpage";
import AboutPage from "../component/Aboutpage.jsx";
import Home from "../pages/Home.jsx";



function Index() {
  return (
    <>
    <Navbar />
    <Home />
    <AboutPage/>
    
    
    
      {/* <ImageSlider />
      <Discription />
      <Ouerservice />
      <Gallary />
      <Productpage />
      <ContactUs /> */}
    </>
  );
}

export default Index;