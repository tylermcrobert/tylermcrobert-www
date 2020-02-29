import { useRef, createContext } from "react"
import App from "next/app"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "style/GlobalStyle"
import theme from "style/theme"
import { Nav } from "components"
import { IPrismicCaseStudyRes, IContextRes } from "types/Prismic"
import Prismic from "prismic-javascript"
import { Client } from "util/prismic"

export const DataCtx = createContext<{
  caseStudiesRes: IPrismicCaseStudyRes
  ctxRes: IContextRes
  currentCtxUid: string
}>({
  caseStudiesRes: null,
  ctxRes: null,
  currentCtxUid: "homepage",
})

const MyApp = ({
  Component,
  pageProps,
  caseStudiesRes,
  ctxRes,
}: {
  Component: any
  pageProps: any
  caseStudiesRes: IPrismicCaseStudyRes
  ctxRes: IContextRes
}) => {
  const caseStudiesResRef = useRef<IPrismicCaseStudyRes | null>(null)
  const ctxResRef = useRef<IContextRes | null>(null)

  if (!caseStudiesResRef.current) {
    caseStudiesResRef.current = caseStudiesRes
    ctxResRef.current = ctxRes
  }

  return (
    <DataCtx.Provider
      value={{
        caseStudiesRes: caseStudiesResRef.current,
        ctxRes: ctxResRef.current,
        currentCtxUid: "homepage",
      }}
    >
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Nav />
          <main>
            <Component {...pageProps} />
          </main>
        </>
      </ThemeProvider>
    </DataCtx.Provider>
  )
}

MyApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext) // keep this

  if (!process.browser) {
    const caseStudiesRes: IPrismicCaseStudyRes = await Client(
      appContext.ctx.req
    ).query(Prismic.Predicates.at("document.type", "case_study"), {})

    const ctxRes = await Client(appContext.ctx.req).query(
      Prismic.Predicates.at("document.type", "context"),
      {}
    )

    return { ...appProps, caseStudiesRes, ctxRes }
  }

  return {}
}

export default MyApp
