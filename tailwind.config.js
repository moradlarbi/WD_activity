/** @type {import('tailwindcss').Config} */
function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: withOpacityValue("--color-white"),
        bg: "#F5F5F5",
      },
      gridTemplateColumns: {
        "minMax": "repeat(auto-fit, minmax(400px, 1fr))",
      },
    },
  },
  plugins: [],
}
