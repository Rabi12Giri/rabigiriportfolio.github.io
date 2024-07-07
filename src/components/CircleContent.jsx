// src/components/CircleContent.js
import React, { useState } from "react";

const CircleContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  const contents = [
    { id: 0, content: "Content for Circle 1" },
    { id: 1, content: "Content for Circle 2" },
    { id: 2, content: "Content for Circle 3" },
  ];

  const handleCircleClick = (index) => {
    if (index !== activeIndex) {
      setAnimationClass(""); // Reset the animation class
      setTimeout(() => {
        setActiveIndex(index);
        setAnimationClass("slide-in-from-right");
      }, 10); // Delay to allow the previous animation to reset
    }
  };

  return (
    <>
      <div className="w-full  dark:text-white dark:bg-black">
        <div className="flex justify-between w-[80%] mx-auto">
          <div className="flex flex-col items-center space-y-4">
            {contents.map((item, index) => (
              <div
                key={item.id}
                className={`w-16 h-16 flex items-center justify-center rounded-full cursor-pointer transition-transform duration-300 ${
                  activeIndex === index
                    ? "bg-blue-500 transform scale-110"
                    : "bg-gray-400"
                }`}
                onClick={() => handleCircleClick(index)}
              >
                {index + 1}
              </div>
            ))}
          </div>
          <div className="ml-8 p-4 border rounded-lg transition-opacity duration-300 ease-in-out">
            <p className={animationClass}>{contents[activeIndex].content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CircleContent;
