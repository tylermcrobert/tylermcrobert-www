import { createContext } from "react"
import App from "next/app"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "style/GlobalStyle"
import theme from "style/theme"
import { Nav } from "components"
import { IPrismicCaseStudyRes } from "types/api/PrismicApiCaseStudy"

import Prismic from "prismic-javascript"
import { Client } from "util/prismic"

export const DataCtx = createContext<{ caseStudiesRes: IPrismicCaseStudyRes }>({
  caseStudiesRes: null,
})

const MyApp = ({
  Component,
  pageProps,
  caseStudiesRes,
}: {
  Component: any
  pageProps: any
  caseStudiesRes: IPrismicCaseStudyRes
}) => {
  return (
    <DataCtx.Provider value={{ caseStudiesRes }}>
      <ThemeProvider theme={theme}>
        <div>
          <GlobalStyle />
          <Nav />
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      </ThemeProvider>
    </DataCtx.Provider>
  )
}

MyApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext) // keep this

  if (process.browser) {
    return (window as any).__NEXT_DATA__.props.pageProps
  }

  const caseStudiesRes: IPrismicCaseStudyRes = await Client(
    appContext.ctx.req
  ).query(Prismic.Predicates.at("document.type", "case_study"), {})

  return { ...appProps, caseStudiesRes }
}

export default MyApp
