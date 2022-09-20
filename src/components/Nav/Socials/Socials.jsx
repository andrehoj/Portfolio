import { motion } from "framer-motion";
import {
  BsGithub,
  BsLinkedin,
  BsStackOverflow,
  BsDownload,
  BsSun,
  BsMoon,
} from "react-icons/bs";
import useDarkMode from "../../../hooks/useDarkMode";
import Resume from "./Resume.pdf";

export default function Socials({ biggerThan1000 }) {
  const [colorTheme, setTheme] = useDarkMode();

  console.log(colorTheme)

  if (biggerThan1000) {
    return (
      <div className="flex flex-col gap-2 justify-self-end">
        <div className=" mb-6 flex flex-col items-center">
          {colorTheme === "light" ? (
            <BsMoon
              id=""
              className="theme-toggle"
              size={50}
              onClick={() => setTheme("light")}
            />
          ) : (
            <BsSun
              id=""
              className="theme-toggle"
              size={50}
              onClick={() => setTheme("dark")}
            />
          )}
          <a href={Resume} className="resume-btn" download>
            <span>Resume</span>
          </a>
        </div>
        <motion.a
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          href="https://github.com/AgentA12"
          target={"blank"}
          className="self-center place-self-center justify-self-center "
        >
          <BsGithub size="26" className="mb-4" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          href="https://www.linkedin.com/in/andrew-howran-01470222a/"
          target={"blank"}
          className="self-center place-self-center justify-self-center"
        >
          <BsLinkedin size="26" className="mb-4 sidebar-icon linkedin" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          href="https://stackoverflow.com/users/17832653/andrew-h"
          target={"blank"}
          className="self-center place-self-center justify-self-center"
        >
          <BsStackOverflow size="26" className="sidebar-icon stackof" />
        </motion.a>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-4 justify-around ml-2">
      {colorTheme === "light" ? (
        <BsMoon
          id=""
          className=" theme-toggle"
          size={45}
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsSun
          id=""
          className="theme-toggle"
          size={45}
          onClick={() => setTheme("dark")}
        />
      )}
      <a
        href={Resume}
        className={"flex items-center gap-1 mr-2 text-sm resume-btn"}
        download
      >
        <span>Resume</span>
        <BsDownload size={16} />
      </a>
      <motion.a
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        href="https://github.com/AgentA12"
        target={"blank"}
      >
        <BsGithub size="20" className=" github" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        href="https://www.linkedin.com/in/andrew-howran-01470222a/"
        target={"blank"}
      >
        <BsLinkedin size="20" className=" linkedin" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        href="https://stackoverflow.com/users/17832653/andrew-h"
        target={"blank"}
      >
        <BsStackOverflow size="20" className=" stackof" />
      </motion.a>
    </div>
  );
}
