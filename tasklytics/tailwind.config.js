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
          primary: {
            100: '#5e8677', // hookers-green (lightest tint we have)
            500: '#00524e', // brunswick-green (base primary)
            900: '#1c3136', // rich-black (darkest shade)
          },

          secondary: {
            100: '#faf4d3', // cornsilk (soft background use)
            500: '#e00000', // red-cmyk (alert / emphasis)
            900: '#090c02', // smoky-black (deep contrast)
          },

          neutral: {
            100: '#ffffff', // white
            500: '#faf4d3', // cornsilk (neutral paper / card tone)
            900: '#090c02', // smoky-black (text/foreground)
          },

          text: {
            light: '#ffffff', // white text
            dark: '#090c02',  // smoky-black
            black: '#000000', // true black
            disabled: '#d6d6d6' // disabled gray 
          },

          accent: {
            danger: '#e00000', // red-cmyk
            success: '#5e8677', // hookers-green (reuse as success/confirmation)
            info: '#00524e',    // brunswick-green
            disabled: '#F5F5F5' // disabled gray
          },
        },
      },    
      backgroundSize: {
        '200%': '200% 100%',
      },
      keyframes: {
        'gradient-x': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
      },        
    },
  },
  plugins: [],
}

