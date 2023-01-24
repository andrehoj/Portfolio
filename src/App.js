import "./index.css";
import {  BrowserRouter } from "react-router-dom";
import NavContainer from "./components/Nav/NavContainer";
import AnimatedRoutes from "./components/AnimatedRoutes";

export function App() {
  return (
    <BrowserRouter>
      <NavContainer />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
