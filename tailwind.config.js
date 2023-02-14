/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monts: ["Bubblegum Sans"],
      },
      colors: {
        primary: "#477A6A",
        "primary-dark": "#213D34",
      },
    },
  },
  plugins: [],
};
