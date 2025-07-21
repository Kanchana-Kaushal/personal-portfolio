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
  SiPostgresql,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import type { JSX } from "react";

type Technology = {
  name: string;
  icon: JSX.Element;
};

function Technologies() {
  const technologyData: Technology[] = [
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Supabase", icon: <SiSupabase /> },
    { name: "Framer Motion", icon: <TbBrandFramerMotion /> },
  ];

  return (
    <section className="my-14">
      <h2 className="mb-6 text-2xl font-bold">Technologies</h2>

      {/* Desktop View - Cards */}
      <div className="hidden grid-cols-7 gap-4 md:grid">
        {technologyData.map((tech) => (
          <div
            key={tech.name}
            className="group flex min-h-24 flex-col items-center justify-center rounded-lg bg-white p-3 text-center shadow-sm ring-1 ring-gray-300 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="text-3xl text-gray-700 transition-transform duration-200 group-hover:scale-110">
              {tech.icon}
            </div>
            <p className="mt-2 text-xs font-medium">{tech.name}</p>
          </div>
        ))}
      </div>

      {/* Mobile View - Compact Pills */}
      <div className="md:hidden">
        <div className="flex flex-wrap gap-2">
          {technologyData.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2 rounded-full border bg-white px-3 py-2 text-sm font-medium shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="text-lg text-gray-700">{tech.icon}</div>
              <span className="text-gray-700">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
