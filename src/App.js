import "./index.css";
import { useState, useEffect } from "react";
import { useMediaPredicate } from "react-media-hook";
import { useInView } from "react-intersection-observer";
import { LightModeProvider } from "./utils/LightModeContext";
import Nav from "./components/Nav/Nav";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Projects from "./components/Projects/ProjectContainer";
import Home from "./components/Home/Home";

export default function App() {
  const biggerThan1000 = useMediaPredicate("(min-width: 1000px)");
  const biggerThan750 = useMediaPredicate("(min-width: 750px)");

  const options = { threshold: 0.6 };
  const projectOptions = { threshold: 0.2 };

  const { ref, inView } = useInView(options);
  const { ref: ref1, inView: inView1 } = useInView(options);
  const { ref: ref2, inView: inView2 } = useInView(projectOptions);
  const { ref: ref3, inView: inView3 } = useInView(options);

  const [activeElement, setActiveElement] = useState("Home");

  useEffect(() => {
    if (inView) {
      setActiveElement("Home");
    }
    if (inView1) {
      setActiveElement("About");
    }
    if (inView2) {
      setActiveElement("Projects");
    }
    if (inView3) {
      setActiveElement("Contact");
    }
  }, [inView, inView1, inView2, inView3]);

  return (
    <LightModeProvider>
      <Nav
        biggerThan1000={biggerThan1000}
        biggerThan750={biggerThan750}
        activeElement={activeElement}
      />
      <Home
        innerRef={ref}
        biggerThan1000={biggerThan1000}
        biggerThan750={biggerThan750}
      />
      <About innerRef={ref1} biggerThan750={biggerThan750} />
      <Projects innerRef={ref2} biggerThan750={biggerThan750} />
      <Contact
        biggerThan1000={biggerThan1000}
        biggerThan750={biggerThan750}
        innerRef={ref3}
      />
    </LightModeProvider>
  );
}
