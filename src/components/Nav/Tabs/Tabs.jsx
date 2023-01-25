import { Link, useLocation } from "react-router-dom";

export default function Tabs({ tab, setOpen }) {
  let { pathname } = useLocation();

  let activeNav = pathname.replace("/", "");

  if (!activeNav) activeNav = "Home";

  return (
    <Link
      className={`p-1 font-light hover:text-main_white ${
        activeNav === tab && "mobile-nav-active"
      }`}
      onClick={() => {
        setOpen(false);
      }}
      to={`${tab}`}
    >
      <span>{tab}</span>
    </Link>
  );
}
