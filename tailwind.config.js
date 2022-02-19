module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/*.html'],
  theme: {
    extend: {
      colors: {
        lightGray: {
          200: '#C4CACF',
          300: '#3C464F',
          400: '#374B5B',
          500: '#465D68',
          600: '#4C6070',
          700: '#424648',
          800: '#28333D',
          900: '#21272C',
        },
        lightGreen: {
          400: '#24DB6D',
          600: '#079741',
        },

        lightOrange: '#DB9D24',
        lightBlue: {
          400: '#067BD8',
          800: '#13324A',
        },
        backGround: '#08090C',
        borderColor: '#585858',
      },
      fontFamily: {
        belgrano: ['Belgrano', 'serif'],
        dmSans: ['DM Sans', 'sans - serif'],
        serifDisplay: ['DM Serif Display', 'serif'],
        montserrat: ['Montserrat', 'sans - serif'],
        poppins: ['Poppins', 'sans - serif'],
      },
    },
  },
  plugins: [],
}
