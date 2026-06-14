// All image URL import
import WhitePearlTours from "../assets/WhitePearlTours.png";
import BuzzingBeeConsultancy from "../assets/BuzzingBeeConsultancy.png";
import KritikaPortfolio from "../assets/KritikaPortfolio.png";
import OnlineTutorFinder from "../assets/OnlineTutorFinder.png";
import TheBotanicalParadise from "../assets/TheBotanicalParadise.png";

export const profile = {
  name: "Rabi Giri",
  role: "Frontend Developer",
  location: "Kathmandu, Nepal",
  email: "giri.rabi.2004@gmail.com",
  // Drop your resume PDF into the `public/` folder and point this at it.
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/Rabi12Giri",
    linkedin: "https://www.linkedin.com/in/rabi-giri/",
    // instagram: "https://instagram.com/your-username",
  },
};

export const hero = {
  eyebrow: "Frontend Developer · Kathmandu, Nepal",
  heading: "Rabi Giri",
  subheading: "Building clean, responsive interfaces with React.",
  description:
    "I'm a frontend developer with a strong focus on React and Tailwind CSS, currently extending that foundation across the MERN stack. I enjoy turning designs into interfaces that feel fast, considered, and easy to use.",
};

export const about = {
  paragraphs: [
    "I'm a frontend developer based in Kathmandu, Nepal, with hands-on experience building responsive interfaces using React, JavaScript (ES6+), and Tailwind CSS. My internship at Protozoa Host gave me practical experience working with real APIs and production-style codebases.",
    "I'm currently studying for an MSc in Information Technology at Islington College (London Metropolitan University), and using that time to round out my skills across the MERN stack — Node.js, Express, and MongoDB — so I can work confidently on both ends of an application.",
  ],
  facts: [
    { label: "Based in", value: "Kathmandu, Nepal" },
    { label: "Currently studying", value: "MSc IT, Islington College" },
    { label: "Focus", value: "React & the MERN stack" },
    { label: "Open to", value: "Junior Frontend / MERN roles" },
  ],
};

export const skillGroups = [
  {
    category: "Frontend",
    items: [
      "React",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Backend & Database",
    items: ["Node.js", "Express.js", "MongoDB", "MySQL"],
  },
  {
    category: "Tools & Workflow",
    items: ["Git", "Figma", "Postman", "REST APIs"],
  },
];

// Replace these with your real projects — title, description, tags,
// and links. The image area is a placeholder until you add screenshots.
export const projects = [
  {
    title: "White Pearl Tour and Travels",
    description:
      "White Pearl Tour and Travels is a premier travel and tourism agency dedicated to delivering unforgettable, personalized, and seamless travel experiences. We specialize in curating both bespoke leisure holidays and corporate travel packages, seamlessly connecting global explorers with the world's most breathtaking destinations.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://whitepearltours.com/",
    codeUrl: "#",
    image: WhitePearlTours,
  },
  {
    title: "BuzzingBee Education Consultancy",
    description:
      "Education Consultancy that is dedicated to providing comprehensive guidance and support to students seeking educational opportunities abroad.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://buzzingbeeedu.com/",
    codeUrl: "#",
    image: BuzzingBeeConsultancy,
  },
  {
    title: "The Botanical Paradise",
    description:
      "The Botanical Paradise is a premier online destination for plant enthusiasts, offering a wide selection of high-quality plants, expert care tips, and exceptional customer service to help you create your own green oasis at home.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://superb-sunshine-059119.netlify.app/",
    codeUrl: "#",
    image: TheBotanicalParadise,
  },
  {
    title: "Client's Portfolio",
    description:
      "A personal portfolio website built for a client, showcasing their work and skills in a clean and responsive design.",
    tags: ["React", "Tailwind CSS"],
    liveUrl: "https://kritikakarakheti.com.np/",
    codeUrl: "#",
    image: KritikaPortfolio,
  },
  {
    title: "Final Year Project - Online Tutor Finder",
    description:
      "An online platform that connects students with qualified tutors for personalized learning experiences, featuring user-friendly interfaces and efficient search functionality.",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    liveUrl: "#",
    codeUrl: "#",
    image: OnlineTutorFinder,
  },
];

// A single chronological timeline for both education and work —
// sort newest first. The "type" tag is what tells them apart.
export const timeline = [
  {
    period: "2024 — Present",
    type: "Education",
    title: "MSc in Information Technology",
    place: "Islington College (London Metropolitan University), Kathmandu",
  },
  {
    period: "Jul 2023 — Oct 2023",
    type: "Experience",
    title: "Frontend Developer Intern",
    place: "Protozoa Host Pvt. Ltd., Kathmandu",
    description:
      "Built and maintained UI components in React and worked with REST APIs in a production codebase.",
  },
  {
    period: "2021 — 2024",
    type: "Education",
    title: "BSc (Hons) Computing — First Class Honours",
    place: "Islington College (London Metropolitan University), Kathmandu",
  },
  {
    period: "2019 — 2021",
    type: "Education",
    title: "+2 Science",
    place: "Trinity International College, Kathmandu",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
