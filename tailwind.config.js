/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "white",
        secondary: "#000000",
        tertiary: "white",
        "black-100": "white",
        "black-200": "white",
        "white-100": "white",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #363636",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
