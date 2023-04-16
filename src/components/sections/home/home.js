import React, { useState, useEffect, useRef } from 'react'
import './home.css'
// import Typical from 'react-typical'
// import Roll from 'react-reveal/Roll'

export default function Home() {
    const myRef = useRef()
    const [isIntersecting, setIsIntersecting] = useState()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsIntersecting(entry.isIntersecting)
        })
        observer.observe(myRef.current)
        return () => observer.disconnect();
    }, [isIntersecting])

    useEffect(() => {
        if(isIntersecting)
            myRef.current.classList.add("show")
        else
            myRef.current.classList.remove("show")
    }, [isIntersecting])

    return (
        <section className="home" id='home'>
            <div className='my-intro'> 
                <p className='intro-name'>I am <strong>Naman Agrawal</strong></p>
                <div className='brief-me'>
                    <p>I'm an Upcoming Software Developer ready to enter in the Tech World. I am currently a Student but full of Energy and Enthusiasm.</p>
                    {/* MCE Major from Delhi Technological University.
                    Enthusiastic and Energetic Explorer.</p> */}
                    {/* <Typical
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
                    /> */}
                </div>
                <div className="CV-effects"><a href='https://drive.google.com/file/d/1wkJW0lobaElRHVD7rFV8jTIb-Kx6nyV6/view?usp=share_link' className='CV-anchor'>Download CV</a></div>
            </div>
            <div className='my-image-div' ref={myRef}>
                <img src="./images/image1.jpg" alt='myself in front of temple' className='my-image'></img>
            </div>
        </section>
    )
}
