import React, { useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsList } from 'react-icons/bs'

export default function Sidebar() {
  const [sidebarClass, setSideBarClass] = useState(false)
  const handleClick = () => {
    setSideBarClass(prevValue => !prevValue)
  }
  const sidebarStyle = {
    position: "fixed",
    right: "0",
    top: "0",
    transform: sidebarClass ? "translateX(0%)" : "translateX(100%)",
    transitionDuration: "0.7s",
    transitionTimingFunction: "ease-in-out",
    width: "70%",
    height: "100%",
    backgroundColor: "darkcyan",
  }

  const hamburgerStyle = {
    transform: sidebarClass ? "translateX(100%)" : "translateX(0%)"
  }
  return (
    <div className='sidebar-hamburger'>
        <div className="hamburger" style={hamburgerStyle}>
          <BsList onClick={handleClick} className='list'/>
        </div>

        <div style={sidebarStyle} className='buttons buttons-sidebar'>
          <AiOutlineArrowRight onClick={handleClick} className='list'/>
          <button><a href='#home'>Home</a></button>
          <button><a href='#about me'>About Me</a></button>
          <button><a href='#experience'>Experience</a></button>
          <button><a href='#projects'>Projects</a></button>
          <button><a href='#skills'>Skills</a></button>
          <button><a href='#contact me'>Contact Me</a></button>
        </div>
    </div>
  )
}
