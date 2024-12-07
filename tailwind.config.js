/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
      raleway:["Raleway"],
    },
    extend: {
      height: {
        web: 'calc(100vh - 6rem)',
      },
      colors: {
        "primary":"#234e8a",
        "customBlue": '#144f6d', 
        "custom-blue": '#8f90b5',
         'custom-teal': '#4ec6d1',

      },
    },
  },
  plugins: [],
}
