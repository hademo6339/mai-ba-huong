/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './App.tsx',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        vogun: ['Vogun', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#004D40',
          dark: '#00332A',
          light: '#00695C',
        },
        accent: {
          DEFAULT: '#C4A980',
          light: '#D4BFA0',
          dark: '#A38B65',
        },
        gray: {
          100: '#F5F5F5',
          800: '#333333',
          text: '#555555',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

