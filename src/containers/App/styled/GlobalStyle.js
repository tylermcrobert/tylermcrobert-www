import { createGlobalStyle } from 'styled-components/macro';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    user-select: none;
  }

  @font-face {
    font-family: untitledSans;
    src: url('https://prismic-io.s3.amazonaws.com/tylermcrobert%2F19206687-b715-4225-a0d6-6e388954aba6_untitledsans-regular.woff');
  }

  html,
  body {
    height: 100%;
  }

  html {
    font-size: 18px;

    @media (max-width: 599px) {
      body {
        font-size: 16px;
      }
    }

    @media (min-width: 1200px) {
      body {
        font-size: 19px;
      }
    }

    @media (min-width: 1680px) {
      body {
        font-size: 22px;
      }
    }
  }

  body {
    background: #0f0f0f;
    color: #f6f6f6;
    font-family: untitledSans,helvetica,arial,sans-serif;
    font-weight: 400;
    line-height: 1.7;
  }

  a {
    color: #f6f6f6;
    text-decoration: none;
  }

  p {
    color: #6a6a6a;
    font-size: 1em;
    line-height: 1.5;
  }

  h1, h2 {
    line-height: 1.25;
  }
`;

export default GlobalStyle;
