/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./*.js",
    "./dist/**/*.html",
    "./dist/**/*.js",
    "./docs/**/*.html",
    "./docs/**/*.js",
    "./public/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}