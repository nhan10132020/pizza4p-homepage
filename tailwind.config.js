/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'img01': "url('./assets/image/img_01.webp')",
        'img02': "url('./assets/image/img_02.webp')",
        'img03':"url('./assets/image/img03.webp')",
        'bg-menu1':"url('./assets/image/bg_menu.webp')",
        'bg-menu2':"url('./assets/image/bg_menu_sp.webp')"
      }
    },
    screens:{
      md:'760px',
      lg:'1024px',
      xl:'1280px',
    }
    ,fontFamily:{
      'century' : ['CenturyStd-LightCondensed-VH', '"l serif"'],
      'atlas':["Atlas-Grotesk-Regular-VH", "sans-serif"]
    },
    backgroundPosition: {
      'image01-mobile': '0px -50px',
      'image01-ipad':'100px -80px'
    },
    keyframes:{
      center:{
        '0%': { transform: 'scale(0,1)',opacity:0 },
        '100%': { transform: 'scale(1,1)',opacity:1 },
      }
    },
    animation:{
      'underlineCenter':'center 0.3s ease'
    }
  },

  plugins: [ require('tailwind-scrollbar')],
}
