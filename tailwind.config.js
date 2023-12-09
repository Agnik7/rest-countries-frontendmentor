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
      'xlg': '1240px',
      'xxlg': '1290px'
    },
    extend: {
      colors:{
        'light-bg': "hsl(0, 0%, 98%)",
        'dark-bg': "hsl(207, 26%, 17%)",
        'dark-elem': "hsl(209, 23%, 22%)"
      },
      fontFamily:{
        'nunito': ['Nunito Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}

