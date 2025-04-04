import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav  className="bg-red-600 text-white md:px-20 py-4 left-0 fixed w-full top-0 ">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">MySchool</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-12 mr-5 font-medium">
          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-400">Projects</Link></li>
          <li><Link to="/gallery" className="hover:text-blue-400">Gallery</Link></li>
          <li><Link to="/classes" className="hover:text-blue-400">Classes</Link></li>
          <li><Link to="/education" className="hover:text-blue-400">Education</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
        </ul>

        <button className="bg-amber-50 text-black px-5 py-1 rounded-md font-medium">Call Now</button>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      Mobile Menu
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-3 bg-gray-800 p-4 rounded-lg">
          <li><Link to="/" className="block">Home</Link></li>
          <li><Link to="/about" className="block">About</Link></li>
          <li><Link to="/projects" className="block">Projects</Link></li>
          <li><Link to="/contact" className="block">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
