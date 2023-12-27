/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xl': { 'max': '1200px' },
      'lg': { 'max': '991px' },
      'md': { 'max': '767' },
      'sm': { 'max': '550px' },
       'xsm' : {'max' : '550px'},
    }
  },
  plugins: [],
}