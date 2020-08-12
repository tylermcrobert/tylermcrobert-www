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

import sanityClient from "@sanity/client"

const client = sanityClient({
  projectId: "n1wxk3oc",
  dataset: "production",
  token:
    "sk1FVAGjsEGz1l0egzr4gY4SD6ZSEQ8wCPqrFJelnZvS27jNryBkavrUyon6iRYEN9IlzypYrLt0Ipqi8EAM3CeEaWIXxW60PvMNR4D5iJMyCd6ECeLKXfG6kGosmWV4I0uqEWbZxSdWA47WooqjjD5PuiLxyFdYMFbVGNSiS3BKYFAF1vBl", // or leave blank to be anonymous user
  useCdn: true, // `false` if you want to ensure fresh data
})

export const DataCtx = createContext<{
  caseStudiesRes: IPrismicCaseStudyRes
  ctxRes: IContextRes
}>({
  caseStudiesRes: null,
  ctxRes: null,
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
  const ctxData: IContextRes = useInitial(ctxRes)
  const caseStudiesData: IPrismicCaseStudyRes = useInitial(caseStudiesRes)

  console.log(
    caseStudiesData.results.forEach((result) => {
      console.log(result)
      // client.transaction().createOrReplace({
      //   _id: result.id,
      //   _type: "caseStudy",
      // })
    })
  )

  return (
    <DataCtx.Provider
      value={{
        caseStudiesRes: caseStudiesData,
        ctxRes: ctxData,
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

MyApp.getInitialProps = async (appContext) => {
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

  return { ...appProps }
}

export default MyApp
