import React from 'react'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='buttons buttons-sidebar'>
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
