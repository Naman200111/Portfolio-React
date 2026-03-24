import "./skills.css";
import { SkillComponent } from "../../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  useGSAP(() => {
    gsap.utils.toArray(".skill-div").forEach((element, index) => {
      gsap.from(element, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: { trigger: element },
      });
    });
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="skills--heading">
        <h4>Skills</h4>
      </div>

      <div className="skills-div">
        <SkillComponent skill="Typescript" percentage="85%" />
        <SkillComponent skill="Javascript" percentage="85%" />
        <SkillComponent skill="Next.js" percentage="89%" />
        <SkillComponent skill="React.js" percentage="87%" />
        <SkillComponent skill="tRPC" percentage="80%" />
        <SkillComponent skill="Express JS" percentage="78%" />
        <SkillComponent skill="Drizzle" percentage="72%" />
        <SkillComponent skill="Socket.io" percentage="65%" />
        <SkillComponent skill="MongoDB" percentage="75%" />
        {/* <SkillComponent skill="Apache Kafka" percentage="72%" /> */}
        <SkillComponent skill="Redis" percentage="73%" />
        {/* <SkillComponent skill="AWS" percentage="70%" /> */}
        {/* <SkillComponent skill="Docker" percentage="72%" /> */}
        <SkillComponent skill="C++ Programming" percentage="85%" />
        <SkillComponent
          skill="Data Structures and Algorithms"
          percentage="82%"
        />
      </div>
    </section>
  );
}
