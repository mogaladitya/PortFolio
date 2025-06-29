import React from "react";
import img1 from '../assets/ProjectImg/img1.png'
import img2 from '../assets/ProjectImg/img2.png'
import img3 from '../assets/ProjectImg/img3.png'
import img4 from '../assets/ProjectImg/img4.png'
import img5 from '../assets/ProjectImg/img5.png'
const ProjectsSection = () => (
  <section id="projects" className="min-h-screen m-auto p-4 sm:p-8 md:p-12 lg:p-20">
    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
      <div className="text-center mb-10 sm:mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold inline-block relative ">
          My Projects
          <span className="absolute bottom-0 left-0 w-full h-1 bg-[#64FFDA]/50 -mb-2"></span>
        </h2>
        <p className="text-gray-400 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          Here are some of my recent projects. Each project reflects my passion for creating
          intuitive, efficient, and visually appealing web applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        <ProjectCard
          title="E-commerce Platform"
          image={img1}
          description="A full-featured e-commerce platform with authentication, product search, cart, and payments."
          tags={["React", "Redux", "Tailwind CSS" ]}
          link1 = "https://shop-app-one-black.vercel.app/"
          link2 = "https://github.com/mogaladitya/SHOP-APP"
        />
        <ProjectCard
          title="Movies Search Application"
          image={img4}
          description="A responsive movie search app using React and TMDB APIs. Search and filter movies easily."
          tags={["React", "Redux", "CSS" ]}
          link1 = ""
          link2 = ""
        />
        <ProjectCard
          title="StudyNotion–Ed-Tech Platform"
          image={img2}
          description="A full-stack ed-tech platform for creating, browsing, and rating courses with JWT auth."
          tags={["React", "Tailwind CSS", "Redux", "MongoDB", "Node.js", "Express.js"]}
          link1 = ""
          link2 = ""
        />
        <ProjectCard
          title="Data Alchemist"
          image={img5}
          description="CSV validation tool for uploading and checking client, worker, and task data."
          tags={["Next.js", "Tailwind CSS"]}
          link1 = ""
          link2 = ""
        />      
      </div>
      <div className="text-center mt-8 sm:mt-10 md:mt-12">
        <a
          href="https://github.com/mogaladitya"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-[#64FFDA] border border-[#64FFDA] px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-[#64FFDA]/10 transition-colors cursor-pointer whitespace-nowrap !rounded-button text-sm sm:text-base"
        >
          <span>View More on GitHub</span>
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </section>
);

const ProjectCard = ({ title, image, description, tags, link1, link2 }) => (
  <div className="bg-[#112240] rounded-lg overflow-hidden shadow-lg hover:shadow-[#64FFDA]/10 transition-all duration-300 transform hover:-translate-y-2">
    <div className="relative overflow-hidden h-40 sm:h-48">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#112240] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-2 sm:p-4">
          <div className="flex space-x-3">
            <a href={link1} className="text-white hover:text-[#64FFDA] transition-colors">
              <i className="fas fa-external-link-alt"></i>
            </a>
            <a href={link2} className="text-white hover:text-[#64FFDA] transition-colors">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">{title}</h3>
      <p className="text-gray-400 mb-2 sm:mb-4 text-xs sm:text-sm">{description}</p>
      <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 sm:px-3 py-0.5 sm:py-1 bg-[#233554] rounded-full text-[10px] sm:text-xs text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectsSection;