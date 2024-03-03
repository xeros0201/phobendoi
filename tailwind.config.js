/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors:{
        "black":"#191919",
        'primary': '#F7F3EE',
        'white':'#FFFFFF',
        'yellow':'#ffdd00',
        'primary': '#F7F3EE',
        'whiteText':'#FFFFFF',
        'primaryBlack':'#191919',
        'primaryYellow':'#ffdd00'
      },
      fontSize:{
        '18':"1.125rem",
        '14':"0.875rem",
        '96':"6rem",
        '64':"4rem",
        '22':"1.375rem",
        '32':"2rem",
        'aCaption': '0.875rem',
        'aCaptionVw': '0.985vw',
        'aButton': '1.1722vw',
        'aButtonVw': '1.1rem',
        'aPara': '1.375rem',
        'aParaVw': '1.375rem',
        'aSubtitle': '2rem',
        'aSubtitleVw': ' 2.0835vw',
        'aTitle2': '4rem',
        'aTitle2Vw': '4rem',
        'aTitle1': '6rem',
        'aTitle1Vw': '6.875vw',
        '56px':'3.5rem',
        '30px':"1.875rem",
        '28px':"1.75rem",
        '16px':"1rem",
        '12px':'0.75rem',
      },
      screens: {
        'mb': {'min': '320px', 'max': '1024px'},
        'tab': {'min': '600px', 'max': '1025px'},
        'lap':{'min':'1025px'},
        'notmb':{'min':'1025px'},
        "over":{'min':'1640px'}
       
      },
      fontFamily:{

        BVP:['Be Vietnam Pro', 'sans-serif']
      },
      fontWeight: {
        'title-Subtitle':500,
        'title2-caption':400,
        'p':300,
        'button':600,
        'button-sec':500,
        'caption-600':600,
        '500':500,
        '300':300,
        '600':600,
        '400':400

      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}