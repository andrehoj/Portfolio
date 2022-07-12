import React from "react";

export default function Navicons({
  IconObj,
  activeNav,
  biggerThan1000,
  biggerThan750,
  setOpen,
}) {
  if (biggerThan750) {
    return (
      <div
        onClick={() => {
          const anchor = document.querySelector(`#${IconObj.name}`);
          anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
        className={` ${
          biggerThan1000 ? "icon-container" : "icon-container-md"
        } ${IconObj.name.toLowerCase()} ${
          activeNav === `${IconObj.name}` &&
          (biggerThan1000 ? "icon-active" : "icon-active-md ")
        }`}
      >
        <IconObj.Icon size="36" className={`sidebar-icon`} />
      </div>
    );
  }
  return (
    <div
      className="flex justify-center p-3 bg-back  shadow-2xl
    "
    >
      <div
        onClick={() => {
          setOpen(false);
          const anchor = document.querySelector(`#${IconObj.name}`);
          anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
        className={` ${biggerThan1000 ? "icon-container" : "icon-container-md"} 
        `}
      >
        <span
          className={`hover:text-main_orange hover: font-bold ${
            activeNav === IconObj.name && "mobile-nav-active"
          }`}
        >
          {IconObj.name}
        </span>
      </div>
    </div>
  );
}
