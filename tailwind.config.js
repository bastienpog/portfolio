/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-white": "#f4f4f4",
        "custom-black": "#000000",
        "custom-green": "#00debf",
        "custom-darkgreen": "#018573",
      },
    },
  },
  plugins: [],
};
