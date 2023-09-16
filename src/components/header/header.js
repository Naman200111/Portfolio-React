import React, { useState } from "react";
import { BsList } from "react-icons/bs";
import {
  AiOutlineArrowRight,
  AiOutlineHome,
  AiOutlineProfile,
} from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { BsStack } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { ImMail3 } from "react-icons/im";
import "./header.css";

export default function Header() {
  const [sidebarClass, setSideBarClass] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const handleClick = () => {
    setSideBarClass((prevValue) => !prevValue);
  };
  const sidebarStyle = {
    transform: sidebarClass ? "translateX(0%)" : "translateX(500%)",
  };

  const headerColorStyle = {
    boxShadow: isScroll ? "0px 5px 5px 2px black" : "none",
  };

  const headerColorFunction = () => {
    if (window.scrollY > 80) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  window.addEventListener("scroll", headerColorFunction);

  return (
    <div className="header" style={headerColorStyle}>
      <div className="name">Naman Agrawal</div>
      <div className="hamburger-icon">
        <BsList onClick={handleClick} className="list" />
      </div>

      <div style={sidebarStyle} className="buttons buttons-sidebar">
        <div className="bug-arrow-class">
          <AiOutlineArrowRight className="list" onClick={handleClick} />
        </div>
        <a className="button-anchor" href="#home" onClick={handleClick}>
          <AiOutlineHome className="ham-icons" />
          <p>Home</p>
        </a>
        <a className="button-anchor" href="#aboutMe" onClick={handleClick}>
          <AiOutlineProfile className="ham-icons" />
          <p>About Me</p>
        </a>
        <a className="button-anchor" href="#experience" onClick={handleClick}>
          <MdWorkOutline className="ham-icons" />
          <p>Experience</p>
        </a>
        <a className="button-anchor" href="#projects" onClick={handleClick}>
          <BsStack className="ham-icons" />
          <p>Projects</p>
        </a>
        <a className="button-anchor" href="#skills" onClick={handleClick}>
          <GiSkills className="ham-icons" />
          <p>Skills</p>
        </a>
        <a className="button-anchor" href="#contactMe" onClick={handleClick}>
          <ImMail3 className="ham-icons" />
          <p>Contact Me</p>
        </a>
      </div>

      <div className="buttons">
        <a className="header-button-anchor" href="#home">
          Home
        </a>
        <a className="header-button-anchor" href="#aboutMe">
          About Me
        </a>
        <a className="header-button-anchor" href="#experience">
          Experience
        </a>
        <a className="header-button-anchor" href="#projects">
          Projects
        </a>
        <a className="header-button-anchor" href="#skills">
          Skills
        </a>
        <a className="header-button-anchor" href="#contactMe">
          Contact Me
        </a>
      </div>
    </div>
  );
}
