import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiVite,  } from "react-icons/si";

import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";

const Skill = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Vite", icon: <SiVite  className="text-purple-800" /> },
    { name: "Firebase", icon: <IoLogoFirebase    className="text-yellow-400" /> },
    { name: "Vercel", icon: <IoLogoVercel     className="text-black" /> },
    
    
  ];

  return (
    <section id="skills" className="text-white py-16">
      <h2 className="text-6xl text-center my-20 font-bold bg-gradient-to-r from-cyan-500 to-blue-700 text-transparent bg-clip-text" data-aos="fade-up">
        My Skills
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300 w-36"
            data-aos="zoom-in"
          >
            <span className="text-5xl">{skill.icon}</span>
            <p className="text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
