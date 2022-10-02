import { useState } from "react";
import Navicons from ".//Navicons/NavIcons";
import Socials from "./Socials/Socials";
import { GoPerson } from "react-icons/go";
import { ImHome } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { GiHammerNails } from "react-icons/gi";
import Hamburger from "hamburger-react";

export default function Nav({ biggerThan1000, biggerThan750, biggerThan400 }) {
  const [isOpen, setOpen] = useState(false);

  const sideBarIcons = [
    { Icon: ImHome, name: "Home" },
    { Icon: GoPerson, name: "About" },
    { Icon: GiHammerNails, name: "Projects" },
    { Icon: GrMail, name: "Contact" },
  ];

  if (biggerThan1000) {
    return (
      <div className="nav-large">
        <nav className="h-full flex flex-col items-center justify-around">
          <div className="responsive-nav flex flex-col items-center h-fit gap-4 shrink">
            {sideBarIcons.map((IconObj) => (
              <Navicons
                IconObj={IconObj}
                key={IconObj.name}
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
      <div className="nav-small">
        <nav className="flex h-full justify-end items-center gap-24 mr-6">
          <div className="flex gap-2 ">
            {sideBarIcons.map((IconObj) => (
              <Navicons
                IconObj={IconObj}
                key={IconObj.name}
                biggerThan1000={biggerThan1000}
                biggerThan750={biggerThan750}
              />
            ))}
          </div>
          <Socials biggerThan1000={biggerThan1000}/>
        </nav>
      </div>
    );
  }
  return (
    <div className="nav-small">
      <div className="h-full flex items-center justify-between mx-3">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          duration={0.3}
          label="Show menu"
          className="bg-light_theme_blue dark:text-dark_theme_cyan"
        />
      </div>
      <div
        className={`${
          !isOpen && "opacity-0 invisible"
        }  w-full h-fit border-y dark:border-dark_theme_cyan border-light_theme_blue bg-main_white dark:bg-main_black dark:text-main_white transition-all duration-200 ease-in`}
      >
        {sideBarIcons.map((IconObj) => (
          <Navicons
            IconObj={IconObj}
            key={IconObj.name}
            biggerThan1000={biggerThan1000}
            biggerThan750={biggerThan750}
            biggerThan400={biggerThan400}
            setOpen={setOpen}
          />
        ))}
        <Socials biggerThan400={biggerThan400} />
      </div>
    </div>
  );
}
