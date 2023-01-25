/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      md: "550px",
      lg: "900px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "7xl": "91px",
      }
    },
  },
  plugins: [],
};
