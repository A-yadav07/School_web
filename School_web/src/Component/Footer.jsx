import { FaFacebookF, FaYoutube, FaInstagram  } from 'react-icons/fa';
import {  SiWhatsapp  } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 px-22 py-15">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 12L22 2L12 22L11 13L2 12Z" fill="#005B96" />
            </svg>
            <span className="text-2xl font-bold text-[#005B96]">SaasAble</span>
          </div>
          <p className="mb-4">v1.1.0</p>
          <p className="mb-4">Get In Touch</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-lg">🧩</span>
              <span>Baba B.K. Smarak Vidyalaya</span>
            </li>
            <li className="flex items-center gap-2">
              <a href="tel:+916392006343" target="_blank" rel="noopener noreferrer" className="text-lg">📞</a>
              <span>6392006343</span>
            </li>
            <li className="flex items-center gap-2">
              <a href="mailto:anandyadav01782@gmail.com" target="_blank" rel="noopener noreferrer" className="text-lg">✉️</a>
              <span>anandyadav01782@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="mr-10">
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#005B96]">Why Phoenixcoded?</a></li>
            <li><a href="#" className="hover:text-[#005B96]">About</a></li>
            <li><a href="#" className="hover:text-[#005B96]">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#005B96]">Pricing</a></li>
            <li><a href="#" className="hover:text-[#005B96]">FAQ</a></li>
            <li><a href="#" className="hover:text-[#005B96]">Support</a></li>
            <li><a href="#" className="hover:text-[#005B96]">License Terms</a></li>
            <li><a href="#" className="hover:text-[#005B96]">Discord</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#005B96]">Freebies</a></li>
            <li><a href="#" className="hover:text-[#005B96]">Documentation</a></li>
            <li><a href="#" className="hover:text-[#005B96]">Blog</a></li>
            <li><a href="#" className="hover:text-[#005B96]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#005B96]">Refund Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 bg-[#f5f8fb] py-1 px-3 rounded-full flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">Copyright © 2025 Phoenixcoded</p>
        <div className="flex items-center gap-3 mt-2 md:mt-6 mb-3">
          <a href="#" aria-label="WhatsApp" className="text-[#005B96] text-lg"><SiWhatsapp /></a>
          <a href="#" aria-label="Facebook" className="text-[#005B96] text-lg"><FaFacebookF /></a>
          <a href="#" aria-label="YouTube" className="text-[#005B96] text-lg"><FaYoutube /></a>
          <a href="#" aria-label="Instagram" className="text-[#005B96] text-lg"><FaInstagram /></a>
          {/* <a href="#" aria-label="Teligram" className="text-[#005B96] text-lg"><FaTeligram /></a> */}
          
        </div>
      </div>
    </footer>
  );
}
