/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer': "url(./assets/imgs/footer.jpg)",
      },
      colors: {
        'secondary': '#A9A9AA',
        'light-white': 'rgba(255,255,255,0.10)',
      }
    },
  },
  plugins: [],
}

