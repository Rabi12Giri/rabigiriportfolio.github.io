import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        background: "background-color",
        text: "color",
        border: "border-color",
        shadow: "box-shadow",
      },
      colors: {
        primaryRed: "#E31B6D",
        // darkBg: "#333333",
        secondaryBlue: "#31A0F8",
      },
      screens: {
        "719px": "719px",
        "865px": "865px",
      },
    },
  },
  plugins: [],
});
