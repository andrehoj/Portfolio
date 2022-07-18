import React from "react";
import TechIcons from "../techicons";
import { FaGithubAlt, FaRocket } from "react-icons/fa";

export default function SingleProject({ project }) {
  return (
    <div className="project-container items-start">
      <h1 className="project-title mb-2">{project.title}</h1>
      <img
        src="https://picsum.photos/600/350"
        alt=""
        className="filter grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
      />
      <div className="project-card justify-self-center w-3/5 item tilt">
        <p>Built with</p>
        <div className="m-5 flex flex-wrap justify-center gap-5">
          {project.icons.map((iconObj) => (
            <TechIcons
              icon={iconObj.name}
              link={iconObj.link}
              key={iconObj.name}
            />
          ))}
        </div>
        <p className="project-description">{project.description}</p>
        <div className="flex justify-center gap-16 mt-5 text-text_color">
          <div className="flex flex-col justify-center text-lightest_blue items-center  hover:cursor-pointer hover:brightness-75">
            <FaGithubAlt size={"24"} />
            <p>Code</p>
          </div>

          <div className="flex flex-col justify-center text-lightest_blue items-center hover:cursor-pointer hover:brightness-75">
            <FaRocket size={"24"} />
            <p>App</p>
          </div>
        </div>
      </div>
    </div>
  );
}
