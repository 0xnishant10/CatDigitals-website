/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      boxShadow : {
        '3xl': '0px 48px 67px 0px rgba(235,222,222,0.75)',
      },
      backgroundImgage :{
        'blackImg': "url('src/assets/black.jpeg')",
        'LogoImg': "url('src/assets/Cat_Digitals.png')",
      },
      maxWidth :{
        'ms' : '20%',
        'xxs' : '10%',
        'xxxs' : '5%',
      }
    },
  },
  plugins: [],
}

