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

function App() {
  return (
    <>
      <div id='navbar'>
        <Navbar/>
      </div>
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
