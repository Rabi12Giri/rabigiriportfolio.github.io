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
        <div className="menu" onClick={toggleMenu}>
          <a href="#hero">Home</a>
          <a href="#aboutme">About me</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
        </div>
      </CSSTransition>
    </div>
  );
};

export default AnimatedMenu;
