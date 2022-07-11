import React, { useEffect, useRef, useState } from "react";
import { GoPerson } from "react-icons/go";
import { ImHome } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { BsGithub, BsLinkedin, BsStackOverflow } from "react-icons/bs";
import { GiHammerNails } from "react-icons/gi";
import { icons } from "react-icons/lib";
import { act } from "react-dom/test-utils";

function Nav(props) {
  const [show, setShow] = useState(true);

  let lastScroll = window.scrollY;

  const controllNav = () => {
    if (lastScroll < window.scrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    //update the current scroll distance
    lastScroll = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controllNav);
    return () => {
      window.removeEventListener("scroll", controllNav);
    };
  }, []);

  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
    setActiveNav(props.activeElement);
  });

  const sideBarIcons = [ImHome, GoPerson, GiHammerNails, GrMail];

  console.log(props.activeElement);

  if (props.biggerThan1000) {
    return (
      <div className="nav-large">
        <nav className="h-full flex flex-col items-center justify-between">
          <div className="responsive-nav flex flex-col items-center h-fit gap-4 shrink">
            <div
              onClick={() => {
                const anchor = document.querySelector("#Home");
                anchor.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              className={`icon-container home ${
                activeNav === "home" ? "icon-active" : ""
              }`}
            >
              <ImHome size="36" className={`sidebar-icon`} />
            </div>
            <div
              onClick={() => {
                const anchor = document.querySelector("#About");
                anchor.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              className={`icon-container about ${
                activeNav === "about" ? "icon-active" : ""
              }`}
            >
              <GoPerson size="36" className={`sidebar-icon`} />
            </div>
            <div
              onClick={() => {
                const anchor = document.querySelector("#Project");
                anchor.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              className={`icon-container projects ${
                activeNav === "project" ? "icon-active" : ""
              }`}
            >
              <GiHammerNails size="36" className={`sidebar-icon`} />
            </div>

            <div
              onClick={() => {
                const anchor = document.querySelector("#Contact");
                anchor.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              className={`icon-container contact ${
                activeNav === "contact" ? "icon-active" : ""
              }`}
            >
              <GrMail size="36" className={`sidebar-icon`} />
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-12">
            <div className="resume-container mb-6">
              <a href="" download={""}>
                <button className="font-bold  border border-second_text px-2 py-1 hover:bg-second_text hover:text-primary transition-all duration-200 ease-linear active:scale-75">
                  Resume
                </button>
              </a>
            </div>
            <a
              href="https://github.com/AgentA12?tab=repositories"
              target={"blank"}
              className="self-center place-self-center justify-self-center github"
            >
              <BsGithub size="26" className="mb-4 " />
            </a>
            <a
              href="https://www.linkedin.com/in/andrew-howran-01470222a/"
              target={"blank"}
              className="self-center place-self-center justify-self-center"
            >
              <BsLinkedin size="26" className="mb-4 sidebar-icon linkedin" />
            </a>
            <a
              href="https://stackoverflow.com/users/17832653/andrew-h"
              target={"blank"}
              className="self-center place-self-center justify-self-center"
            >
              <BsStackOverflow size="26" className="sidebar-icon stackof" />
            </a>
          </div>
        </nav>
      </div>
    );
  } else {
    return (
      <div
        className={`transition-all duration-200 ease-in-out  ${
          props.biggerThan500 ? "nav-small" : "nav-xsmall"
        } ${!show && "opacity-0 invisible"} `}
      >
        <nav
          className={`flex h-full ${
            props.biggerThan500
              ? " justify-end items-center gap-24 mr-6"
              : "flex justify-end items-center gap-x-3 mr-4 "
          } `}
        >
          <div className="flex gap-6 ">
            {sideBarIcons.map((Icon) => (
              <div
                onClick={() => {
                  const anchor = document.querySelector("#Contact");
                  anchor.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                className={` flex items-center topbar-icon ${
                  !props.biggerThan500 && ""
                }`}
                key={Icon.name}
              >
                <span className="mr-1 text-2xl">Home</span>
                <Icon size="25" />
              </div>
            ))}
          </div>
          <div
            className={`flex items-center gap-4 ${
              !props.biggerThan500 && "justify-center"
            }`}
          >
            <div className="resume-container mr-4">
              <a href="" download={""}>
                <button className="text-sm font-bold border border-second_text px-2 py-1 hover:bg-second_text hover:text-primary transition-all duration-200 ease-linear active:scale-75">
                  Resume
                </button>
              </a>
            </div>

            <a
              href="https://github.com/AgentA12?tab=repositories"
              target={"blank"}
            >
              <BsGithub size="20" className="topbar-icon github" />
            </a>
            <a
              href="https://www.linkedin.com/in/andrew-howran-01470222a/"
              target={"blank"}
            >
              <BsLinkedin size="20" className="topbar-icon linkedin" />
            </a>
            <a
              href="https://stackoverflow.com/users/17832653/andrew-h"
              target={"blank"}
            >
              <BsStackOverflow size="20" className="topbar-icon stackof" />
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
