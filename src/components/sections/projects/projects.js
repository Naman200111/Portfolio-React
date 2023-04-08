import React from "react";
import './projects.css'
import { SiGithub } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
import { useRef, useEffect } from 'react'

export default function Projects() {
  const myRef = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add("show-projects")
          // observer.unobserve(entry.target)
        }
        else {
          entry.target.classList.remove("show-projects")
        }
      })
    },
    // {
    //   rootMargin: "-100px"
    // }
    )

    myRef.current.querySelectorAll(".project").forEach(child => {
      console.log(child)
      observer.observe(child)
    })

  }, [])

  return (
    <section className="projects" id="projects">
      <div className="projects--heading">
        <h4>Projects</h4>
      </div>
      <div className="projects--div" ref={myRef}>
        <div className="project">
          <div className="project-img">
            <img src="./images/quiz.png" alt="Project Logo"></img>
          </div>
          <div className="project-desc">
            <div className="project-desc--start">
              <div className="project-desc--heading">
                <h4 className="project-heading">Quizzical</h4>
              </div>
              <div className="project-duration">
                <p>December 2022</p>
              </div>
            </div>
            <p className="project-para">
              Test your knowledge by answering some questions.
            </p>
            <div className="project-links">
              <a className="project-link--github" href="https://github.com/Naman200111/Quizzical-React">
								<SiGithub />
							</a>
              <a className='project-link--anchor' href="https://quizzical-test.netlify.app/">
                <BiLinkExternal />
              </a>
            </div>
            <div className="project_techs">
              <div className="tech">
                <p>React</p>
              </div>
              <div className="tech">
                <p>Javascript</p>
              </div>
              <div className="tech">
                <p>APIs</p>
              </div>
            </div>
          </div>
        </div>

        <div className="project right">
          <div className="project-img">
            <img
              src="./images/wallpaper-love-modified.png"
              alt="Project Logo"
            ></img>
          </div>
          <div className="project-desc">
            <div className="project-desc--start">
              <div className="project-desc--heading">
                <h4 className="project-heading">Wallpaper Love</h4>
              </div>
              <div className="project-duration">
                <p>January 2022</p>
              </div>
            </div>
            <p className="project-para">
              Find your favourite wallpapers and Download them.
            </p>
            <div className="project-links">
							<a className="project-link--github" href="https://github.com/Naman200111/Wallpaper-Love-React">
								<SiGithub />
							</a>
              <a className='project-link--anchor' href="https://wallpaper-love.netlify.app/">
                <BiLinkExternal />
              </a>
            </div>
            <div className="project_techs">
              <div className="tech">React</div>
              <div className="tech">Javascript</div>
              <div className="tech">APIs</div>
            </div>
          </div>
        </div>

        <div className="project" >
          <div className="project-img">
            <img src="./images/epic-modified.png" alt="Project Logo"></img>
          </div>
          <div className="project-desc">
            <div className="project-desc--start">
              <div className="project-desc--heading">
                <h4 className="project-heading">MarvelQuotes-EpicGames</h4>
              </div>
              <div className="project-duration">
                <p>January 2022</p>
              </div>
            </div>
            <p className="project-para">
              Find Famous MarvelQuotes and Weekly Free EpicGames.
            </p>
            <div className="project-links">
							<a className="project-link--github" href="https://github.com/Naman200111/MarvelQuotes-EpicGames-React">
								<SiGithub />
							</a>
              <a className='project-link--anchor' href="https://epicgames-marvelquotes.netlify.app/">
                <BiLinkExternal />
              </a>
            </div>
            <div className="project_techs">
              <div className="tech">React</div>
              <div className="tech">Javascript</div>
              <div className="tech">APIs</div>
              <div className="tech">Firebase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
