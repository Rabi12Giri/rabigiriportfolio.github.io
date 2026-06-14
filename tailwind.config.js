/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          light: "#FBFBFA",
          dark: "#0D0F14",
        },
        surface: {
          light: "#FFFFFF",
          dark: "#161922",
        },
        ink: {
          light: "#15161C",
          dark: "#EDEEF2",
        },
        muted: {
          light: "#5B5F6D",
          dark: "#9498A6",
        },
        line: {
          light: "#E6E6E9",
          dark: "#262A36",
        },
        garnet: {
          DEFAULT: "#C2293D",
          dark: "#E14B5E",
        },
        navy: {
          DEFAULT: "#2F4374",
          light: "#5C73AD",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
