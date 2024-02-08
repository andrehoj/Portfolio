"use client";

import Skills from "./components/Skills";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function page() {
  return (
    <section className="flex flex-col m-auto lg:mx-0 lg:mr-8 lg:w-9/12 ">
      <h2 className="self-center lg:self-start gradient-title-about page-title">
        Bit About Me
      </h2>

      <div className="grid grid-cols-1 justify-between  md:grid-cols-2 lg:gap-10">
        <motion.p
          initial={{ opacity: 0, x: -55 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="text-text_secondary mt-5 self-start"
        >
          Hi! My name's Andrew, I'm a Web Developer who likes to solve problems
          using all kinds of web technologies and enjoy's learning new ones. Some
          of my favourite past times include weight lifting, watching movies,
          reading, playing{" "}
          <span className="text-theme_orange underline cursor-pointer">
            my guitar
          </span>{" "}
          and reading about code and writing it. I'm always learning and trying
          to improve the maintainability, readability and overall quality of my
          code, on top of adapting to the wild environment that is the web. Feel
          free to{" "}
          <Link
            className="text-theme_pink underline cursor-pointer"
            href="/Contact"
          >
            contact me
          </Link>{" "}
          whether it's about a project, job opportunity or if you have any
          questions at all.
        </motion.p>

        <motion.div
          className="w-fit justify-self-center lg:justify-self-auto"
          initial={{ opacity: 0, x: 55 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <Image
            className="about-img mt-5 md:mt-0 lg:justify-self-start"
            height={225}
            width={225}
            src="/webimg.jpg"
            alt="picture of andrew"
          />
        </motion.div>
      </div>
      <Skills />
    </section>
  );
}
