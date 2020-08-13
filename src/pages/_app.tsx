import { createContext } from "react"
import App from "next/app"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "style/GlobalStyle"
import theme from "style/theme"
import { Nav } from "components"
import {
  IPrismicCaseStudyRes,
  IContextRes,
  ISingleImage,
  IDoubleImage,
  ITripleImage,
  IWebsite,
} from "types/Prismic"
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

const EXAMPLE = {
  spans: [
    { start: 264, end: 265, type: "em" },
    { start: 362, end: 363, type: "em" },
  ],
  text:
    "Modern camera makers have an obvious problem: everyone has a fantastic camera in their pocket. A successful camera brand in the digital age is one that accepts this. This brand refresh of Fujifilm positions Fujifilm as the tool you bring for the important moments. The rebrand works with the evolution of the digital camera by preparing the photographer for that moment: the moment that needs to be captured right. The camera in your pocket is for everything else in between.",
}

const uploadImgUrl = (url: any) =>
  fetch(url)
    .then((res) => res.body)
    .then((buffer) => {
      client.assets.upload("image", buffer)
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
    caseStudiesData.results
      .map((result) =>
        result.data.cs_content
          .filter((content) => content.slice_type)
          .map(
            (website) =>
              ((website as unknown) as IWebsite).primary.browser_image?.url
          )
          .filter((url) => url)
      )
      .flat()
      .forEach((url) => uploadImgUrl(url))
  )
  caseStudiesData.results
    .filter((result) => result.uid !== "blank")
    .forEach((result) => {
      const converted = {
        date: new Date(result.first_publication_date),
        publishedAt: undefined,
        _id: result.id,
        _type: "caseStudy",
        title: `${asText(result.data.title)}`,
        slug: { current: result.uid },
        intro: (result.data.intro as any[]).map((item) => item.text)[0],
        deliverables: result.data.deliverables.split(", "),
        description: [
          {
            _key: "6db6b82f848f",
            _type: "block",
            children: [
              {
                _key: "6db6b82f848f0",
                _type: "span",
                marks: [],
                text: result.data?.description[0]?.text,
              },
            ],
            markDefs: [],
            style: "normal",
          },
        ],
      }

      // client
      //   .transaction()
      //   .createOrReplace(converted)
      //   .commit()
      //   .then((res) => {
      //     console.log(res, converted)
      //   })
    })

  return (
    <DataCtx.Provider
      value={{
        caseStudiesRes: caseStudiesData,
        ctxRes: ctxData,
      }}
    >
      <ThemeProvider theme={theme}>
        <>
          {/* <GlobalStyle />
          <Nav />
          <main>
            <Component {...pageProps} />
          </main> */}
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
