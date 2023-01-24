import { Link } from "react-router-dom";
import Canvas from "./Canvas";
import "../../gradient-animation.css";

export default function Home() {
  return (
    <section id="Home" className="sections relative">

      <h1 className="text-4xl sm:text-6xl font-light">
        <p>Hi,</p>
        <span>I'm </span>
        <span  className="heading-line heading-line-first">
          <span
           
            className="heading-line-gradient"
          >
            Andrew.
          </span>
        </span>{" "}
        <p className="lg:mr-80">
          <span>A </span>
          <span className="heading-line heading-line-second">
            <span className="heading-line-gradient">Software</span>
          </span>{" "}
          <span className="heading-line heading-line-third">
            <span className="heading-line-gradient">Developer</span>{" "}
            <div className="hidden lg:block lg:absolute lg:-top-40 lg:-right-3/4 ">
              <Canvas bgColor={""} />
            </div>
          </span>
        </p>
        <p className="mt-2">
          based in <span> Ottawa, Ontario.</span>
        </p>
        <p className="font-light text-lg my-2">
          <span className="text-js_color">JavaScript</span> Developer
        </p>
      </h1>

      <span className="flex flex-col items-center lg:items-start">
        <Link className="" to="/Contact">
          <button className="mt-2 custom-btn">Contact Me</button>
        </Link>
      </span>

      <div className="lg:hidden flex justify-center">
        <Canvas bgColor={""} />
      </div>
    </section>
  );
}
