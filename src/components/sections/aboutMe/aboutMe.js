import React from 'react'
import { useState, useRef, useEffect } from 'react'
import './aboutMe.css'

export default function AboutMe() {
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
            myRef.current.classList.add("show-aboutMe")
        else
            myRef.current.classList.remove("show-aboutMe")
    }, [isIntersecting])


    return (
        <section className="aboutMe" id='aboutMe'>
            <div className="aboutMe--heading">
                <h4>About Me</h4>
            </div>
            <div className="aboutMe--div" >
                <div className='about_me--description' ref={myRef}>I'm a final year Student from Delhi Technological University pursuing B.Tech. from Mathematics and Computer Science as my Major. I am an upcoming Software Developer and an enthusiast ready to enter and explore in the Tech World. I believe in learning the new technologies used around the globe and creating an impact on the society using my knowledge and skills.</div>
                
                <img className='my-image-back' src="./images/image3.png" alt='myself on the stone beach'></img>
            </div>
        </section>
    )
}
