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
      'custom-yellow': '#F4EFD1',
      'custom-bg-card': '#E5EEF4'
    },
    extend: {
      fontFamily: {
        elite: ['Special Elite', ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        'bg-hero': 'url(../assets/background.jpg)',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

