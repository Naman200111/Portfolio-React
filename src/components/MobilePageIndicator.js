"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const PAGES = [
  "/",
  "/about",
  "/experience",
  "/projects",
  "/skills",
  "/contact",
];

export default function MobilePageIndicator() {
  const pathname = usePathname();
  
  // Normalize pathname (strip trailing slash)
  const currentPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  const currentIndex = PAGES.indexOf(currentPath);

  // If page not found in our list, don't show navigation
  if (currentIndex === -1) return null;

  const prevPath = currentIndex > 0 ? PAGES[currentIndex - 1] : null;
  const nextPath = currentIndex < PAGES.length - 1 ? PAGES[currentIndex + 1] : null;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[200]">
      {/* Sleek bottom navigation bar */}
      <div className="bg-black/95 backdrop-blur-md border-t border-emerald-900/20 px-6 py-3 flex items-center justify-between shadow-[0_-10px_30px_rgba(0,0,0,0.9)]">
        
        {/* Left Arrow */}
        <div className="flex-1 flex justify-start">
          {prevPath && (
            <Link
              href={prevPath}
              className="p-2 bg-emerald-950/20 border border-emerald-900/30 rounded-lg text-emerald-500 active:scale-90 transition-transform"
              aria-label="Previous Page"
            >
              <HiChevronLeft size={20} />
            </Link>
          )}
        </div>

        {/* Center Dots */}
        <div className="flex-1 flex flex-col items-center">
          <div className="flex gap-1.5 items-center">
            {PAGES.map((_, index) => (
              <div 
                key={index}
                className={`transition-all duration-500 rounded-full ${
                  index === currentIndex 
                    ? "w-4 h-1 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" 
                    : "w-1 h-1 bg-zinc-800"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <div className="flex-1 flex justify-end">
          {nextPath && (
            <Link
              href={nextPath}
              className="p-2 bg-emerald-950/20 border border-emerald-900/30 rounded-lg text-emerald-500 active:scale-90 transition-transform"
              aria-label="Next Page"
            >
              <HiChevronRight size={20} />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
