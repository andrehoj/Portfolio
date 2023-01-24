import { Link, useLocation } from "react-router-dom";

export default function Tabs({ tab, setOpen }) {
  let { pathname } = useLocation();

  let activeNav = pathname.replace("/", "");

  if (!activeNav) activeNav = "Home";

  return (
    <div className="flex justify-center p-3">
      <Link
        onClick={() => {
          setOpen(false);
        }}
        to={`/${tab}`}
      >
        <div className="icon-container-md">
          <span
            className={`font-light hover:text-main_white ${
              activeNav === tab && "mobile-nav-active"
            }`}
          >
            {tab}
          </span>
        </div>
      </Link>
    </div>
  );
}
