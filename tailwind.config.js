/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-body": "#fcfcfd",
        "color-green-100": "#ddf3d8",
        "color-green-200": "#04b90b",
        "color-black-100": "#777e90",
        "color-black-200": "#23262f",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
};
