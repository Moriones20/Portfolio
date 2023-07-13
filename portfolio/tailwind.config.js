/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#0f1624',
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
