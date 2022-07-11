import React from "react";
import TechIcons from "../techicons";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithubAlt } from "react-icons/fa";
function project(props) {
  const devHangtechIcons = [
    {
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      name: "nodejs",
    },
    {
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      name: "express",
    },
    {
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      name: "mysql",
    },

    {
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      name: "html5",
    },
    {
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      name: "css5",
    },
    {
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      name: "bootstrap",
    },
    {
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
      name: "jquery",
    },
    {
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
      name: "socketio",
    },
  ];

  const estateLinks = [
    {
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      name: "nodejs",
    },

    {
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      name: "express",
    },
    {
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      name: "mongodb",
    },
    {
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      name: "html5",
    },
    {
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      name: "css5",
    },
    {
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      name: "react",
    },
    {
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      name: "tailwind",
    },
  ];

  return (
    <section id="Project" className="sections " ref={props.innerRef}>
      <div className="pt-44 ml-20 max-w-2xl flex flex-col gap-5">
        <h2 className="title-text">Things I've built</h2>
        <div className="project-container fourty">
          <h1 className="project-title">Developer Hangout</h1>
          <img
            src="https://picsum.photos/600/350"
            alt=""
            className="min-h-full max-w-full filter grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
          />
          <div className="project-card tilt ">
            <p>Built with</p>
            <div className="m-5 flex flex-wrap justify-center gap-5">
              {devHangtechIcons.map((iconObj, i) => (
                <TechIcons
                  icon={iconObj.name}
                  link={iconObj.link}
                  key={iconObj.name}
                />
              ))}
            </div>
            <p className="project-description">
              A live chatting app where users can create an account, edit their
              settings and chat with others.
            </p>
            <div className="flex justify-center gap-16 mt-5 text-text_color">
              <div className="flex flex-col  justify-center items-center  hover:cursor-pointer hover:brightness-75">
                <FaGithubAlt size={"24"} />
                <p>Repo</p>
              </div>

              <div className="flex flex-col justify-center items-center hover:cursor-pointer hover:brightness-75">
                <BiLinkExternal size={"24"} />

                <p>App</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default project;
