import React from 'react'
import { useState, useRef, useEffect } from 'react'
import './experience.css'

export default function Experience() {
    const [isIntersecting, setIsIntersecting] = useState()
    const myRef = useRef();
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setIsIntersecting(entry.isIntersecting)
        },
        )
        observer.observe(myRef.current)
        return () => observer.disconnect();

    }, [isIntersecting])

    useEffect(() => {
        if(isIntersecting) 
            myRef.current.classList.add("show-experience")
        else
            myRef.current.classList.remove("show-experience")
    }, [isIntersecting])


    return (
        <section className="experience" id='experience'>
            <div className="experience--heading">
                <h4>Experience</h4>
            </div>
            <div className="experience--div">
                <div className='experience_details' ref={myRef}>
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
                <img className='experience-logo'  src='./images/Samsung_Logo.svg' alt='logo-of-samsung'></img>
            </div>
            {/* <div className="experience--div">
                <div className='experience_details' ref={myRef}>
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
                <img className='experience-logo'  src='./images/Samsung_Logo.svg' alt='logo-of-samsung'></img>
            </div> */}
        </section>
    )
}
