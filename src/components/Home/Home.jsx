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
      <div className="font-main_font text-3xl tracking-wider sm:text-5xl">
        <p>Hi,</p>
        <span>I'm </span>
        <span className="heading-line heading-line-first">
          <span className="heading-line-gradient">Andrew</span>
        </span>{" "}
        <div className="lg:mr-80">
          <span className="heading-line heading-line-second">
            <span className="heading-line-gradient">Software</span>
          </span>{" "}
          <span className="heading-line heading-line-third">
            <span className="heading-line-gradient">Developer.</span>

            <span className="-right-96 hidden lg:absolute lg:-top-40 lg:block">
              <Canvas bgColor={"transparent"} />
            </span>
          </span>
        </div>
        <p>
          based in <span>Ontario, <span className="">Canada</span></span>&#x2e;
        </p>
      </div>

      <Link
        className="mt-3 flex flex-col items-center lg:items-start"
        to="/Contact"
      >
        <button className="custom-btn-contact">Contact Me</button>
      </Link>

      <div className="z-0 -mt-10 flex items-start justify-center lg:hidden">
        <Canvas bgColor={""} />
      </div>
    </motion.section>
  );
}
