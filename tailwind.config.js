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
      },
      animation: {
        perspective: "perspective 1.2s infinite",
      },
      keyframes: {
        perspective: {
          "0%": { transform: "perspective(120px)" },
          " 50%": { transform: "perspective(120px) rotateY(180deg)" },
          "100%": {
            transform: "perspective(120px) rotateY(180deg)  rotateX(180deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
