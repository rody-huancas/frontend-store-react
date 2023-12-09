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
          100: "#355c7ds",
          300: "#242a55",
          900: "#181b38",
        },
      },
    },
  },
  plugins: [],
}

