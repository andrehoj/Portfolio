import React from "react";
import SingleProject from "../SingleProject";
import { projectData } from "../../utils/projectData";


export default function project({ innerRef }) {
  return (
    <section id="Projects" className="sections" ref={innerRef}>
      <div className="pt-32 ml-20">
        <h2 className="title-text mb-5">Projects I've built</h2>
        {projectData.map((project) => (
          <SingleProject project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
}
