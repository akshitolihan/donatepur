/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'aksh': '-2px 0px 0px 0px rgba(0, 0, 4, 0.05)',
      },
    },
  },
  plugins: [],
}