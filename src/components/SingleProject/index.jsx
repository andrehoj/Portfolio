import React from "react";
import TechIcons from "../techicons";
import { FaGithubAlt, FaRocket } from "react-icons/fa";

export default function SingleProject({ project }) {
  return (
    <div className="max-w-xl group ">
      <div className="project-container mx-5">
        <h1 className={`font-${project.font} project-title text-center my-4`}>
          {project.title}
        </h1>
        <div className="overflow-hidden rounded-t-lg">
          <img
            src="https://picsum.photos/850/450"
            alt=""
            className="rounded-t-lg filter brightness-50 group-hover:brightness-100 group-hover:scale-110 hover:cursor-pointer transition-all duration-200"
          />
        </div>
        <div className="w-full rounded-b-xl p-5 bg-lighter_blue">
          <p className="text-center text-2xl">Built with</p>
          <div className="m-5 flex flex-wrap justify-center gap-5">
            {project.icons.map((iconObj) => (
              <TechIcons
                icon={iconObj.name}
                link={iconObj.link}
                key={iconObj.name}
              />
            ))}
          </div>
          <p className="project-description text-center">
            {project.description}
          </p>
          <div className="flex justify-center gap-16 mt-5 text-text_color">
            <div className="flex flex-col justify-center text-lightest_blue items-center  hover:cursor-pointer hover:scale-110 hover:brightness-75 duration-150">
              <FaGithubAlt size={"24"} />
              <p>Code</p>
            </div>
            <div className="flex flex-col justify-center text-lightest_blue items-center hover:cursor-pointer hover:scale-110 hover:brightness-75 duration-150">
              <FaRocket size={"24"} />
              <p>App</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
