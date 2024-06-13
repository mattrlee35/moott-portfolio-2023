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
        'oswald' : ['Oswald', 'sans-serif'],
        'bebas' : ['Bebas Neue', 'sans-serif'],
        'nunito' : ['Nunito Sans', 'sans-serif'],
        'monoton' : ['Monoton', 'cursive'],
        'rokkitt': ['Rokkitt', 'serif'],
      },
      // different screen sizes
      screens : {
        'sm': '600px',
        'md-custom': '760px',
        'md': '900px',
        'lg-custom-projects': '1000px',
        'lg-custom': '1040px',
        'lg': '1150px',
      },
      colors: {
        'aquagreen': '#009063',
        'black' : '#353535',
        'lightgray' : "#E0E0E0",
        'silver' : "#C5C2D5",
        'purple' : "#630090",
        'offwhite': "#F7F8F3",
        'red' : "#F7444E",
        'cornflower' : '#1D4E73',
        'lightyellow' : '#F0DB4F',
        'transparent' : 'transparent',
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