import "./index.css";
import {  HashRouter } from "react-router-dom";
import NavContainer from "./components/Nav/NavContainer";
import AnimatedRoutes from "./components/AnimatedRoutes";

export function App() {
  return (
    <HashRouter>
      <NavContainer />
      <AnimatedRoutes />
    </HashRouter>
  );
}
