import React from "react";
import { Tooltip } from "@material-tailwind/react";

export default function TechIcons({ link, icon, isIcon }) {
  return (
    <span className="dark:bg-main_black text-light_theme_blue text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-dark_theme_cyan_faded dark:text-dark_theme_cyan shadow-xl">
      {icon}
    </span>
  );
}
