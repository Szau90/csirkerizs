/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'primaryColor': '#FF5F5C',
        'textColor': '#707070',
        'lightBorder':'#D9D9E5'

      },
      backgroundImage: {
        'heroPattern': "url('src/assets/shapes/HomePattern.svg')",
        'highlightedBg': "url('src/assets/shapes/HighlightedBg.svg')",
        'highlightedBgMobile': "url('src/assets/shapes/HighlightedBgMobile.svg')"
        
      },
      backgroundSize: {
        '50': '50%'
    },
    boxShadow: {
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.5)',
    },
    fontSize: {
      'title': ['35px', '45px'],
      'title-xl': ['23px', '45px'],
      'title-lg': ['28px', '38px'],
      'title-md': ['24px', '34px'],
      'title-sm': ['20px', '30px'],
      'content': ['16px', '21px'],
      'content-sm': ['11px', '15px'],
    }
  },
  plugins: [],
}
}
