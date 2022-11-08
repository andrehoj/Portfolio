import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Canvas from "./Canvas";

const letters = ["W", "e", "b ", "D", "e", "v", "e", "l", "o", "p", "e", "r"];
const iconColor = "#4284f5";
const bgColor = "";

export default function Home({ biggerThan1000, biggerThan750 }) {
  return (
    <section id="Home" className="sections">
      <div
        className={`${biggerThan1000 ? "ml-20 mr-8 max-w-fit" : "text-center"}`}
      >
        <h1 className="title-text flex flex-col ">
          <div>Hi</div>
          <div
            className={`${
              !biggerThan1000 && "justify-center"
            } flex gap-3  flex-wrap`}
          >
            <div>I'm a</div>
            <div className="text-light_theme_blue dark:text-dark_theme_cyan font-bold whitespace-pre">
              {letters.map((letter, i) => (
                <motion.div
                  className="inline-block"
                  key={i}
                  initial={{ opacity: 0, y: -600 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", duration: 0.5, delay: i * 0.1 }}
                >
                  {letter}
                </motion.div>
              ))}
            </div>
          </div>
          And my name's Andrew.
          <p className="text-text_color text-lg mt-3">
            Full Stack JavaScript Developer
          </p>
        </h1>
        <Link className="flex justify-center lg:justify-start" to="/Contact">
          <button className="mt-2 block custom-btn">Contact Me</button>
        </Link>
        <Canvas bgColor={bgColor} iconColor={iconColor} biggerThan750={biggerThan750} />
      </div>
    </section>
  );
}
