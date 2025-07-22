import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJsSquare,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiSupabase,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandFramerMotion } from "react-icons/tb";
import type { JSX } from "react";

type Technology = {
  name: string;
  icon: JSX.Element;
};

function Technologies() {
  const technologyData: Technology[] = [
    // Frontend Foundations
    { name: "HTML5", icon: <FaHtml5 aria-hidden="true" /> },
    { name: "CSS3", icon: <FaCss3Alt aria-hidden="true" /> },
    { name: "JavaScript", icon: <FaJsSquare aria-hidden="true" /> },
    { name: "TypeScript", icon: <SiTypescript aria-hidden="true" /> },

    // Frontend Framework
    { name: "React", icon: <FaReact aria-hidden="true" /> },

    // Styling & Animation
    { name: "Tailwind CSS", icon: <SiTailwindcss aria-hidden="true" /> },
    { name: "Framer Motion", icon: <TbBrandFramerMotion aria-hidden="true" /> },

    // Backend & Server
    { name: "Node.js", icon: <FaNodeJs aria-hidden="true" /> },
    { name: "Express.js", icon: <SiExpress aria-hidden="true" /> },

    // Databases
    { name: "MongoDB", icon: <SiMongodb aria-hidden="true" /> },
    { name: "PostgreSQL", icon: <BiLogoPostgresql aria-hidden="true" /> },
    { name: "Supabase", icon: <SiSupabase aria-hidden="true" /> },

    // Version Control
    { name: "Git", icon: <FaGitAlt aria-hidden="true" /> },
    { name: "GitHub", icon: <FaGithub aria-hidden="true" /> },
  ];

  return (
    <section className="my-14" aria-labelledby="technologies-heading">
      <h2
        id="technologies-heading"
        className="mb-6 text-2xl font-bold dark:text-gray-50"
      >
        Technologies
      </h2>

      {/* Desktop View - Cards */}
      <div className="hidden grid-cols-7 gap-4 md:grid" role="list">
        {technologyData.map((tech) => (
          <div
            key={tech.name}
            role="listitem"
            className="group flex min-h-24 flex-col items-center justify-center rounded-lg bg-white p-3 text-center shadow-sm ring-1 ring-gray-300 transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:bg-gray-950 dark:ring-gray-700"
          >
            <div className="text-3xl text-gray-700 transition-transform duration-200 group-hover:scale-110 dark:text-gray-100">
              {tech.icon}
            </div>
            <p className="mt-2 text-xs font-medium dark:text-gray-300">
              {tech.name}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile View - Compact Pills */}
      <div className="md:hidden" role="list">
        <div className="flex flex-wrap gap-2">
          {technologyData.map((tech) => (
            <div
              key={tech.name}
              role="listitem"
              className="flex items-center gap-2 rounded-full border bg-white px-3 py-2 text-sm font-medium shadow-sm transition-all duration-200 hover:shadow-md dark:bg-gray-950"
            >
              <div className="text-lg text-gray-700 dark:text-gray-100">
                {tech.icon}
              </div>
              <span className="text-gray-700 dark:text-gray-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
