import { useParams } from "react-router-dom";
import projectData from "./ProjectData";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === parseInt(id));

  if (!project) {
    return <h1 className="text-white text-center">Project not found</h1>;
  }

  return (
    <div className="text-white p-6 max-w-3xl mx-auto">
      <img src={project.img} alt={project.title} className="rounded-lg w-full" />
      <h1 className="text-4xl font-bold mt-4">{project.title}</h1>
      <p className="text-gray-400 mt-2">{project.description}</p>

      <div className="flex gap-4 mt-4">
        <a href={project.liveLink} className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg">
          Visit Live
        </a>
        <a href={project.githubLink} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg">
          GitHub Repository
        </a>
      </div>

      {/* Technology Stack */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-cyan-400">Main Technology Stack</h2>
        <ul className="list-disc ml-6 text-gray-300">
          {project.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>

      {/* Challenges Faced */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-cyan-400">Challenges Faced</h2>
        <ul className="list-disc ml-6 text-gray-300">
          {project.challenges.map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))}
        </ul>
      </div>

      {/* Future Plans */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-cyan-400">Potential Improvements & Future Plans</h2>
        <ul className="list-disc ml-6 text-gray-300">
          {project.futurePlans.map((plan, index) => (
            <li key={index}>{plan}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetails;
