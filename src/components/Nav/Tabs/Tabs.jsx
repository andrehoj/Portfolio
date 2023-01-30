import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Tabs({ tab, setOpen }) {
  let { pathname } = useLocation();

  let activeNav = pathname.replace("/", "");

  if (!activeNav) activeNav = "Home";

  return (
    <div className="flex items-center">
      {activeNav === tab ? (
        <motion.p
          className="text-xl pointer-events-none mr-1"
          animate={{
            x: ["25%", "-25%"],
          }}
          transition={{
            x: {
              duration: 0.7,
              ease: "easeOut",
              yoyo: Infinity,
            },
          }}
        >
          👉
        </motion.p>
      ) : null}

      <Link
        className={`p-1 text-gray-400 text-md  ${
          activeNav === tab && activeNav === "Home" && "home-active-nav"
        }  ${activeNav === tab && activeNav === "About" && "about-active-nav"} ${
          activeNav === tab && activeNav === "Projects" && "projects-active-nav"
        } ${
          activeNav === tab && activeNav === "Contact" && "contact-active-nav"
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
