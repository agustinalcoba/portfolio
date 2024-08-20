/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        white: "0 0px 2px rgba(200, 200, 200, 1)",
      },
      fontFamily: {
        Bebas: ["Bebas Neue"],
      },
      colors: {
        "cerulean-blue": {
          50: "#f2f4fc",
          100: "#e2e6f7",
          200: "#ccd3f1",
          300: "#a9b7e7",
          400: "#8093da",
          500: "#6271cf",
          600: "#4851bf",
          700: "#4447b1",
          800: "#3e3d90",
          900: "#353673",
          950: "#242447",
        },
      },
      fontSize: {
        "6xl": "5rem",
      },
    },
  },
  plugins: [],
};
