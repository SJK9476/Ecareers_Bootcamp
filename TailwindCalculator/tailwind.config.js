/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ox-blue': '#011638',
        'charcoal': '#364156',
        'silver': '#CDCDCD'
      }
    },
  },
  plugins: [],


}
