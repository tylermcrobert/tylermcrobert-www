/* eslint-disable @typescript-eslint/camelcase */
import { useContext } from "react"
import { NextPage } from "next"
import { IPrismicCaseStudyRes } from "types/api/PrismicApiCaseStudy"
import { CaseStudy } from "components"
import { DataCtx } from "./_app"

interface IProps {
  caseStudiesRes: IPrismicCaseStudyRes
}

const Home: NextPage<IProps> = () => {
  const { caseStudiesRes } = useContext(DataCtx)

  return (
    <div>
      {caseStudiesRes.results.map(item => (
        <CaseStudy data={item} key={item.id} />
      ))}
    </div>
  )
}

export default Home
