import React from 'react'

export default function Sections() {
  return (
    <div className='sections'>
      <section className="home" id='home'>
        <div className='my-intro'> 
          <p className='intro-name'>I am <strong>Naman Agrawal</strong></p>
          <p className='brief-me'>I am a Software Developer</p>
        </div>
        <div className='my-image-div'>
          <img src="./images/image1.jpg" alt='myself in front of temple' className='my-image'></img>
        </div>
      </section>

      <section className="about me" id='about me'>
        
      </section>


      <section className="work experience" id='experience'></section>
      <section className="projects" id='projects'></section>
      <section className="skills" id='skills'></section>
      <section className="contact me" id='contact me'></section>
    </div>
  )
}
