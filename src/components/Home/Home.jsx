import { Link } from "react-router-dom";
import Canvas from "./Canvas";
import "../../gradient-animation.css";

export default function Home() {
  return (
    <section id="Home" className=" sections text-center lg:text-left ">
      <h1 className="relative text-6xl font-light mr-20">
        <p>Hi,</p>
        <span>I'm </span>
        <span className="heading-line heading-line-first">
          <span className="heading-line-gradient">Andrew.</span>
        </span>{" "}
        <p>
          <span>A </span>
          <span className="heading-line heading-line-second">
            <span className="heading-line-gradient">Software</span>
          </span>{" "}
          <span className="heading-line heading-line-third">
            <span className="heading-line-gradient">Developer</span>{" "}
            <div className="absolute -top-40 -right-96">
              <Canvas bgColor={""} />{" "}
            </div>
          </span>
        </p>{" "}
        <p>
          based in <span> Ottawa, Ontario.</span>
        </p>
        <p className="font-light text-lg my-2">
          <span className="text-js_color">JavaScript</span> Developer
        </p>
      </h1>

      <div className="flex flex-col items-center lg:items-start mr-20">
        <Link className="" to="/Contact">
          <button className="mt-2 custom-btn">Contact Me</button>
        </Link>
      </div>
    </section>
  );
}
