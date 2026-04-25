import Link from 'next/link';
import React from 'react';
import { FaWhatsapp, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#004d3d] text-white font-['Poppins'] pt-12 pb-6">
      <div className="max-w-8xl mx-auto px-6 md:px-10">
        
        {/* Top Section: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-10">
          
          {/* Column 1: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-yellow-500 w-fit pb-1">Quick Links</h3>
            <ul className="space-y-2 text-gray-200">
                <li><Link href="#" className="hover:text-yellow-500 transition">Home</Link></li>
                <li><Link href="#" className="hover:text-yellow-500 transition">About</Link></li>   
                <li><Link href="#" className="hover:text-yellow-500 transition">Menu</Link></li>                 
                <li><Link href="#" className="hover:text-yellow-500 transition">Susbcription Plans</Link></li>   
                <li><Link href="#" className="hover:text-yellow-500 transition">Contact</Link></li>   
            </ul>
          </div>

          {/* Column 2: Logo, Description & WhatsApp Box */}
          <div className="flex flex-col items-center text-center space-y-6">
            <h2 className="text-3xl font-black tracking-tighter">
              ROOD<span className="text-[#f5a623]">MATES.</span>
            </h2>
            <p className="text-sm leading-relaxed max-w-xl text-gray-200">
              Rood Mates ek cloud kitchen hai jo room life ko easy banata hai. 
              Fresh meals, hygienic cooking aur ghar jaisa taste — sab kuch ek hi jagah.
            </p>
            
            {/* WhatsApp CTA Box */}
            <div className="border-2 border-emerald-400 rounded-2xl p-6 bg-[#003d30] w-full max-w-sm">
              <p className="text-lg font-semibold mb-2">
                One Day Order <span className="text-[#f5a623]">On WhatsApp</span>
              </p>
              <div className="flex items-center justify-center gap-3 text-2xl font-bold">
                <FaWhatsapp className="text-green-400 text-3xl" />
                <span>952-063-4459</span>
              </div>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="md:text-right space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-yellow-500 w-fit md:ml-auto pb-1">Contact Info.</h3>
            <div className="text-gray-200 space-y-1">
              <p>Phone: 843-312-9332</p>
              <p>Phone: 798-352-5274</p>
              <p>Email: roodmates@gmail.com</p>
            </div>
            {/* Social Icons */}
            <div className="flex justify-start md:justify-end gap-4 pt-2">
              <FaFacebook className="cursor-pointer hover:text-yellow-500" />
              <FaLinkedin className="cursor-pointer hover:text-yellow-500" />
              <FaInstagram className="cursor-pointer hover:text-yellow-500" />
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="border-t border-emerald-800 pt-6 text-center ">
          <p className="text-xs tracking-widest text-emerald-200">
            © COPYRIGHT 2026 ROODMATES.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;