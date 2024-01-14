/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle: "#D4D943",
        primaryContent: "#729CA6",
        primarySubcontent: "#2B5268",
        primaryBase: "#2B5268",
        primaryAccent: "#A69B03",
        primaryBg: "#012E40",
      }
    },
  },
  plugins: [],
}

