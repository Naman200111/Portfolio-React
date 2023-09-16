import React from "react";
import { useRef, useEffect } from "react";
import "./aboutMe.css";

export default function AboutMe() {
  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        myRef.current.classList.add("show-aboutMe");
        observer.unobserve(entry.target);
      } else {
        myRef.current.classList.remove("show-aboutMe");
      }
    });
    observer.observe(myRef.current);
  }, []);

  return (
    <section className="aboutMe" id="aboutMe">
      <div className="aboutMe--heading">
        <h4>About Me</h4>
      </div>
      <div className="aboutMe--div">
        <div className="about_me--description" ref={myRef}>
          I'm currently working as a Software Developer in Shipsy with the
          Analytics Team. I have done my B.Tech. from Delhi Technological
          University with Mathematics and Computer Science as my Major. I am a
          dedicated Software Developer and a tech enthusiast, poised to embark
          on a journey of exploration in the world of technology. My core belief
          centers around acquiring knowledge of the latest global technologies
          and leveraging my expertise to make a meaningful impact on society.
        </div>
        <div>
          <img
            className="my-image-back"
            src="./images/image2-t.jpg"
            alt="myself on the stone beach"
            loading="lazy"
          ></img>
        </div>
      </div>
    </section>
  );
}
