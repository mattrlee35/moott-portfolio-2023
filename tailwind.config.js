/** @type {import('tailwindcss').Config} */
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
      fontFamily: {
          'oswald' : ['Oswald', 'sans-serif']
      },
      fontFamily: {
        'bebas' : ['Bebas Neue', 'sans-serif']
    },
    },
  },
  plugins: [],
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

