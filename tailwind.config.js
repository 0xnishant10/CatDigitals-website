/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      boxShadow : {
        '3xl': '0px 48px 67px 0px rgba(235,222,222,0.75)',
      },
      backgroundImg :{
        'blackImg': "url('src/assets/black.jpeg')",
      }
    },
  },
  plugins: [],
}

