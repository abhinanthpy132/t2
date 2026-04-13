/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nature: {
          blue: '#1E3A8A',
          aqua: '#22D3EE',
          green: '#10B981',
          white: '#FFFFFF',
          glass: 'rgba(255, 255, 255, 0.1)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
