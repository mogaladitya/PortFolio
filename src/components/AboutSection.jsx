import React, { useEffect, useState } from "react";

const AboutSection = () => {
  const [stats, setStats] = useState({
    totalSolved: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
  });

  const [profile, setProfile] = useState({
    realName: "",
    countryName: "",
    ranking: 0,
  });

  const totalQuestions = 3596;
  const totalEasy = 883;
  const totalMedium = 1868;
  const totalHard = 845;

  useEffect(() => {
    fetch("https://leetcode-api-pied.vercel.app/user/wv8o56LKYk")
      .then((res) => res.json())
      .then((data) => {
        const acData = data.submitStats.acSubmissionNum;
        const all = acData.find((d) => d.difficulty === "All");
        const easy = acData.find((d) => d.difficulty === "Easy");
        const medium = acData.find((d) => d.difficulty === "Medium");
        const hard = acData.find((d) => d.difficulty === "Hard");

        setStats({
          totalSolved: all.count,
          easySolved: easy.count,
          mediumSolved: medium.count,
          hardSolved: hard.count,
        });

        setProfile({
          realName: data.profile.realName,
          countryName: data.profile.countryName,
          ranking: data.profile.ranking,
        });
      });
  }, []);

  const { totalSolved, easySolved, mediumSolved, hardSolved } = stats;
  const { realName, countryName, ranking } = profile;

  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
            About Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#64FFDA]/50 -mb-2"></span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#64FFDA]/10 rounded-lg transform -rotate-3"></div>
            <div className="relative bg-[#112240] rounded-lg p-6 backdrop-blur-sm bg-opacity-80 shadow-xl z-10">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20web%20developer%20working%20on%20multiple%20monitors%20with%20code%20displayed%2C%20focused%20on%20work%2C%20modern%20workspace%20with%20ambient%20lighting%2C%20dark%20navy%20blue%20background%20with%20subtle%20tech%20elements%2C%20high%20quality%20professional%20photography%2C%208k%20resolution&width=600&height=400&seq=2&orientation=landscape"
                className="w-full h-auto rounded-lg shadow-lg"
                alt="Developer"
              />
            </div>
          </div>

          {/* Text and Stats */}
          <div className="space-y-6">
            {/* LeetCode Stats Card */}
            <div className="bg-[#1E2D3D] rounded-xl p-6 shadow-lg text-white max-w-md mx-auto transition duration-300 hover:animate-shake">
              <h3 className="text-2xl font-bold text-[#64FFDA] mb-4">LeetCode Stats</h3>

              {/* Circular Progress */}
              <div className="flex flex-col items-center mb-6">
                <div className="relative w-36 h-36">
                  <svg className="transform -rotate-90" width="100%" height="100%" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" stroke="#2e3e4e" strokeWidth="10" fill="none" />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="#64FFDA"
                      strokeWidth="10"
                      fill="none"
                      strokeDasharray="283"
                      strokeDashoffset={283 * (1 - totalSolved / totalQuestions)}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold">{totalSolved}</span>
                    <span className="text-sm text-gray-400">/ {totalQuestions}</span>
                    <span className="text-green-400 text-sm mt-1">✓ Solved</span>
                  </div>
                </div>
              </div>

              {/* Difficulty Breakdown */}
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-blue-400 font-medium">Easy</span>
                  <span className="text-gray-300">{easySolved}/{totalEasy}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-400 font-medium">Medium</span>
                  <span className="text-gray-300">{mediumSolved}/{totalMedium}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-red-400 font-medium">Hard</span>
                  <span className="text-gray-300">{hardSolved}/{totalHard}</span>
                </div>
                <div className="pt-4 text-gray-400 text-xs text-center">
                  <p>{realName} — {countryName}</p>
                  <p>Global Ranking: <span className="text-white font-semibold">#{ranking}</span></p>
                </div>
              </div>
            </div>

            {/* About Text */}
            <p className="text-gray-300 leading-relaxed">
              Hello! I'm Aditya, a passionate full-stack web developer. I love building things for the web — whether it's sleek websites, powerful applications, or anything that brings ideas to life online.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My journey into web development began in 2023 when I started experimenting with customizing static websites. That curiosity quickly turned into a passion, and I dove deep into HTML, CSS, JavaScript, and modern frameworks.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Since then, I’ve worked on a variety of projects — from building an e-learning platform (StudyNotion) to designing a responsive e-commerce app. Today, I focus on crafting user-friendly, accessible, and performance-driven digital experiences using the MERN stack, React, Redux, and Tailwind CSS.
            </p>

            {/* Technologies */}
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-[#64FFDA] mb-3">Technologies I've been working with recently:</h3>
              <div className="grid grid-cols-2 gap-2">
                {["JavaScript", "React", "Node.js", "TailwindCSS"].map((tech) => (
                  <div key={tech} className="flex items-center space-x-2">
                    <i className="fas fa-caret-right text-[#64FFDA]"></i>
                    <span className="text-gray-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
