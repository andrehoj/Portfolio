"use client";

import Skills from "./components/Skills";
import Image from "next/image";
import { motion } from "framer-motion";

export default function page() {
  return (
    <section className="flex flex-col m-auto lg:mx-0 lg:mr-8 lg:w-9/12 ">
      <h2 className="self-center lg:self-start gradient-title-about page-title">
        About Me
      </h2>

      <div className="grid grid-cols-1 justify-between  md:grid-cols-2 lg:gap-10">
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="text-text_secondary mt-5 self-start"
        >
          Hi! Im Andrew, I'm an enthusiastic Web Developer who loves to solve
          problems using all kinds of web technologies and is obsessed with
          learning new ones! Some of my hobbies include weight lifting, watching
          movies, playing guitar and of course coding. I'm always learning and
          adapting to the constant changing environment that is the web. Feel
          free to contact me whether its about a project, job opportunity or if
          you have any questions.
        </motion.p>

        <motion.div
        className="w-fit justify-self-center lg:justify-self-auto"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <Image
            className="about-img mt-5 md:mt-0 lg:justify-self-start"
            height={225}
            width={225}
            src="/img_of_me.jpeg"
            alt="picture of andrew"
          />
        </motion.div>
      </div>
      <Skills />
    </section>
  );
}
