import React from "react";
import { useMediaPredicate } from "react-media-hook";

import { GoPerson } from "react-icons/go";
import { ImHome } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";

const Nav = () => {
  const biggerThan1000 = useMediaPredicate("(min-width: 1000px)");
  const biggerThan500 = useMediaPredicate("(min-width: 550px)");

  const topNavLinks = ["Home", "About Me", "Projects", "Contact"];
  const sideBarIcons = [ImHome, GoPerson, BiCodeAlt, GrMail];

  if (biggerThan1000) {
    return (
      <div className="nav-large">
        <nav className="h-full flex flex-col items-center justify-end">
          <div className="mt-24 grow">
            {sideBarIcons.map((Icon, i) => (
              <div className="sidebar-icon" key={i}>
                <Icon size="36" />
              </div>
            ))}
          </div>
          <div className="mb-8">
            <BsGithub size="36" className="sidebar-icon" />
            <BsLinkedin size="36" className="sidebar-icon" />
          </div>
        </nav>
      </div>
    );
  } else {
    return (
      <div className={`${biggerThan500 ? "nav-small" : "nav-xsmall"}`}>
        <nav
          className={`flex h-full ${
            biggerThan500
              ? " justify-end items-center gap-5 mr-14"
              : "flex justify-end items-center gap-x-3 mr-4 "
          } `}
        >
          {topNavLinks.map((link, i) => (
            <div className={`top-nav-link ${!biggerThan500 && "text-responsive"}`}>
              <a href="/" className="link-item " key={i}>
                {link}
              </a>
            </div>
          ))}
          <div
            className={`flex gap-4 ${!biggerThan500 && "justify-center"}`}
          >
            <BsGithub size="22" className="topbar-icon" />
            <BsLinkedin size="22" className="topbar-icon" />
          </div>
        </nav>
      </div>
    );
  }
};

export default Nav;
