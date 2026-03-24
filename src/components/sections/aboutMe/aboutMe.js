import { useGSAP } from "@gsap/react";
import "./aboutMe.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about_me--description",
        markers: true,
        start: "top bottom",
      },
    });

    tl.fromTo(
      "#about_me--description",
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      },
    );
  }, []);

  return (
    <section className="aboutMe" id="aboutMe">
      <div className="aboutMe--heading">
        <h4>About Me</h4>
      </div>
      <div className="aboutMe--div">
        <div className="about_me--description" id="about_me--description">
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
