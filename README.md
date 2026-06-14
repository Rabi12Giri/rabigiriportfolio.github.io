# Rabi Giri — Portfolio

A single-page portfolio built with React, Vite, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL in your browser. The site reloads automatically as you edit files.

To build for production:

```bash
npm run build
```

This outputs a `dist/` folder you can deploy to Netlify, Vercel, or any static host.

## Project structure

```
src/
  components/   One file per section (Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer)
  context/      ThemeContext.jsx — dark/light mode, persisted in localStorage
  data/         portfolioData.js — all editable content lives here
  hooks/        useInView.js — small scroll-reveal hook used by each section
```

## What to customize first

1. **`src/data/portfolioData.js`** — this is the only file you need to edit to update
   text content: your bio, skills, projects, timeline, email, and social links.

2. **Resume** — add your resume PDF to `public/resume.pdf` (or update
   `profile.resumeUrl` in `portfolioData.js` if you'd rather link elsewhere).

3. **Project screenshots** — each project card currently shows a placeholder
   ("Add a screenshot"). To add real images:
   - Put image files in `src/assets/` (create the folder)
   - In `Projects.jsx`, replace the placeholder `<div>` with an `<img>`:
     ```jsx
     import wearsScreenshot from "../assets/wears.png";
     // ...
     <img src={wearsScreenshot} alt={project.title} className="aspect-video w-full object-cover" />
     ```
   - You can also add an `image` field per project in `portfolioData.js` and
     reference it dynamically.

4. **Social links** — update `profile.social` in `portfolioData.js` with your
   real GitHub, LinkedIn, and Instagram URLs.

## Design notes

- **Colors, fonts** are defined as design tokens in `tailwind.config.js`
  (`garnet`, `navy`, `paper`, `surface`, `ink`, `muted`, `line`). Change them
  there to retheme the whole site consistently.
- **Dark mode** toggles a `dark` class on `<html>` and is persisted via
  `localStorage` — same approach as your previous `DarkModeContext`, just
  wrapped in a hook (`useTheme`).
- **Scroll reveal** — each section fades/slides in once when it enters the
  viewport, via `useInView`. This respects `prefers-reduced-motion`.
- The **Experience & Education** section was rebuilt as a single chronological
  timeline (sorted newest first, tagged "Education" / "Experience") instead of
  two separate columns, to avoid the mismatched-height layout from before.
