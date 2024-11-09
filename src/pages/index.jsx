// src/pages/index.jsx
import React from "react";
import Home from "./Home";
import About from "./About";
import Skill from "./Skill";
import Projects from "./Projects";
import Contact from "./Contact";

const Pages = () => {
  return (
    <>
      <Home />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </>
  );
};

export default Pages;
