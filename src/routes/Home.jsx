import { useState } from "react";
import Head from "../components/Head";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Navbar from "../components/Navbar/Navbar";
import Skills from "../components/Skills/Skills";
import Header from "../components/Header/Header";
import About from "../components/About";

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head />
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default Home;
