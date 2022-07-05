import "./index.css";
import { useState, useEffect, useRef } from "react";
import { useMediaPredicate } from "react-media-hook";
import { useInView } from "react-intersection-observer";
import Nav from "./components/nav";
import Contact from "./components/contact";
import About from "./components/about";
import Project from "./components/project";
import Home from "./components/home";

function App() {
  const biggerThan1000 = useMediaPredicate("(min-width: 1000px)");
  const biggerThan500 = useMediaPredicate("(min-width: 550px)");

  const options = { threshold: 0.6 };

  const { ref, inView } = useInView(options);

  const { ref: ref1, inView: inView1 } = useInView(options);

  const { ref: ref2, inView: inView2 } = useInView(options);

  const { ref: ref3, inView: inView3 } = useInView(options);

  const [activeElement, setActiveElement] = useState("home");

  useEffect(() => {
    if (inView) {
      setActiveElement("home");
    }
    if (inView1) {
      setActiveElement("about");
    }
    if (inView2) {
      setActiveElement("project");
    }
    if (inView3) {
      setActiveElement("contact");
    }
  }, [inView, inView1, inView2, inView3]);

  return (
    <div>
      <Nav
        biggerThan1000={biggerThan1000}
        biggerThan500={biggerThan500}
        activeElement={activeElement}
      />
      <Home
        biggerThan1000={biggerThan1000}
        biggerThan500={biggerThan500}
        innerRef={ref}
      />
      <About
        biggerThan1000={biggerThan1000}
        biggerThan500={biggerThan500}
        innerRef={ref1}
      />
      <Project
        biggerThan1000={biggerThan1000}
        biggerThan500={biggerThan500}
        innerRef={ref2}
      />
      <Contact
        biggerThan1000={biggerThan1000}
        biggerThan500={biggerThan500}
        innerRef={ref3}
      />
    </div>
  );
}

export default App;
