import React from "react";
import SingleProject from "../SingleProject";
import { projectData } from "../../utils/projectData";

export default function project({ innerRef, biggerThan750 }) {
  return (
    <section id="Projects" className="sections" ref={innerRef}>
      <div
        className={`${
          biggerThan750 ? "ml-20 " : "text-center max-w-fit mx-auto "
        } `}
      >
        <h2 className="title-text mb-5">Projects I've built</h2>
        <div className="grid grid-cols-1 gap-16">
          {projectData.map((project) => (
            <SingleProject project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
