/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        clr: {
          purple : '#5D37F3',
          grey : '#E4E3EB'
        }
      }
    },
  },
  plugins: [],
}

