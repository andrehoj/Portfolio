import Socials from "./Socials/Socials";
import Tabs from "./Tabs/Tabs";
import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";

export default function NavContainer() {
  const tabs = ["Home", "About", "Projects", "Contact"];
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav
        className={`${
          isOpen ? "w-full h-fit pt-5 py-3 px-10" : "h-0 p-0 md:h-auto md:py-3 md:px-10"
        } fixed md:w-fit md:flex md:top-0 md:right-0 z-20 text-secondary_text bg-opacity-70 bg-main_black backdrop-blur-lg border-b border-gray-700`}
      >
        <div className="absolute top-5 left-5 md:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            duration={0.3}
            label="Show menu"
          />
        </div>

        <div
          className={`${
            isOpen
              ? "opacity-100 visible pointer-events-auto"
              : "opacity-0 invisible pointer-events-none"
          }  flex flex-col md:flex-row items-center gap-3 md:opacity-100 md:visible md:pointer-events-auto`}
        >
          {tabs.map((tab) => (
            <Tabs tab={tab} key={tab} setOpen={setOpen} />
          ))}

          <Socials />
        </div>
      </nav>
    </>
  );
}

{
  /* <div className="hidden md:block nav-small w-fit text-text_secondary text-light text-lg md:backdrop-blur-2xl md:bg-transparent  shadow-xl ">
        <div className="flex h-full justify-end items-center gap-24 border-b border-gray-700 pl-8">
          <div className="flex gap-1">
            {tabs.map((tab) => (
              <Tabs tab={tab} key={tab} />
            ))}
          </div>
          <Socials />
        </div>
      </div> */
}
