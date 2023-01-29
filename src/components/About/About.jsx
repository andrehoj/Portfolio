import Skills from "./Skills/Skills";
import { motion } from "framer-motion";

export default function about() {
  return (
    <section id="About" className="sections ">
      <div className="lg:mr-8 lg:mx-0 lg:max-w-screen-sm max-w-xl m-auto">
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="font-black text-6xl sm:text-7xl gradient-title-about mb-5"
        >
          About Me
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-text_secondary my-5"
        >
          Hi! My name is Andrew Howran and I'm an enthusiastic Web Developer who
          loves to solve problems using all kinds of web technologies and is
          obsessed with learning new ones! Some of my hobbies include reading,
          weight lifting, film and of course coding. I'm always learning and
          adapting to the constant changing environment that is the web.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-text_secondary"
        >
          Feel free to contact me whether its about a project, job opportunity
          or if you have any questions.
        </motion.p>
      </div>
      <Skills />
    </section>
  );
}
