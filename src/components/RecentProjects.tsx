import { FaArrowRightLong } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { projectData } from "../data/data.js";
import { Link } from "react-router-dom";

function RecentProjects() {
  const recentProjects = projectData.slice(0, 2).map((project) => (
    <div className="space-y-2 rounded-xl p-4 shadow-sm ring-1 ring-gray-300 md:p-6 dark:ring-gray-700">
      <img src={project.image} alt="snapshot of a project overview" />
      <h3 className="mt-4 font-bold dark:text-gray-50">{project.title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {project.description}
      </p>
      <div className="my-8 flex flex-wrap items-center gap-1.5">
        {project.technologies.map((tech) => (
          <div className="rounded-full bg-gray-200 p-1 px-2 text-[0.7rem] font-bold dark:bg-gray-800 dark:text-gray-300">
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
                  className="flex items-center gap-1 rounded-md bg-gray-900 p-1 px-2 text-xs font-medium text-gray-50 dark:bg-gray-50 dark:text-gray-950"
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
                className="flex items-center gap-1 rounded-md bg-gray-900 p-1 px-2 text-xs font-medium text-gray-50 dark:bg-gray-50 dark:text-gray-950"
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
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-2xl font-bold dark:text-gray-50">
            Recent Projects
          </h2>

          <Link to={"/projects"}>
            <p className="group flex cursor-pointer items-center gap-2 dark:text-gray-400 dark:hover:text-gray-50">
              See All
              <FaArrowRightLong className="transition-all duration-200 group-hover:translate-x-1.5" />
            </p>
          </Link>
        </div>

        <div className="grid-cols-2 gap-8 space-y-8 py-8 md:grid md:space-y-0">
          {recentProjects}
        </div>
      </section>
    </>
  );
}

export default RecentProjects;
