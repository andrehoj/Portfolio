import React from "react";
import { Tooltip } from "@material-tailwind/react";

export default function TechIcons({ link, icon, isIcon }) {
  return (
    <span class="dark:bg-main_black text-light_theme_blue text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-dark_theme_cyan_faded dark:text-dark_theme_cyan shadow-xl">
     {icon}
    </span>

    // <Tooltip
    //   content={icon}
    //   className="bg-black text-white dark:bg-main_white dark:text-main_black rounded-md "
    // >
    //   {isIcon ? (
    //     link
    //   ) : (
    //     <img
    //       src={link}
    //       data-tooltip-target={icon}
    //       alt={`${icon} icon`}
    //       height="30px"
    //       width={"30px"}
    //       className={` dark:light-icons  hover:scale-125 transition-all ease-in duration-200`}
    //     />
    //   )}
    // </Tooltip>
  );
}
