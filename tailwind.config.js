/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    minWidth: {
      "1/2": "50%",
    },
    extend: {
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
