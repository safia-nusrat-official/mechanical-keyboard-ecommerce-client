/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "primary":"#001F3F",
        "body":"#2D2D2D"
      }
    },
  },
  plugins: [],
};
