import {useEffect} from "react";
import SingleProject from "./SingleProject/SingleProject";
import { projectData } from "./utils/projectData";
import { motion } from "framer-motion";

export default function ProjectContainer() {
  // scroll to top of page when nav section is changed
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <motion.section
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -30, opacity: 0 }}
      transition={{ duration: 0.5 }}
      id="Projects"
      className="sections mb-12"
    >
      <div className="text-center lg:text-left max-w-fit">
        <h2 className="font-black text-5xl xsm:text-7xl gradient-title-projects h-auto sm:h-36 w-fit mx-auto lg:mx-0 font-main_font">
          Some Projects I've built
        </h2>
        <div className="grid grid-cols-1 gap-36 mt-5">
          {projectData.map((project) => (
            <SingleProject project={project} key={project.title} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
