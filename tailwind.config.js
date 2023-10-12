/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer': "url(./assets/imgs/footer.jpg)",
        'dots': "url(./assets/imgs/dots.png)",
        'linear': "url(./assets/imgs/shape-linear.png)",
        'square-dot': "url(./assets/imgs/square-dots.png)",
      },
      colors: {
        'secondary': '#A9A9AA',
        'light-white': 'rgba(255,255,255,0.10)',
        'warning': '#ff7f4c',
        'success': '#75b739',
        'light-success': '#7CDA24',
        'orange': '#fe4a01',
        'primary': '#084C93',
        'info': '#1089ff',
        'light-info': '#F5FAFF',
        'black-opacity': 'rgba(0, 0, 0, 0.1)',
      },
      boxShadow: {
        'link-button': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        'chit-square': '0px 8px 16px rgb(0 0 0 / 20%)',
        'buble-content': '0 20px 40px rgb(0 0 0 / 10%)',
        'buble-tag': '0 30px 40px rgb(0 0 0 / 15%)',
        'review-user': '0px 10px 30px 5px rgba(0, 0, 0, 0.15)',
        'blog': '0 0 40px rgba(0, 0, 0, 0.10)',
      },
      keyframes: {
        'linear': {
          '0%, 100%' : { transform: 'translateY(-20px)' },
          '50%' : { transform: 'translateY(-10px)' }
        },
        'zoom-fade': {
          '0%, 100%' : { transform: 'scale(0.9)' },
          '50%' : { transform: 'scale(1)' }
        }
      },
      animation: {
        'linear': 'linear 2s linear infinite',
        'zoom-fade': 'zoom-fade 5s linear infinite',
      }
    },
  },
  plugins: [],
}

