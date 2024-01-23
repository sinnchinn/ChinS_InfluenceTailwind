/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "./pages/**/*.html"
  ],
  theme: {
    colors: {
      'custom-blue': 'rgba(181, 207, 231, 0.8)',
      'custom-yellow': '#F1ECCE',
      'custom-bg-card': '#D5E7F9'
    },
    extend: {
      fontFamily: {
        elite: ['Special Elite', ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        'bg-hero': 'url(../assets/bgg2.jpg)'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

