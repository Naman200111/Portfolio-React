import React from "react";
import "./projects.css";
import { useRef, useEffect } from "react";
import { ProjectComponent } from "../../utils";

export default function Projects() {
  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-projects");
          observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove("show-projects");
        }
      });
    });

    console.log(myRef, "projectRef");
    myRef.current.querySelectorAll(".project").forEach((child) => {
      observer.observe(child);
    });
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="projects--heading">
        <h4>Projects</h4>
      </div>
      <div className="projects--div" ref={myRef}>
        <ProjectComponent
          projectName="Deployment Pipeline"
          projectDuration="October 2024"
          projectDescription="A Deployment Pipeline for deploying your react projects using the Github URL."
          projectGithubLink="https://github.com/NAMAN200111/DEPLOYMENT-PIPELINE"
          projectTechs={["AWS", "Docker", "Redis", "Socket.io"]}
        />
        <ProjectComponent
          projectName="Make Notes"
          projectDuration="April 2024"
          projectDescription="Create your personalized Priority notes with Add, Update or Delete operations."
          projectGithubLink="https://github.com/Naman200111/Make-Notes"
          projectLiveLink="https://makesomenotes.netlify.app"
          projectTechs={["React", "Javascript", "MongoDB", "Express.js"]}
        />
        <ProjectComponent
          projectName="MarvelQuotes-EpicGames"
          projectDuration="January 2023"
          projectDescription="Find Famous MarvelQuotes and Weekly Free EpicGames."
          projectGithubLink="https://github.com/Naman200111/MarvelQuotes-EpicGames-React"
          projectLiveLink="https://epicgames-marvelquotes.netlify.app/"
          projectTechs={["React", "Javascript", "APIs", "Firebase"]}
        />
        <ProjectComponent
          projectName="Wallpaper Love"
          projectDuration="December 2022"
          projectDescription="Find your favourite wallpapers and Download them."
          projectGithubLink="https://github.com/Naman200111/Wallpaper-Love-React"
          projectLiveLink="https://wallpaper-love.netlify.app/"
          projectTechs={["React", "Javascript", "APIs"]}
        />
        <ProjectComponent
          projectName="Quizzical"
          projectDuration="November 2022"
          projectDescription="Test your knowledge by answering some questions."
          projectGithubLink="https://github.com/Naman200111/Quizzical-React"
          projectLiveLink="https://quizzical-test.netlify.app/"
          projectTechs={["React", "Javascript", "APIs"]}
        />
      </div>
    </section>
  );
}
