/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        light: "rgb(235, 237, 244)",
        dark: "#110A14",
        muted: "#00000060",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "950px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
