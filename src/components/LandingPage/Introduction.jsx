import React from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { RxDoubleArrowDown } from "react-icons/rx";
import { smoothScrollTo } from "../../utils/scrollUtils";
import SkillSlider from "../SkillSlider";

const Introduction = () => {
  return (
    <div className="h-screen text-center flex items-center space-y-5 justify-center flex-col dark:text-white text-black dark:bg-black ">
      <h1 className="text-4xl">
        Hello, I'm <span className="text-primaryRed">Rabi Giri</span>
      </h1>
      <p className="text-gray-500 text-xl tracking-wider">
        Exploring MERN stack || Web Developer
      </p>

      <a
        href="#aboutme"
        onClick={(e) => {
          e.preventDefault();
          smoothScrollTo("aboutme", 20); // Pass the offset in percentage of viewport height
        }}
      >
        <RxDoubleArrowDown className="text-3xl animate-bounce" />
      </a>
    </div>
  );
};

export default Introduction;
