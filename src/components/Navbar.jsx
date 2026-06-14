import React, { useState } from "react";
import { LuSun, LuMoon, LuMenu, LuX } from "react-icons/lu";
import { useTheme } from "../context/ThemeContext";
import { navLinks, profile } from "../data/portfolioData";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line-light bg-paper-light/80 backdrop-blur-md dark:border-line-dark dark:bg-paper-dark/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="font-display text-xl font-semibold tracking-tight text-ink-light dark:text-ink-dark"
        >
          {profile.name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-muted-light transition-colors hover:text-garnet dark:text-muted-dark dark:hover:text-garnet-dark"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            className="hidden rounded-md border border-line-light px-4 py-2 font-mono text-sm text-ink-light transition-colors hover:border-garnet hover:text-garnet dark:border-line-dark dark:text-ink-dark dark:hover:border-garnet-dark dark:hover:text-garnet-dark md:inline-block"
          >
            Resume
          </a>

          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="rounded-md border border-line-light p-2 text-ink-light transition-colors hover:border-garnet hover:text-garnet dark:border-line-dark dark:text-ink-dark dark:hover:border-garnet-dark dark:hover:text-garnet-dark"
          >
            {darkMode ? <LuSun size={18} /> : <LuMoon size={18} />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="rounded-md border border-line-light p-2 text-ink-light dark:border-line-dark dark:text-ink-dark md:hidden"
          >
            {open ? <LuX size={18} /> : <LuMenu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line-light bg-paper-light px-6 py-4 dark:border-line-dark dark:bg-paper-dark md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm text-muted-light hover:text-garnet dark:text-muted-dark dark:hover:text-garnet-dark"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              onClick={() => setOpen(false)}
              className="font-mono text-sm text-ink-light dark:text-ink-dark"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
