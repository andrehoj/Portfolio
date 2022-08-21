import React from "react";
import TechIcons from "./TechIcons/TechIcons";
import { FaGithubAlt, FaRocket } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "react-spring";

export default function SingleProject({ project }) {
  const { ref, inView } = useInView();

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1000,
  });

  return (
    <animated.div className="max-w-xl group " ref={ref} style={props}>
      <div className="project-container mx-5">
        <h1 className={`font-${project.font} project-title text-center my-4`}>
          {project.title}
        </h1>
        <div className="overflow-hidden rounded-t-lg">
          <img
            src={require(`${project.img}`)}
            alt=""
            className="rounded-t-lg filter brightness-50 group-hover:brightness-100  hover:filter-none transition-all duration-200"
            s
          />
        </div>
        <div className="w-full rounded-b-xl p-5 bg-light_blue">
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
              className="flex flex-col justify-center text-blue items-center  hover:cursor-pointer hover:scale-110 hover:brightness-75 duration-150"
            >
              <FaGithubAlt size={"24"} />
              <p>Code</p>
            </a>
            <a
              href={`${project.link}`}
              target="_blank"
              className="flex flex-col justify-center text-blue items-center hover:cursor-pointer hover:scale-110 hover:brightness-75 duration-150"
            >
              <FaRocket size={"24"} />
              <p>App</p>
            </a>
          </div>
        </div>
      </div>
    </animated.div>
  );
}
