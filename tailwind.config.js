/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "white": "#fff",
        "black": "#000",
      },
      screens: {
        sm: "640px",      
        sm: "768px",      
      },
    },
  },
  plugins: [],
}

