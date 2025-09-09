/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Roboto',...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          'primary': '#003D3A',          // brunswick-green
          'primary-light': '#5E8677',    // hookers-green
          'primary-dark': '#0C1618',     // rich-black (slightly darker than given #0a2625)
          
          'secondary': '#FFD61F',        // gold
          'secondary-light': '#FFE985',  // jasmine
          'secondary-lighter': '#FAF4D3',// cornsilk
          'secondary-dark': '#D1AC00',   // gold-metallic
          
          'background': '#090C02',       // smoky-black
          'background-dark': '#0C1618',  // rich-black
          
          'surface': '#FFFFFF',          // white
          
          'text': '#090C02',             // smoky-black
          'text-white': '#FFFFFF',       // white
          'text-black': '#000000',       // pure black
          
          'accent': '#E00000',           // red-cmyk
        },
      },      
    },
  },
  plugins: [],
}

