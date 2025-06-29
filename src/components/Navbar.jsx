import React from "react";

// ✅ Define the downloadCV function here
const downloadCV = () => {
  const link = document.createElement("a");
  link.href = "/Aditya_CV.pdf"; // Ensure this file exists in /public
  link.download = "Aditya_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Navbar = ({ activeSection, scrollToSection, isMenuOpen, setIsMenuOpen }) => (
  <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-6xl">
    <div className="bg-[#112240]/90 backdrop-blur-md rounded-2xl shadow-lg shadow-black/20 px-6 py-4">
      <div className="flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2 text-[#64FFDA]">
          <i className="fas fa-code text-2xl"></i>
          <span className="text-xl font-bold">Aditya.dev</span>
        </a>

        {/* ✅ Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {["Home", "Projects", "Blog", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium px-2 py-1 rounded-md transition-all duration-300 cursor-pointer hover:text-[#64FFDA] hover:bg-[#64FFDA]/10 whitespace-nowrap !rounded-button ${
                  activeSection === item.toLowerCase()
                    ? "text-[#64FFDA] bg-[#64FFDA]/10"
                    : "text-gray-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4 pl-6 border-l border-gray-700">
            <button 
              onClick={downloadCV}
              className="px-4 py-2 text-sm font-medium text-[#64FFDA] border border-[#64FFDA] rounded-lg hover:bg-[#64FFDA]/10 transition-colors cursor-pointer whitespace-nowrap !rounded-button"
            >
              Download CV
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300 focus:outline-none cursor-pointer whitespace-nowrap !rounded-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
        </button>
      </div>
    </div>

    {/* ✅ Mobile Menu */}
    <div
      className={`md:hidden absolute top-full left-1/2 transform -translate-x-1/2 w-[90%] mt-2 transition-all duration-300 ease-in-out ${
        isMenuOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <div className="bg-[#112240]/95 backdrop-blur-md rounded-xl shadow-lg shadow-black/20 py-4">
        <div className="flex flex-col space-y-2 px-4">
          {["Home", "Projects", "Blog", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap !rounded-button ${
                activeSection === item.toLowerCase()
                  ? "text-[#64FFDA] bg-[#64FFDA]/10"
                  : "text-gray-300 hover:text-[#64FFDA] hover:bg-[#64FFDA]/10"
              }`}
            >
              {item}
            </button>
          ))}
          
          {/* ✅ Mobile Download Button */}
          <div className="flex flex-col space-y-2 pt-2 mt-2 border-t border-gray-700">
            <button
              onClick={downloadCV}
              className="px-4 py-2 text-sm font-medium text-[#64FFDA] border border-[#64FFDA] rounded-lg hover:bg-[#64FFDA]/10 transition-colors cursor-pointer whitespace-nowrap !rounded-button"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
