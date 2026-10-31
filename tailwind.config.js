/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f5f2',
          100: '#ddeae2',
          200: '#bcd7c7',
          300: '#93c5a5', // Tertiary from palette
          400: '#6ea684',
          500: '#587c63', // Secondary from palette
          600: '#41634d',
          700: '#344e3d',
          800: '#1d3b2e', // Primary brand color
          900: '#152b22',
          950: '#0b1712',
        },
        sage: {
          50: '#f4f7f4',
          100: '#e5ece6',
          200: '#cbdbce',
          300: '#a6c1aa',
          400: '#587c63',
          500: '#4a6b54',
          600: '#3a5442',
        },
        sand: {
          50: '#fdfcf9',
          100: '#f9f8f5', // Neutral from palette
          200: '#f2efe9', // Warm Beige from palette
          300: '#e5dfd3',
          400: '#cbbfab',
          500: '#b09f87',
        },
        charcoal: {
          50: '#f6f7f6',
          100: '#e2e5e3',
          200: '#c5cb6',
          400: '#758079',
          700: '#353e38',
          800: '#232b26',
          900: '#1a211c',
          950: '#0f1411',
        }
      },
      fontFamily: {
        sans: ['Cairo', 'IBM Plex Sans Arabic', 'Tajawal', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(29, 59, 46, 0.05)',
        'card': '0 8px 30px -4px rgba(29, 59, 46, 0.07)',
        'float': '0 20px 40px -10px rgba(29, 59, 46, 0.12)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      }
    },
  },
  plugins: [],
}
