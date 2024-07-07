// src/utils/scrollUtils.js
export const smoothScrollTo = (id, offset = 70) => {
  const element = document.getElementById(id);
  const headerOffset = window.innerHeight * (offset / 100); // 70vh offset
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};
