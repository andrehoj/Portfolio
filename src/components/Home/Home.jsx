import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const letters = ["W", "e", "b ", "D", "e", "v", "e", "l", "o", "p", "e", "r"];

export default function Home({ biggerThan750, biggerThan1000 }) {
  return (
    <section id="Home" className="sections">
      <div
        className={`${
          biggerThan750 ? "ml-20 mr-8 max-w-fit" : "mx-6 text-center "
        }   `}
      >
        <h1 className="title-text flex flex-col ">
          <div>Hi</div>
          <div
            className={`${
              !biggerThan750 && "justify-center"
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
        <Link to="/Contact">
          <button
            className="mt-2 custom-btn"
          >
            Contact Me
          </button>
        </Link>
      </div>
    </section>
  );
}
