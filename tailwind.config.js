/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0px 22px 70px 4px rgba(0, 0, 0, 0.56)",
      },
      colors: {
        buttonColor: "#845ef7",
        buttonColorHover: "#7048e8",
        shadowColor1: "#9775fa",
      },
      fontFamily: {
        Mooli: ["Mooli", "sans-serif"],
      },
    },
  },
  plugins: [],
};
