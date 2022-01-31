module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "Source Sans Pro",
        ],
        heading: [
          "Hansief",
          "Inter",
          "Source Sans Pro",
        ]
      },
      letterSpacing: {
        widest: '.30em',
      }
    },
  },
  plugins: [],
}