import React, { useEffect } from 'react';
import './Technologies.css'; // For custom CSS styles if needed

const technologies = [
  {
    name: 'HTML',
    icon: 'ri-html5-line',
    desc: 'Markup language for web pages',
  },
  {
    name: 'CSS',
    icon: 'ri-css3-line',
    desc: 'Styling for web pages',
  },
  {
    name: 'JavaScript',
    icon: 'ri-javascript-line',
    desc: 'Programming language for web',
  },
  {
    name: 'React.js',
    icon: 'ri-reactjs-line',
    desc: 'Frontend library',
  },
  {
    name: 'Tailwind CSS',
    icon: 'ri-tailwind-css-line',
    desc: 'Utility-first CSS framework',
  },
  {
    name: 'MySQL',
    icon: 'ri-database-2-line',
    desc: 'Relational database',
  },
  {
    name: 'Git',
    icon: 'ri-git-branch-line',
    desc: 'Version control system',
  },
  {
    name: 'GitHub',
    icon: 'ri-github-line',
    desc: 'Code hosting platform',
  },
  {
    name: 'Node.js',
    icon: 'ri-server-line',
    desc: 'JavaScript runtime',
  },
  {
    name: 'Express.js',
    icon: 'ri-server-line',
    desc: 'Backend framework',
  },
  {
    name: 'MongoDB',
    icon: 'ri-database-line',
    desc: 'NoSQL database',
  },
  {
    name: 'Java',
    icon: 'ri-java-line',
    desc: 'Programming language',
  },
];

const Technologies = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.tech-card');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });

      card.addEventListener('mouseleave', () => {
        const tooltip = card.querySelector('.tooltip');
        if (tooltip) {
          tooltip.style.opacity = '0';
          tooltip.style.transform = 'translateY(10px)';
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A192F] px-2">
      <div className='mb-16 mx-auto text-center'>
        <h2 className="text-3xl md:text-4xl font-bold inline-block relative ">
          My Skills
          <span className="absolute bottom-0 left-0 w-full h-1 bg-[#64FFDA]/50 -mb-2"></span>
        </h2>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
          I've worked with a variety of technologies in the web development world.
          Here's a snapshot of my technical expertise and proficiency levels.
        </p>
      </div>
      <div className="container mx-auto max-w-6xl px-0 sm:px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center mt-0">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="tech-card relative p-4 sm:p-6 rounded flex items-center bg-[#112240] border border-[#233554] shadow-lg mx-auto w-full"
            >
              <div className="tech-icon mr-4 text-[#64FFDA] flex items-center justify-center">
                <i className={`${tech.icon} ri-2x`} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#64FFDA]">{tech.name}</h3>
                <p className="text-gray-300 text-xs sm:text-sm mt-1">{tech.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
