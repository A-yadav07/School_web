import { Link } from "react-router-dom"; // ✅ React Router ka Link import karein
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-yellow-950 text-white px-6 md:px-20 py-4 fixed w-full top-0 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400">MyPortfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>  {/* ✅ Corrected */}
          <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-400">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-3 bg-gray-800 p-4 rounded-lg">
          <li><Link to="/" className="block">Home</Link></li>  {/* ✅ Corrected */}
          <li><Link to="/about" className="block">About</Link></li>
          <li><Link to="/projects" className="block">Projects</Link></li>
          <li><Link to="/contact" className="block">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
