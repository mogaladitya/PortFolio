import React from "react";

const ScrollToTopButton = () => (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#64FFDA]/20 text-[#64FFDA] flex items-center justify-center shadow-lg hover:bg-[#64FFDA]/30 transition-colors z-50 cursor-pointer whitespace-nowrap !rounded-button"
  >
    <i className="fas fa-arrow-up"></i>
  </button>
);

export default ScrollToTopButton;