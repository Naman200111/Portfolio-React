import React, { useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsList } from 'react-icons/bs'

export default function Sidebar() {
  const [sidebarClass, setSideBarClass] = useState(false)
  const handleClick = () => {
    setSideBarClass(prevValue => !prevValue)
  }
  const sidebarStyle = {
    transform: sidebarClass ? "translateX(0%)" : "translateX(100%)"
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
          <div className="bug-arrow-class">
            <AiOutlineArrowRight onClick={handleClick} className='list'/>
          </div>
          <a href='#home'><button onClick={handleClick}>Home</button></a>
          <a href='#about me'><button onClick={handleClick}>About Me</button></a>
          <a href='#experience'><button onClick={handleClick}>Experience</button></a>
          <a href='#project'><button onClick={handleClick}>Projects</button></a>
          <a href='#skills'><button onClick={handleClick}>Skills</button></a>
          <a href='#contact me'><button onClick={handleClick}>Contact Me</button></a>
        </div>
    </div>
  )
}
