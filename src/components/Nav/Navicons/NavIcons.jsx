import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navicons({
  IconObj,
  biggerThan1000,
  biggerThan750,
  setOpen,
}) {
  let { pathname } = useLocation();

  let activeNav = pathname.replace("/", "");

  if (!activeNav || activeNav === "Portfolio") activeNav = "Home";

  if (biggerThan750) {
    return (
      <Link to={`${IconObj.name}`}>
        <div
          className={`group ${
            biggerThan1000 ? "icon-container" : "icon-container-md"
          } ${IconObj.name.toLowerCase()} ${
            activeNav === `${IconObj.name}` &&
            (biggerThan1000 ? "icon-active" : "icon-active-md ")
          }`}
        >
          {biggerThan1000 && (
            <IconObj.Icon size="36" className={`sidebar-icon`} />
          )}
        </div>
      </Link>
    );
  }
  return (
    <Link
      className="group"
      onClick={() => {
        setOpen(false);
      }}
      to={`${IconObj.name}`}
    >
      <div className="flex justify-center p-3 group-hover:text-light_theme_blue dark:group-hover:text-dark_theme_cyan ">
        <div
          className={` ${
            biggerThan1000 ? "icon-container" : "icon-container-md"
          } 
        `}
        >
          <span
            className={`font-bold ${
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
