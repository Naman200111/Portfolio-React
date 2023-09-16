import React, { useEffect, useRef } from "react";
import "./home.css";
import { saveAs } from "file-saver";

export default function Home() {
  const myRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        myRef.current.classList.add("show");
        observer.unobserve(entry.target);
      } else {
        myRef.current.classList.remove("show");
      }
    });
    observer.observe(myRef.current);
  }, []);

  const handleClick = () => {
    saveAs(
      "https://drive.google.com/file/d/172ArGx5ZwQpQHPJ90QSJGaFRiOZGZvJY/view?usp=sharing",
      "resume"
    );
  };
  return (
    <section className="home" id="home">
      <div className="my-intro">
        <p className="intro-name">
          I am <strong>Naman Agrawal</strong>
        </p>
        <div className="brief-me">
          <p>
            Software Engineer at Shipsy, working with Analytics Team to provide
            a robust platform aimed at enhancing the organization's Business
            Intelligence management capabilities.
          </p>
        </div>
        <div className="CV-effects">
          <button className="CV-anchor" onClick={handleClick}>
            Download CV
          </button>
        </div>
      </div>
      <div className="my-image-div" ref={myRef}>
        <img
          src="./images/image1-smallest.jpg"
          alt="myself in front of temple"
          className="my-image"
          loading="lazy"
        ></img>
      </div>
    </section>
  );
}
