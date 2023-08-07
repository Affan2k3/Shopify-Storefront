/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "sm": "320px",
      "mm": "375px",
      "ml": "425px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1440px",
      "2xl": "2560px",
    },
    
  },
  extend: {
    display: ["group-hover"],
    colors: {
      "topLabel": "#1C1D1D",
    },
    width: {
      '13': '2.4rem',
      '15': '3.4rem',
      '17': '3.7rem',
      '18': '6.6rem'
    },
  },
plugins: [],
}
    

