import { useGSAP } from "@gsap/react";
import "./experience.css";
import gsap from "gsap";

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
    <section className="experience" id="experience">
      <div className="experience--heading">
        <h4>Experience</h4>
      </div>

      <div className="experiences--div">
        {/* AMAZON */}
        <div className="experience--div">
          <div className="experience_details">
            <div className="experience_header">
              <h4>Software Development Engineer @ Amazon</h4>
              <h4 className="duration">Aug 2025 - Present</h4>
            </div>

            <div className="experience_work">
              <ul>
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

          {/* <div>
            <img
              className="experience-logo"
              src="./images/amazon-logo.svg"
              alt="logo-of-amazon"
              loading="lazy"
            />
          </div> */}
        </div>

        {/* SHIPSY */}
        <div className="experience--div">
          <div className="experience_details">
            <div className="experience_header">
              <div className="experience-with-github">
                <h4>Software Developer @ Shipsy</h4>
              </div>

              <h4 className="duration">June 2023 - Aug 2025</h4>
            </div>

            <div className="experience_work">
              <ul>
                <li>
                  Built and integrated a Ticketing platform for rider and vendor
                  portals to streamline issue resolution.
                </li>
                <li>
                  Led a UI uplift that increased product adoption by 1.8×.
                </li>
                <li>
                  Built advanced dashboard visualizations including progress bar
                  charts, maps and heatmaps.
                </li>
              </ul>
            </div>
          </div>

          {/* <img
            className="experience-logo"
            src="./images/shipsy_logo.svg"
            alt="logo-of-shipsy"
            loading="lazy"
          /> */}
        </div>

        {/* SAMSUNG */}
        <div className="experience--div">
          <div className="experience_details">
            <div className="experience_header">
              <h4>Software Developer Intern @ SRIB</h4>
              <h4 className="duration">May 2022 - July 2022</h4>
            </div>

            <div className="experience_work">
              <ul>
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

          {/* <img
            className="experience-logo"
            src="./images/Samsung_Logo.svg"
            alt="logo-of-samsung"
            loading="lazy"
          /> */}
        </div>
      </div>
    </section>
  );
}
