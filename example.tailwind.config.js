/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default  withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "black":"#191919",
        'primary': '#F7F3EE',
        'white':'#FFFFFF',
        'yellow':'#ffdd00'
      },
      fontSize:{
        '18':"1.125rem",
        '14':"0.875rem",
        '96':"6rem",
        '64':"4rem",
        '22':"1.375rem",
        '32':"2rem",
      },
      screens: {
        'mb': {'min': '320px', 'max': '1024px'},
        'tab': {'min': '800px', 'max': '1025px'},
        'lap':{'min':'1025px'},
        "over":{'min':'1640px'}
       
      },
      backgroundImage: {
    
 
      },
    },
  },
  plugins: [],
})

