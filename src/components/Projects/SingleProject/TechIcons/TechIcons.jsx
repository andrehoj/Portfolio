import React from "react";
import { Tooltip } from "@material-tailwind/react";

export default function TechIcons({ link, icon, color }) {
  return (
    <Tooltip content={icon} className="bg-black text-white dark:bg-main_white dark:text-main_black rounded-md ">
      <img
        src={link}
        data-tooltip-target={icon}
        alt={`${icon} icon`}
        height="30px"
        width={"30px"}
        className={`${color && "dark:light-icons"} dark:light-icons  hover:scale-125 transition-all ease-in duration-200`}
      />
    </Tooltip>
  );
}
