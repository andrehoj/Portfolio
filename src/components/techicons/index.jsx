import React from "react";
import { Tooltip } from "@material-tailwind/react";

export default function TechIcons({ link, icon }) {
  return (
    <Tooltip content={icon} className="bg-black rounded-md text-white ">
      <img
        src={link}
        data-tooltip-target={icon}
        alt={`${icon} icon`}
        height="30px"
        width={"30px"}
        className="hover:scale-125 transition-all ease-in duration-200"
      />
    </Tooltip>
  );
}
