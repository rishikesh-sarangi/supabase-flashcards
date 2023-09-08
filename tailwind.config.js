/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    minWidth: {
      "1/2": "50%",
    },
    extend: {
      animation: {
        "flip-in-ver-left": "flip-in-ver-left 0.5s linear   both",
        "flip-in-ver-right": "flip-in-ver-right 0.5s linear   both",
        "roll-out-blurred-left": "roll-out-blurred-left 0.65s linear   both",
      },
      keyframes: {
        "flip-in-ver-left": {
          "0%": {
            transform: "rotateY(80deg)",
            opacity: "0",
          },
          to: {
            transform: "rotateY(0)",
            opacity: "1",
          },
        },
        "flip-in-ver-right": {
          "0%": {
            transform: "rotateY(-80deg)",
            opacity: "0",
          },
          to: {
            transform: "rotateY(0)",
            opacity: "1",
          },
        },
        "roll-out-blurred-left": {
          "0%": {
            transform: "translateX(0) rotate(0deg)",
            filter: "blur(0)",
            opacity: "1",
          },
          to: {
            transform: "translateX(-1000px) rotate(-720deg)",
            filter: "blur(50px)",
            opacity: "0",
          },
        },
      },
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        NotoSans: ["Noto Sans Mahajani", "sans-serif"],
      },
      maxWidth: {
        xxs: "10rem",
      },
      flex: {
        custom: "1 1 25%",
      },
    },
  },
  plugins: [],
};
