import { FaLocationDot } from "react-icons/fa6";
import { IoMdCloudDownload } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { MdOutlineMailOutline } from "react-icons/md";

function Hero() {
  return (
    <>
      <section className="mb-14 flex-row-reverse items-center justify-between gap-8 pt-14 md:flex">
        <div>
          <img
            src="/profile-image.JPG"
            alt="picture of the developer"
            className="aspect-square w-3/4 max-w-3/4 rounded-full object-cover object-center md:ml-auto md:w-full"
          />
        </div>

        <div className="mt-8 space-y-3">
          <h1 className="text-2xl font-bold md:text-3xl dark:text-gray-50">
            Kanchana K. Bandara
          </h1>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Software Engineer
          </h2>
          <p className="max-w-2xl text-sm text-gray-700 dark:text-gray-400">
            A full-stack developer passionate about crafting thoughtful,
            efficient, and scalable web solutions with a focus on real-world
            impact and user experience.
          </p>

          <p className="flex items-center gap-1 text-sm font-semibold text-gray-800 dark:text-gray-300">
            <span>
              <FaLocationDot />
            </span>
            Colombo, Sri Lanka
          </p>

          <div className="my-8 flex items-center gap-6">
            <a href="/sample_resume.pdf" download={"kanchanak-resume.pdf"}>
              <button className="flex cursor-pointer items-center gap-3 rounded-md p-2 px-3 text-sm font-semibold text-gray-900 shadow-md ring-1 ring-gray-300 transition hover:bg-gray-100 dark:text-gray-100 dark:ring-gray-700 dark:hover:bg-gray-900">
                Resume{" "}
                <IoMdCloudDownload className="text-lg text-gray-700 dark:text-gray-100" />
              </button>
            </a>

            <a href="#">
              <FaGithub className="text-xl text-gray-500 transition hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-100" />
            </a>

            <a href="#">
              <SiLinkedin className="text-lg text-gray-500 transition hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-100" />
            </a>

            <a href="#">
              <MdOutlineMailOutline className="text-2xl text-gray-500 transition hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-100" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
