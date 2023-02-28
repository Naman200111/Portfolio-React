import React from 'react'
import Typical from 'react-typical'
import Roll from 'react-reveal/Roll'

export default function Sections() {
  return (
    <div className='sections'>
      <section className="home" id='home'>
        <div className='my-intro'> 
          <p className='intro-name'>I am <strong>Naman Agrawal</strong></p>
          <p className='brief-me'>
            <Typical
              loop={Infinity}
              wrapper='p'
              steps={[
                'An Upcoming Software Developer.',
                1000,
                'MCE Major from Delhi Technological University.',
                1000,
                'Enthusiastic and Energetic Explorer.',
                1000
              ]}
            />
          </p>
        </div>
        <div className='my-image-div'>
          <Roll><img src="./images/image1.jpg" alt='myself in front of temple' className='my-image'></img></Roll>
        </div>
      </section>

      <section className="about_me" id='about me'>
        <div class="about_me--heading">
          <h4>About Me</h4>
        </div>
        <div class="about_me-desc--div">
          <p className='about_me--description'>I'm a final year Student from Delhi Technological University pursuing B.Tech. from Mathematics and Computer Science as my Major. I am an upcoming Software Developer and an enthusiast ready to enter and explore in the Tech World. I believe in learning the new technologies used around the globe and creating an impact on the society using my knowledge and skills.</p>
          
          <img className='my-image-back' src="./images/image3.png" alt='myself on the stone beach'></img>
        </div>
      </section>


      <section className="work_experience" id='experience'></section>
      <section className="projects" id='projects'></section>
      <section className="skills" id='skills'></section>
      <section className="contact_me" id='contact me'></section>
    </div>
  )
}
