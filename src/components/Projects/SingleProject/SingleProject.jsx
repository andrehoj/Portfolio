import TechIcons from "./TechIcons/TechIcons";
import { motion, useInView, useAnimation } from "framer-motion";
import { FaGithubAlt, FaRocket } from "react-icons/fa";
import { useRef, useEffect } from "react";

export default function SingleProject({ project }) {
  const projectRef = useRef(null);

  const isProjectInView = useInView(projectRef, {
    threshold: 0.3,
  });

  const projectAnimation = useAnimation();
  const projectImageAnimation = useAnimation();

  useEffect(() => {
    if (isProjectInView) {
      projectAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.3,
          bounce: 0.1,
          delay: 0.1,
        },
      });

      projectImageAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.3,
          bounce: 0.1,
          delay: 0.1,
        },
      });
    }

    if (!isProjectInView) {
      projectAnimation.start({
        x: -30,
        opacity: 0,
      });

      projectImageAnimation.start({
        x: 30,
        opacity: 0,
      });
    }
  }, [isProjectInView]);

  return (
    <div className="mx-1 sm:mx-20 lg:mx-0 grid grid-cols-1 lg:grid-cols-2 max-w-full">
      <motion.div
        animate={projectAnimation}
        className="order-2 lg:order-1 md:min-w-[375px] px-8 py-5 rounded-lg shadow-sm shadow-theme_purple h-fit"
      >
        <div className="lg:w-9/12 w-100 flex flex-col justify-between text-center lg:text-start min-h-full">
          <div className="flex flex-col gap-7 lg:gap-3 lg:w-11/12">
            <h1 className={`text-2xl sm:text-4xl font-black text-theme_purple font-main_font`}>
              {project.title}
            </h1>

            <p className="font-text_secondary text-text_secondary font-semibold">
              {project.description}
            </p>
            <div className="mb-2">
              {project.icons.length ? (
                <p className="text-xl font-bold mb-2" ref={projectRef}>
                  Built with
                </p>
              ) : null}

              <div className="flex flex-wrap justify-center lg:justify-start gap-5 mb-5 ">
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

          <div className="flex justify-center lg:justify-start justify-self-end gap-8 text-theme_cyan">
            <a
              href={`${project.repo}`}
              target="_blank"
              className="flex flex-col justify-center  items-center hover:cursor-pointer hover:brightness-75 duration-150 group"
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
              className="flex flex-col justify-center  items-center hover:cursor-pointer hover:brightness-75 duration-150 group"
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
        animate={projectImageAnimation}
        className="lg:relative lg:-left-28 lg:top-5 order-1 lg:order-2 z-10 "
      >
        <div className="bg-theme_purple rounded-xl ">
          <img
            className="rounded-xl test mb-5 lg:mb-0 transition-all duration-150 cursor-pointer "
            src={project.img && require(`${project.img}`)}
          />
        </div>
      </motion.div>
    </div>
  );
}
