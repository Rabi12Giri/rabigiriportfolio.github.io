import React from "react";
import { LuMail, LuGithub, LuLinkedin, LuInstagram } from "react-icons/lu";
import { profile } from "../data/portfolioData";
import { useInView } from "../hooks/useInView";

const Contact = () => {
  const [ref, inView] = useInView();

  return (
    <section
      id="contact"
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
            Get in touch
          </h2>
          <span className="h-px flex-1 bg-line-light dark:bg-line-dark" />
        </div>

        <div className="mt-10 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-base leading-relaxed text-muted-light dark:text-muted-dark md:text-lg">
            I'm currently looking for junior frontend or MERN stack roles. If
            you have an opportunity — or just want to talk about a project — I'd
            like to hear from you.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-ink-light px-6 py-3 font-mono text-sm text-paper-light transition-opacity hover:opacity-90 dark:bg-ink-dark dark:text-paper-dark"
          >
            <LuMail size={16} />
            {profile.email}
          </a>
        </div>

        <div className="mt-10 flex gap-4">
          <a
            href={profile.social.github}
            aria-label="GitHub"
            target="_blank"
            className="rounded-md border border-line-light p-3 text-ink-light transition-colors hover:border-garnet hover:text-garnet dark:border-line-dark dark:text-ink-dark dark:hover:border-garnet-dark dark:hover:text-garnet-dark"
          >
            <LuGithub size={18} />
          </a>
          <a
            href={profile.social.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            className="rounded-md border border-line-light p-3 text-ink-light transition-colors hover:border-garnet hover:text-garnet dark:border-line-dark dark:text-ink-dark dark:hover:border-garnet-dark dark:hover:text-garnet-dark"
          >
            <LuLinkedin size={18} />
          </a>
          {/* <a
            href={profile.social.instagram}
            aria-label="Instagram"
            className="rounded-md border border-line-light p-3 text-ink-light transition-colors hover:border-garnet hover:text-garnet dark:border-line-dark dark:text-ink-dark dark:hover:border-garnet-dark dark:hover:text-garnet-dark"
          >
            <LuInstagram size={18} />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
