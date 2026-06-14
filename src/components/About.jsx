import React from "react";
import { about } from "../data/portfolioData";
import { useInView } from "../hooks/useInView";

const About = () => {
  const [ref, inView] = useInView();

  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-line-light dark:border-line-dark"
    >
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 py-20 transition-all duration-700 md:py-28 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="flex items-baseline gap-4">
          <h2 className="font-display text-3xl font-semibold text-ink-light dark:text-ink-dark md:text-4xl">
            About
          </h2>
          <span className="h-px flex-1 bg-line-light dark:bg-line-dark" />
        </div>

        <div className="mt-10 grid gap-12 md:grid-cols-3">
          <div className="space-y-5 md:col-span-2">
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-muted-light dark:text-muted-dark md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="divide-y divide-line-light dark:divide-line-dark">
            {about.facts.map((fact) => (
              <div
                key={fact.label}
                className="flex flex-col gap-1 py-3 first:pt-0"
              >
                <dt className="font-mono text-xs uppercase tracking-wider text-muted-light dark:text-muted-dark">
                  {fact.label}
                </dt>
                <dd className="text-sm text-ink-light dark:text-ink-dark">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default About;
