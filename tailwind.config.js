/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'primaryColor': '#FF5F5C'
      },
      backgroundImage: {
        'heroPattern': "url('src/assets/shapes/test.svg')"
        
      },
      backgroundSize: {
        '50': '50%'
    },
  },
  plugins: [],
}
}
