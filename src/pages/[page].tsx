import { NextPage, GetStaticProps } from "next"
import { Client } from "util/prismic"
import Prismic from "prismic-javascript"
import { ICaseStudy } from "types/Prismic"
import { CaseStudy } from "components"

const CaseStudyPage: NextPage<{ csData: ICaseStudy }> = ({ csData }) => {
  return (
    <div>
      <CaseStudy data={csData} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const uid = params.page
  const csData = await Client().getByUID("case_study", uid.toString(), {})
  return { props: { csData } }
}

export const getStaticPaths = async () => {
  const uids = await Client()
    .query(Prismic.Predicates.at("document.type", "case_study"), {})
    .then(data => data.results.map(({ uid }) => uid))

  return {
    fallback: false,
    paths: uids.map(uid => ({ params: { page: uid } })),
  }
}

export default CaseStudyPage
