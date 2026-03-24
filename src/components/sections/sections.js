import React from "react";
import Home from "./home/home";
import AboutMe from "./aboutMe/aboutMe";
import Experience from "./experience/experience";
import Projects from "./projects/projects";
import Skills from "./skills/skills";
import "./sections.css";

export default function Sections() {
  return (
    <div className="sections bg-emerald-800">
      <Home />
      <AboutMe />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
}
