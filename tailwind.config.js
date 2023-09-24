/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'greenPrimary': '#0DA487',
        'greenDark': '#0E947A',
        'greenLight': '#D6F8F1',
        'background': '#FFF',
        'textDark': '#212529',
        'grayDark': '#4A5568',
        'grayLight': '#F8F8F8',
        'grayLight1': '#F3F5F9',
        'grayLight2': '#ECECEC',
        'redDark': '#FF7272',
        'redLight': '#FF727226',
        'orange': '#FFA53B'
      },
    },
  },
  plugins: [],
}