import React from "react";
import Technologies from "./Technologies";


const Footer = () => (
  <footer className="bg-[#0A192F] border-t border-[#1E2D3D] py-8">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <a href="#home" className="text-xl font-bold text-[#64FFDA]">Aditya.dev</a>
          <p className="text-gray-400 text-sm mt-1">
            © {new Date().getFullYear()}  All Rights Reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <a href="https://github.com/mogaladitya" className="text-gray-400 hover:text-[#64FFDA] transition-colors cursor-pointer">
            <i className="fab fa-github text-lg"></i>
          </a>
          <a href="https://www.linkedin.com/in/aditya-mogal-4740062a1" className="text-gray-400 hover:text-[#64FFDA] transition-colors cursor-pointer">
            <i className="fab fa-linkedin text-lg"></i>
          </a>
          
          <a href="https://www.instagram.com/aadityamogal/" className="text-gray-400 hover:text-[#64FFDA] transition-colors cursor-pointer">
            <i className="fab fa-instagram text-lg"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-[#64FFDA] transition-colors cursor-pointer">
            <i className="fab fa-codepen text-lg"></i>
          </a>
        </div>
      </div>
    </div>
   
  </footer>
  
);

export default Footer;