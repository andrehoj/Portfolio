import React from "react";
import { Link } from "react-router-dom";

export default function Navicons({
  IconObj,
  activeNav,
  biggerThan1000,
  biggerThan750,
  setOpen,
  setActiveElement,
}) {
  if (biggerThan750) {
    return (
      <Link to={`${IconObj.name}`}>
        <div
          onClick={() => {
            setActiveElement(IconObj.name);
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
      </Link>
    );
  }
  return (
    <Link to={`${IconObj.name}`}>
      <div className="flex justify-center p-3 bg-back shadow-2xl">
        <div
          onClick={() => {
            setOpen(false);
            setActiveElement(IconObj.name);
          }}
          className={` ${
            biggerThan1000 ? "icon-container" : "icon-container-md"
          } 
        `}
        >
          <span
            className={`hover:text-main_orange  font-bold ${
              activeNav === IconObj.name && "mobile-nav-active"
            }`}
          >
            {IconObj.name}
          </span>
        </div>
      </div>
    </Link>
  );
}
