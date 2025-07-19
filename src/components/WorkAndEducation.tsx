import { educationData, workData } from "../data/data.js";
import { useState } from "react";

function WorkAndEducation() {
  const [isWork, setIsWork] = useState<boolean>(true);

  const workElems = workData.map((work, index) => (
    <article key={index} className="relative py-5 pr-6 pl-12">
      <img
        src={work.imagePath}
        alt={`${work.name} logo`}
        className="absolute top-6 -left-6 aspect-square w-12 rounded-full bg-white object-center ring-1 ring-gray-300"
      />

      <p className="mb-2 text-xs font-medium tracking-wide text-gray-500 uppercase">
        {work.fromDate} - {work.toDate}
      </p>

      <h3 className="mb-1 text-lg leading-tight font-bold text-gray-900">
        {work.name}
      </h3>

      <p className="mb-3 text-sm font-semibold text-gray-700">{work.role}</p>

      <ul className="list-disc px-4 py-2 text-sm leading-relaxed text-gray-600">
        {work.experience.map((xp, expIndex) => (
          <li key={expIndex} className="mb-1">
            {xp}
          </li>
        ))}
      </ul>
    </article>
  ));

  const educationElems = educationData.map((edu, index) => (
    <article key={index} className="relative py-5 pr-6 pl-12">
      <img
        src={edu.imagePath}
        alt={`${edu.name} logo`}
        className="absolute top-6 -left-6 aspect-square w-12 rounded-full bg-white object-center ring-1 ring-gray-300"
      />

      <p className="mb-2 text-xs font-medium tracking-wide text-gray-500 uppercase">
        {edu.fromDate} - {edu.toDate}
      </p>

      <h3 className="mb-1 text-lg leading-tight font-bold text-gray-900">
        {edu.name}
      </h3>

      <p className="mb-3 text-sm font-semibold text-gray-700">
        {edu.courseName}
      </p>

      <ul className="list-disc px-4 py-2 text-sm leading-relaxed text-gray-600">
        {edu.experience.map((xp, expIndex) => (
          <li key={expIndex} className="mb-1">
            {xp}
          </li>
        ))}
      </ul>
    </article>
  ));

  return (
    <section className="mb-20">
      {/* Tab Navigation */}
      <div className="flex items-center justify-between rounded-xl bg-gray-100 p-1">
        <button
          className={`w-full cursor-pointer rounded-lg p-1 px-4 text-sm font-semibold ${isWork ? "bg-white text-black shadow-sm" : "text-gray-500"} cursor-pointer`}
          onClick={() => setIsWork(true)}
        >
          Work
        </button>
        <button
          className={`w-full cursor-pointer rounded-lg p-1 px-4 text-sm font-semibold ${!isWork ? "bg-white text-black shadow-sm" : "text-gray-500"} `}
          onClick={() => setIsWork(false)}
        >
          Education
        </button>
      </div>

      {/* Content Container */}
      <div className="mt-2 flex items-stretch rounded-2xl shadow-md ring-1 ring-gray-200">
        <div className="w-12 border-r-1 border-gray-300" />
        <div className="w-full">{isWork ? workElems : educationElems}</div>
      </div>
    </section>
  );
}

export default WorkAndEducation;
