import React from "react";

const cssVariables = {
  "--shine-color": "#fff",
  "--shine-bg": "linear-gradient(to right, #9f9f9f 0%, #fff 10%, #d9d9d9 20%)",
  "--shine-duration": "3s",
  "--shine-position-start": "0",
  "--shine-position-end": "180px",
  "--shine-font-weight": "600",
  "--shine-font-size": "22px",
  "--shine-padding": "12px 48px",
};

const btnShineStyle = {
  color: "var(--shine-color)",
  background: "var(--shine-bg)",
  backgroundPosition: "var(--shine-position-start)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "shine var(--shine-duration) infinite linear",
  animationFillMode: "forwards",
  WebkitTextSizeAdjust: "none",
  fontWeight: "var(--shine-font-weight)",
  fontSize: "var(--shine-font-size)",
  textDecoration: "none",
  whiteSpace: "nowrap",
  fontFamily: '"Poppins", sans-serif',
};

const keyframes = `
@keyframes shine {
  0% {
    background-position: var(--shine-position-start);
  }
  60% {
    background-position: var(--shine-position-end);
  }
  100% {
    background-position: var(--shine-position-end);
  }
}
`;

const AnimatedText = ({ props }) => {
  return (
    <>
      <style>{keyframes}</style>
      <a
        href="#"
        className="btn-shine"
        style={{ ...cssVariables, ...btnShineStyle }}
      >
        {props}
      </a>
    </>
  );
};

export default AnimatedText;
