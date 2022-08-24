import React, { useEffect, useState, useContext } from "react";
import Navicons from ".//Navicons/NavIcons";
import Socials from "./Socials/Socials";
import { GoPerson } from "react-icons/go";
import { ImHome } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { GiHammerNails } from "react-icons/gi";
import { BsSun, BsMoon } from "react-icons/bs";
import Hamburger from "hamburger-react";
import useDarkMode from "../../hooks/useDarkMode";

export default function Nav({
  biggerThan1000,
  biggerThan750,
  activeElement,
  setActiveElement,
}) {
  const [isOpen, setOpen] = useState(false);

  const [activeNav, setActiveNav] = useState("Home");

  const [colorTheme, setTheme] = useDarkMode();

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
            {colorTheme === "light" ? (
              <BsMoon
                id=""
                className=" theme-toggle"
                size={30}
                onClick={() => setTheme("light")}
              />
            ) : (
              <BsSun
                id=""
                className="theme-toggle"
                size={30}
                onClick={() => setTheme("dark")}
              />
            )}

            {sideBarIcons.map((IconObj) => (
              <Navicons
                IconObj={IconObj}
                key={IconObj.name}
                activeNav={activeNav}
                biggerThan1000={biggerThan1000}
                biggerThan750={biggerThan750}
                setActiveElement={setActiveElement}
              />
            ))}
          </div>
          <Socials biggerThan1000={biggerThan1000} />
        </nav>
      </div>
    );
  } else if (biggerThan750) {
    return (
      <div className="nav-small">
        <nav className="flex h-full justify-end items-center gap-24 mr-6">
          <div className="flex gap-2 ">
            {colorTheme === "light" ? (
              <BsMoon
                id=""
                className="m-0 theme-toggle"
                size={30}
                onClick={() => setTheme("light")}
              />
            ) : (
              <BsSun
                id=""
                className="theme-toggle"
                size={30}
                onClick={() => setTheme("dark")}
              />
            )}
            {sideBarIcons.map((IconObj) => (
              <Navicons
                IconObj={IconObj}
                key={IconObj.name}
                activeNav={activeNav}
                activeElement={activeElement}
                biggerThan1000={biggerThan1000}
                biggerThan750={biggerThan750}
                setActiveElement={setActiveElement}
              />
            ))}
          </div>
          <Socials />
        </nav>
      </div>
    );
  }
  return (
    <div className="nav-small">
      <div className="h-full flex items-center justify-between mx-3">
        <Socials />
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          duration={0.6}
          label="Show menu"
        />
      </div>
      <div
        className={`${
          !isOpen && "opacity-0 invisible"
        }  w-full h-fit border-t bg-white dark:border-white  dark:bg-light_blue group transition-all duration-200 ease-in`}
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
            setActiveElement={setActiveElement}
          />
        ))}
      </div>
    </div>
  );
}

//hiding nav bar on scroll down
// const [show, setShow] = useState(true);

// let lastScroll = window.scrollY;

// const controllNav = () => {
//   if (lastScroll < window.scrollY) {
//     setShow(false);
//   } else {
//     setShow(true);
//   }
//   lastScroll = window.scrollY;
// };

// useEffect(() => {
//   window.addEventListener("scroll", controllNav);
//   return () => {
//     window.removeEventListener("scroll", controllNav);
//   };
// });

//${!show && "opacity-0 invisible"}
