import "./App.css";
import Header from "./component/Header/Header";
import About from "./component/About/About";
import Skills from "./component/Skills/Skills";
import Work from "./component/Work/Work";
import Contact from "./component/Contact/Contact";
import Social from "./component/Contact/Social";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Social />
    </div>
  );
}

export default App;
