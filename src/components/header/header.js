import React, { useState } from "react";

import { AiOutlineHome, AiOutlineProfile } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { BsStack } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { ImMail3 } from "react-icons/im";
import "./header.css";
import { List, SkipBack } from "lucide-react";

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
    boxShadow: isScroll ? "0px 2px 2px 1px black" : "none",
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
    <div className="header bg-emerald-800 select-none" style={headerColorStyle}>
      <div className="name text-center text-gray-200 select-none">NaG</div>
      <div className="hamburger-icon text-gray-200">
        <List onClick={handleClick} />
      </div>

      <div
        style={sidebarStyle}
        className="buttons buttons-sidebar bg-emerald-800 text-gray-300"
      >
        <div className="bug-arrow-class">
          <SkipBack className="list" onClick={handleClick} />
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

      <div className="buttons text-gray-300">
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
