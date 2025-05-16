/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066CC',
          dark: '#004C99',
        },
        secondary: {
          DEFAULT: '#1E293B',
          light: '#334155',
        },
        accent: {
          DEFAULT: '#00CC99',
          dark: '#009973',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 