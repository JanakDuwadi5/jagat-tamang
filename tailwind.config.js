/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f8f4ef',
        ink: '#1a1a18',
        'warm-gray': '#8a8278',
        gold: '#c9a84c',
        'gold-light': '#e8d5a3',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}
