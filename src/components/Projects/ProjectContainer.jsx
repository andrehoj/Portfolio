import React from "react";
import SingleProject from "./SingleProject/SingleProject";
import { projectData } from "./utils/projectData";
import { motion } from "framer-motion";

export default function ProjectContainer({ biggerThan1000 }) {
  return (
    <section id="Projects" className="sections mb-12">
      <div
        className={`${
          biggerThan1000 ? "ml-20" : "text-center max-w-fit mx-auto"
        } `}
      >
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="title-text mb-5"
        >
          Some Projects I've built
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-1 gap-36"
        >
          {projectData.map((project) => (
            <SingleProject project={project} key={project.title} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
