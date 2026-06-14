import React from "react";
import { skillGroups } from "../data/portfolioData";
import { useInView } from "../hooks/useInView";

const Skills = () => {
  const [ref, inView] = useInView();

  return (
    <section
      id="skills"
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
            Skills
          </h2>
          <span className="h-px flex-1 bg-line-light dark:bg-line-dark" />
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-light dark:text-muted-dark">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-line-light px-3 py-1.5 font-mono text-sm text-ink-light dark:border-line-dark dark:text-ink-dark"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
