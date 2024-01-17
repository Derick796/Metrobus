/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        raleway: "'Raleway', sans-serif;", //this helps me reference the font in index.html
      }
    },
  },
  plugins: [],
}
