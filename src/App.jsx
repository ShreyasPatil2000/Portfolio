/* eslint-disable no-unused-vars */
// App.js
import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Element } from 'react-scroll';
import { motion, useScroll, useSpring } from "framer-motion";

function App() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <div id='navbar'>
        <Navbar/>
      </div>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="container">
        <Element name="hero">
          <Hero/>
        </Element>
        <Element name="skills">
          <Skills/>
        </Element>
        <Element name="projects">
          <Projects/>
        </Element>
        <Element name="contact">
          <Contact/>
        </Element>
      </div>
      <Footer/>
    </>
  );
}

export default App;
