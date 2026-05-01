"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  useGSAP(() => {
    gsap.utils.toArray(".experience--div").forEach((el, i) => {
      gsap.from(el, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: el,
        },
      });
    });
  }, []);

  return (
    <section className="w-full max-w-5xl mx-auto my-12 px-4 flex flex-col items-center gap-12 font-sans" id="experience">
      <div className="text-center text-4xl text-emerald-400 font-bold">
        <h4>Experience</h4>
      </div>

      <div className="flex flex-col gap-8 w-full md:w-[90%]">
        {/* AMAZON */}
        <div className="experience--div flex flex-col w-full bg-zinc-900/40 backdrop-blur-md border border-emerald-900/30 rounded-2xl p-6 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-4 border-b border-emerald-900/30 pb-4">
            <h4 className="text-emerald-300 text-xl font-semibold">Software Development Engineer @ Amazon</h4>
            <h4 className="text-emerald-500/80 text-sm font-mono bg-emerald-950/50 px-3 py-1 rounded-full w-fit">Aug 2025 - Present</h4>
          </div>

          <div className="text-gray-300 text-sm md:text-base leading-relaxed">
            <ul className="list-disc ml-5 space-y-2 marker:text-emerald-500">
              <li>
                Building backend systems enabling EU EPR compliance for
                third-party sellers.
              </li>
              <li>
                Improved system resilience by reducing throttling issues,
                cutting avoidable on-call tickets by 13%.
              </li>
              <li>
                Expanded seller reporting by exposing granular fee attributes
                for better analytics.
              </li>
            </ul>
          </div>
        </div>

        {/* SHIPSY */}
        <div className="experience--div flex flex-col w-full bg-zinc-900/40 backdrop-blur-md border border-emerald-900/30 rounded-2xl p-6 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-4 border-b border-emerald-900/30 pb-4">
            <h4 className="text-emerald-300 text-xl font-semibold">Software Developer @ Shipsy</h4>
            <h4 className="text-emerald-500/80 text-sm font-mono bg-emerald-950/50 px-3 py-1 rounded-full w-fit">June 2023 - Aug 2025</h4>
          </div>

          <div className="text-gray-300 text-sm md:text-base leading-relaxed">
            <ul className="list-disc ml-5 space-y-2 marker:text-emerald-500">
              <li>
                Built and integrated a Ticketing platform for rider and vendor
                portals to streamline issue resolution.
              </li>
              <li>
                Led a UI uplift that increased product adoption by 1.8x.
              </li>
              <li>
                Built advanced dashboard visualizations including progress bar
                charts, maps and heatmaps.
              </li>
            </ul>
          </div>
        </div>

        {/* SAMSUNG */}
        <div className="experience--div flex flex-col w-full bg-zinc-900/40 backdrop-blur-md border border-emerald-900/30 rounded-2xl p-6 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-4 border-b border-emerald-900/30 pb-4">
            <h4 className="text-emerald-300 text-xl font-semibold">Software Developer Intern @ SRIB</h4>
            <h4 className="text-emerald-500/80 text-sm font-mono bg-emerald-950/50 px-3 py-1 rounded-full w-fit">May 2022 - July 2022</h4>
          </div>

          <div className="text-gray-300 text-sm md:text-base leading-relaxed">
            <ul className="list-disc ml-5 space-y-2 marker:text-emerald-500">
              <li>
                Developed Python server-client programs using UDP sockets for
                real-time communication.
              </li>
              <li>
                Enabled transmission of random server-generated values to the
                client every 100ms.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
