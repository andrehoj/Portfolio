import Link from "next/link";
import Canvas from "../components/Canvas";
import "./styles.module.gradientanimation.css";

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
          <span className="heading-line heading-line-second">
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
        based in Ontario, Canada
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
