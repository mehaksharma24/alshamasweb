/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#C8102E',
          'red-light': '#E8294A',
          'red-pale': '#FEF2F4',
          green: '#2D6A4F',
          'green-light': '#40916C',
          'green-pale': '#F0FAF5',
          orange: '#E87722',
          // CMYK 0 50 100 0
          'orange-deep': '#F7941D',
          // CMYK 0 25 50 0
          'orange-soft': '#FDBF87',
          // CMYK 85 30 25 0
          'blue-deep': '#0089A8',
          // CMYK 50 10 10 0
          'blue-soft': '#80C3D8',
          'orange-light': '#F5A04A',
          'orange-pale': '#FEF6EE',
          gold: '#c8a84b',
          'gold-pale': '#fdf8ec',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        script: ['Kaushan Script', 'cursive'],
        heading: ['Barlow', 'Arial', 'sans-serif'],
        display: ['Montserrat', 'Arial Black', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scroll-left': 'scrollLeft 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
