import React from "react";
import { LuArrowUpRight, LuGithub } from "react-icons/lu";
import { projects } from "../data/portfolioData";
import { useInView } from "../hooks/useInView";

const ProjectCard = ({ project }) => (
  <article className="group flex flex-col overflow-hidden rounded-xl border border-line-light transition-colors dark:border-line-dark cursor-pointer">
    <div className="flex aspect-video items-center justify-center border-b border-line-light bg-surface-light font-display text-sm text-muted-light dark:border-line-dark dark:bg-surface-dark dark:text-muted-dark">
      <img src={project.image} alt={project.title} />
    </div>
    <div className="flex flex-1 flex-col p-6">
      <h3 className="font-display text-xl font-semibold text-ink-light dark:text-ink-dark">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-light dark:text-muted-dark">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-line-light px-2 py-1 font-mono text-xs text-muted-light dark:border-line-dark dark:text-muted-dark"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-5 flex gap-4 font-mono text-sm">
        <a
          href={project.liveUrl}
          target="_blank"
          className="inline-flex items-center gap-1 text-ink-light hover:text-garnet dark:text-ink-dark dark:hover:text-garnet-dark"
        >
          Live <LuArrowUpRight size={14} />
        </a>
        <a
          href={project.codeUrl}
          className="inline-flex items-center gap-1 text-muted-light hover:text-garnet dark:text-muted-dark dark:hover:text-garnet-dark"
        >
          Code <LuGithub size={14} />
        </a>
      </div>
    </div>
  </article>
);

const Projects = () => {
  const [ref, inView] = useInView();

  return (
    <section
      id="projects"
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
            Projects
          </h2>
          <span className="h-px flex-1 bg-line-light dark:bg-line-dark" />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
