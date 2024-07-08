import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { FaBars, FaTimes } from "react-icons/fa";
import "../App.css"; // Create this CSS file for animations
import ParticlesComponent from "./ParticlesComponent";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const AnimatedMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="menu-container">
      <div className="menu-icon animate-bounce" onClick={toggleMenu}>
        <div className="menu-deco bg-blue-500">
          {menuOpen ? (
            <MdKeyboardDoubleArrowRight />
          ) : (
            <MdKeyboardDoubleArrowLeft />
          )}
        </div>
      </div>
      <CSSTransition
        in={menuOpen}
        timeout={300}
        classNames="menu-slide"
        unmountOnExit
      >
        <div
          className="menu dark:bg-black bg-[#f9f9f9] text-black dark:text-white"
          onClick={toggleMenu}
        >
          <a href="#hero" className="menu__link">
            Home
          </a>
          <a href="#aboutme" className="menu__link">
            About me
          </a>
          <a href="#projects" className="menu__link">
            Projects
          </a>
          <a href="#experience" className="menu__link">
            Experience
          </a>
          <a
            href="/cv.pdf"
            download="Rabi Giri CV.pdf"
            target="_blank"
            className="text-primaryRed menu__link"
          >
            My Resume
          </a>
        </div>
      </CSSTransition>
    </div>
  );
};

export default AnimatedMenu;
