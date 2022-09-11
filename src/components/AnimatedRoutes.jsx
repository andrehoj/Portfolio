import React from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Projects from "./Projects/ProjectContainer";
import Home from "./Home/Home";
import { useMediaPredicate } from "react-media-hook";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const biggerThan1000 = useMediaPredicate("(min-width: 1000px)");
  const biggerThan750 = useMediaPredicate("(min-width: 750px)");
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Home
              biggerThan1000={biggerThan1000}
              biggerThan750={biggerThan750}
            />
          }
        /><Route
        path="/Portfolio"
        element={
          <Home
            biggerThan1000={biggerThan1000}
            biggerThan750={biggerThan750}
          />
        }
      />
        <Route
          path="/Home"
          element={
            <Home
              biggerThan1000={biggerThan1000}
              biggerThan750={biggerThan750}
            />
          }
        />
        <Route
          path="/About"
          element={
            <About
              biggerThan1000={biggerThan1000}
              biggerThan750={biggerThan750}
            />
          }
        />
        <Route
          path="/Projects"
          element={
            <Projects
              biggerThan1000={biggerThan1000}
              biggerThan750={biggerThan750}
            />
          }
        />
        <Route
          path="/Contact"
          element={
            <Contact
              biggerThan1000={biggerThan1000}
              biggerThan750={biggerThan750}
            />
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
