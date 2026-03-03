/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          start: '#E2E6EC',
          end: '#D9DDE6'
        },
        sidebar: {
          bg: '#F8F9FB',
        },
        card: {
          default: '#FFFFFF'
        },
        text: {
          primary: '#1A1D2B',
          secondary: '#64748B',
          accent: '#4F75FF'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
