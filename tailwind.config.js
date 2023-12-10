/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#263686",
          300: "#242a55",
          900: "#181b38",
        },
        secondary: {
          100: '#f76f6d'
        }
      },
    },
  },
  plugins: [],
}

