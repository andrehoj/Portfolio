import React from "react";
import { GoPerson } from "react-icons/go";
import { ImHome } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GiHammerNails } from "react-icons/gi";

const Nav = (props) => {
  const sideBarIcons = [ImHome, GoPerson, GiHammerNails, GrMail];

  if (props.biggerThan1000) {
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
      <div className={`${props.biggerThan500 ? "nav-small" : "nav-xsmall"}`}>
        <nav
          className={`flex h-full ${
            props.biggerThan500
              ? " justify-end items-center gap-6 mr-14"
              : "flex justify-end items-center gap-x-3 mr-4 "
          } `}
        >
          {sideBarIcons.map((Icon) => (
            <div className={`topbar-icon ${!props.biggerThan500 && ""}`}>
              <Icon size="34" />
            </div>
          ))}
          <div
            className={`flex gap-4 ${!props.biggerThan500 && "justify-center"}`}
          >
            <div className="ml-10 flex gap-3">
              <BsGithub size="22" className="topbar-icon" />
              <BsLinkedin size="22" className="topbar-icon" />
            </div>
          </div>
        </nav>
      </div>
    );
  }
};

export default Nav;
