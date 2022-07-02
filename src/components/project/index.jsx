import React from "react";
import TechIcons from "../techicons";

function project(props) {
  const techIcons = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  ];

  return (
    <div className="pt-44 ml-20 max-w-2xl flex flex-col gap-5">
      <h2 className="text-6xl">Things I've built</h2>
      <div className="project-container fourty">
        <h1 className="text-text_color text-center text-3xl text-font_two ">
          Developer Hangout
        </h1>
        <img
          src="https://picsum.photos/600/350"
          alt=""
          className="min-h-full max-w-full rounded-xl filter grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
        />
        <div className="project-card tilt ">
          <p>Built with</p>
          <div className="m-5 flex flex-wrap justify-center gap-5">
            {techIcons.map((icon, i) => (
              <TechIcons icon={icon} key={i} />
            ))}
          </div>
          <p class="project-description">
            A live chatting app where users can create an account, edit their
            settings and chat with others.
          </p>
          <div class="flex justify-center gap-16 mt-5 text-text_color">
            <div class="flex flex-col  justify-center items-center  hover:cursor-pointer hover:brightness-75">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                height="30px"
                width="30px"
              />
              <p>Repo</p>
            </div>

            <div class="flex flex-col justify-center items-center hover:cursor-pointer hover:brightness-75">
              <img
                height="30px"
                width="30px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
              />

              <p>App</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default project;
