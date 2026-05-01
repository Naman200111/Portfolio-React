"use client";

import React from "react";
import { SkillComponent } from "../../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiTypescript, SiJavascript, SiNextdotjs, SiReact,
  SiExpress, SiPostgresql, SiSocketdotio,
  SiMongodb, SiRedis, SiCplusplus, SiLeetcode
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const skillsData = [
    { skill: "Typescript", icon: SiTypescript },
    { skill: "Javascript", icon: SiJavascript },
    { skill: "Next.js", icon: SiNextdotjs },
    { skill: "React.js", icon: SiReact },
    { skill: "tRPC", icon: TbApi },
    { skill: "Express JS", icon: SiExpress },
    { skill: "Drizzle (ORM)", icon: SiPostgresql },
    { skill: "Socket.io", icon: SiSocketdotio },
    { skill: "MongoDB", icon: SiMongodb },
    { skill: "Redis", icon: SiRedis },
    { skill: "C++ Programming", icon: SiCplusplus },
    { skill: "DSA", icon: SiLeetcode },
  ];

  useGSAP(() => {
    gsap.utils.toArray(".skill-item").forEach((element, index) => {
      gsap.from(element, {
        y: 30,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
        },
      });
    });
  }, []);

  return (
    <section className="w-full max-w-5xl mx-auto my-12 px-4 flex flex-col items-center gap-12 font-sans" id="skills">
      <div className="text-center">
        <h4 className="text-4xl text-emerald-400 font-bold mb-4">Skills</h4>
        <p className="text-gray-400 max-w-lg mx-auto">
          Technical expertise and tools I use to bring ideas to life.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 mt-4 md:w-[90%]">
        {skillsData.map((item, index) => (
          <div key={index} className="skill-item">
            <SkillComponent skill={item.skill} icon={item.icon} />
          </div>
        ))}
      </div>
    </section>
  );
}
