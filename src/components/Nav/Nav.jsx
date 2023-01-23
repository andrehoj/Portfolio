import { useState } from "react";
import { GoPerson } from "react-icons/go";
import { ImHome } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { GiHammerNails } from "react-icons/gi";
import { Cross as Hamburger } from "hamburger-react";
import Navicons from ".//Navicons/NavIcons";
import Socials from "./Socials/Socials";

export default function Nav({ biggerThan1000, biggerThan750, biggerThan400 }) {
  const [isOpen, setOpen] = useState(false);

  const sideBarIcons = [
    { Icon: ImHome, name: "Home" },
    { Icon: GoPerson, name: "About" },
    { Icon: GiHammerNails, name: "Projects" },
    { Icon: GrMail, name: "Contact" },
  ];

  if (biggerThan750) {
    return (
      <div className="nav-small w-fit text-text_secondary text-light text-lg backdrop-blur-3xl ">
        <nav className="flex h-full justify-end items-center gap-24 border-b border-gray-700 pl-8">
          <div className="flex gap-5">
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
  }
  return (
    <div className="nav-small text-secondary_text">
      <div className="h-full flex items-center justify-between mx-3">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          duration={0.3}
          label="Show menu"
        />
      </div>
      <div
        className={`${
          !isOpen && "opacity-0 invisible pointer-events-none"
        } bg-main_black w-full h-fit text-text_secondary transition-all duration-200 ease-in`}
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
