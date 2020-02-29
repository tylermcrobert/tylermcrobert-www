import { useContext } from "react"
import { NextPage } from "next"
import { CaseStudy } from "components"
import ErrorPage from "next/error"
import { DataCtx } from "./_app"

interface IProps {
  csUid: string
}

const CaseStudyPage: NextPage<IProps> = ({ csUid }) => {
  const { caseStudiesRes } = useContext(DataCtx)
  const uids = caseStudiesRes.results.map(res => res.uid)
  const index = uids.indexOf(csUid)
  const isMatch = index !== -1

  if (isMatch) {
    return <CaseStudy data={caseStudiesRes.results[index]} />
  }
  return <ErrorPage statusCode={404} />
}

CaseStudyPage.getInitialProps = async ctx => {
  const csUid = typeof ctx.query.csUid === "string" ? ctx.query.csUid : ""
  return { csUid }
}

export default CaseStudyPage
