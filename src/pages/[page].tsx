import { NextPage, GetStaticProps } from "next"
import { Client, getApi } from "util/prismic"
import Prismic from "prismic-javascript"
import { ICaseStudy, IContext } from "types/Prismic"
import { CaseStudy } from "components"
import Error from "next/error"
import Cookies from "js-cookie"

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

    return <div>curation</div>
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
