import "./App.css";
import Header from "./components/Header.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import BackToTop from "./components/BackToTop.js";

export default function App() {
  return (
    <>
      <Header />
      <div>
        <main>
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
