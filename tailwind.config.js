/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  

  theme: {
    screens: {
      null: "375px",

      sm: "480px",
      xlsm: "578px",
      smd: "676px",

      md: "768px",
      lg: "976px",

      xlg:"1172px",
      sxlg:"1192px",
      xxlg:"1245px",
      
      ssxl:'1340px',
      sxl:'1390px',
      xl: "1440px",
    },
    fontFamily: {
      sans: [
        "var(--font-plus-jakarta-sans)",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
   
    extend: {

       colors:{
      orange:'#FF5E00',
      drkyellow:'#FDCA05',
      purple:'#CC3C9D',
      skin:'#FFA3A1',
      topaz:'#0DB0B5',
      blue:'#0C68FF',
      liblue:'#97C4FD',
      liblack:'#1C1B1B',
      brown:'#AA634D',
      librown:'#8C6C59',
      lipet:'#EAAD94',
      grey:'#797979',
      ligrey:'#696969',
      txtlogin:'rgba(255, 255, 255, 0.6)',
      logingrey:'#9F9F9F',
      fadingcherry:'#FDFBF4',
      fadegrey:'rgba(0, 0, 0, 0.6)',

    },

    backgroundColor:{
      orange:'#FF5E00',
      drkyellow:'#FDCA05',
      nanyfade:'linear-gradient(180deg, rgba(253, 202, 5, 0.1) 0%, rgba(253, 202, 5, 0.46) 99.99%, rgba(253, 202, 5, 0.4) 100%)',
      nanybg:'#FFF9F6',
      petbg:'#FFFEFA',
      senbg:'#FFF4F0',
      specialbg:'#F0F6FF',
      brown:'#AA634D',
      librown:'#EAAD94',
      red:'#EA2E1F',
      inputbg:'#FAFCFF',
      green:'#63C154',
      grey:'rgba(28, 27, 27, 0.2)',
      ligrey:'#F0F0F0',

      purple:'#CC3C9D',
      topaz:'#0DB0B5',
      skin:'#FFA3A1',
      blue:'#0C68FF',
      liblue:'#97C4FD',
      midblue:'#2668F4',
      liyellow:'#FFFDF4',
      midblue:'#E8EEFF',
      pink:'#FF699F',
      yellowfader:'linear-gradient(90deg, #FFFDF4 0%, rgba(0, 0, 0, 0) 24%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 76%, #FFFDF4 100%)',
    },

   


    },
  },
  plugins: [require("daisyui")],
};
