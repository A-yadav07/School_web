import React from "react";
import bgImage from "../assets/low-rise-building.jpg"; // Import the image

const Home = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed text-white flex items-center justify-center mt-8 overflow-hidden">
      <img src={bgImage} alt="Background" className="w-full h-full object-cover" />
    </div>
  );
};

export default Home;
