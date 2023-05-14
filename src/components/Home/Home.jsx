import { Link } from "react-router-dom";
import Canvas from "./Canvas";
import { motion } from "framer-motion";
import "../../gradient-animation.css";

export default function Home() {
  return (
    <motion.section
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -30, opacity: 0 }}
      transition={{ duration: 0.5 }}
      id="Home"
      className="sections"
    >
      <div className="text-3xl sm:text-5xl font-main_font tracking-wider">
        <p>Hi,</p>
        <span>I'm </span>
        <span className="heading-line heading-line-first sm:text-8xl md:text-9xl">
          <span className="heading-line-gradient">Andrew.</span>
        </span>{" "}
        <p className="lg:mr-80">
          <span>A </span>
          <span className="heading-line heading-line-second sm:text-8xl md:text-9xl">
            <span className="heading-line-gradient">Web</span>
          </span>{" "}
          <span className="heading-line heading-line-third sm:text-8xl md:text-9xl">
            <span className="heading-line-gradient">Developer.</span>
            <span className="hidden lg:block lg:absolute lg:-top-40 -right-96">
              <Canvas bgColor={"transparent"} />
            </span>
          </span>
        </p>
        <p>
          based in <span> Ottawa, Ontario</span>&#x2e;
        </p>
      </div>

      <span className="flex flex-col items-center lg:items-start mt-3">
        <Link to="/Contact">
          <button className="custom-btn-contact contact-btn tracking-tight">
            Contact Me
          </button>
        </Link>
      </span>

      <div className="lg:hidden flex justify-center -mt-10 items-start z-0">
        <Canvas bgColor={""} />
      </div>
    </motion.section>
  );
}
