import React, { useState, useEffect } from "react";
import img from '../assets/profile.jpg';

const HeroSection = () => {

  const text = 'Web Developer';
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(displayText + text.charAt(index));
        setIndex(index + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [index, displayText]);

  // Scroll to section helper
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3 space-y-6">
          <h2 className="text-[#64FFDA] text-lg font-medium">Hi, my name is</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-100">Aditya Mogal</h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 h-10">
            {displayText}
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-gray-400 max-w-xl leading-relaxed">
          I’m a passionate React Developer skilled in building modern, responsive web applications.
I specialize in React, Tailwind CSS, and Redux for creating clean UI and smooth user experiences.
Also experienced with Node.js, Express, and MongoDB for full-stack development.
Always eager to learn and build real-world solutions.
          </p>
          <div className="flex space-x-4 pt-4">
            <button 

          onClick={() => scrollToSection('projects')}
            
            className="bg-transparent border-2 border-[#64FFDA] text-[#64FFDA] px-6 py-3 rounded-md hover:bg-[#64FFDA]/10 transition-colors cursor-pointer whitespace-nowrap !rounded-button">
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#64FFDA]/10 text-[#64FFDA] px-6 py-3 rounded-md hover:bg-[#64FFDA]/20 transition-colors cursor-pointer whitespace-nowrap !rounded-button"
            >
              Contact Me
            </button>
          </div>
          <div className="flex space-x-6 pt-6">
            <a href="https://github.com/mogaladitya" className="text-gray-400 hover:text-[#64FFDA] transition-colors cursor-pointer">
              <i className="fab fa-github text-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/aditya-mogal-4740062a1" className="text-gray-400 hover:text-[#64FFDA] transition-colors cursor-pointer">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="https://www.instagram.com/aadityamogal/" className="text-gray-400 hover:text-[#64FFDA] transition-colors cursor-pointer">
            <i className="fab fa-instagram text-lg"></i>
          </a>
            <a href="#" className="text-gray-400 hover:text-[#64FFDA] transition-colors cursor-pointer">
              <i className="fab fa-codepen text-xl"></i>
            </a>
          </div>
        </div>
        <div className="md:col-span-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#64FFDA]/30 shadow-lg shadow-[#64FFDA]/20 animate-float">
            <img
              src={img}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


