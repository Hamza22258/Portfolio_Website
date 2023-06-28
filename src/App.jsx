import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/works/Work";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import { useState } from "react";
import "./app.scss";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Skills />
        <Experience />
        <Portfolio />
        <Testimonials />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
