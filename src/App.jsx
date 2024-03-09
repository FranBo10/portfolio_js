import { useEffect, useState } from "react";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Header from "./components/Header/Header";
import About from "./components/About";
import Cards from "./components/Cards/Cards";

function App() {
  const [darkMode, setDarkMode] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode("dark");
    } else {
      setDarkMode("light");
    }
  }, []);

  useEffect(() => {
    if (darkMode == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className=" bg-gray-200 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Cards />
      <Contact />
    </div>
  );
}

export default App;
