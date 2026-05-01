"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineHome, AiOutlineProfile } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { BsStack } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { ImMail3 } from "react-icons/im";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { href: "/", label: "Home", icon: <AiOutlineHome /> },
  { href: "/about", label: "About Me", icon: <AiOutlineProfile /> },
  { href: "/experience", label: "Experience", icon: <MdWorkOutline /> },
  { href: "/projects", label: "Projects", icon: <BsStack /> },
  { href: "/skills", label: "Skills", icon: <GiSkills /> },
  { href: "/contact", label: "Contact Me", icon: <ImMail3 /> },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Prevent scrolling when drawer is open
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 w-full select-none transition-all duration-300
          bg-black/90 backdrop-blur-md border-b border-emerald-900/30
          ${scrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.6)]" : ""}
        `}
        style={{ zIndex: 100 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="text-emerald-400 font-bold text-xl tracking-tight hover:text-emerald-300 transition-colors flex items-center gap-1"
            >
              <span className="text-gray-500">&lt;</span>NaG<span className="text-gray-500">/&gt;</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-400 rounded-lg hover:text-emerald-400 hover:bg-emerald-950/30 transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-emerald-400 hover:bg-emerald-950/30 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ───────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-[150] md:hidden transition-all duration-500 ${mobileOpen ? "visible" : "invisible pointer-events-none"
          }`}
      >
        {/* Backdrop overlay */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${mobileOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer Content */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-[280px] bg-zinc-950 border-l border-emerald-900/30 shadow-2xl flex flex-col transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Drawer Header */}
          <div className="h-16 flex items-center justify-between px-6 border-b border-emerald-900/10">
            <span className="text-emerald-400 font-bold tracking-tight">Navigation</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-gray-500 hover:text-emerald-400 transition-colors"
            >
              <HiX size={20} />
            </button>
          </div>

          {/* Links List */}
          <nav className="flex-1 py-8 px-4 flex flex-col gap-2 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-4 px-4 py-4 text-gray-400 rounded-xl hover:bg-emerald-950/20 hover:text-emerald-400 transition-all border border-transparent hover:border-emerald-900/30 group"
              >
                <div className="p-2.5 bg-zinc-900 rounded-lg text-gray-500 group-hover:text-emerald-500 group-hover:bg-emerald-900/10 transition-all">
                  {link.icon}
                </div>
                <span className="font-medium">{link.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
