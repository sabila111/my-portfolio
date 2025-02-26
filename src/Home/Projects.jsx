import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import projectData from "./ProjectData";


const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="projects" className="text-white py-16">
      <h1 className="text-6xl text-center my-20 font-bold bg-gradient-to-r from-cyan-500 to-blue-700 text-transparent bg-clip-text" data-aos="fade-up">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 p-5 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            data-aos="zoom-in"
          >
            <img src={project.img} alt={project.title} className="rounded-lg w-full h-48 object-cover" />
            <h2 className="text-xl font-bold mt-4">{project.title}</h2>
            <p className="text-gray-400 mt-2 h-36">{project.description}</p>
            <div className="flex gap-3 mt-4">
              <a href={project.liveLink} className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg">
                Live Preview
              </a>

              <Link to={`/projects/${project.id}`} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg">
              details
              </Link>
               
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
