module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
      '2xl': '1920px',
    },
    colors: {
      transparent: 'transparent',
      inherit: 'inherit',
      'grey': {
        100: '#848484',
        200: '#454545',
        300: '#333333'
      },
      'green': {
        100: '#1DB595',
        200: '#199C7F',
        300: '#137560'
      },
      'red': '#D9361A',
      'black': '#000000',
      'white': '#ffffff'
    },
    fontFamily: {
      nav: ['Montserrat', 'sans-serif'],
      content: ['Open Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}