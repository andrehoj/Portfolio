import TechIcons from "./TechIcons/TechIcons";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import { FaGithubAlt, FaRocket } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
import ProjectModal from "./ProjectModal";

export default function SingleProject({ project }) {
  const projectRef = useRef(null);

  const isProjectInView = useInView(projectRef, {
    threshold: 0.3,
  });

  const projectAnimation = useAnimation();
  const projectImageAnimation = useAnimation();

  const [modalOpen, setModalOpen] = useState(false);

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
        transition: {
          type: "spring",
          duration: 0.3,
          bounce: 0.1,
          delay: 0.1,
        },
        x: 30,
        opacity: 0,
      });
    }
  }, [isProjectInView, projectAnimation, projectImageAnimation]);

  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  return (
    <div className="mx-1 grid max-w-full grid-cols-1 sm:mx-20 lg:mx-0 lg:grid-cols-2">
      <motion.div
        animate={projectAnimation}
        initial={{ opacity: 0, x: -30 }}
        className="order-2 h-fit rounded-lg px-8 py-5 shadow-sm shadow-theme_purple md:min-w-[375px] lg:order-1"
      >
        <div className="w-100 flex min-h-full flex-col justify-between text-center lg:w-9/12 lg:text-start">
          <div className="flex flex-col gap-7 lg:w-11/12 lg:gap-3">
            <h1
              className={`font-main_font text-2xl font-black text-theme_purple sm:text-4xl`}
            >
              {project.title}
            </h1>

            <p
              ref={projectRef}
              className="font-text_secondary font-semibold text-text_secondary"
            >
              {project.description}
            </p>
            <div className="mb-2">
              {project.icons.length ? (
                <p className="mb-2 text-xl font-bold">Built with</p>
              ) : null}

              <div className="mb-5 flex flex-wrap justify-center gap-5 lg:justify-start ">
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

          <div className="flex justify-center gap-8 justify-self-end text-theme_cyan lg:justify-start">
            <a
              href={`${project.repo}`}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col  items-center justify-center duration-150 hover:cursor-pointer hover:brightness-75"
            >
              <FaGithubAlt
                size={"24"}
                className="duration-150 group-hover:-translate-y-1"
              />
              <p>Code</p>
            </a>

            <a
              href={`${project.link}`}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col  items-center justify-center duration-150 hover:cursor-pointer hover:brightness-75"
            >
              <FaRocket
                size={"24"}
                className="duration-150 group-hover:-translate-y-1"
              />
              <p>App</p>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={projectImageAnimation}
        className="z-10 order-1 lg:relative lg:-left-28 lg:top-5 lg:order-2 "
      >
        <div
          onClick={() => toggleModal()}
          className="rounded-xl bg-theme_purple"
        >
          <img
            className="project-link mb-5 cursor-pointer rounded-xl transition-all duration-150 lg:mb-0 "
            src={project.img && require(`${project.img}`)}
            alt="headshot of Andrew"
          />
        </div>
      </motion.div>

      <ProjectModal toggleModal={toggleModal} isVisible={modalOpen} project={project} />
    </div>
  );
}
