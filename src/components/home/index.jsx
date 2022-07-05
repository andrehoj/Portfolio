import React, { useEffect, useRef } from "react";

function Home(props) {
  return (
    <section id="Home" className="sections" ref={props.innerRef}>
      <div className="pt-44 ml-20 max-w-2xl flex flex-col gap-5">
        <h1 className="title-text">
          <span className="block">Hi,</span>
          <span className="block">
            I'm a{" "}
            <span className="text-text_color font-bold">Web Developer</span>{" "}
          </span>
          <span className="block ">And my name's Andrew.</span>
          <p className="text-text_color text-lg mt-3">
            Full Stack Development / Javascript || Node.js
          </p>
        </h1>
      </div>
    </section>
  );
}

export default Home;
