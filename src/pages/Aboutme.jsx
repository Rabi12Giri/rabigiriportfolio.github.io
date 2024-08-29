import React from "react";
import { PrimaryHeading } from "../components/SharedUI/Heading";
import ProfilePhoto from "../assets/profilePhoto.png";
import G from "../assets/g.svg";
import SkillSlider from "../components/SkillSlider";

const Aboutme = () => {
  return (
    <div
      className="h-[100%] lg:h-screen dark:bg-black bg-white dark:text-white"
      id="aboutme"
    >
      <PrimaryHeading className="dark:text-white">About Me</PrimaryHeading>
      <div className="flex justify-center">
        <p className="dark:text-white text-center mt-6 w-[95%] md:w-[80%]">
          I possess an impressive arsenal of skills in HTML, CSS, JavaScript,
          React, and Tailwind. I excel in designing and maintaining responsive
          websites that offer a smooth user experience. My expertise lies in
          crafting dynamic, engaging interfaces through writing clean and
          optimized code and utilizing cutting-edge development tools and
          techniques.
        </p>
      </div>
      <div className="relative flex flex-col lg:flex-row mx-auto justify-between  items-center w-[90%] mt-12">
        <div className="relative w-[80%] sm:w-[60%] md:w-[50%] lg:w-[30%]">
          {/* Wavy background image */}
          <img
            src={G}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover rounded-full transform scale-125"
            loading="lazy"
          />

          {/* Profile photo */}
          <img
            src={ProfilePhoto}
            alt="Profile"
            loading="lazy"
            className="relative w-full h-full object-cover rounded-full"
          />
        </div>
        <div className=" w-[100%] md:w-[90%] lg:w-[60%] dark:text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-4 lg:gap-9">
          <SkillSlider skill="HTML5" value={90} />
          <SkillSlider skill="CSS" value={70} />
          <SkillSlider skill="TailwindCSS" value={60} />
          <SkillSlider skill="Bootstrap" value={70} />
          <SkillSlider skill="ReactJs" value={50} />
          <SkillSlider skill="NodeJs" value={20} />
          <SkillSlider skill="UI/UX" value={70} />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
