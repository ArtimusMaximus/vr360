/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'mainFont': ['Old Standard TT', 'serif']
    },
    extend: {},
    backgroundImage: {
      "squares": "url('/src/images/inflicted.png')"
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["wireframe", "business", "light", "dark", "luxury"]
  }
}
