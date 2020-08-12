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
import { asText } from "util/richText"

const client = sanityClient({
  projectId: "n1wxk3oc",
  dataset: "production",
  token:
    "skZJNiayOonXZzxeIImk0M4oQ74v4HkSJXy4wcyY7LoqyA7z0tFcl5aGKNrWzpVv397WI4WWmiXWUEn6EKNTtFfsATj4bTntBNMM9VsLEvVe29j9TGT4rVowDbqcdAx4807K3DbVbT10DFA1nQEOCeLGo2SmbBcyXiAJ6e2YY2kcfuVLtelN", // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
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
      client
        .transaction()
        .createOrReplace({
          _id: result.id,
          _type: "caseStudy",
          title: asText(result.data.title),
          slug: { current: result.uid },
        })
        .commit()
        .then((res) => {
          console.log(res)
        })
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
