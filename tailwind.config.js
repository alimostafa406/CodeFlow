/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      Montserrat: "Montserrat",
    },
    animation: {
      'scroll-left': 'scrollLeft 30s linear infinite',
    },
    colors: {
      'custom-dark': '#0F1120',
    },
    screens: {
      'xs': '350px', // Custom breakpoint for less than 640px
      'fs': '1px'
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};