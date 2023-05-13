import { Link, useLocation } from "react-router-dom";

export default function Tabs({ tab, setOpen }) {
  let { pathname } = useLocation();

  let activeNav = pathname.replace("/", "");

  if (!activeNav) activeNav = "Home";

  return (
    <div className="flex items-center">
      <Link
        className={`p-1 text-gray-400 text-md hover:text-main_white ${
          activeNav === tab && "text-white"
        }`}
        onClick={() => {
          setOpen(false);
        }}
        to={`${tab}`}
      >
        <span>{tab}</span>
      </Link>
    </div>
  );
}
