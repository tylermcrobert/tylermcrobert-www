import { useContext } from "react"
import { NextPage } from "next"
import { CaseStudy } from "components"
import ErrorPage from "next/error"
import { DataCtx } from "./_app"

interface IProps {
  uid: string
}

const CaseStudyPage: NextPage<IProps> = ({ uid }) => {
  const { caseStudiesRes } = useContext(DataCtx)
  const uids = caseStudiesRes.results.map(res => res.uid)
  const index = uids.indexOf(uid)
  const isMatch = index !== -1

  if (isMatch) {
    return <CaseStudy data={caseStudiesRes.results[index]} />
  }
  return <ErrorPage statusCode={404} />
}

CaseStudyPage.getInitialProps = async ctx => {
  return { uid: ctx.query.casestudy.toString() }
}

export default CaseStudyPage
