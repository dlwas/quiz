module.exports = {
  purge: ['./*.html', './src/**/*.vue'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        main: 'Poppins, sans-serif',
        second: 'Open Sans, sans-serif',
      },
      fontSize: {
        tiny: '0.6rem',
      },
      colors: {
        pink: '#A12568',
        'pink-darken': '#3B185F',
        gold: '#FEC260',
        white: '#f5f5f5',
        grey: '#808080',
        'grey-darken': '#070707',
      },
      screens: {
        ip: '320px', // iphone
        sm: '375px',
      },
      spacing: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
