import { createGlobalStyle, css } from 'styled-components'
import reset from 'styled-reset'
import { lineHeights, fontFamilies, colors, sizeVars } from 'style/theme'
import mq from './mq'

const style = css`
  :root {
    ${sizeVars};
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  html,
  body {
    line-height: ${lineHeights.body};
    font-family: ${fontFamilies.sansSerif};
    letter-spacing: 0.02em;
    background: ${colors.secondary};
    font-size: 18px;
    overscroll-behavior-y: none;

    @media ${mq.xs} {
      font-size: 19px;
    }
    @media ${mq.sm} {
      font-size: 20px;
    }
    @media ${mq.md} {
      font-size: 21px;
    }
    @media ${mq.lg} {
      font-size: calc(8px + 1vw);
    }
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    white-space: pre-line;
  }

  a {
    color: ${colors.primary};
    text-decoration: none;
  }

  em {
    font-style: italic;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: ${lineHeights.heading};
  }

  img,
  video {
    display: block;
    width: 100%;
  }
`

export const GlobalStyle = createGlobalStyle`
  ${reset};
  ${style};
  `
