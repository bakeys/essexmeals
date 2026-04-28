import { useState } from "react";

import logo from "@/assets/logo.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-primary text-primary-content border-b border-primary-content/10">
        <div className="max-w-6xl mx-auto px-6 py-2 flex flex-wrap justify-between items-center gap-2">
          <p className="font-sans text-xs tracking-wide text-primary-content/60">
            Serving Essex since 1974 · Mon–Fri delivery · 01245 000 000
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="font-sans text-xs uppercase tracking-widest text-primary-content/60 hover:text-secondary transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#menu"
              className="font-sans text-xs uppercase tracking-widest text-primary-content/60 hover:text-secondary transition-colors"
            >
              This Week's Menu
            </a>
          </div>
        </div>
      </div>
      <div className="navbar bg-primary text-primary-content border-b-4 border-secondary sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto w-full px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Essex Meals on Wheels logo" className="w-12" />
            <a href="#" className="font-[Merriweather] text-base font-semibold">
              Essex Meals on Wheels
            </a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {["About", "Menu", "Reviews"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="font-sans text-sm uppercase tracking-widest text-primary-content/70 hover:text-secondary border-b border-transparent hover:border-secondary pb-0.5 transition-all"
              >
                {l}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn-secondary btn-sm rounded-none font-sans uppercase tracking-widest text-xs"
            >
              Start Deliveries
            </a>
          </div>

          <button
            className="btn btn-ghost btn-sm md:hidden text-primary-content"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-primary border-t border-primary-content/10 md:hidden px-6 py-4 flex flex-col gap-4">
            {["About", "Menu", "Reviews", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="font-sans text-sm uppercase tracking-widest text-primary-content/70 hover:text-secondary"
              >
                {l}
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
