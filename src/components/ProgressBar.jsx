import React, { useState, useEffect } from "react";
import { IoArrowUpCircle } from "react-icons/io5";
import "../App.css";

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const totalScrollHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrolled = (window.scrollY / totalScrollHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <div className=" fixed dark:bg-white bg-white rounded-full p-1 z-10 right-7 bottom-7 animate-bounce">
      <div className="progress rounded-full">
        <a href="#hero">
          <IoArrowUpCircle className="text-3xl text-primaryRed" />
        </a>
        <div className="progress-bar-container progress-bar-custom">
          <div
            className="progress"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
