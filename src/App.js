import "./index.css";
import { HashRouter } from "react-router-dom";
import NavContainer from "./components/Nav/NavContainer";
import AnimatedRoutes from "./components/AnimatedRoutes";

let msg = "%c Hello 👋";
let styles = [
  "font-size: 12px",
  "font-family: monospace",
  "background: transparent",
  "display: inline-block",
  "color: white",
  "padding: 8px 19px",
  "border: 1px solid;",
  "border-radius: 5%"
].join(";");

console.log(msg, styles);

export function App() {
  return (
    <HashRouter>
      <NavContainer />
      <AnimatedRoutes />
    </HashRouter>
  );
}
