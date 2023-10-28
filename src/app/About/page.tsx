"use client";
import Skills from "./components/Skills";
import { motion } from "framer-motion";
import img from "./img_of_me.jpeg";
import { useEffect } from "react";
import Image from "next/image";

export default function About() {
  // scroll to top of page when nav section is changed
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <motion.section
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -30, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      id="About"
      className="sections "
    >
      <div className="m-auto lg:mx-0 lg:mr-8 lg:w-9/12 ">
        <p className="gradient-title-about mb-5 font-display text-6xl font-black sm:text-8xl lg:w-fit">
          About Me
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-text_secondary my-5">
              Hi! Im Andrew, I'm an enthusiastic Web Developer who loves to
              solve problems using all kinds of web technologies and is obsessed
              with learning new ones! Some of my hobbies include reading, weight
              lifting, film, video games and of course coding. I'm always
              learning and adapting to the constant changing environment that is
              the web.
            </p>

            <p className="text-text_secondary">
              Feel free to contact me whether its about a project, job
              opportunity or if you have any questions.
            </p>
          </motion.div>

       
          <Image
            className="about-img mt-5 justify-self-center  md:mt-0 lg:justify-self-start"
            height={225}
            width={225}
            src="/img_of_me.jpeg"
            alt="picture of andrew"
          />
        </div>
      </div>
      <Skills />
    </motion.section>
  );
}
