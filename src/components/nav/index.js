import React from "react";
import { useMediaPredicate } from "react-media-hook";
import Sidebaricon from "../sidebaricon";
import Topbarlinks from "../topbarlinks";
import { GoPerson } from "react-icons/go";
import { ImHome } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";

const Nav = () => {
  const biggerThan1000 = useMediaPredicate("(min-width: 1000px)");

  const biggerThan500 = useMediaPredicate("(min-width: 500px)");

  const topNavLinks = ["Home", "About Me", "Projects", "Contact"];

  if (biggerThan1000) {
    return (
      <div className="nav-large ">
        <nav className="h-full flex flex-col items-center justify-end">
          <div className="mt-24 grow">
            <Sidebaricon icon={<ImHome size="36" />} />
            <Sidebaricon icon={<GoPerson size="36" />} />
            <Sidebaricon icon={<BiCodeAlt size="36" />} />
            <Sidebaricon icon={<GrMail size="36" />} />
          </div>

          <div className="mb-8">
            <Sidebaricon icon={<BsGithub size="22" />} />
            <Sidebaricon icon={<BsLinkedin size="22" />} />
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
              ? " justify-end items-center gap-10 mr-14"
              : "flex-col justify-center items-end gap-2 mr-12"
          } `}
        >
          <Topbarlinks link={topNavLinks[0]} />
          <Topbarlinks link={topNavLinks[1]} />
          <Topbarlinks link={topNavLinks[2]} />
          <Topbarlinks link={topNavLinks[3]} />
        </nav>
      </div>
    );
  }
};

export default Nav;
