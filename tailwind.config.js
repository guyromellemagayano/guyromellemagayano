const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {},
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      stone: colors.stone,
      zinc: colors.zinc,
    },
  },
  variants: {
    animation: ["motion-safe"],
  },
  plugins: [require("@tailwindcss/forms")],
}
