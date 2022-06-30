import "./index.css";
import "@fontsource/source-code-pro";
import { useMediaPredicate } from "react-media-hook";
import Nav from "./components/nav";
import Contact from "./components/contact";

function App() {
  const biggerThan1000 = useMediaPredicate("(min-width: 1000px)");
  const biggerThan500 = useMediaPredicate("(min-width: 550px)");

  return (
    <div>
      <Nav biggerThan1000={biggerThan1000} biggerThan500={biggerThan500} />
      <Contact biggerThan1000={biggerThan1000} biggerThan500={biggerThan500} />
    </div>
  );
}

export default App;
