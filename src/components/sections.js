import React from 'react'
import Home from './sections/home'
import AboutMe from './sections/aboutMe'
import Experience from './sections/experience'
import Projects from './sections/projects'
import Skills from './sections/skills'

export default function Sections() {
  return (
    <div className='sections'>
      <Home />
      <AboutMe />
      <Experience />
      <Projects />
      <Skills />
    </div>
  )
}
