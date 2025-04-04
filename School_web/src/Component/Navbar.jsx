import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black md:px-20 py-4 left-0 fixed w-full top-0 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-black">MySchool</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-12 mr-5 font-medium">
          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-400">Projects</Link></li>
          <li><Link to="/gallery" className="hover:text-blue-400">Gallery</Link></li>
          <li><Link to="/classes" className="hover:text-blue-400">Classes</Link></li>
          <li><Link to="/education" className="hover:text-blue-400">Education</Link></li>
        </ul>

        {/* Call Now Button */}
        <button className="bg-amber-500 text-white px-5 py-2 rounded-md font-medium hidden md:block">
          Call Now
        </button>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-3 bg-gray-800 text-white p-4 rounded-lg">
          <li><Link to="/" className="block hover:text-blue-400">Home</Link></li>
          <li><Link to="/about" className="block hover:text-blue-400">About</Link></li>
          <li><Link to="/projects" className="block hover:text-blue-400">Projects</Link></li>
          <li><Link to="/gallery" className="block hover:text-blue-400">Gallery</Link></li>
          <li><Link to="/classes" className="block hover:text-blue-400">Classes</Link></li>
          <li><Link to="/education" className="block hover:text-blue-400">Education</Link></li>
          <li>
            <button className="bg-amber-500 text-white px-5 py-2 rounded-md font-medium w-full">
              Call Now
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
