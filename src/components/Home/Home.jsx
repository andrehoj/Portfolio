import { Link } from "react-router-dom";
import Canvas from "./Canvas";
import { motion } from "framer-motion";
import "../../gradient-animation.css";

export default function Home() {
  return (
    <section id="Home" className="sections relative ">
      <motion.div className="text-3xl sm:text-5xl font-main_font">
        <p>Hi,</p>
        <span>I'm </span>
        <span className="heading-line heading-line-first before:content-['Andrew.'] text-7xl md:text-9xl tracking-wide">
          <span className="heading-line-gradient w-fit">Andrew.</span>
        </span>{" "}
        <p className="lg:mr-80">
          <span>A </span>
          <span className="heading-line heading-line-second before:content-['Web'] text-7xl md:text-9xl tracking-wide">
            <span className="heading-line-gradient w-fit">Web</span>
          </span>{" "}
          <span className="heading-line heading-line-third before:content-['Developer'] text-7xl md:text-9xl tracking-wide">
            <span className="heading-line-gradient w-fit">Developer</span>{" "}
            <div className="hidden lg:block lg:absolute lg:-top-40 -right-96">
              <Canvas bgColor={"transparent"} />
            </div>
          </span>
        </p>
        <p className="">
          based in <span> Ottawa, Ontario.</span>
        </p>
        <p className="font-light text-base my-2">
          — <span className="text-js_color">JavaScript</span> Developer —
        </p>
      </motion.div>

      <span className="flex flex-col items-center lg:items-start ">
        <Link className="font-text_secondary" to="/Contact">
          <motion.button className="custom-btn-contact z-50 relative">
            Contact Me
          </motion.button>
        </Link>
      </span>

      <div className="lg:hidden flex justify-center -mt-10 items-start z-0">
        <Canvas bgColor={""} />
      </div>
    </section>
  );
}
