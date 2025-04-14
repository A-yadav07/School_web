import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { IoChevronDown } from 'react-icons/io5';

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
        <a href="#" className="text-[#005B96] font-medium">Home</a>

          {/* Landings Dropdown */}
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
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Courses 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Courses 2</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Courses 3</a>
              </div>
            )}
          </div>
          <a href="#" className="">Teacher</a>

          <a href="#" className="">Blog</a>
          <a href="#" className="">Dashboard</a>

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
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">About</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Contact</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">FAQ</a>
              </div>
            )}
          </div>

          <a href="#" className="flex items-center gap-1">
            Docs <FiExternalLink className="text-xs" />
          </a>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          <button className="border border-[#005B96] rounded-full p-2">
            <FaWhatsapp className="text-[#005B96]" />
          </button>
          <button className="bg-[#005B96] text-white rounded-full px-5 py-2 font-semibold">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
