import React from "react";

export default function Home({ innerRef, biggerThan750 }) {
  return (
    <section id="Home" className="sections" ref={innerRef}>
      <div
        className={`${
          biggerThan750 ? "ml-20 mr-8 max-w-fit" : "mx-8 text-center"
        }  flex flex-col gap-5 `}
      >
        <h1 className="title-text">
          <span className="block">Hi</span>
          <span className="block">
            I'm a
            <span className="text-lightest_blue font-bold"> Web Developer</span>
          </span>
          <span className="block">And my name's Andrew.</span>
          <p className="text-text_color text-lg mt-3">
            Full Stack JavaScript Developer
          </p>
        </h1>
      </div>
    </section>
  );
}
