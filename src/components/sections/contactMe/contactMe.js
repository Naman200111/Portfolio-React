"use client";

import React, { useState, useRef } from "react";
import { SiGithub, SiLinkedin, SiTwitter, SiLeetcode, SiGmail } from "react-icons/si";
import emailjs from "@emailjs/browser";

// ──────────────────────────────────────────────────────────────────────────────
// EmailJS configuration – fill these in from your EmailJS dashboard
// https://dashboard.emailjs.com/
// ──────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const socialLinks = [
  { icon: <SiGithub />, href: "https://github.com/Naman200111", label: "GitHub" },
  { icon: <SiLinkedin />, href: "https://www.linkedin.com/in/naman-agrawal-1b53151b0/", label: "LinkedIn" },
  { icon: <SiTwitter />, href: "https://x.com/namanagrawal_15", label: "Twitter" },
  { icon: <SiLeetcode />, href: "https://leetcode.com/naman_agr/", label: "LeetCode" },
  { icon: <SiGmail />, href: "mailto:namanagrawal1895@gmail.com", label: "Email" },
];

export default function ContactMe() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "success" | "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section
      className="w-full max-w-5xl mx-auto my-12 px-4 flex flex-col items-center gap-12 font-sans"
      id="contactMe"
    >
      {/* Header */}
      <div className="text-center">
        <h4 className="text-4xl text-emerald-400 font-bold mb-4">Let's Get in Touch</h4>
        <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
          Always open to an opportunity to build something great together.
          Reach out via the form or through social media.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* ── Contact Form ── */}
        <div className="bg-zinc-900/40 backdrop-blur-md border border-emerald-900/30 rounded-2xl p-8 shadow-xl">
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name – maps to {{from_name}} in EmailJS template */}
            <div className="flex flex-col gap-2">
              <label htmlFor="from_name" className="text-emerald-500 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                placeholder="John Doe"
                required
                className="bg-black/50 border border-emerald-900/30 rounded-lg p-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            {/* Email – maps to {{from_email}} */}
            <div className="flex flex-col gap-2">
              <label htmlFor="from_email" className="text-emerald-500 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                placeholder="john@example.com"
                required
                className="bg-black/50 border border-emerald-900/30 rounded-lg p-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            {/* Message – maps to {{message}} */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-emerald-500 text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your message here..."
                required
                className="bg-black/50 border border-emerald-900/30 rounded-lg p-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-3 rounded-lg transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            {/* Feedback */}
            {status === "success" && (
              <p className="text-emerald-400 text-sm text-center">
                ✓ Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                ✗ Something went wrong. Please email me directly at namanagrawal1895@gmail.com.
              </p>
            )}
          </form>
        </div>

        {/* ── Social & Info ── */}
        <div className="flex flex-col justify-center gap-10">
          <div className="flex flex-col gap-4">
            <h5 className="text-emerald-300 text-xl font-semibold">Contact Details</h5>
            <div className="flex flex-col gap-3 text-gray-300 text-sm">
              <p><span className="text-emerald-500">Location:</span> Hyderabad, India</p>
              <p><span className="text-emerald-500">Email:</span> namanagrawal1895@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h5 className="text-emerald-300 text-xl font-semibold">Follow Me</h5>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  title={social.label}
                  className="text-2xl text-gray-400 hover:text-emerald-400 transition-all hover:scale-110 p-3 bg-zinc-900/50 border border-emerald-900/30 rounded-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
