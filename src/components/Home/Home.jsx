import React from "react";
import { motion } from "framer-motion";

export default function Home({ biggerThan750, biggerThan1000 }) {
  return (
    <motion.section
      id="Home"
      className="sections"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className={`${
          biggerThan750 ? "ml-20 mr-8 max-w-fit" : "mx-6 text-center"
        }   `}
      >
        <h1 className="title-text text-white  flex flex-col ">
          <div className="">Hi</div>
          <div
            className={`${
              !biggerThan750 && "justify-center"
            } flex gap-3  flex-wrap`}
          >
            <div className="">I'm a</div>
            <motion.div className="text-blue font-bold">
              Web Developer
            </motion.div>
          </div>
          And my name's Andrew.
          <p className="text-text_color text-lg mt-3">
            Full Stack JavaScript Developer
          </p>
        </h1>
        <button
          className={`text-blue border-blue border justify-center mt-5 mr-2 px-3 py-1 bg-third hover:bg-blue hover:text-dark_blue  transition-all duration-200 ease-linear tracking-widest font-bold active:scale-75 btns`}
        >
          Contact Me
        </button>
      </div>
    </motion.section>
  );
}
