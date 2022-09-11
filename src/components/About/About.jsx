import React from "react";
import Skills from "./Skills/Skills";

export default function about({ biggerThan750 }) {
  return (
    <section id="About" className="sections">
      <div
        className={`${
          biggerThan750 ? "ml-20 mr-8 max-w-2xl" : "mx-6 m-auto text-center"
        } flex flex-col gap-5 `}
      >
        <p className="title-text">About me</p>
        <p>
          Hi! My name is Andrew Howran and I'm an enthusiasti Web Developer who
          loves to solve problems using all kinds of web technologies. Im always
          learning and adapting to the constant changing environment that is the
          web.
        </p>
        <p>
          Feel free to contact me whether its about a project, job opportunity
          or if you have any questions.
        </p>
        <Skills />
      </div>
     
    </section>
  );
}
