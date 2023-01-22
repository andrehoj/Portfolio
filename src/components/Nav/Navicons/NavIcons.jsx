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
          className={` 
             
           ${IconObj.name.toLowerCase()} ${
            activeNav === `${IconObj.name}` && "icon-active-md"
          }`}
        ></div>
      </Link>
    );
  }
  return (
    <div className="flex justify-center p-3 bg-main_black">
      <Link
        className="group"
        onClick={() => {
          setOpen(false);
        }}
        to={`${IconObj.name}`}
      >
        <div
          className={` ${
            biggerThan1000 ? "icon-container" : "icon-container-md"
          } 
        `}
        >
          <span
            className={`font-light ${
              activeNav === IconObj.name && "mobile-nav-active"
            }`}
          >
            {IconObj.name}
          </span>
        </div>
      </Link>
    </div>
  );
}
