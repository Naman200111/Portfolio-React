import React from 'react'
import Typical from 'react-typical'
import Roll from 'react-reveal/Roll'

export default function Sections() {
  return (
    <div className='sections'>
      <section className="section home" id='home'>
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

      <section className="section about_me" id='about me'>
        <div className="about_me--heading">
          <h4>About Me</h4>
        </div>
        <div className="about_me-desc--div">
          <p className='about_me--description'>I'm a final year Student from Delhi Technological University pursuing B.Tech. from Mathematics and Computer Science as my Major. I am an upcoming Software Developer and an enthusiast ready to enter and explore in the Tech World. I believe in learning the new technologies used around the globe and creating an impact on the society using my knowledge and skills.</p>
          
          <img className='my-image-back' src="./images/image3.png" alt='myself on the stone beach'></img>
        </div>
      </section>


      <section className="section work_experience" id='experience'>
        <div className="about_me--heading">
          <h4>Experience</h4>
        </div>
        <div className="experience--div">
          <div className='experience'>
            <div>
              <img src='./images/Samsung_Logo.svg' alt='logo-of-samsung'></img>
            </div>
            <div className='experience_details'>
              <div className='experience_header'>
                <h4>Software Development Intern</h4>
                <h4 className='duration'>May 2022 - July 2022</h4>
              </div>
              <div className='experience_work'>
                <ul>
                  <li>Worked with 6G Lab Team, Created a Server and a Client Code in Python to
transfer information through UDP Communication Protocol using Sockets.</li>
                  <li>Managed to transfer random values from Server side to the Client side.</li>
                  <li>The random values are generated and transferred every 100ms and then
displayed over the client side in real time.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='experience'>
            <div><img src='./images/smart_logo_2.png' alt='logo-of-theSmartBridge'></img></div>
            <div className='experience_details'>
              <div className='experience_header'>
                <h4>ML Intern</h4>
                <h4 className='duration'>May 2020 - June 2020</h4>
              </div>
              <div className='experience_work'>
                <ul>
                  <li>Trained a ML Model using IBM Watson AutoAI Experiment.</li>
                  <li>The model is capable of predicting the food requirement in different areas.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>





      <section className="section projects" id='projects'>
        
      </section>
      <section className="section skills" id='skills'></section>
      <section className="section contact_me" id='contact me'></section>
    </div>
  )
}
