import React, { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { FiSun } from "react-icons/fi";
import { FaCloudMoon, FaSpinner } from "react-icons/fa";
import AnimatedText from "./SharedUI/AnimatedText";
import { AnimatedButton } from "./SharedUI/Buttons/Buttons";
import { smoothScrollTo } from "../utils/scrollUtils";
import ProgressBar from "./ProgressBar";

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate the download delay
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.4) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed z-10 w-full top-0 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } text-black bg-[#ffffff] `}
    >
      <div className="flex justify-between items-center w-[80%] h-20 mx-auto ">
        {/* <h1 className="rainbow-text text-2xl font-semibold tracking-wide">
          Rabi Giri
        </h1> */}
        <h1 className="animated-text-card">Rabi Giri</h1>
        <nav className="hidden lg:flex items-center gap-12">
          <ul className="flex gap-4">
            <li>
              <a
                className="menu__link"
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo("aboutme", 15);
                }}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                className="menu__link"
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo("projects", 15);
                }}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#experience"
                className="menu__link"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo("experience", 15);
                }}
              >
                Experience
              </a>
            </li>

            {/*  */}
            <li>
              <a
                href="/cv.pdf"
                download="Rabi Giri CV.pdf"
                target="_blank"
                onClick={handleDownload}
                className="text-primaryRed menu__link flex items-center"
              >
                {isLoading ? (
                  <FaSpinner className="animate-spin mr-2" />
                ) : (
                  "My Resume"
                )}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
