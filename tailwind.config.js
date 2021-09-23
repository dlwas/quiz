const safeCss = ['btn', 'cursor-pointer', 'font-second', 'w-auto', 'flex', 'justify-center', 'items-center', 'px-6', 'py-2', 'text-base', 'uppercase', 'bg-grey-darken', 'rounded-full', 'bg-gradient-to-tr', 'from-pink-darken', 'to-pink', 'inline', 'w-4', 'h-4', 'm-2', 'text-grey', 'text-xs', 'text-center', 'z-3', 'p-4', 'flex-none', 'w-10', 'flex-grow', 'text-xl', 'text-gold', 'w-6', 'h-6', 'flex-col', 'gap-y-2', 'flex-wrap', 'gap-5', 'h-3/4', 'justify-between', 'my-16', 'tracking-wide', 'font-main', 'sm:text-6xl', 'ip:text-5xl', 'mx-2', 'gap-y-6', 'z-1', 'fixed', 'w-screen', 'h-screen', 'm-0', 'absolute', 'place-content-center', 'w-full', 'h-full', 'max-w-screen-sm']

// https://arraythis.com/
// .split(' ').reduce((unique,item)=>(unique.includes(item)?unique:[...unique,item]),[])

module.exports = {
  purge: {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    safelist: safeCss,
    keyframes: true,
    fontFace: true,
  },
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'main': 'Poppins, sans-serif',
        'second': 'Open Sans, sans-serif',
      },
      colors: {
        'pink': '#A12568',
        'pink-darken': '#3B185F',
        'gold': '#FEC260',
        'white': '#f5f5f5',
        'grey': '#808080',
        'grey-darken': '#070707',
      },
      screens: {
        'ip': '320px',
        'sm': '375px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
