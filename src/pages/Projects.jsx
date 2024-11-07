import React from "react";

import { PrimaryHeading } from "../components/SharedUI/Heading";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "E-commerce Clothing Website",
      description: "Simple E-commerce Clothing Website",
      image: "/Projects/ecommercewebsite.png",
      details: {
        images: [
          "/Projects/ecommercewebsite.png",
          "/Projects/ecommercewebsite1.png",
          "/Projects/ecommercewebsite2.png",
        ],
        content:
          "During my free time while learning ReactJs, I created this project to learn about basics of ReactJs in which i created a simple website where users can buy best clothes according to their preferences",
      },
      techStack: "ReactJs, TailwindCSS",
      linkTo: "https://rainbow-hotteok-69dcde.netlify.app/",
      github: "https://github.com/Rabi12Giri",
    },
    {
      id: 2,
      title: "Education Consultancy Website",
      description: "Genuine Education Consultancy Website for client",
      image: "/Projects/educationConsultancy.png",
      details: {
        images: [
          "/Projects/educationConsultancy.png",
          "/Projects/educationConsultancy1.png",
          "/Projects/educationConsultancy2.png",
          "/Projects/educationConsultancy3.png",
        ],
        content:
          "I got a call from a client to work with this project. I was assigned to create website for genuine education consultancy website (BuzzingBee). ",
      },

      techStack: "HTML, CSS, JavaScript",
      github: "https://github.com/Rabi12Giri",
      linkTo: "https://buzzingbeeedu.com/",
    },
    {
      id: 3,
      title: "E-commerce Nursery Website",
      description: "Freelancing Project for a student about nursery e-commerce",
      image: "/Projects/nursery.png",
      details: {
        images: [
          "/Projects/nursery.png",
          "/Projects/nursery1.png",
          "/Projects/nursery2.png",
          "/Projects/nursery3.png",
          "/Projects/nursery4.png",
        ],
        content:
          "During my college days, There was a colleague that requested me to work with this project. I was able to give my best and create a nursery website that deals with buying and selling plants materials. It was responsive for mobile phones and tablets.",
      },
      techStack: "HTML, CSS, JavaScript",
      github: "https://github.com/Rabi12Giri",
      linkTo: "https://superb-sunshine-059119.netlify.app/",
    },
    {
      id: 4,
      title: "Project Portfolio for a Client",
      description: "Freelancing Project for a researcher portfolio",
      image: "/Projects/portfolio.png",
      details: {
        images: [
          "/Projects/portfolio.png",
          "/Projects/portfolio2.png",
          "/Projects/portfolio3.png",
          "/Projects/portfolio4.png",
        ],
        content:
          "A researcher client hit me up with a task to develop a personal portfolio for her. Thus, having prior meeting with her and by collaborating with her ideas, I was able to complete this project based on her requirement in design and content itself.",
      },
      techStack: "ReactJs, TailwindCSS",
      github: "https://github.com/Rabi12Giri",
      linkTo: "https://kritikakarakheti.com.np/",
    },
    {
      id: 5,
      title: "Online Tutor Finder - Final Year Project",
      description: "Online Tutor Finder - Final Year Project",
      image: "/Projects/onlinetut4.png",
      details: {
        images: [
          "/Projects/onlinetut1.png",
          "/Projects/onlinetut2.png",
          "/Projects/onlinetut3.png",
          "/Projects/onlinetut4.png",
          "/Projects/onlinetut5.png",
          "/Projects/onlinetut6.png",
          "/Projects/onlinetut7.png",
          "/Projects/onlinetut8.png",
          "/Projects/onlinetut9.png",
          "/Projects/onlinetut10.png",
        ],
        content:
          "Online Tutor Finder is the platform where several users can register as student or teacher. Student books appointment with teacher and complete the session during booking period. The payment integration is done from Khalti platform. Core Feature: Booking appointment, Marketplace, Auto session complete, Rapid Exam.",
      },
      techStack: "MERN Stack",
      github: "https://github.com/Rabi12Giri",
      linkTo: "https://online-tutor-finder.vercel.app/",
    },
    {
      id: 6,
      title: "White Pearl Travel Tourism",
      description: "White Pearl Travel Tourism",
      image: "/Projects/whitepearl1.png",
      details: {
        images: [
          "/Projects/whitepearl1.png",
          "/Projects/whitepearl2.png",
          "/Projects/whitepearl3.png",
          "/Projects/whitepearl4.png",
          "/Projects/whitepearl5.png",
          "/Projects/whitepearl6.png",
        ],
        content:
          "White Pearl Travel Tourism is a company based in Nepal located in Gyaneshwor, Kathmandu, Nepal. I had collaborated with backend developer to develop this site. I developed and maintained frontend pages using ReactJs and optimized the images to load them faster. I also integrated the API using Postman for efficiency. The website is still under development whilst the frontend pages are hosted.",
      },
      techStack: "MERN Stack",
      github: "https://github.com/Rabi12Giri",
      linkTo: "https://dev-travel-tours.vercel.app/",
    },
  ];

  return (
    <div
      className="dark:text-white bg-white dark:bg-black h-fit lg:h-screen mt-12 lg:mt-0"
      id="projects"
    >
      <PrimaryHeading>Projects</PrimaryHeading>
      <div className="w-[85%] lg:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-12 mx-auto mt-8">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
