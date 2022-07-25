import React from "react";

export default function about({ innerRef, biggerThan750 }) {
  return (
    <section id="About" className="sections" ref={innerRef}>
      <div
        className={`${
          biggerThan750 ? "ml-20 mr-8 max-w-2xl" : "mx-8 m-auto text-center"
        } flex flex-col gap-5 `}
      >
        <p className="title-text">About me</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
          cumque ducimus praesentium, deserunt perspiciatis, pariatur impedit
          minima quis beatae tenetur quasi cum alias ab magnam non.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, ab
          excepturi laborum voluptas animi illum non.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, vitae
          accusantium. Pariatur dicta reprehenderit fugiat vel tenetur
          voluptates nemo velit nam nihil aliquam sapiente quo, aut quas ab quod
          non!
        </p>
      </div>
    </section>
  );
}
