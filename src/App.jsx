import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    const stored = window.localStorage.getItem("mk-theme");
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("mk-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <section id="hero" className="section section-hero">
          <Hero />
        </section>

        <section id="about" className="section section-about">
          <About />
        </section>

        <section id="skills" className="section section-skills">
          <Skills />
        </section>

        <section id="projects" className="section section-projects">
          <Projects />
        </section>

        <section id="contact" className="section section-contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
