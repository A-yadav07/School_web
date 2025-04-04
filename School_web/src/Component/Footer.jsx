import { Link } from "react-router-dom"; // ✅ React Router ka Link import karein
import React from "react"; // ✅ React import karein

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 w-screen max-h-screen" >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">Astha</h2>
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Astha. All rights reserved.</p>
        </div>
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-6">
            <li><Link to="/about" className="hover:text-gray-400">About</Link></li>  {/* ✅ Corrected */}
            <li><Link to="/library" className="hover:text-gray-400">Library</Link></li>
            <li><Link to="/resources" className="hover:text-gray-400">Resources for Students</Link></li>
            <li><Link to="/news" className="hover:text-gray-400">News</Link></li>
            <li><Link to="/links" className="hover:text-gray-400">Links</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
