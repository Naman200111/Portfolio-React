import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import "./home.css";
import { RESUME_LINK } from "../../../constants";

export default function Home() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#layer1",
      {
        y: -30,
      },
      {
        y: 0,
        duration: 0.5,
      },
    );

    tl.fromTo(
      "#layer2",
      {
        y: -20,
        opacity: 0,
      },
      {
        y: 0,
        duration: 0.5,
        opacity: 1,
      },
    );

    tl.fromTo(
      "#layer3",
      {
        y: -20,
        opacity: 0,
      },
      {
        y: 0,
        duration: 0.5,
        opacity: 1,
      },
    );
  }, []);

  return (
    <section className="home">
      <div className="my-intro flex flex-col gap-4">
        <p className="intro-name" id="layer1">
          I am <strong>Naman Agrawal</strong>
        </p>
        <div className="brief-me" id="layer2">
          <p>
            Software Engineer at Amazon, building systems that help sellers stay
            compliant with EU EPR regulations.
          </p>
        </div>
        <div
          className="bg-gray-200 rounded-md text-sm mt-2 text-gray-800 w-fit hover:bg-gray-800 hover:text-gray-200 select-none"
          id="layer3"
        >
          <a
            href={RESUME_LINK}
            target="_blank"
            rel="noreferrer"
            className="block p-2"
          >
            Download CV
          </a>
        </div>
      </div>
      <div id="layer1">
        <img
          src="./images/image.png"
          alt="myself in front of temple"
          className="my-image"
          loading="lazy"
        ></img>
      </div>
    </section>
  );
}
