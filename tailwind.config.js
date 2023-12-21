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
          grey : '#E4E3EB',
          bg : '#F3F2FA'
        }
      },
      fontFamily : {
        fira: 'FiraGO'
      },
      maxWidth : {
        web : '1080px'
      }
    },
  },
  plugins: [],
}

