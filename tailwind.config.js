export default {
  darkMode: 'class',
  content: [
    './app.vue',
    './app/**/*.{vue,js,ts}',
    './layers/**/*.{vue,js,ts}',
    './shared/**/*.ts',
    './pages/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          400: '#34d1ae',
          500: '#1DB896', // primary actions
          600: '#0F9E80', // hover
        },
        dark: {
          950: '#030712', // page bg
          900: '#111827', // card bg
          800: '#1f2937', // input bg, borders
          700: '#374151', // dividers
        },
        light: {
          50: '#f9fafb', // page bg
          100: '#f3f4f6', // card bg
          200: '#e5e7eb', // borders
          300: '#d1d5db', // dividers
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
