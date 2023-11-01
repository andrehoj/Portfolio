"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { FaGithubAlt, FaRocket } from "react-icons/fa";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { ProjectType } from "../projectData";
import { Carousel } from "@material-tailwind/react";

export default function ProjectCard({ project }: { project: ProjectType }) {
  const projectRef = useRef(null);

  const isProjectInView = useInView(projectRef);

  const projectAnimation = useAnimation();
  const projectImageAnimation = useAnimation();

  useEffect(() => {
    if (isProjectInView) {
      projectAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.5,
          bounce: 0.3,
          delay: 0.2,
        },
      });

      projectImageAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.5,
          bounce: 0.3,
          delay: 0.2,
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
          duration: 0.5,
          bounce: 0.3,
          delay: 0.2,
        },
        x: 30,
        opacity: 0,
      });
    }
  }, [isProjectInView, projectAnimation, projectImageAnimation]);

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
              className={`font-display text-2xl font-black text-theme_purple sm:text-4xl `}
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
                {project.icons.map((icon) => (
                  <span className="bg-transparent text-theme_cyan text-xs  mr-2 px-3.5 py-1 rounded  border border-theme_cyan">
                    {icon.name}
                  </span>
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
        initial={{ opacity: 0, x: 30 }}
        className="z-10 order-1 lg:relative lg:-left-28 lg:top-5 lg:order-2 "
      >
        <Carousel
          className="h-fit w-fit rounded-md"
          transition={{ duration: 0.2 }}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {project.images.map((img) => (
            <img
              className="mb-5 h-fit w-fit rounded-xl transition-all duration-150 lg:mb-0 "
              src={img && `${img}`}
              alt={`${project.title}`}
            />
          ))}
        </Carousel>
      </motion.div>
    </div>
  );
}
