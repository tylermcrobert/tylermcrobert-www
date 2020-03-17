import { NextPage, GetStaticProps } from "next"
import { Client, getApi } from "util/prismic"
import Prismic from "prismic-javascript"
import { ICaseStudy, IContext } from "types/Prismic"
import { CaseStudy, CaseStudyPicker, Seo } from "components"
import Error from "next/error"
import Cookies from "js-cookie"
import { asText } from "util/richText"
import { UNICODE } from "../constants"

const CaseStudyPage: NextPage<{
  csData: ICaseStudy
  curationData: IContext
}> = ({ csData, curationData }) => {
  if (csData) {
    return (
      <>
        <CaseStudy data={csData} />
      </>
    )
  }

  if (curationData) {
    Cookies.set("curationId", curationData.uid)
    const title = `${asText(curationData.data.context_name)} ${
      UNICODE.X
    } Tyler McRobert`

    return (
      <>
        <Seo title={title} />
        <CaseStudyPicker curationData={curationData} />
      </>
    )
  }

  return <Error statusCode={404} />
}

export const getStaticProps: GetStaticProps = async ({
  previewData,
  params,
}) => {
  const uid = params.page.toString()
  const ref = previewData ? previewData.previewCookie : null

  const csData = await Client().getByUID("case_study", uid, {
    ref,
  })

  const curationData = await Client().getByUID("context", uid, {
    ref,
    fetchLinks: "case_study.title",
  })

  return {
    props: {
      csData: csData || null,
      curationData: curationData || null,
    },
  }
}

export const getStaticPaths = async () => {
  const getByType = async (type: string) =>
    Client()
      .query(Prismic.Predicates.at("document.type", type), {})
      .then(data => data.results.map(({ uid }) => uid))

  return {
    fallback: true,
    paths: [
      ...(await getByType("case_study")),
      ...(await getByType("context")),
    ].map(uid => ({ params: { page: uid } })),
  }
}

export default CaseStudyPage
