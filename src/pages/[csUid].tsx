import { useContext } from "react"
import { NextPage } from "next"
import { useRouter } from "next/router"

import { CaseStudy } from "components"
import ErrorPage from "next/error"
import { DataCtx } from "./_app"

const CaseStudyPage: NextPage = () => {
  const router = useRouter()
  const csRoute = router.query.csUid.toString()

  const { caseStudiesRes } = useContext(DataCtx)
  const uids = caseStudiesRes.results.map(res => res.uid)
  const index = uids.indexOf(csRoute)
  const isMatch = index !== -1

  if (isMatch) {
    return <CaseStudy data={caseStudiesRes.results[index]} />
  }
  return <ErrorPage statusCode={404} />
}

export default CaseStudyPage
