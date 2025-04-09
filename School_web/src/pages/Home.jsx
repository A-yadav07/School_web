import React from "react";
import bgImage from "../assets/low-rise-building.jpg"; // Import the image

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center  overflow-hidden">
      {/* Background image with blur and opacity */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-100 blur-sm"
      />

      {/* Content goes here */}
      <div className="relative z-10 text-white text-center">
        <h1 className="text-4xl font-bold">Welcome to Our Site</h1>
        <p className="text-lg mt-4">Experience quality and style</p>
      </div>
    </div>
  );
};

export default Home;
