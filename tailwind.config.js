/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
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
