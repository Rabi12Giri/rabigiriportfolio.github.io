import React from "react";
import { twMerge } from "tailwind-merge";
import "./Button1.css";
import { FaLink } from "react-icons/fa";

export const AnimatedButton = ({ type, className, onClick, children }) => {
  return (
    <button type={type} onClick={onClick} className={twMerge("btn", className)}>
      {children}
    </button>
  );
};

export const DialogButton = ({ type, className, onClick, children }) => {
  return (
    <>
      <button
        type={type}
        className={twMerge("button flex items-center gap-3", className)}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export const SlickButton = ({ type, className, onClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={twMerge("slickButton", className)}
    >
      {children}
    </button>
  );
};
