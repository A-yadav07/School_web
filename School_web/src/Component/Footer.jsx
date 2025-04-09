import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* School Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Green Valley School</h2>
          <p>Empowering students for a brighter future.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/admissions" className="hover:underline">Admissions</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p>123 School Lane, Lucknow, India</p>
          <p>Phone: +91 12345 67890</p>
          <p>Email: info@gvschool.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-gray-300"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white-700 pt-5 text-center text-sm">
        &copy; {new Date().getFullYear()} Green Valley School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
