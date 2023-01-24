import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import Socials from "./Socials/Socials";
import Tabs from "./Tabs/Tabs";

export default function LargeNav({ tabs }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="md:hidden nav-small text-secondary_text">
      <div className="h-full flex items-center justify-between mx-3 bg-main_black">
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
        } bg-main_black w-full h-fit text-text_secondary transition-all duration-200 ease-in border-b border-gray-600`}
      >
        {tabs.map((tab) => (
          <Tabs tab={tab} key={tab} setOpen={setOpen} />
        ))}
        <Socials />
      </div>
    </div>
  );
}
