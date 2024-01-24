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
      'custom-bg-card': 'rgba(229, 238, 244, 0.8)'
    },
    extend: {
      fontFamily: {
        elite: ['Special Elite', ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        'bg-hero': 'url(../assets/background.jpg)',
        'bg-png': 'url(../assets/mob1.png)',
        'bg-png2': 'url(../assets/reigen1last.png)',
        'bg-png3': 'url(../assets/dimple1.png)'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

