import React from "react";
import TechIcons from "../techicons";

function project(props) {
  const devHangtechIcons = [
    {
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      name: "nodejs",
    },
    {
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      name: "html5",
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
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
      name: "sequelize",
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

  return (
    <div className="pt-44 ml-20 max-w-2xl flex flex-col gap-5">
      <h2 className="title-text">Things I've built</h2>
      <div className="project-container fourty">
        <h1 className="project-title">Developer Hangout</h1>
        <img
          src="https://picsum.photos/600/350"
          alt=""
          className="min-h-full max-w-full rounded-xl filter grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
        />
        <div className="project-card tilt ">
          <p>Built with</p>
          <div className="m-5 flex flex-wrap justify-center gap-5">
            {devHangtechIcons.map((iconObj, i) => (
              <TechIcons icon={iconObj.name} link={iconObj.link} key={iconObj.name} />
            ))}
          </div>
          <p className="project-description">
            A live chatting app where users can create an account, edit their
            settings and chat with others.
          </p>
          <div className="flex justify-center gap-16 mt-5 text-text_color">
            <div className="flex flex-col  justify-center items-center  hover:cursor-pointer hover:brightness-75">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                height="30px"
                width="30px"
              />
              <p>Repo</p>
            </div>

            <div className="flex flex-col justify-center items-center hover:cursor-pointer hover:brightness-75">
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
