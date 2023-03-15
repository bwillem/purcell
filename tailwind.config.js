/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#a2bc4c66',
          medium: '#A2BC4C',
          DEFAULT: '#A2BC4C',
          dark: '#8D9E46',
        },
        primary: {
          light: '#A1A1A1',
          medium: '#363636',
          DEFAULT: '#363636',
          dark: '#1C1C1C',
        },
      },
    },
  },
  plugins: [],
}
