import React from "react";

const ContactSection = () => (
  <section id="contact" className="min-h-screen py-20 flex items-center">
    <div className="max-w-7xl mx-auto px-6 w-full">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
          Get In Touch
          <span className="absolute bottom-0 left-0 w-full h-1 bg-[#64FFDA]/50 -mb-2"></span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll do my best to get back to you!
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-[#112240] rounded-lg p-8 backdrop-blur-sm bg-opacity-80 shadow-lg">
          <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
              <input type="text" id="name" className="w-full bg-[#0A192F] border border-[#233554] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#64FFDA] transition-colors" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input type="email" id="email" className="w-full bg-[#0A192F] border border-[#233554] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#64FFDA] transition-colors" placeholder="your.email@example.com" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
              <input type="text" id="subject" className="w-full bg-[#0A192F] border border-[#233554] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#64FFDA] transition-colors" placeholder="Subject" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea id="message" rows={5} className="w-full bg-[#0A192F] border border-[#233554] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#64FFDA] transition-colors resize-none" placeholder="Your message here..."></textarea>
            </div>
            <button type="submit" className="w-full bg-[#64FFDA]/10 text-[#64FFDA] border border-[#64FFDA] py-3 rounded-md hover:bg-[#64FFDA]/20 transition-colors cursor-pointer whitespace-nowrap !rounded-button">
              Send Message
            </button>
          </form>
        </div>
        <div className="flex flex-col justify-between">
          <div className="bg-[#112240] rounded-lg p-8 backdrop-blur-sm bg-opacity-80 shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-[#64FFDA]/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-map-marker-alt text-[#64FFDA]"></i>
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium">Location</h4>
                  <p className="text-gray-400">Pune, India</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-[#64FFDA]/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-envelope text-[#64FFDA]"></i>
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium">Email</h4>
                  <p className="text-gray-400">adityamogal.it@gmail.com</p>
                </div>
              </div>
           
            </div>
            <div className="mt-8">
              <h4 className="text-gray-300 font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-6 ">
                <a href="https://github.com/mogaladitya" className="text-gray-400 hover:text-[#64FFDA] transition-colors cursor-pointer">
                  <i className="fab fa-github text-lg"></i>
                </a>
                <a href="https://www.linkedin.com/in/aditya-mogal-4740062a1" className="text-gray-400 hover:text-[#64FFDA] transition-colors cursor-pointer">
                  <i className="fab fa-linkedin text-lg"></i>
                </a>
                
                <a href="https://www.instagram.com/aadityamogal/" className="text-gray-400 hover:text-[#64FFDA] transition-colors cursor-pointer">
                  <i className="fab fa-instagram text-lg"></i>
                </a>
           
              </div>
            </div>
          </div>
          <div className="bg-[#112240] rounded-lg p-8 backdrop-blur-sm bg-opacity-80 shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-6">Availability</h3>
            <p className="text-gray-300 mb-4">
              I'm currently available for freelance work and open to discussing new opportunities.
            </p>
            <div className="flex items-center space-x-2 text-[#64FFDA]">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for new projects</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;