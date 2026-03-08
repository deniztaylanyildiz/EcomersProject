/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#23A6F0',
        'dark-blue': '#252B42',
        'muted-gray': '#737373',
        'alert-orange': '#E77C40',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(90deg, #0052D4 0%, #4364F7 50%, #6FB1FC 100%)',
      }
    },
  },
  plugins: [],
}