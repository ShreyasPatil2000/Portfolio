/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Timeline from "./components/Timeline/Timeline";
import { Element } from "react-scroll";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import UpButton from "./components/UpButton/UpButton";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <div id="navbar">
        <Navbar />
      </div>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="container">
        <Section>
          <Element name="hero">
            <Hero />
          </Element>
        </Section>
        <br />
        <br />
        <Section>
          <Element name="skills">
            <Skills />
          </Element>
        </Section>
        <Section>
          <Element name="timeline">
            <Timeline />
          </Element>
        </Section>
        <Section>
          <Element name="projects">
            <Projects />
          </Element>
        </Section>
        <Section>
          <Element name="contact">
            <Contact />
          </Element>
        </Section>
        <UpButton />
      </div>
      <Footer />
    </>
  );
}

export default App;
