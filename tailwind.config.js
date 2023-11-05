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
        'secoundaryColor':'#F0F0F8',
        'textColor': '#707070',
        'lightBorder':'#D9D9E5'

      },
      backgroundImage: {
        'heroPattern': "url('src/assets/shapes/HomePattern.svg')",
        'highlightedBg': "url('src/assets/shapes/HighlightedBg.svg')",
        'highlightedBgTablet': "url('src/assets/shapes/HighlightedBgTablet.svg')",
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
      'title-xs': ['18px', '28px'],
      'content': ['16px', '21px'],
      'content-md': ['13px', '17px'],
      'content-sm': ['11px', '15px'],
    },
    screens: {
  
      // => @media (min-width: 1px) { ... }
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
}

