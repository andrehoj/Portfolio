import React from "react";
import SingleProject from "./SingleProject/SingleProject";
import { projectData } from "./utils/projectData";
import { motion } from "framer-motion";

export default function ProjectContainer({ biggerThan750 }) {
  return (
    <motion.section
      id="Projects"
      className="sections mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
    </motion.section>
  );
}
