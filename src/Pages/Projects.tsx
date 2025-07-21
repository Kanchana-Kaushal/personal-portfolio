import { FaArrowLeftLong } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { projectData } from "../data/data.js";
import { Link } from "react-router-dom";

function Projects() {
  const myProjects = projectData.map((project) => (
    <div className="space-y-2 rounded-xl p-4 shadow-sm ring-1 ring-gray-300 md:p-6">
      <img src={project.image} alt="" />
      <h3 className="font-bold">{project.title}</h3>
      <p className="text-sm text-gray-500">{project.description}</p>
      <div className="my-8 flex flex-wrap items-center gap-1.5">
        {project.technologies.map((tech) => (
          <div className="rounded-sm bg-gray-200 p-1 px-2 text-[0.7rem] font-bold">
            {tech}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {project.links.map((link) => {
          if (link.label.includes("Source")) {
            return (
              <>
                <a
                  href={link.url}
                  className="flex items-center gap-1 rounded-md bg-gray-900 p-1 px-2 text-xs text-gray-50 transition hover:opacity-80"
                >
                  <FiGithub />
                  {link.label}
                </a>
              </>
            );
          }

          return (
            <>
              <a
                href={link.url}
                className="flex items-center gap-1 rounded-md bg-gray-900 p-1 px-2 text-xs text-gray-50 transition hover:opacity-80"
              >
                <CiGlobe /> {link.label}
              </a>
            </>
          );
        })}
      </div>
    </div>
  ));

  return (
    <>
      <section className="my-14">
        <div className="flex flex-row-reverse items-center justify-between">
          <h2 className="text-2xl font-bold">My Projects</h2>

          <Link to={"/"}>
            <p className="group flex cursor-pointer items-center gap-2">
              <FaArrowLeftLong className="transition-all duration-200 group-hover:-translate-x-1.5" />
              Go Back
            </p>
          </Link>
        </div>

        <div className="grid-cols-2 gap-8 space-y-8 py-8 md:grid md:space-y-0">
          {myProjects}
        </div>
      </section>
    </>
  );
}

export default Projects;
