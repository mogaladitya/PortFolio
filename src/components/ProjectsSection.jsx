import React from "react";
import img1 from '../assets/ProjectImg/img1.png'
import img2 from '../assets/ProjectImg/img2.png'
import img3 from '../assets/ProjectImg/img3.png'
import img4 from '../assets/ProjectImg/img4.png'
import img5 from '../assets/ProjectImg/img5.png'
const ProjectsSection = () => (
  <section id="projects" className="min-h-screen m-auto p-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold inline-block relative ">
          My Projects
          <span className="absolute bottom-0 left-0 w-full h-1 bg-[#64FFDA]/50 -mb-2"></span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project reflects my passion for creating
          intuitive, efficient, and visually appealing web applications.
        </p>
      </div>

     
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="E-commerce Platform"
          image={img1}
          description="A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product search, cart functionality, and payment processing."
          tags={["React", "Redux", "Tailwind CSS" ]}
          link1 = "https://shop-app-one-black.vercel.app/"
          link2 = "https://github.com/mogaladitya/SHOP-APP"
        />
         <ProjectCard
          title="Movies Search Application"
          image={img4}
          description="Built a responsive movie search app using React that shows real-time data from TMDB APIs.
 Theappworkswellonalldevicesandlets users search and filter movies easily. "
          tags={["React", "Redux", " CSS" ]}
           link1 = ""
          link2 = ""
        />
        <ProjectCard
          title="StudyNotion–Ed-Tech Platform"
          image={img2}
          description="Created a full-stack ed-tech platform where users can create, browse, and rate courses. Implemented course management, media storage with Cloudinary, and JWT-based authentication."
          tags={["React", "Tailwind CSS", "Redux", "MongoDB", "Node.js", "Express.js"]}
          link1 = ""
          link2 = ""
        />
       
        <ProjectCard
          title="Data Alchemist"
          image={img5}
          description="The website is a CSV validation tool where users can upload client, worker, and task CSV files. It checks the data for correctness and displays a validation report. If there are no issues, users can proceed to a review step to inspect or work with the validated data further."
          tags={["Next.js", "Tailwind CSS", ]}
           link1 = ""
          link2 = ""
        />      
      </div>
      <div className="text-center mt-12">
        <a
          href="https://github.com/mogaladitya"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-[#64FFDA] border border-[#64FFDA] px-6 py-3 rounded-md hover:bg-[#64FFDA]/10 transition-colors cursor-pointer whitespace-nowrap !rounded-button"
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
    <div className="relative overflow-hidden h-48">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#112240] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-4">
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
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-[#233554] rounded-full text-xs text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectsSection;