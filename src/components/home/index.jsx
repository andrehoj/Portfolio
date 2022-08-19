import React from "react";

export default function Home({ innerRef, biggerThan750 }) {
  return (
    <section id="Home" className="sections" ref={innerRef}>
      <div
        className={`${
          biggerThan750 ? "ml-20 mr-8 max-w-fit" : "mx-8 text-center"
        }   `}
      >
        <h1 className="title-text text-white">
          <span className="block">Hi</span>
          <span className="block">
            I'm a<span className="text-blue font-bold ml-3">Web Developer</span>
          </span>
          <span className="block">And my name's Andrew.</span>
          <p className="text-text_color text-lg mt-3">
            Full Stack JavaScript Developer
          </p>
        </h1>
        <button
          onClick={() => {
            const anchor = document.querySelector("#Contact");
            anchor.scrollIntoView({
              behavior: "smooth",
              block: "start",
              align: true,
            });
          }}
          className={`text-blue border-blue border justify-center mt-5 mr-2 px-3 py-1 bg-third hover:bg-blue hover:text-dark_blue  transition-all duration-200 ease-linear tracking-widest font-bold active:scale-75 btns`}
        >
          Contact Me
        </button>
      </div>
    </section>
  );
}
