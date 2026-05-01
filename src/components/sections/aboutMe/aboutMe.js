"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function AboutMe() {
  const descRef = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    // Title fades in from above
    gsap.fromTo(
      titleRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }
    );

    // Description slides in from left
    gsap.fromTo(
      descRef.current,
      { x: -40, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.9, ease: "power2.out", delay: 0.3 }
    );

    // Image slides in from right
    gsap.fromTo(
      imgRef.current,
      { x: 40, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.9, ease: "power2.out", delay: 0.3 }
    );
  }, []);

  return (
    <section
      className="w-full max-w-5xl mx-auto my-12 px-4 flex flex-col items-center gap-12 font-sans"
      id="aboutMe"
    >
      <div ref={titleRef} className="text-center text-4xl text-emerald-400 font-bold mb-4">
        <h4>About Me</h4>
      </div>

      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-6 md:gap-12 w-[90%] md:w-full">
        <div
          ref={descRef}
          className="text-gray-300 text-sm leading-relaxed md:text-base md:w-1/2"
        >
          I'm currently working as a Software Developer at Amazon in the Seller
          Compliance Fulfillment team. I graduated from Delhi Technological
          University with a B.Tech. in Mathematics and Computer Science. I enjoy
          building modern web applications and crafting intuitive user
          experiences. As a developer, I'm always curious to explore new
          technologies and continuously improve my skills while creating
          software that solves real-world problems.
        </div>

        <div
          ref={imgRef}
          className="w-full max-w-[250px] md:max-w-[360px] flex justify-center md:w-1/2 relative group"
        >
          <div className="absolute -inset-1 bg-emerald-500 rounded-[250px] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <img
            className="rounded-[250px] border border-emerald-900/50 object-cover w-full shadow-2xl relative"
            src="/images/image2-t.jpg"
            alt="myself on the stone beach"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
