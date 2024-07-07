import React from "react";
import { twMerge } from "tailwind-merge";

export const PrimaryHeading = ({ type, className, onClick, children }) => {
  return (
    <h1
      type={type}
      className={twMerge(
        "text-center text-2xl flex  justify-center items-center flex-col",
        className
      )}
    >
      {children}
      <span className="w-20 h-[2px] bg-primaryRed mt-2"></span>
    </h1>
  );
};

export const SecondaryHeading = ({ type, className, onClick, children }) => {
  return (
    <h1 type={type} className={twMerge("text-center text-xl ", className)}>
      {children}
    </h1>
  );
};
