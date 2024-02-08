import Link from "next/link";
import Canvas from "../components/Canvas";
import "./styles.module.gradientanimation.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Andrew Howran",
  description:
    "Hi! I'm Andrew, a Full Stack developer with a focus on MERN technologies. I current reside in Canada",
  keywords: [
    "FullStack Developer",
    "React",
    "JavaScript",
    "Node.js",
    "HTML",
    "CSS",
  ],
};

export default function page() {
  return (
    <section className="font-display tracking-wide text-3xl sm:text-4xl">
      <h2>
        <span className="block">Hi, </span>
        <span>I'm </span>
        <span className="heading-line heading-line-first">
          <span className="heading-line-gradient">Andrew</span>
        </span>
        <div className="lg:mr-96">
          A{" "}
          <span className="heading-line heading-line-second lg:mr-3">
            <span className="heading-line-gradient">FullStack</span>
          </span>
          &nbsp;
          <span className="heading-line heading-line-third">
            <span className="heading-line-gradient">Developer</span>

            <span className="-right-96 hidden lg:absolute lg:-top-40 lg:block">
              <Canvas bgColor={"transparent"} />
            </span>
          </span>
        </div>
        based in{" "}
        <p className="text-red-400 inline relative">
          Canada
          <span className="font-light text-[22px] absolute -top-1 -right-7">
            &#127809;
          </span>
        </p>
      </h2>
      <Link className="custom-btn-contact" href="/Contact">
        Contact me
      </Link>
      <div className="z-0 -mt-10 flex items-start justify-center lg:hidden">
        <Canvas bgColor={""} />
      </div>
    </section>
  );
}
