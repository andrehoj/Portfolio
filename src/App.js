import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { useMediaPredicate } from "react-media-hook";
import Nav from "./components/Nav/Nav";
import AnimatedRoutes from "./components/AnimatedRoutes";

export default function App() {
  const biggerThan1000 = useMediaPredicate("(min-width: 1000px)");
  const biggerThan750 = useMediaPredicate("(min-width: 750px)");

  const [activeElement, setActiveElement] = useState("Home");

  return (
    <BrowserRouter>
      <Nav
        biggerThan1000={biggerThan1000}
        biggerThan750={biggerThan750}
        activeElement={activeElement}
        setActiveElement={setActiveElement}
      />
      <AnimatedRoutes />
    </BrowserRouter>
  );

  // if (activeElement === "Home")
  //   return (
  //     <>
  //       <ActiveSectionContext.Provider value={activeElement}>
  //         <Nav
  //           biggerThan1000={biggerThan1000}
  //           biggerThan750={biggerThan750}
  //           activeElement={activeElement}
  //           setActiveElement={setActiveElement}
  //         />
  //         <Home biggerThan1000={biggerThan1000} biggerThan750={biggerThan750} />
  //       </ActiveSectionContext.Provider>
  //     </>
  //   );

  // if (activeElement === "About")
  //   return (
  //     <>
  //       <Nav
  //         biggerThan1000={biggerThan1000}
  //         biggerThan750={biggerThan750}
  //         activeElement={activeElement}
  //         setActiveElement={setActiveElement}
  //       />
  //       <About biggerThan750={biggerThan750} />
  //     </>
  //   );

  // if (activeElement === "Projects")
  //   return (
  //     <>
  //       <Nav
  //         biggerThan1000={biggerThan1000}
  //         biggerThan750={biggerThan750}
  //         activeElement={activeElement}
  //         setActiveElement={setActiveElement}
  //       />
  //       <Projects biggerThan750={biggerThan750} />
  //     </>
  //   );

  // if (activeElement === "Contact")
  //   return (
  //     <>
  //       <Nav
  //         biggerThan1000={biggerThan1000}
  //         biggerThan750={biggerThan750}
  //         activeElement={activeElement}
  //         setActiveElement={setActiveElement}
  //       />
  //       <Contact
  //         biggerThan1000={biggerThan1000}
  //         biggerThan750={biggerThan750}
  //       />
  //     </>
  //   );
}
