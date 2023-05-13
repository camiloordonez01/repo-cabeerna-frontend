/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      'primary': '#F6BF63',
      'secondary': '#121212',
    },
    extend: {},
  },
  plugins: [],
}