/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(29 78 216)',
        secondary: {
          100: '#e2e2d5',
          200: '#888883',
        }
      },
      fontFamily: {
        body: ['Dosis']
      }
    },
  },
  variants: {},
  plugins: [],
}