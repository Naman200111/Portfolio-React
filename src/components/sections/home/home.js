"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { RESUME_LINK } from "../../../constants";

export default function Home() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#layer1",
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 }
    )
      .fromTo(
        "#layer2",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
      )
      .fromTo(
        "#layer3",
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
      )
      .fromTo(
        "#layer4",
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.4)" },
        "-=0.7"
      );
  }, []);

  return (
    <section className="w-full max-w-5xl mx-auto my-8 px-4 flex flex-col md:flex-row items-center justify-center gap-12 font-sans">
      <div className="flex flex-col gap-4 self-start md:self-center w-full md:w-1/2">
        <p className="text-4xl md:text-5xl text-emerald-500" id="layer1">
          I am <strong className="text-white">Naman Agrawal</strong>
        </p>
        <div className="text-gray-400 text-sm md:text-base leading-relaxed w-4/5 md:w-full" id="layer2">
          <p>
            Software Engineer at Amazon, building systems that help sellers stay
            compliant with EU EPR regulations.
          </p>
        </div>
        <div
          className="bg-emerald-600 rounded-md text-sm mt-2 font-bold text-black w-fit hover:bg-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all select-none will-change-transform"
          id="layer3"
          style={{ willChange: "transform, opacity" }}
        >
          <a
            href={RESUME_LINK}
            target="_blank"
            rel="noreferrer"
            className="block py-3 px-6"
          >
            Download CV
          </a>
        </div>
      </div>
      <div id="layer4" className="relative group w-full max-w-[250px] md:max-w-[400px] mx-auto md:mx-0" style={{ willChange: "transform, opacity" }}>
        <div className="absolute -inset-1 bg-emerald-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <img
          src="/images/image.png"
          alt="myself in front of temple"
          className="relative rounded-full border border-emerald-900/50 w-full object-cover shadow-2xl"
          loading="lazy"
        ></img>
      </div>
    </section>
  );
}
