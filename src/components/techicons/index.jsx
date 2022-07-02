import React from "react";

function techIcons({ link, icon }) {
  return (
    <div className="">
      <img
        src={link}
        data-tooltip-target={icon}
        alt={`${icon} icon`}
        height="30px"
        width={"30px"}
      />
      <div
        id={icon}
        role="tooltip"
        className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
      >
        {icon}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  );
}

export default techIcons;
