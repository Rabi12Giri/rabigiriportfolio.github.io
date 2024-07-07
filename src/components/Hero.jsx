import React, { useContext, useEffect, useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { DarkModeContext } from "../context/DarkModeContext";
import Header from "./Header";
import Introduction from "./LandingPage/Introduction";
import ParticlesComponent from "./ParticlesComponent";

const Hero = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const [color, setColor] = useState("white");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.000001) {
        setColor("black");
      } else {
        setColor("white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="relative bg-white dark:bg-black transition-colors"
      id="hero"
    >
      <Header />
      <ParticlesComponent />
      <Introduction />
      <div className="fixed right-10 top-7 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="transition-transform transform hover:scale-110 duration-100 ease"
        >
          {darkMode ? (
            <LuSun className="text-2xl dark:text-black" style={{ color }} />
          ) : (
            <IoMoonOutline
              className="text-xl dark:text-black"
              style={{ color }}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default Hero;
