/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#142D6E",
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
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        
        'ipad':'800px',
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/Bogotaazul.png')",
        'Nav': "url('bgNav.png')"
      },
    },
  },
  plugins: [],
};
