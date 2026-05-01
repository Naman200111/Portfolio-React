"use client";

import React from "react";
import { ProjectComponent } from "../../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  useGSAP(() => {
    gsap.utils.toArray(".project-card").forEach((project, i) => {
      const isMobile = window.innerWidth < 768;
      const xOffset = isMobile ? (i % 2 ? 20 : -20) : (i % 2 ? 100 : -100);

      gsap.from(project, {
        x: xOffset,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: project,
          start: "top 85%",
        },
      });
    });
  }, []);

  const projectsData = [
    {
      projectName: "Miscord",
      projectDuration: "July 2025 - March 2026",
      projectDescription: "Built a Discord-inspired real-time communication platform using Next.js and tRPC with end-to-end type safety and server-side data prefetching.",
      projectGithubLink: "https://github.com/Naman200111/Miscord",
      projectLiveLink: "https://miscord-45dy.onrender.com/",
      projectTechs: ["Nextjs", "Typescript", "tRPC", "PostgreSQL (Drizzle)"]
    },
    {
      projectName: "Mytube",
      projectDuration: "March 2025 - June 2025",
      projectDescription: "Built a full-featured YouTube clone using Next.js and tRPC with end-to-end type safety and server-side data prefetching.",
      projectGithubLink: "https://github.com/Naman200111/MyTube",
      projectLiveLink: "https://my-tube-two-lac.vercel.app/",
      projectTechs: ["Nextjs", "Typescript", "tRPC", "PostgreSQL (Drizzle)"]
    },
    {
      projectName: "Video Transcoding Pipeline",
      projectDuration: "November 2024",
      projectDescription: "A Video Transcoding Pipeline for transcoding a video into different resolutions using Fluent-ffmpeg.",
      projectGithubLink: "https://github.com/Naman200111/video-transcoding-pipeline",
      projectTechs: ["AWS", "Docker", "Fluent-FFMPEG", "Multer-S3"]
    },
    {
      projectName: "Deployment Pipeline",
      projectDuration: "October 2024",
      projectDescription: "A Deployment Pipeline for deploying your react projects using the Github URL.",
      projectGithubLink: "https://github.com/NAMAN200111/DEPLOYMENT-PIPELINE",
      projectTechs: ["AWS", "Docker", "Redis", "Socket.io"]
    }
  ];

  return (
    <section className="w-full max-w-5xl mx-auto my-12 px-4 flex flex-col items-center gap-12 font-sans" id="projects">
      <div className="text-center">
        <h4 className="text-4xl text-emerald-400 font-bold mb-4">Projects</h4>
        <p className="text-gray-400 max-w-lg mx-auto">
          A selection of my recent works, ranging from full-stack platforms to cloud-based pipelines.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <ProjectComponent {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
