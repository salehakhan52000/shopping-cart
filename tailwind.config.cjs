/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'Open-sans': ['Open-sans', 'sans-serif']
      },
      colors:{
        primary: '#F86338',
      }
    },
  },
  plugins: [],
}
