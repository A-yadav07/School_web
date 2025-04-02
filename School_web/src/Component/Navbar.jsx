import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-yellow-950 text-white  md:px-20 py-4 left-0 fixed w-full top-0 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">MySchool</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-12 mr-5 font-medium">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Gallery</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Classes</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Education</a></li>

          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>

        </ul>
        <button className="bg-amber-50 text-black px-5 py-1 rounded-md font-medium"> Call Now</button>

        {/* Mobile Menu Button */} 
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-3 bg-gray-800 p-4 rounded-lg">
          <li><a href="#home" className="block">Home</a></li>
          <li><a href="#about" className="block">About</a></li>
          <li><a href="#projects" className="block">Projects</a></li>
          <li><a href="#contact" className="block">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
