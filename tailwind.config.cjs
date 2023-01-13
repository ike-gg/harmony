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
      },
    },
  },
  plugins: [],
};
