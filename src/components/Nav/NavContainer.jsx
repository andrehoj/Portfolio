import Socials from "./Socials/Socials";
import Tabs from "./Tabs/Tabs";
import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";

export default function NavContainer() {
  const tabs = ["Home", "About", "Projects", "Contact"];
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav className="hidden w-fit fixed top-0 right-0 backdrop-blur-xl shadow-2xl shadow-main_black z-30 md:flex items-center justify-end px-10 py-3 gap-8 text-text_secondary border-b border-gray-700">
        {tabs.map((tab) => (
          <Tabs tab={tab} key={tab} setOpen={setOpen} />
        ))}
        <Socials />

        <div
          className={`${
            !isOpen && "h-10"
          } nav-small text-secondary_text md:hidden`}
        >
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            duration={0.3}
            label="Show menu"
          />

          <div
            className={`${
              !isOpen && "opacity-0 invisible pointer-events-none"
            } w-full h-fit text-text_secondary transition-all duration-200 ease-in border-b border-gray-600 bg-main_black`}
          >
            {tabs.map((tab) => (
              <Tabs tab={tab} key={tab} setOpen={setOpen} />
            ))}
            <Socials />
          </div>
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
