/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
          top: "0px 0px 10px rgba(100, 100, 111, 0.5)",
      },
    },
  },
  plugins: [],
};
