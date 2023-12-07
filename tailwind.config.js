/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xs': '500px',
      'xxs': '350px',
    },
    extend: {
      colors:{
        'light-bg': "hsl(0, 0%, 98%)",
        'dark-bg': "hsl(207, 26%, 17%)"
      },
      fontFamily:{
        'nunito': ['Nunito Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}

