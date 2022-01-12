module.exports = {
  mode : 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans : ['Barlow', 'sans-serif']
      },
      colors: {
        gray : {
          100 : '#E0E6E9',
          500: '#ABBBC2',
          700: '#393C49',
          900: '#1F1D2B',
          800: '#252836',
        },
        primary :'#7F1D1D',
        accent : {
          blue: '#65B0F6',
          orange: '#FFB572',
          red: '#FF7CA3',
          green: '#50D1AA',
          purple : '#9290FE'
        }
      },
      boxShadow : {
        error : '0px 8px 24px rgba(216, 118, 105, 0.4)',
        primary : '0px 8px 24px rgba(234, 124, 105, 0.32)',
        'inverse-top' : '4px 4px 0 #E0E5E7',
        'inverse-bottom' : '4px -4px 0 #E0E5E7'
      }
    },
  },
  plugins: [],
}
