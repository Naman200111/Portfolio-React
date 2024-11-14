import React from "react";
import { useRef, useEffect } from "react";
import "./skills.css";
import { SkillComponent } from "../../utils";

export default function Skills() {
  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        myRef.current.querySelectorAll("div").forEach((child) => {
          child.classList.add("show-skills");
        });
        observer.unobserve(entry.target);
      } else {
        myRef.current.querySelectorAll("div").forEach((child) => {
          child.classList.remove("show-skills");
        });
      }
    });
    observer.observe(myRef.current);
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="skills--heading">
        <h4>Skills</h4>
      </div>

      <div className="skills-div" ref={myRef}>
        <SkillComponent skill="Javascript" percentage="85%" />
        <SkillComponent skill="React + Redux" percentage="87%" />
        <SkillComponent skill="HTML" percentage="90%" />
        <SkillComponent skill="CSS" percentage="86%" />
        <SkillComponent skill="Express JS" percentage="78%" />
        <SkillComponent skill="GraphQL" percentage="63%" />
        <SkillComponent skill="MongoDB" percentage="75%" />
        <SkillComponent skill="Apache Kafka" percentage="72%" />
        <SkillComponent skill="Redis" percentage="73%" />
        <SkillComponent skill="AWS" percentage="70%" />
        <SkillComponent skill="Docker" percentage="72%" />
        <SkillComponent skill="Socket.io" percentage="65%" />
        <SkillComponent skill="C++ Programming" percentage="85%" />
        <SkillComponent
          skill="Data Structures and Algorithms"
          percentage="82%"
        />
        <SkillComponent skill="Object Oriented Programming" percentage="72%" />
      </div>
    </section>
  );
}
