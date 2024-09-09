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
    <div className="fixed bottom-0 left-0 w-full h-[3px] rounded-lg z-50">
      <div className="w-full bg-gray-200">
        <div
          className="h-[3px] bg-primaryRed rounded-full transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
