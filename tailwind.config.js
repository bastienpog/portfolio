/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#1f1f1f',
        'custom-white':'#f0f2f4',
        'custom-green':'#004b23'
      }
    },
  },
  plugins: [],
}

