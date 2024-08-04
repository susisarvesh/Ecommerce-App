/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        customGray: '#4F46E5',
        'neon-yellow': '#4F46E5',
        // 'neon-yellow-light': '#4F46E5',
      },
    },
  },
  plugins: [],
}