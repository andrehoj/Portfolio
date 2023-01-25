import { motion } from "framer-motion";
import {
  BsGithub,
  BsLinkedin,
  BsStackOverflow,
  BsDownload,
} from "react-icons/bs";

// import Resume from "./Resume.pdf";

export default function Socials() {
  return (
    <div className={"flex justify-center items-center gap-2 p-4 md:p-3"}>
      {/* <a
        href={Resume}
        className={"flex items-center gap-1 mr-2 text-sm text-light resume-btn"}
        download
      >
        <span>Resume</span>
        <BsDownload size={16} />
      </a> */}
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
