/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // Include all your components
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0FAC81',
      },
    },
  },
  plugins: [],
}
