import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-500 text-white px-6 md:px-20 py-4 fixed w-full top-0 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400">MyPortfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>

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
