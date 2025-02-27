/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0183CE", 
        gray:"#757373",
        darkGray: "#676464"
      },
      fontFamily: {
        nunito: ['Nunito', 'serif'],
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '2rem',
        '2xl': '3rem',
      },
    },

  },
  plugins: [],
}

