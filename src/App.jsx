import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import Technologies from './components/Technologies';

const App = () => {
 
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [displayText, setDisplayText] = useState("Web Developer");

  
  const scrollToSection = (section) => {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0A192F] text-white font-sans overflow-x-hidden">
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <HeroSection displayText={displayText} scrollToSection={scrollToSection} />
      <AboutSection />
      <Technologies />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;