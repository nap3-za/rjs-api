/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        dark: "#030712",
        warning: "#991b1b",
        light: "#ddd6fe",
        muted: "#6b7280",
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
