/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "xxsm":"320px",
      "xsm" :"375px",
      "sm":"425px",
      "mid":"500px",
      "md":"768px",
      "lg":"1024px",
      "xlg":"1440px",
      "xxlg":"2250"
    },
  },
  plugins: [],
}