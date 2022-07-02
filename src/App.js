import "./index.css";
import { useMediaPredicate } from "react-media-hook";
import Nav from "./components/nav";
import Contact from "./components/contact";
import About from "./components/about";
import Project from "./components/project";
import Home from "./components/home";

function App() {
  const biggerThan1000 = useMediaPredicate("(min-width: 1000px)");
  const biggerThan500 = useMediaPredicate("(min-width: 550px)");

  return (
    <div>
      <Nav biggerThan1000={biggerThan1000} biggerThan500={biggerThan500} />
      <Home biggerThan1000={biggerThan1000} biggerThan500={biggerThan500} />
      <About biggerThan1000={biggerThan1000} biggerThan500={biggerThan500} />
      <Project biggerThan1000={biggerThan1000} biggerThan500={biggerThan500} />
      <Contact biggerThan1000={biggerThan1000} biggerThan500={biggerThan500} />
    </div>
  );
}

export default App;
