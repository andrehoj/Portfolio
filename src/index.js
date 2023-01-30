import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

let msg = "%c Hello 👋";
let styles = [
  "font-size: 12px",
  "font-family: monospace",
  "background: transparent",
  "display: inline-block",
  "color: white",
  "padding: 8px 19px",
  "border: 1px solid cyan;",
  "border-radius: 5%"
].join(";");

console.log(msg, styles);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
