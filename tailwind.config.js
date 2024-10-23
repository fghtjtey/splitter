/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      lightBlue: "#C5E4E7",
      white: "#fff",
      black: "#000",
      darkGray: "#5E7A7D",
      lightSmoke: "#F3F9FA",
      darkGreen: "#00474B",
      gray: "#7f9d9f",
      primary: "#26c2ae",
      lightGray: "#9EBBBD",
      emptyGreen: "#0D686D",
    },

    extend: {
      fontFamily: {
        spaceMono: ["Space Mono", "Courier New", "monocpase"]
      }
    },
  },
  plugins: [],
}