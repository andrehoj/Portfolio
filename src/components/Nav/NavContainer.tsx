"use client";

import Socials from "./Socials";
import Tabs from "./Tabs";
import { useState, useRef } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { usePathname } from "next/navigation";

export default function NavContainer() {
  const pathname = usePathname();

  const tabs = [
    { name: "Home", link: "/" },
    { name: "About", link: "/About" },
    { name: "Projects", link: "/Projects" },
    { name: "Contact", link: "/Contact" },
  ];

  const [isOpen, setOpen] = useState(false);

  const wrapperRef = useRef(null);

  return (
    <nav
      ref={wrapperRef}
      className={`${
        isOpen
          ? "bg-main_black h-fit w-full border-b border-gray-700 px-10 py-3 pt-5"
          : "h-0 p-0 md:h-auto md:px-10 md:py-3 "
      } text-secondary_text fixed z-20 md:right-0 md:top-0 md:flex md:w-fit`}
    >
      <div className="absolute left-5 top-5 z-50 hover:cursor-pointer md:hidden ">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          duration={0.3}
          label="Show menu"
        
          color="#FFFFFF"
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
          <Tabs
            pathname={pathname}
            tab={tab}
            key={tab.name}
            setOpen={setOpen}
          />
        ))}

        <Socials />
      </div>
    </nav>
  );
}
