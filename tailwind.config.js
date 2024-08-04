/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "dist/**/*.{js,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', 'Arima', 'MedievalSharp', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

