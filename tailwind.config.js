/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#22c55e', // Green
          dark: '#16a34a',
          light: '#4ade80',
        },
        secondary: {
          DEFAULT: '#f97316', // Orange
          dark: '#ea580c',
          light: '#fb923c',
        },
        accent: {
          DEFAULT: '#fbbf24', // Yellow
        },
      },
    },
  },
  plugins: [],
}

