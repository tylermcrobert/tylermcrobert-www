import { useContext } from "react"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { CaseStudy, CaseStudyPicker } from "components"
import ErrorPage from "next/error"
import Cookies from "js-cookie"
import { DataCtx } from "./_app"

const useCheck = (uids: string[]): [boolean, number] => {
  const router = useRouter()
  const route = router.query.page.toString()

  const index = uids.indexOf(route)
  const isMatch = index !== -1

  return [isMatch, index]
}

const CaseStudyPage: NextPage = () => {
  const { caseStudiesRes, ctxRes } = useContext(DataCtx)
  const csUids = caseStudiesRes.results.map(res => res.uid)
  const [isCaseStudy, csIndex] = useCheck(csUids)

  if (isCaseStudy) {
    return <CaseStudy data={caseStudiesRes.results[csIndex]} />
  }

  // if not a case study, check curation
  const curationUids = ctxRes.results.map(item => item.uid)
  const [isCuration, curationIndex] = useCheck(curationUids)

  if (isCuration) {
    const uid = curationUids[curationIndex]
    Cookies.set("curation", uid)
    return <CaseStudyPicker ctxUid={uid} />
  }

  return <ErrorPage statusCode={404} />
}

export default CaseStudyPage
