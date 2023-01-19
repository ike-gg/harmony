/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.6rem",
      },
      boxShadow: {
        solid: "0 0.25rem 0 0",
        personal: "0 0.1rem 1rem 0",
      },
      colors: {
        primary: "#6f2dbd",
        shadow: "#00000010",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      sans: ['"Inter"', "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
