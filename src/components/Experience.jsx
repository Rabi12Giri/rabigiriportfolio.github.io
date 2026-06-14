import React from "react";
import { timeline } from "../data/portfolioData";
import { useInView } from "../hooks/useInView";

const Experience = () => {
  const [ref, inView] = useInView();

  return (
    <section
      id="experience"
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
            Experience &amp; Education
          </h2>
          <span className="h-px flex-1 bg-line-light dark:bg-line-dark" />
        </div>

        <ol className="mt-12 space-y-10 border-l border-line-light pl-8 dark:border-line-dark">
          {timeline.map((entry) => (
            <li key={`${entry.title}-${entry.period}`} className="relative">
              <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border-2 border-paper-light bg-garnet dark:border-paper-dark dark:bg-garnet-dark" />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-mono text-sm text-muted-light dark:text-muted-dark">
                  {entry.period}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-navy dark:text-navy-light">
                  {entry.type}
                </span>
              </div>

              <h3 className="mt-2 font-display text-lg font-semibold text-ink-light dark:text-ink-dark">
                {entry.title}
              </h3>
              <p className="text-sm text-muted-light dark:text-muted-dark">
                {entry.place}
              </p>

              {entry.description && (
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-light dark:text-muted-dark">
                  {entry.description}
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
