import React from "react";
import "./sections/skills/skills.css";
import "./sections/projects/projects.css";
import { SiGithub } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";

export const SkillComponent = (props) => {
  const { skill, percentage } = props;
  return (
    <div className="skill-div">
      <div className="skill">
        <p className="skill_name">{skill}</p>
        <p className="skill_percent">{percentage}</p>
      </div>
      <div className="skill_bar">
        <div className="skill_bar_color" style={{ width: percentage }}></div>
      </div>
    </div>
  );
};

export const ProjectComponent = (props) => {
  const {
    projectName,
    projectDuration,
    projectDescription,
    projectGithubLink,
    projectLiveLink,
    projectTechs,
  } = props;
  return (
    <div className="project">
      <div className="project-desc">
        <div className="project-desc--start">
          <div className="project-desc--heading">
            <h4 className="project-heading">{projectName}</h4>
          </div>
          <div className="project-duration">
            <p>{projectDuration}</p>
          </div>
        </div>
        <p className="project-para">{projectDescription}</p>
        <div className="project-links">
          <a className="project-link--github" href={projectGithubLink} target="_blank">
            <SiGithub />
          </a>
          <a className="project-link--anchor" href={projectLiveLink} target="_blank">
            <BiLinkExternal />
          </a>
        </div>
        <div className="project_techs">
          {projectTechs.map((projectTech) => {
            return (
              <div className="tech">
                <p>{projectTech}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
