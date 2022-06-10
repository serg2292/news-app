module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '320px', 'max': '767px'},
      'lg': {'min': '768'},
    },
    colors: {
      transparent: 'transparent',
      'grey': '#848484',
      'green': {
        100: '#1DB595',
        200: '#199C7F',
        300: '#137560'
      },
      'red': '#D9361A',
      'black': '#000000',
      'white': 'ffffff'
    },
    fontFamily: {
      nav: ['Montserrat', 'sans-serif'],
      content: ['Open Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}