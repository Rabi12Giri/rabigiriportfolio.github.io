import React from "react";
import { hero } from "../data/portfolioData";

const Keyword = ({ children }) => (
  <span className="text-navy dark:text-navy-light">{children}</span>
);

const Tag = ({ children }) => (
  <span className="text-garnet dark:text-garnet-dark">{children}</span>
);

const Str = ({ children }) => (
  <span className="text-garnet/80 dark:text-garnet-dark/80">{children}</span>
);

const Punct = ({ children }) => (
  <span className="text-muted-light dark:text-muted-dark">{children}</span>
);

const Hero = () => {
  return (
    <section
      id="home"
      className="mx-auto max-w-6xl px-6 pb-24 pt-16 md:pb-32 md:pt-24"
    >
      <div className="grid items-center gap-16 md:grid-cols-2">
        <div>
          <p className="font-mono text-sm text-garnet dark:text-garnet-dark">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-ink-light dark:text-ink-dark md:text-6xl">
            {hero.heading}
          </h1>
          <p className="mt-4 font-display text-2xl text-muted-light dark:text-muted-dark md:text-3xl">
            {hero.subheading}
          </p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-light dark:text-muted-dark">
            {hero.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-md bg-ink-light px-5 py-3 font-mono text-sm text-paper-light transition-opacity hover:bg-garnet dark:bg-ink-dark hover:dark:bg-garnet-dark dark:text-paper-dark"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-line-light px-5 py-3 font-mono text-sm text-ink-light transition-colors hover:border-garnet hover:text-garnet dark:border-line-dark dark:text-ink-dark dark:hover:border-garnet-dark dark:hover:text-garnet-dark"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-line-light bg-surface-light shadow-sm dark:border-line-dark dark:bg-surface-dark">
          <div className="flex items-center justify-between border-b border-line-light px-4 py-3 dark:border-line-dark">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-500 " />
              <span className="h-3 w-3 rounded-full bg-yellow-500 " />
              <span className="h-3 w-3 rounded-full bg-green-500 " />
            </div>
            <span className="font-mono text-xs text-muted-light dark:text-muted-dark">
              Hero.jsx
            </span>
          </div>

          <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-7 text-ink-light dark:text-ink-dark">
            <code className="grid">
              <div>
                <Keyword>const</Keyword> Hero = () <Punct>=&gt;</Punct>{" "}
                <Punct>{"{"}</Punct>
              </div>
              <div className="pl-4">
                <Keyword>return</Keyword> (
              </div>
              <div className="pl-8">
                <Punct>{"<"}</Punct>
                <Tag>Profile</Tag>
              </div>
              <div className="pl-12">
                name=<Str>"Rabi Giri"</Str>
              </div>
              <div className="pl-12">
                role=<Str>"Frontend Developer"</Str>
              </div>
              <div className="pl-12">
                stack=<Punct>{"{"}</Punct>[<Str>"React"</Str>, <Str>"Node"</Str>
                , <Str>"MongoDB"</Str>]<Punct>{"}"}</Punct>
              </div>
              <div className="pl-12">
                location=<Str>"Kathmandu, NP"</Str>
              </div>
              <div className="pl-8">
                <Punct>{"/>"}</Punct>
              </div>
              <div className="pl-4">);</div>
              <div>
                <Punct>{"}"}</Punct>;
              </div>
              <div className="mt-4">
                <Keyword>export default</Keyword> Hero;
              </div>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Hero;
