import { educationData, workData } from "../data/data.js";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

function WorkAndEducation() {
  const [isWork, setIsWork] = useState<boolean>(true);
  const [isWorkExpanded, setIsWorkExpanded] = useState<boolean>(false);
  const [isEduExpanded, setIsEduExpanded] = useState<boolean>(false);

  const workElems = workData
    .slice(0, isWorkExpanded ? workData.length : 2)
    .map((work, index) => (
      <article key={index} className="relative py-5 pr-6 pl-12">
        <img
          src={work.imagePath}
          alt={`${work.name} logo`}
          className="absolute top-5 -left-5 aspect-square w-10 rounded-full bg-white object-center ring-1 ring-gray-300"
        />

        <p className="mb-2 text-xs font-medium text-gray-500 dark:text-gray-500">
          {work.fromDate} - {work.toDate}
        </p>

        <h3 className="text-lg leading-tight font-bold text-gray-900 dark:text-gray-50">
          {work.name}
        </h3>

        <p className="mb-1.5 text-sm font-semibold text-gray-700 dark:text-gray-500">
          {work.role}
        </p>

        <ul className="list-disc px-4 py-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          {work.experience.map((xp, expIndex) => (
            <li key={expIndex}>{xp}</li>
          ))}
        </ul>
      </article>
    ));

  const educationElems = educationData
    .slice(0, isEduExpanded ? educationData.length : 2)
    .map((edu, index) => (
      <article key={index} className="relative py-5 pr-6 pl-12">
        <img
          src={edu.imagePath}
          alt={`${edu.name} logo`}
          className="absolute top-5 -left-5 aspect-square w-10 rounded-full bg-white object-center ring-1 ring-gray-300"
        />

        <p className="mb-2 text-xs font-medium text-gray-500 dark:text-gray-500">
          {edu.fromDate} - {edu.toDate}
        </p>

        <h3 className="text-lg leading-tight font-bold text-gray-900 dark:text-gray-50">
          {edu.name}
        </h3>

        <p className="mb-1.5 text-sm font-semibold text-gray-700 dark:text-gray-500">
          {edu.courseName}
        </p>

        <ul className="list-disc px-4 py-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          {edu.experience.map((xp, expIndex) => (
            <li key={expIndex} className="mb-1">
              {xp}
            </li>
          ))}
        </ul>
      </article>
    ));

  return (
    <section className="my-14">
      {/* Tab Navigation */}
      <div className="flex items-center justify-between rounded-lg bg-gray-100 p-1 transition-all duration-200 dark:bg-gray-800">
        <button
          className={`w-full cursor-pointer rounded-md p-1 px-4 text-sm font-semibold ${isWork ? "bg-white text-black shadow-sm dark:bg-[#030712] dark:text-gray-50" : "text-gray-500 dark:text-gray-400"} cursor-pointer`}
          onClick={() => {
            setIsWork(true);
            setIsEduExpanded(false);
          }}
        >
          Work
        </button>
        <button
          className={`w-full cursor-pointer rounded-md p-1 px-4 text-sm font-semibold ${!isWork ? "bg-white text-black shadow-sm dark:bg-[#030712] dark:text-gray-50" : "text-gray-500 dark:text-gray-400"} `}
          onClick={() => {
            setIsWork(false);
            setIsWorkExpanded(false);
          }}
        >
          Education
        </button>
      </div>

      {/* Content Container */}
      <div className="mt-3 flex items-stretch rounded-xl shadow-md ring-1 ring-gray-200 dark:ring-gray-700">
        <div className="w-12 border-r-1 border-gray-300 dark:border-gray-700" />
        <div className="w-full">
          {isWork ? workElems : educationElems}

          {((!isEduExpanded && educationData.length > 2) ||
            (!isWorkExpanded && workData.length > 2)) && (
            <div
              className="mt-1 cursor-pointer rounded-br-2xl border-gray-300 p-3 text-center transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-900"
              onClick={() => {
                isWork
                  ? setIsWorkExpanded((prev) => !prev)
                  : setIsEduExpanded((prev) => !prev);
              }}
            >
              <p className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                {isEduExpanded || isWorkExpanded ? (
                  <>
                    Show Less <FaAngleUp />
                  </>
                ) : (
                  <>
                    Show More <FaAngleDown />
                  </>
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default WorkAndEducation;
