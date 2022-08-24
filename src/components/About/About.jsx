import React from "react";
import Skills from "./Skills/Skills";
import { motion } from "framer-motion";

export default function about({ biggerThan750 }) {
  return (
    <motion.section
      id="About"
      className="sections"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className={`${
          biggerThan750 ? "ml-20 mr-8 max-w-2xl" : "mx-6 m-auto text-center"
        } flex flex-col gap-5 `}
      >
        <p className="title-text">About me</p>
        <p>
          Hi! My name is Andrew Howran and I'm an enthusiast Web Developer who
          loves to solve problems using all kinds of web technologies. Im always
          learning and adapting to the constant changing enviroment that is the
          web.
        </p>
        <p>
          Feel free to contact me whether its about a project, job opportunity
          or if you have any questions.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
}
