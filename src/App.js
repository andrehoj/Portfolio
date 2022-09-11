import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { useMediaPredicate } from "react-media-hook";
import Nav from "./components/Nav/Nav";
import AnimatedRoutes from "./components/AnimatedRoutes";

export default function App() {
  const biggerThan1000 = useMediaPredicate("(min-width: 1024px)");
  const biggerThan750 = useMediaPredicate("(min-width: 750px)");

  return (
    <BrowserRouter>
      <Nav biggerThan1000={biggerThan1000} biggerThan750={biggerThan750} />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
