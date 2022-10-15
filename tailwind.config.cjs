/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1100px"
    },
    extend: {
      colors: {
        orange: 'orange',
        gold: "hsl(40, 92%, 23%)",
        black: "#000",

      }
    },
  },
  plugins: [],
}