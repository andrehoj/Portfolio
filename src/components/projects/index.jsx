import React from "react";
import SingleProject from "../SingleProject";

import {
  devHangOutIcons,
  findYourEstateIcons,
  spawsIcons,
  groceryStoreIcons,
} from "../../utils/projectIconData";

const ProjectData = [
  {
    title: "Developer Hangout",
    img: "",
    icons: devHangOutIcons,
    description:
      "A live chatting app where users can create an account, edit their settings and chat with others.",
  },
  {
    title: "Find Your Estate",
    img: "",
    icons: findYourEstateIcons,
    description:
      "A real estate application wher users can search for properties and filter their search",
  },

  {
    title: "Spaws",
    img: "",
    icons: spawsIcons,
    description:
      "A website I created for a local business. It is made with vanilla html css and javascript",
  },
  {
    title: "Grocery Store",
    img: "",
    icons: groceryStoreIcons,
    description:
      "A full stack app that allows users to shop online for groceries.",
  },
];

export default function project({ innerRef }) {
  return (
    <section id="Projects" className="sections " ref={innerRef}>
      <div className="pt-44 ml-20">
        <h2 className="title-text mb-5">Projects I've built</h2>
        <div className="grid lg:grid-cols-2 md:grid-cols-1">
          {ProjectData.map((project) => (
            <SingleProject project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
