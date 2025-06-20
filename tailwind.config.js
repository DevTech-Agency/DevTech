/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black: {
          DEFAULT: '#000',
          100: '#000319'
        }
      }
    },
  },
  plugins: [],
}