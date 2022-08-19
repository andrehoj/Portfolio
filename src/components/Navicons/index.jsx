import React from "react";
import { animated, useSpring } from "react-spring";

export default function Navicons({
  IconObj,
  activeNav,
  biggerThan1000,
  biggerThan750,
  setOpen,
  delayTime,
}) {
  const props = useSpring({
    from: { marginRight: 200 },
    to: { marginRight: 0 },
    delay: delayTime,
  });

  if (biggerThan750) {
    return (
      <animated.div
        style={props}
        onClick={() => {
          const anchor = document.querySelector(`#${IconObj.name}`);
          anchor.scrollIntoView({
            behavior: "smooth",
            block: "start",
            alignToTop: true,
          });
        }}
        className={` ${
          biggerThan1000 ? "icon-container" : "icon-container-md"
        } ${IconObj.name.toLowerCase()} ${
          activeNav === `${IconObj.name}` &&
          (biggerThan1000 ? "icon-active" : "icon-active-md ")
        }`}
      >
        <IconObj.Icon size="36" className={`sidebar-icon`} />
      </animated.div>
    );
  }
  return (
    <div className="flex justify-center p-3 bg-back shadow-2xl">
      <div
        onClick={() => {
          setOpen(false);
          const anchor = document.querySelector(`#${IconObj.name}`);
          anchor.scrollIntoView({
            behavior: "smooth",
            block: "start",
            alignToTop: true,
          });
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
