import React from "react";
import "./footer.css";

import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <div className="footer" id="contactMe">
      <div className="footer-header">
        <h2>Let's Get in Touch</h2>
      </div>
      <div className="footer-content">
        <p>
          Always waiting for an opportunity to get in touch with you. I will try
          my best to get back to you as soon as possible. Let build something
          great together.
        </p>
      </div>
      <div className="footer-links">
        <a
          className="social-media-anchor link"
          href="https://github.com/Naman200111"
          target="_blank"
          rel="noreferrer"
        >
          <SiGithub className="icon" />
        </a>
        <a
          className="social-media-anchor link"
          href="https://www.linkedin.com/in/naman-agrawal-1b53151b0/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLinkedin className="icon" />
        </a>
        <a
          className="social-media-anchor link"
          href="https://x.com/namanagrawal_15"
          target="_blank"
          rel="noreferrer"
        >
          <SiTwitter className="icon" />
        </a>
        <a
          className="social-media-anchor link"
          href="https://leetcode.com/naman_agr/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLeetcode className="icon" />
        </a>
        <a
          className="social-media-anchor link"
          href="mailto:namanagrawal1895@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <SiGmail className="icon" />
        </a>
      </div>

      <div className="footer-ending">
        <p>Build and Designed by Naman Agrawal</p>
        <a
          className="code-reference"
          href="https://github.com/Naman200111/Portfolio-React"
          target="_blank"
          rel="noreferrer"
        >
          <SiGithub />
          <p>Github</p>
        </a>
      </div>
    </div>
  );
}
