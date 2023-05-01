/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
        Primary:'#DF6751',
        Secondary:'#F8F9FB',
        BoldText:'#000000',
        NormalText:'#75797F',
        CardText:'#191D23',
        WhiteBoldText:'#FFFFFF',
        WhiteNormalText:'#EDEDED',
        white:'rgba(255, 255, 255, 1)',
        label:' #344054'
      },
      fontFamily:{
        Inter:['Inter', 'sans-serif'],
        Playfair:['Playfair Display', 'serif']
      },
    },

  plugins: [],
}

