import React from "react";
import SingleProject from "./SingleProject/SingleProject";
import { projectData } from "./utils/projectData";
import { motion } from "framer-motion";

export default function ProjectContainer() {
  return (
    <section id="Projects" className="sections mb-12">
      <div className="text-center lg:text-left max-w-fit">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="font-black text-5xl xsm:text-7xl gradient-title-projects h-auto sm:h-36 w-fit mx-auto lg:mx-0"
        >
          Projects I've built
        </motion.h2>
        <div className="grid grid-cols-1 gap-36 mt-5">
          {projectData.map((project) => (
            <SingleProject project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
