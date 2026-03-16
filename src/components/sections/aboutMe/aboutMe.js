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
          I’m currently working as a Software Developer at Amazon in the Seller
          Compliance Fulfillment team. I graduated from Delhi Technological
          University with a B.Tech. in Mathematics and Computer Science. I enjoy
          building modern web applications and crafting intuitive user
          experiences. As a developer, I’m always curious to explore new
          technologies and continuously improve my skills while creating
          software that solves real-world problems.
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
