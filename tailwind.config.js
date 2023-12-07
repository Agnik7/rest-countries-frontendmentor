/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'light-bg': "hsl(0, 0%, 98%)",
        'dark-bg': "hsl(207, 26%, 17%)"
      }
    },
  },
  plugins: [],
}

