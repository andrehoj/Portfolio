import React from "react";
import TechIcons from "../techicons";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithubAlt } from "react-icons/fa";
import { devHangOutIcons } from "../../utils/projectIconData";

export default function project({ innerRef }) {
  return (
    <section id="Projects" className="sections " ref={innerRef}>
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
              {devHangOutIcons.map((iconObj) => (
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
                <BiLinkExternal size={"24"}  />

                <p>App</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
