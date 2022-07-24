import React from "react";
import { Tooltip, Button } from "@material-tailwind/react";

function TechIcons({ link, icon}) {
  return (
    <Tooltip content={icon} className="bg-black rounded-md text-white" >
      <img
        src={link}
        data-tooltip-target={icon}
        alt={`${icon} icon`}
        height="30px"
        width={"30px"}
      />
    </Tooltip>
  );
}

export default TechIcons;
