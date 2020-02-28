// import App from 'next/app'
import { ThemeProvider } from "styled-components"
import GlobalStyle from "style/GlobalStyle"
import theme from "style/theme"
import { Nav, LargeHead } from "components"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Nav />

        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
