/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'mainFont': ['Old Standard TT', 'serif']
    },
    extend: {},
    backgroundImage: {
      "squares": "url('/src/images/inflicted.png')",
      "tiles": "url('/src/images/batthern.png')",
      "mohagany": "url('/src/images/mahogany.jpg')",
      "slate": "url('/src/images/slate_bg.png')",
      "alum": "url('/src/images/brushed-alum.png')",
      "mp": "url('/src/images/mp_2.png')",
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["wireframe", "business", "light", "dark", "luxury"]
  }
}
