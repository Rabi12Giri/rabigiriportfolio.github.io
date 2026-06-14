import React from "react";
import { profile } from "../data/portfolioData";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line-light dark:border-line-dark">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 font-mono text-xs text-muted-light dark:text-muted-dark sm:flex-row">
        <span>
          © {year} {profile.name}. All rights reserved.
        </span>
        <a
          href="#home"
          className="text-ink-light hover:text-garnet dark:text-ink-dark dark:hover:text-garnet-dark"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
