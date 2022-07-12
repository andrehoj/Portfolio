import React, { useEffect, useState } from "react";
import Navicons from "../Navicons";
import Socials from "../Socials";
import { GoPerson } from "react-icons/go";
import { ImHome } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { GiHammerNails } from "react-icons/gi";
import Hamburger from "hamburger-react";

export default function Nav({ biggerThan1000, biggerThan750, activeElement }) {
  const [isOpen, setOpen] = useState(false);

  const [show, setShow] = useState(true);

  let lastScroll = window.scrollY;

  const controllNav = () => {
    if (lastScroll < window.scrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    lastScroll = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controllNav);
    return () => {
      window.removeEventListener("scroll", controllNav);
    };
  });

  const [activeNav, setActiveNav] = useState("Home");

  useEffect(() => {
    setActiveNav(activeElement);
  }, [activeElement]);

  const sideBarIcons = [
    { Icon: ImHome, name: "Home" },
    { Icon: GoPerson, name: "About" },
    { Icon: GiHammerNails, name: "Projects" },
    { Icon: GrMail, name: "Contact" },
  ];

  if (biggerThan1000) {
    return (
      <div className="nav-large">
        <nav className="h-full flex flex-col items-center justify-between">
          <div className="responsive-nav flex flex-col items-center h-fit gap-4 shrink">
            {sideBarIcons.map((IconObj) => (
              <Navicons
                IconObj={IconObj}
                key={IconObj.name}
                activeNav={activeNav}
                biggerThan1000={biggerThan1000}
                biggerThan750={biggerThan750}
              />
            ))}
          </div>
          <Socials biggerThan1000={biggerThan1000} />
        </nav>
      </div>
    );
  } else if (biggerThan750) {
    return (
      <div className={`nav-small ${!show && "opacity-0 invisible"} `}>
        <nav className="flex h-full justify-end items-center gap-24 mr-6">
          <div className="flex gap-2 ">
            {sideBarIcons.map((IconObj) => (
              <Navicons
                IconObj={IconObj}
                key={IconObj.name}
                activeNav={activeNav}
                activeElement={activeElement}
                biggerThan1000={biggerThan1000}
                biggerThan750={biggerThan750}
              />
            ))}
          </div>
          <Socials />
        </nav>
      </div>
    );
  }
  return (
    <div className="nav-small ">
      <div className="h-full flex items-center justify-between mr-6 ml-6">
        <Socials />
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          duration={0.6}
          label="Show menu"
          className=""
        />
      </div>
      <div
        className={`${
          !isOpen && "opacity-0 invisible"
        }  w-full h-fit border-t border-main_orange bg-lighter_blue group transition-all duration-200 ease-in`}
      >
        {sideBarIcons.map((IconObj) => (
          <Navicons
            IconObj={IconObj}
            key={IconObj.name}
            activeNav={activeNav}
            activeElement={activeElement}
            biggerThan1000={biggerThan1000}
            biggerThan750={biggerThan750}
            setOpen={setOpen}
          />
        ))}
      </div>
    </div>
  );
}
