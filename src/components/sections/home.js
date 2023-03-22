import React from 'react'
import Typical from 'react-typical'
import Roll from 'react-reveal/Roll'

export default function Home() {
    return (
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
    )
}
