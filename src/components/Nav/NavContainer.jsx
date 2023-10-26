import Socials from "./Socials/Socials";
import Tabs from "./Tabs/Tabs";
import { useState, useRef } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { useLocation } from "react-router-dom";

export default function NavContainer() {
  let { pathname } = useLocation();

  let activeNav = pathname.replace("/", "");

  if (!activeNav) activeNav = "Home";

  const tabs = ["Home", "About", "Projects", "Contact"];

  const [isOpen, setOpen] = useState(false);

  const wrapperRef = useRef(null);

  return (
    <nav
      ref={wrapperRef}
      className={`${
        isOpen
          ? "h-fit w-full border-b border-gray-700 bg-main_black px-10 py-3 pt-5"
          : "h-0 p-0 md:h-auto md:px-10 md:py-3 "
      } fixed z-20 text-secondary_text md:right-0 md:top-0 md:flex md:w-fit`}
    >
      <div className="absolute left-5 top-5 z-50 hover:cursor-pointer md:hidden">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          duration={0.3}
          label="Show menu"
          className="z-50 h-full w-full"
        />
      </div>

      <div
        className={`relative ${
          isOpen
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }  flex flex-col items-center gap-3 md:pointer-events-auto md:visible md:w-full md:flex-row md:opacity-100`}
      >
        {tabs.map((tab) => (
          <Tabs tab={tab} key={tab} setOpen={setOpen} />
        ))}

        <Socials />
      </div>
    </nav>
  );
}
