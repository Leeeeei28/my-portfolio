import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);

  function toggleTheme() {
      setIsDarkMode(!isDarkMode);
  }

  return(
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Navbar 
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;