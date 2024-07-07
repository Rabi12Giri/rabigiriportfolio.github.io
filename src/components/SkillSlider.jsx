import React, { useEffect, useRef } from "react";

const SkillSlider = ({ skill, value }) => {
  const progressBarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = `${value}%`;
          }
        });
      },
      { threshold: 0.5 }
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
    };
  }, [value]);

  return (
    <div className="my-4">
      <label className="block text-lg font-medium">{skill}</label>
      <div className="flex items-center gap-3">
        <div className="w-full bg-gray-200 rounded-full h-1">
          <div
            ref={progressBarRef}
            id={`progress-bar-${skill}`}
            className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 h-1 rounded-full"
            style={{ width: 0, transition: "width 2s" }}
          ></div>
        </div>
        {value}%
      </div>
    </div>
  );
};

export default SkillSlider;
