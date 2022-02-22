module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#ff6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        },
        bgPrimary: '#3F65E0',
        bgSecondary: '#3751BF',
        borderPrimary: '#5BC7F5'
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}
