import React from "react";
import SingleProject from "./SingleProject/SingleProject";
import { projectData } from "./utils/projectData";

export default function ProjectContainer({ biggerThan1000 }) {
  return (
    <section id="Projects" className="sections mb-12">
      <div
        className={`${
          biggerThan1000 ? "ml-20" : "text-center max-w-fit mx-auto"
        } `}
      >
        <h2 className="title-text mb-5">Some Projects I've built</h2>
        <div className="grid grid-cols-1 gap-36">
          {projectData.map((project) => (
            <SingleProject project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
