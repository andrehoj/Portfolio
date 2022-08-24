import React, { useRef } from "react";
import TechIcons from "./TechIcons/TechIcons";
import { FaGithubAlt, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SingleProject({ project }) {
  const scrollRef = useRef(null);

  return (
    <motion.div
      className="max-w-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      viewport={{ root: scrollRef }}
    >
      <div className="project-container mx-5">
        <h1 className={`${project.font} project-title text-center my-4`}>
          {project.title}
        </h1>
        <div
          className="overflow-hidden rounded-t-lg "
          ref={scrollRef}
          id={`${project.title}`}
        >
          <img
            src={require(`${project.img}`)}
            alt="project cover"
            className="rounded-t-lg filter transition-all duration-200"
          />
        </div>
        <div className="w-full rounded-b-xl p-5 dark:bg-dark_theme_elevated_3 dark:shadow-none shadow-2xl">
          <p className="text-center text-2xl">Built with</p>
          <div className="m-5 flex flex-wrap justify-center gap-5">
            {project.icons.map((iconObj) => (
              <TechIcons
                icon={iconObj.name}
                link={iconObj.link}
                color={iconObj.color}
                key={iconObj.name}
              />
            ))}
          </div>
          <p className="project-description text-center">
            {project.description}
          </p>
          <div className="flex justify-center gap-16 mt-5 text-text_color">
            <a
              href={`${project.repo}`}
              target="_blank"
              className="flex flex-col justify-center text-light_theme_blue dark:text-dark_theme_cyan items-center hover:cursor-pointer  hover:brightness-75 duration-150  group"
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
              className="flex flex-col justify-center text-light_theme_blue dark:text-dark_theme_cyan items-center hover:cursor-pointer  hover:brightness-75 duration-150  group"
            >
              <FaRocket
                size={"24"}
                className="group-hover:-translate-y-1 duration-150"
              />
              <p>App</p>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
