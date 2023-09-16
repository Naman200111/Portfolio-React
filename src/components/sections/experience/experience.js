import React from "react";
import { useRef, useEffect } from "react";
import "./experience.css";

export default function Experience() {
  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        entry.target.classList.add("show-experience");
        observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove("show-experience");
      }
    });
    myRef.current.querySelectorAll(".experience--div").forEach((child) => {
      console.log(child);
      observer.observe(child);
    });
  }, []);

  return (
    <section className="experience" id="experience">
      <div className="experience--heading">
        <h4>Experience</h4>
      </div>
      <div className="experiences--div" ref={myRef}>
        <div className="experience--div">
          <div className="experience_details">
            <div className="experience_header">
              <h4>Software Developer</h4>
              <h4 className="duration">June 2023 - Present</h4>
            </div>
            <div className="experience_work">
              <ul>
                <li>
                  Provided with the support for Progress Bar Charts for better
                  visualisations.
                </li>
                <li>
                  Delivered a feature to apply Time Limit constraint for
                  accessing the Data Mart.
                </li>
                <li>
                  Delivered a Dummy Data functionality when the data is not
                  present.
                </li>
                <li>
                  Proactively tackled bugs to sustain the momentum of the
                  Business Intelligence Platform.
                </li>
              </ul>
            </div>
          </div>
          <img
            className="experience-logo"
            src="./images/shipsy_logo.svg"
            alt="logo-of-shipsy"
            loading="lazy"
          ></img>
        </div>
        <div className="experience--div">
          <div className="experience_details">
            <div className="experience_header">
              <h4>Software Developer Intern</h4>
              <h4 className="duration">May 2022 - July 2022</h4>
            </div>
            <div className="experience_work">
              <ul>
                <li>
                  Worked with 6G Lab Team, Created a Server and a Client Code in
                  Python to transfer information through UDP Communication
                  Protocol using Sockets.
                </li>
                <li>
                  Managed to transfer random values from Server side to the
                  Client side.
                </li>
                <li>
                  The random values are generated and transferred every 100ms
                  and then displayed over the client side in real time.
                </li>
              </ul>
            </div>
          </div>
          <img
            className="experience-logo"
            src="./images/Samsung_Logo.svg"
            alt="logo-of-samsung"
            loading="lazy"
          ></img>
        </div>
      </div>
    </section>
  );
}
