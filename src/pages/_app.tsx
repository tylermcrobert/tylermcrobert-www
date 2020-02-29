import App from "next/app"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "style/GlobalStyle"
import theme from "style/theme"
import { Nav } from "components"

import Prismic from "prismic-javascript"
import { Client } from "util/prismic"

function MyApp({ Component, pageProps, caseStudiesRes }) {
  console.log(caseStudiesRes)
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext) // keep this

  if (process.browser) {
    return (window as any).__NEXT_DATA__.props.pageProps
  }

  const caseStudiesRes = await Client(appContext.ctx.req).query(
    Prismic.Predicates.at("document.type", "case_study"),
    {}
  )

  return { ...appProps, caseStudiesRes }
}

export default MyApp
