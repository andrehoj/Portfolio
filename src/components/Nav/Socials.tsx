import { motion } from "framer-motion";
import { RiTwitterXFill, RiStackOverflowLine, RiLinkedinBoxFill, RiGithubFill} from "react-icons//ri";

export default function Socials() {
  return (
    <div className={"flex items-center justify-center gap-2 p-4 md:p-3"}>
      <motion.a
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        href="https://github.com/AgentA12"
        target={"blank"}
      >
        <RiGithubFill size="24" color="#FFFFFF"/>
      </motion.a>
      {/* <motion.a
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        href="https://www.linkedin.com/in/andrew-howran-01470222a/"
        target={"blank"}
      >
        <RiLinkedinBoxFill size="20" className="text-linkedIn_color" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        href="https://github.com/AgentA12"
        target={"blank"}
      >
        <RiTwitterXFill size="20" color="#FFFFFF" />
      </motion.a> */}
      {/* <motion.a
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        href="https://stackoverflow.com/users/17832653/andrew-h"
        target={"blank"}
      >
        <RiStackOverflowLine size="20" className=" text-stackOF_color" />
      </motion.a> */}
     
    </div>
  );
};
