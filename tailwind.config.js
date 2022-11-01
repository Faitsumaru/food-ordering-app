/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ClashDisplay-Regular', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        tomato: '#e50914',
        marigold: '#ffbe0b',
      }
    },
  },
  plugins: [],
}
