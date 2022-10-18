import Skills from "./Skills/Skills";
import { motion } from "framer-motion";

export default function about({ biggerThan1000 }) {
  return (
    <section id="About" className="sections">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className={`${
          biggerThan1000 ? "ml-20 mr-8 max-w-2xl" : "mx-4 text-center"
        } flex flex-col gap-5`}
      >
        <p className="title-text">About Me</p>
        <p>
          Hi! My name is Andrew Howran and I'm an enthusiastic Web Developer who
          loves to solve problems using all kinds of web technologies. Im always
          learning and adapting to the constant changing environment that is the
          web.
        </p>
        <p>
          Feel free to contact me whether its about a project, job opportunity
          or if you have any questions.
        </p>
        <Skills />
      </motion.div>
    </section>
  );
}
