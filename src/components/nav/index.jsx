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

  if (props.biggerThan1000) {
    return (
      <nav className="nav-large">
        <nav className="h-full flex flex-col items-center justify-end">
          <div className="mt-24 grow">
            <div
              onClick={() => {
                const anchor = document.querySelector("#Home");
                anchor.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              className="mb-5 p-2 icon-container"
            >
              <ImHome
                size="36"
                className={`${
                  activeNav === "home" ? "icon-active" : "sidebar-icon"
                }`}
              />
            </div>
            <div
              onClick={() => {
                const anchor = document.querySelector("#About");
                anchor.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              className="mb-5 p-2"
            >
              <GoPerson
                size="36"
                className={`${
                  activeNav === "about" ? "icon-active" : "sidebar-icon"
                }`}
              />
            </div>
            <div
              onClick={() => {
                const anchor = document.querySelector("#Project");
                anchor.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              className=" mb-5 p-2"
            >
              <GiHammerNails
                size="36"
                className={`${
                  activeNav === "project" ? "icon-active" : "sidebar-icon"
                }`}
              />
            </div>

            <div
              onClick={() => {
                const anchor = document.querySelector("#Contact");
                anchor.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              className=" mb-5 p-2"
            >
              <GrMail
                size="36"
                className={`${
                  activeNav === "contact" ? "icon-active" : "sidebar-icon"
                }`}
              />
            </div>
          </div>
          <div className="mb-8">
            <BsGithub size="26" className="mb-4  sidebar-icon" />
            <BsLinkedin size="26" className=" mb-4 sidebar-icon" />
            <BsStackOverflow size="26" className="sidebar-icon" />
          </div>
        </nav>
      </nav>
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
              ? " justify-end items-center gap-6 mr-14"
              : "flex justify-end items-center gap-x-3 mr-4 "
          } `}
        >
          {sideBarIcons.map((Icon) => (
            <div
              className={`topbar-icon ${!props.biggerThan500 && ""}`}
              key={Icon.name}
            >
              <Icon size="34" />
            </div>
          ))}
          <div
            className={`flex gap-4 ${!props.biggerThan500 && "justify-center"}`}
          >
            <div className="ml-10 flex gap-3">
              <BsGithub size="22" className="topbar-icon" />
              <BsLinkedin size="22" className="topbar-icon" />
              <BsStackOverflow size="22" className="topbar-icon" />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
