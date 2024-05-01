/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./services.html",
    "./header.js",
    "./poligraphy.html",
    "./pechati_shtampi.html",
    "./reklama.html",
    "./souvenirs.html",
    "./contacts.html",
    "./theme.js"
  ],
  theme: {
    extend: {
      colors: {
        color1: "#386899",
        color2: "#4d6798",
        color3: "#4e5a70",
        color4: "#A5C882",
        color5: "#F7DD72",
      },
      boxShadow: {
        'base': '0 0 14px 0 rgba(0,0,0,0.25)',
        'hover': '0 0 20px 0 rgba(0,0,0,0.28)',
      }
    },
  },
  plugins: [],
}