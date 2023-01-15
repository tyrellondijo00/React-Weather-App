/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Montserrat', 'sans-serif'],
      body: ['Montserrat', 'sans-serif'],
    },

    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
    extend: {
      backgroundColor: {
        'dark-bg': '#20232A',
      },
    },
  },
  plugins: [],
}
