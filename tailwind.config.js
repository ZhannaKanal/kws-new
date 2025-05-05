/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "white": "#fff",
        "black": "#000",
      },
      fontWeight: {
        250: '250', // custom weight
      }
    },
    screens: {
      sm: '640px',   // Small devices (phones)
      md: '768px',   // Medium devices (tablets)
      lg: '1024px',  // Large devices (desktops)
      xl: '1280px',  // Extra large
    },
  },
  plugins: [],
}

