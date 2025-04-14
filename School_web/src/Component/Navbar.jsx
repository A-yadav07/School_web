import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { IoChevronDown } from 'react-icons/io5';
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showLandings, setShowLandings] = useState(false);
  const [showPages, setShowPages] = useState(false);

  return (
    <nav className="bg-white px-4 py-3 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M2 12L22 2L12 22L11 13L2 12Z" fill="#005B96" />
          </svg>
          <span className="text-2xl font-bold text-[#005B96]">SaasAble</span>
        </div>

        {/* Menu */}
        <div className="bg-[#f5f8fb] rounded-full px-6 py-2 flex items-center gap-6 shadow-sm relative">
          <Link to="/" className="text-[#005B96] font-medium">Home</Link>

          {/* Courses Dropdown */}
          <div className="relative">
            <div
              onClick={() => setShowLandings(!showLandings)}
              className="flex items-center gap-1 cursor-pointer"
            >
              <span>Courses</span>
              <IoChevronDown className="text-sm" />
            </div>
            {showLandings && (
              <div className="absolute top-10 left-0 bg-white rounded-md shadow-md w-40 py-2 z-10">
                <Link to="/courses/1" className="block px-4 py-2 hover:bg-gray-100">Courses 1</Link>
                <Link to="/courses/2" className="block px-4 py-2 hover:bg-gray-100">Courses 2</Link>
                <Link to="/courses/3" className="block px-4 py-2 hover:bg-gray-100">Courses 3</Link>
              </div>
            )}
          </div>

          <Link to="/teacher" className="">Teacher</Link>
          <Link to="/blog" className="">Blog</Link>
          <Link to="/dashboard" className="">Dashboard</Link>

          {/* Pages Dropdown */}
          <div className="relative">
            <div
              onClick={() => setShowPages(!showPages)}
              className="flex items-center gap-1 cursor-pointer"
            >
              <span>Pages</span>
              <IoChevronDown className="text-sm" />
            </div>
            {showPages && (
              <div className="absolute top-10 left-0 bg-white rounded-md shadow-md w-40 py-2 z-10">
                <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">About</Link>
                <Link to="/contact" className="block px-4 py-2 hover:bg-gray-100">Contact</Link>
                <Link to="/faq" className="block px-4 py-2 hover:bg-gray-100">FAQ</Link>
              </div>
            )}
          </div>

          <Link to="/docs" className="flex items-center gap-1">
            Docs <FiExternalLink className="text-xs" />
          </Link>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          <button className="border border-[#005B96] rounded-full p-2">
            <FaWhatsapp className="text-[#005B96]" />
          </button>
          <Link to="/contact">
            <button className="bg-[#005B96] text-white rounded-full px-5 py-2 font-semibold">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
