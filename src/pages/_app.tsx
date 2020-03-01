import { createContext } from "react"
import App from "next/app"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "style/GlobalStyle"
import theme from "style/theme"
import { Nav } from "components"
import { IPrismicCaseStudyRes, IContextRes } from "types/Prismic"
import Prismic from "prismic-javascript"
import { Client } from "util/prismic"
import useInitial from "hooks/useInitial"

export const DataCtx = createContext<{
  caseStudiesRes: IPrismicCaseStudyRes
  ctxRes: IContextRes
  curationId?: string
}>({
  caseStudiesRes: null,
  ctxRes: null,
  curationId: null,
})

const MyApp = ({
  Component,
  pageProps,
  caseStudiesRes,
  ctxRes,
  curationId,
}: {
  Component: any
  pageProps: any
  caseStudiesRes: IPrismicCaseStudyRes
  ctxRes: IContextRes
  curationId?: string
}) => {
  const ctxData: IContextRes = useInitial(ctxRes)
  const caseStudiesData: IPrismicCaseStudyRes = useInitial(caseStudiesRes)

  return (
    <DataCtx.Provider
      value={{
        caseStudiesRes: caseStudiesData,
        ctxRes: ctxData,
        curationId,
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

const parseCookie = cookieStr =>
  Object.fromEntries(
    cookieStr.split("; ").map(c => {
      const [key, ...v] = c.split("=")
      return [key, v.join("=")]
    })
  )

MyApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext) // keep this
  const { curation } = parseCookie(appContext.ctx.req.headers.cookie)

  if (!process.browser) {
    const caseStudiesRes: IPrismicCaseStudyRes = await Client(
      appContext.ctx.req
    ).query(Prismic.Predicates.at("document.type", "case_study"), {})

    const ctxRes = await Client(appContext.ctx.req).query(
      Prismic.Predicates.at("document.type", "context"),
      {}
    )

    return { ...appProps, caseStudiesRes, ctxRes, curationId: curation }
  }

  return { ...appProps, curationId: curation }
}

export default MyApp
