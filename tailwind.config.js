/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Include jsx and tsx for React components
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};