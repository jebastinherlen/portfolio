import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import About    from "./components/About";
import Stats    from "./components/Stats";
import Skills   from "./components/Skills";
import Projects from "./components/Projects";
import Resume   from "./components/Resume";
import Contact  from "./components/Contact";
import Footer   from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;