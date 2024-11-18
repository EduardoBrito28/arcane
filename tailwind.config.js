/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      primary: '#5A55FD',
      secondary: '#D5D9FE'
    },
  },
  plugins: [],
}