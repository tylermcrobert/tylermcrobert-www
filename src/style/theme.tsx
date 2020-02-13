// eslint-disable-next-line no-unused-vars
import { DefaultTheme } from "styled-components"

const scale: number[] = [
  0.391,
  0.625,
  1,
  1.6,
  2.56,
  4.096,
  6.554,
  10.486,
  16.777,
  26.844,
]
const remScale: string[] = scale.map(item => `${item}rem`)

const theme: DefaultTheme = {
  scale,
  remScale,

  colors: {
    primary: "#000000",
    secondary: "#ffffff",
  },

  fontFamilies: {
    sansSerif: `helvetica, arial, sans-serif`,
    serif: `"SouvenirStd-light"`,
  },

  lineHeights: {
    body: 1.35,
    heading: 1.15,
  },

  margins: {
    standard: remScale[3],
    gutter: remScale[3],
  },

  sizes: {
    xl: 1900,
    lg: 1440,
    md: 1024,
    sm: 768,
    xs: 576,
  },
}

export default theme
