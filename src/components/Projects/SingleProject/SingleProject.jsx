
import TechIcons from "./TechIcons/TechIcons";
import { motion } from "framer-motion";
import { FaGithubAlt, FaRocket } from "react-icons/fa";

export default function SingleProject({ project }) {
  return (
    <div
      className="mx-1 sm:mx-20 lg:mx-0 grid grid-cols-1 lg:grid-cols-2 max-w-7xl
    "
    >
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="order-2 lg:order-1 project-details-container px-8 py-5 dark:bg-dark_theme_elevated_3 rounded-lg shadow-2xl"
      >
        <div className="lg:w-9/12 w-100 flex flex-col justify-between text-center lg:text-start min-h-full">
          <div className="flex flex-col gap-7 lg:gap-3">
            <h1 className={`${project.font} text-3xl font-bold`}>
              {project.title}
            </h1>

            <p className="project-description">{project.description}</p>

            <div className="mb-2">
              <p className="text-xl font-bold mb-2">Built with</p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-5 mb-5">
                {project.icons.map((iconObj) => (
                  <TechIcons
                    icon={iconObj.name}
                    link={iconObj.link}
                    isIcon={iconObj.isIcon}
                    key={iconObj.name}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start justify-self-end gap-8">
            <a
              href={`${project.repo}`}
              target="_blank"
              className="flex flex-col justify-center text-light_theme_blue dark:text-dark_theme_cyan items-center hover:cursor-pointer hover:brightness-75 duration-150 group"
            >
              <FaGithubAlt
                size={"24"}
                className="group-hover:-translate-y-1 duration-150"
              />
              <p>Code</p>
            </a>

            <a
              href={`${project.link}`}
              target="_blank"
              className="flex flex-col justify-center text-light_theme_blue dark:text-dark_theme_cyan items-center hover:cursor-pointer hover:brightness-75 duration-150 group"
            >
              <FaRocket
                size={"24"}
                className="group-hover:-translate-y-1 duration-150"
              />
              <p>App</p>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="lg:relative lg:-left-28 lg:top-5 order-1 lg:order-2"
      >
        <img
          src={require(`${project.img}`)}
          alt="project cover"
          className="rounded-lg shadow-lg mb-5 lg:mb-0"
        />
      </motion.div>
    </div>
  );
}
