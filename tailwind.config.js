/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 16px 32px var(--tw-shadow-color)',
      },
      fontFamily: 
      {
        'oswald' : ['Oswald', 'sans-serif']
      },
      fontFamily: 
      {
        'bebas' : ['Bebas Neue', 'sans-serif']
      },
      screens : {
        'sm': '600px',
        'lg': '1150px',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

// how to import custom font

// import from fonts.google.com into main.css
// @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');

// add to tailwind.config.js
// fontFamily: {
//   'oswald' : ['Oswald', 'sans-serif']
// },

// add font-"font" to .vue file
// font-oswald

