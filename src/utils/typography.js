import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.25,
  bodyFontFamily: ["Source Sans Pro", "serif"],
  googleFonts: [
    {
      name: "Lora",
      styles: ["700"],
    },
    {
      name: "Source Sans Pro",
      styles: ["400", "400i", "600", "700"],
    },
  ],
})

export default typography
